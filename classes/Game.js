var Game = function (b, a, c, d, f, l, p, Q, h) {
    null == h && (h = !1);
    null == Q && (Q = !1);
    null == p && (p = !1);
    null == l && (l = 1);
    null == f && (f = !0);
    null == c && (c = !1);
    this.mouseWheelThing = !1;
    this.lastMouseDown = this.lastRightMouseDown = 0;
    this.treatingClickAsRightClick = this.isDoubleClick = this.isDoubleRightClick = !1;
    this.mouseD = this.rMouseD = 0;
    this.bgPlaying = this.shifting = !1;
    this.bgFrame = 0;
    this.loadedSkinFrames = new haxe.ds.StringMap();
    this.skinLoadingCallbacks = new haxe.ds.StringMap();
    this.portalling = !1;
    this.endOfFrameTasks = [];
    this.hasMoved = this.hasJumped = this.hasMined = !1;
    this.secondsSinceAnimationStart = this.secondsUntilAnimationEnd = this.secondsSinceEndOfAnimation = this.scavengerSequenceFireworksSecond = this.scavengerSequenceFireworksSecondOffset = this.tutorialFrame = this.tutorialTimerIn = this.tutorialTimerOut = 0;
    this.scavengerStartedEndSfx = !1;
    this.scavengerLastItemRevealed = -1;
    this.scavengerIntroCountdownSeconds = 4;
    this.scavengerStartAnimationEnded = !1;
    this.lastAirBarBubble = this.popLastAirBarBubble = 0;
    this.wasMouseOverInventoryButton = !1;
    this.hotbarSlots = [];
    this.touchPad1Pressed = this.touchPad2Pressed = this.touchPad3Pressed = this.touchPad4Pressed = this.touchButtonPressed1 = this.touchButtonPressed2 = this.touchButtonPressed3 = !1;
    this.touchButtonPosition3 = new lemongine.Point();
    this.touchButtonPosition2 = new lemongine.Point();
    this.touchButtonPosition1 = new lemongine.Point();
    this.touchPadPosition = new lemongine.Point();
    this.touchScale = 1;
    this.touchControlsMatrix = new lemongine.Matrix4();
    this.inventoryButtonBounds = new lemongine.Rectangle();
    this.hotbarBounds = new lemongine.Rectangle();
    this.enchantBookTypesList = "Caps Shirts Pants Shoes Pickaxes Axes Shovels Swords FishingRods Bows".split(" ");
    this.effectData = new haxe.ds.StringMap();
    this.potionData = new haxe.ds.StringMap();
    this.itemMessageText = "";
    this.itemMessageCountdown = 0;
    this.currentlyMiningBlock = [-1E3, -1E3];
    this.currentlyMining = "";
    this.ranWorldLogicOnce = !1;
    this.renamedBalloons = new haxe.ds.StringMap();
    this.animate = 1;
    this.armorOffsets = [{
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }];
    this.characterArmorRenderers = [];
    this.charColor = [];
    this.characterColorTransform = [1, 1, 1, 1, 0, 0, 0, 0];
    this.characterSkinVisible = !0;
    this.characterRotation = this.characterFrameTimer = this.characterFrameNumber = this.characterWalkAnimation = 0;
    this.characterCurrentFrame = this.characterXScale = 1;
    this.characterMatrix = new lemongine.Matrix4();
    this.characterQuad = 0;
    this.blockAtFeet = this.blockAtLegs = this.blockAtHead = this.standingOn1 = this.standingOn2 = "";
    this.blockX = this.blockY = 0;
    this.wasSprinting = !1;
    this.leftSprinting = this.rightSprinting = 0;
    this.doThunder = this.keysX = !1;
    this.bowDrawbackBowQuad = this.bowDrawbackX = this.bowDrawbackY = 0;
    this.bowDrawbackFrame = "1";
    this.interactLock = 0;
    this.isShiftClickAndContinue = this.waitTillMouseIsUp = this.waitTillRightMouseIsUp = this.stopMiningAnimation = !1;
    this.screenTilter = 0;
    this.playingRainSound = !1;
    this.startUnderwaterTimer = 0;
    this.miningAnimation = !1;
    this.transformMobs = new haxe.ds.StringMap();
    this.upKey = this.sneaking = !1;
    this.jumpTimer = this.visibility = this.rainVol = this.rainPan = this.airTimer = 0;
    this.eatingAnimation = this.bowAnimation = !1;
    this.itemUseAnimationSelectedItemType = "";
    this.itemUseAnimationTimer = this.itemUseAnimationSelectedItem = -1;
    this.generateEnder = this.generateNether = this.finishedNether = this.inRoom = this.snowyRegion = !1;
    this.gCMTimer = 15;
    this.rotAngle = 0;
    this.soundCarousel = new haxe.ds.StringMap();
    this.hudToggle = !0;
    this.signLastShowed = !1;
    this.signAlpha = 0;
    this.signText = "";
    this.bossBarFrame = 1;
    this.achievementMessage = "";
    this.achievementsEntityFrame = 1;
    this.lastRightTooltipItemsShown = this.rightTooltipItems = null;
    this.bottomTooltipInventorySlots = new haxe.ds.StringMap();
    this.bottomTooltipSlotPositions = new haxe.ds.StringMap();
    this.lastTooltipRecipeShown = null;
    this.effectIconLabels = "poison slowness speed weakness nightvision regeneration hunger invisibility jumpboost strength fireresistance waterbreathing".split(" ");
    this.loadedEffectIcons = new haxe.ds.StringMap();
    this.effectIcons = [];
    this.hurtAnimation = this.takeScreenshot = this.isScavenger = this.mouseCaptured = !1;
    this.timeUntilNextBiome = this.deepness = 0;
    this.noWater = !0;
    this.atHeight = 58;
    this.lastWorldHeight = this.slope = this.currentY = this.currentX = 0;
    this.oddStoneFrequency = this.topazFrequency = this.reach = 4;
    this.goldFrequency = 3;
    this.diamondFrequency = 2;
    this.gravelFrequency = 1;
    this.redstoneFrequency = 5;
    this.coalIronFrequency = 15;
    this.placeDelay = this.distanceX = 0;
    this.closeRains = [[0, 0]];
    this.caves = [];
    this.cantMove = !1;
    this.liquids = ["wr", "la", "ad"];
    this.canReach = !1;
    this.selectedBlockPoint = new lemongine.Point();
    this.lastSelectedBlock = new lemongine.Point();
    this.mouseWorldPosition = new lemongine.Point();
    this.particles = new haxe.ds.StringMap();
    this.entityPools = new haxe.ds.StringMap();
    this.renderChunks = new haxe.ds.StringMap();
    this.musicCountdown = 0;
    this.ENDING = null;
    this.timeDarkness = [.3, .2, .1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .1, .2, .3, .4, .5, .6, .6, .6, .6, .6, .6, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .7, .6, .6, .6, .6, .6, .6, .5, .4];
    this.darkness = 0;
    this.zoom = 30;
    this.camera = new lemongine.Point(500, -120);
    this.saveWarning = 0;
    this.defeatedEnder = this.firstTime = !1;
    this.generatingWorld = 0;
    this.pawsedWasManuallySet = this.showPauseScreenOnNextFrame = this.making = !1;
    this.world = b;
    b.player.game = this;
    this.scene = a;
    this.isScavenger = h;
    this.blockSelector = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.blockSelector, Textures.blockTextures, Textures.getTexture("select", "far"));
    this.blockSelector.isTransparent = !0;
    this.blockSelector.layer = -2;
    this.miningCracks = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.miningCracks, Textures.blockTextures, Textures.getTexture("break", "4"));
    this.miningCracks.isTransparent = !0;
    this.miningCracks.layer = -2;
    lemongine.AssetManager.getImage("reticle").set_premultiplied(!1);
    this.reticlePlus = new lemongine.Entity([], lemongine.Geom.createQuad(12, 12), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.reticlePlus, lemongine.AssetManager.getImage("reticle"), new lemongine.Rectangle(0, 0, 12, 12));
    this.reticlePlus.isTransparent = !0;
    this.reticleLine = new lemongine.Entity([], lemongine.Geom.createQuad(50, 4), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.reticleLine, lemongine.AssetManager.getImage("reticle"), new lemongine.Rectangle(12, 4, 50, 4));
    this.reticleLine.isTransparent = !0;
    this.vectorRenderer = new lemongine.ImageVector(a.get_width(), a.get_height(), 0);
    this.vectorEntity = new lemongine.Entity([], lemongine.Geom.createQuad(), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.vectorEntity, this.vectorRenderer);
    this.vectorEntity.transform.reset().translate(.5, .5).scale(a.get_width(), a.get_height());
    this.vectorEntity.isTransparent = !0;
    this.vectorEntity.layer = -1;
    h = shader.GradientRadialMultiple.getShader();
    var B = new haxe.ds.StringMap(),
        M = lemongine.Mathz.repeatArray([1], 24);
    B.h.colori = M;
    M = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
    B.h.coloro = M;
    M = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
    B.h.position = M;
    this.worldGradientEntity = new lemongine.QuadPoolEntity(null, null, h, B);
    this.worldGradientEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.worldGradientEntity.isTransparent = !0;
    this.worldGradientEntity.layer = 3;
    this.lighting = new Lighting(this);
    this.clouds = new Clouds(this, b);
    this.console = new Console(a, !0, 7);
    h = Textures.blockTextures;
    a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    B = new haxe.ds.StringMap();
    M = lemongine.Mathz.repeatArray([1], 24);
    B.h.color = M;
    M = lemongine.Mathz.repeatArray([0], 24);
    B.h.colorOffset = M;
    this.particleEntity = new lemongine.QuadPoolEntity(h, null, a, B);
    this.particleEntity.isTransparent = !0;
    this.particleEntity.layer = 0;
    this.spawnskinTextureManager = new SkinTextureManager(this);
    this.initSky();
    this.initEffects();
    this.initPotionData();
    this.resetEffectIcons();
    this.generateRecipes();
    this.loadWorld = !c;
    this.generateItemNumberTexture();
    this.inventario = new Inventory(this, b);
    this.blackScreen = new screens.Menu_Pause(this);
    this.musicCountdown = Main.Instance.get_fps() * (120 * Math.random() + 240) | 0;
    this.resize();
    c && (this.firstTime = !0, this.initializeWorldGen(d, f, l, p, Q));
    null != window.gameplayStart && window.gameplayStart();
};
m.Game = Game
Game.__name__ = "Game"
Game.wordWrap = function (b, a, c, d) {
    null == d && (d = 0);
    for (var f = !0, l = b.split("\r"), g = "", Q = 0, k = 0, h = l.length; k < h;) for (var n = k++, m = 0; m < l[n].length;) {
        for (var T = -1, x = 0;;) {
            ++T;
            if (l[n].length < m + T) if (l[n].length >= m + T && x < c) continue;else break;
            var t = b.charAt(m + T);
            if (!Object.prototype.hasOwnProperty.call(a.glyphs.h, t)) if (l[n].length >= m + T && x < c) continue;else break;
            x += a.glyphs.h[t].backOffset;
            if (!(l[n].length >= m + T && x < c)) break;
        }
        --T;
        x = !1;
        if (l[n].length > m + T) for (t = T; 1 < t;) {
            if (" " == HxOverrides.substr(l[n], m + t, 1)) T = t, x = !0;else if (x) break;
            --t;
        }
        f || (g += "\n");
        g += HxOverrides.substr(l[n], m, T);
        ++Q;
        if (0 < d && Q >= d) return g;
        m += T + (x ? 1 : 0);
        f = !1;
    }
    return g;
}
Game.hasExtras = function (b, a) {
    if (null == a) return !0;
    null == b && (b = new haxe.ds.StringMap());
    for (var c = Object.keys(a.h), d = c.length, f = 0; f < d;) {
        var l = c[f++];
        if (b.h[l] != a.h[l]) return !1;
    }
    return !0;
}
Game.emptyItem = function () {
    return ["air", 0, 0, Game.makeDynamicMap(new haxe.ds.StringMap())];
}
Game.item = function (b, a, c, d) {
    null == c && (c = 0);
    null == a && (a = 1);
    null == d && (d = new haxe.ds.StringMap());
    return Game.makeDynamicArray([b, a, c, d]);
}
Game.isEmptyItem = function (b) {
    return null == b || null == b[0] || "" == b[0] || "air" == b[0] || "na" == b[0] || 1 > b[1] ? !0 : !1;
}
Game.migrateDampening = function (b) {
    return Math.sqrt(b);
}
Game.migrateAcc = function (b, a) {
    return b / 2 / (1 + Math.sqrt(a));
}
Game.migrateSpeed = function (b) {
    return b / 2;
}
Game.angleBetweenVectors = function (b, a) {
    b.normalize();
    a.normalize();
    return Math.acos(b.x * a.x + b.y * a.y);
}
Game.uniqueID = function (b, a) {
    null == a && (a = "");
    do var c = a + (Math.random() * lemongine.Mathz.MAX_INT() | 0); while (null != b.h[c]);
    return c;
}
Game.parseCommandObject = function (b) {
    for (var a = new haxe.ds.StringMap(), c = "start", d = "", f = "", l = ["{"], p = [a], Q = 0, k = 0; k < b.length;) {
        var h = HxOverrides.substr(b, k, 1);
        if ("start" == c) {
            if (" " == h) {
                ++k;
                continue;
            }
            if ("{" != h) return [-1, "invalid object"];
            c = "name";
        } else if ("name" == c) {
            if (0 == d.length) {
                if (" " == h) {
                    ++k;
                    continue;
                } else if ("}" == h) {
                    if (l.pop(), p.pop(), 0 == l.length) {
                        Q = k;
                        break;
                    } else "[" == l[l.length - 1] ? c = "array" : "{" == l[l.length - 1] && (c = "object");
                } else {
                    if (-1 == "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_".indexOf(h)) return [-1, "name can not start with '" + h + "'"];
                    d += h;
                }
            } else if (" " == h) c = "colon", f = d, d = "";else if (":" == h) c = "value type", f = d, d = "";else {
                if (-1 == "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".indexOf(h)) return [-1, "unexpected '" + h + "' in name"];
                d += h;
            }
        } else if ("colon" == c) {
            if (" " == h) {
                ++k;
                continue;
            } else if (":" == h) c = "value type";else return [-1, "expected colon"];
        } else if ("number" == c) {
            if (" " == h) "[" == l[l.length - 1] ? (p[p.length - 1].push(parseFloat(d)), d = "", c = "array") : (c = js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap), d = parseFloat(d), c.h[f] = d, d = "", c = "object");else if ("," == h) "[" == l[l.length - 1] ? (p[p.length - 1].push(parseFloat(d)), d = "", c = "value") : (c = js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap), d = parseFloat(d), c.h[f] = d, d = "", c = "name");else if ("]" == h) {
                if ("[" == l[l.length - 1]) p[p.length - 1].push(parseFloat(d)), d = "", l.pop(), p.pop(), "[" == l[l.length - 1] ? c = "array" : "{" == l[l.length - 1] && (c = "object");else return [-1, "unexpected ] in number"];
            } else if ("}" == h) {
                if ("{" == l[l.length - 1]) {
                    if (h = js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap), d = parseFloat(d), h.h[f] = d, d = "", l.pop(), p.pop(), 0 == l.length) {
                        Q = k;
                        break;
                    } else "[" == l[l.length - 1] ? c = "array" : "{" == l[l.length - 1] && (c = "object");
                } else return [-1, "unexpected } in number"];
            } else if (-1 != "0123456789".indexOf(h)) d += h;else if ("." == h) d += h;else return [-1, "unexpected '" + h + "' in number"];
        } else if ("value type" == c) {
            if (" " == h) {
                ++k;
                continue;
            } else if ("'" == h) c = "string'";else if ('"' == h) c = 'string"';else if ("t" == h.toLowerCase()) {
                if ("true" == HxOverrides.substr(b, k, 4).toLowerCase()) "[" == l[l.length - 1] ? (p[p.length - 1].push(!0), c = "array") : (js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = !0, c = "object"), k += 3;else return [-1, "unexpected '" + h + "'"];
            } else if ("f" == h.toLowerCase()) {
                if ("false" == HxOverrides.substr(b, k, 5).toLowerCase()) "[" == l[l.length - 1] ? (p[p.length - 1].push(!1), c = "array") : (js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = !1, c = "object"), k += 4;else return [-1, "unexpected '" + h + "'"];
            } else if (-1 != "0123456789".indexOf(h) || "-" == h) d = h, c = "number";else if ("[" == h) js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = [], p.push(js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f]), l.push("["), c = "value";else if ("{" == h) js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = new haxe.ds.StringMap(), p.push(js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f]), l.push("{"), c = "name";else return [-1, "expected ', \", [, or {, or number"];
        } else if ("value" == c) {
            if (" " == h) {
                ++k;
                continue;
            } else if ("'" == h) c = "string'";else if ('"' == h) c = 'string"';else if ("t" == h.toLowerCase()) {
                if ("true" == HxOverrides.substr(b, k, 4).toLowerCase()) p[p.length - 1].push(!0), c = "array", k += 3;else return [-1, "unexpected '" + h + "'"];
            } else if ("f" == h.toLowerCase()) {
                if ("false" == HxOverrides.substr(b, k, 5).toLowerCase()) p[p.length - 1].push(!1), c = "array", k += 4;else return [-1, "unexpected '" + h + "'"];
            } else if ("[" == h) "[" == l[l.length - 1] ? (p[p.length - 1].push([]), p.push(js.Boot.__cast(p[p.length - 1], Array)[p[p.length - 1].length - 1 | 0])) : (js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = [], p.push(js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f])), l.push("["), c = "value";else if ("{" == h) "[" == l[l.length - 1] ? (p[p.length - 1].push(new haxe.ds.StringMap()), p.push(js.Boot.__cast(p[p.length - 1], Array)[p[p.length - 1].length - 1 | 0])) : (js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = new haxe.ds.StringMap(), p.push(js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f])), l.push("{"), c = "name";else if (-1 != "0123456789".indexOf(h) || "-" == h) d = h, c = "number";else return [-1, "expected ', \", or number"];
        } else if ("object" == c) {
            if (" " == h) {
                ++k;
                continue;
            } else if ("," == h) c = "name";else if ("}" == h) l.pop(), p.pop(), 0 == l.length ? (Q = k, k = b.length) : "[" == l[l.length - 1] ? c = "array" : "{" == l[l.length - 1] && (c = "object");else return [-1, "expected , or }"];
        } else if ("array" == c) {
            if (" " == h) {
                ++k;
                continue;
            } else if ("," == h) c = "value";else if ("]" == h) l.pop(), p.pop(), "[" == l[l.length - 1] ? c = "array" : "{" == l[l.length - 1] && (c = "object");else return [-1, "expected , or ]"];
        } else if ("string'" == c) {
            h = "nothing";
            var n = b.length - 1;
            0 < b.indexOf("'", k) && b.indexOf("'", k) < n && ("\\" == HxOverrides.substr(b, b.indexOf("'", k) - 1, 1) ? (h = "\\'", n = b.indexOf("\\'", k)) : (h = "'", n = b.indexOf("'", k)));
            0 < b.indexOf('\\"', k) && b.indexOf('\\"', k) < n && (h = '\\"', n = b.indexOf('\\"', k));
            0 < b.indexOf("\\\\", k) && b.indexOf("\\\\", k) < n && (h = "\\\\", n = b.indexOf("\\\\", k));
            "'" == h ? (d += HxOverrides.substr(b, k, n - k | 0), k = n, "[" == l[l.length - 1] ? (p[p.length - 1].push(d), d = "", c = "array") : (js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = d, d = "", c = "object")) : "\\'" == h ? (d += HxOverrides.substr(b, k, n - k | 0) + "'", k = n + 1) : '\\"' == h ? (d += HxOverrides.substr(b, k, n - k | 0) + '"', k = n + 1) : "\\\\" == h && (d += HxOverrides.substr(b, k, n - k | 0) + "\\", k = n + 1);
        } else 'string"' == c && (h = "nothing", n = b.length - 1, 0 < b.indexOf('"', k) && b.indexOf('"', k) < n && ("\\" == HxOverrides.substr(b, b.indexOf('"', k) - 1, 1) ? (h = '\\"', n = b.indexOf('\\"', k)) : (h = '"', n = b.indexOf('"', k))), 0 < b.indexOf("\\'", k) && b.indexOf("\\'", k) < n && (h = "\\'", n = b.indexOf("\\'", k)), 0 < b.indexOf("\\\\", k) && b.indexOf("\\\\", k) < n && (h = "\\\\", n = b.indexOf("\\\\", k)), '"' == h ? (d += HxOverrides.substr(b, k, n - k | 0), k = n, "[" == l[l.length - 1] ? (p[p.length - 1].push(d), d = "", c = "array") : (js.Boot.__cast(p[p.length - 1], haxe.ds.StringMap).h[f] = d, d = "", c = "object")) : '\\"' == h ? (d += HxOverrides.substr(b, k, n - k | 0) + '"', k = n + 1) : "\\'" == h ? (d += HxOverrides.substr(b, k, n - k | 0) + "'", k = n + 1) : "\\\\" == h && (d += HxOverrides.substr(b, k, n - k | 0) + "\\", k = n + 1));
        ++k;
    }
    return 0 < l.length ? "[" == l[l.length - 1] ? [-1, "unbalanced [ at end"] : [-1, "unbalanced { at end"] : [Q + 1, a];
}
Game.makeDynamicMap = function (b) {
    return b;
}
Game.makeDynamicArray = function (b) {
    return b;
}
Game.makeArrayOfDynamicMaps = function (b) {
    return b;
}
Game.prototype = {
    stringToSeed: function (b) {
        var a = Math.floor(parseFloat(b));
        if ((0 != a || 0 == parseFloat(b)) && !isNaN(a) && -Infinity < a && Infinity > a) return a;
        for (var c = a = 0, d = b.length; c < d;) {
            var f = c++;
            haxe.Log.trace(HxOverrides.cca(b, f) * (f + 1), {
                fileName: "src/Game.hx",
                lineNumber: 116,
                className: "Game",
                methodName: "stringToSeed"
            });
            a += HxOverrides.cca(b, f) * (f + 1);
        }
        return a;
    },
    getRandom: function () {
        this.seed = lemongine.Mathz.modulus(9301 * this.seed + 49297, 233280);
        return this.seed / 233280;
    },
    randomNumber: function (b, a) {
        return Math.floor(b + (a - b + 1) * this.getRandom());
    },
    getDifficultyNumber: function () {
        return "peaceful" == this.world.difficulty ? 0 : "easy" == this.world.difficulty ? 1 : "normal" == this.world.difficulty ? 2 : "hard" == this.world.difficulty ? 3 : 2;
    },
    get_pawsed: function () {
        return this.isScavenger && !this.scavengerStartAnimationEnded ? !0 : this.pawsedWasManuallySet;
    },
    set_pawsed: function (b) {
        return this.isScavenger && !this.scavengerStartAnimationEnded ? b : this.pawsedWasManuallySet = b;
    },
    initializeWorldGen: function (b, a, c, d, f) {
        null == f && (f = !1);
        null == d && (d = !1);
        null == c && (c = 1);
        null == a && (a = !0);
        null == b && (b = Std.string(Math.floor(1E6 * Math.random())));
        this.seed = this.stringToSeed(b);
        1 == this.world.sceneNum && (this.world.seedNum = null == b ? "null" : "" + b, this.world.seed = this.seed);
        b = 0;
        for (var l = this.world.worldWidth + 5 + 1; b < l;) this.world.scene[b++] = [];
        1 == this.randomNumber(0, 3) ? this.biome = Game.biomes[0] : 1 == this.randomNumber(0, 3) ? this.biome = Game.biomes[1] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[2] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[3] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[4] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[5] : 1 != this.randomNumber(0, 3) ? this.biome = Game.biomes[0] : this.biome = Game.biomes[6];
        this.noWater = !0;
        this.timeUntilNextBiome = Math.floor(40 + this.randomNumber(0, 20));
        1 == this.world.sceneNum && (this.bonusChest = f, this.world.cheats = a, this.world.gameRules = new haxe.ds.StringMap(), this.world.gamemode = c, this.world.fly = !1, this.world.hardcore = d, this.world.difficulty = this.world.hardcore ? "hard" : "normal", this.defeatedEnder = !1);
        this.making = !1;
        this.generatingWorld = 1;
        this.lastWorldHeight = Math.floor(this.randomNumber(0, 9) + Math.round(.8 * this.world.worldHeight) - 10);
        this.slope = Math.floor(this.randomNumber(0, 2) - 1);
        this.currentY = Math.floor(this.lastWorldHeight);
        this.currentX = 0;
        this.atHeight = 58;
    },
    run: function () {
        this.isScavenger && this.set_pawsed(!1);
        this.get_pawsed() || this.vectorRenderer.clear();
        if (0 < this.endOfFrameTasks.length) {
            for (var b = 0, a = this.endOfFrameTasks; b < a.length;) a[b++]();
            this.endOfFrameTasks = [];
        }
        this.isScavenger && (null == this.scavengerItemsEntity && this.initScavengerUI(), this.scavengerStartAnimationEnded ? (this.secondsSinceEndOfAnimation = (new Date().getTime() - this.scavengerStartAnimationEndTime.getTime()) / 1E3, .5 > this.secondsSinceEndOfAnimation && (b = TextCache.get("scavengerAnimationCountdownShadow", "GO!", null, Fonts.get_volter(), lemongine.Color.black, 1, lemongine.TextAlignment.CENTER), a = 16 - 16 * lemongine.Mathz.interpolateExitSmoother(this.secondsSinceEndOfAnimation * this.secondsSinceEndOfAnimation * 4), b.transform.reset().translate(0, -5).scale2D(a).translate(this.scene.get_width() / 2 + 4 * Math.sin(this.world.tick / Main.Instance.get_fps() * 77 + 2), this.scene.get_height() / 2 + Math.sin(this.world.tick / Main.Instance.get_fps() * 93)), b.layer = 15, this.scene.draw(b), b = TextCache.get("scavengerAnimationCountdown", "GO!", null, Fonts.get_volter(), new lemongine.Color(-16711819), 1, lemongine.TextAlignment.CENTER), b.transform.reset().translate(0, -6).scale2D(a).translate(this.scene.get_width() / 2 + 4 * Math.sin(this.world.tick / Main.Instance.get_fps() * 77 + 2), this.scene.get_height() / 2 + Math.sin(this.world.tick / Main.Instance.get_fps() * 93)), b.layer = 16, this.scene.draw(b))) : this.renderScavengerIntroSequence());
        if (this.world.loadingWorld) this.blackScreen.statis = "Loading world...", this.blackScreen.loadingBar = 1, this.blackScreen.gotoAndStop(2), this.blackScreen.run();else if (0 != this.generatingWorld || this.making || this.generateEnder || this.generateNether) this.ef2(), this.blackScreen.gotoAndStop(2), this.blackScreen.run();else {
            2 == this.blackScreen.currentFrame && this.blackScreen.gotoAndStop(1);
            this.mouseCaptured = this.isMouseOverUI();
            this.inGame();
            .033 >= this.zoom && (this.zoom = .033);
            this.renderPlayer();
            this.renderSky();
            this.renderWorld();
            b = this.entityPools.h;
            a = Object.keys(b);
            for (var c = a.length, d = 0; d < c;) b[a[d++]].renderTo(this, this.scene);
            this.runParticles();
            this.scene.draw(this.vectorEntity);
            this.worldGradientEntity.transform.reset().translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
            this.scene.draw(this.worldGradientEntity);
            this.mouseWorldPosition.set((Main.Instance.mouse.x - this.scene.get_width() / 2) / this.zoom + this.camera.x, (Main.Instance.mouse.y - this.scene.get_height() / 2) / this.zoom + this.camera.y);
            this.get_pawsed() || (this.lastSelectedBlock.set(this.selectedBlockPoint.x, this.selectedBlockPoint.y), this.selectedBlockPoint.set(Math.floor(this.mouseWorldPosition.x), Math.floor(-this.mouseWorldPosition.y)));
            this.renderSelector();
            this.renderReticle();
            b = !1;
            this.selectedBlockPoint.x != this.lastSelectedBlock.x || this.selectedBlockPoint.y != this.lastSelectedBlock.y ? (null != this.world.getBlock(this.lastSelectedBlock.x, this.lastSelectedBlock.y) && this.world.getBlock(this.lastSelectedBlock.x, this.lastSelectedBlock.y).mouseOutEvent(), (this.canReach = lemongine.Mathz.distance(this.blockX - this.selectedBlockPoint.x, this.blockY + 1 - this.selectedBlockPoint.y) <= this.reach + 1) && null != this.world.getBlock(this.selectedBlockPoint.x, this.selectedBlockPoint.y) && this.world.getBlock(this.selectedBlockPoint.x, this.selectedBlockPoint.y).mouseOverEvent(), b = !0) : lemongine.Mathz.distance(this.blockX - this.selectedBlockPoint.x, this.blockY + 1 - this.selectedBlockPoint.y) <= this.reach + 1 != this.canReach && (this.canReach = lemongine.Mathz.distance(this.blockX - this.selectedBlockPoint.x, this.blockY + 1 - this.selectedBlockPoint.y) <= this.reach + 1, null != this.world.getBlock(this.selectedBlockPoint.x, this.selectedBlockPoint.y) && (this.canReach ? this.world.getBlock(this.selectedBlockPoint.x, this.selectedBlockPoint.y).mouseOverEvent() : this.world.getBlock(this.selectedBlockPoint.x, this.selectedBlockPoint.y).mouseOutEvent()), b = !0);
            b && (this.canReach ? this.blockSelector.setUniform("texClip", Textures.getTexture("select", "break").toArray()) : this.blockSelector.setUniform("texClip", Textures.getTexture("select", "far").toArray()));
            this.lighting.update();
            this.clouds.update();
            this.renderVignette();
            10 == this.inventario.currentFrame && this.console.renderHistory(new lemongine.Point(25, this.scene.get_height() - 103), this.scene.get_width() - 50, 12);
            this.console.update(this.hudToggle && 10 != this.inventario.currentFrame, this.get_pawsed());
            this.isScavenger && (null != this.scavengerPlayersScene && null != this.scavengerPlayers && (this.scavengerPlayersScene.clear(), this.scavengerPlayers.renderTo(this, this.scavengerPlayersScene), this.scavengerPlayersScene.render(), this.scene.draw(this.scavengerPlayersEntity)), this.renderScavengerUI());
            this.renderTutorial();
            this.hudToggle && (this.renderHUD(), Main.Instance.volumeAndClose(), this.renderAchievementMessage(), this.renderEffectIcons(), this.renderBossBar());
            this.renderSign();
            this.inventario.update();
            1 == this.blackScreen.currentFrame && this.takeScreenshot && (this.takeScreenshot = !1, this.scene.render(), this.set_pawsed(!0), this.blackScreen.setScreenshot(this.scene.get_image()), this.blackScreen.gotoAndStop(7));
            this.blackScreen.run();
            this.showPauseScreenOnNextFrame && (this.showPauseScreenOnNextFrame = !1, 1 == this.blackScreen.currentFrame && this.get_pawsed() && this.blackScreen.gotoAndStop(3));
        }
    },
    initEffectsIcons: function () {
        this.effectIconsEntity = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("effects"));
        this.effectIconsEntity.layer = 16;
        this.effectIconsEntity.transform.reset();
        this.effectIconsEntity.isTransparent = !0;
    },
    resetEffectIcons: function () {
        null == this.effectIconsEntity && this.initEffectsIcons();
        this.effectIconsEntity.clearPool();
        this.loadedEffectIcons = new haxe.ds.StringMap();
        this.effectIcons = [];
        for (var b = Object.keys(this.world.effects.h), a = b.length, c = 0; c < a;) {
            var d = b[c++];
            if (!Object.prototype.hasOwnProperty.call(this.loadedEffectIcons.h, d) && 1 == this.world.effects.h[d].h.showIcon) {
                this.loadedEffectIcons.h[d] = this.effectIcons.length;
                var f = new haxe.ds.StringMap();
                f.h.type = d;
                f.h.duration = this.world.effects.h[d].h.duration;
                this.effectIcons.push(Game.makeDynamicMap(f));
            }
        }
        this.effectIcons.sort(function (a, b) {
            return b.h.duration - a.h.duration;
        });
        f = 0;
        for (b = this.effectIcons.length; f < b;) {
            var l = f++;
            this.effectIconsEntity.addQuad(new lemongine.Vector3(this.scene.get_width() - 73 - 28 * l - 12, 3), new lemongine.Point(0, 48), new lemongine.Point(24, 24));
            a = this.effectIconsEntity;
            c = this.scene.get_width() - 73 - 28 * l - 8;
            d = this.effectIconLabels.indexOf(this.effectIcons[l].h.type) % 4 * 16;
            l = 16 * Math.floor(this.effectIconLabels.indexOf(this.effectIcons[l].h.type) / 4);
            a.addQuad(new lemongine.Vector3(c, 7), new lemongine.Point(d, l), new lemongine.Point(16, 16));
        }
        this.effectIconsEntity.resetUnusedQuads();
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
    renderEffectIcons: function () {
        if (0 == this.inventario.currentFrame && !GlobalSave.hideGUI && null != this.effectIconsEntity) {
            this.scene.draw(this.effectIconsEntity);
            for (var b = 0, a = this.effectIcons.length; b < a;) {
                var c = b++;
                new lemongine.Rectangle(this.scene.get_width() - 73 - 28 * c - 12, 3, 24, 24).contains(Main.Instance.mouse.x, Main.Instance.mouse.y) && this.showBottomTooltip(Std.string(this.effectData.h[this.effectIcons[c].h.type].h.name) + " " + Std.string(this.world.effects.h[this.effectIcons[c].h.type].h.level) + " - " + this.secondsToString(this.world.effects.h[this.effectIcons[c].h.type].h.duration));
            }
        }
    },
    initTooltipRecipe: function () {
        null == this.bottomTooltipCraftingEntitySmall && (this.bottomTooltipCraftingEntitySmall = lemongine.AssetManager.getImage("inventory_crafting").toEntity(), this.bottomTooltipCraftingEntitySmall.isTransparent = !0, this.bottomTooltipCraftingEntitySmall.layer = 56);
        null == this.bottomTooltipCraftingEntityBig && (this.bottomTooltipCraftingEntityBig = lemongine.AssetManager.getImage("inventory_craftingtable").toEntity(), this.bottomTooltipCraftingEntityBig.isTransparent = !0, this.bottomTooltipCraftingEntityBig.layer = 56);
        null == this.bottomTooltipCraftingEntityFurnace && (this.bottomTooltipCraftingEntityFurnace = lemongine.AssetManager.getImage("inventory_furnace").toEntity(), this.bottomTooltipCraftingEntityFurnace.isTransparent = !0, this.bottomTooltipCraftingEntityFurnace.layer = 56);
        if (null == this.bottomTooltipSlotsEntity) {
            var b = lemongine.AssetManager.getImage("ui"),
                a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.bottomTooltipSlotsEntity = new lemongine.QuadPoolEntity(b, null, a, c);
            this.bottomTooltipSlotsEntity.isTransparent = !0;
            this.bottomTooltipSlotsEntity.layer = 57;
            b = Textures.blockTextures;
            a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
            c = new haxe.ds.StringMap();
            d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.bottomTooltipItemsEntity = new lemongine.QuadPoolEntity(b, null, a, c);
            this.bottomTooltipItemsEntity.isTransparent = !0;
            this.bottomTooltipItemsEntity.layer = 58;
            this.bottomTooltipItemNumbersEntity = new lemongine.QuadPoolEntity(this.itemNumberTexture);
            this.bottomTooltipItemNumbersEntity.isTransparent = !0;
            this.bottomTooltipItemNumbersEntity.layer = 59;
        }
    },
    showBottomTooltip: function (b, a, c, d) {
        null == c && (c = RECIPE_TYPE.NONE);
        null == a && (a = "");
        null == this.bottomTooltipEntity && this.initBottomTooltip();
        b = TextCache.get("bottomTooltip", b, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 1.625, lemongine.TextAlignment.LEFT, 1);
        b.layer = 56;
        var f = new lemongine.Point(Math.max(19, 13 * b.calculatedWidth / 8 / 2 + 8), 13 * b.calculatedHeight / 8 / 2 + 8),
            l = null;
        "" != a && (l = TextCache.get("bottomTooltipSmall", a, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.LEFT, 1), l.layer = 56, f.x = Math.max(f.x, l.calculatedWidth / 2 + 8), f.y += l.calculatedHeight / 2 + 4);
        c == RECIPE_TYPE.SMALL_CRAFTING ? (f.x = Math.max(f.x, 70), f.y += 45) : c == RECIPE_TYPE.BIG_CRAFTING && (f.x = Math.max(f.x, 85), f.y += 60);
        a = new lemongine.Point(Math.min(this.scene.get_width() - 16, Main.Instance.mouse.x) - 2 * f.x + 28, Main.Instance.mouse.y);
        if (c != RECIPE_TYPE.NONE) {
            if (d != this.lastTooltipRecipeShown) {
                this.lastTooltipRecipeShown = d;
                this.initTooltipRecipe();
                this.bottomTooltipSlotPositions.h = Object.create(null);
                for (var g = 0, Q = d.length; g < Q;) {
                    var B = g++;
                    null != d[B] && (B == d.length - 1 ? c == RECIPE_TYPE.SMALL_CRAFTING ? this.bottomTooltipSlotPositions.h.recipeOut = {
                        x: 78,
                        y: -19,
                        item: null == d[B] ? Game.emptyItem() : d[B]
                    } : c == RECIPE_TYPE.BIG_CRAFTING && (this.bottomTooltipSlotPositions.h.recipeOut = {
                        x: 95,
                        y: -34,
                        item: null == d[B] ? Game.emptyItem() : d[B]
                    }) : c == RECIPE_TYPE.SMALL_CRAFTING ? this.bottomTooltipSlotPositions.h["recipeIn" + B] = {
                        x: B % 2 * 34,
                        y: 34 * Math.floor(B / 2) - 36,
                        item: null == d[B] ? Game.emptyItem() : d[B]
                    } : c == RECIPE_TYPE.BIG_CRAFTING && (this.bottomTooltipSlotPositions.h["recipeIn" + B] = {
                        x: B % 3 * 34 - 17,
                        y: 35 * Math.floor(B / 3) - 69,
                        item: null == d[B] ? Game.emptyItem() : d[B]
                    }));
                }
                d = Object.keys(this.bottomTooltipInventorySlots.h);
                g = d.length;
                for (Q = 0; Q < g;) {
                    B = d[Q++];
                    this.bottomTooltipInventorySlots.h[B].remove();
                    var rb = this.bottomTooltipInventorySlots;
                    Object.prototype.hasOwnProperty.call(rb.h, B) && delete rb.h[B];
                }
                d = Object.keys(this.bottomTooltipSlotPositions.h);
                g = d.length;
                for (Q = 0; Q < g;) {
                    B = d[Q++];
                    rb = this.bottomTooltipInventorySlots;
                    var M = new ItemSlot(this.bottomTooltipSlotsEntity, this.bottomTooltipItemsEntity, this.bottomTooltipItemNumbersEntity, this.bottomTooltipSlotPositions.h[B].x, this.bottomTooltipSlotPositions.h[B].y, 1.6716900000000001, this, this.world, this.bottomTooltipSlotPositions.h[B].item, null);
                    rb.h[B] = M;
                }
            }
            c == RECIPE_TYPE.SMALL_CRAFTING ? (this.bottomTooltipCraftingEntitySmall.transform.reset().scale2D(1.718).translate(Math.floor(a.x + f.x), Math.floor(a.y + 2 * f.y - 50)), this.scene.draw(this.bottomTooltipCraftingEntitySmall)) : c == RECIPE_TYPE.BIG_CRAFTING && (this.bottomTooltipCraftingEntityBig.transform.reset().scale2D(1.718).translate(Math.floor(a.x + f.x), Math.floor(a.y + 2 * f.y - 65)), this.scene.draw(this.bottomTooltipCraftingEntityBig));
            this.bottomTooltipSlotsEntity.transform.reset().translate(Math.floor(a.x + f.x - 40), Math.floor(a.y + 2 * f.y - 32));
            this.bottomTooltipItemsEntity.transform.reset().scale2D(17.5067175).translate(Math.floor(a.x + f.x - 40), Math.floor(a.y + 2 * f.y - 32));
            this.bottomTooltipItemNumbersEntity.transform.reset().translate(Math.floor(a.x + f.x - 40), Math.floor(a.y + 2 * f.y - 32));
            this.scene.draw(this.bottomTooltipSlotsEntity);
            this.scene.draw(this.bottomTooltipItemsEntity);
            this.scene.draw(this.bottomTooltipItemNumbersEntity);
        } else this.lastTooltipRecipeShown = null;
        this.bottomTooltipEntity.update9Slice(0, new lemongine.Rectangle(0, 0, f.x, f.y), new lemongine.Rectangle(19, 112, 19, 8), new lemongine.Rectangle(2, 5, 1, 1));
        this.bottomTooltipEntity.transform.reset().scale2D(2).translate(a.x, a.y);
        this.scene.draw(this.bottomTooltipEntity);
        b.transform.reset().scale2D(1.625).translate(a.x + 8, a.y + 12);
        this.scene.draw(b);
        null != l && (l.transform.reset().translate(a.x + 8, a.y + 12 + 13 * b.calculatedHeight / 8 + 4), this.scene.draw(l));
    },
    initRightTooltip: function () {
        if (null == this.rightTooltipEntity) {
            var b = lemongine.AssetManager.getImage("ui"),
                a = shader.BlockShader.getShader(),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.rightTooltipEntity = new lemongine.QuadPoolEntity(b, null, a, c);
            this.rightTooltipEntity.isTransparent = !0;
            this.rightTooltipEntity.layer = 55;
            this.rightTooltipEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
        }
    },
    initRightTooltipItems: function () {
        var b = Textures.blockTextures,
            a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
            c = new haxe.ds.StringMap(),
            d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.rightTooltipItemsEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.rightTooltipItemsEntity.isTransparent = !0;
        this.rightTooltipItemsEntity.layer = 58;
    },
    showRightTooltip: function (b, a, c) {
        null == this.rightTooltipEntity && this.initRightTooltip();
        var d = null;
        "" != b && (d = TextCache.get("rightTooltip", b, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 1.625, lemongine.TextAlignment.LEFT, 1), d.layer = 56);
        b = new lemongine.Point(Math.max(Math.max(19, null == d ? 0 : 13 * d.calculatedWidth / 8 / 2), null == c ? 0 : 16 * ScavengerManager.items.length / 2) + 12, (null == d ? 0 : (13 * d.calculatedHeight / 8 + 8) / 2) + (null == c ? 0 : 12) + 4);
        a = new lemongine.Point(a.x - 2 * b.x, a.y - 16);
        this.rightTooltipEntity.clearPool();
        this.rightTooltipEntity.update9Slice(0, new lemongine.Rectangle(0, 0, b.x, b.y), new lemongine.Rectangle(38, 112, 8, 13), new lemongine.Rectangle(2, 10, 1, 1));
        this.rightTooltipEntity.transform.reset().scale2D(2).translate(a.x, a.y);
        if (null != c) {
            if (c != this.lastRightTooltipItemsShown) {
                this.lastRightTooltipItemsShown = c;
                this.initRightTooltipItems();
                if (null != this.rightTooltipItems) {
                    b = 0;
                    for (var f = this.rightTooltipItems; b < f.length;) f[b++].destroy();
                }
                if (null == c) this.rightTooltipItems = null;else for (this.rightTooltipItems = [], b = 0, f = c.length; b < f;) {
                    var l = b++;
                    this.rightTooltipItems.push(new Item(this.rightTooltipItemsEntity, l, 0, this, null == c[l] || null == ScavengerManager.items[l] ? Game.item("air") : ScavengerManager.items[l].item));
                }
            }
            b = 0;
            for (f = ScavengerManager.items.length; b < f;) l = b++, null == c[l] ? this.rightTooltipEntity.addQuad(new lemongine.Vector3((15 + 16 * l) / 2, ((null == d ? 0 : 13 * d.calculatedHeight / 8 + 8) + 15) / 2), new lemongine.Point(57, 236), new lemongine.Point(3, 3), !0, new lemongine.Point(1.5, 1.5)) : null == ScavengerManager.items[l] ? this.rightTooltipEntity.addQuad(new lemongine.Vector3((11.5 + 16 * l) / 2, ((null == d ? 0 : 13 * d.calculatedHeight / 8 + 8) + 9.5) / 2), new lemongine.Point(66, 223), new lemongine.Point(12, 16), !0, new lemongine.Point(6, 8)) : this.rightTooltipItems[l].render();
            this.rightTooltipItemsEntity.transform.reset().scale2D(16).translate(Math.floor(a.x + 8), Math.floor((null == d ? 0 : 13 * d.calculatedHeight / 8 + 8) + a.y + 8));
            this.scene.draw(this.rightTooltipItemsEntity);
        } else this.lastRightTooltipItemsShown = null;
        this.rightTooltipEntity.resetUnusedQuads();
        this.scene.draw(this.rightTooltipEntity);
        null != d && (d.transform.reset().scale2D(1.625).translate(a.x + 8, a.y + 8), this.scene.draw(d));
    },
    initAchievementsMessage: function () {
        this.achievementsEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
        this.achievementsEntity.layer = 7;
        this.achievementsEntity.transform.reset().translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 151 + G.toFloat(lemongine.AssetManager.getImage("sign").height) / G.toFloat(2));
        this.achievementsEntity.isTransparent = !0;
    },
    renderAchievementMessage: function () {
        if (this.isScavenger) this.achievementsEntityFrame = 1;else if (1 < this.achievementsEntityFrame) {
            null == this.achievementsEntity && this.initAchievementsMessage();
            if (120 > this.achievementsEntityFrame) {
                2 == this.achievementsEntityFrame && (lemongine.shader.BasicTextureSingle.setupEntity(this.achievementsEntity, lemongine.AssetManager.getImage("achievements"), new lemongine.Rectangle(0, 0, 190, 43)), this.achievementsEntity.transform.reset().translate(.5, .5).scale(228, 51.6).translate(5, 5));
                this.scene.draw(this.achievementsEntity);
                var b = TextCache.get("achievementsTitle", "Achievement get!", new lemongine.Point(), Fonts.get_volter(), lemongine.Color.black, 1.511111111111111, lemongine.TextAlignment.CENTER, 1.5);
                b.layer = 8;
                b.transform.reset().scale2D(1.511111111111111).translate(121, 13);
                this.scene.draw(b);
                b = TextCache.get("achievementsMessage", this.achievementMessage, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-16738048), 1.511111111111111, lemongine.TextAlignment.LEFT, 1.5);
                b.layer = 8;
                b.transform.reset().scale2D(1.511111111111111).translate(14, 34);
            } else 120 == this.achievementsEntityFrame && (lemongine.shader.BasicTextureSingle.setupEntity(this.achievementsEntity, lemongine.AssetManager.getImage("achievements"), new lemongine.Rectangle(0, 43, 150, 23)), this.achievementsEntity.transform.reset().translate(.5, .5).scale(180, 27.599999999999998).translate(7, 7)), this.scene.draw(this.achievementsEntity), b = TextCache.get("achievementsTitle", "Press " + Std.string(GlobalSave.keyBindings.h.tasks.h.name) + " for tasks", new lemongine.Point(), Fonts.get_volter(), lemongine.Color.black, 1.511111111111111, lemongine.TextAlignment.CENTER, 1.5), b.layer = 8, b.transform.reset().scale2D(1.511111111111111).translate(97, 15);
            this.scene.draw(b);
            this.achievementsEntityFrame++;
            200 < this.achievementsEntityFrame && (this.achievementsEntityFrame = 1);
        }
    },
    initBossBar: function () {
        this.bossBarEntity = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("boss_bar"));
        this.bossBarEntity.layer = 5;
        this.bossBarEntity.transform.reset();
        this.bossBarEntity.isTransparent = !0;
        this.bossBarEntity.transform.reset().scale2D(3).translate(this.scene.get_width() / 2, 30);
    },
    renderBossBar: function () {
        if (1 < this.bossBarFrame) {
            null == this.bossBarEntity && this.initBossBar();
            this.bossBarEntity.updateQuad(0, new lemongine.Vector3(-50, -2, 0), new lemongine.Point(0, 5), new lemongine.Point(100, 5));
            var b = this.bossBarFrame - 1;
            this.bossBarEntity.updateQuad(1, new lemongine.Vector3(-50, -2, 0), new lemongine.Point(), new lemongine.Point(b, 5));
            b = TextCache.get("bossTextShadow", "Boss Health", new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-16777216), 1, lemongine.TextAlignment.CENTER);
            b.layer = 5;
            b.transform.reset().scale2D(2).translate(this.scene.get_width() / 2 + 2, 5);
            this.scene.draw(b);
            b = TextCache.get("bossText", "Boss Health", new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-3407617), 1, lemongine.TextAlignment.CENTER);
            b.layer = 5;
            b.transform.reset().scale2D(2).translate(this.scene.get_width() / 2, 3);
            this.scene.draw(b);
            this.scene.draw(this.bossBarEntity);
        }
    },
    showSign: function (b) {
        this.signText = b;
        this.signAlpha = Math.min(1, this.signAlpha + .05);
        this.signLastShowed = !0;
    },
    initSign: function () {
        this.signEntity = lemongine.AssetManager.getImage("sign").toEntity();
        this.signEntity.layer = 7;
        this.signEntity.transform.reset().translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 151 + G.toFloat(lemongine.AssetManager.getImage("sign").height) / G.toFloat(2));
        this.signEntity.isTransparent = !0;
    },
    renderSign: function () {
        this.signLastShowed || (this.signAlpha = Math.max(0, this.signAlpha - .05));
        this.signLastShowed = !1;
        if (0 < this.signAlpha) {
            null == this.signEntity && this.initSign();
            this.signEntity.setUniform("color", [1, 1, 1, this.signAlpha]);
            var b = TextCache.get("signTextShadow", this.signText, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(16777216 * Math.floor(255 * this.signAlpha) + 13665846), 1, lemongine.TextAlignment.CENTER);
            b.layer = 8;
            b.setWordWrap(127);
            b.transform.reset().scale2D(2).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 151 + 7);
            this.scene.draw(b);
            b = TextCache.get("signText", this.signText, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(16777216 * Math.floor(255 * this.signAlpha)), 1, lemongine.TextAlignment.CENTER);
            b.layer = 9;
            b.setWordWrap(127);
            b.transform.reset().scale2D(2).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 151 + 6);
            this.scene.draw(b);
            this.scene.draw(this.signEntity);
        }
    },
    runParticles: function () {
        for (var b = this.particles.h, a = Object.keys(b), c = a.length, d = 0; d < c;) b[a[d++]].update();
        this.particleEntity.resetUnusedQuads();
        this.particleEntity.transform.reset().translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.scene.draw(this.particleEntity);
    },
    makeBlock: function (b, a) {
        this.reloadBlock(b, a);
    },
    openPauseMenu: function () {
        3 <= this.blackScreen.currentFrame ? (this.set_pawsed(!1), this.blackScreen.gotoAndStop(1)) : 0 != this.inventario.currentFrame ? this.inventario.requestClose() : (this.set_pawsed(!0), this.isScavenger ? this.blackScreen.gotoAndStop(3) : this.showPauseScreenOnNextFrame = !0);
    },
    openInventario: function () {
        1 == this.blackScreen.currentFrame && 0 == this.world.sleepingAnimation && (1 == this.world.gamemode ? this.inventario.gotoAndStop(7) : this.inventario.gotoAndStop(1));
    },
    rTA: function (b, a, c) {
        "air" != this.world.getFG(b, a) && "sl" != this.world.getFG(b, a) && "lv" != HxOverrides.substr(this.world.getFG(b, a), 0, 2) || this.world.setFG(b, a, c);
    },
    makeCavern: function (b, a, c) {
        for (var d = a - 1, f = 1; 9 > f;) {
            ++f;
            ++b;
            a += Math.floor(this.randomNumber(0, 2) - 1);
            for (var l = Math.floor(-this.randomNumber(0, 2)), g = Math.floor(this.randomNumber(1, 3) + 1); l < g;) for (var Q = l++, k = Math.floor(-this.randomNumber(0, 2)), h = Math.floor(this.randomNumber(1, 3) + 1); k < h;) {
                var n = k++;
                a + n <= d ? (this.world.setFG(b + Q, a + n, c), this.world.firstTimes.h["blockX" + (b + Q) + "Y" + (a + n)] = !0, this.world.water.h["blockX" + (b + Q) + "Y" + (a + n)] = [10, 10]) : a + n == d + this.randomNumber(0, 1) + 1 && "r" == this.world.getFG(b + Q, a + n) && this.world.setFG(b + Q, a + n, "air");
            }
        }
    },
    makeMine: function (b, a, c, d, f, l, g, Q) {
        null == g && (g = !1);
        null == l && (l = !0);
        this.world.setFG(b, a, f);
        1 == g ? (g = Math.floor(10 + 80 * this.randomNumber(0, 1)), Q = 50) : (g = Math.floor(this.randomNumber(0, 99)), Q = Math.floor(this.randomNumber(0, 99)));
        for (var p = 1; p <= Math.floor(d - 1);) {
            g >= this.randomNumber(0, 99) ? ++b : g <= this.randomNumber(0, 99) && --b;
            Q >= this.randomNumber(0, 99) ? ++a : Q <= this.randomNumber(0, 99) && --a;
            var k = 1;
            do {
                ++k;
                var h = Math.round(this.randomNumber(0, c - 1)),
                    n = Math.round(this.randomNumber(0, c - 1));
                "cy1" == f && "sd" == this.world.getFG(b + h, a + n) ? this.world.setFG(b + h, a + n, f) : ("air" == f || "dirt" != this.world.getFG(b + h, a + n) && "sd" != this.world.getFG(b + h, a + n) && "ss" != this.world.getFG(b + h, a + n)) && "lv" != this.world.getFG(b + h, a + n) && "wd1" != this.world.getFG(b + h, a + n + 1) && ("coral" == f || "wr" != this.world.getFG(b + h, a + n) && "wr" != this.world.getFG(b + h, a + n + 1) && "wr" != this.world.getFG(b + h, a + n + 2)) ? ("no" == l || "air" != this.world.getFG(b + h, a + n) && "wd" != this.world.getFG(b + h, a + n) && "lv" != this.world.getFG(b + h, a + n) && "lv1" != this.world.getFG(b + h, a + n) && "lv2" != this.world.getFG(b + h, a + n) && "lv3" != this.world.getFG(b + h, a + n) && "lv4" != this.world.getFG(b + h, a + n) && "fl1" != this.world.getFG(b + h, a + n) && "fl2" != this.world.getFG(b + h, a + n) && "ct" != this.world.getFG(b + h, a + n) && "sw" != this.world.getFG(b + h, a + n) && "coral" != this.world.getFG(b + h, a + n) && "ms" != this.world.getFG(b + h, a + n)) && this.world.setFG(b + h, a + n, f) : (k = Math.floor(c * c + 1), ++p);
            } while (k <= c * c);
            ++p;
        }
    },
    makeEnderMine: function (b, a) {
        for (var c = a; 0 <= c;) {
            for (var d = Math.round(.6 * -(a - c)) + b; d <= .6 * (a - c) + b;) this.world.setFG(d, c, "air"), ++d;
            --c;
        }
    },
    makeMobSpawner: function (b, a) {
        b -= 6;
        for (var c = Math.floor(this.randomNumber(0, 1)), d = -4 - c, f = 4 + c + 1; d < f;) {
            var l = d++;
            this.world.setFG(b + l, a, "ms");
            this.world.setFG(b + l, a + 1, "air");
            this.world.setFG(b + l, a + 2, "air");
            this.world.setFG(b + l, a + 3, "air");
            this.world.setFG(b + l, a + 4, "air");
            this.world.setFG(b + l, a + 5, "cs");
            if (l == -4 - c || l == 4 + c) this.world.setFG(b + l, a + 1, "cs"), this.world.setFG(b + l, a + 2, "cs"), this.world.setFG(b + l, a + 3, "cs"), this.world.setFG(b + l, a + 4, "cs");
        }
        1 == this.randomNumber(1, 4) ? (this.world.setFG(b - 3 - c, a + 1, "chest"), this.prizeChest(b - 3 - c, a + 1), this.world.setFG(b + 3 + c, a + 1, "chest"), this.prizeChest(b + 3 + c, a + 1)) : 0 != this.randomNumber(0, 1) ? (this.world.setFG(b - 3 - c, a + 1, "chest"), this.prizeChest(b - 3 - c, a + 1)) : (this.world.setFG(b + 3 + c, a + 1, "chest"), this.prizeChest(b + 3 + c, a + 1));
        this.world.setFG(b, a + 1, "mobSpawner");
    },
    makeGiantMushroom: function (b, a, c, d) {
        null == d && (d = !1);
        c = 1 == c ? [["msb4", 0, 0], ["msb4", 0, 1], ["msb4", 0, 2], ["msb4", 0, 3], ["msb4", 0, 4], ["msb3", 0, 5], ["msb3", 1, 5], ["msb3", 2, 5], ["msb3", 3, 5], ["msb3", -1, 5], ["msb3", -2, 5], ["msb3", -3, 5]] : [["msb2", 0, 0], ["msb2", 0, 1], ["msb2", 0, 2], ["msb2", 0, 3], ["msb2", 0, 4], ["msb1", 0, 5], ["msb1", 1, 5], ["msb1", 2, 5], ["msb1", -1, 5], ["msb1", -2, 5], ["msb1", -3, 4], ["msb1", 3, 4], ["msb1", -3, 3], ["msb1", 3, 3], ["msb1", -3, 2], ["msb1", 3, 2]];
        for (var f = 0, l = c.length; f < l;) {
            var g = f++;
            "air" == this.world.getFG(b + c[g][1] - 1, a + c[g][2] - 1) && (this.rTA(b + c[g][1] - 1, a + c[g][2] - 1, c[g][0]), d || this.makeBlock(b + c[g][1] - 1, a + c[g][2] - 1));
        }
    },
    makeTree: function (b, a, c, d) {
        null == d && (d = !1);
        null == c && (c = !1);
        var f = c ? Math.floor(this.randomNumber(1, 23) - 1) : Math.floor(23 * Math.random());
        d = d ? "lv3" : 13 > f ? "lv" : 16 > f ? "lv1" : 20 > f ? "lv2" : "lv4";
        f = !1;
        1 != c && (f = !0);
        this.rTA(b - 1, a, "wd1");
        this.rTA(b - 1, a + 1, "wd1");
        this.rTA(b - 1, a + 2, "wd1");
        this.rTA(b - 1, a + 3, "wd1");
        this.rTA(b - 1, a + 4, "wd1");
        f && (this.makeBlock(b - 1, a), this.makeBlock(b - 1, a + 1), this.makeBlock(b - 1, a + 2), this.makeBlock(b - 1, a + 3), this.makeBlock(b - 1, a + 4));
        if (0 != (c ? Math.floor(this.randomNumber(0, 1)) : Math.floor(2 * Math.random()))) for (var l = [[-2, 3], [0, 3], [-2, 4], [0, 4], [-3, 4], [1, 4], [-2, 5], [-3, 5], [-1, 5], [0, 5], [1, 5], [-1, 6], [0, 6], [-2, 6]], g = 0, Q = l.length; g < Q;) {
            var k = g++;
            "air" == this.world.getFG(b + l[k][0], a + l[k][1]) && (c ? 1 == this.randomNumber(0, 3) ? this.rTA(b + l[k][0], a + l[k][1], d) : this.rTA(b + l[k][0], a + l[k][1], "lv") : 1 == Math.floor(4 * Math.random()) ? this.rTA(b + l[k][0], a + l[k][1], d) : this.rTA(b + l[k][0], a + l[k][1], "lv"), f && this.makeBlock(b + l[k][0], a + l[k][1]));
        } else for (this.rTA(b - 1, a + 5, "wd1"), f && this.makeBlock(b - 1, a + 5), l = [[-2, 3], [0, 3], [-2, 4], [0, 4], [-3, 4], [1, 4], [-4, 5], [-3, 5], [-2, 5], [0, 5], [1, 5], [2, 5], [-1, 6], [-2, 6], [-3, 6], [-4, 6], [0, 6], [1, 6], [2, 6], [-1, 7], [-2, 7], [-3, 7], [0, 7], [1, 7], [-1, 8], [-2, 8], [0, 8]], g = 0, Q = l.length; g < Q;) k = g++, null == this.world.scene[b + l[k][0]] && (this.world.scene[b + l[k][0]] = []), "air" == this.world.getFG(b + l[k][0], a + l[k][1]) && (c ? 1 == this.randomNumber(0, 3) ? this.rTA(b + l[k][0], a + l[k][1], d) : this.rTA(b + l[k][0], a + l[k][1], "lv") : 1 == Math.floor(4 * Math.random()) ? this.rTA(b + l[k][0], a + l[k][1], d) : this.rTA(b + l[k][0], a + l[k][1], "lv"), f && this.makeBlock(b + l[k][0], a + l[k][1]));
    },
    sameExtras: function (b, a) {
        return this.deepCompare(b, a);
    },
    deepCompare: function (b, a) {
        if (null == b || "" == Std.string(b)) {
            if (null == a || "" == Std.string(a)) return !0;
            if ("Object" == lemongine.Helpers.getQualifiedClassName(a)) {
                for (var c = Object.keys(js.Boot.__cast(a, haxe.ds.StringMap).h).length; 0 < c;) return !1;
                return !0;
            }
            return "Array" == lemongine.Helpers.getQualifiedClassName(a) ? 0 < js.Boot.__cast(a, Array).length ? !1 : !0 : !1;
        }
        if (null == a || "" == Std.string(a)) {
            if ("Object" == lemongine.Helpers.getQualifiedClassName(b)) {
                for (c = Object.keys(js.Boot.__cast(b, haxe.ds.StringMap).h).length; 0 < c;) return !1;
                return !0;
            }
            return "Array" == lemongine.Helpers.getQualifiedClassName(b) ? 0 < js.Boot.__cast(b, Array).length ? !1 : !0 : !1;
        }
        if ("Object" != lemongine.Helpers.getQualifiedClassName(b) && "Array" != lemongine.Helpers.getQualifiedClassName(b)) return "Object" != lemongine.Helpers.getQualifiedClassName(a) && "Array" != lemongine.Helpers.getQualifiedClassName(a) ? b == a : !1;
        if ("Object" != lemongine.Helpers.getQualifiedClassName(a) && "Array" != lemongine.Helpers.getQualifiedClassName(a)) return !1;
        if ("Object" == lemongine.Helpers.getQualifiedClassName(b) && "Object" == lemongine.Helpers.getQualifiedClassName(a)) {
            var d = Object.keys(js.Boot.__cast(b, haxe.ds.StringMap).h);
            c = d.length;
            for (var f = 0; f < c;) {
                var l = d[f++];
                if (0 == this.deepCompare(js.Boot.__cast(b, haxe.ds.StringMap).h[l], js.Boot.__cast(a, haxe.ds.StringMap).h[l])) return !1;
            }
            d = Object.keys(js.Boot.__cast(a, haxe.ds.StringMap).h);
            c = d.length;
            for (f = 0; f < c;) if (l = d[f++], 0 == this.deepCompare(js.Boot.__cast(b, haxe.ds.StringMap).h[l], js.Boot.__cast(a, haxe.ds.StringMap).h[l])) return !1;
        } else if ("Array" == lemongine.Helpers.getQualifiedClassName(b) && "Array" == lemongine.Helpers.getQualifiedClassName(a)) {
            c = 0;
            for (d = js.Boot.__cast(b, Array).length; c < d;) if (l = c++, 0 == this.deepCompare(js.Boot.__cast(b, Array)[l], js.Boot.__cast(a, Array)[l])) return !1;
            c = 0;
            for (d = js.Boot.__cast(a, Array).length; c < d;) if (l = c++, 0 == this.deepCompare(js.Boot.__cast(b, Array)[l], js.Boot.__cast(a, Array)[l])) return !1;
        } else return !1;
        return !0;
    },
    hasEnchantment: function (b) {
        b = b.h;
        for (var a = Object.keys(b), c = a.length, d = 0; d < c;) if ("enchant" == b[a[d++]]) return !0;
        return !1;
    },
    blockSound: function (b, a, c, d) {
        "air" != this.world.getFG(b, a) && "wr" != this.world.getFG(b, a) && ("slimeb" == this.world.getFG(b, a) ? this.requestSound("slimeland" + (Math.floor(4 * Math.random()) + 1), c, d, 1, 1) : null != BlockData.get(this.world.getFG(b, a), "isStone") ? this.requestSound("stone", c, d, 1, 1) : null != BlockData.get(this.world.getFG(b, a), "isGrass") ? this.requestSound("crunch" + (Math.floor(3 * Math.random()) + 1), c, d, 1, 1) : null != BlockData.get(this.world.getFG(b, a), "isWood") ? this.requestSound("wood", c, d, 1, 1) : null != BlockData.get(this.world.getFG(b, a), "isMush") && this.requestSound("smush", c, d, 1, 1));
    },
    requestSound: function (b, a, c, d, f, l) {
        null == l && (l = 1);
        null == f && (f = 0);
        null == d && (d = 1);
        null == c && (c = 0);
        null == a && (a = 0);
        if (!Main.Instance.MUTED) {
            c = this.getVolumeToPlayer(a, c) * d;
            if (.002 > c) return null;
            Object.prototype.hasOwnProperty.call(this.soundCarousel.h, b) ? (d = this.soundCarousel.h[b] + 1, this.soundCarousel.h[b] = d, this.soundCarousel.h[b] = d % 5) : this.soundCarousel.h[b] = 0;
            f = Math.pow(2, (2 * Math.random() - 1) * f / 10) * l;
            if (null != lemongine.AssetManager.getSound(b + "_" + this.soundCarousel.h[b])) return lemongine.AssetManager.getSound(b + "_" + this.soundCarousel.h[b]).play(c, this.getPanToPlayer(a), 0, 0, 1, !0, f), lemongine.AssetManager.getSound(b + "_" + this.soundCarousel.h[b]);
            haxe.Log.trace("Warning: Could not find sound '" + b + "_" + this.soundCarousel.h[b] + "'", {
                fileName: "src/Game.hx",
                lineNumber: 1466,
                className: "Game",
                methodName: "requestSound"
            });
        }
        return null;
    },
    getVolumeToPlayer: function (b, a) {
        return GlobalSave.soundVol / 100 * Math.max(Math.min(100 - Math.sqrt(b * b + a * a) / .03333333333333333 / 4, 100) - 10 * this.deepness, 0) / 100;
    },
    getPanToPlayer: function (b) {
        return Math.max(-1, Math.min(1, b / 6.666666666666667));
    },
    ouch: function (b, a, c) {
        if (!(0 < this.world.dead) && 1 != this.world.gamemode && 3 != this.world.gamemode && null == this.world.mobs.h[this.ENDING]) {
            if ("anvil" == c || "fall" == c || "lava" == c || "acid" == c || "explosion" == c || "fire" == c || "lightning" == c || "attack" == c || "arrow" == c || "cactus" == c) {
                if (("fire" == c || "lava" == c || "lightning" == c) && this.hasEffect("fireresistance")) return;
                for (var d = 1, f = 0, l = this.world.armors.length; f < l;) {
                    var p = f++,
                        k = 0,
                        B = 1;
                    "anvil" == c && 0 == p ? (this.damageArmor(p, Math.ceil(a / 2)), "Leather" == this.world.armors[p][0].substr(0, 7) ? a *= .8 : "Gold" == this.world.armors[p][0].substr(0, 4) ? a *= .6 : "Iron" == this.world.armors[p][0].substr(0, 4) ? a *= .4 : "Diamond" == this.world.armors[p][0].substr(0, 7) ? a *= .3 : "Dragon" == this.world.armors[p][0].substr(0, 6) && (a *= .2)) : "hunger" != c && "void" != c && (null == this.world.armors[p][2] && (this.world.armors[p][2] = new haxe.ds.StringMap()), Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protection1") ? k = .02 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protection2") ? k = .035 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protection3") ? k = .05 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protection4") && (k = .065), Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protection5") && (k += .08), "lava" == c || "fire" == c || "lightning" == c ? Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionFire1") ? k += .04 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionFire2") ? k += .055 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionFire3") && (k += .07) : "explosion" == c ? Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionBlast1") ? k += .04 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionBlast2") ? k += .055 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionBlast3") && (k += .07) : "arrow" == c ? Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionProjectile1") ? k += .04 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionProjectile2") ? k += .055 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionProjectile3") && (k += .07) : "fall" == c && (Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionFalling1") ? k += .09 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionFalling2") ? k += .12 : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[p][2]).h, "protectionFalling3") && (k += .16)));
                    "anvil" != c && null != BlockData.get(this.world.armors[p][0], "life") && this.world.armors[p][1] <= BlockData.get(this.world.armors[p][0], "life") && ("Leather" == this.world.armors[p][0].substr(0, 7) ? B = .72 - Math.random() * (.08 + 4 * k) : "Gold" == this.world.armors[p][0].substr(0, 4) ? B = .6 - Math.random() * (.16 + 4 * k) : "Iron" == this.world.armors[p][0].substr(0, 4) ? B = .48 - Math.random() * (.2 + 4 * k) : "Diamond" == this.world.armors[p][0].substr(0, 7) ? B = .4 - Math.random() * (.28 + 4 * k) : "Dragon" == this.world.armors[p][0].substr(0, 6) && (B = .36 - Math.random() * (.32 + 4 * k), "fire" == c || "lightning" == c || "lava" == c) && (B *= Math.pow(Math.random(), 3)));
                    this.damageArmor(p, a * (1 - B) * .75);
                    d -= .25 * (1 - B);
                    parseFloat(Std.string(this.world.armors[p][1])) >= parseFloat(Std.string(BlockData.get(this.world.armors[p][0], "life"))) && 1 == BlockData.get(this.world.armors[p][0], "tool") && (this.world.armors[p] = ["air", 0, new haxe.ds.StringMap()], this.updateArmorRenderers());
                }
                a *= Math.max(0, d);
            }
            0 != a && (this.world.health -= Math.ceil(a), 0 < a && (2 == b ? this.requestSound("ouch2", 0, 0, 1, .3) : this.requestSound("ouch1", 0, 0, 1, .3), this.hurtAnimation = !0, this.screenTilter++));
        }
    },
    getRotAngle: function () {
        return this.rotAngle = Math.atan2(this.mouseWorldPosition.y - (this.world.worldY - 1), this.mouseWorldPosition.x - this.world.worldX);
    },
    getClosestBlock: function (b) {
        null == b && (b = !1);
        null == b && (b = !1);
        var a = [null, null, null, null],
            c = this.reach + 1,
            d = Math.floor(this.mouseWorldPosition.x),
            f = Math.floor(-this.mouseWorldPosition.y),
            l = d - this.mouseWorldPosition.x / 1,
            p = f + this.mouseWorldPosition.y / 1,
            k = Math.sqrt(Math.pow(Math.floor(this.world.worldX / 1) - d, 2) + Math.pow(Math.floor(-this.world.worldY) - (f - 1), 2));
        if (3 >= k && (1 == this.mouseD || 1 == this.rMouseD) && 3 != this.world.gamemode) {
            for (var B = Object.keys(this.world.rafts.h), n = B.length, M = 0; M < n;) {
                var m = B[M++];
                if (1.6666666666666667 > Math.abs(this.world.rafts.h[m][1] - this.mouseWorldPosition.x) && 1.6666666666666667 > Math.abs(this.world.rafts.h[m][2] - this.mouseWorldPosition.y)) return 1 == this.rMouseD ? (this.world.rafts.h[m][5] = this.world.player.id, this.world.riding = m, this.waitTillRightMouseIsUp = !0) : (0 == this.world.gamemode ? js.Boot.__cast(this.world.entities.h[this.world.rafts.h[m][0]], entities.Entity_Raft).damag-- : 1 == this.world.gamemode && (js.Boot.__cast(this.world.entities.h[this.world.rafts.h[m][0]], entities.Entity_Raft).damag -= 5), js.Boot.__cast(this.world.entities.h[this.world.rafts.h[m][0]], entities.Entity_Raft).rotation += 30 * (2 * (2 * Math.random() | 0) - 1), this.waitTillMouseIsUp = !0), a;
            }
            n = Object.keys(this.world.fireballs.h);
            M = n.length;
            for (m = 0; m < M;) if (B = this.world.fireballs.h[n[m++]], 1.6666666666666667 > Math.abs(B.h.x - this.mouseWorldPosition.x) && 1.6666666666666667 > Math.abs(B.h.y - this.mouseWorldPosition.y)) return 1 != this.rMouseD && B.h.returnedBy != this.world.player.id && (b = Math.sqrt(Math.pow(B.h.speedX, 2) + Math.pow(B.h.speedY, 2)), B.h.speedX = b * Math.cos(this.rotAngle), B.h.speedY = b * Math.sin(this.rotAngle), B.h.returnedBy = this.world.player.id), a;
            n = Object.keys(this.world.carts.h);
            M = n.length;
            for (m = 0; m < M;) if (B = n[m++], 1.3333333333333333 > Math.abs(this.world.carts.h[B].h.x - this.mouseWorldPosition.x) && 1.3333333333333333 > Math.abs(this.world.carts.h[B].h.y - .6666666666666666 - this.mouseWorldPosition.y)) {
                if (1 == this.rMouseD) {
                    if ("" == this.world.carts.h[B].h.type) this.world.carts.h[B].h.riddenBy = this.world.player.id, this.world.riding = B, this.waitTillRightMouseIsUp = !0;else if ("chest" == this.world.carts.h[B].h.type) {
                        if (null == this.world.chests.h[B]) for (this.world.chests.h[B] = [], c = 0; 27 > c;) this.world.chests.h[B][c++] = Game.emptyItem();
                        this.inventario.chest = B;
                        this.inventario.newName = "";
                        this.inventario.gotoAndStop(4);
                        this.waitTillRightMouseIsUp = !0;
                    } else "oven" == this.world.carts.h[B].h.type && (null != BlockData.get(this.world.get_selectedInventoryItemType(), "fuel") && (null == this.world.carts.h[B].h.fuel && (this.world.carts.h[B].h.fuel = 0), c = this.world.carts.h[B], b = this.world.carts.h[B].h.fuel + BlockData.get(this.world.get_selectedInventoryItemType(), "fuel"), c.h.fuel = b, 1 != this.world.gamemode && ("lbk" == this.world.get_selectedInventoryItemType() ? this.world.setInventoryItemType(this.world.selectedInventoryItem, "bk") : this.world.reduceInventoryItemCount(this.world.selectedInventoryItem))), this.waitTillRightMouseIsUp = !0);
                } else 0 == this.world.gamemode ? (b = this.world.carts, --b.h[B].h.health) : 1 == this.world.gamemode && (d = this.world.carts.h[B], d.h.health -= 5), js.Boot.__cast(this.world.entities.h[B], entities.Entity_Cart).rotation += Game.migrateSpeed(29 * (2 * (2 * Math.random() | 0) - 1)), this.waitTillMouseIsUp = !0;
                return a;
            }
            n = Object.keys(this.world.balloons.h);
            M = n.length;
            for (m = 0; m < M;) if (B = n[m++], null == Game.makeDynamicMap(this.world.balloons.h[B]).h.attached || js.Boot.__cast(Game.makeDynamicMap(this.world.balloons.h[B]).h.attached, haxe.ds.StringMap).h.id != this.world.player.id) if (1 == this.rMouseD) {
                if (!this.waitTillRightMouseIsUp && 1 > Math.abs(Game.makeDynamicMap(this.world.balloons.h[B]).h.stringX - this.mouseWorldPosition.x) && 1 > Math.abs(Game.makeDynamicMap(this.world.balloons.h[B]).h.stringY - this.mouseWorldPosition.y)) {
                    c = new haxe.ds.StringMap();
                    c.h.type = Game.makeDynamicMap(this.world.balloons.h[B]).h.type;
                    1 <= Game.makeDynamicMap(this.world.balloons.h[B]).h.unbreaking && 4 >= Game.makeDynamicMap(this.world.balloons.h[B]).h.unbreaking && (c.h["unbreaking" + Std.string(Game.makeDynamicMap(this.world.balloons.h[B]).h.unbreaking)] = "enchant");
                    for (d = 0; 9 > d;) if (b = d++, this.isEmpty(b)) return this.world.setInventoryItem(b, Game.item("bl", 1, BlockData.get("bl", "life") - Game.makeDynamicMap(this.world.balloons.h[B]).h.life | 0, c)), c = Game.makeDynamicMap(this.world.balloons.h[B]), d = new haxe.ds.StringMap(), d.h.slot = b, d.h.of = this.world.player.id, c.h.inventory = Game.makeDynamicMap(d), c = Game.makeDynamicMap(this.world.balloons.h[B]), d = new haxe.ds.StringMap(), d.h.type = "player", d.h.id = this.world.player.id, c.h.attached = Game.makeDynamicMap(d), this.world.balloons.h["Hand" + b + "Of" + this.world.player.id] = this.world.balloons.h[B], this.renamedBalloons.h[B] = "Hand" + b + "Of" + this.world.player.id, this.world.set_selectedInventoryItem(b), this.updateSelectedInventoryItemStuff(), this.removeEntity(B, this.world.balloons), this.waitTillRightMouseIsUp = !0, a;
                    if (1 == this.addToInventory("bl", 1, BlockData.get("bl", "life") - Game.makeDynamicMap(this.world.balloons.h[B]).h.life | 0, c)) return this.removeEntity(B, this.world.balloons), this.requestSound("pop", 0, 0, 1, 1), this.waitTillRightMouseIsUp = !0, a;
                    this.addDrop("bl", Game.makeDynamicMap(this.world.balloons.h[B]).h.x, Game.makeDynamicMap(this.world.balloons.h[B]).h.y, 1, BlockData.get("bl", "life") - Game.makeDynamicMap(this.world.balloons.h[B]).h.life | 0, c);
                    this.removeEntity(B, this.world.balloons);
                    this.waitTillRightMouseIsUp = !0;
                    return a;
                }
            } else if (1 > Math.abs(Game.makeDynamicMap(this.world.balloons.h[B]).h.x - this.mouseWorldPosition.x) && 1 > Math.abs(Game.makeDynamicMap(this.world.balloons.h[B]).h.y - this.mouseWorldPosition.y)) return b = Game.makeDynamicMap(this.world.balloons.h[B]), b.h.speedX += 5 * Math.cos(this.rotAngle), b = Game.makeDynamicMap(this.world.balloons.h[B]), b.h.speedY += 5 * Math.sin(this.rotAngle), a;
            if (3 == this.world.sceneNum) for (B = Object.keys(this.world.enderCrystals.h), n = B.length, M = 0; M < n;) m = B[M++], 1.6666666666666667 > Math.abs(this.mouseWorldPosition.x - (this.world.enderCrystals.h[m][0] + .5)) && 1.6666666666666667 > Math.abs(this.mouseWorldPosition.y - (-this.world.enderCrystals.h[m][1] - .5)) && null != this.world.entities.h[m] && js.Boot.__cast(this.world.entities.h[m], entities.Entity_EHC).explod();
        }
        B = this.world.getFG(d, f);
        return k <= c / 1 && "air" != B && (1 == BlockData.get(this.world.get_selectedInventoryItemType(), "backdrop") && "" != this.world.get_selectedInventoryItemType() && 1 == BlockData.get(B, "replaceable") || 1 != BlockData.get(B, "backdrop")) && (b && null != this.world.water.h["blockX" + d + "Y" + f] && 10 == this.world.water.h["blockX" + d + "Y" + f][0] && 10 == this.world.water.h["blockX" + d + "Y" + f][1] || 1 != BlockData.get(B, "liquid")) ? [d, f, l, p] : a;
    },
    selectedBlock: function () {
        var b = Math.floor(this.mouseWorldPosition.x),
            a = Math.floor(-this.mouseWorldPosition.y);
        return Math.sqrt(Math.pow(Math.floor(this.world.worldX / 1) - b, 2) + Math.pow(Math.floor(-this.world.worldY) - (a - 1), 2)) <= this.reach / 1 ? new lemongine.Point(b, a) : null;
    },
    getFurthestEmptyBlock: function (b, a, c) {
        null == c && (c = !1);
        null == b && (b = !1);
        a = this.reach + 1;
        var d = Math.floor(this.mouseWorldPosition.x),
            f = Math.floor(-this.mouseWorldPosition.y),
            l = d - this.mouseWorldPosition.x / 1,
            g = f + this.mouseWorldPosition.y / 1;
        if (0 > f || 0 > d) return [null];
        var k = Math.sqrt(Math.pow(Math.floor(this.world.worldX / 1) - d, 2) + Math.pow(Math.floor(-this.world.worldY) - (f - 1), 2)),
            h = this.world.getFG(d, f);
        return k <= a / 1 && ("air" == h || 1 == BlockData.get(h, "liquid") || 1 == BlockData.get(h, "replaceable") && 1 != BlockData.get(this.world.get_selectedInventoryItemType(), "replaceable")) && ("air" != h && (1 != BlockData.get(h, "liquid") || c) || "air" != this.world.getFG(d - 1, f) && (1 != BlockData.get(this.world.getFG(d - 1, f), "liquid") || c) || "air" != this.world.getFG(d + 1, f) && (1 != BlockData.get(this.world.getFG(d + 1, f), "liquid") || c) || "air" != this.world.getFG(d, f - 1) && (1 != BlockData.get(this.world.getFG(d, f - 1), "liquid") || c) || "air" != this.world.getFG(d, f + 1) && (1 != BlockData.get(this.world.getFG(d, f + 1), "liquid") || c)) ? [d, f, l, g] : 1 != b ? [null] : [d, f, l, g];
    },
    getFurthestEmptyBlock2: function (b) {
        null == b && (b = !1);
        var a = this.reach,
            c = 1,
            d = this.reach * Math.cos(this.rotAngle) / ((a + 1) / c) + this.world.worldX,
            f = this.reach * Math.sin(this.rotAngle) / ((a + 1) / c) + (this.world.worldY - 1);
        do {
            c += .3333333333333333;
            var l = d;
            var g = f;
            d = this.reach * Math.cos(this.rotAngle) / ((a + 1) / c) + this.world.worldX;
            f = this.reach * Math.sin(this.rotAngle) / ((a + 1) / c) + (this.world.worldY - 1);
            var k = this.world.getFG(Math.floor(d / 1), Math.floor(-f));
            if ("air" != k && 1 != BlockData.get(k, "liquid") && 1 != BlockData.get(k, "walkThroughBlockHit")) return [Math.floor(l / 1), Math.floor(-g)];
        } while (c <= a);
        return 1 != b ? null : [Math.floor(l / 1), Math.floor(-g)];
    },
    getClosestMob: function () {
        if (15 <= this.gCMTimer && (this.gCMTimer = 0, 0 != this.mouseD || 0 != this.rMouseD)) for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
            var d = b[c++];
            if (!(0 < this.world.mobs.h[d].h.dead)) {
                var f = Math.pow(this.world.worldX - this.world.mobs.h[d].h.x, 2) + Math.pow(this.world.worldY - this.world.mobs.h[d].h.y, 2);
                if ("enderdragon" == this.world.mobs.h[d].h.type) {
                    if (49 > f && (1.5 >= Math.abs(this.world.mobs.h[d].h.x - this.mouseWorldPosition.x) && 1.5 >= Math.abs(this.world.mobs.h[d].h.y - (this.mouseWorldPosition.y + 1)) || null != this.getMob(d) && 7 >= Math.abs(js.Boot.__cast(this.getMob(d), entities.Entity_Mob_EnderDragon).get_bodyCenter().x - this.mouseWorldPosition.x) && 7 >= Math.abs(js.Boot.__cast(this.getMob(d), entities.Entity_Mob_EnderDragon).get_bodyCenter().y - (this.mouseWorldPosition.y + 1)))) return d;
                } else if (16 > f && 1.5 >= Math.abs(this.world.mobs.h[d].h.x - this.mouseWorldPosition.x) && 1.5 >= Math.abs(this.world.mobs.h[d].h.y - (this.mouseWorldPosition.y + 1)) && !this.collision(this.world.worldX + (this.mouseWorldPosition.x - this.world.worldX) / 2, this.world.worldY - 1 + (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 2, .03333333333333333, .03333333333333333, .03333333333333333) && !this.collision(this.world.worldX + (this.mouseWorldPosition.x - this.world.worldX) / 4, this.world.worldY - 1 + (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 4, .03333333333333333, .03333333333333333, .03333333333333333) && !this.collision(this.world.worldX + 3 * (this.mouseWorldPosition.x - this.world.worldX) / 4, this.world.worldY - 1 + 3 * (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 4, .03333333333333333, .03333333333333333, .03333333333333333)) return d;
            }
        }
        return null;
    },
    getBreedableMob: function (b, a, c) {
        b = Object.keys(this.world.mobs.h);
        a = b.length;
        for (var d = 0; d < a;) {
            var f = b[d++];
            if (null != this.getMob(f) && this.getMob(f).mobCanBreed(f, this.world.player.id)) {
                if (null != c) {
                    if (null == this.world.mobData.h[this.world.mobs.h[f].h.type].h.breedItems) continue;
                    if (null == Game.makeDynamicMap(this.world.mobData.h[this.world.mobs.h[f].h.type].h.breedItems).h[c]) continue;
                }
                if (1.5 >= Math.abs(this.world.mobs.h[f].h.x - this.mouseWorldPosition.x) && 1.5 >= Math.abs(this.world.mobs.h[f].h.y - (this.mouseWorldPosition.y + 1)) && 16 > Math.pow(this.world.worldX - this.world.mobs.h[f].h.x, 2) + Math.pow(this.world.worldY - this.world.mobs.h[f].h.y, 2) && !this.collision(this.world.worldX + (this.mouseWorldPosition.x - this.world.worldX) / 2, this.world.worldY - 1 + (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 2, .03333333333333333, .03333333333333333, .03333333333333333) && !this.collision(this.world.worldX + (this.mouseWorldPosition.x - this.world.worldX) / 4, this.world.worldY - 1 + (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 4, .03333333333333333, .03333333333333333, .03333333333333333) && !this.collision(this.world.worldX + 3 * (this.mouseWorldPosition.x - this.world.worldX) / 4, this.world.worldY - 1 + 3 * (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 4, .03333333333333333, .03333333333333333, .03333333333333333)) return f;
            }
        }
        return null;
    },
    getGrowableMob: function (b, a, c) {
        b = Object.keys(this.world.mobs.h);
        a = b.length;
        for (var d = 0; d < a;) {
            var f = b[d++];
            if (0 < this.world.mobs.h[f].h.babyTimer) {
                if (null != c) {
                    if (null == this.world.mobData.h[this.world.mobs.h[f].h.type].h.breedItems) continue;
                    if (null == Game.makeDynamicMap(this.world.mobData.h[this.world.mobs.h[f].h.type].h.breedItems).h[c]) continue;
                }
                if (1.5 >= Math.abs(this.world.mobs.h[f].h.x - this.mouseWorldPosition.x) && 1.5 >= Math.abs(this.world.mobs.h[f].h.y - (this.mouseWorldPosition.y + 1)) && 16 > Math.pow(this.world.worldX - this.world.mobs.h[f].h.x, 2) + Math.pow(this.world.worldY - this.world.mobs.h[f].h.y, 2) && !this.collision(this.world.worldX + (this.mouseWorldPosition.x - this.world.worldX) / 2, this.world.worldY - 1 + (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 2, .03333333333333333, .03333333333333333, .03333333333333333) && !this.collision(this.world.worldX + (this.mouseWorldPosition.x - this.world.worldX) / 4, this.world.worldY - 1 + (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 4, .03333333333333333, .03333333333333333, .03333333333333333) && !this.collision(this.world.worldX + 3 * (this.mouseWorldPosition.x - this.world.worldX) / 4, this.world.worldY - 1 + 3 * (this.mouseWorldPosition.y - (this.world.worldY - 1)) / 4, .03333333333333333, .03333333333333333, .03333333333333333)) return f;
            }
        }
        return null;
    },
    ifDark: function (b, a) {
        for (var c = 0, d = b - 5, f = b + 5 + 1; d < f;) for (var l = d++, g = a - 5, k = a + 5 + 1; g < k;) {
            var h = g++;
            b = this.world.getFG(l, h);
            switch (b) {
            case "jl":
            case "lant":
            case "th":
                ++c;
                break;
            case "light":
                Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + l + "Y" + h) && 0 != this.world.hasSignal.h["blockX" + l + "Y" + h][0] && ++c;
                break;
            case "ortorch":
                --c;
            }
        }
        return 0 < c ? !1 : 0 > c ? !0 : 2 == this.world.sceneNum || 3 == this.world.sceneNum || 270 <= a || 50 > this.world.tim && 0 <= this.world.tim && 2 != this.world.raining && (1 == this.world.raining && 80 <= a || 70 <= a) ? !1 : !0;
    },
    explode: function (b, a, c, d, f, l) {
        null == l && (l = "");
        null == f && (f = !0);
        null == d && (d = !1);
        this.requestSound("boom", b - this.world.worldX, -a - this.world.worldY, 1, 1);
        1 < GlobalSave.particles && this.addParticles("shockwave", Math.floor(Math.min(30, 3 * c)), 0, new lemongine.Point(b + .5 - c / 2, c), new lemongine.Point(-a - .5 - c / 2, c), !0);
        2 < GlobalSave.particles && this.addParticles("smoke2", Math.floor(Math.min(30, 3 * c)), 0, new lemongine.Point(b + .5 - c / 2 * .7, .7 * c), new lemongine.Point(-a - .5 - c / 2 * .7, .7 * c), !0);
        for (var g = Object.keys(this.world.mobs.h), Q = g.length, B = 0; B < Q;) {
            var n = g[B++];
            if (Math.abs(this.world.mobs.h[n].h.x / 1 - (b + .5)) < c && Math.abs(-this.world.mobs.h[n].h.y - (a + .5)) < c && null != this.getMob(n)) {
                var M = 4 * Math.max(0, c - Math.sqrt(Math.pow(this.world.mobs.h[n].h.x / 1 - (b + .5), 2) + Math.pow(-this.world.mobs.h[n].h.y - (a + .5), 2))) | 0;
                this.getMob(n).hurtMob(n, M, "explosion", l);
            }
        }
        Math.abs(this.world.worldX / 1 - (b + .5)) < c && Math.abs(-this.world.worldY - (a + .5)) < c && this.ouch(1, Math.max(0, 4 * (c - Math.sqrt(Math.pow(this.world.worldX / 1 - (b + .5), 2) + Math.pow(-this.world.worldY - (a + .5), 2)) | 0)), "explosion");
        g = Object.keys(this.world.carts.h);
        Q = g.length;
        for (B = 0; B < Q;) n = g[B++], Math.abs(this.world.carts.h[n].h.x - .5 - b) < c && Math.abs(-this.world.carts.h[n].h.y - .5 - a) < c && ("TNT" == this.world.carts.h[n].h.type ? this.world.carts.h[n].h.fuse = 2 : (l = this.world.carts.h[n], l.h.health -= Math.floor(2 * Math.max(0, c - Math.sqrt(Math.pow(this.world.carts.h[n].h.x - .5 - b, 2) + Math.pow(-this.world.carts.h[n].h.y - .5 - a, 2)))), js.Boot.__cast(this.world.entities.h[n], entities.Entity_Cart).rotation += Math.floor(5 * Math.max(0, c - Math.sqrt(Math.pow(this.world.carts.h[n].h.x - .5 - b, 2) + Math.pow(-this.world.carts.h[n].h.y - .5 - a, 2))))));
        g = Object.keys(this.world.rafts.h);
        Q = g.length;
        for (B = 0; B < Q;) n = g[B++], Math.abs(this.world.rafts.h[n][1] - .5 - b) < c && Math.abs(-this.world.rafts.h[n][2] - .5 - a) < c && (js.Boot.__cast(this.world.entities.h[this.world.rafts.h[n][0]], entities.Entity_Raft).damag += 2 * Math.max(0, c - Math.sqrt(Math.pow(this.world.rafts.h[n][1] - .5 - b, 2) + Math.pow(-this.world.rafts.h[n][2] - .5 - a, 2))) | 0, js.Boot.__cast(this.world.entities.h[this.world.rafts.h[n][0]], entities.Entity_Raft).tilt += 2 * Math.max(0, c - Math.sqrt(Math.pow(this.world.rafts.h[n][1] - .5 - b, 2) + Math.pow(-this.world.rafts.h[n][2] - .5 - a, 2))) | 0);
        l = this.world.fallingBlocks.h;
        var m = Object.keys(l);
        g = m.length;
        for (Q = 0; Q < g;) if (B = l[m[Q++]], Math.abs(B[2] - .5 - b) < c && Math.abs(-B[3] - .5 - a) < c) {
            M = Math.atan2(B[3] / 1 + .5 + a, B[2] / 1 - .5 - b);
            var T = Math.max(.1, Math.sqrt(Math.pow(B[2] / 1 - .5 - b, 2) + Math.pow(B[3] / 1 + .5 + a, 2)));
            B[4] += Game.migrateSpeed(3 * Math.cos(M) * c / T);
            B[5] += Game.migrateSpeed(3 * Math.sin(M) * c / T);
            1 == B[7] && (Object.prototype.hasOwnProperty.call(this.world.playingTNT.h, "fallingBlock" + Std.string(B[0])) || (this.world.playingTNT.h["fallingBlock" + Std.string(B[0])] = 1), M = this.world.playingTNT, T = "fallingBlock" + Std.string(B[0]), B = Math.min(98, Math.max(this.world.playingTNT.h["fallingBlock" + Std.string(B[0])], 1) + 20 + (20 * Math.random() | 0)) | 0, M.h[T] = B);
        }
        g = Object.keys(this.world.balloons.h);
        Q = g.length;
        for (B = 0; B < Q;) n = g[B++], Math.abs(Game.makeDynamicMap(this.world.balloons.h[n]).h.x / 1 - b) < c && Math.abs(-Game.makeDynamicMap(this.world.balloons.h[n]).h.y - a) < c && (M = Math.atan2(-Game.makeDynamicMap(this.world.balloons.h[n]).h.y - a, Game.makeDynamicMap(this.world.balloons.h[n]).h.x / 1 - b), T = Math.max(.1, Math.sqrt(Math.pow(Game.makeDynamicMap(this.world.balloons.h[n]).h.x / 1 - b, 2) + Math.pow(-Game.makeDynamicMap(this.world.balloons.h[n]).h.y - a, 2))), l = Game.makeDynamicMap(this.world.balloons.h[n]), l.h.speedX += Game.migrateSpeed(3 * Math.cos(M) * c / T), m = Game.makeDynamicMap(this.world.balloons.h[n]), m.h.speedY += Game.migrateSpeed(3 * Math.sin(M) * c / T), this.damageEntity(this.world.balloons, n, 2 * Math.max(0, c - Math.sqrt(Math.pow(Game.makeDynamicMap(this.world.balloons.h[n]).h.x / 1 - b, 2) + Math.pow(-Game.makeDynamicMap(this.world.balloons.h[n]).h.y - a, 2))) | 0));
        if (f && "wr" != this.world.getFG(b, a + 1) && "wr" != this.world.getFG(b, a - 1) && "wr" != this.world.getFG(b + 1, a) && "wr" != this.world.getFG(b - 1, a)) {
            f = [];
            l = b - Math.round(c / 2) | 0;
            for (m = b - -Math.round(c / 2) + 1 | 0; l < m;) for (T = l++, g = a - Math.round(c / 2) | 0, Q = a - -Math.round(c / 2) + 1 | 0; g < Q;) B = g++, "air" != this.world.getFG(T, B) ? b == T && a == B ? "b" != this.world.getFG(T, B) && "br" != this.world.getFG(T, B) && "stairbr" != this.world.getFG(T, B) && "halfbr" != this.world.getFG(T, B) && "ob" != this.world.getFG(T, B) && "stairob" != this.world.getFG(T, B) && "halfob" != this.world.getFG(T, B) && "portalstone" != this.world.getFG(T, B) && "pf" != this.world.getFG(T, B) && "bdob" != this.world.getFG(T, B) && 1 != BlockData.get(this.world.getFG(T, B), "liquid") && this.mineBlock(T, B, !0, !1) : (T - b) * (T - b) + (B - a) * (B - a) <= c * c && 0 != (4 * Math.random() | 0) && (1 < GlobalSave.particles && this.addParticles("smoke", 3, 0, new lemongine.Point(T - .5, 1), new lemongine.Point(-B - .5, 1)), "TNT" == this.world.getFG(T, B) ? null != this.world.getBlock(T, B) ? (M = 70 + (25 * Math.random() | 0), js.Boot.__cast(this.world.getBlock(T, B), blocks.Block_TNT).setPlayingTNT = 2 * M, js.Boot.__cast(this.world.getBlock(T, B), blocks.Block_TNT).explode()) : this.igniteTNT(T, B) : "b" != this.world.getFG(T, B) && "br" != this.world.getFG(T, B) && "stairbr" != this.world.getFG(T, B) && "halfbr" != this.world.getFG(T, B) && "ob" != this.world.getFG(T, B) && "stairob" != this.world.getFG(T, B) && "halfob" != this.world.getFG(T, B) && "portalstone" != this.world.getFG(T, B) && "pf" != this.world.getFG(T, B) && "bdob" != this.world.getFG(T, B) && 1 != BlockData.get(this.world.getFG(T, B), "liquid") && this.mineBlock(T, B, !0, !1)) : d && f.push({
                x: T,
                y: B
            });
            if (d) for (l = 0, m = f.length; l < m;) if (b = f[l++], null != BlockData.get(this.world.getFG(b.x + 1, b.y), "flamRate") || null != BlockData.get(this.world.getFG(b.x - 1, b.y), "flamRate") || null != BlockData.get(this.world.getFG(b.x, b.y + 1), "flamRate") || null != BlockData.get(this.world.getFG(b.x, b.y - 1), "flamRate")) this.world.setFG(b.x, b.y, "fire"), this.makeBlock(b.x, b.y);
        }
    },
    igniteTNT: function (b, a) {
        this.world.fallingBlockNum++;
        var c = this.world.fallingBlocks,
            d = Std.string(this.world.fallingBlockNum),
            f = this.world.fallingBlockNum,
            l = Game.migrateSpeed(2 * Math.random() - 1);
        c.h[d] = Game.makeDynamicArray([f, "TNT", b + .5, -a - .5, l, Game.migrateSpeed(-5), 10, !0]);
        null != this.world.getBlock(b, a + 1, !1) && this.world.getBlock(b, a + 1, !1).inter();
        this.requestRemove(b, a, !0, !1, !0);
    },
    newLightning: function () {
        var b = "lightning" + Math.random(),
            a = new entities.Entity_Lightning("lightning", new haxe.ds.StringMap(), b, [], this, this.world);
        return this.world.entities.h[b] = a;
    },
    storeItem: function (b, a, c) {
        if ("chest" == this.world.getFG(a, c)) a = this.world.chests.h["blockX" + a + "Y" + c], c = 27;else if ("echest" == this.world.getFG(a, c)) a = this.world.enderChests.h["blockX" + a + "Y" + c], c = 27;else if ("dispense" == this.world.getFG(a, c) || "dropper" == this.world.getFG(a, c)) a = this.world.states.h["blockX" + a + "Y" + c], c = 9;else return b[1];
        return this.storeItemToData(b, a, c);
    },
    storeItemToData: function (b, a, c) {
        for (var d = b[1], f = 0; f < d;) {
            ++f;
            for (var l = !1, g = 0; g < c;) {
                var k = g++;
                if (a[k][0] == b[0] && 64 > a[k][1] && 1 != BlockData.get(b[0], "unstackable") && this.sameExtras(a[k][3], b[3])) {
                    l = a[k];
                    l[1]++;
                    b[1]--;
                    l = !0;
                    break;
                }
            }
            if (!l) break;
        }
        if (0 < b[1]) for (f = 0, g = b[1]; f < g;) {
            ++f;
            l = !1;
            for (d = 0; d < c;) if (k = d++, null == a[k][0] || "air" == a[k][0]) {
                a[k] = [b[0], 1, b[2], b[3]];
                b[1]--;
                l = !0;
                break;
            } else if (a[k][0] == b[0] && 64 > a[k][1] && 1 != BlockData.get(b[0], "unstackable") && this.sameExtras(a[k][3], b[3])) {
                l = a[k];
                l[1]++;
                b[1]--;
                l = !0;
                break;
            }
            if (!l) break;
        }
        return b[1];
    },
    collisionWithLiquid: function (b, a, c, d, f, l) {
        null == l && (l = !1);
        for (var g, k, h = b; h <= b + c;) {
            for (var n = a; n <= a + d;) {
                g = Math.floor(h / 1);
                k = Math.floor(-n);
                g = this.world.getFG(g, k);
                if (1 == BlockData.get(g, "liquidCollision") && (!l || "wr" == g || "sw" == g)) return !0;
                n += f;
            }
            h += f;
        }
        return !1;
    },
    collision: function (b, a, c, d, f, l, g, k) {
        null == k && (k = !1);
        null == g && (g = !0);
        null == l && (l = !0);
        for (var p, Q, h, n = b; n - (b + c) <= f / 2;) {
            for (var m = a; m - (a + d) <= f / 2;) {
                p = Math.floor(n / 1);
                Q = Math.floor(-m);
                h = this.world.getFG(p, Q);
                if (k && 1 == BlockData.get(h, "liquidCollision")) return !0;
                if (1 != BlockData.get(h, g ? "walkThroughBlockHit" : "walkThroughBlock")) {
                    if (1 == BlockData.get(h, "halfBlock")) {
                        if (2 == this.world.states.h["blockX" + p + "Y" + Q]) {
                            if (.5 < lemongine.Mathz.modulus(-m, 1)) return !0;
                        } else {
                            if (.5 > lemongine.Mathz.modulus(-m, 1)) return !0;
                        }
                    } else if (1 == BlockData.get(h, "stairBlock")) {
                        if (4 == this.world.states.h["blockX" + p + "Y" + Q]) {
                            if (.5 > lemongine.Mathz.modulus(n, 1) || .5 < lemongine.Mathz.modulus(-m, 1)) return !0;
                        } else if (2 == this.world.states.h["blockX" + p + "Y" + Q]) {
                            if (.5 > lemongine.Mathz.modulus(n, 1) || .5 > lemongine.Mathz.modulus(-m, 1)) return !0;
                        } else if (3 == this.world.states.h["blockX" + p + "Y" + Q]) {
                            if (.5 < lemongine.Mathz.modulus(n, 1) || .5 < lemongine.Mathz.modulus(-m, 1)) return !0;
                        } else {
                            if (.5 < lemongine.Mathz.modulus(n, 1) || .5 > lemongine.Mathz.modulus(-m, 1)) return !0;
                        }
                    } else if ("lp" == HxOverrides.substr(h, 0, 2)) {
                        if (.5 > lemongine.Mathz.modulus(-m, 1)) return !0;
                    } else return !0;
                } else if ("fnc" == HxOverrides.substr(h, -3, 3)) {
                    if ((this.world.getFG(p - 1, Q).split("g")[0] != h && 1 == BlockData.get(this.world.getFG(p - 1, Q), "walkThroughBlockHit") || this.world.getFG(p + 1, Q).split("g")[0] != h && 1 == BlockData.get(this.world.getFG(p + 1, Q), "walkThroughBlockHit")) && .3333333333333333 < lemongine.Mathz.modulus(n, 1) && .6666666666666666 > lemongine.Mathz.modulus(n, 1)) return !0;
                } else if ("fncg" == HxOverrides.substr(h, -4, 4) && 1 != this.world.states.h["blockX" + p + "Y" + Q]) {
                    if (.3333333333333333 < lemongine.Mathz.modulus(n, 1) && .6666666666666666 > lemongine.Mathz.modulus(n, 1)) return !0;
                } else if ("ibar" == h) {
                    if (("ibar" != this.world.getFG(p - 1, Q) && 1 == BlockData.get(this.world.getFG(p - 1, Q), "walkThroughBlockHit") || "ibar" != this.world.getFG(p + 1, Q) && 1 == BlockData.get(this.world.getFG(p + 1, Q), "walkThroughBlockHit")) && .3333333333333333 < lemongine.Mathz.modulus(n, 1) && .6666666666666666 > lemongine.Mathz.modulus(n, 1)) return !0;
                } else if (l) {
                    h = this.world.getFG(p, Q - 1);
                    var x = this.world.getFG(p, Q - 2);
                    if (.3333333333333333 < lemongine.Mathz.modulus(n, 1) && .6666666666666666 > lemongine.Mathz.modulus(n, 1)) if ("fnc" == HxOverrides.substr(h, -3, 3)) {
                        if (this.world.getFG(p - 1, Q - 1).split("g")[0] != h && 1 == BlockData.get(this.world.getFG(p - 1, Q - 1), "walkThroughBlockHit") || this.world.getFG(p + 1, Q - 1).split("g")[0] != h && 1 == BlockData.get(this.world.getFG(p + 1, Q - 1), "walkThroughBlockHit")) return !0;
                    } else if ("fnc" == HxOverrides.substr(x, -3, 3) && 1 == BlockData.get(h, "walkThroughBlockHit")) {
                        if (this.world.getFG(p - 1, Q - 2).split("g")[0] != x && 1 == BlockData.get(this.world.getFG(p - 1, Q - 2), "walkThroughBlockHit") || this.world.getFG(p + 1, Q - 2).split("g")[0] != x && 1 == BlockData.get(this.world.getFG(p + 1, Q - 2), "walkThroughBlockHit")) return !0;
                    } else if ("fncg" == HxOverrides.substr(h, -4, 4) && 1 != this.world.states.h["blockX" + p + "Y" + (Q - 1)] || "fncg" == HxOverrides.substr(x, -4, 4) && 1 != this.world.states.h["blockX" + p + "Y" + (Q - 2)] && 1 == BlockData.get(h, "walkThroughBlockHit")) return !0;
                }
                m += f;
            }
            n += f;
        }
        return !1;
    },
    raycastSolidBlock: function (b, a, c, d) {
        b /= 1;
        a /= -1;
        c = new lemongine.Point(Math.cos(c), -Math.sin(c));
        var f = new lemongine.Point(0 <= c.x ? 1 : -1, 0 <= c.y ? 1 : -1),
            l = new lemongine.Point();
        l.x = 0 < f.x ? (1 - lemongine.Mathz.modulus(b, 1)) / c.x : lemongine.Mathz.modulus(b, 1) / -c.x;
        l.y = 0 < f.y ? (1 - lemongine.Mathz.modulus(a, 1)) / c.y : lemongine.Mathz.modulus(a, 1) / -c.y;
        for (var p = new lemongine.Point(Math.abs(1 / c.x), Math.abs(1 / c.y)), Q = new lemongine.Point(b, a); Math.pow(Q.x - b, 2) + Math.pow(Q.y - a, 2) <= d * d;) {
            var h = !0;
            l.x < l.y ? (l.x += p.x, Q.x += f.x) : (h = !1, l.y += p.y, Q.y += f.y);
            if (1 != BlockData.get(this.world.getFG(Q.x, Q.y), "walkThroughBlockHit")) return d = new haxe.ds.StringMap(), d.h.x = Math.floor(Q.x), d.h.y = Math.floor(Q.y), d.h.pixelX = b + Math.min(l.x, l.y) * c.x, d.h.pixelY = a + Math.min(l.x, l.y) * c.y, d.h.previousX = Math.floor(Q.x + (h ? f.x : 0)), d.h.previousY = Math.floor(Q.y + (h ? 0 : f.y)), d;
        }
        return null;
    },
    unlockAchieve: function (b) {
        if (1 != this.world.gamemode && 3 != this.world.gamemode && (1 != this.world.achieve[b] && (this.world.achieve[b] = 1, this.achievementsEntityFrame = 2, this.achievementMessage = Game.achievements[b]), 0 == this.world.cheats)) {
            b = 0;
            for (var a = this.world.achieve.length; b < a;) {
                var c = b++;
                1 == this.world.achieve[c] && Main.Instance.unlockNewgroundsMedal(Game.newgroundsAchievementNames[c]);
            }
        }
    },
    damageTool: function () {
        if (1 != this.world.gamemode && null != BlockData.get(this.world.get_selectedInventoryItemType(), "life") && "bl" != this.world.get_selectedInventoryItemType()) {
            var b = this.world.get_selectedInventoryItemExtra();
            Object.prototype.hasOwnProperty.call(b.h, "unbreakable") || (b = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(b.h, "unbreaking1") ? 1 <= 3 * Math.random() && this.world.inflictInventoryItemDamage(this.world.selectedInventoryItem, 1) : (b = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(b.h, "unbreaking2") ? 1 <= 2 * Math.random() && this.world.inflictInventoryItemDamage(this.world.selectedInventoryItem, 1) : (b = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(b.h, "unbreaking3") ? 1 > 3 * Math.random() && this.world.inflictInventoryItemDamage(this.world.selectedInventoryItem, 1) : (b = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(b.h, "unbreaking4") ? 1 > 4 * Math.random() && this.world.inflictInventoryItemDamage(this.world.selectedInventoryItem, 1) : this.world.inflictInventoryItemDamage(this.world.selectedInventoryItem, 1)))), parseFloat(Std.string(this.world.getInventoryItemDamage(this.world.selectedInventoryItem))) >= parseFloat(Std.string(BlockData.get(this.world.get_selectedInventoryItemType(), "life"))) && this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem()));
        }
    },
    damageArmor: function (b, a) {
        1 == this.world.gamemode || Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[b][2]).h, "unbreakable") || (Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[b][2]).h, "unbreaking1") ? 0 != Math.floor(3 * Math.random()) && (this.world.armors[b][1] += Math.round(a)) : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[b][2]).h, "unbreaking2") ? 0 != Math.floor(2 * Math.random()) && (this.world.armors[b][1] += Math.round(a)) : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[b][2]).h, "unbreaking3") ? 0 == Math.floor(3 * Math.random()) && (this.world.armors[b][1] += Math.round(a)) : Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[b][2]).h, "unbreaking4") ? 0 == Math.floor(4 * Math.random()) && (this.world.armors[b][1] += Math.round(a)) : this.world.armors[b][1] += Math.round(a), parseFloat(Std.string(this.world.armors[b][1])) >= parseFloat(Std.string(BlockData.get(this.world.armors[b][0], "life"))) && (this.world.armors[b] = ["air", 0, new haxe.ds.StringMap()], this.updateArmorRenderers()));
    },
    isEmptyBlock: function (b) {
        b = b.toLowerCase();
        return "undefined" == b || "" == b || "na" == b || "air" == b ? !0 : !1;
    },
    addDrop: function (b, a, c, d, f, l) {
        null == d && (d = 1);
        if ("undefined" == b || "air" == b || null == b || "na" == b || "" == b || 1 > d) return null;
        var p = Math.floor(Math.random() * lemongine.Mathz.MAX_INT()),
            k = new haxe.ds.StringMap();
        null != BlockData.get(b, "defaultItemExtra") && (k = lemongine.Helpers.clone(BlockData.get(b, "defaultItemExtra")));
        if (null != l) {
            l = l.h;
            for (var h = Object.keys(l), n = h.length, M = 0; M < n;) {
                var m = h[M++],
                    T = lemongine.Helpers.clone(l[m]);
                k.h[m] = T;
            }
        }
        b = [a, c, b, 0, null != f ? f : 0, d, k];
        this.world.drops.h["drop" + p] = b;
        b = new entities.Entity_Drop("drop", this.world.drops, "drop" + p, b, this, this.world);
        this.world.entities.h["drop" + p] = b;
        b.set_x(a);
        b.set_y(c);
        b.speedX = 2 * Math.random() - 1;
        b.speedY = 4 * Math.random() - 2;
        return "drop" + p;
    },
    dropXP: function (b, a, c, d, f, l) {
        null == f && (f = !1);
        null == d && (d = 0);
        d = Math.max(0, c + Math.random() * d);
        if (0 != d) for (c = f ? 1 : Math.max(1, Math.log(c) / Math.log(2.5)) | 0, f = Math.floor(d / c), l = 0; l < c;) {
            var g = Math.random() * lemongine.Mathz.MAX_INT() | 0,
                k = this.world.xpOrbs,
                B = Game.makeDynamicArray(["xpOrb" + g, b, a, Game.migrateSpeed(6 * Math.random() - 3), Game.migrateSpeed(6 * Math.random() - 3), l++ == c - 1 ? d : f, 300 * Main.Instance.get_fps()]);
            k.h["xpOrb" + g] = B;
            d -= f;
            k = this.world.entities;
            B = new entities.Entity_XpOrb("xpOrb", this.world.xpOrbs, "xpOrb" + g, this.world.xpOrbs.h["xpOrb" + g], this, this.world);
            k.h["xpOrb" + g] = B;
            js.Boot.__cast(this.world.entities.h["xpOrb" + g], entities.Entity_XpOrb).enderDragonOrb = !0;
        }
    },
    addToInventoryOrDrop: function (b, a, c, d, f, l) {
        null == c && (c = 0);
        null == a && (a = 1);
        var g = this.addToInventory(b, a, c, d);
        0 != a - g && (null == f && (f = this.world.worldX), null == l && (l = this.world.worldY), this.addDrop(b, f, l, a - g, c, d));
    },
    addToInventory: function (b, a, c, d) {
        null == c && (c = 0);
        null == a && (a = 1);
        null == d && (d = new haxe.ds.StringMap());
        for (var f = a, l = !1, p = 0, k = a; p < k;) {
            ++p;
            l = !1;
            for (var B = 0; 45 > B;) {
                var n = B++;
                if (this.world.inventoryItem(n)[0] == b && 64 > this.world.inventoryItem(n)[1] && 1 != BlockData.get(b, "unstackable") && this.sameExtras(this.world.inventoryItem(n)[3], d)) {
                    l = this.world.inventoryItem(n);
                    l[1]++;
                    --a;
                    l = !0;
                    break;
                }
            }
            if (!l) break;
        }
        if (0 < a) for (p = 0, k = a; p < k;) {
            ++p;
            for (B = 0; 45 > B;) if (n = B++, this.isEmpty(n)) {
                this.world.setInventoryItem(n, Game.item(b, 1, c, lemongine.Helpers.clone(d)));
                --a;
                l = !0;
                break;
            } else if (this.world.inventoryItem(n)[0] == b && 64 > this.world.inventoryItem(n)[1] && 1 != BlockData.get(b, "unstackable") && this.sameExtras(this.world.inventoryItem(n)[3], d)) {
                l = this.world.inventoryItem(n);
                l[1]++;
                --a;
                l = !0;
                break;
            }
            if (!l) break;
        }
        return f - a;
    },
    ef2: function () {
        if (this.generateEnder) {
            var b = 1,
                a = lemongine.Helpers.getTimer();
            this.blackScreen.statis = "Generating the End...";
            this.blackScreen.loadingBar = this.currentX / (this.world.worldWidth / 3);
            for (var c = !1; 1 == b;) null == this.world.scene[this.currentX] && (this.world.scene[this.currentX] = []), 0 < this.currentY ? (this.rTA(this.currentX - 1, this.currentY - 1, "es"), 5 >= this.randomNumber(0, 599) && 40 > this.currentY && this.makeMine(this.currentX - 1, this.currentY - 1, 3, 2 + this.randomNumber(0, 3), "egem")) : (this.currentX > this.world.worldWidth / 3 && (c = !0, b = 0), 0 == this.randomNumber(0, 7) && (this.atHeight = Math.floor(Math.min(68, Math.max(58, this.atHeight + 2 * this.randomNumber(0, 1) - 1)))), this.currentY = this.atHeight, this.currentX++, this.isScavenger && this.randomNumber(0, 1), null == this.world.scene[this.currentX] && (this.world.scene[this.currentX] = [])), this.currentY--, a + 500 < lemongine.Helpers.getTimer() && (b = 0);
            if (1 == c) {
                this.makeEnderMine(1, 75);
                this.makeEnderMine(Math.round(this.world.worldWidth / 3), 75);
                for (b = 45; b <= this.world.worldWidth / 3 - 45;) this.makeEnderMine(b, Math.floor(this.randomNumber(4, 45))), b += Math.floor(this.randomNumber(1, 4));
                for (var d = 15; 0 <= d;) {
                    var f = Math.round(d / 15 * (this.world.worldWidth / 3 - 80) + 40 + this.randomNumber(-3, 3));
                    if (10 < this.world.scene[f].length) {
                        var l = this.world.scene[f].length - 5,
                            g = this.randomNumber(1, 2),
                            Q = this.randomNumber(8, 25);
                        b = 0;
                        for (a = Math.floor(Q + 1); b < a;) {
                            var B = b++;
                            for (c = Math.floor(-g); 1 > c;) {
                                var n = c++;
                                B == Q || 8 <= B && 1 != this.randomNumber(1, 3) ? (this.rTA(f + n, l + B, "ob"), this.rTA(f - n, l + B, "ob")) : (this.rTA(f + n, l + B, "bdob"), this.rTA(f - n, l + B, "bdob"));
                            }
                        }
                        this.world.enderCrystals.h["blockX" + f + "Y" + (l + Q + 1)] = [Math.floor(f), Math.floor(l + Q + 1)];
                    }
                    --d;
                }
                b = Math.round(this.world.worldWidth / 6) - 3;
                for (a = Math.round(this.world.worldWidth / 6) + 3 + 1; b < a;) for (d = b++, c = 51; 55 > c;) f = c++, 51 == f && this.world.setFG(d, f - 1, "ob"), this.world.setFG(d, f, "air");
                this.world.setFG(Math.round(this.world.worldWidth / 6) - 2, 51, "th");
                this.world.setFG(Math.round(this.world.worldWidth / 6) + 2, 51, "th");
                for (b = 0; 26 > b;) c = b++, null == this.world.scene[Math.round(this.world.worldWidth / 3) + c] && (this.world.scene[Math.round(this.world.worldWidth / 3) + c] = []);
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 20, 61, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 21, 61, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 21, 60, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 22, 61, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 22, 60, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 22, 59, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 22, 62, "sign");
                this.world.signs.h["blockX" + (Math.round(this.world.worldWidth / 3) + 22) + "Y62"] = "\nFus Ro Dah!";
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 23, 61, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 23, 60, "es");
                this.world.setFG(Math.round(this.world.worldWidth / 3) + 24, 61, "es");
                b = entities.Entity_Mob.nextMobID();
                a = entities.Entity_Mob.prepareMobData("enderdragon", b, 50, 80, 333);
                a.h.official = !0;
                this.world.mobs.h[b] = a;
                this.generatingWorld = 0;
                this.generateEnder = this.generateNether = !1;
                this.making = !0;
            }
        } else if (this.generateNether) {
            b = 1;
            a = lemongine.Helpers.getTimer();
            this.blackScreen.statis = "Generating Nether...";
            this.blackScreen.loadingBar = this.currentX / this.world.worldWidth;
            for (this.finishedNether = !1; 1 == b;) null == this.world.scene[this.currentX] && (this.world.scene[this.currentX] = []), 0 <= this.currentY ? 10 >= this.randomNumber(0, 999) ? this.makeMine(this.currentX - 1, this.currentY - 1, 3, 2 + this.randomNumber(0, 2), "ob") : 10 >= this.randomNumber(0, 999) ? this.makeMine(this.currentX - 1, this.currentY - 1, 3, 2 + this.randomNumber(0, 3), "boneb") : this.rTA(this.currentX - 1, this.currentY - 1, "n") : (this.currentX > this.world.worldWidth && (this.finishedNether = !0, b = 0), this.currentY = this.world.worldHeight, this.currentX++, this.isScavenger && this.randomNumber(0, 1), null == this.world.scene[this.currentX] && (this.world.scene[this.currentX] = [])), this.currentY--, a + 500 < lemongine.Helpers.getTimer() && (b = 0);
            if (1 == this.finishedNether) {
                b = 0;
                for (a = 120 + this.randomNumber(0, 30) + 1; b < a;) ++b, this.makeMine(this.randomNumber(0, this.world.worldWidth - 1), 10 + this.randomNumber(0, this.world.worldHeight - 10), this.randomNumber(0, 3) + 5, 30, "air", !0, !0);
                for (b = 0; 501 > b;) for (++b, a = this.randomNumber(0, this.world.worldHeight), c = this.randomNumber(0, this.world.worldWidth), d = 0; -20 <= d;) "n" == this.world.getFG(c, a + 1 + d) && "air" == this.world.getFG(c, a + d) && (this.makeMine(c, a + d, 3, 3, "glow"), d = -21), --d;
                b = 0;
                for (a = 80 + this.randomNumber(0, 20) + 1; b < a;) ++b, this.makeMine(this.randomNumber(0, this.world.worldWidth - 1), this.randomNumber(0, this.world.worldHeight), 4, 10, "la", !0, !0);
                this.makeMine(Math.floor(this.world.worldWidth / 2), 30, 5, 5, "air", !0, !0);
                this.makeMine(Math.floor(this.world.worldWidth / 2), 30, 5, 5, "air", !0, !0);
                this.makeMine(Math.floor(this.world.worldWidth / 2), 30, 5, 5, "air", !0, !0);
                this.world.setFG(this.world.worldWidth / 2, 29, "portalstone");
                this.world.setFG(this.world.worldWidth / 2 - 1, 29, "portalstone");
                this.world.setFG(this.world.worldWidth / 2 - 2, 29, "portalstone");
                this.world.setFG(this.world.worldWidth / 2 + 1, 29, "portalstone");
                this.world.setFG(this.world.worldWidth / 2 - 2, 30, "portalstone");
                this.world.setFG(this.world.worldWidth / 2 + 1, 30, "portalstone");
                this.world.setFG(this.world.worldWidth / 2, 30, "portal");
                this.world.setFG(this.world.worldWidth / 2 - 1, 30, "portal");
                this.world.setFG(this.world.worldWidth / 2, 31, "air");
                this.world.setFG(this.world.worldWidth / 2 - 1, 31, "air");
                this.world.setFG(this.world.worldWidth / 2 + 1, 31, "air");
                this.world.setFG(this.world.worldWidth / 2 - 2, 31, "air");
                b = 0;
                for (a = this.world.worldHeight - 1 + 1; b < a;) this.world.setFG(0, b++, "br");
                b = 0;
                for (a = this.world.worldWidth - 2 + 1; b < a;) this.world.setFG(b++, 0, "br");
                b = 0;
                for (a = this.world.worldWidth - 2 + 1; b < a;) this.world.setFG(b++, this.world.worldHeight - 1, "br");
                b = 0;
                for (a = this.world.worldHeight - 1 + 1; b < a;) this.world.setFG(this.world.worldWidth - 2, b++, "br");
                this.generatingWorld = 0;
                this.generateNether = !1;
                this.making = !0;
            }
        } else if (1 == this.generatingWorld) {
            b = 1;
            this.blackScreen.statis = "Generating world...";
            a = lemongine.Helpers.getTimer();
            this.blackScreen.loadingBar = this.currentX / this.world.worldWidth;
            do {
                if (0 <= this.currentY) {
                    if (this.lastWorldHeight + this.slope >= 1.1 * this.world.worldHeight && --this.slope, this.lastWorldHeight + this.slope <= .7 * this.world.worldHeight && (this.slope += 1), this.lastWorldHeight + this.slope <= .76 * this.world.worldHeight && (this.slopeNoMatterWhat = 2, this.slope = 1), this.currentY - 1 >= this.lastWorldHeight - 2) {
                        1 == this.randomNumber(0, 6) && (c = this.randomNumber(0, 50), this.slope = 25 >= c ? 0 : 40 >= c ? 2 * this.randomNumber(0, 1) - 1 : 4 * this.randomNumber(0, 1) - 2);
                        this.timeUntilNextBiome--;
                        0 >= this.timeUntilNextBiome && (1 == this.randomNumber(0, 3) ? this.biome = Game.biomes[0] : 1 == this.randomNumber(0, 3) ? this.biome = Game.biomes[1] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[2] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[3] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[4] : 1 == this.randomNumber(0, 2) ? this.biome = Game.biomes[5] : 1 != this.randomNumber(0, 3) ? this.biome = Game.biomes[0] : this.biome = Game.biomes[6], this.timeUntilNextBiome = 40 + this.randomNumber(0, 20));
                        0 == this.randomNumber(0, 100) && (this.snowyRegion = !1);
                        0 == this.randomNumber(0, 200) && (this.snowyRegion = !0);
                        this.world.biomeList[this.currentX] = this.biome;
                        "water" != this.biome && (this.noWater = !0);
                        if ("ruins" == this.biome) this.slopeNoMatterWhat = 0, 1 != this.inRoom ? 1 == this.randomNumber(0, 4) && (this.lastPole = this.currentX - 1, this.inRoom = !0, this.rTA(this.currentX - 1, this.currentY, "cs"), this.rTA(this.currentX - 1, this.currentY + 1, "cs"), this.rTA(this.currentX - 1, this.currentY + 2, "cs"), 0 != this.randomNumber(0, 2) ? (this.rTA(this.currentX - 1, this.currentY + 3, "cs"), 0 != this.randomNumber(0, 2) ? this.rTA(this.currentX - 1, this.currentY + 4, "cs") : (this.rTA(this.currentX - 1, this.currentY + 4, "moss"), 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX, this.currentY + 3, "cs"), this.rTA(this.currentX, this.currentY + 4, "moss")))) : (this.rTA(this.currentX - 1, this.currentY + 3, "moss"), 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX, this.currentY + 2, "cs"), this.rTA(this.currentX, this.currentY + 3, "moss")))) : this.lastPole + 3 + this.randomNumber(0, 3) < this.currentX - 1 ? 1 == this.randomNumber(0, 3) && (this.lastPole = this.currentX - 1, this.inRoom = !0, this.rTA(this.currentX - 1, this.currentY, "cs"), this.rTA(this.currentX - 1, this.currentY + 1, "cs"), this.rTA(this.currentX - 1, this.currentY + 2, "cs"), 0 != this.randomNumber(0, 2) ? (this.rTA(this.currentX - 1, this.currentY + 3, "cs"), 0 != this.randomNumber(0, 2) ? this.rTA(this.currentX - 1, this.currentY + 4, "cs") : (this.inRoom && 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX, this.currentY + 4, "moss"), this.rTA(this.currentX, this.currentY + 3, "cs")), 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 2, this.currentY + 4, "moss"), this.rTA(this.currentX - 2, this.currentY + 3, "cs")))) : (this.inRoom && 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX, this.currentY + 3, "moss"), this.rTA(this.currentX, this.currentY + 2, "cs")), 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 2, this.currentY + 3, "moss"), this.rTA(this.currentX - 2, this.currentY + 2, "cs")))) : 1 == this.randomNumber(0, 10) && (this.rTA(this.currentX - 1, this.currentY, "chest"), this.prizeChest(this.currentX - 1, this.currentY));else if ("water" == this.biome) {
                            if (1 == this.noWater) this.noWater = !1, this.waterHeight = this.currentY - 1, this.slope = -4, this.slopeNoMatterWhat = -3;else {
                                c = 0;
                                d = !1;
                                0 == this.randomNumber(0, 25) && this.rTA(this.currentX - 2, this.waterHeight + 1, "lp");
                                for (f = this.waterHeight; 30 < f;) "air" == this.world.getFG(this.currentX - 2, f) ? (1 == this.randomNumber(0, 40) && (d = !0), d ? this.rTA(this.currentX - 2, f, "sw") : this.rTA(this.currentX - 2, f, "wr"), ++c) : (1 == this.randomNumber(0, 30) && 1 < c && this.makeMine(this.currentX - 2, this.currentY, 3, 3, "coral"), f = 0), --f;
                                0 == c && 0 == this.randomNumber(0, 5) ? this.timeUntilNextBiome = 0 : 2 == this.timeUntilNextBiome && (this.timeUntilNextBiome = 3, this.slopeNoMatterWhat = 2);
                                this.slope = 25 < this.timeUntilNextBiome ? Math.floor(Math.max(this.slope - this.randomNumber(-3, 6), -6)) : Math.floor(Math.min(this.slope + this.randomNumber(-3, 6), 6));
                            }
                        } else "mountain" == this.biome && (this.slope = this.slopeNoMatterWhat = 20 < this.timeUntilNextBiome ? Math.floor(Math.min(this.slope + this.randomNumber(-1, 2), 4)) : Math.floor(Math.max(this.slope - this.randomNumber(-1, 2), -4)));
                        1 == this.getSnowRegion(this.currentX - 5) && "desert" != this.biome && 0 <= this.currentX - 5 && this.rTA(this.currentX - 5, this.world.scene[this.currentX - 5].length, "snow");
                        "desert" != this.biome && 1 != this.snowyRegion && 1 == this.randomNumber(0, 150) && (this.snowyRegion = !0);
                        this.snowyRegion && (this.setSnowRegion(this.currentX - 1, !0), 1 == this.randomNumber(0, 50) && (this.snowyRegion = !1));
                        "desert" == this.biome || "water" == this.biome ? this.rTA(this.currentX - 1, this.currentY - 1, "sd") : "mushroom" == this.biome ? this.rTA(this.currentX - 1, this.currentY - 1, "myc") : "ruins" == this.biome ? (this.rTA(this.currentX - 1, this.currentY - 1, "cs"), "air" == this.world.getFG(this.currentX - 1, this.currentY) && this.rTA(this.currentX - 1, this.currentY, "moss")) : this.rTA(this.currentX - 1, this.currentY - 1, "dt");
                        if (1 == this.randomNumber(0, 100) || 1 == this.startBamboo && "desert" != this.biome && "water" != this.biome && "mountain" != this.biome && "mushroom" != this.biome) 1 != this.startBamboo && (this.startBamboo = !0, this.numBamboo = this.randomNumber(3, 7)), this.numBamboo--, this.rTA(this.currentX - 1, this.currentY, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + this.currentY] = !0, this.rTA(this.currentX - 1, this.currentY + 1, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 1)] = !0, this.rTA(this.currentX - 1, this.currentY + 2, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 2)] = !0, this.rTA(this.currentX - 1, this.currentY + 3, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 3)] = !0, this.rTA(this.currentX - 1, this.currentY + 4, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 4)] = !0, this.rTA(this.currentX - 1, this.currentY + 5, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 5)] = !0, this.rTA(this.currentX - 1, this.currentY + 6, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 6)] = !0, 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 1, this.currentY + 7, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 7)] = !0, 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 1, this.currentY + 8, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 8)] = !0, 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 1, this.currentY + 9, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 9)] = !0, 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 1, this.currentY + 10, "bb"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 10)] = !0)))), 0 >= this.numBamboo && (this.startBamboo = !1);else if ((1 == this.randomNumber(0, 400) || 1 == this.startPumpkinPatch && 1 == this.randomNumber(0, 2)) && "desert" != this.biome && "water" != this.biome && "mountain" != this.biome && "mushroom" != this.biome) 1 != this.startPumpkinPatch && (this.startPumpkinPatch = !0, this.numPumpkins = this.randomNumber(3, 7)), this.numPumpkins--, this.rTA(this.currentX - 1, this.currentY, "pk"), 0 >= this.numPumpkins && (this.startPumpkinPatch = !1);else if ("desert" == this.biome) this.startPumpkinPatch = !1, 1 == this.randomNumber(0, 6) ? (this.rTA(this.currentX - 1, this.currentY, "ct"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + this.currentY] = !0, this.rTA(this.currentX - 1, this.currentY + 1, "ct"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 1)] = !0, 0 != this.randomNumber(0, 2) && (this.rTA(this.currentX - 1, this.currentY + 2, "ct"), this.world.firstTimes.h["blockX" + (this.currentX - 1) + "Y" + (this.currentY + 2)] = !0)) : 0 == this.randomNumber(0, 2) && (1 == this.randomNumber(1, 3) ? this.rTA(this.currentX - 1, this.currentY, "shrub") : 1 == this.randomNumber(1, 3) && this.rTA(this.currentX - 1, this.currentY, "ds"));else if ("forest" == this.biome && 0 == this.randomNumber(0, 3) && "wd1" != this.world.getFG(this.currentX - 1, this.currentY + 2) && "wd1" != this.world.getFG(this.currentX - 2, this.currentY + 2)) this.makeTree(this.currentX, this.currentY, !0);else if ("mushroom" == this.biome) 0 != this.randomNumber(0, 1) ? this.rTA(this.currentX - 1, this.currentY, "ms" + this.randomNumber(1, 2)) : 0 == this.randomNumber(0, 3) && "ms" != HxOverrides.substr(this.world.getFG(this.currentX - 1, this.currentY + 2), 0, 2) && "ms" != HxOverrides.substr(this.world.getFG(this.currentX - 2, this.currentY + 2), 0, 2) && "ms" != HxOverrides.substr(this.world.getFG(this.currentX - 3, this.currentY + 2), 0, 2) && "ms" != HxOverrides.substr(this.world.getFG(this.currentX - 4, this.currentY + 2), 0, 2) && this.makeGiantMushroom(this.currentX, this.currentY, Math.floor(this.randomNumber(1, 2)), !0);else if ("plain" == this.biome || "forest" == this.biome) 1 == this.randomNumber(0, 100) ? (this.rTA(this.currentX - 1, this.currentY, "sc"), this.rTA(this.currentX - 1, this.currentY + 1, "sc"), this.rTA(this.currentX - 1, this.currentY + 2, "sc")) : 1 == this.randomNumber(0, 5) ? 1 != this.randomNumber(1, 4) ? this.rTA(this.currentX - 1, this.currentY, "fw" + this.randomNumber(1, 2)) : 1 == this.randomNumber(1, 2) && this.rTA(this.currentX - 1, this.currentY, "ms" + this.randomNumber(1, 2)) : 0 != this.randomNumber(0, 5) ? 1 == this.randomNumber(1, 2) && this.rTA(this.currentX - 1, this.currentY, "lgr") : 0 != this.randomNumber(0, 3) && 1 == this.randomNumber(1, 2) && this.rTA(this.currentX - 1, this.currentY, "shrub");
                    } else this.randomNumber(0, 1300) <= this.coalIronFrequency ? 1 == this.randomNumber(0, 1) ? this.makeMine(this.currentX - 1, this.currentY - 1, 2, 2 + this.randomNumber(0, 2), "clore") : this.makeMine(this.currentX - 1, this.currentY - 1, 2, 2 + this.randomNumber(0, 2), "in") : this.randomNumber(0, 1500) <= this.goldFrequency && 60 > this.currentY ? this.makeMine(this.currentX - 1, this.currentY - 1, 2, 3 + this.randomNumber(0, 2), "gd") : this.randomNumber(0, 1500) <= this.goldFrequency && 60 > this.currentY ? this.makeMine(this.currentX - 1, this.currentY - 1, 2, 3 + this.randomNumber(0, 2), "lap") : this.randomNumber(0, 1500) <= this.redstoneFrequency && 50 > this.currentY ? this.makeMine(this.currentX - 1, this.currentY - 1, 2, 2 + this.randomNumber(0, 2), "rs") : this.randomNumber(0, 1500) <= this.diamondFrequency && 40 > this.currentY ? this.makeMine(this.currentX - 1, this.currentY - 1, 2, 2 + this.randomNumber(0, 1), "dmore") : this.randomNumber(0, 1500) <= this.topazFrequency && 50 > this.currentY ? this.makeMine(this.currentX - 1, this.currentY - 1, 2, 2 + this.randomNumber(0, 1), "to") : this.randomNumber(0, 1200) <= this.oddStoneFrequency && 60 > this.currentY ? this.makeMine(this.currentX - 1, this.currentY - 1, 3, 2 + this.randomNumber(0, 2), "os") : this.randomNumber(0, 1200) <= this.gravelFrequency ? this.makeMine(this.currentX - 3, this.currentY - 1, 5, 5, "gv") : this.currentY - 1 >= this.lastWorldHeight - 4 - this.randomNumber(0, 3) - ("desert" == this.biome ? 3 : 0) + ("mountain" == this.biome ? 3 : 0) ? "desert" == this.biome || "water" == this.biome ? (this.currentY - 1 <= this.lastWorldHeight - 4 - this.randomNumber(0, 2) - ("desert" == this.biome ? 3 : 0) ? this.rTA(this.currentX - 1, this.currentY - 1, "ss") : this.rTA(this.currentX - 1, this.currentY - 1, "sd"), "desert" == this.biome && 1 == this.randomNumber(0, 30) && this.makeMine(this.currentX - 1, this.currentY - 1, 3, 5, "cy1")) : this.rTA(this.currentX - 1, this.currentY - 1, "dt") : this.rTA(this.currentX - 1, this.currentY - 1, "r");
                } else {
                    if ("desert" == this.biome || "plain" == this.biome || "water" == this.biome) this.slope = Math.round(this.slope / 3);
                    this.lastSlope = 0;
                    null != this.slopeNoMatterWhat ? (this.lastSlope = this.slopeNoMatterWhat, this.lastWorldHeight += this.slopeNoMatterWhat, this.slopeNoMatterWhat = null) : 0 != this.randomNumber(0, 2) && (1 == this.randomNumber(0, 50) && "water" != this.biome && "plain" != this.biome ? this.lastWorldHeight <= .7 * this.world.worldHeight ? (this.largeSlope = this.randomNumber(7, 10), this.lastWorldHeight += this.largeSlope, this.lastSlope = this.largeSlope, 1 == this.randomNumber(0, 1) && this.caves.push([this.currentX + 2, Math.round(this.lastWorldHeight + this.largeSlope / 2), this.largeSlope])) : this.lastWorldHeight >= 1.1 * this.world.worldHeight ? (this.largeSlope = -this.randomNumber(7, 10), this.lastWorldHeight += this.largeSlope, this.lastSlope = this.largeSlope, 1 == this.randomNumber(0, 1) && this.caves.push([this.currentX - 2, Math.round(this.lastWorldHeight + this.largeSlope / 2), this.largeSlope])) : (this.largeSlope = (2 * this.randomNumber(0, 1) - 1) * this.randomNumber(7, 10), this.lastWorldHeight += this.largeSlope, this.lastSlope = this.largeSlope, 1 == this.randomNumber(0, 1) && this.caves.push([this.currentX + (0 < this.largeSlope ? 1 : 0), Math.round(this.lastWorldHeight + this.largeSlope / 2), this.largeSlope])) : (this.lastSlope = this.slope, this.lastWorldHeight += this.slope));
                    this.currentY = Math.floor(this.lastWorldHeight);
                    this.currentX++;
                    this.isScavenger && this.randomNumber(0, 1);
                }
                this.currentY--;
                this.currentX > this.world.worldWidth && (this.generatingWorld = 2, b = 0, this.making = !0);
                a + 500 < lemongine.Helpers.getTimer() && (b = 0);
            } while (1 == b);
        } else if (2 == this.generatingWorld) {
            a = {};
            for (b = 0; 16 > b;) a[b++] = [];
            b = Math.floor(this.world.worldWidth / 2 + this.randomNumber(-300, 200));
            c = 7;
            d = 9;
            l = "library;empty;empty2;chest1;chest2;lava;water;well;acid;mob spawner;fountain".split(";");
            this.buildRoom(126 + b, 240, 12, 6, "portal");
            a[7][9] = ["portal"];
            this.world.endPortal = new lemongine.Point(126 + b + 6, 249);
            f = 1;
            for (g = [[1, 1], [-1, -1], [-1, 1], [1, -1], [1, 0], [0, 1], [-1, 0], [0, -1]]; 60 >= f;) {
                Q = this.randomNumber(0, 7);
                for (B = 50; 0 <= B;) {
                    if (0 < c + g[Q][0] && 15 > c + g[Q][0] && 0 < d + g[Q][1] && 10 > d + g[Q][1] && (null == a[c + g[Q][0]] || null == a[c + g[Q][0]][d + g[Q][1]] || null == a[c + g[Q][0]][d + g[Q][1]][0] || 10 > B)) if (-1 == g[Q][0] && 1 == g[Q][1]) {
                        if (null == a[c - 1] || null == a[c - 1][d + 1] || -1 != a[c - 1][d + 1][1] || null != a[c - 1][d + 1] && 1 == a[c - 1][d + 1][2]) if (null == a[c - 1] || null == a[c - 1][d] || -1 != a[c - 1][d][1] || null != a[c - 1][d] && 1 == a[c - 1][d][2]) if (null == a[c][d + 1] || 1 != a[c][d + 1][1] || null != a[c][d + 1] && -1 == a[c][d + 1][2]) if (null == a[c][d] || 1 != a[c][d][1] || null != a[c][d] && -1 == a[c][d][2]) if (null == a[c - 1] || null == a[c - 1][d - 1] || -1 != a[c - 1][d - 1][1] || null == a[c - 1] || null == a[c - 1][d - 1] || -1 != a[c - 1][d - 1][2]) if (null == a[c][d + 2] || 1 != a[c][d + 2][1] || null == a[c][d + 2] || 1 != a[c][d + 2][2]) break;
                    } else if (-1 == g[Q][0] && -1 == g[Q][1]) {
                        if (null == a[c - 1] || null == a[c - 1][d - 1] || -1 != a[c - 1][d - 1][1] || null != a[c - 1][d - 1] && -1 == a[c - 1][d - 1][2]) if (null == a[c - 1] || null == a[c - 1][d] || -1 != a[c - 1][d][1] || null != a[c - 1][d] && -1 == a[c - 1][d][2]) if (null == a[c][d - 1] || 1 != a[c][d - 1][1] || null != a[c][d - 1] && 1 == a[c][d - 1][2]) if (null == a[c][d] || 1 != a[c][d][1] || null != a[c][d] && 1 == a[c][d][2]) if (null == a[c - 1] || null == a[c - 1][d + 1] || -1 != a[c - 1][d + 1][1] || null == a[c - 1] || null == a[c - 1][d + 1] || 1 != a[c - 1][d + 1][2]) if (null == a[c][d - 2] || 1 != a[c][d - 2][1] || null == a[c][d - 2] || -1 != a[c][d - 2][2]) break;
                    } else if (1 == g[Q][0] && 1 == g[Q][1]) {
                        if (null == a[c + 1] || null == a[c + 1][d + 1] || 1 != a[c + 1][d + 1][1] || null != a[c + 1][d + 1] && 1 == a[c + 1][d + 1][2]) if (null == a[c + 1] || null == a[c + 1][d] || 1 != a[c + 1][d][1] || null != a[c + 1][d] && 1 == a[c + 1][d][2]) if (null == a[c][d + 1] || -1 != a[c][d + 1][1] || null != a[c][d + 1] && -1 == a[c][d + 1][2]) if (null == a[c][d] || -1 != a[c][d][1] || null != a[c][d] && -1 == a[c][d][2]) if (null == a[c + 1] || null == a[c + 1][d - 1] || 1 != a[c + 1][d - 1][1] || null == a[c + 1] || null == a[c + 1][d - 1] || -1 != a[c + 1][d - 1][2]) if (null == a[c][d + 2] || -1 != a[c][d + 2][1] || null == a[c][d + 2] || 1 != a[c][d + 2][2]) break;
                    } else if (1 == g[Q][0] && -1 == g[Q][1]) {
                        if (null == a[c + 1] || null == a[c + 1][d - 1] || 1 != a[c + 1][d - 1][1] || null != a[c + 1][d - 1] && -1 == a[c + 1][d - 1][2]) if (null == a[c + 1] || null == a[c + 1][d] || 1 != a[c + 1][d][1] || null != a[c + 1][d] && -1 == a[c + 1][d][2]) if (null == a[c][d - 1] || -1 != a[c][d - 1][1] || null != a[c][d - 1] && 1 == a[c][d - 1][2]) if (null == a[c][d] || -1 != a[c][d][1] || null != a[c][d] && 1 == a[c][d][2]) if (null == a[c + 1] || null == a[c + 1][d + 1] || 1 != a[c + 1][d + 1][1] || null == a[c + 1] || null == a[c + 1][d + 1] || 1 != a[c + 1][d + 1][2]) if (null == a[c][d - 2] || -1 != a[c][d - 2][1] || null == a[c][d - 2] || -1 != a[c][d - 2][2]) break;
                    } else if (-1 == g[Q][0] && 0 == g[Q][1]) {
                        if (null == a[c][d] || 1 != a[c][d][1] || null != a[c][d] && 0 == a[c][d][2]) if (null == a[c - 1] || null == a[c - 1][d] || -1 != a[c - 1][d][1] || null != a[c - 1][d] && 0 == a[c - 1][d][2]) if (null == a[c][d + 1] || 1 != a[c][d + 1][1] || null == a[c][d + 1] || 1 != a[c][d + 1][2]) if (null == a[c - 1] || null == a[c - 1][d + 1] || -1 != a[c - 1][d + 1][1] || null == a[c - 1] || null == a[c - 1][d + 1] || 1 != a[c - 1][d + 1][2]) if (null == a[c - 1] || null == a[c - 1][d - 1] || -1 != a[c - 1][d - 1][1] || null == a[c - 1] || null == a[c - 1][d - 1] || -1 != a[c - 1][d - 1][2]) if (null == a[c][d - 1] || 1 != a[c][d - 1][1] || null == a[c][d - 1] || -1 != a[c][d - 1][2]) break;
                    } else if (1 == g[Q][0] && 0 == g[Q][1]) {
                        if (null == a[c][d] || 1 != a[c][d][1] || null != a[c][d] && 0 == a[c][d][2]) if (null == a[c + 1] || null == a[c + 1][d] || 1 != a[c + 1][d][1] || null != a[c + 1][d] && 0 == a[c + 1][d][2]) if (null == a[c][d + 1] || -1 != a[c][d + 1][1] || null == a[c][d + 1] || 1 != a[c][d + 1][2]) if (null == a[c - 1] || null == a[c - 1][d + 1] || 1 != a[c - 1][d + 1][1] || null == a[c - 1] || null == a[c - 1][d + 1] || 1 != a[c - 1][d + 1][2]) if (null == a[c + 1] || null == a[c + 1][d - 1] || 1 != a[c + 1][d - 1][1] || null == a[c + 1] || null == a[c + 1][d - 1] || -1 != a[c + 1][d - 1][2]) if (null == a[c][d - 1] || -1 != a[c][d - 1][1] || null == a[c][d - 1] || -1 != a[c][d - 1][2]) break;
                    } else break;
                    Q = this.randomNumber(0, 7);
                    --B;
                }
                c += g[Q][0];
                d += g[Q][1];
                B = !1;
                null == a[c] || null != a[c][d] && null != a[c][d][0] ? null != a[c] && null != a[c][d] && (a[c][d][3] = g[Q][0], a[c][d][4] = g[Q][1]) : (B = l[this.randomNumber(0, l.length - 1)], this.buildRoom(12 * c + 6 * c + b, 6 * d + 4 * d + 150, 12, 6, B), a[c][d] = [B, g[Q][0], g[Q][1]], ++f, B = !0);
                B && (c -= g[Q][0], d -= g[Q][1], 1 == g[Q][0] && 0 == g[Q][1] ? this.buildHall(12 * c + 6 * c + b + 12, 6 * d + 4 * d + 150) : -1 == g[Q][0] && 0 == g[Q][1] ? this.buildHall(12 * (c - 1) + 6 * (c - 1) + b + 12, 6 * d + 4 * d + 150) : 0 == g[Q][0] && 1 == g[Q][1] ? this.buildLadder(12 * c + 6 * c + b + 1, 6 * d + 4 * d + 151) : 0 == g[Q][0] && -1 == g[Q][1] ? this.buildLadder(12 * c + 6 * c + b + 12 - 1, 6 * (d - 1) + 4 * (d - 1) + 151) : 1 == g[Q][0] && 1 == g[Q][1] ? this.buildStaircase("up", 12 * c + 6 * c + b + 12, 6 * d + 4 * d + 150) : -1 == g[Q][0] && -1 == g[Q][1] ? this.buildStaircase("up", 12 * (c - 1) + 6 * (c - 1) + b + 12, 6 * (d - 1) + 4 * (d - 1) + 150) : 1 == g[Q][0] && -1 == g[Q][1] ? this.buildStaircase("down", 12 * c + 6 * c + b + 12, 6 * d + 4 * d + 150) : -1 == g[Q][0] && 1 == g[Q][1] && this.buildStaircase("down", 12 * (c - 1) + 6 * (c - 1) + b + 12, 6 * (d + 1) + 4 * (d + 1) + 150), c += g[Q][0], d += g[Q][1]);
            }
            this.generatingWorld = 3;
            this.blackScreen.loadingBar = 1;
        } else if (3 == this.generatingWorld) {
            this.blackScreen.statis = "Adding spawners...";
            for (b = 0; 21 > b;) ++b, this.makeMobSpawner(this.randomNumber(0, this.world.worldWidth - 1), this.randomNumber(0, 79));
            this.blackScreen.statis = "Adding mines...";
            for (b = 0; 81 > b;) ++b, this.makeMine(this.randomNumber(0, this.world.worldWidth - 1), this.randomNumber(0, 90), 3 + this.randomNumber(0, 3), 55, null);
            this.blackScreen.statis = "Adding caverns...";
            b = 0;
            for (a = this.randomNumber(70, 80) + 1; b < a;) ++b, this.makeCavern(this.randomNumber(0, this.world.worldWidth - 1), this.randomNumber(0, 70), this.liquids[this.randomNumber(0, this.liquids.length - 1)]);
            this.blackScreen.statis = "Adding caves...";
            b = 0;
            for (a = this.caves.length; b < a;) c = b++, this.makeMine(Math.floor(this.caves[c][0]), Math.floor(this.caves[c][1] + 4), 4, 7, "air");
            this.blackScreen.statis = "Adding bedrock...";
            for (b = 0; 301 > b;) c = b++, this.world.setFG(this.world.worldWidth - 1, c, "br"), this.world.setFG(0, c, "br"), this.world.setFG(-1, c, "air");
            b = 0;
            for (a = this.world.worldWidth - 2 + 1; b < a;) c = b++, this.world.setFG(c, 0, "br"), this.world.setFG(c, -1, "air");
            b = !1;
            do a = this.randomNumber(1, this.world.worldWidth - 1), c = this.randomNumber(1, 39), "r" == this.world.getFG(a, c) && (0 == this.world.cheats && 1 != this.world.gamemode && this.world.setFG(a, c, "j"), b = !0); while (1 != b);
            if (this.bonusChest) {
                this.blackScreen.statis = "Adding bonus chest...";
                b = Math.floor(Math.min(this.world.scene[Math.round(this.world.worldWidth / 2)].length, 140));
                for (a = 200; null != BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2), b), "walkThroughBlockHit") && 0 < --a;) --b;
                for (a = 1; 10 > a;) {
                    for (c = 1; 10 > c;) {
                        if (null != BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) + a, b + c), "walkThroughBlockHit") && null == BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) + a, b - 1 + c), "walkThroughBlockHit")) {
                            this.world.setFG(Math.round(this.world.worldWidth / 2) + a, b + c, "chest");
                            this.prizeChest(Math.round(this.world.worldWidth / 2) + a, b + c, "bonus");
                            a = 100;
                            break;
                        }
                        if (null != BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) - a, b + c), "walkThroughBlockHit") && null == BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) - a, b - 1 + c), "walkThroughBlockHit")) {
                            this.world.setFG(Math.round(this.world.worldWidth / 2) - a, b + c, "chest");
                            this.prizeChest(Math.round(this.world.worldWidth / 2) - a, b + c, "bonus");
                            a = 100;
                            break;
                        }
                        if (null != BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) + a, b - c), "walkThroughBlockHit") && null == BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) + a, b - 1 - c), "walkThroughBlockHit")) {
                            this.world.setFG(Math.round(this.world.worldWidth / 2) + a, b - c, "chest");
                            this.prizeChest(Math.round(this.world.worldWidth / 2) + a, b - c, "bonus");
                            a = 100;
                            break;
                        }
                        if (null != BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) - a, b - c), "walkThroughBlockHit") && null == BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2) - a, b - 1 - c), "walkThroughBlockHit")) {
                            this.world.setFG(Math.round(this.world.worldWidth / 2) - a, b - c, "chest");
                            this.prizeChest(Math.round(this.world.worldWidth / 2) - a, b - c, "bonus");
                            a = 100;
                            break;
                        }
                        ++c;
                    }
                    ++a;
                }
            }
            this.generatingWorld = 0;
            this.making = !0;
        } else if (1 == this.making) {
            this.blackScreen.statis = "Get ready...";
            if (this.firstTime) {
                b = Math.floor(Math.min(this.world.scene[Math.round(this.world.worldWidth / 2)].length, 140));
                for (a = 200; null != BlockData.get(this.world.getFG(Math.round(this.world.worldWidth / 2), b), "walkThroughBlockHit") && 0 < --a;) --b;
                ++b;
                this.world.worldX = Math.round(this.world.worldWidth / 2) + .5;
                this.world.worldY = -b + .1;
                this.world.spawnPoint = new lemongine.Point(this.world.worldX, this.world.worldY);
                this.world.savee();
            }
            this.firstTime = !1;
            this.resetCamera();
            this.making = !1;
            this.updateSelectedInventoryItemStuff();
            this.renderWorld();
            this.runBlockEventsFrame();
        }
    },
    onCertainInterval: function () {
        if (0 == this.generatingWorld && 1 != this.making) {
            this.getRotAngle();
            if (1 == this.world.sceneNum && !this.isScavenger && (this.musicCountdown--, 0 >= this.musicCountdown)) {
                this.musicCountdown = Main.Instance.get_fps() * (120 * Math.random() + 240) | 0;
                var b = Math.floor(5 * Math.random() + 1);
                1 == b ? lemongine.AssetManager.getSound("song" + b).play(1, 0, 0, 86.401) : 2 == b ? lemongine.AssetManager.getSound("song" + b).play(1, 0, 0, 51.699) : 3 == b ? lemongine.AssetManager.getSound("song" + b).play(1, 0, 0, 54.869) : 4 == b ? lemongine.AssetManager.getSound("song" + b).play(1, 0, 0, 49.714) : 5 == b && lemongine.AssetManager.getSound("song" + b).play(1, 0, 0, 59.072);
            }
            if (0 == this.world.tick % (300 * Main.Instance.get_fps() / 25 | 0)) {
                b = Object.keys(this.world.wheat.h);
                for (var a = b.length, c = 0; c < a;) {
                    var d = b[c++];
                    if (1 == (10 * Math.random() | 0)) if (7 > this.world.wheat.h[d]) this.world.wheat.h[d] += 1;else {
                        if (.3333333333333333 > Math.random()) {
                            var f = Std.parseInt(d.split("X")[1].split("Y")[0]),
                                l = Std.parseInt(d.split("X")[1].split("Y")[1]);
                            if ("wseed" == this.world.getFG(f, l)) {
                                if (!("mel" == this.world.getFG(f + 1, l) && 1 == this.world.states.h[d] || "mel" == this.world.getFG(f - 1, l) && -1 == this.world.states.h[d])) {
                                    var p = "air" != this.world.getFG(f - 1, l) ? 1 : "air" != this.world.getFG(f + 1, l) ? -1 : 2 * (2 * Math.random() | 0) - 1;
                                    if (1 == p && "dt" != this.world.getFG(f + 1, l - 1) && "farm" != this.world.getFG(f + 1, l - 1)) {
                                        if (p = -1, "dt" != this.world.getFG(f - 1, l - 1) && "farm" != this.world.getFG(f - 1, l - 1)) continue;
                                    } else if (-1 == p && "dt" != this.world.getFG(f - 1, l - 1) && "farm" != this.world.getFG(f - 1, l - 1) && (p = 1, "dt" != this.world.getFG(f + 1, l - 1) && "farm" != this.world.getFG(f + 1, l - 1))) continue;
                                    1 == p ? (this.world.states.h[d] = 1, this.world.setFG(f + 1, l, "mel")) : -1 == p && (this.world.states.h[d] = -1, this.world.setFG(f - 1, l, "mel"));
                                }
                            } else if ("pseed" == this.world.getFG(f, l) && !("pk" == this.world.getFG(f + 1, l) && 1 == this.world.states.h[d] || "pk" == this.world.getFG(f - 1, l) && -1 == this.world.states.h[d])) {
                                p = "air" != this.world.getFG(f - 1, l) ? 1 : "air" != this.world.getFG(f + 1, l) ? -1 : 2 * (2 * Math.random() | 0) - 1;
                                if (1 == p && "dt" != this.world.getFG(f + 1, l - 1) && "farm" != this.world.getFG(f + 1, l - 1)) {
                                    if (p = -1, "dt" != this.world.getFG(f - 1, l - 1) && "farm" != this.world.getFG(f - 1, l - 1)) continue;
                                } else if (-1 == p && "dt" != this.world.getFG(f - 1, l - 1) && "farm" != this.world.getFG(f - 1, l - 1) && (p = 1, "dt" != this.world.getFG(f + 1, l - 1) && "farm" != this.world.getFG(f + 1, l - 1))) continue;
                                1 == p ? (this.world.states.h[d] = 1, this.world.setFG(f + 1, l, "pk"), this.makeBlock(f + 1, l)) : -1 == p && (this.world.states.h[d] = -1, this.world.setFG(f - 1, l, "pk"), this.makeBlock(f - 1, l));
                            }
                        }
                        this.unlockAchieve(23);
                    }
                }
                1 > this.world.food / 100 && 5 < this.world.health && "peaceful" != this.world.difficulty && this.ouch(1, 1, "hunger");
                1 == this.getGameRule("dodaylightcycle") && (this.world.tim++, 100 <= this.world.tim && (this.world.day++, this.world.tim = 0));
            }
            if (this.world.tick % (156 * Main.Instance.get_fps() / 25 | 0) == (45 * Main.Instance.get_fps() / 25 | 0)) for (this.world.threadedSave(), this.world.food -= 3, 6 <= this.world.food / 100 && 9 >= this.world.food / 100 && (this.world.health += 1), b = Object.keys(this.world.toGrow.h), a = b.length, c = 0; c < a;) d = b[c++], f = Std.parseInt(HxOverrides.substr(d, 6, d.indexOf("Y") - 6)), l = Std.parseInt(HxOverrides.substr(d, d.indexOf("Y") + 1, null)), 1 == (70 * Math.random() | 0) && (("sl" != this.world.getFG(f, l) || "dt" != this.world.getFG(f, l - 1) && "cdt" != this.world.getFG(f, l - 1)) && ("gasd" != this.world.getFG(f, l) || "gb" != this.world.getFG(f, l - 1) && "gdt" != this.world.getFG(f, l - 1)) || "air" != this.world.getFG(f, l + 1) || "air" != this.world.getFG(f, l + 2) || "air" != this.world.getFG(f, l + 3) || "air" != this.world.getFG(f, l + 4) || "air" != this.world.getFG(f, l + 5) || "air" != this.world.getFG(f, l + 6) || "air" != this.world.getFG(f, l + 7) || (p = "gasd" == this.world.getFG(f, l), this.world.setFG(f, l, "wd1"), this.unlockAchieve(10), p && ("gb" == this.world.getFG(f, l - 1) ? (this.world.setFG(f, l - 1, "gdt"), this.makeBlock(f, l - 1)) : "gdt" == this.world.getFG(f, l - 1) && (this.world.setFG(f, l - 1, "dt"), this.makeBlock(f, l - 1))), this.makeTree(f + 1, l, !1, p), null != this.world.getBlock(f, l, !1) && this.world.getBlock(f, l).reload()), f = this.world.toGrow, Object.prototype.hasOwnProperty.call(f.h, d) && delete f.h[d]);
            this.world.tick % (82 * Main.Instance.get_fps() / 25 | 0) == (78 * Main.Instance.get_fps() / 25 | 0) && entities.Entity_Mob.recalculateMobCount();
            if (this.world.tick % (63 * Main.Instance.get_fps() / 25 | 0) == (33 * Main.Instance.get_fps() / 25 | 0)) {
                if (9 < this.world.food / 100 || "peaceful" == this.world.difficulty) this.world.health += 1;
                this.doThunder && (this.doThunder = !1, this.requestSound("distantThunder" + (10 * Math.random() + 1 | 0), (200 * (2 * Math.random() | 0) - 100) / 30, 0));
                (2 == this.world.raining && 1 == this.world.sceneNum || 2 == this.world.sceneNum) && 1 == (4 * Math.random() | 0) && ((30 < this.blockY || 2 == this.world.sceneNum) && this.lighting.bgLightPlay(), 1 == (10 * Math.random() | 0) && 1 == this.world.sceneNum ? this.newLightning().play() : this.doThunder = !0);
                3 == this.world.sceneNum ? "peaceful" != this.world.difficulty && 20 > this.world.endermanNum && 1 == (3 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("none", 4, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("enderman", b[0] + .5, -b[1])) : 2 == this.world.sceneNum ? "peaceful" != this.world.difficulty && (5 > this.world.nethereyeNum && 1 == (9 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("both", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("nethereye", b[0] + .5, -b[1])), 5 > this.world.ghastNum && 1 == (10 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("both", 5, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("ghast", b[0] + .5, -b[1])), 5 > this.world.blazeNum && 1 == (8 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("both", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("blaze", b[0] + .5, -b[1])), 4 > this.world.magmacubeNum && 1 == (8 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("both", 5, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("magmacube", b[0] + .5, -b[1])), 9 > this.world.zombiepigmanNum && 1 == (12 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("both", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("zombiepigman", b[0] + .5, -b[1])), 5 > this.world.endermanNum && 1 == (13 * Math.random() | 0) && (b = entities.Entity_Mob.findSpawnArea("both", 4, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("enderman", b[0] + .5, -b[1]))) : 1 == this.world.sceneNum && ("peaceful" != this.world.difficulty && (this.world.spiderNum < 5 + (53 < this.world.tim ? 5 : 0) && Math.random() < .025 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("dark", 3, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("spider", b[0] + .5, -b[1])), this.world.zombieNum < 7 + (53 < this.world.tim ? 5 : 0) && Math.random() < .05 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("zombie", b[0] + .5, -b[1])), this.world.endermanNum < 5 + (53 < this.world.tim ? 15 : 0) && Math.random() < .02 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("dark", 4, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("enderman", b[0] + .5, -b[1])), this.world.slimeNum < 4 + (53 < this.world.tim ? 3 : 0) && Math.random() < .016666666666666666 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("both", 5, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && 40 > b[1] && entities.Entity_Mob.spawnMob("slime", b[0] + .5, -b[1])), this.world.skeletonNum < 5 + (53 < this.world.tim ? 5 : 0) && Math.random() < .03333333333333333 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("skeleton", b[0] + .5, -b[1])), this.world.creeperNum < 4 + (53 < this.world.tim ? 5 : 0) && Math.random() < .03333333333333333 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("creeper", b[0] + .5, -b[1])), 5 > this.world.nethereyeNum && Math.random() < .02 * (1 + this.getDifficultyNumber() / 3) && (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("nethereye", b[0] + .5, -b[1]))), 1 == this.getGameRule("passivemobs") && (7 > this.world.squidNum && .008333333333333333 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("none", 6, !0, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("squid", b[0] + .5, -b[1])), 10 > this.world.pigNum && .01 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("none", 3, !0, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("pig", b[0] + .5, -b[1])), 10 > this.world.cowNum && .01 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("light", 3, !1, this.world.worldX, this.world.worldY, 15, 60), null != b && ("myc" == this.world.getFG(b[0], b[1] - 1) ? entities.Entity_Mob.spawnMob("mooshroom", b[0] + .5, -b[1]) : "desert" == this.getBiome(b[0]) ? .3333333333333333 > Math.random() && ("dt" == this.world.getFG(b[0], b[1] - 1) || "cdt" == this.world.getFG(b[0], b[1] - 1) || "sd" == this.world.getFG(b[0], b[1] - 1)) && entities.Entity_Mob.spawnMob("cowctus", b[0] + .5, -b[1]) : ("dt" == this.world.getFG(b[0], b[1] - 1) || "cdt" == this.world.getFG(b[0], b[1] - 1)) && entities.Entity_Mob.spawnMob("cow", b[0] + .5, -b[1]))), 10 > this.world.sheepNum && .01 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("light", 3, !0, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("sheep", b[0] + .5, -b[1])), 10 > this.world.chickenNum && .01 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("light", 2, !0, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("chicken", b[0] + .5, -b[1])), 10 > this.world.rabbitNum && .006666666666666667 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("light", 2, !0, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("rabbit", b[0] + .5, -b[1])), 10 > this.world.wolfNum && .006666666666666667 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("light", 3, !0, this.world.worldX, this.world.worldY, 15, 60), null != b && entities.Entity_Mob.spawnMob("wolf", b[0] + .5, -b[1])), 10 > this.world.batNum && .02 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("dark", 1, !1, this.world.worldX, this.world.worldY, 15, 60, !0), null != b && 60 > b[1] && entities.Entity_Mob.spawnMob("bat", b[0] + .5, -b[1]))));
            }
            if (this.world.tick % (27 * Main.Instance.get_fps() / 25 | 0) == (Main.Instance.get_fps() / 25 | 0)) {
                -5 > this.blockY && this.ouch(1, 4, "void");
                1 == this.world.gamemode && -40 > this.blockY && 0 == this.world.dead && (this.world.dead = 1);
                this.keysX && (this.world.food -= 3);
                if (0 < this.leftSprinting || 0 < this.rightSprinting) this.world.food -= 5;
                b = Object.keys(this.world.toSmelt.h);
                a = b.length;
                for (c = 0; c < a;) if (d = b[c++], l = this.world.toSmelt.h[d], null == l) f = this.world.toSmelt, Object.prototype.hasOwnProperty.call(f.h, d) && delete f.h[d];else {
                    p = Std.parseInt(HxOverrides.substr(d, 6, d.indexOf("Y") - 6));
                    var k = Std.parseInt(HxOverrides.substr(d, d.indexOf("Y") + 1, null));
                    null == l.h.input && (l.h.input = Game.emptyItem());
                    null == l.h.fuel && (l.h.fuel = Game.emptyItem());
                    null == l.h.output && (l.h.output = Game.emptyItem());
                    lemongine.Helpers.tripleEqual(l.h.input[1], "") && (l.h.input[1] = 1);
                    null == l.h.fuelTimer && (l.h.fuelTimer = 0);
                    null == l.h.smeltTimer && (l.h.smeltTimer = 0);
                    lemongine.Helpers.tripleEqual(l.h.fuel[1], "") && (l.h.fuel[1] = 1);
                    lemongine.Helpers.tripleEqual(l.h.output[1], "") && (l.h.output[1] = 1);
                    0 == l.h.fuelTimer && null != l.h.fuel[0] && 1 <= l.h.fuel[1] && null != l.h.input[0] && 1 <= l.h.input[1] && (f = BlockData.get(l.h.fuel[0], "fuel"), l.h.fuelTimerTotal = f, l.h.fuelTimer = f, "" == l.h.fuel[1] || 1 == l.h.fuel[1] ? "lbk" == l.h.fuel[0] ? l.h.fuel[0] = "bk" : (l.h.fuel[0] = null, l.h.fuel[1] = 0) : l.h.fuel[1]--);
                    if (0 < l.h.fuelTimer) {
                        if (null != this.world.getBlock(p, k, !1) && this.world.getBlock(p, k, !1).updateEvent(), --l.h.fuelTimer, null != l.h.input[0] && null != BlockData.get(l.h.input[0], "smeltsInto") && !Game.isEmptyItem(l.h.input) && 64 != l.h.output[1] && (0 == l.h.output[1] || null == l.h.output[1] || ("Array" == lemongine.Helpers.getQualifiedClassName(BlockData.get(l.h.input[0], "smeltsInto")) ? BlockData.get(l.h.input[0], "smeltsInto")[0] == l.h.output[0] && BlockData.get(l.h.input[0], "smeltsInto")[1] == js.Boot.__cast(l.h.output[3], haxe.ds.StringMap).h.type : BlockData.get(l.h.input[0], "smeltsInto") == l.h.output[0])) && (l.h.smeltTimer += 1, 10 <= l.h.smeltTimer)) {
                            l.h.smeltTimer = 0;
                            l.h.input[1]--;
                            if ("TNT" == l.h.input[0]) {
                                this.explode(Std.parseInt(d.split("X")[1].split("Y")[0]), Std.parseInt(d.split("X")[1].split("Y")[1]), 5, !1);
                                continue;
                            }
                            Game.isEmptyItem(l.h.output) && ("Array" == lemongine.Helpers.getQualifiedClassName(BlockData.get(l.h.input[0], "smeltsInto")) ? (l.h.output[0] = BlockData.get(l.h.input[0], "smeltsInto")[0], p = js.Boot.__cast(l.h.output[3], haxe.ds.StringMap), d = BlockData.get(l.h.input[0], "smeltsInto")[1], p.h.type = d) : l.h.output[0] = BlockData.get(l.h.input[0], "smeltsInto"));
                            0 == l.h.input[1] && (l.h.input[0] = "air");
                            l.h.output[1]++;
                        }
                    } else l.h.smeltTimer = 0, null != this.world.getBlock(p, k, !1) && this.world.getBlock(p, k, !1).updateEvent();
                    0 == l.h.input[1] && (l.h.input[0] = "air");
                    0 == l.h.fuel[1] && (l.h.fuel[0] = "air");
                    Game.isEmptyItem(l.h.output) && (l.h.output[0] = "air", l.h.output[1] = 0);
                }
                b = Object.keys(this.world.toBrew.h);
                a = b.length;
                for (c = 0; c < a;) if (d = this.world.toBrew.h[b[c++]], null == d.h.input && (d.h.input = Game.emptyItem()), null == d.h.fuel && (d.h.fuel = Game.emptyItem()), null == d.h.output && (d.h.output = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem()]), 0 >= d.h.fuelUsed && "bp" == d.h.fuel[0] && 0 < d.h.fuel[1] && (d.h.fuelUsed = 20, d.h.fuel[1]--, 0 == d.h.fuel[1] && (d.h.fuel[0] = null)), 0 != d.h.fuelUsed && null != d.h.input[0] && 0 < d.h.input[1] && (null != d.h.output[0][0] || null != d.h.output[1][0] || null != d.h.output[2][0])) {
                    f = !1;
                    for (l = 0; 3 > l;) if (p = Game.makeDynamicArray(d.h.output)[l++], null != this.potionData.h[Game.makeDynamicMap(p[3]).h.type] && null != Game.makeDynamicMap(this.potionData.h[Game.makeDynamicMap(p[3]).h.type].h.recipes).h[d.h.input[0]]) {
                        f = !0;
                        break;
                    } else if ("gp" == d.h.input[0] && "splash" != Game.makeDynamicMap(p[3]).h.category && !this.emptyPotion(Game.makeDynamicMap(p[3]).h.type)) {
                        f = !0;
                        break;
                    }
                    if (f) {
                        if (d.h.brewTimer += 1, 20 <= d.h.brewTimer) {
                            for (l = d.h.brewTimer = 0; 3 > l;) p = Game.makeDynamicArray(d.h.output)[l++], null != this.potionData.h[Game.makeDynamicMap(p[3]).h.type] && null != Game.makeDynamicMap(this.potionData.h[Game.makeDynamicMap(p[3]).h.type].h.recipes).h[d.h.input[0]] ? (f = Game.makeDynamicMap(this.potionData.h[Game.makeDynamicMap(p[3]).h.type].h.recipes).h[d.h.input[0]], Game.makeDynamicMap(p[3]).h.type = f, null != this.potionData.h[f].h.effects && (this.unlockAchieve(43), p = Game.makeDynamicMap(p[3]), f = lemongine.Helpers.clone(this.potionData.h[f].h.effects), p.h.effects = f)) : "gp" == d.h.input[0] && "splash" != Game.makeDynamicMap(p[3]).h.category && (Game.makeDynamicMap(p[3]).h.category = "splash");
                            --d.h.fuelUsed;
                            d.h.input[1]--;
                            0 >= d.h.input[1] && (d.h.input[0] = null);
                        }
                    } else d.h.brewTimer = 0;
                } else d.h.brewTimer = 0;
            }
            this.world.tick % (600 * Main.Instance.get_fps() / 25 | 0) == (597 * Main.Instance.get_fps() / 25 | 0) && (0 == (10 * Math.random() | 0) && 1 == this.defeatedEnder && this.unlockAchieve(36), 0 != this.isScavenger || this.world.rainDay == this.world.day && 1 != (30 * Math.random() | 0) || (this.world.rainDay = this.world.day, this.world.raining = 1 == (10 * Math.random() | 0) ? (2 * Math.random() | 0) + 1 : 0));
        }
    },
    inGame: function () {
        if (0 == this.get_pawsed()) {
            var b = ++this.world.tick,
                a = lemongine.Mathz.MAX_INT();
            this.world.tick = b % a;
            b = 0;
            for (a = this.hotbarSlots.length; b < a;) {
                var c = b++;
                this.hotbarSlots[c].setItem(this.world.inventoryItem(c));
            }
            this.inGame1();
        } else this.calculateDarkness(), this.resetCamera();
        1 == this.mouseD && (this.mouseD = 2);
        0 < this.rMouseD && this.rMouseD++;
        for (b = Main.Instance.mouses.iterator(); b.hasNext();) a = b.next(), "" == a.type && Main.Instance.tick - a.tick == Math.floor(Main.Instance.get_fps() / 2) && (a.afterQuickShiftClick ? (Main.Instance.quickShiftClick = 0, this.rMouseD = 1, this.waitTillRightMouseIsUp = !1) : (this.mouseD = 1, this.waitTillMouseIsUp = !1), a.pressed = !0);
        if (0 < Main.Instance.quickShiftClick) if (Main.Instance.quickShiftClick--, Main.Instance.quickShiftClick == Math.floor(2 + Main.Instance.get_fps() / 3)) {
            if (null == BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse") || 0 == BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) this.rMouseD = 1, this.waitTillRightMouseIsUp = !1;
        } else Main.Instance.quickShiftClick == Math.floor(Main.Instance.get_fps() / 3) && (this.rMouseD = 0, this.waitTillRightMouseIsUp = !1);
        G.gt(Main.Instance.keyDown(GlobalSave.intToKey.h[GlobalSave.keyBindings.h.secondClick.h.id]), 0) && 1 == GlobalSave.useRightClickKey ? this.shifting = !0 : this.shifting = !1;
        this.mouseWheelThing = !0;
    },
    inGame1: function () {
        this.onCertainInterval();
        this.manageEffects(this.world.player.id);
        0 > this.world.food && (this.world.food = 0);
        if (20 < this.world.health || 1 == this.world.gamemode) this.world.health = 20;
        0 > this.world.experience && (this.world.experience = 0);
        if (1E3 < this.world.food || 1 == this.world.gamemode) this.world.food = 1E3;
        this.world.health = Math.floor(this.world.health);
        this.world.food = Math.floor(this.world.food);
        this.world.experience = Math.floor(this.world.experience);
        null != this.world.mobs.h[this.ENDING] && 3 != this.world.sceneNum && (this.ENDING = null);
        if (0 >= this.world.health || 0 != this.world.dead) if (this.world.dead++, this.characterColorTransform = [1, .3, .3, 1, .0784313725490196, 0, 0, 0], this.characterRotation = (0 > this.characterXScale ? 1 : -1) * Math.sqrt(Math.min(1, this.world.dead / 20)) * 90, 30 < this.world.dead) {
            this.inventario.requestClose(!0);
            if (!this.getGameRule("keepinventory")) {
                for (var b = 0; 45 > b;) {
                    var a = b++;
                    Game.isEmptyItem(this.world.inventoryItem(a)) || this.addDrop(this.world.getInventoryItemType(a), this.world.worldX, this.world.worldY, this.world.getInventoryItemCount(a), this.world.getInventoryItemDamage(a), this.world.getInventoryItemExtras(a));
                }
                null != this.world.armors[0] && null != this.world.armors[0][0] && "" != this.world.armors[0][0] && "air" != this.world.armors[0][0] && this.addDrop(this.world.armors[0][0], this.world.worldX, this.world.worldY, 1, this.world.armors[0][1], this.world.armors[0][2]);
                null != this.world.armors[1] && null != this.world.armors[1][0] && "" != this.world.armors[1][0] && "air" != this.world.armors[1][0] && this.addDrop(this.world.armors[1][0], this.world.worldX, this.world.worldY, 1, this.world.armors[1][1], this.world.armors[1][2]);
                null != this.world.armors[2] && null != this.world.armors[2][0] && "" != this.world.armors[2][0] && "air" != this.world.armors[2][0] && this.addDrop(this.world.armors[2][0], this.world.worldX, this.world.worldY, 1, this.world.armors[2][1], this.world.armors[2][2]);
                null != this.world.armors[3] && null != this.world.armors[3][0] && "" != this.world.armors[3][0] && "air" != this.world.armors[3][0] && this.addDrop(this.world.armors[3][0], this.world.worldX, this.world.worldY, 1, this.world.armors[3][1], this.world.armors[3][2]);
                for (b = 0; 45 > b;) this.world.setInventoryItem(b++, Game.emptyItem());
                this.dropXP(this.world.worldX, this.world.worldY, Math.floor(.5 * this.world.experience), 0, !0, !1);
                this.world.armors = [["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()]];
                this.updateArmorRenderers();
                this.world.experience = 0;
            }
            this.world.hardcore && this.setGamemode(3);
            this.world.riding = "";
            this.world.xSpeed = 0;
            this.world.ySpeed = 0;
            this.world.health = 20;
            this.world.food = 1E3;
            this.world.effects = new haxe.ds.StringMap();
            this.resetEffectIcons();
            this.world.dead = 0;
            this.characterColorTransform = [1, 1, 1, 1, 0, 0, 0, 0];
            this.characterRotation = 0;
            this.cantMove = !1;
            this.world.savee();
            this.world.loadScene(1);
            this.world.worldX = this.world.spawnPoint.x;
            this.world.worldY = this.world.spawnPoint.y;
            this.world.savee();
            Main.Instance.set_frame("respawn");
            null != window.gameplayStop && window.gameplayStop();
            return;
        }
        0 == this.inventario.currentFrame && (1 == Main.Instance.keyDown(GlobalSave.intToKey.h[GlobalSave.keyBindings.h.dropItem.h.id]) && "air" != this.world.get_selectedInventoryItemType() && 0 < this.world.inventoryItem(this.world.selectedInventoryItem)[1] && (b = this.getFurthestEmptyBlock2(!0), G.gt(Main.Instance.keyDown(1073742049), 0) ? (this.addDrop(this.world.get_selectedInventoryItemType(), b[0] + 1 - .5, -(b[1] + 1) + .5, this.world.inventoryItem(this.world.selectedInventoryItem)[1], this.world.inventoryItem(this.world.selectedInventoryItem)[2], this.world.inventoryItem(this.world.selectedInventoryItem)[3]), this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem())) : (this.addDrop(this.world.get_selectedInventoryItemType(), b[0] + 1 - .5, -(b[1] + 1) + .5, 1, this.world.inventoryItem(this.world.selectedInventoryItem)[2], this.world.inventoryItem(this.world.selectedInventoryItem)[3]), "" == this.world.inventoryItem(this.world.selectedInventoryItem)[1] && this.world.setInventoryItemCount(this.world.selectedInventoryItem, 1), this.world.reduceInventoryItemCount(this.world.selectedInventoryItem))), 1 == this.blackScreen.currentFrame && 0 == this.world.sleepingAnimation && (1 == Main.Instance.keyDown(GlobalSave.getKeyBinding("tasks")) && (this.set_pawsed(!0), this.blackScreen.gotoAndStop(6)), 1 == Main.Instance.keyDown(GlobalSave.getKeyBinding("commands")) && this.inventario.gotoAndStop(10)));
        1 == Main.Instance.keyDown(GlobalSave.getKeyBinding("inventory")) && 0 == this.world.sleepingAnimation && (0 != this.inventario.currentFrame ? this.inventario.requestClose() : this.openInventario());
        -1 < this.itemUseAnimationTimer && (0 != this.inventario.currentFrame || 1 != this.blackScreen.currentFrame || this.itemUseAnimationSelectedItem != this.world.selectedInventoryItem || this.itemUseAnimationSelectedItemType != this.world.get_selectedInventoryItemType() || 0 == this.rMouseD ? this.resetUseItem() : (this.useItemAnimation(), 0 == this.itemUseAnimationTimer && this.useItem(), this.itemUseAnimationTimer--));
        this.cantMove = 0 == this.inventario.currentFrame && 1 == this.blackScreen.currentFrame ? !1 : !0;
        0 < this.world.dead && (this.cantMove = !0);
        this.cantMove || (0 != this.rMouseD && (this.furthestEmptyBlock = this.getFurthestEmptyBlock(!1, !0)), this.closestMinableBlock = this.getClosestBlock(!1), 1 == this.world.gamemode && "Sword" != HxOverrides.substr(this.world.get_selectedInventoryItemType(), -5, 5) && (this.placeDelay += 6), this.placeDelay++, this.gCMTimer++, 3 != this.world.gamemode ? this.mineAndPlaceCode() : 1 == this.rMouseD && 1 == BlockData.get(this.world.getFG(this.closestMinableBlock[0], this.closestMinableBlock[1]), "shiftClickSpectator") && null != this.world.getBlock(this.closestMinableBlock[0] | 0, this.closestMinableBlock[1] | 0) && this.world.getBlock(this.closestMinableBlock[0] | 0, this.closestMinableBlock[1] | 0).useEvent());
        b = Object.keys(this.transformMobs.h);
        a = b.length;
        for (var c = 0; c < a;) {
            var d = b[c++];
            "pig" == this.world.mobs.h[d].h.type ? (entities.Entity_Mob.spawnMob("zombiepigman", this.world.mobs.h[d].h.x, this.world.mobs.h[d].h.y, this.world.mobs.h[d].h.mobName), this.world.riding == d && (this.world.riding = ""), this.getMob(d).removeMob(d)) : "creeper" == this.world.mobs.h[d].h.type && (this.world.mobs.h[d].h.charged = !0);
        }
        this.transformMobs.h = Object.create(null);
        this.doPlayerLogic();
        this.runBlockEventsFrame();
        this.runWorldLogic();
        if (0 < this.world.raining && 1 == this.world.sceneNum) {
            c = a = 0;
            if (!this.playingRainSound || 3 > this.closeRains.length || Main.Instance.MUTED) c = a = 0;else for (b = 0, d = this.closeRains.length; b < d;) {
                var f = b++,
                    l = 1 - Math.max(0, Math.min(1, Math.sqrt(Math.pow(this.closeRains[f][0], 2) + Math.pow(this.closeRains[f][1], 2)) / 276));
                a += l;
                c += Math.max(-1, Math.min(1, this.closeRains[f][0] / 276)) * l;
            }
            this.rainVol = .99 * this.rainVol + a / 50 * .01;
            this.rainPan = .99 * this.rainPan + c / 50 * .04;
            this.playingRainSound ? (lemongine.AssetManager.getSound("rainsound_0").set_volume(this.rainVol), lemongine.AssetManager.getSound("rainsound_0").set_pan(this.rainPan)) : (this.playingRainSound = !0, lemongine.AssetManager.getSound("rainsound_0").play(GlobalSave.soundVol / 100 * this.rainVol, this.rainPan, 0, 6.861, 1E6));
            do this.closeRains.shift(); while (50 < this.closeRains.length);
            0 == this.world.tick % 10 && this.closeRains.shift();
            for (b = 0; 3 > b;) ++b, .5 > Math.random() || (a = this.camera.x - 9.2 + (700 * Math.random() | 0) / 30 - 3.3333333333333335, "desert" != this.getBiome(Math.round(a)) && (0 == this.getSnowRegion(Math.round(a)) ? new particles.Particle_Rain(a, Math.floor(-this.world.worldHeight - 3.3333333333333335), this, this.world) : 1 == (5 * Math.random() | 0) && new particles.Particle_Snow(a, Math.floor(-this.world.worldHeight - 3.3333333333333335), this, this.world)));
        } else 0 < this.rainVol && (this.rainVol *= .99, this.rainPan *= .99, .01 >= this.rainVol && (this.rainVol = 0), this.playingRainSound && (0 == this.rainVol ? (this.playingRainSound = !1, lemongine.AssetManager.getSound("rainsound_0").stop()) : (lemongine.AssetManager.getSound("rainsound_0").set_volume(this.rainVol), lemongine.AssetManager.getSound("rainsound_0").set_pan(this.rainPan))));
        this.calculateDarkness();
        b = Object.keys(this.skinLoadingCallbacks.h);
        a = b.length;
        for (c = 0; c < a;) this.getSkinObject(b[c++]);
    },
    calculateDarkness: function () {
        if (2 == this.world.sceneNum) this.darkness = .5;else if (3 == this.world.sceneNum) this.darkness = .42;else {
            var b = 0;
            this.hasEffect("nightvision") || (b += Math.max(this.timeDarkness[this.world.tim] - .2, 0), b += 25 * this.world.raining / 100);
            "ShadesCap" == this.world.armors[0][0] && (b += .1);
            b += 3 * this.deepness * (this.hasEffect("waterbreathing") ? .5 : 1) / 100;
            var a = -this.world.worldY;
            this.darkness = 70 == this.world.worldHeight ? 50 <= a ? Math.min(.1 + b, .85) : 30 >= a ? .9 : Math.min(.1 + .85 * (1 - (a - 30) / 20) + b, .85) : 300 < a ? .9 : 270 < a ? Math.min(.9, Math.min(.1 + b, .85) + (a - 270) / 30 * .8) : 90 <= a ? Math.min(.1 + b, .85) : 70 >= a ? .9 : Math.min(.1 + .85 * (1 - (a - 70) / 20) + b, .85);
        }
        this.hasEffect("nightvision") ? (this.lighting.playerFrame = 2, this.lighting.playerAlpha = 1) : (this.lighting.playerFrame = 1, this.lighting.playerAlpha = Math.max(0, 2 * this.darkness - 1));
        null != this.vignetteEntity && this.vignetteEntity.setUniform("coloro", [0, 0, 0, .8 * Math.min(1, this.darkness + .5)]);
        this.lighting.bgLightAlpha = Math.max(0, 1.2 * (this.darkness - .9) + .99);
    },
    addParticles: function (b, a, c, d, f, l, p) {
        null == l && (l = !1);
        null == c && (c = 5);
        null == a && (a = 0);
        if (0 != GlobalSave.particles || l) switch (a += c * (GlobalSave.particles - 1), null == p && (p = new haxe.ds.StringMap()), b) {
        case "criticalhit":
            for (c = 0; c < a;) ++c, new particles.Particle_Critical(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "effect":
            for (c = 0; c < a;) ++c, new particles.Particle_Effect(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world, [p.h.r, p.h.g, p.h.b]);
            break;
        case "ender":
            for (c = 0; c < a;) ++c, new particles.Particle_EnderSparkle(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "grow":
            for (c = 0; c < a;) ++c, new particles.Particle_Grow(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "heart":
            for (c = 0; c < a;) ++c, new particles.Particle_Heart(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "lavabubble":
            for (c = 0; c < a;) ++c, new particles.Particle_LavaBubble(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "mining":
            for (c = 0; c < a;) ++c, l = new particles.Particle_Mining(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world), b = p.h.color, l.init(), null != b && (l.color = new lemongine.Color().fromRGB(b[0], b[1], b[2]));
            break;
        case "chicken":
        case "magmacube":
        case "portal":
        case "slime":
        case "snowball":
            for (c = 0; c < a;) ++c, l = new particles.Particle_Mining(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world), "slime" == b ? l.slime = !0 : "snowball" == b ? l.snowball = !0 : "chicken" == b ? l.chicken = !0 : "magmacube" == b ? l.magmacube = !0 : "portal" == b && (l.portal = !0), l.init();
            break;
        case "raythings":
            for (c = 0; c < a;) ++c, new particles.Particle_RayThing(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "shockwave":
            for (c = 0; c < a;) ++c, l = new particles.Particle_Shockwave(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world), null != p.h.scale && (l.scale = p.h.scale);
            break;
        case "smoke":
            for (c = 0; c < a;) ++c, new particles.Particle_Smoke(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "smoke2":
            for (c = 0; c < a;) ++c, new particles.Particle_Smoke2(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
            break;
        case "spark":
            for (c = 0; c < a;) ++c, new particles.Particle_Spark(d.x + Math.random() * d.y, f.x + Math.random() * f.y, .2 * Math.random() - .1, .2 * Math.random() - .1, this, this.world);
            break;
        case "torchtip":
            new particles.Particle_TorchTip(d.x, f.x, this, this.world);
            break;
        case "water":
            for (c = 0; c < a;) {
                ++c;
                l = new particles.Particle_Water(d.x + Math.random() * d.y, f.x + Math.random() * f.y, this, this.world);
                if ("up" == p.h.bubble || "down" == p.h.bubble) l.bubbleDirection = p.h.bubble;
                l.init();
            }
        }
    },
    fallingBlockCollision: function (b, a, c, d) {
        b = new lemongine.Rectangle(b, a, c, d);
        a = Object.keys(this.world.fallingBlocks.h);
        c = a.length;
        for (d = 0; d < c;) {
            var f = a[d++];
            if (new lemongine.Rectangle(this.world.fallingBlocks.h[f][2] - .5, this.world.fallingBlocks.h[f][3] - .5, 1, 1).intersects(b)) return f;
        }
        return null;
    },
    resetCamera: function () {
        null == this.world.mobs.h[this.ENDING] && (0 < this.screenTilter && (this.screenTilter = ++this.screenTilter % 5), this.camera.x = this.world.worldX / 1 + (0 < this.screenTilter ? 10 * Math.sin(1.6 * Math.floor(this.world.tick / 2)) / this.zoom : 0), this.camera.y = this.world.worldY / 1 + (0 < this.screenTilter ? 10 * Math.cos(1.6 * Math.floor(this.world.tick / 2)) / this.zoom : 0));
    },
    mineAndPlaceCode: function () {
        0 == this.mouseD && (this.interactLock = 0);
        this.mouseBlock = this.selectedBlock();
        if (0 == this.world.sleepingAnimation && !(6 > this.placeDelay)) if (0 != this.rMouseD) {
            if (!this.waitTillRightMouseIsUp) {
                var b = !1,
                    a = !1,
                    c = !1;
                1 == this.rMouseD && null != BlockData.get(this.world.getFG(this.closestMinableBlock[0], this.closestMinableBlock[1]), "shiftClickBlock") && (c = !0, this.isShiftClickAndContinue = !1, this.waitTillRightMouseIsUp = !0, null != this.world.getBlock(this.closestMinableBlock[0], this.closestMinableBlock[1]) && this.world.getBlock(this.closestMinableBlock[0], this.closestMinableBlock[1]).useEvent(), this.placeDelay = 0);
                if (!c || this.isShiftClickAndContinue) {
                    c = this.getClosestMob();
                    if (null != c) {
                        var d = this.getBreedableMob(this.mouseWorldPosition.x | 0, this.mouseWorldPosition.y | 0, this.world.get_selectedInventoryItemType());
                        if (null != d) {
                            1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1);
                            this.waitTillRightMouseIsUp = !0;
                            this.addParticles("heart", 5, 0, new lemongine.Point(this.world.mobs.h[d].h.x, 0), new lemongine.Point(this.world.mobs.h[d].h.y - 2, 0), !0);
                            var f = this.world.mobs.h[d];
                            c = 30 * Main.Instance.get_fps();
                            f.h.breedTimer = c;
                            this.world.mobs.h[d].h.breedTarget = "";
                            return;
                        }
                        f = this.getGrowableMob(this.mouseWorldPosition.x | 0, this.mouseWorldPosition.y | 0, this.world.get_selectedInventoryItemType());
                        if (null != f) {
                            1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1);
                            this.addParticles("grow", 5, 0, new lemongine.Point(this.world.mobs.h[f].h.x, 0), new lemongine.Point(this.world.mobs.h[f].h.y - 2, 0), !0);
                            d = this.world.mobs.h[f];
                            d.h.babyTimer *= .8;
                            return;
                        }
                    }
                    if (null == BlockData.get(this.world.get_selectedInventoryItemType(), "usable")) {
                        if (null != c) if ("wolf" == this.world.mobs.h[c].h.type) {
                            if (1 == this.world.mobs.h[c].h.tamed) {
                                this.world.mobs.h[c].h.sitting = !this.world.mobs.h[c].h.sitting;
                                this.world.mobs.h[c].h.target = null;
                                this.waitTillRightMouseIsUp = !0;
                                return;
                            }
                        } else if ("pig" == this.world.mobs.h[c].h.type && null != this.world.mobs.h[c].h.saddleItem && "saddle" == this.world.mobs.h[c].h.saddleItem[0]) {
                            this.world.riding = c;
                            this.world.mobs.h[c].h.riddenBy = this.world.player.id;
                            this.waitTillRightMouseIsUp = !0;
                            return;
                        }
                    } else if (null != BlockData.get(this.world.get_selectedInventoryItemType(), "food") && 1 != BlockData.get(this.world.get_selectedInventoryItemType(), "placeable")) null != Game.makeDynamicMap(BlockData.get(this.world.get_selectedInventoryItemType(), "food")).h.dog && null != c && "wolf" == this.world.mobs.h[c].h.type && 1 == this.world.mobs.h[c].h.tamed && 20 > this.world.mobs.h[c].h.health ? (this.useUpItem(), this.world.mobs.h[c].h.health = Math.min(20, this.world.mobs.h[c].h.health + 5)) : this.canEatFood(this.world.get_selectedInventoryItemType()) && this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("potion" == this.world.get_selectedInventoryItemType()) 1 == this.emptyPotion(this.world.get_selectedInventoryItemExtra().h.type) ? (c = this.getClosestBlock(!0), null != c && "wr" == this.world.getFG(c[0], c[1]) && (this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), d = new haxe.ds.StringMap(), d.h.type = "water", this.addDrop("potion", this.world.worldX, this.world.worldY, 1, null, d)), this.waitTillRightMouseIsUp = !0) : this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("mbk" == this.world.get_selectedInventoryItemType()) this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("bk" == this.world.get_selectedInventoryItemType() || 1 == this.world.gamemode && "bk" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -2, 2)) null != c && "cow" == this.world.mobs.h[c].h.type && 0 == this.world.mobs.h[c].h.babyTimer && (this.world.setInventoryItemType(this.world.selectedInventoryItem, "mbk"), this.waitTillRightMouseIsUp = !0), c = this.getClosestBlock(!0), "wr" == this.world.getFG(c[0], c[1]) ? ("bk" == this.world.get_selectedInventoryItemType() && this.world.setInventoryItemType(this.world.selectedInventoryItem, "wbk"), this.requestRemove(c[0], c[1], !0, !1, !0), b = this.waitTillRightMouseIsUp = !0) : "la" == this.world.getFG(c[0], c[1]) ? ("bk" == this.world.get_selectedInventoryItemType() && this.world.setInventoryItemType(this.world.selectedInventoryItem, "lbk"), this.requestRemove(c[0], c[1], !0, !1, !0), b = this.waitTillRightMouseIsUp = !0) : "ad" == this.world.getFG(c[0], c[1]) && ("bk" == this.world.get_selectedInventoryItemType() && this.world.setInventoryItemType(this.world.selectedInventoryItem, "abk"), this.requestRemove(c[0], c[1], !0, !1, !0), b = this.waitTillRightMouseIsUp = !0);else if ("raft" == this.world.get_selectedInventoryItemType()) this.closestMinableBlock = this.getClosestBlock(!0), "wr" == this.world.getFG(this.closestMinableBlock[0], this.closestMinableBlock[1]) && (1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), c = 1E9 * Math.random() | 0, this.world.rafts.h["raft" + c] = Game.makeDynamicArray(["raft" + c, this.closestMinableBlock[0], -1 * this.closestMinableBlock[1], 0, 0, this.world.player.id]), this.world.riding = "raft" + c, this.waitTillRightMouseIsUp = !0);else if ("fas" == this.world.get_selectedInventoryItemType()) null != c ? (this.world.onFire.h[c] = !0, this.damageTool()) : null != this.mouseBlock && (this.canFireExistAt(this.mouseBlock.x | 0, this.mouseBlock.y | 0) ? "portalstone" == this.world.getFG(this.mouseBlock.x, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x + 1, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x + 1 + 1, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x + 1 + 1, this.mouseBlock.y) && "portalstone" == this.world.getFG(this.mouseBlock.x - 1, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x - 1, this.mouseBlock.y) && "air" == this.world.getFG(this.mouseBlock.x + 1, this.mouseBlock.y) ? (this.unlockAchieve(31), this.world.setFG(this.mouseBlock.x, this.mouseBlock.y, "portal"), this.world.setFG(this.mouseBlock.x + 1, this.mouseBlock.y, "portal"), this.makeBlock(this.mouseBlock.x | 0, this.mouseBlock.y | 0), this.makeBlock((this.mouseBlock.x | 0) + 1, this.mouseBlock.y | 0), this.damageTool()) : "portalstone" == this.world.getFG(this.mouseBlock.x, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x - 1, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x - 1 - 1, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x - 1 - 1, this.mouseBlock.y) && "portalstone" == this.world.getFG(this.mouseBlock.x + 1, this.mouseBlock.y - 1) && "portalstone" == this.world.getFG(this.mouseBlock.x + 1, this.mouseBlock.y) && "air" == this.world.getFG(this.mouseBlock.x - 1, this.mouseBlock.y) ? (this.unlockAchieve(31), this.world.setFG(this.mouseBlock.x, this.mouseBlock.y, "portal"), this.world.setFG(this.mouseBlock.x - 1, this.mouseBlock.y, "portal"), this.makeBlock(this.mouseBlock.x | 0, this.mouseBlock.y | 0), this.makeBlock((this.mouseBlock.x | 0) - 1, this.mouseBlock.y | 0), this.damageTool()) : "air" == this.world.getFG(this.mouseBlock.x, this.mouseBlock.y) && (this.world.setFG(this.mouseBlock.x, this.mouseBlock.y, "fire"), this.makeBlock(this.mouseBlock.x | 0, this.mouseBlock.y | 0), this.damageTool()) : this.canBeOnFire(this.mouseBlock.x | 0, this.mouseBlock.y | 0) && (this.canFireExistAt(this.mouseBlock.x | 0, this.mouseBlock.y + 1 | 0) ? "air" == this.world.getFG(this.mouseBlock.x, this.mouseBlock.y + 1) && (this.world.setFG(this.mouseBlock.x, this.mouseBlock.y + 1, "fire"), this.makeBlock(this.mouseBlock.x | 0, this.mouseBlock.y + 1 | 0), this.damageTool()) : this.blockX < this.mouseBlock.x ? this.canFireExistAt(this.mouseBlock.x - 1 | 0, this.mouseBlock.y | 0) && "air" == this.world.getFG(this.mouseBlock.x - 1, this.mouseBlock.y) && (this.world.setFG(this.mouseBlock.x - 1, this.mouseBlock.y, "fire"), this.makeBlock(this.mouseBlock.x - 1 | 0, this.mouseBlock.y | 0), this.damageTool()) : this.blockX > this.mouseBlock.x && this.canFireExistAt(this.mouseBlock.x + 1 | 0, this.mouseBlock.y | 0) && "air" == this.world.getFG(this.mouseBlock.x + 1, this.mouseBlock.y) && (this.world.setFG(this.mouseBlock.x + 1, this.mouseBlock.y, "fire"), this.makeBlock(this.mouseBlock.x + 1 | 0, this.mouseBlock.y | 0), this.damageTool()))), this.waitTillRightMouseIsUp = !0;else if ("Shear" == this.world.get_selectedInventoryItemType()) null != c && ("sheep" != this.world.mobs.h[c].h.type || this.world.mobs.h[c].h.sheared ? "cow" == this.world.mobs.h[c].h.type && null != this.getMob(c) && this.getMob(c).shearMob(c) && this.damageTool() : null != this.getMob(c) && this.getMob(c).shearMob(c) && this.damageTool());else if ("snowb" == this.world.get_selectedInventoryItemType()) {
                        1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1);
                        this.requestSound("throwsfx");
                        this.waitTillRightMouseIsUp = !0;
                        f = this.world.snowballs;
                        var l = Game.uniqueID(this.world.snowballs, "snowball");
                        d = new haxe.ds.StringMap();
                        d.h.x = this.world.worldX + 20 * Math.cos(this.rotAngle) / 30;
                        d.h.y = this.world.worldY - 1.5 + 20 * Math.sin(this.rotAngle) / 30;
                        d.h.speedX = Game.migrateSpeed(20 * Math.cos(this.rotAngle));
                        d.h.speedY = Game.migrateSpeed(20 * Math.sin(this.rotAngle));
                        d.h.rotation = this.rotAngle;
                        d.h.timer = 0;
                        d.h.shotBy = this.world.player.id;
                        c = .4 * Main.Instance.get_fps();
                        d.h.cooldown = c;
                        f.h[l] = Game.makeDynamicMap(d);
                    } else if ("megg" == this.world.get_selectedInventoryItemType()) null != this.mouseBlock && (c = Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.type, f = !1, 2 == this.world.gamemode ? this.matchCanPlaceOn(this.mouseBlock.x | 0, this.mouseBlock.y | 0, this.world.get_selectedInventoryItemExtra().h.canPlaceOn) && (f = !0, this.requestSound("throwsfx"), entities.Entity_Mob.spawnMob(c, this.mouseBlock.x + .5, -this.mouseBlock.y - .5, null != this.world.get_selectedInventoryItemExtra().h.nameChange ? this.world.get_selectedInventoryItemExtra().h.nameChange : null)) : (f = !0, this.requestSound("throwsfx"), entities.Entity_Mob.spawnMob(c, this.mouseBlock.x + .5, -this.mouseBlock.y - .5, null != this.world.get_selectedInventoryItemExtra().h.nameChange ? this.world.get_selectedInventoryItemExtra().h.nameChange : null)), f && 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1)), this.waitTillRightMouseIsUp = !0;else if ("dtb" == this.world.get_selectedInventoryItemType() || "egg" == this.world.get_selectedInventoryItemType() || "fireegg" == this.world.get_selectedInventoryItemType() || "ep" == this.world.get_selectedInventoryItemType()) this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("eoe" == this.world.get_selectedInventoryItemType()) 1 == this.world.sceneNum && (this.closestMinableBlock = this.getClosestBlock(!0), "pf" != this.world.getFG(this.closestMinableBlock[0], this.closestMinableBlock[1]) && (1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("throwsfx"), this.waitTillRightMouseIsUp = !0, c = Game.uniqueID(this.world.entities, "eyeOfEnder"), f = new entities.Entity_EyeOfEnder("eyeOfEnder", null, c, null, this, this.world), this.world.entities.h[c] = f, f.set_x(this.blockX + 1), f.set_y(-1 * this.blockY - 2)));else if ("bow" == this.world.get_selectedInventoryItemType()) 1 != this.world.gamemode && -1 == this.findInInventory("arrow") || this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("boe" == this.world.get_selectedInventoryItemType()) 1 != this.world.gamemode && (this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), d = new haxe.ds.StringMap(), d.h.type = "empty", this.addDrop("potion", this.world.worldX, this.world.worldY, 1, null, d)), this.waitTillRightMouseIsUp = !0, this.dropXP(this.world.worldX + 60 * Math.cos(this.rotAngle) / 30, this.world.worldY - 1 + 60 * Math.sin(this.rotAngle) / 30, 1E3);else if ("spear" == this.world.get_selectedInventoryItemType()) this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("bl" == this.world.get_selectedInventoryItemType()) {
                        if (this.waitTillRightMouseIsUp = !0, null != this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id]) {
                            this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem());
                            this.requestSound("throwsfx");
                            Game.makeDynamicMap(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id]).h.attached = null;
                            Game.makeDynamicMap(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id]).h.inventory = null;
                            this.closestMinableBlock = this.getClosestBlock(!0);
                            if ("fnc" == this.world.getFG(this.closestMinableBlock[0], this.closestMinableBlock[1]) || "nfnc" == this.world.getFG(this.closestMinableBlock[0], this.closestMinableBlock[1])) f = Game.makeDynamicMap(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id]), d = new haxe.ds.StringMap(), d.h.type = "block", d.h.x = this.closestMinableBlock[0], d.h.y = this.closestMinableBlock[1], f.h.attached = d;else if (null != c) {
                                f = !0;
                                d = Object.keys(this.world.balloons.h);
                                l = d.length;
                                for (var p = 0; p < l;) {
                                    var Q = d[p++];
                                    if (null != Game.makeDynamicMap(this.world.balloons.h[Q]).h.attached && "mob" == Game.makeDynamicMap(Game.makeDynamicMap(this.world.balloons.h[Q]).h.attached).h.type && Game.makeDynamicMap(Game.makeDynamicMap(this.world.balloons.h[Q]).h.attached).h.id == c) {
                                        f = !1;
                                        break;
                                    }
                                }
                                f && (f = Game.makeDynamicMap(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id]), d = new haxe.ds.StringMap(), d.h.type = "mob", d.h.id = c, f.h.attached = d);
                            }
                            c = Game.uniqueID(this.world.balloons, "balloon");
                            this.world.balloons.h[c] = this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id];
                            this.renamedBalloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id] = c;
                            l = "Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id;
                            c = this.world.balloons;
                            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
                            null != this.world.entities.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id] && this.world.entities.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id].remove();
                        }
                    } else if ("bshur" == this.world.get_selectedInventoryItemType()) this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"));else if ("fr" == this.world.get_selectedInventoryItemType()) this.waitTillRightMouseIsUp = !0, Object.prototype.hasOwnProperty.call(this.world.entities.h, "bobber_" + this.world.player.id) || (f = this.world.entities, l = "bobber_" + this.world.player.id, c = new entities.Entity_Bobber("bobber", new haxe.ds.StringMap(), "bobber_" + this.world.player.id, [], this, this.world), f.h[l] = c), js.Boot.__cast(this.world.entities.h["bobber_" + this.world.player.id], entities.Entity_Bobber).throwIt();else if ("Cap" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -3, 3)) {
                        if ("air" == this.world.armors[0][0] || "" == this.world.armors[0][0] || null == this.world.armors[0][0]) {
                            this.world.armors[0][0] = this.world.get_selectedInventoryItemType();
                            this.world.armors[0][1] = this.world.getInventoryItemDamage(this.world.selectedInventoryItem);
                            this.world.armors[0][2] = new haxe.ds.StringMap();
                            d = Object.keys(this.world.get_selectedInventoryItemExtra().h);
                            l = d.length;
                            for (p = 0; p < l;) Q = d[p++], f = Game.makeDynamicMap(this.world.armors[0][2]), c = this.world.get_selectedInventoryItemExtra().h[Q], f.h[Q] = c;
                            this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem());
                            this.updateArmorRenderers();
                        }
                    } else if ("Shirt" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -5, 5)) {
                        if ("air" == this.world.armors[1][0] || "" == this.world.armors[1][0] || null == this.world.armors[1][0]) {
                            this.world.armors[1][0] = this.world.get_selectedInventoryItemType();
                            this.world.armors[1][1] = this.world.getInventoryItemDamage(this.world.selectedInventoryItem);
                            this.world.armors[1][2] = new haxe.ds.StringMap();
                            d = Object.keys(this.world.get_selectedInventoryItemExtra().h);
                            l = d.length;
                            for (p = 0; p < l;) Q = d[p++], f = Game.makeDynamicMap(this.world.armors[1][2]), c = this.world.get_selectedInventoryItemExtra().h[Q], f.h[Q] = c;
                            this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem());
                            this.updateArmorRenderers();
                        }
                    } else if ("Pants" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -5, 5)) {
                        if ("air" == this.world.armors[2][0] || "" == this.world.armors[2][0] || null == this.world.armors[2][0]) {
                            this.world.armors[2][0] = this.world.get_selectedInventoryItemType();
                            this.world.armors[2][1] = this.world.getInventoryItemDamage(this.world.selectedInventoryItem);
                            this.world.armors[2][2] = new haxe.ds.StringMap();
                            d = Object.keys(this.world.get_selectedInventoryItemExtra().h);
                            l = d.length;
                            for (p = 0; p < l;) Q = d[p++], f = Game.makeDynamicMap(this.world.armors[2][2]), c = this.world.get_selectedInventoryItemExtra().h[Q], f.h[Q] = c;
                            this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem());
                            this.updateArmorRenderers();
                        }
                    } else if ("Shoes" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -5, 5)) {
                        if ("air" == this.world.armors[3][0] || "" == this.world.armors[3][0] || null == this.world.armors[3][0]) {
                            this.world.armors[3][0] = this.world.get_selectedInventoryItemType();
                            this.world.armors[3][1] = this.world.getInventoryItemDamage(this.world.selectedInventoryItem);
                            this.world.armors[3][2] = new haxe.ds.StringMap();
                            d = Object.keys(this.world.get_selectedInventoryItemExtra().h);
                            l = d.length;
                            for (p = 0; p < l;) Q = d[p++], f = Game.makeDynamicMap(this.world.armors[3][2]), c = this.world.get_selectedInventoryItemExtra().h[Q], f.h[Q] = c;
                            this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem());
                            this.updateArmorRenderers();
                        }
                    } else if ("cart" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), 0, 4)) null != this.mouseBlock && "rail" == HxOverrides.substr(this.world.getFG(this.mouseBlock.x, this.mouseBlock.y), 0, 4) && (this.waitTillRightMouseIsUp = !0, l = Game.uniqueID(this.world.carts, "cart"), f = this.world.carts, d = new haxe.ds.StringMap(), d.h.id = l, d.h.x = this.closestMinableBlock[0] + .5, d.h.y = -1 * this.closestMinableBlock[1], d.h.speedX = 0, d.h.speedY = 0, d.h.riddenBy = null, d.h.onActivator = !1, c = HxOverrides.substr(this.world.get_selectedInventoryItemType(), 4, null), d.h.type = c, d.h.health = 3, d.h.tilt = 0, d.h.onRail = 0, f.h[l] = Game.makeDynamicMap(d), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1));else if ("Hoe" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -3, 3)) null == this.mouseBlock || "dt" != this.world.getFG(this.mouseBlock.x, this.mouseBlock.y) && "cdt" != this.world.getFG(this.mouseBlock.x, this.mouseBlock.y) || (2 == this.world.gamemode ? this.matchCanPlaceOnDirect(this.closestMinableBlock[0], this.closestMinableBlock[1], this.world.get_selectedInventoryItemExtra().h.canPlaceOn) && (this.world.setFG(this.closestMinableBlock[0], this.closestMinableBlock[1], "farm"), this.reloadBlock(this.closestMinableBlock[0], this.closestMinableBlock[1]), this.placeDelay = 0, this.damageTool()) : (this.world.setFG(this.closestMinableBlock[0], this.closestMinableBlock[1], "farm"), this.reloadBlock(this.closestMinableBlock[0], this.closestMinableBlock[1]), this.placeDelay = 0, this.damageTool()));else if ("bonem" == this.world.get_selectedInventoryItemType()) d = !1, null != c && ("sheep" == this.world.mobs.h[c].h.type && "white" != this.world.mobs.h[c].h.color ? (this.world.mobs.h[c].h.color = "white", d = !0) : "wolf" == this.world.mobs.h[c].h.type && 1 == this.world.mobs.h[c].h.tamed && this.world.mobs.h[c].h.tamedBy == this.world.player.id && "white" != this.world.mobs.h[c].h.collarColor && (this.world.mobs.h[c].h.collarColor = "white", d = !0)), d || null == this.mouseBlock || (d = this.useBonemeal(this.mouseBlock.x | 0, this.mouseBlock.y | 0)), this.waitTillRightMouseIsUp = !0, d && 1 != this.world.gamemode && (this.placeDelay = 0, this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1));else if ("sw" == this.world.get_selectedInventoryItemType()) {
                        if (null != this.mouseBlock) if ("wr" != this.world.getFG(this.mouseBlock.x, this.mouseBlock.y)) a = !0;else if (10 != this.world.water.h["blockX" + this.mouseBlock.x + "Y" + this.mouseBlock.y][0] || 10 != this.world.water.h["blockX" + this.mouseBlock.x + "Y" + this.mouseBlock.y][1]) a = !0;
                    } else "bowl" == this.world.get_selectedInventoryItemType() ? null != c && "cow" == this.world.mobs.h[c].h.type && "mooshroom" == this.world.mobs.h[c].h.variant && (this.world.setInventoryItemType(this.world.selectedInventoryItem, "soup"), b = !0) : "tag" == this.world.get_selectedInventoryItemType() ? null != this.world.get_selectedInventoryItemExtra().h.nameChange && null != c && (f = this.world.mobs.h[c], c = this.world.get_selectedInventoryItemExtra().h.nameChange, f.h.name = c, this.waitTillRightMouseIsUp = !0, 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1)) : "cbook" == this.world.get_selectedInventoryItemType() ? null != this.world.get_selectedInventoryItemExtra().h.command && (this.interpretCommand(this.world.get_selectedInventoryItemExtra().h.command), this.waitTillRightMouseIsUp = !0, null != this.world.get_selectedInventoryItemExtra().h.uses && (0 < this.world.get_selectedInventoryItemExtra().h.uses && (f = this.world.get_selectedInventoryItemExtra().h.uses, this.world.get_selectedInventoryItemExtra().h.uses = f - 1), 0 == this.world.get_selectedInventoryItemExtra().h.uses && this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem()))) : "saddle" == this.world.get_selectedInventoryItemType() ? null != c && "pig" == this.world.mobs.h[c].h.type && (null == this.world.mobs.h[c].h.saddleItem || "saddle" != js.Boot.__cast(this.world.mobs.h[c].h.saddleItem, Array)[0]) && 0 >= this.world.mobs.h[c].h.babyTimer && (this.world.mobs.h[c].h.saddleItem = Game.makeDynamicArray(["saddle", 1, 0, new haxe.ds.StringMap()]), this.waitTillRightMouseIsUp = !0, 1 != this.world.gamemode && this.world.setInventoryItem(this.world.selectedInventoryItem, Game.emptyItem())) : "dye" == this.world.get_selectedInventoryItemType() ? (d = !1, null != c && ("sheep" == this.world.mobs.h[c].h.type ? (f = Colors.colors, l = this.world.get_selectedInventoryItemExtra().h.type, Object.prototype.hasOwnProperty.call(f.h, l) && "rainbow" != this.world.get_selectedInventoryItemExtra().h.type && this.world.mobs.h[c].h.color != this.world.get_selectedInventoryItemExtra().h.type && (f = this.world.mobs.h[c], c = this.world.get_selectedInventoryItemExtra().h.type, f.h.color = c, d = this.waitTillRightMouseIsUp = !0)) : "wolf" == this.world.mobs.h[c].h.type && (1 == this.world.mobs.h[c].h.tamed && this.world.mobs.h[c].h.tamedBy == this.world.player.id ? (f = Colors.colors, l = this.world.get_selectedInventoryItemExtra().h.type, f = Object.prototype.hasOwnProperty.call(f.h, l)) : f = !1, f && "rainbow" != this.world.get_selectedInventoryItemExtra().h.type && this.world.mobs.h[c].h.collarColor != this.world.get_selectedInventoryItemExtra().h.type && (f = this.world.mobs.h[c], c = this.world.get_selectedInventoryItemExtra().h.type, f.h.collarColor = c, d = this.waitTillRightMouseIsUp = !0))), d && 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1)) : "ccb" == this.world.get_selectedInventoryItemType() || "ll" == this.world.get_selectedInventoryItemType() || "ink" == this.world.get_selectedInventoryItemType() ? (f = "brown", "ll" == this.world.get_selectedInventoryItemType() ? f = "blue" : "ink" == this.world.get_selectedInventoryItemType() && (f = "black"), d = !1, null != c && ("sheep" == this.world.mobs.h[c].h.type ? this.world.mobs.h[c].h.color != f && (this.world.mobs.h[c].h.color = f, d = this.waitTillRightMouseIsUp = !0) : "wolf" == this.world.mobs.h[c].h.type && 1 == this.world.mobs.h[c].h.tamed && this.world.mobs.h[c].h.tamedBy == this.world.player.id && this.world.mobs.h[c].h.collarColor != f && (this.world.mobs.h[c].h.collarColor = f, d = this.waitTillRightMouseIsUp = !0)), d && 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1)) : "bone" == this.world.get_selectedInventoryItemType() ? Object.prototype.hasOwnProperty.call(this.world.mobs.h, c) && "wolf" == this.world.mobs.h[c].h.type && this.world.mobs.h[c].h.target != this.world.player.id && !this.world.mobs.h[c].h.tamed && (this.waitTillRightMouseIsUp = a = !0, 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), 0 == (3 * Math.random() | 0) && (this.unlockAchieve(11), this.addParticles("heart", 5, 0, new lemongine.Point(this.world.mobs.h[c].h.x, 0), new lemongine.Point(this.world.mobs.h[c].h.y, 0), !0), this.world.mobs.h[c].h.tamed = !0, this.world.mobs.h[c].h.tamedBy = this.world.player.id, this.world.mobs.h[c].h.sitting = !0, this.world.mobs.h[c].h.target = null, this.world.wolfNum--)) : "seed" == this.world.get_selectedInventoryItemType() ? null != this.mouseBlock && "farm" != this.world.getFG(this.mouseBlock.x, this.mouseBlock.y - 1) && (a = !0) : "carrot" == this.world.get_selectedInventoryItemType() ? null != this.mouseBlock && "farm" != this.world.getFG(this.mouseBlock.x, this.mouseBlock.y - 1) && (a = !0, this.canEatFood(this.world.get_selectedInventoryItemType()) && this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"))) : "potato" == this.world.get_selectedInventoryItemType() ? null != this.mouseBlock && "farm" != this.world.getFG(this.mouseBlock.x, this.mouseBlock.y - 1) && (a = !0, this.canEatFood(this.world.get_selectedInventoryItemType()) && this.startUseItem(BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse"))) : "lp" == this.world.get_selectedInventoryItemType() && (null != this.mouseBlock && "wr" == this.world.getFG(this.mouseBlock.x, this.mouseBlock.y) && "air" == this.world.getFG(this.mouseBlock.x, this.mouseBlock.y + 1) && Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + this.mouseBlock.x + "Y" + this.mouseBlock.y) && 10 == this.world.water.h["blockX" + this.mouseBlock.x + "Y" + this.mouseBlock.y][0] && 10 == this.world.water.h["blockX" + this.mouseBlock.x + "Y" + this.mouseBlock.y][1] && (2 == this.world.gamemode ? this.matchCanPlaceOn(this.mouseBlock.x | 0, this.mouseBlock.y + 1 | 0, this.world.get_selectedInventoryItemExtra().h.canPlaceOn) && (this.world.setFG(this.mouseBlock.x, this.mouseBlock.y + 1, "lp"), this.makeBlock(this.mouseBlock.x | 0, this.mouseBlock.y + 1 | 0), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1)) : (this.world.setFG(this.mouseBlock.x, this.mouseBlock.y + 1, "lp"), this.makeBlock(this.mouseBlock.x | 0, this.mouseBlock.y + 1 | 0), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1))), a = !0);
                    if (!b && !a && !this.cantMove && (this.furthestEmptyBlock = this.getFurthestEmptyBlock(!1, !1, BlockData.get(this.world.get_selectedInventoryItemType(), "placeNextToWater")), null != this.furthestEmptyBlock[0] && BlockData.get(this.world.get_selectedInventoryItemType(), "placeable") && (b = this.world.get_selectedInventoryItemType(), this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]) != b && (2 != this.world.gamemode || this.matchCanPlaceOn(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], this.world.get_selectedInventoryItemExtra().h.canPlaceOn))))) {
                        if (null != BlockData.get(this.world.get_selectedInventoryItemType(), "placeOn") && (c = BlockData.get(this.world.get_selectedInventoryItemType(), "placeOn"), !this.matchBlockDataPlaceOn(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], c))) return;
                        c = !1;
                        f = [this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]];
                        BlockData.get(this.world.get_selectedInventoryItemType(), "walkThroughBlockHit") && !BlockData.get(this.world.get_selectedInventoryItemType(), "actuallyHasCollisionThough") ? c = !0 : f[0] == Math.floor(this.world.worldX - (10 + (this.sneakingOrUsingItem() ? 4 : 0)) / 30) && (f[1] == this.blockY + 1 || f[1] == this.blockY + 2) || f[0] == Math.floor((this.world.worldX + (10 + (this.sneakingOrUsingItem() ? 4 : 0)) / 30) / 1) && (f[1] == this.blockY + 1 || f[1] == this.blockY + 2) || null != this.fallingBlockCollision(f[0], -f[1] - 1, 1, 1) || "air" != this.world.getFG(f[0], f[1]) && null == BlockData.get(this.world.getFG(f[0], f[1]), "liquid") && null == BlockData.get(this.world.getFG(f[0], f[1]), "replaceable") || (c = !0);
                        c && 0 <= this.world.selectedInventoryItem && 8 >= this.world.selectedInventoryItem && (this.placeDelay = 0, "carpet" == this.world.get_selectedInventoryItemType() || "cloth" == this.world.get_selectedInventoryItemType() || "bdcloth" == this.world.get_selectedInventoryItemType() || "gs" == this.world.get_selectedInventoryItemType() || "bdgs" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), null != this.world.get_selectedInventoryItemExtra() && null != this.world.get_selectedInventoryItemExtra().h.type && (f = this.world.states, l = "blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]), c = this.world.get_selectedInventoryItemExtra().h.type, f.h[l] = c)) : "mh" == this.world.get_selectedInventoryItemType() || "carpet" == this.world.get_selectedInventoryItemType() || "cloth" == this.world.get_selectedInventoryItemType() || "bdcloth" == this.world.get_selectedInventoryItemType() || "gs" == this.world.get_selectedInventoryItemType() || "bdgs" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), null != this.world.get_selectedInventoryItemExtra() && null != this.world.get_selectedInventoryItemExtra().h.type && (f = this.world.states, l = "blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]), c = this.world.get_selectedInventoryItemExtra().h.type, f.h[l] = c), this.blockX > this.furthestEmptyBlock[0] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]) + "_2"] = 2 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]) + "_2"] = 1) : "chest" == this.world.get_selectedInventoryItemType() || "oven" == this.world.get_selectedInventoryItemType() || "brew" == this.world.get_selectedInventoryItemType() || "enchant" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), null != this.world.get_selectedInventoryItemExtra() && null != this.world.get_selectedInventoryItemExtra().h.nameChange ? (f = this.world.states, l = "blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]), c = this.world.get_selectedInventoryItemExtra().h.nameChange, f.h[l] = c) : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = "") : "dropper" == this.world.get_selectedInventoryItemType() || "dispense" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), null != this.world.get_selectedInventoryItemExtra() && null != this.world.get_selectedInventoryItemExtra().h.nameChange && (f = this.world.states, l = "blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]) + "_3", c = this.world.get_selectedInventoryItemExtra().h.nameChange, f.h[l] = c), this.blockX < this.furthestEmptyBlock[0] - 1 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.blockX > this.furthestEmptyBlock[0] + 1 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2 : this.blockY < this.furthestEmptyBlock[1] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 4 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3) : "anvil" == this.world.get_selectedInventoryItemType() ? null != this.fallingBlockCollision(this.furthestEmptyBlock[0], -this.furthestEmptyBlock[1] - 1, 1, 1) ? a = !0 : (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), null != this.world.get_selectedInventoryItemExtra() && null != this.world.get_selectedInventoryItemExtra().h.damage && (f = this.world.states, l = "blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]), c = this.world.get_selectedInventoryItemExtra().h.damage, f.h[l] = c)) : "wbk" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.water.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = [10, 10], null != this.world.getBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1) && js.Boot.__cast(this.world.getBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]), blocks.Block_Water).ifWater(), this.updateAround(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1), b = "wr", this.waitTillRightMouseIsUp = !0) : "lbk" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.water.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = [10, 10], null != this.world.getBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1) && js.Boot.__cast(this.world.getBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]), blocks.Block_Lava).ifWater(), this.updateAround(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1), b = "la", this.waitTillRightMouseIsUp = !0) : "abk" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.water.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = [10, 10], null != this.world.getBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1) && js.Boot.__cast(this.world.getBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]), blocks.Block_Acid).ifWater(), this.updateAround(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1), b = "ad", this.waitTillRightMouseIsUp = !0) : "sign" == this.world.get_selectedInventoryItemType() ? null != BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") ? a = !0 : (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.signs.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = "Enter sign text here", this.inventario.sign = "blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1]), this.inventario.gotoAndStop(6)) : 1 == BlockData.get(this.world.get_selectedInventoryItemType(), "stairBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), 1 == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") ? this.world.worldX < this.furthestEmptyBlock[0] + .5 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2 : 1 == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1), "walkThroughBlock") ? this.world.worldX < this.furthestEmptyBlock[0] + .5 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 4 : this.blockY > this.furthestEmptyBlock[1] - 1 ? this.world.worldX < this.furthestEmptyBlock[0] + .5 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2 : this.world.worldX < this.furthestEmptyBlock[0] + .5 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 4) : 1 == BlockData.get(this.world.get_selectedInventoryItemType(), "halfBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), 1 == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : 1 == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1), "walkThroughBlock") ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2 : this.blockY > this.furthestEmptyBlock[1] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2) : "lant" == this.world.get_selectedInventoryItemType() || "th" == this.world.get_selectedInventoryItemType() || "ortorch" == this.world.get_selectedInventoryItemType() || "rstorch" == this.world.get_selectedInventoryItemType() || "button" == this.world.get_selectedInventoryItemType() || "lever" == this.world.get_selectedInventoryItemType() ? this.blockX == this.furthestEmptyBlock[0] ? null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1) : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0] - 1, this.furthestEmptyBlock[1]), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2) : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0] + 1, this.furthestEmptyBlock[1]), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3) : a = !0 : this.blockX < this.furthestEmptyBlock[0] ? null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0] + 1, this.furthestEmptyBlock[1]), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3) : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1) : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0] - 1, this.furthestEmptyBlock[1]), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2) : a = !0 : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0] - 1, this.furthestEmptyBlock[1]), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2) : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1) : null == BlockData.get(this.world.getFG(this.furthestEmptyBlock[0] + 1, this.furthestEmptyBlock[1]), "walkThroughBlock") ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3) : a = !0 : "hay" == this.world.get_selectedInventoryItemType() || "wd" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.blockX < this.furthestEmptyBlock[0] - 1 || this.blockX > this.furthestEmptyBlock[0] + 1 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1) : "piston" == this.world.get_selectedInventoryItemType() || "spiston" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.blockX < this.furthestEmptyBlock[0] - 1 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 4 : this.blockX > this.furthestEmptyBlock[0] + 1 ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2 : this.blockY > this.furthestEmptyBlock[1] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 3) : "dt" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2) : "dtg" == this.world.get_selectedInventoryItemType() ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), b = "dt", this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1) : "dr" == this.world.get_selectedInventoryItemType() ? "air" != this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1) && "air" == this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1) ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.blockX > this.furthestEmptyBlock[0] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2, b = "dr1", this.world.setFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1, "dr2"), this.makeBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1)) : a = !0 : "bbdr" == this.world.get_selectedInventoryItemType() ? "air" != this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1) && "air" == this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1) ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.blockX > this.furthestEmptyBlock[0] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2, b = "bdr1", this.world.setFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1, "bdr2"), this.makeBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1)) : a = !0 : "idr" == this.world.get_selectedInventoryItemType() ? "air" != this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] - 1) && "air" == this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1) ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.blockX > this.furthestEmptyBlock[0] ? this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 1 : this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = 2, b = "idr3", this.world.setFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1, "idr4"), this.makeBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1] + 1)) : a = !0 : "bed" == this.world.get_selectedInventoryItemType() && ("air" == this.world.getFG(this.furthestEmptyBlock[0] + 1, this.furthestEmptyBlock[1]) ? (this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), b = "white", null != this.world.get_selectedInventoryItemExtra() && null != this.world.get_selectedInventoryItemExtra().h.type && (b = this.world.get_selectedInventoryItemExtra().h.type), this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0]) + "Y" + Std.string(this.furthestEmptyBlock[1])] = b, this.world.states.h["blockX" + Std.string(this.furthestEmptyBlock[0] + 1) + "Y" + Std.string(this.furthestEmptyBlock[1])] = b, b = "bed1", this.world.setFG(this.furthestEmptyBlock[0] + 1, this.furthestEmptyBlock[1], "bed2"), this.makeBlock(this.furthestEmptyBlock[0] + 1, this.furthestEmptyBlock[1])) : a = !0), a || (this.unlockAchieve(1), "air" != this.world.getFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]) && this.mineBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1, !1), this.world.setFG(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], b), this.makeBlock(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1]), this.updateAround(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], !1), "anvil" == b ? this.requestSound("anvilsound", 0, 0, .5, 1) : this.blockSound(this.furthestEmptyBlock[0], this.furthestEmptyBlock[1], this.world.worldX - this.furthestEmptyBlock[0], this.world.worldY - this.furthestEmptyBlock[1]), 1 != this.world.gamemode && ("bk" != HxOverrides.substr(this.world.get_selectedInventoryItemType(), 1, 2) ? this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1) : this.world.setInventoryItemType(this.world.selectedInventoryItem, "bk"))));
                    }
                }
            }
        } else if (0 != this.mouseD && !this.waitTillMouseIsUp) if (c = null, 1 != this.interactLock && (c = this.getClosestMob()), null != c) {
            if (this.interactLock = 2, this.world.lastTarget = c, this.world.mobs.h[c].h.target = this.world.player.id, a = 0, "wolf" != this.world.mobs.h[c].h.type || 1 != this.world.mobs.h[c].h.tamed) {
                b = null != this.world.effects.h.strength ? Game.makeDynamicMap(this.world.effects.h.strength).h.level * Game.makeDynamicMap(this.effectData.h.strength).h.perLevel : 0;
                b += null != this.world.effects.h.weakness ? Game.makeDynamicMap(this.world.effects.h.weakness).h.level * Game.makeDynamicMap(this.effectData.h.weakness).h.perLevel : 0;
                if (null == BlockData.get(this.world.get_selectedInventoryItemType(), "hitStrength")) -1 > this.world.ySpeed && (++b, a += 5, 1 != GlobalSave.particles && this.addParticles("criticalhit", 5, 0, new lemongine.Point(this.world.mobs.h[c].h.x, 0), new lemongine.Point(this.world.mobs.h[c].h.y - 1, 0))), "cow" == this.world.mobs.h[c].h.type && "cowctus" == this.world.mobs.h[c].h.variant && this.ouch(1, -Math.floor(Math.max(1, (1 + b) / 2)), "attack"), null != this.getMob(c) && this.getMob(c).hurtMob(c, Math.max(1, 1 + b), "attack", this.world.player.id);else {
                    f = this.world.get_selectedInventoryItemExtra();
                    Object.prototype.hasOwnProperty.call(f.h, "sharpness1") ? b += (2 * Math.random() | 0) + 1 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "sharpness2") ? b += (3 * Math.random() | 0) + 2 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "sharpness3") ? b += (4 * Math.random() | 0) + 3 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "sharpness4") && (b += (5 * Math.random() | 0) + 4))));
                    if ("zombie" == this.world.mobs.h[c].h.type || "skeleton" == this.world.mobs.h[c].h.type || "zombiepigman" == this.world.mobs.h[c].h.type) f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "smite1") ? b += (2 * Math.random() | 0) + 1 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "smite2") ? b += (3 * Math.random() | 0) + 2 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "smite3") ? b += (4 * Math.random() | 0) + 3 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "smite4") && (b += (5 * Math.random() | 0) + 4))));
                    "spider" == this.world.mobs.h[c].h.type && (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "baneOfArthropods1") ? b += (3 * Math.random() | 0) + 2 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "baneOfArthropods2") ? b += (4 * Math.random() | 0) + 3 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "baneOfArthropods3") && (b += (5 * Math.random() | 0) + 4))));
                    -1 > this.world.ySpeed && (b += Math.floor((BlockData.get(this.world.get_selectedInventoryItemType(), "hitStrength") + b) * ((20 * Math.random() | 0) + 30) / 100), a += 5, 1 != GlobalSave.particles && this.addParticles("criticalhit", 5, 0, new lemongine.Point(this.world.mobs.h[c].h.x, 0), new lemongine.Point(this.world.mobs.h[c].h.y - 1, 0)));
                    null != this.getMob(c) && this.getMob(c).hurtMob(c, Math.max(1, BlockData.get(this.world.get_selectedInventoryItemType(), "hitStrength") + b | 0), "attack", this.world.player.id);
                    this.damageTool();
                }
                this.stopMiningAnimation = this.miningAnimation = !0;
                f = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(f.h, "knockback1") ? a += 10 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "knockback2") ? a += 20 : (f = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(f.h, "knockback3") && (a += 30)));
                f = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(f.h, "fireAspect") && (this.world.onFire.h[c] = !0);
                "squid" == this.world.mobs.h[c].h.type ? (a = Math.atan2(this.world.worldY - this.world.mobs.h[c].h.y, this.world.worldX - this.world.mobs.h[c].h.x), this.world.mobs.h[c].h.speedX = 2 * Math.cos(a), this.world.mobs.h[c].h.speedY = 2 * Math.sin(a)) : (d = this.world.mobs.h[c], d.h.speedX += (this.world.mobs.h[c].h.x > this.world.worldX ? 1 : -1) * (7 * (1 + (null != this.world.effects.h.speed ? Game.makeDynamicMap(this.world.effects.h.speed).h.level * Game.makeDynamicMap(this.effectData.h.speed).h.perLevel / 100 : 0)) + (0 != this.leftSprinting || 0 != this.rightSprinting ? 15 : 0) + a), null != this.getMob(c) && this.collision(this.world.mobs.h[c].h.x + .7 * this.getMob(c).mobCollisionBounds(c).get_left(), this.world.mobs.h[c].h.y + 1, .7 * this.getMob(c).mobCollisionBounds(c).width, 0, 4, !1) && (d = this.world.mobs.h[c], d.h.speedY += Game.migrateSpeed(4 + (0 != this.leftSprinting || 0 != this.rightSprinting ? 4 : 0) + a / 4), d = this.world.mobs.h[c], d.h.y -= .3333333333333333));
                this.placeDelay = 0;
            }
        } else 2 != this.interactLock && null != this.closestMinableBlock && this.canMineBlock(this.closestMinableBlock[0], this.closestMinableBlock[1]) && this.startMiningBlock(this.closestMinableBlock[0], this.closestMinableBlock[1]);
    },
    getMob: function (b) {
        return js.Boot.__cast(this.world.entities.h[b], entities.Entity_Mob);
    },
    matchCanPlaceOn: function (b, a, c) {
        if (null == c) return !1;
        var d = -1 < c.indexOf("all");
        return -1 < c.indexOf(BlockData.get(this.world.getFG(b + 1, a), "identifier")) || -1 < c.indexOf(BlockData.get(this.world.getFG(b, a + 1), "identifier")) || -1 < c.indexOf(BlockData.get(this.world.getFG(b + -1, a), "identifier")) || -1 < c.indexOf(BlockData.get(this.world.getFG(b, a + -1), "identifier")) || -1 < c.indexOf(BlockData.get(this.world.getFG(b, a), "identifier")) ? !d : d;
    },
    matchCanPlaceOnDirect: function (b, a, c) {
        if (null == c) return !1;
        var d = -1 < c.indexOf("all");
        return -1 < c.indexOf(BlockData.get(this.world.getFG(b, a), "identifier")) ? !d : d;
    },
    matchBlockDataPlaceOn: function (b, a, c) {
        if ("Object" == lemongine.Helpers.getQualifiedClassName(c[0])) for (var d = Object.keys(c[0].h), f = d.length, l = 0; l < f;) if ("SOLID" == d[l++]) {
            if (1 != BlockData.get(this.world.getFG(b, a - 1), "walkThroughBlock")) return !0;
        } else {
            var g = this.world.getFG(b, a - 1);
            if (Object.prototype.hasOwnProperty.call(c[0].h, g)) return !0;
        }
        if ("Object" == lemongine.Helpers.getQualifiedClassName(c[2])) for (d = Object.keys(c[2].h), f = d.length, l = 0; l < f;) if ("SOLID" == d[l++]) {
            if (1 != BlockData.get(this.world.getFG(b, a + 1), "walkThroughBlock")) return !0;
        } else if (g = this.world.getFG(b, a + 1), Object.prototype.hasOwnProperty.call(c[2].h, g)) return !0;
        if ("Object" == lemongine.Helpers.getQualifiedClassName(c[1])) for (d = Object.keys(c[1].h), f = d.length, l = 0; l < f;) if ("SOLID" == d[l++]) {
            if (1 != BlockData.get(this.world.getFG(b - 1, a), "walkThroughBlock") || 1 != BlockData.get(this.world.getFG(b + 1, a), "walkThroughBlock")) return !0;
        } else {
            g = this.world.getFG(b - 1, a);
            if (Object.prototype.hasOwnProperty.call(c[1].h, g)) return !0;
            g = this.world.getFG(b + 1, a);
            if (Object.prototype.hasOwnProperty.call(c[1].h, g)) return !0;
        }
        return !1;
    },
    canMineBlock: function (b, a) {
        var c = this.world.getFG(b, a);
        return "air" == this.world.getFG(b, a) || 1 == BlockData.get(c, "liquid") || "br" == c && 1 != this.world.gamemode ? !1 : 2 == this.world.gamemode ? null != this.world.get_selectedInventoryItemExtra().h.canDestroy ? (c = -1 < this.world.get_selectedInventoryItemExtra().h.canDestroy.indexOf("all"), -1 < this.world.get_selectedInventoryItemExtra().h.canDestroy.indexOf(BlockData.get(this.world.getFG(b, a), "identifier")) ? !c : c) : !1 : !0;
    },
    startMiningBlock: function (b, a) {
        this.interactLock = 1;
        var c = !1;
        this.currentlyMining = this.world.getFG(b, a);
        this.currentlyMiningBlock = [b, a];
        if (null == this.world.getBlock(b, a)) this.world.getBlock(b, a, !0);else if (1 == this.world.gamemode && "Sword" != HxOverrides.substr(this.world.get_selectedInventoryItemType(), -5, 5)) 1 != this.world.getBlock(b, a).goingIn && (this.world.getBlock(b, a).goingIn = 1, this.world.getBlock(b, a).miningCountdown = 0, this.world.getBlock(b, a).gotoAndStop("mining")), this.placeDelay = 4;else {
            if (1 == this.world.get_selectedInventoryTool()) {
                var d = BlockData.get(this.world.getFG(b, a), "mining");
                if (null != d) {
                    var f = this.world.get_selectedInventoryItemType();
                    f = Object.prototype.hasOwnProperty.call(d.h, f);
                } else f = !1;
                f && (c = Game.makeDynamicMap(BlockData.get(this.world.getFG(b, a), "mining")), f = this.world.get_selectedInventoryItemType(), f = c.h[f], c = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(c.h, "efficiency1") ? f *= .7 : (c = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(c.h, "efficiency2") && (f *= .4)), this.inWater && null != this.world.armors[0][2] && !Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[0][2]).h, "aguaAffinity") && (f *= 2), this.world.getBlock(b, a).goingIn != Math.floor(f) && (f = Math.max(1, Math.floor(f)) / 25 * Main.Instance.get_fps() | 0, this.world.getBlock(b, a).goingIn = this.world.getBlock(b, a).miningCountdown = f, this.world.getBlock(b, a).gotoAndStop("mining")), this.placeDelay = 0, c = !0);
            }
            0 == c && (d = BlockData.get(this.world.getFG(b, a), "mining"), null != d && Object.prototype.hasOwnProperty.call(d.h, "None") && (f = Game.makeDynamicMap(BlockData.get(this.world.getFG(b, a), "mining")).h.None, this.inWater && (f *= 2), this.world.getBlock(b, a).goingIn != Math.floor(f) && (f = Math.max(1, Math.floor(f)) / 25 * Main.Instance.get_fps() | 0, this.world.getBlock(b, a).goingIn = this.world.getBlock(b, a).miningCountdown = f, this.world.getBlock(b, a).gotoAndStop("mining")), this.placeDelay = 0));
        }
    },
    startUseItem: function (b) {
        null == b && (b = 0);
        this.itemUseAnimationTimer = b;
        this.itemUseAnimationSelectedItem = this.world.selectedInventoryItem;
        this.itemUseAnimationSelectedItemType = this.world.get_selectedInventoryItemType();
        this.waitTillRightMouseIsUp = !0;
        this.canEatFood(this.world.get_selectedInventoryItemType()) || "mbk" == this.world.get_selectedInventoryItemType() ? this.eatingAnimation = !0 : "bow" == this.world.get_selectedInventoryItemType() || "spear" == this.world.get_selectedInventoryItemType() || "bshur" == this.world.get_selectedInventoryItemType() || "egg" == this.world.get_selectedInventoryItemType() || "fireegg" == this.world.get_selectedInventoryItemType() || "ep" == this.world.get_selectedInventoryItemType() || "dtb" == this.world.get_selectedInventoryItemType() ? this.bowAnimation = !0 : "potion" == this.world.get_selectedInventoryItemType() && ("splash" == this.world.get_selectedInventoryItemExtra().h.category ? this.bowAnimation = !0 : this.eatingAnimation = !0);
    },
    renderBowDrawback: function () {
        if (null == this.bowDrawbackPool) {
            var b = Textures.blockTextures,
                a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.bowDrawbackPool = new QuadPoolEntity_MatrixState(b, lemongine.shader.BlendMode.NORMAL, a, c);
            this.bowDrawbackPool.layer = 0;
            this.bowDrawbackPool.isTransparent = !0;
            this.bowDrawbackPool.forceNoCulling = !0;
            this.bowDrawbackPool.updateQuad(this.bowDrawbackBowQuad, null, null, null, new lemongine.Point());
            this.bowDrawbackItemRenderer = new Item(this.bowDrawbackPool, 0, 0, this, []);
        }
        this.bowDrawbackPool.updateQuad(this.bowDrawbackBowQuad, null, new lemongine.Point(), new lemongine.Point());
        switch (this.bowDrawbackFrame) {
        case "1":
            return;
        case "2":
        case "3":
        case "4":
        case "5":
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(24).rotate2D(3 * -Math.PI / 4);
            this.bowDrawbackItemRenderer.set_item(["arrow", 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())]);
            this.bowDrawbackItemRenderer.render();
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(32).rotate2D(3 * -Math.PI / 4);
            b = Textures.getTexture("bow", "2" == this.bowDrawbackFrame ? "" : "drawback_" + (Std.parseInt(this.bowDrawbackFrame) - 2));
            this.bowDrawbackPool.updateQuad(this.bowDrawbackBowQuad, new lemongine.Vector3(), new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1, 1));
            break;
        case "bshur":
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(24).rotate2D(-Math.PI / 4);
            this.bowDrawbackItemRenderer.set_item([this.bowDrawbackFrame, 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())]);
            this.bowDrawbackItemRenderer.render();
            break;
        case "dtb":
        case "egg":
        case "ep":
        case "fireegg":
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(15.36).rotate2D(this.rotAngle);
            this.bowDrawbackItemRenderer.set_item([this.bowDrawbackFrame, 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())]);
            this.bowDrawbackItemRenderer.render();
            break;
        case "potion":
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(32).rotate2D(-Math.PI / 4);
            this.bowDrawbackItemRenderer.set_item([this.bowDrawbackFrame, 1, 0, this.world.get_selectedInventoryItemExtra()]);
            this.bowDrawbackItemRenderer.render();
            break;
        case "spear":
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(28).rotate2D(-Math.PI / 4);
            this.bowDrawbackItemRenderer.set_item([this.bowDrawbackFrame, 1, 0, Game.makeDynamicMap(new haxe.ds.StringMap())]);
            this.bowDrawbackItemRenderer.render();
            break;
        case "teleporter":
            this.bowDrawbackPool.currentMatrix.reset().translate(-.5, -.5).scale2D(23.04).rotate2D(this.rotAngle);
            c = new haxe.ds.StringMap();
            c.h.nameChange = "teleporter";
            this.bowDrawbackItemRenderer.set_item(["ep", 1, 0, c]);
            this.bowDrawbackItemRenderer.render();
            break;
        default:
            return;
        }
        this.bowDrawbackPool.transform.reset().rotate2D(-this.rotAngle).scale2D(1 / this.zoom).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(Math.floor(this.bowDrawbackX * this.zoom) / this.zoom, Math.floor(this.bowDrawbackY * this.zoom) / this.zoom).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.scene.draw(this.bowDrawbackPool);
    },
    resetUseItem: function () {
        0 == this.rMouseD && this.world.get_selectedInventoryItemType() == this.itemUseAnimationSelectedItemType && ("bow" == this.world.get_selectedInventoryItemType() || "spear" == this.world.get_selectedInventoryItemType() || "bshur" == this.world.get_selectedInventoryItemType() || "egg" == this.world.get_selectedInventoryItemType() || "fireegg" == this.world.get_selectedInventoryItemType() || "ep" == this.world.get_selectedInventoryItemType() || "potion" == this.world.get_selectedInventoryItemType() && "splash" == this.world.get_selectedInventoryItemExtra().h.category || "dtb" == this.world.get_selectedInventoryItemType()) && this.useItem();
        this.itemUseAnimationTimer = -1;
        this.bowAnimation = this.eatingAnimation = !1;
        this.bowDrawbackFrame = "1";
    },
    useItemAnimation: function () {
        if ("bow" == this.world.get_selectedInventoryItemType() || "spear" == this.world.get_selectedInventoryItemType() || "bshur" == this.world.get_selectedInventoryItemType() || "egg" == this.world.get_selectedInventoryItemType() || "fireegg" == this.world.get_selectedInventoryItemType() || "ep" == this.world.get_selectedInventoryItemType() || "potion" == this.world.get_selectedInventoryItemType() && "splash" == this.world.get_selectedInventoryItemExtra().h.category || "dtb" == this.world.get_selectedInventoryItemType()) {
            var b = (this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse") * 10 + 27) / 30;
            this.bowDrawbackX = this.world.worldX + Math.cos(this.rotAngle) * b;
            this.bowDrawbackY = this.world.worldY - 1.5 + Math.sin(this.rotAngle) * b;
            "bow" == this.world.get_selectedInventoryItemType() ? this.bowDrawbackFrame = Std.string(Math.min(3, Math.floor(4 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")))) + 2 | 0) : "ep" == this.world.get_selectedInventoryItemType() && "teleporter" == Std.string(this.world.get_selectedInventoryItemExtra().h.nameChange).toLowerCase() ? this.bowDrawbackFrame = "teleporter" : this.bowDrawbackFrame = this.world.get_selectedInventoryItemType();
        }
    },
    useItem: function () {
        if (null != BlockData.get(this.world.get_selectedInventoryItemType(), "food")) {
            if (this.eatingAnimation = !1, this.canEatFood(this.world.get_selectedInventoryItemType())) {
                var b = BlockData.get(this.world.get_selectedInventoryItemType(), "food");
                this.unlockAchieve(25);
                null != b.h.hunger && (this.world.food += b.h.hunger);
                null != b.h.health && (this.world.health += b.h.health);
                if (null != b.h.effects) for (var a = b.h.effects, c = Object.keys(a.h), d = c.length, f = 0; f < d;) {
                    var l = c[f++],
                        p = a.h[l];
                    (null == p.h.chance || Math.random() < 1 / p.h.chance) && this.addEffect(this.world.player.id, l, p.h.duration, 1, !0, 1 == p.h.showParticles);
                }
                "potion" == this.world.get_selectedInventoryItemType() || null != b.h.drink ? (this.requestSound("drink" + ((2 * Math.random() | 0) + 1), 0, 0, 1, 1), null != BlockData.get(this.world.get_selectedInventoryItemType(), "color") ? (d = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), l = new lemongine.Point(this.world.worldY - 1.5, 0), b = new haxe.ds.StringMap(), a = Colors.colors, f = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), c = a.h[f].h.r, a = Colors.colors, f = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), p = a.h[f].h.g, a = Colors.colors, f = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), b.h.color = [c, p, a.h[f].h.b]) : (d = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), l = new lemongine.Point(this.world.worldY - 1.5, 0), b = new haxe.ds.StringMap(), b.h.color = [Colors.colors.h.lightblue.h.r, Colors.colors.h.lightblue.h.g, Colors.colors.h.lightblue.h.b])) : (this.requestSound("eat" + ((4 * Math.random() | 0) + 1), 0, 0, 1, 1), null != BlockData.get(this.world.get_selectedInventoryItemType(), "color") ? (d = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), l = new lemongine.Point(this.world.worldY - 1.5, 0), b = new haxe.ds.StringMap(), a = Colors.colors, f = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), c = a.h[f].h.r, a = Colors.colors, f = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), p = a.h[f].h.g, a = Colors.colors, f = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), b.h.color = [c, p, a.h[f].h.b]) : (d = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), l = new lemongine.Point(this.world.worldY - 1.5, 0), b = new haxe.ds.StringMap(), b.h.color = [Colors.colors.h.brown.h.r, Colors.colors.h.brown.h.g, Colors.colors.h.brown.h.b]));
                this.addParticles("mining", 10, 0, d, l, !0, b);
                this.useUpItem();
                this.waitTillRightMouseIsUp = !1;
            }
        } else if ("bow" == this.world.get_selectedInventoryItemType()) {
            if (0 != this.rMouseD) this.itemUseAnimationTimer++;else {
                this.bowAnimation = !1;
                this.bowDrawbackFrame = "1";
                b = this.findInInventory("arrow");
                if (1 == this.world.gamemode || -1 != b) 1 != this.world.gamemode && (this.unlockAchieve(33), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "infinity") || this.world.reduceInventoryItemCount(b, 1)), c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), this.damageTool(), this.requestSound("bowsfx"), d = Game.uniqueID(this.world.arrows, "arrow"), a = this.world.arrows, b = new haxe.ds.StringMap(), b.h.x = this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3, b.h.y = this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3, b.h.speedX = Math.cos(this.rotAngle) * c, b.h.speedY = Math.sin(this.rotAngle) * c, b.h.rotation = this.rotAngle, b.h.timer = 0, b.h.shotBy = this.world.player.id, c = .4 * Main.Instance.get_fps(), b.h.cooldown = c, a.h[d] = Game.makeDynamicMap(b), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "punch1") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.punch = 1), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "punch2") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.punch = 2), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "power1") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.power = 1), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "power2") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.power = 2), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "power3") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.power = 3), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "flame") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.flame = 1), a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "infinity") && (Game.makeDynamicMap(this.world.arrows.h[d]).h.infinity = 1);
                this.waitTillRightMouseIsUp = !1;
            }
        } else if ("spear" == this.world.get_selectedInventoryItemType()) 0 != this.rMouseD ? this.itemUseAnimationTimer++ : (this.bowAnimation = !1, this.bowDrawbackFrame = "1", c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("throwsfx"), a = this.world.spears, d = Game.uniqueID(this.world.spears, "spear"), b = new haxe.ds.StringMap(), b.h.x = this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3, b.h.y = this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3, b.h.speedX = Math.cos(this.rotAngle) * c, b.h.speedY = Math.sin(this.rotAngle) * c, b.h.rotation = this.rotAngle, b.h.timer = 0, b.h.shotBy = this.world.player.id, c = .4 * Main.Instance.get_fps(), b.h.cooldown = c, a.h[d] = Game.makeDynamicMap(b), this.waitTillRightMouseIsUp = !1);else if ("bshur" == this.world.get_selectedInventoryItemType()) 0 != this.rMouseD ? this.itemUseAnimationTimer++ : (this.bowAnimation = !1, this.bowDrawbackFrame = "1", c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("shurikenthrow"), a = this.world.shurikens, d = Game.uniqueID(this.world.shurikens, "shuriken"), b = new haxe.ds.StringMap(), b.h.x = this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3, b.h.y = this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3, b.h.speedX = Math.cos(this.rotAngle) * c, b.h.speedY = Math.sin(this.rotAngle) * c, b.h.rotation = this.rotAngle, b.h.timer = 0, b.h.shotBy = this.world.player.id, b.h.type = "bone", c = .4 * Main.Instance.get_fps(), b.h.cooldown = c, a.h[d] = Game.makeDynamicMap(b), this.waitTillRightMouseIsUp = !1);else if ("egg" == this.world.get_selectedInventoryItemType()) 0 != this.rMouseD ? this.itemUseAnimationTimer++ : (this.bowAnimation = !1, this.bowDrawbackFrame = "1", c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("throwsfx"), b = "egg" + Math.random(), a = new entities.Entity_Egg("egg", null, b, null, this, this.world), this.world.entities.h[b] = a, a.set_x(this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3), a.set_y(this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3), a.xSpeed = Math.cos(this.rotAngle) * c, a.ySpeed = Math.sin(this.rotAngle) * c, this.waitTillRightMouseIsUp = !1);else if ("fireegg" == this.world.get_selectedInventoryItemType()) 0 != this.rMouseD ? this.itemUseAnimationTimer++ : (this.bowAnimation = !1, this.bowDrawbackFrame = "1", c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("throwsfx"), b = "fireegg" + Math.random(), a = new entities.Entity_Egg_Fire("fireegg", null, b, null, this, this.world), this.world.entities.h[b] = a, a.set_x(this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3), a.set_y(this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3), a.xSpeed = Math.cos(this.rotAngle) * c, a.ySpeed = Math.sin(this.rotAngle) * c, this.waitTillRightMouseIsUp = !1);else if ("ep" == this.world.get_selectedInventoryItemType()) 0 != this.rMouseD ? this.itemUseAnimationTimer++ : (this.bowAnimation = !1, this.bowDrawbackFrame = "1", d = !1, null != this.world.get_selectedInventoryItemExtra().h.nameChange && "teleporter" == this.world.get_selectedInventoryItemExtra().h.nameChange.toLowerCase() && (d = !0), c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("throwsfx"), b = "enderpearl" + Math.random(), a = new entities.Entity_Enderpearl("enderpearl", null, b, null, this, this.world), this.world.entities.h[b] = a, a.set_x(this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3), a.set_y(this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3), a.xSpeed = Math.cos(this.rotAngle) * c, a.ySpeed = Math.sin(this.rotAngle) * c, d && (a.henry = !0), this.waitTillRightMouseIsUp = !1);else if ("potion" == this.world.get_selectedInventoryItemType()) {
            if ("splash" == this.world.get_selectedInventoryItemExtra().h.category) {
                if (0 != this.rMouseD) {
                    this.itemUseAnimationTimer++;
                    return;
                }
                this.bowAnimation = !1;
                this.bowDrawbackFrame = "1";
                l = [];
                null != Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.effects ? l = Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.effects : (a = this.potionData, f = Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.type, null != a.h[f] ? (a = this.potionData, f = Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.type, d = null != Game.makeDynamicMap(a.h[f]).h.effects) : d = !1, d && (a = this.potionData, f = Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.type, l = Game.makeDynamicMap(a.h[f]).h.effects));
                c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6);
                this.requestSound("throwsfx");
                a = this.world.splashPotions;
                d = Game.uniqueID(this.world.splashPotions, "splashPotion");
                b = new haxe.ds.StringMap();
                b.h.x = this.world.worldX + Math.cos(this.rotAngle) * c / 30 * 3;
                b.h.y = this.world.worldY - 1.5 + Math.sin(this.rotAngle) * c / 30 * 3;
                b.h.speedX = Math.cos(this.rotAngle) * c;
                b.h.speedY = Math.sin(this.rotAngle) * c;
                b.h.rotation = this.rotAngle;
                b.h.shotBy = this.world.player.id;
                b.h.timer = 0;
                b.h.cooldown = 10;
                c = Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.type;
                b.h.type = c;
                b.h.effects = l;
                c = null == Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.showParticles ? !0 : Game.makeDynamicMap(this.world.getInventoryItemExtras(this.world.selectedInventoryItem)).h.showParticles;
                b.h.showParticles = c;
                a.h[d] = Game.makeDynamicMap(b);
            } else {
                if (null != this.world.get_selectedInventoryItemExtra().h.effects) for (a = this.world.get_selectedInventoryItemExtra().h.effects, b = 0, c = a.length; b < c;) d = a[b++], this.addEffect(this.world.player.id, d.h.type, null != d.h.duration ? d.h.duration : 0, null != d.h.level ? d.h.level : 0, !0, 0 != this.world.get_selectedInventoryItemExtra().h.showParticles);else if (a = this.potionData, f = this.world.get_selectedInventoryItemExtra().h.type, null != a.h[f] && (a = this.potionData, f = this.world.get_selectedInventoryItemExtra().h.type, a = a.h[f], null != a.h.effects)) for (b = 0, c = a.h.effects.length; b < c;) d = a.h.effects[b++], this.unlockAchieve(43), this.addEffect(this.world.player.id, d.h.type, null != d.h.duration ? d.h.duration : 0, null != d.h.level ? d.h.level : 0, !0, 0 != this.world.get_selectedInventoryItemExtra().h.showParticles);
                1 != this.world.gamemode && (b = new haxe.ds.StringMap(), b.h.type = "empty", this.addDrop("potion", this.world.worldX, this.world.worldY, 1, null, b));
                this.eatingAnimation = !1;
                this.requestSound("drink" + ((2 * Math.random() | 0) + 1), 0, 0, 1, 1);
            }
            1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1);
            this.waitTillRightMouseIsUp = !1;
        } else "mbk" == this.world.get_selectedInventoryItemType() ? (this.eatingAnimation = !1, this.world.setInventoryItemType(this.world.selectedInventoryItem, "bk"), this.world.effects = new haxe.ds.StringMap(), this.resetEffectIcons(), this.requestSound("drink" + ((2 * Math.random() | 0) + 1), 0, 0, 1, 1), this.waitTillRightMouseIsUp = !1) : "dtb" == this.world.get_selectedInventoryItemType() && (0 != this.rMouseD ? this.itemUseAnimationTimer++ : (this.bowAnimation = !1, this.bowDrawbackFrame = "1", c = Game.migrateSpeed(17 * (1 - this.itemUseAnimationTimer / BlockData.get(this.world.get_selectedInventoryItemType(), "timerToUse")) + 6), 1 != this.world.gamemode && this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1), this.requestSound("throwsfx"), ScavengerManager.packetToServer_throwDirtBall(c, this.rotAngle), this.waitTillRightMouseIsUp = !1));
    },
    throwDirtBall: function (b, a, c, d, f, l) {
        b = "dirtball" + b;
        var g = new entities.Entity_Dirt_Ball("dirtball", null, b, null, this, this.world);
        this.world.entities.h[b] = g;
        g.set_x(a + Math.cos(f) * d / 30 * 3);
        g.set_y(c - 1.5 + Math.sin(f) * d / 30 * 3);
        g.xSpeed = Math.cos(f) * d;
        g.ySpeed = Math.sin(f) * d;
        g.ownerMemberID = l;
    },
    removeDirtBall: function (b, a) {
        b = "dirtball" + b;
        null != this.world.entities.h[b] && (a ? (this.requestSound("scavengerDirtBallHit", this.world.entities.h[b].get_x() - this.world.worldX, this.world.entities.h[b].get_y() - this.world.worldY, 1, 1), this.addParticles("spark", 5, 3, new lemongine.Point(this.world.entities.h[b].get_x() - .5, 1), new lemongine.Point(this.world.entities.h[b].get_y() - .5, 1))) : this.requestSound("scavengerDirtBallMiss", this.world.entities.h[b].get_x() - this.world.worldX, this.world.entities.h[b].get_y() - this.world.worldY, 1, 1), this.world.entities.h[b].remove());
    },
    getBiome: function (b) {
        return 0 > b || b >= this.world.biomeList.length ? null : this.world.biomeList[b];
    },
    getSnowRegion: function (b) {
        return 1 == this.world.snowRegions.h[null == b ? "null" : "" + b];
    },
    setSnowRegion: function (b, a) {
        this.world.snowRegions.h[null == b ? "null" : "" + b] = a;
    },
    doPlayerLogic: function () {
        this.blockX = Math.floor(this.world.worldX / 1);
        this.blockY = Math.floor(-this.world.worldY);
        this.standingOn1 = this.world.getFG(this.world.worldX + .3, this.blockY);
        this.standingOn2 = this.world.getFG(this.world.worldX - .3, this.blockY);
        if (3 == this.world.gamemode) {
            this.keysX = !1;
            if (!this.cantMove) {
                G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("left")), 0) || G.gt(Main.Instance.keyDown(1073741904), 0) ? (this.world.xSpeed -= Game.migrateAcc(1, .94), this.characterXScale = 1, this.hasMoved = this.keysX = !0) : this.leftSprinting = 0;
                G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("right")), 0) || G.gt(Main.Instance.keyDown(1073741903), 0) ? (this.world.xSpeed += Game.migrateAcc(1, .94), this.characterXScale = -1, this.hasMoved = this.keysX = !0) : this.rightSprinting = 0;
                if (G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("up")), 0) || G.gt(Main.Instance.keyDown(1073741906), 0) || GlobalSave.spaceJump && G.gt(Main.Instance.keyDown(32), 0)) this.world.ySpeed += Game.migrateAcc(1, .94), this.hasJumped = !0;
                if (G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("down2")), 0) || G.gt(Main.Instance.keyDown(1073741905), 0)) this.world.ySpeed -= Game.migrateAcc(1, .94);
            }
            this.world.xSpeed *= Game.migrateDampening(.94);
            this.world.ySpeed *= Game.migrateDampening(.94);
            this.world.worldX += this.world.xSpeed / 30;
            this.world.worldY -= this.world.ySpeed / 30;
        } else {
            this.blockAtFeet = this.world.getFG(this.blockX, this.blockY);
            this.blockAtLegs = this.world.getFG(this.blockX, this.blockY + 1);
            this.blockAtHead = this.world.getFG(this.blockX, this.blockY + 2);
            !G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("down")), 0) && !G.gt(Main.Instance.keyDown(1073741905), 0) || this.world.fly || 0 != this.world.sleepingAnimation || this.cantMove ? this.sneaking = !1 : this.sneaking = !0;
            var b = this.world.worldX,
                a = this.world.worldY;
            if (!this.collision(b - .3, a + .03333333333333333, .6, 0, .1, !1)) {
                var c = -lemongine.Mathz.modulus(-this.world.worldY, 1);
                "st" == this.world.getFG(this.blockX, this.blockY) && -.5 < c && !this.world.fly ? (this.sneaking && 0 == this.world.tick % (8 * Main.Instance.get_fps() / 25) ? this.world.worldY += .6 : .06666666666666667 < Math.abs(.5 + c) && (this.world.worldY -= .5 + c), this.falling = !1) : 0 == this.wasFalling && 0 >= this.world.ySpeed && (1 == BlockData.get(this.world.getFG(this.blockX, this.blockY), "stairBlock") || 1 == BlockData.get(this.world.getFG(this.blockX, this.blockY - 1), "stairBlock")) && !this.world.fly ? (this.world.worldY += .5, this.falling = !1) : this.falling = !0;
            }
            this.falling || (1 == this.wasFalling && (this.wasFallingSpeed = -this.world.ySpeed, (Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker1") || Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker2")) && this.doFrostWalker(this.blockX, this.blockY, Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker2") ? 3 : 2)), this.world.ySpeed = 0);
            c = !0;
            if (this.wasFalling && !this.falling && "" == this.world.riding) {
                if (0 >= this.wasFallingAndNotFalling) if ("sd" == this.standingOn1 || "sd" == this.standingOn2) {
                    var d = 1;
                    for (b = 5 * (GlobalSave.particles - 1) + 1; d < b;) ++d, new particles.Particle_Dust(this.world.worldX, this.world.worldY, this, this.world, this.world.xSpeed);
                    this.blockSound(this.blockX, this.blockY, 0, 0);
                } else "slimeb" == this.standingOn1 || "slimeb" == this.standingOn2 ? (this.addParticles("slime", 0, 5, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY, 0)), this.requestSound("slimeblockland")) : this.blockSound(this.blockX, this.blockY, 0, 0);
                this.wasFallingAndNotFalling = 3;
                "bed" == HxOverrides.substr(this.blockAtFeet, 0, 3) ? this.wasFallingSpeed *= .6 : "slimeb" != this.blockAtFeet || this.sneaking || (this.wasFallingSpeed > Game.migrateSpeed(6) ? (this.world.ySpeed = .78 * Math.max(0, this.wasFallingSpeed - Game.migrateSpeed(5)), this.wasFallingSpeed = 0, this.world.worldY -= this.world.ySpeed / 2 / 30) : this.world.ySpeed = 0);
                if (this.wasFallingSpeed > Game.migrateSpeed(23)) {
                    this.wasFallingSpeed -= Game.migrateSpeed(14);
                    b = 0;
                    a = !1;
                    for (d = 0; 0 <= this.wasFallingSpeed;) b += 2, 10 < b && (a = !0), ++d, this.wasFallingSpeed -= Math.max(Game.migrateSpeed(11 - b), Game.migrateSpeed(1));
                    this.hasEffect("jumpboost") && (d -= Math.ceil(1.75 * Game.makeDynamicMap(this.world.effects.h.jumpboost).h.level));
                    0 < d && this.ouch(1 + (a ? 1 : 0), d, "fall");
                }
            } else this.wasFallingAndNotFalling--;
            1 == this.world.gamemode && this.world.fly && (this.world.ySpeed *= Game.migrateDampening(.2), this.falling = !1);
            null == BlockData.get(this.blockAtLegs, "walkThroughBlockHit") && "dr" != HxOverrides.substr(this.blockAtLegs, -3, 2) && "lp" != this.blockAtLegs ? (0 == this.suffocate && (this.suffocate = 15, this.ouch(1, 1, "suffocate")), this.suffocate--, null != BlockData.get(this.world.getFG(this.blockX - 1, this.blockY + 1), "walkThroughBlockHit") ? this.isRiding() || (this.world.worldX -= .5) : null != BlockData.get(this.world.getFG(this.blockX + 1, this.blockY + 1), "walkThroughBlockHit") ? this.isRiding() || (this.world.worldX += .5) : null != BlockData.get(this.world.getFG(this.blockX, this.blockY + 2), "walkThroughBlockHit") ? this.isRiding() || (this.world.worldY -= .5) : null != BlockData.get(this.world.getFG(this.blockX, this.blockY), "walkThroughBlockHit") ? this.isRiding() || (this.world.worldY += .5) : null == BlockData.get(this.world.getFG(this.blockX, this.blockY - 1), "walkThroughBlockHit") || this.isRiding() || (this.world.worldY += .5)) : this.suffocate = 0;
            d = 0;
            null != this.world.armors[3] && null != this.world.armors[3][2] && (Game.makeDynamicMap(this.world.armors[3][2]).h.depthStrider1 ? d = .4 : Game.makeDynamicMap(this.world.armors[3][2]).h.depthStrider2 ? d = .7 : Game.makeDynamicMap(this.world.armors[3][2]).h.depthStrider3 && (d = 1));
            Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + this.blockX + "Y" + (this.blockY + 1)) && !this.world.fly && (this.getWater(this.blockX, this.blockY + 1)[0] > this.getWater(this.blockX, this.blockY + 1)[1] ? this.world.xSpeed -= Game.migrateAcc(1 - d, .55) : this.getWater(this.blockX, this.blockY + 1)[0] < this.getWater(this.blockX, this.blockY + 1)[1] && (this.world.xSpeed += Game.migrateAcc(1 - d, .55)), 1 == this.world.states.h["blockX" + this.blockX + "Y" + (this.blockY + 1)] ? this.world.ySpeed += Game.migrateAcc(3, .42) : -1 == this.world.states.h["blockX" + this.blockX + "Y" + (this.blockY + 1)] && this.falling && (this.world.ySpeed -= Game.migrateAcc(2, .42)));
            Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + this.blockX + "Y" + (this.blockY + 2)) && !this.world.fly && (this.getWater(this.blockX, this.blockY + 2)[0] > this.getWater(this.blockX, this.blockY + 2)[1] ? this.world.xSpeed -= Game.migrateAcc(1 - d, .55) : this.getWater(this.blockX, this.blockY + 2)[0] < this.getWater(this.blockX, this.blockY + 2)[1] && (this.world.xSpeed += Game.migrateAcc(1 - d, .55)), 1 == this.world.states.h["blockX" + this.blockX + "Y" + (this.blockY + 2)] ? this.world.ySpeed += Game.migrateAcc(3, .42) : -1 == this.world.states.h["blockX" + this.blockX + "Y" + (this.blockY + 2)] && this.falling && (this.world.ySpeed -= Game.migrateAcc(2, .42)));
            b = this.world.worldX;
            a = this.world.worldY;
            var f = b + .6666666666666666,
                l = b - .6666666666666666;
            0 < this.rightSprinting && 1 != BlockData.get(this.world.getFG(Math.floor(b / 1) + 1, Math.floor(-a) + 1), "stairBlock") && (f += Math.floor(-this.world.xSpeed / 2) / 30);
            0 < this.leftSprinting && 1 != BlockData.get(this.world.getFG(Math.floor(b / 1) - 1, Math.floor(-a) + 1), "stairBlock") && (l += Math.floor(-this.world.xSpeed / 2) / 30);
            this.collision(f, a - 1.8333333333333333, 0, 1.1666666666666667, .13333333333333333) && (this.rightable = !1, this.rightSprinting = 0, 0 > this.world.xSpeed && (this.world.xSpeed = 0));
            this.collision(l, a - 1.8333333333333333, 0, 1.1666666666666667, .13333333333333333) && (this.leftable = !1, this.leftSprinting = 0, 0 < this.world.xSpeed && (this.world.xSpeed = 0));
            this.collision(b - .16666666666666666, a - 2, .3333333333333333, 0, .13333333333333333, !1) && (c = !1, 0 < this.world.ySpeed && (this.world.ySpeed = -Math.abs(this.world.ySpeed / 2), this.world.worldY -= this.world.ySpeed / 30));
            if (!this.world.fly) {
                if ("web" == this.world.getFG(this.blockX, this.blockY + 1) || "web" == this.world.getFG(this.blockX, this.blockY + 2)) this.rightSprinting = this.leftSprinting = 0, this.world.xSpeed *= Game.migrateDampening(.2), this.world.ySpeed *= Game.migrateDampening(.2);
                if ("ssd" == this.world.getFG(this.blockX, this.blockY) || "slimeb" == this.world.getFG(this.blockX, this.blockY)) this.world.xSpeed *= Game.migrateDampening(.5);
                if ("wr" == this.world.getFG(this.blockX, this.blockY + 1) || "wr" == this.world.getFG(this.blockX, this.blockY + 2)) this.rightSprinting = this.leftSprinting = 0, this.world.xSpeed *= Game.migrateDampening(.7 + .3 * d), this.world.ySpeed *= Game.migrateDampening(.7 + .3 * d);
            }
            if (this.isRiding() || !this.ranWorldLogicOnce || null != this.ENDING && null != this.world.mobs.h[this.ENDING]) this.ranWorldLogicOnce && (this.world.ySpeed = 0, this.world.xSpeed = 0);else {
                this.world.riding = "";
                Math.abs(this.world.xSpeed) < Game.migrateSpeed(.25) && (this.world.xSpeed = 0);
                if (Math.abs(this.world.ySpeed) < Game.migrateSpeed(.2)) this.world.ySpeed = 0, b = this.world.worldX, a = this.world.worldY, !this.collision(b, a - .03333333333333333, 0, 0, .03333333333333333, !1) && this.collision(b, a + .06666666666666667, 0, 0, .03333333333333333, !1) && (this.world.worldY += .03333333333333333);else {
                    this.world.worldY -= this.world.ySpeed / 30;
                    b = this.world.worldX;
                    a = this.world.worldY;
                    for (d = 0; d <= Math.floor(Math.abs(this.world.ySpeed / 2)) && this.collision(b - (9 + this.world.xSpeed) / 30, a + (this.world.ySpeed / Math.abs(this.world.ySpeed / 2) * d - 4) / 30, .6, 0, .03333333333333333, !1);) ++d;
                    this.world.worldY += this.world.ySpeed / Math.abs(this.world.ySpeed / 2) * d / 30;
                    a = this.world.worldY;
                }
                for (d = 0; 5 > d;) {
                    ++d;
                    if (this.sneakingOrUsingItem() && !this.falling && !this.world.fly) if (0 < this.world.xSpeed) {
                        if (!this.collision(b - .3, this.world.worldY, .5333333333333333, .6666666666666666, .16666666666666666)) {
                            this.world.xSpeed = 0;
                            break;
                        }
                    } else if (0 > this.world.xSpeed && !this.collision(b - .23333333333333334, this.world.worldY, .5333333333333333, .6666666666666666, .16666666666666666)) {
                        this.world.xSpeed = 0;
                        break;
                    }
                    this.world.worldX -= this.world.xSpeed / 5 / 30;
                    b = this.world.worldX;
                    if (!this.isRiding()) for (f = 9; 0 < f && this.collision(b - .3, a - .13333333333333333, .6, .03333333333333333, .1, !1) && !this.collision(b - .3, a - 1.8333333333333333, .6, .03333333333333333, .1, !1);) --f, this.world.worldY -= .06666666666666667, this.world.ySpeed = 0, a = this.world.worldY;
                }
            }
            this.deepness = 0;
            if ("sw" == this.world.getFG(this.blockX, this.blockY + 2) || "wr" == this.world.getFG(this.blockX, this.blockY + 2) && (!Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + this.blockX + "Y" + (this.blockY + 2)) || 9 <= this.getWater(this.blockX, this.blockY + 2)[0] || 9 <= this.getWater(this.blockX, this.blockY + 2)[1])) {
                this.startUnderwaterTimer = 5;
                null == this.world.armors[0][2] && (this.world.armors[0][2] = new haxe.ds.StringMap());
                this.hasEffect("waterbreathing") ? (this.airTimer = 60, this.world.air = 11) : null != Game.makeDynamicMap(this.world.armors[0][2]).h.respiration1 ? 0 == Math.floor(2 * Math.random()) && this.airTimer-- : null != Game.makeDynamicMap(this.world.armors[0][2]).h.respiration2 ? 0 == Math.floor(4 * Math.random()) && this.airTimer-- : null != Game.makeDynamicMap(this.world.armors[0][2]).h.respiration3 ? 0 == Math.floor(6 * Math.random()) && this.airTimer-- : this.airTimer--;
                0 >= this.airTimer && (this.airTimer = 60, 0 >= this.world.air ? this.ouch(1, 1, "water") : this.world.air--);
                0 == Math.floor(10 * Math.random()) && 1 != GlobalSave.particles && this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2, 0));
                0 == this.inWater && (1 != GlobalSave.particles && (this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0)), this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX, 0), new lemongine.Point(this.world.worldY - 2.5, 0))), lemongine.AssetManager.getSound("underwater_0").play(1, 0, 0, 1.703, 1E6));
                this.inWater = !0;
                b = 1;
                do this.deepness++, ++b; while (null != BlockData.get(this.world.getFG(this.blockX, this.blockY + b), "liquid") || "sw" == this.world.getFG(this.blockX, this.blockY + b));
                this.hasEffect("waterbreathing") && (this.deepness = Math.round(.8 * this.deepness));
                lemongine.AssetManager.getSound("underwater_0").set_volume(Math.min(this.deepness / 10, 1));
            } else if (this.world.air = 11, this.airTimer = 30, 0 >= this.startUnderwaterTimer) {
                if (1 == this.inWater) {
                    d = 1;
                    for (b = 10 * (GlobalSave.particles - 1) + 1; d < b;) ++d, this.addParticles("water", 1, 0, new lemongine.Point(this.world.worldX - .5, 1), new lemongine.Point(this.world.worldY - 1, 0));
                    this.requestSound("splash", 0, 0, 1, 1);
                }
                this.inWater = !1;
                lemongine.AssetManager.getSound("underwater_0").stop();
            } else this.startUnderwaterTimer--;
            this.falling ? (null != BlockData.get(this.world.getFG(this.blockX, this.blockY + 1), "liquid") ? this.world.xSpeed *= Game.migrateDampening(.55) : this.world.xSpeed *= Game.migrateDampening(.6), this.world.ySpeed -= Game.migrateAcc(2, .94)) : "ice" == this.world.getFG(this.blockX, this.blockY) || "fice" == this.world.getFG(this.blockX, this.blockY) ? this.world.xSpeed *= Game.migrateDampening(.9) : this.world.xSpeed *= Game.migrateDampening(.7);
            1 != BlockData.get(this.world.getFG(this.blockX, this.blockY + 1), "climbable") || this.world.fly || (this.world.ySpeed *= Game.migrateDampening(.75), ("ladder" == this.world.getFG(this.blockX, this.blockY + 1) || "rp" == this.world.getFG(this.blockX, this.blockY + 1)) && this.sneaking && 5 > Math.abs(this.world.ySpeed) && (this.world.ySpeed = 0));
            0 == this.world.tick % (Main.Instance.get_fps() / 25 * 15) && ("ct" != this.blockAtFeet && "ct" != this.blockAtLegs && "ct" != this.blockAtHead || this.sneaking || this.ouch(1, 1, "cactus"), "la" == this.blockAtFeet && this.falling || "la" == this.blockAtLegs || "la" == this.blockAtHead ? this.ouch(1, 5, "lava") : "ad" == this.blockAtFeet && this.falling || "ad" == this.blockAtLegs || "ad" == this.blockAtHead ? this.ouch(1, 5, "acid") : "magma" != this.blockAtFeet || this.sneaking || Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker1") || Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker2") || this.ouch(1, 2, "lava"));
            "" == this.world.riding && (this.distanceX += Math.abs(this.world.xSpeed) / 30, 1 < this.distanceX && ((Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker1") || Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker2")) && this.doFrostWalker(this.blockX, this.blockY, Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "frostWalker2") ? 3 : 2), this.distanceX = 0, 1 != BlockData.get(this.world.getFG(this.blockX, this.blockY), "walkThroughBlockHit") && this.blockSound(this.blockX, this.blockY, 0, 0)));
            this.keysX = !1;
            this.cantMove || (b = 2.2 * (1 + (this.hasEffect("speed") ? js.Boot.__cast(this.world.effects.h.speed, haxe.ds.StringMap).h.level * js.Boot.__cast(this.effectData.h.speed, haxe.ds.StringMap).h.perLevel / 100 : 0) + (this.hasEffect("slowness") ? js.Boot.__cast(this.world.effects.h.slowness, haxe.ds.StringMap).h.level * js.Boot.__cast(this.effectData.h.slowness, haxe.ds.StringMap).h.perLevel / 100 : 0)), a = b + 2.2, G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("right")), 0) || G.gt(Main.Instance.keyDown(1073741903), 0) ? (this.rightKey = !0, this.rightable && (this.characterXScale = -1, this.sneakingOrUsingItem() ? this.world.xSpeed -= Game.migrateAcc(.5, .7) : 0 != this.rightSprinting ? ("sd" != this.standingOn1 && "sd" != this.standingOn2 || 3 != GlobalSave.particles || "" != this.world.riding || new particles.Particle_Dust(this.world.worldX, this.world.worldY, this, this.world, this.world.xSpeed), this.world.xSpeed -= Game.migrateAcc(a, .7)) : this.world.xSpeed -= Game.migrateAcc(b, .7), this.hasMoved = this.keysX = !0)) : (this.rightSprinting = 0, this.rightKey = !1), G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("left")), 0) || G.gt(Main.Instance.keyDown(1073741904), 0) ? (this.leftKey = !0, this.leftable && (this.characterXScale = 1, this.sneakingOrUsingItem() ? this.world.xSpeed += Game.migrateAcc(.5, .7) : 0 != this.leftSprinting ? ("sd" != this.standingOn1 && "sd" != this.standingOn2 || 3 != GlobalSave.particles || "" != this.world.riding || new particles.Particle_Dust(this.world.worldX, this.world.worldY, this, this.world, this.world.xSpeed), this.world.xSpeed += Game.migrateAcc(a, .7)) : this.world.xSpeed += Game.migrateAcc(b, .7), this.hasMoved = this.keysX = !0)) : (this.leftSprinting = 0, this.leftKey = !1));
            this.cantMove || (this.jumpTimer--, G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("up")), 0) || G.gt(Main.Instance.keyDown(1073741906), 0) || GlobalSave.spaceJump && G.gt(Main.Instance.keyDown(32), 0) ? (this.hasJumped = this.upKey = !0, b = 0, 1 == BlockData.get(this.world.getFG(this.blockX, this.blockY), "climbable") && 1 != BlockData.get(this.world.getFG(this.blockX, this.blockY + 1), "climbable") && 1 != BlockData.get(this.world.getFG(this.blockX, this.blockY + 2), "climbable") && 1 != BlockData.get(this.world.getFG(this.blockX, this.blockY + 3), "climbable") || 1 == BlockData.get(this.world.getFG(this.blockX, this.blockY + 1), "climbable") && 1 == BlockData.get(this.world.getFG(this.blockX, this.blockY + 2), "walkThroughBlockHit") ? c && (this.world.fly ? (this.world.ySpeed = Game.migrateSpeed(7), this.world.worldY -= .11666666666666667) : (b = 1 == BlockData.get(this.world.getFG(this.blockX, this.blockY + 1), "liquidCollision") ? 4.4 : 3, 10 > this.world.ySpeed && (this.world.ySpeed += Game.migrateAcc(b, .7)), 0 == this.falling && (this.world.worldY -= b / 2 / 30))) : 0 >= this.jumpTimer ? ("st" == this.world.getFG(this.blockX, this.blockY) && "st" != this.world.getFG(this.blockX, this.blockY + 1) ? this.jumpTimer = Math.floor(12 * (Main.Instance.get_fps() / 25)) : this.jumpTimer = Math.floor(6 * (Main.Instance.get_fps() / 25)), c && ("bed" == HxOverrides.substr(this.world.getFG(this.blockX, this.blockY), 0, 3) && 0 == this.falling ? b = 17 : "web" == this.world.getFG(this.blockX, this.blockY) || "web" == this.world.getFG(this.blockX, this.blockY + 1) ? b = 2 : 0 == this.falling && (b = 15), "slimeb" == this.world.getFG(this.blockX, this.blockY) && 0 == this.falling && this.requestSound("slimeblockjump", 0, 0, 1, 1)), 0 < b && (this.hasEffect("jumpboost") && (b += 3.5 * Game.makeDynamicMap(this.world.effects.h.jumpboost).h.level), b > this.world.ySpeed && (this.world.ySpeed = Game.migrateSpeed(b), this.world.worldY -= b / 2 / 30))) : this.world.fly && c && 0 == this.falling && (this.world.ySpeed = Game.migrateSpeed(7), this.world.worldY -= .11666666666666667)) : this.upKey = !1, 1 == this.world.gamemode && this.world.fly && (G.gt(Main.Instance.keyDown(GlobalSave.getKeyBinding("down2")), 0) || G.gt(Main.Instance.keyDown(1073741905), 0)) && (this.world.ySpeed -= Game.migrateAcc(30, .7)));
            this.wasFalling = !1;
            1 == this.falling && (this.wasFalling = !0);
            this.falling = !1;
            this.wasRightable = this.rightable;
            this.wasLeftable = this.leftable;
            this.leftable = this.rightable = !0;
            this.wasSprinting = 0 != this.rightSprinting || 0 != this.leftSprinting ? !0 : !1;
            this.sneakingOrUsingItem() && (this.rightSprinting = this.leftSprinting = 0);
            0 < this.leftSprinting && this.leftSprinting++;
            0 < this.rightSprinting && this.rightSprinting++;
            this.leftSprinting >= 15 * Main.Instance.get_fps() && (this.leftSprinting = 0);
            this.rightSprinting >= 15 * Main.Instance.get_fps() && (this.rightSprinting = 0);
            300 >= this.world.food && (this.leftSprinting = this.rightSprinting = 0);
            if (1 == this.blackScreen.currentFrame && 0 == this.inventario.currentFrame) {
                if (300 < this.world.food) {
                    if (1 == Main.Instance.keyDownDouble(GlobalSave.getKeyBinding("left")) || 1 == Main.Instance.keyDownDouble(1073741904)) this.leftSprinting = 1;
                    if (1 == Main.Instance.keyDownDouble(GlobalSave.getKeyBinding("right")) || 1 == Main.Instance.keyDownDouble(1073741903)) this.rightSprinting = 1;
                }
                (1 == Main.Instance.keyDownDouble(GlobalSave.getKeyBinding("up")) || 1 == Main.Instance.keyDownDouble(1073741906) || GlobalSave.spaceJump && 1 == Main.Instance.keyDownDouble(32)) && 1 == this.world.gamemode && (this.world.fly = !this.world.fly);
            }
        }
        this.resetCamera();
    },
    isRiding: function () {
        return "" == this.world.riding ? !1 : Object.prototype.hasOwnProperty.call(this.world.entities.h, this.world.riding);
    },
    sneakingOrUsingItem: function () {
        return this.sneaking ? !0 : -1 < this.itemUseAnimationTimer;
    },
    renderPlayer: function () {
        if (this.hurtAnimation || "" != this.world.riding || this.cantMove) this.miningAnimation = !1;
        this.animate = 1;
        1 == this.miningAnimation ? this.animate = 3 : this.wasFalling && null != BlockData.get(this.standingOn1, "walkThroughBlockHit") && null != BlockData.get(this.standingOn2, "walkThroughBlockHit") && "st" != this.standingOn1 && "st" != this.standingOn2 ? this.animate = 5 : 1 == this.keysX && this.world.fly ? this.animate = 5 : 1 == this.keysX && !this.cantMove && Math.abs(this.world.xSpeed) > Game.migrateSpeed(.5) ? this.animate = 2 : "fr" == this.world.get_selectedInventoryItemType() && Object.prototype.hasOwnProperty.call(this.world.entities.h, "bobber_" + this.world.player.id) && (this.animate = 3);
        if (1 == this.hurtAnimation || 0 != this.world.dead) this.animate = 4;
        if ("raft" == HxOverrides.substr(this.world.riding, 0, 4) || null != this.world.mobs.h[this.world.riding]) this.animate = 6;
        "cart" == HxOverrides.substr(this.world.riding, 0, 4) && (Object.prototype.hasOwnProperty.call(this.world.carts.h, this.world.riding) ? 1 == js.Boot.__cast(this.world.entities.h[this.world.riding], entities.Entity_Cart).currentFrame ? this.animate = 7 : 2 == js.Boot.__cast(this.world.entities.h[this.world.riding], entities.Entity_Cart).currentFrame ? this.animate = 0 > this.characterXScale ? 8 : 9 : 3 == js.Boot.__cast(this.world.entities.h[this.world.riding], entities.Entity_Cart).currentFrame && (this.animate = 0 < this.characterXScale ? 8 : 9) : this.world.riding = "");
        if (0 < this.world.sleepingAnimation) if (this.get_pawsed() || this.world.sleepingAnimation++, "bed1" != this.world.getFG(Math.floor(this.world.spawnPoint.x / 1), Math.floor(-this.world.spawnPoint.y)) || this.upKey) this.characterRotation = this.world.sleepingAnimation = 0, this.world.player.teleportMob(new lemongine.Point(this.world.spawnPoint.x, this.world.spawnPoint.y), 0, 2, !1, !0), this.lighting.bedFrame = 1;else {
            this.lighting.bedFrame = 2;
            var b = Math.min(1, this.world.sleepingAnimation / (4 * Main.Instance.get_fps()));
            this.lighting.bedAlpha = .4 * b;
            this.characterXScale = this.animate = 1;
            this.characterRotation = 90;
            this.world.worldX = this.world.spawnPoint.x;
            this.world.worldY = this.world.spawnPoint.y - .6;
            this.world.riding = "";
            this.world.sleepingAnimation >= 4 * Main.Instance.get_fps() && (this.characterRotation = this.world.sleepingAnimation = 0, this.world.player.teleportMob(new lemongine.Point(this.world.spawnPoint.x, this.world.spawnPoint.y), 0, 2, !1, !0), this.lighting.bedFrame = 1, this.world.tim = 2, this.world.day++, this.world.threadedSave(), this.unlockAchieve(26));
        }
        if (null == this.characterPool) {
            b = Textures.blockTextures;
            var a = shader.TwoTexture.getShader(shader.BlendMode.NORMAL),
                c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendItems;
            var d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.characterPool = new QuadPoolEntity_MatrixState(b, lemongine.shader.BlendMode.NORMAL, a, c);
            this.characterQuad = this.characterPool.addQuad(new lemongine.Vector3(), new lemongine.Point(), new lemongine.Point(16, 22));
            this.characterPool.layer = 1;
            this.characterPool.isTransparent = !0;
            this.characterPool.forceNoCulling = !0;
            this.characterPool.setTextureBuffer("texture2", SkinLoader.frames.skin);
            this.characterPool.setUniform("texSize2", [SkinLoader.frames.skin.width, SkinLoader.frames.skin.height]);
            b = Textures.blockTextures;
            a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
            c = new haxe.ds.StringMap();
            d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.characterItemPool = new QuadPoolEntity_MatrixState(b, lemongine.shader.BlendMode.NORMAL, a, c);
            this.characterItemPool.layer = 1;
            this.characterItemPool.isTransparent = !0;
            this.characterItemPool.forceNoCulling = !0;
            this.characterHandItemRenderer = new Item(this.characterItemPool, 0, 0, this, []);
            this.characterArmorRenderers = [new renderers.armor.Q_Helmet(this.characterPool), new renderers.armor.Q_Chestplate(this.characterPool), new renderers.armor.Q_Leggings(this.characterPool), new renderers.armor.Q_Boots(this.characterPool)];
        }
        this.characterCurrentFrame != this.animate && (this.characterCurrentFrame = this.animate, this.characterFrameTimer = this.characterFrameNumber = 0);
        this.characterMatrix.reset().translate(-.26666666666666666, -.7333333333333333).scale(2.7270000000000003 * this.characterXScale, 2.7270000000000003).rotate2D(-this.characterRotation / 180 * Math.PI).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(Math.floor(this.world.worldX * this.zoom) / this.zoom, Math.floor(this.world.worldY * this.zoom) / this.zoom).translate(0, -.08).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        b = (this.characterSkinVisible ? 1 : 0) * (30 < this.world.dead ? 0 : 1);
        this.charColor = [this.characterColorTransform[0], this.characterColorTransform[1], this.characterColorTransform[2], this.characterColorTransform[3] * b];
        var f = [this.characterColorTransform[4] * b, this.characterColorTransform[5] * b, this.characterColorTransform[6] * b, this.characterColorTransform[7] * b];
        this.armorOffsets[1].hide = !1;
        this.armorOffsets[2].hide = !1;
        this.armorOffsets[3].hide = !1;
        this.armorOffsets[4].hide = !1;
        this.armorOffsets[5].hide = !1;
        switch (this.animate) {
        case 1:
            b = this.characterPool;
            a = this.characterQuad;
            var l = new lemongine.Point(this.sneakingOrUsingItem() ? 96 : 0),
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            b = this.sneakingOrUsingItem() ? -35.3 : -36.6;
            this.armorOffsets[0].y = b;
            this.armorOffsets[1].x = 0;
            b = this.sneakingOrUsingItem() ? -15.7 : -17;
            this.armorOffsets[1].y = b;
            this.armorOffsets[2].x = -2.9;
            this.armorOffsets[2].y = -8.9;
            this.armorOffsets[2].rotation = 0;
            this.armorOffsets[3].x = 2.8;
            this.armorOffsets[3].y = -8.9;
            this.armorOffsets[3].rotation = 0;
            this.armorOffsets[4].x = -5;
            this.armorOffsets[4].y = -3;
            this.armorOffsets[4].rotation = 90;
            b = this.sneakingOrUsingItem() ? 4.4 : 4.7;
            this.armorOffsets[5].x = b;
            this.armorOffsets[5].y = -3;
            this.armorOffsets[5].rotation = -90;
            break;
        case 2:
            this.sneakingOrUsingItem() ? (1 != this.characterWalkAnimation && (this.characterWalkAnimation = 1, this.characterFrameTimer = 0), this.characterFrameNumber = 6 + Math.floor(this.characterFrameTimer / 16), this.get_pawsed() || (this.characterFrameTimer = ++this.characterFrameTimer % 32)) : this.wasSprinting ? (2 != this.characterWalkAnimation && (this.characterWalkAnimation = 2, this.characterFrameNumber = 0), this.characterFrameNumber = Math.floor(Math.min(5, 1 + Math.floor(this.characterFrameTimer / 2))), this.get_pawsed() || (this.characterFrameTimer = ++this.characterFrameTimer % 12)) : (0 != this.characterWalkAnimation && (this.characterFrameNumber = this.characterWalkAnimation = 0), this.characterFrameNumber = Math.floor(Math.min(5, 1 + Math.floor(this.characterFrameTimer / 4))), this.get_pawsed() || (this.characterFrameTimer = ++this.characterFrameTimer % 22));
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(16 * this.characterFrameNumber);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            this.armorOffsets[0].y = [-38.1, -38.1, -38.1, -36.3, -36.3, -33.6, -33.6][this.characterFrameNumber - 1];
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = [-17.5, -17.5, -17.5, -17, -17, -15.7, -15.7][this.characterFrameNumber - 1];
            this.armorOffsets[2].x = [-4.4, -6, -4.4, -1.2, -2.7, -2.1, -2.7][this.characterFrameNumber - 1];
            this.armorOffsets[2].y = [-8.5, -8.1, -8.4, -5.8, -8.7, -7, -8.7][this.characterFrameNumber - 1];
            this.armorOffsets[2].rotation = [15, 30, 15, 15, 0, -30, 0][this.characterFrameNumber - 1];
            this.armorOffsets[3].x = [2.9, 3.2, 2.9, -1.9, 3, 2, 2.9][this.characterFrameNumber - 1];
            this.armorOffsets[3].y = [-9.6, -10.1, -9.6, -5.9, -8.6, -7, -8.7][this.characterFrameNumber - 1];
            this.armorOffsets[3].rotation = [-30, -45, -30, 0, 0, 15, 0][this.characterFrameNumber - 1];
            this.armorOffsets[4].x = [-6.8, -9.6, -6.8, -2.5, -4.9, -3.4, -5.7][this.characterFrameNumber - 1];
            this.armorOffsets[4].y = [-3, -3.2, -2.9, -1.3, -1.9, -2.4, -2.5][this.characterFrameNumber - 1];
            this.armorOffsets[4].rotation = [90, 90, 90, 75, 90, 90, 90][this.characterFrameNumber - 1];
            this.armorOffsets[5].x = [7, 8.9, 7, 2, 4.6, 1.5, 5][this.characterFrameNumber - 1];
            this.armorOffsets[5].y = [-3.6, -6.2, -3.6, -.5, -2, -2.6, -2.5][this.characterFrameNumber - 1];
            this.armorOffsets[5].rotation = [30, 0, 30, 30, -90, 75, -90][this.characterFrameNumber - 1];
            break;
        case 3:
            this.characterFrameNumber = 9 + Math.floor(this.characterFrameTimer / 4);
            this.characterHandItemRenderer.set_item(this.world.inventoryItem(this.world.selectedInventoryItem));
            "fr" == this.world.get_selectedInventoryItemType() && Object.prototype.hasOwnProperty.call(this.world.entities.h, "bobber_" + this.world.player.id) && (js.Boot.__cast(this.characterHandItemRenderer.renderer, renderers.blocks.Q_FishingRod).inHand = !0, this.characterFrameNumber = 12);
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(16 * this.characterFrameNumber);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            c = a = b = 0;
            switch (this.characterFrameNumber) {
            case 10:
                b = .11944444444444445 * Math.PI;
                a = -9.7;
                c = -38;
                break;
            case 9:
            case 11:
                b = .2661111111111111 * Math.PI;
                a = -14.9;
                c = -35.5;
                break;
            case 12:
                b = .61 * Math.PI;
                a = -22.7;
                c = -18.1;
                break;
            case 13:
                b = .8600000000000001 * Math.PI, a = -19.9, c = -10.5;
            }
            this.characterItemPool.transform.reset().translate(-.5, -.5).scale2D(14.467711999999999).rotate2D(b).translate(a, c).scale2D(1.5 / this.zoom).scale(this.characterXScale).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(Math.floor(this.world.worldX * this.zoom) / this.zoom, Math.floor(this.world.worldY * this.zoom) / this.zoom).translate(0, -.08).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
            this.scene.draw(this.characterItemPool);
            this.armorOffsets[0].y = -36.6;
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = -17;
            this.armorOffsets[2].x = -2.9;
            this.armorOffsets[2].y = -8.9;
            this.armorOffsets[2].rotation = 0;
            this.armorOffsets[3].x = 2.8;
            this.armorOffsets[3].y = -8.9;
            this.armorOffsets[3].rotation = 0;
            this.armorOffsets[4].x = -5;
            this.armorOffsets[4].y = -3;
            this.armorOffsets[4].rotation = 90;
            this.armorOffsets[5].x = 4.7;
            this.armorOffsets[5].y = -3;
            this.armorOffsets[5].rotation = -90;
            this.get_pawsed() || (this.characterFrameTimer = ++this.characterFrameTimer % 20);
            0 == this.characterFrameTimer && this.stopMiningAnimation && (this.miningAnimation = this.stopMiningAnimation = !1);
            break;
        case 4:
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(224);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            this.get_pawsed() || (this.characterFrameTimer = ++this.characterFrameTimer % 12);
            0 == this.characterFrameTimer && (this.hurtAnimation = !1);
            this.armorOffsets[0].y = -37.7;
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = -17;
            this.armorOffsets[2].x = -2.7;
            this.armorOffsets[2].y = -11.5;
            this.armorOffsets[2].rotation = 30;
            this.armorOffsets[3].x = 3.2;
            this.armorOffsets[3].y = -10.9;
            this.armorOffsets[3].rotation = -15;
            this.armorOffsets[4].x = -5.3;
            this.armorOffsets[4].y = -5;
            this.armorOffsets[4].rotation = 90;
            this.armorOffsets[5].x = 5.4;
            this.armorOffsets[5].y = -5;
            this.armorOffsets[5].rotation = -90;
            break;
        case 5:
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(128);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            this.armorOffsets[0].y = -38.8;
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = -17.5;
            this.armorOffsets[2].x = -6.1;
            this.armorOffsets[2].y = -8;
            this.armorOffsets[2].rotation = 30;
            this.armorOffsets[3].x = 3.1;
            this.armorOffsets[3].y = -10;
            this.armorOffsets[3].rotation = -45;
            this.armorOffsets[4].x = -9.7;
            this.armorOffsets[4].y = -3.1;
            this.armorOffsets[4].rotation = 90;
            this.armorOffsets[5].x = 8.9;
            this.armorOffsets[5].y = -6;
            this.armorOffsets[5].rotation = 0;
            break;
        case 6:
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(240);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            this.armorOffsets[0].y = -36.1;
            this.armorOffsets[1].x = -.8;
            this.armorOffsets[1].y = -15.7;
            this.armorOffsets[2].x = -4.5;
            this.armorOffsets[2].y = -8.7;
            this.armorOffsets[2].rotation = 11;
            this.armorOffsets[4].x = -8.1;
            this.armorOffsets[4].y = -3.5;
            this.armorOffsets[4].rotation = 90;
            this.armorOffsets[3].hide = !0;
            this.armorOffsets[5].hide = !0;
            break;
        case 7:
            b = new lemongine.Matrix4().reset().translate(.03333333333333333, -.06444444444444446).multiply(this.characterMatrix.values);
            this.characterMatrix.set(b.values);
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(256);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            this.armorOffsets[0].y = -37.9;
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = -21.7;
            this.armorOffsets[1].hide = !0;
            this.armorOffsets[2].hide = !0;
            this.armorOffsets[3].hide = !0;
            this.armorOffsets[4].hide = !0;
            this.armorOffsets[5].hide = !0;
            break;
        case 8:
            b = new lemongine.Matrix4().reset().rotate2D(.25 * Math.PI).translate(-.3788888888888889, .2611111111111111).multiply(this.characterMatrix.values);
            this.characterMatrix.set(b.values);
            b = this.characterPool;
            a = this.characterQuad;
            l = new lemongine.Point(256);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            c = new haxe.ds.StringMap();
            c.h.texBlend = entities.Entity_Mob.blendMob;
            d = lemongine.Mathz.repeatArray(this.charColor, 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray(f, 6);
            c.h.colorOffset = d;
            b.updateQuad(a, null, l, null, null, p, null, c);
            this.armorOffsets[0].y = -37.9;
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = -21.7;
            this.armorOffsets[1].hide = !0;
            this.armorOffsets[2].hide = !0;
            this.armorOffsets[3].hide = !0;
            this.armorOffsets[4].hide = !0;
            this.armorOffsets[5].hide = !0;
            break;
        case 9:
            b = new lemongine.Matrix4().reset().rotate2D(-.25 * Math.PI).translate(.5455555555555556, -.10333333333333335).multiply(this.characterMatrix.values), this.characterMatrix.set(b.values), b = this.characterPool, a = this.characterQuad, l = new lemongine.Point(256), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix), c = new haxe.ds.StringMap(), c.h.texBlend = entities.Entity_Mob.blendMob, d = lemongine.Mathz.repeatArray(this.charColor, 6), c.h.color = d, d = lemongine.Mathz.repeatArray(f, 6), c.h.colorOffset = d, b.updateQuad(a, null, l, null, null, p, null, c), this.armorOffsets[0].y = -37.9, this.armorOffsets[1].x = 0, this.armorOffsets[1].y = -21.7, this.armorOffsets[1].hide = !0, this.armorOffsets[2].hide = !0, this.armorOffsets[3].hide = !0, this.armorOffsets[4].hide = !0, this.armorOffsets[5].hide = !0;
        }
        this.renderBowDrawback();
        this.renderArmor();
        this.scene.draw(this.characterPool);
        !this.get_pawsed() && this.eatingAnimation && ("mbk" == this.world.get_selectedInventoryItemType() || "potion" == this.world.get_selectedInventoryItemType() || null != BlockData.get(this.world.get_selectedInventoryItemType(), "food") && null != BlockData.get(this.world.get_selectedInventoryItemType(), "food").drink ? (0 == this.itemUseAnimationTimer % 10 && 0 < this.itemUseAnimationTimer && this.requestSound("drink" + (Math.floor(2 * Math.random()) + 1), 0, 0, .3), null != BlockData.get(this.world.get_selectedInventoryItemType(), "color") ? (b = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), a = new lemongine.Point(this.world.worldY - 1.5, 0), c = new haxe.ds.StringMap(), f = Colors.colors, l = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), d = f.h[l].h.r, f = Colors.colors, l = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), p = f.h[l].h.g, f = Colors.colors, l = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), c.h.color = [d, p, f.h[l].h.b]) : ("potion" == this.world.get_selectedInventoryItemType() ? (f = this.potionData, l = this.world.get_selectedInventoryItemExtra().h.type, b = Object.prototype.hasOwnProperty.call(f.h, l)) : b = !1, b ? (b = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), a = new lemongine.Point(this.world.worldY - 1.5, 0), c = new haxe.ds.StringMap(), f = this.potionData, l = this.world.get_selectedInventoryItemExtra().h.type, d = f.h[l].h.r, f = this.potionData, l = this.world.get_selectedInventoryItemExtra().h.type, p = f.h[l].h.g, f = this.potionData, l = this.world.get_selectedInventoryItemExtra().h.type, c.h.color = [d, p, f.h[l].h.b]) : (b = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), a = new lemongine.Point(this.world.worldY - 1.5, 0), c = new haxe.ds.StringMap(), c.h.color = [Colors.colors.h.lightblue.h.r, Colors.colors.h.lightblue.h.g, Colors.colors.h.lightblue.h.b]))) : (0 == this.itemUseAnimationTimer % 10 && 0 < this.itemUseAnimationTimer && this.requestSound("eat" + (Math.floor(2 * Math.random()) + 1), 0, 0, .3), null != BlockData.get(this.world.get_selectedInventoryItemType(), "color") ? (b = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), a = new lemongine.Point(this.world.worldY - 1.5, 0), c = new haxe.ds.StringMap(), f = Colors.colors, l = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), d = f.h[l].h.r, f = Colors.colors, l = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), p = f.h[l].h.g, f = Colors.colors, l = BlockData.get(this.world.get_selectedInventoryItemType(), "color"), c.h.color = [d, p, f.h[l].h.b]) : (b = new lemongine.Point(this.world.worldX + (0 > this.characterXScale ? .3333333333333333 : -.3333333333333333), 0), a = new lemongine.Point(this.world.worldY - 1.5, 0), c = new haxe.ds.StringMap(), c.h.color = [Colors.colors.h.brown.h.r, Colors.colors.h.brown.h.g, Colors.colors.h.brown.h.b])), this.addParticles("mining", 1, 0, b, a, !0, c));
        null != this.world.effects.h.invisibility ? (this.characterSkinVisible = !1, this.visibility = .1 + ("air" != this.world.armors[0][0] ? .2 : 0) + ("air" != this.world.armors[1][0] ? .2 : 0) + ("air" != this.world.armors[2][0] ? .2 : 0) + ("air" != this.world.armors[3][0] ? .2 : 0)) : (this.visibility = 1, this.characterSkinVisible = !0);
        this.visibility -= this.sneaking ? .2 : 0;
        this.armorOffsets[0].x = 0;
        if ("mh" == this.world.armors[0][0] && (this.armorOffsets[0].x = .25, null != this.world.armors[0][2] && null != Game.makeDynamicMap(this.world.armors[0][2]).h.type)) switch (Game.makeDynamicMap(this.world.armors[0][2]).h.type) {
        case "creeper":
            this.armorOffsets[0].x = 1.5;
            break;
        case "enderdragon":
            this.armorOffsets[0].x = -3.5, 2 == this.animate ? js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).dragonHeadAnimationCache = (js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).dragonHeadAnimationCache + Game.migrateSpeed(Math.abs(this.world.xSpeed / Game.migrateSpeed(1)) / 2) - 1) % 50 + 1 : 1 < js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).dragonHeadAnimationCache && (js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).dragonHeadAnimationCache += .5, 50 < js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).dragonHeadAnimationCache && (js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).dragonHeadAnimationCache = 1));
        }
    },
    updateArmorRenderers: function () {
        js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).remove();
        js.Boot.__cast(this.characterArmorRenderers[1], renderers.armor.Q_Chestplate).remove();
        js.Boot.__cast(this.characterArmorRenderers[3], renderers.armor.Q_Boots).remove();
        js.Boot.__cast(this.characterArmorRenderers[2], renderers.armor.Q_Leggings).remove();
        this.renderArmor();
    },
    renderArmor: function () {
        0 == GlobalSave.showArmor ? (js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).remove(), js.Boot.__cast(this.characterArmorRenderers[1], renderers.armor.Q_Chestplate).remove(), js.Boot.__cast(this.characterArmorRenderers[3], renderers.armor.Q_Boots).remove(), js.Boot.__cast(this.characterArmorRenderers[2], renderers.armor.Q_Leggings).remove()) : (this.armorOffsets[2].matrix.reset().scale2D(16).rotate2D(-this.armorOffsets[2].rotation / 180 * Math.PI).translate(this.armorOffsets[2].x, this.armorOffsets[2].y).scale2D(1.5 / this.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values), this.armorOffsets[3].matrix.reset().scale(-16, 16).rotate2D(-this.armorOffsets[3].rotation / 180 * Math.PI).translate(this.armorOffsets[3].x, this.armorOffsets[3].y).scale2D(1.5 / this.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values), js.Boot.__cast(this.characterArmorRenderers[2], renderers.armor.Q_Leggings).parentColor = this.charColor, js.Boot.__cast(this.characterArmorRenderers[2], renderers.armor.Q_Leggings).setItem(this.world.armorsAsItem(2), this.characterQuad, this.armorOffsets[2].matrix, this.armorOffsets[3].matrix, this.armorOffsets[2].hide, this.armorOffsets[3].hide).update(), this.armorOffsets[4].matrix.reset().scale2D(13.6).rotate2D(-(this.armorOffsets[4].rotation - 90) / 180 * Math.PI).translate(this.armorOffsets[4].x, this.armorOffsets[4].y).scale2D(1.5 / this.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values), this.armorOffsets[5].matrix.reset().scale(13.6 * (0 > this.armorOffsets[5].rotation ? -1 : 1), 13.6).rotate2D(-(this.armorOffsets[5].rotation - 90 * (0 > this.armorOffsets[5].rotation ? -1 : 1)) / 180 * Math.PI).translate(this.armorOffsets[5].x, this.armorOffsets[5].y).scale2D(1.5 / this.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values), js.Boot.__cast(this.characterArmorRenderers[3], renderers.armor.Q_Boots).parentColor = this.charColor, js.Boot.__cast(this.characterArmorRenderers[3], renderers.armor.Q_Boots).setItem(this.world.armorsAsItem(3), this.characterQuad, this.armorOffsets[4].matrix, this.armorOffsets[5].matrix, this.armorOffsets[4].hide, this.armorOffsets[5].hide).update(), this.armorOffsets[1].matrix.reset().scale2D(16).rotate2D(this.armorOffsets[1].rotation / 180 * Math.PI).translate(this.armorOffsets[1].x, this.armorOffsets[1].y).scale2D(1.5 / this.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values), js.Boot.__cast(this.characterArmorRenderers[1], renderers.armor.Q_Chestplate).parentColor = this.charColor, js.Boot.__cast(this.characterArmorRenderers[1], renderers.armor.Q_Chestplate).setItem(this.world.armorsAsItem(1), this.characterQuad, this.armorOffsets[1].matrix, this.armorOffsets[1].hide).update(), this.armorOffsets[0].matrix.reset().scale2D(16).rotate2D(this.armorOffsets[0].rotation / 180 * Math.PI).translate(this.armorOffsets[0].x, this.armorOffsets[0].y).scale2D(1.5 / this.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values), js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).parentColor = this.charColor, js.Boot.__cast(this.characterArmorRenderers[0], renderers.armor.Q_Helmet).setItem(this.world.armorsAsItem(0), this.characterQuad, this.armorOffsets[0].matrix, this.armorOffsets[0].hide).update());
    },
    secondsToString: function (b) {
        return (b / 60 | 0) + ":" + (10 > b % 60 ? "0" : "") + (b % 60 | 0);
    },
    getEffectsTooltips: function (b) {
        for (var a = [], c = 0, d = b.length; c < d;) {
            var f = b[c++];
            null != f.h.duration && a.push(Std.string(this.effectData.h[f.h.type].h.name) + " " + Std.string(f.h.level) + " for " + this.secondsToString(f.h.duration));
            if (null != f.h.level && null != this.effectData.h[f.h.type]) {
                var l = f.h.level * this.effectData.h[f.h.type].h.perLevel;
                "percent" == this.effectData.h[f.h.type].h.strengthType ? a.push("   " + (0 < l ? "+" : "") + l + "%") : "hearts" == this.effectData.h[f.h.type].h.strengthType ? a.push("   " + (0 < l ? "+" : "") + l + " Hearts") : "heartsexponential" == this.effectData.h[f.h.type].h.strengthType ? (l = Math.pow(2, Math.min(15, Math.max(0, f.h.level - 1))) * this.effectData.h[f.h.type].h.perLevel | 0, a.push("   " + (0 < l ? "+" : "") + l + " Hearts")) : "damage" == this.effectData.h[f.h.type].h.strengthType && a.push("   " + (0 < l ? "+" : "") + l + " Damage");
            }
        }
        return a;
    },
    runWorldLogic: function () {
        this.ranWorldLogicOnce = !0;
        if ("bl" == this.world.get_selectedInventoryItemType() && !Object.prototype.hasOwnProperty.call(this.world.balloons.h, "Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id)) {
            var b = this.world.balloons,
                a = "Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id,
                c = new haxe.ds.StringMap();
            c.h.x = this.world.worldX;
            c.h.y = this.world.worldY - 1;
            c.h.speedX = 0;
            c.h.speedY = -15;
            c.h.stringX = this.world.worldX;
            c.h.stringY = this.world.worldY;
            c.h.stringSpeedX = 0;
            c.h.stringSpeedY = 0;
            var d = new haxe.ds.StringMap();
            d.h.type = "player";
            d.h.id = this.world.player.id;
            c.h.attached = d;
            d = BlockData.get("bl", "life") - this.world.getInventoryItemDamage(this.world.selectedInventoryItem);
            c.h.life = d;
            d = this.world.get_selectedInventoryItemExtra();
            d = Object.prototype.hasOwnProperty.call(d.h, "type") ? this.world.get_selectedInventoryItemExtra().h.type : "white";
            c.h.type = d;
            d = new haxe.ds.StringMap();
            d.h.slot = this.world.selectedInventoryItem;
            d.h.of = this.world.player.id;
            c.h.inventory = Game.makeDynamicMap(d);
            b.h[a] = Game.makeDynamicMap(c);
            null != this.world.get_selectedInventoryItemExtra().h.unbreaking1 && (js.Boot.__cast(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id], haxe.ds.StringMap).h.unbreaking = 1);
            null != this.world.get_selectedInventoryItemExtra().h.unbreaking2 && (js.Boot.__cast(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id], haxe.ds.StringMap).h.unbreaking = 2);
            null != this.world.get_selectedInventoryItemExtra().h.unbreaking3 && (js.Boot.__cast(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id], haxe.ds.StringMap).h.unbreaking = 3);
            null != this.world.get_selectedInventoryItemExtra().h.unbreaking4 && (js.Boot.__cast(this.world.balloons.h["Hand" + this.world.selectedInventoryItem + "Of" + this.world.player.id], haxe.ds.StringMap).h.unbreaking = 4);
        }
        b = Object.keys(this.world.mobs.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("mob", this.world.mobs, b[c++]);
        b = Object.keys(this.world.balloons.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("balloon", this.world.balloons, b[c++]);
        b = Object.keys(this.world.spears.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("spear", this.world.spears, b[c++]);
        b = Object.keys(this.world.arrows.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("arrow", this.world.arrows, b[c++]);
        b = Object.keys(this.world.snowballs.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("snowball", this.world.snowballs, b[c++]);
        b = Object.keys(this.world.shurikens.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("shuriken", this.world.shurikens, b[c++]);
        b = Object.keys(this.world.fireballs.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("fireball", this.world.fireballs, b[c++]);
        b = Object.keys(this.world.flameballs.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("flameball", this.world.flameballs, b[c++]);
        b = Object.keys(this.world.splashPotions.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("splashPotion", this.world.splashPotions, b[c++]);
        b = Object.keys(this.world.carts.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogic("cart", this.world.carts, b[c++]);
        b = Object.keys(this.world.xpOrbs.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogicXpOrb(this.world.xpOrbs, b[c++]);
        b = Object.keys(this.world.drops.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogicDrop(this.world.drops, b[c++]);
        b = Object.keys(this.world.fallingBlocks.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogicFallingBlock(this.world.fallingBlocks, b[c++]);
        b = Object.keys(this.world.enderCrystals.h);
        a = b.length;
        for (c = 0; c < a;) d = b[c++], this.entityLogicEnderCrystal("enderCrystal", this.world.enderCrystals, d, this.world.enderCrystals.h[d]);
        b = Object.keys(this.world.rafts.h);
        a = b.length;
        for (c = 0; c < a;) this.entityLogicRaft(this.world.rafts, b[c++]);
        b = Object.keys(this.world.entities.h);
        a = b.length;
        for (c = 0; c < a;) d = b[c++], null != this.world.entities.h[d] && js.Boot.__cast(this.world.entities.h[d], entities.Entity_Base).run();
        this.renamedBalloons.h = Object.create(null);
    },
    entityLogic: function (b, a, c) {
        var d = a.h[c];
        if (null == d) Object.prototype.hasOwnProperty.call(a.h, c) && delete a.h[c];else switch (b) {
        case "balloon":
            this.entityLogicBalloon(b, a, c, d);
            break;
        case "cart":
            this.entityLogicCart(b, a, c, d);
            break;
        case "arrow":
        case "fireball":
        case "shuriken":
        case "snowball":
        case "spear":
            this.entityLogicProjectile(b, a, c, d);
            break;
        case "flameball":
            this.entityLogicFlameball(b, a, c, d);
            break;
        case "mob":
            this.entityLogicMob(b, a, c, d);
            break;
        case "splashPotion":
            this.entityLogicSplashPotion(b, a, c, d);
        }
    },
    entityLogicDrop: function (b, a) {
        var c = b.h[a];
        if (null == c) Object.prototype.hasOwnProperty.call(b.h, a) && delete b.h[a];else if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, a)) {
            var d = this.world.entities;
            b = new entities.Entity_Drop("drop", b, a, c, this, this.world);
            d.h[a] = b;
        }
    },
    entityLogicXpOrb: function (b, a) {
        var c = b.h[a];
        if (null == c) Object.prototype.hasOwnProperty.call(b.h, a) && delete b.h[a];else if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, a)) {
            var d = this.world.entities;
            b = new entities.Entity_XpOrb("xpOrb", b, a, c, this, this.world);
            d.h[a] = b;
        }
    },
    entityLogicRaft: function (b, a) {
        var c = b.h[a];
        if (null == c) Object.prototype.hasOwnProperty.call(b.h, a) && delete b.h[a];else if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, a)) {
            var d = this.world.entities;
            b = new entities.Entity_Raft("raft", b, a, c, this, this.world);
            d.h[a] = b;
        }
    },
    entityLogicCart: function (b, a, c, d) {
        d = a.h[c];
        null == d ? Object.prototype.hasOwnProperty.call(a.h, c) && delete a.h[c] : 0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c) && (b = this.world.entities, a = new entities.Entity_Cart("cart", a, c, d, this, this.world), b.h[c] = a);
    },
    entityLogicFallingBlock: function (b, a) {
        var c = b.h[a];
        if (null == c) Object.prototype.hasOwnProperty.call(b.h, a) && delete b.h[a];else if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, a)) {
            var d = this.world.entities;
            b = new entities.Entity_FallingBlock("fallingBlock", b, a, c, this, this.world);
            d.h[a] = b;
        }
    },
    entityLogicBalloon: function (b, a, c, d) {
        if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c)) {
            var f = this.world.entities;
            b = new entities.Entity_Balloon(b, a, c, d, this, this.world);
            f.h[c] = b;
        }
    },
    entityLogicSplashPotion: function (b, a, c, d) {
        if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c)) {
            var f = this.world.entities;
            b = new entities.Entity_SplashPotion(b, a, c, d, this, this.world);
            f.h[c] = b;
        }
    },
    entityLogicProjectile: function (b, a, c, d) {
        if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c)) {
            var f = this.world.entities;
            b = new entities.Entity_Projectile(b, a, c, d, this, this.world);
            f.h[c] = b;
        }
    },
    entityLogicFlameball: function (b, a, c, d) {
        if (0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c)) {
            var f = this.world.entities;
            b = new entities.Entity_Flameball(b, a, c, d, this, this.world);
            f.h[c] = b;
        }
    },
    entityLogicEnderCrystal: function (b, a, c, d) {
        if (3 == this.world.sceneNum && 0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c)) {
            var f = this.world.entities;
            b = new entities.Entity_EHC(b, a, c, d, this, this.world);
            f.h[c] = b;
        }
    },
    entityLogicMob: function (b, a, c, d) {
        null == this.world.mobs.h[c] ? (b = this.world.mobs, Object.prototype.hasOwnProperty.call(b.h, c) && delete b.h[c]) : 0 == Object.prototype.hasOwnProperty.call(this.world.entities.h, c) && null != this.world.mobData.h[this.world.mobs.h[c].h.type] && (b = this.world.entities, a = Type.createInstance(this.world.mobData.h[this.world.mobs.h[c].h.type].h.constructor, [c, this, this.world]), b.h[c] = a);
    },
    removeEntity: function (b, a) {
        a == this.world.splashPotions && this.splashAPotion(Game.makeDynamicMap(a.h[b]).h.x, Game.makeDynamicMap(a.h[b]).h.y, Game.makeDynamicMap(a.h[b]).h.effects, Game.makeDynamicMap(a.h[b]).h.showParticles);
        var c = this.world.onFire;
        Object.prototype.hasOwnProperty.call(c.h, b) && delete c.h[b];
        Object.prototype.hasOwnProperty.call(this.world.entities.h, b) && this.world.entities.h[b].remove();
        Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
    },
    damageEntity: function (b, a, c) {
        null == c && (c = 1);
        if (b == this.world.balloons) for (var d = 0; d < c;) {
            ++d;
            var f = Game.makeDynamicMap(b.h[a]).h.unbreaking;
            Math.random() < 1 / (Math.pow(null != f ? f : 0, 1.5) + 1) && (Game.makeDynamicMap(b.h[a]).h.life = Game.makeDynamicMap(b.h[a]).h.life - 1);
        }
    },
    splashAPotion: function (b, a, c, d) {
        null == d && (d = !0);
        null == c && (c = []);
        for (var f = 0, l = c.length; f < l;) {
            var p = f++,
                Q = new lemongine.Point(b - 1, 2),
                h = new lemongine.Point(a - 1, 2),
                n = new haxe.ds.StringMap();
            n.h.r = this.effectData.h[c[p].h.type].h.r;
            n.h.g = this.effectData.h[c[p].h.type].h.g;
            n.h.b = this.effectData.h[c[p].h.type].h.b;
            this.addParticles("effect", 20, 0, Q, h, !1, n);
        }
        Q = Object.keys(this.world.mobs.h);
        h = Q.length;
        for (n = 0; n < h;) {
            var M = Q[n++],
                m = Math.sqrt(Math.pow(this.world.mobs.h[M].h.x - b, 2) + Math.pow(this.world.mobs.h[M].h.y - a, 2));
            if (4 >= m) for (f = 0, l = c.length; f < l;) p = f++, null == c[p].h.duration && (c[p].h.duration = 1), null == c[p].h.level && (c[p].h.level = 1), this.addEffect(M, c[p].h.type, c[p].h.duration * (1 - m / 4) | 0, c[p].h.level, !0, d, 1 - m / 4);
        }
        b = Math.sqrt(Math.pow(this.world.worldX - b, 2) + Math.pow(this.world.worldY - a, 2));
        if (3 != this.world.gamemode && 4 >= b) for (f = 0, l = c.length; f < l;) p = f++, null == c[p].h.duration && (c[p].h.duration = 1), null == c[p].h.level && (c[p].h.level = 1), this.addEffect(this.world.player.id, c[p].h.type, c[p].h.duration * (1 - b / 4) | 0, c[p].h.level, !0, d, 1 - b / 4);
    },
    getWater: function (b, a) {
        var c = this.world.water.h["blockX" + b + "Y" + a];
        return null != c ? c : 1 == BlockData.get(this.world.getFG(b, a), "liquid") ? [10, 10] : [0, 0];
    },
    isFullWater: function (b, a) {
        b = this.getWater(b, a);
        return 10 == b[0] ? 10 == b[1] : !1;
    },
    doFrostWalker: function (b, a, c) {
        if (1 != BlockData.get(this.world.getFG(b, a), "walkThroughBlockHit")) {
            var d = -c;
            for (c += 1; d < c;) {
                var f = d++;
                "wr" == this.world.getFG(b + f, a) && this.isFullWater(b + f, a) && (this.requestRemove(b + f, a, !0, !0), this.world.setFG(b + f, a, "fice"));
            }
        }
    },
    findInInventory: function (b) {
        for (var a = 0; 45 > a;) {
            var c = a++;
            if (this.world.getInventoryItemType(c) == b && (1 <= this.world.getInventoryItemCount(c) || "" == this.world.inventoryItem(c)[1])) return c;
        }
        return -1;
    },
    canEatFood: function (b) {
        return null == BlockData.get(b, "food") || 0 < this.world.sleepingAnimation ? !1 : 900 >= this.world.food || null != Game.makeDynamicMap(BlockData.get(b, "food")).h.health && 20 > this.world.health ? !0 : null != Game.makeDynamicMap(BlockData.get(b, "food")).h.effects;
    },
    useUpItem: function (b) {
        null == b && (b = -1);
        -1 == b && (b = this.world.selectedInventoryItem);
        var a = this.world.getInventoryItemType(b);
        if (1 != this.world.gamemode) if (this.world.reduceInventoryItemCount(b, 1), "rabbitsoup" == a || "beetsoup" == a || "soup" == a || "icec" == a) this.addDrop("bowl", this.world.worldX, this.world.worldY);else if ("lade" == a || "orade" == a || "apade" == a) b = new haxe.ds.StringMap(), b.h.type = "empty", this.addDrop("potion", this.world.worldX, this.world.worldY, 1, null, b);
    },
    useBed: function (b, a) {
        1 == this.world.sceneNum ? 50 <= this.world.tim ? "bed1" == this.world.getFG(b, a) ? (this.world.sleepingAnimation = 1, this.world.spawnPoint.set(b, -a)) : "bed2" == this.world.getFG(b, a) && (this.world.sleepingAnimation = 1, this.world.spawnPoint.set(b - 1, -a)) : (Console.newLine("You can only sleep at night!"), this.isShiftClickAndContinue = !0) : this.explode(b, a, 5, !0);
    },
    getGameRule: function (b) {
        b = b.toLowerCase();
        if (null == this.world.gameRules.h[b]) if ("keepinventory" == b) this.world.gameRules.h.keepinventory = !1;else if ("dodaylightcycle" == b) this.world.gameRules.h.dodaylightcycle = !0;else if ("dofiretick" == b) this.world.gameRules.h.dofiretick = !0;else if ("mobgriefing" == b) this.world.gameRules.h.mobgriefing = !0;else if ("passivemobs" == b) this.world.gameRules.h.passivemobs = !0;else if ("domobloot" == b) this.world.gameRules.h.domobloot = !0;else if ("sendcommandfeedback" == b) this.world.gameRules.h.sendcommandfeedback = !0;else return null;
        return this.world.gameRules.h[b];
    },
    convertObjectToBlockState: function (b, a) {
        for (var c = new BlockState(), d = Object.keys(a.h), f = d.length, l = 0; l < f;) {
            var p = d[l++],
                k = a.h[p];
            switch (p.toLowerCase()) {
            case "activated":
                k = Std.string(k).toLowerCase();
                "lever" == b && "true" == k && (c.states2 = 1);
                break;
            case "damage":
                "anvil" != b || "Number" != lemongine.Helpers.getQualifiedClassName(k) && "int" != lemongine.Helpers.getQualifiedClassName(k) || (c.states1 = Math.max(1, Math.min(3, Std.parseInt(Std.string(k)))) | 0);
                break;
            case "facing":
                k = Std.string(k).toLowerCase();
                if ("lant" == b || "th" == b || "ortorch" == b || "rstorch" == b || "button" == b || "lever" == b) "right" == k ? c.states1 = 2 : "left" == k ? c.states1 = 3 : "up" == k && (c.states1 = 1);else if ("piston" == b || "spiston" == b) "right" == k ? c.states1 = 2 : "left" == k ? c.states1 = 4 : "down" == k ? c.states1 = 3 : "up" == k && (c.states1 = 1);else if ("dispense" == b || "dropper" == b) "right" == k ? c.states1 = 2 : "left" == k ? c.states1 = 1 : "down" == k ? c.states1 = 4 : "up" == k && (c.states1 = 3);else if (1 == BlockData.get(b, "stairBlock")) {
                    if ("downleft" == k) c.states1 = 3;else if ("downright" == k) c.states1 = 4;else if ("left" == k || "upleft" == k) c.states1 = 1;else {
                        if ("right" == k || "upright" == k) c.states1 = 2;
                    }
                } else if (1 == BlockData.get(b, "halfBlock")) "down" == k && (c.states1 = 2);else if ("hay" == b || "wd" == b) {
                    if ("left" == k || "right" == k) c.states1 = 2;else {
                        if ("up" == k || "down" == k) c.states1 = 1;
                    }
                } else "dr" == b || "bbdr" == b || "idr" == b ? ("left" == k && (c.states1 = 1), "right" == k && (c.states1 = 2)) : "mh" == b && ("left" == k && (c.states2 = 1), "right" == k && (c.states2 = 2));
                break;
            case "fuel":
                "oven" == b ? "Object" == lemongine.Helpers.getQualifiedClassName(k) && (k = this.convertObjectToItem(k), null != BlockData.get(k[0], "fuel") && (null == c.toSmelt && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.output = Game.emptyItem(), c.toSmelt = p), c.toSmelt.h.fuel = k)) : "brew" == b && "Object" == lemongine.Helpers.getQualifiedClassName(k) && (k = this.convertObjectToItem(k), "bp" == k[0] && (null == c.toBrew && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.brewTimer = 0, p.h.fuelUsed = 0, p.h.output = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem()], c.toBrew = p), c.toBrew.h.fuel = k));
                break;
            case "growth":
                if ("wseed" == b || "pseed" == b || "seed" == b || "carrot" == b || "potato" == b || "nw" == b || "bseed" == b) if ("Number" == lemongine.Helpers.getQualifiedClassName(k) || "int" == lemongine.Helpers.getQualifiedClassName(k)) c.wheat = Math.max(1, Math.min(7, Std.parseInt(Std.string(k)))) | 0;
                break;
            case "input":
                "oven" == b ? "Object" == lemongine.Helpers.getQualifiedClassName(k) && (k = this.convertObjectToItem(k), null != BlockData.get(k[0], "smeltsInto") && (null == c.toSmelt && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.output = Game.emptyItem(), c.toSmelt = p), c.toSmelt.h.input = k)) : "brew" == b && "Object" == lemongine.Helpers.getQualifiedClassName(k) && (k = this.convertObjectToItem(k), null != BlockData.get(k[0], "brewIngredient") && (null == c.toBrew && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.brewTimer = 0, p.h.fuelUsed = 0, p.h.output = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem()], c.toBrew = p), c.toBrew.h.input = k));
                break;
            case "items":
                if ("chest" == b) {
                    if ("Array" == lemongine.Helpers.getQualifiedClassName(k)) for (c.chests = [], p = 0; 27 > p;) {
                        var B = p++;
                        c.chests[B] = B >= k.length ? Game.emptyItem() : this.convertObjectToItem(k[B]);
                    } else {
                        if ("Object" == lemongine.Helpers.getQualifiedClassName(k)) for (c.chests = [], k = this.convertObjectToItem(k), p = 0; 27 > p;) c.chests[p++] = lemongine.Helpers.clone(k);
                    }
                } else if ("dropper" == b || "dispense" == b) if ("Array" == lemongine.Helpers.getQualifiedClassName(k)) for (c.states2 = [], p = 0; 27 > p;) B = p++, c.states2[B] = B >= k.length ? Game.emptyItem() : this.convertObjectToItem(k[B]);else if ("Object" == lemongine.Helpers.getQualifiedClassName(k)) for (c.states2 = [], k = this.convertObjectToItem(k), p = 0; 27 > p;) c.states2[p++] = lemongine.Helpers.clone(k);
                break;
            case "name":
                if ("String" == lemongine.Helpers.getQualifiedClassName(k)) if ("chest" == b || "oven" == b || "brew" == b || "enchant" == b) c.states1 = HxOverrides.substr(lemongine.Helpers.restrict(k, "a-zA-Z0-9\\-=+|_!.,()[]<>'@$%\\^&*#?/ "), 0, 20);else if ("dropper" == b || "dispense" == b) c.states3 = HxOverrides.substr(lemongine.Helpers.restrict(k, "a-zA-Z0-9\\-=+|_!.,()[]<>'@$%\\^&*#?/ "), 0, 20);
                break;
            case "output":
                "oven" == b ? "Object" == lemongine.Helpers.getQualifiedClassName(k) && (k = this.convertObjectToItem(k), null == c.toSmelt && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.output = Game.emptyItem(), c.toSmelt = p), c.toSmelt.h.output = k) : "brew" == b && ("Array" == lemongine.Helpers.getQualifiedClassName(k) ? (null == c.toBrew && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.brewTimer = 0, p.h.fuelUsed = 0, p.h.output = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem()], c.toBrew = p), 0 >= k.length ? c.toBrew.h.output[0] = Game.emptyItem() : (p = this.convertObjectToItem(k[0]), "potion" != p[0] || this.emptyPotion(p[3].type) || (c.toBrew.h.output[0] = p)), 1 >= k.length ? c.toBrew.h.output[1] = Game.emptyItem() : (p = this.convertObjectToItem(k[1]), "potion" != p[0] || this.emptyPotion(p[3].type) || (c.toBrew.h.output[1] = p)), 2 >= k.length ? c.toBrew.h.output[2] = Game.emptyItem() : (k = this.convertObjectToItem(k[2]), "potion" != k[0] || this.emptyPotion(k[3].type) || (c.toBrew.h.output[2] = k))) : "Object" == lemongine.Helpers.getQualifiedClassName(k) && (k = this.convertObjectToItem(k), "potion" != k[0] || this.emptyPotion(k[3].type) || (null == c.toBrew && (p = new haxe.ds.StringMap(), p.h.input = Game.emptyItem(), p.h.fuel = Game.emptyItem(), p.h.brewTimer = 0, p.h.fuelUsed = 0, p.h.output = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem()], c.toBrew = p), c.toBrew.h.output[0] = lemongine.Helpers.clone(k), c.toBrew.h.output[1] = lemongine.Helpers.clone(k), c.toBrew.h.output[2] = lemongine.Helpers.clone(k))));
                break;
            case "text":
                "sign" == b && "String" == lemongine.Helpers.getQualifiedClassName(k) && (c.signs = HxOverrides.substr(lemongine.Helpers.restrict(k, "A-Za-z0-9 .,'\"@$#%^=+&*<>()\\[\\]{}|~!?\\/\\\\\\-_:;\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df\u00c1\u00e1\u00c9\u00e9\u00cd\u00ed\u00d3\u00f3\u00da\u00fa\u00c0\u00e0\u00c8\u00e8\u00cc\u00ec\u00d2\u00f2\u00d9\u00f9\u00e7\u00c7\u00c3\u00e3\u1ebc\u1ebd\u0128\u0129\u00d5\u00f5\u0168\u0169\u00c2\u00e2\u00ca\u00ea\u00ce\u00ee\u00d4\u00f4\u00db\u00fb\u0178\u00ff\u00d8\u00f8\u0152\u0153\u00d1\u00f1\u00cf\u00ef\u00cb\u00eb\u00c5\u00e5\u00c6\u00e6"), 0, 45));
                break;
            case "type":
                if ("carpet" == b || "cloth" == b || "bdcloth" == b) p = Colors.colors, B = k.split(" ").join("").toLowerCase(), null != p.h[B] && (c.states1 = k.split(" ").join("").toLowerCase());else if ("gs" == b || "bdgs" == b || "bed1" == b) p = Colors.colors, B = k.split(" ").join("").toLowerCase(), null != p.h[B] && "rainbow" != k.toLowerCase() && (c.states1 = k.split(" ").join("").toLowerCase());else if ("mh" == b) switch (k = Std.string(k).split(" ").join("").toLowerCase(), k) {
                case "creeper":
                case "enderdragon":
                case "skeleton":
                case "zombie":
                    c.states1 = k;
                    break;
                default:
                    Std.string(Std.parseInt(k)) == k && (c.states1 = k);
                }
            }
        }
        if ("sl" == b || "gasd" == b) c.toGrow = !0;
        return c;
    },
    convertObjectToItem: function (b, a) {
        null == a && (a = !0);
        if ("Object" != lemongine.Helpers.getQualifiedClassName(b) || null == b.h.id) return Game.emptyItem();
        a && (b.h.id = lemongine.Helpers.trim(b.h.id));
        a = BlockData.identifierToID;
        var c = b.h.id.toLowerCase();
        if (null == a.h[c]) return Game.emptyItem();
        a = BlockData.identifierToID;
        c = b.h.id.toLowerCase();
        a = a.h[c];
        c = 1;
        var d = 0;
        BlockData.get(a, "unstackable") ? null != b.h.damage && (d = 0 > b.h.damage ? BlockData.get(a, "life") - Math.abs(Std.parseInt(Std.string(b.h.damage))) | 0 : Std.parseInt(Std.string(b.h.damage))) : (null != b.h.quantity && (c = Math.max(1, Math.min(64, Std.parseInt(Std.string(b.h.quantity)))) | 0), "anvil" == a && null != b.h.damage && (d = Math.max(1, Math.min(3, Std.parseInt(Std.string(b.h.damage)))) | 0));
        Object.prototype.hasOwnProperty.call(b.h, "id") && delete b.h.id;
        Object.prototype.hasOwnProperty.call(b.h, "quantity") && delete b.h.quantity;
        Object.prototype.hasOwnProperty.call(b.h, "damage") && delete b.h.damage;
        return [a, c, d, this.convertObjectToExtras(a, b)];
    },
    convertObjectToExtras: function (b, a) {
        for (var c = new haxe.ds.StringMap(), d = Object.keys(a.h), f = d.length, l = 0; l < f;) {
            var p = d[l++],
                k = a.h[p];
            switch (p.toLowerCase()) {
            case "anviluses":
                ("Number" == lemongine.Helpers.getQualifiedClassName(k) || "int" == lemongine.Helpers.getQualifiedClassName(k)) && 1 <= k && (c.h.anvilUses = Math.min(100, Math.floor(k)));
                break;
            case "candestroy":
                if ("Array" == lemongine.Helpers.getQualifiedClassName(k)) {
                    c.h.canDestroy = [];
                    p = 0;
                    for (var B = k.length; p < B;) {
                        var n = lemongine.Helpers.trim(k[p++].toLowerCase());
                        null != BlockData.identifierToID.h[n] && 1 == BlockData.get(BlockData.identifierToID.h[n], "placeable") ? -1 == c.h.canDestroy.indexOf(BlockData.identifierToID.h[n]) && c.h.canDestroy.push(n) : "all" == n && -1 == c.h.canDestroy.indexOf("all") && c.h.canDestroy.push("all");
                    }
                } else "String" == lemongine.Helpers.getQualifiedClassName(k) && (c.h.canDestroy = [], k = lemongine.Helpers.trim(k.toLowerCase()), null != BlockData.identifierToID.h[k] && 1 == BlockData.get(BlockData.identifierToID.h[k], "placeable") ? -1 == c.h.canDestroy.indexOf(BlockData.identifierToID.h[k]) && c.h.canDestroy.push(k) : "all" == k && (c.h.canDestroy = ["all"]));
                break;
            case "canplaceon":
                if (1 == BlockData.get(b, "placeable")) if ("Array" == lemongine.Helpers.getQualifiedClassName(k)) for (c.h.canPlaceOn = [], p = 0, B = k.length; p < B;) n = p++, "String" == lemongine.Helpers.getQualifiedClassName(k[n]) && (n = lemongine.Helpers.trim(k[n].toLowerCase()), null != BlockData.identifierToID.h[n] && 1 == BlockData.get(BlockData.identifierToID.h[n], "placeable") ? -1 == c.h.canPlaceOn.indexOf(BlockData.identifierToID.h[n]) && c.h.canPlaceOn.push(n) : "all" == n && -1 == c.h.canPlaceOn.indexOf("all") && c.h.canPlaceOn.push("all"));else "String" == lemongine.Helpers.getQualifiedClassName(k) && (k = lemongine.Helpers.trim(k.toLowerCase()), c.h.canPlaceOn = [], null != BlockData.identifierToID.h[k] && 1 == BlockData.get(BlockData.identifierToID.h[k], "placeable") ? -1 == c.h.canPlaceOn.indexOf(BlockData.identifierToID.h[k]) && c.h.canPlaceOn.push(k) : "all" == k && (c.h.canPlaceOn = ["all"]));
                break;
            case "category":
                "potion" == b && "splash" == Std.string(k).toLowerCase() && (c.h.category = "splash");
                break;
            case "command":
                "String" == lemongine.Helpers.getQualifiedClassName(k) && "cbook" == b && (c.h.command = k);
                break;
            case "enchantments":
                if ("Array" == lemongine.Helpers.getQualifiedClassName(k)) {
                    p = Object.create(null);
                    B = Object.create(null);
                    n = 0;
                    for (var M = k.length; n < M;) {
                        var m = n++;
                        if ("String" == lemongine.Helpers.getQualifiedClassName(k[m])) for (var T = Object.keys(Game.enchantmentNames.h), x = T.length, t = 0; t < x;) {
                            var w = T[t++];
                            null != p[HxOverrides.substr(w, 0, w.length - 1).toLowerCase()] || w.toLowerCase() != k[m].split(" ").join("").toLowerCase() && Game.enchantmentNames.h[w].split(" ").join("").toLowerCase() != k[m].split(" ").join("").toLowerCase() || (p[HxOverrides.substr(w, 0, w.length - 1)] = "enchant", B[w] = "enchant");
                        }
                    }
                    k = Object.keys(B);
                    p = k.length;
                    for (B = 0; B < p;) c.h[k[B++]] = "enchant";
                }
                break;
            case "name":
                "String" == lemongine.Helpers.getQualifiedClassName(k) && (k = HxOverrides.substr(lemongine.Helpers.restrict(k, "a-zA-Z0-9\\-=+|_!.,()[]<>'@$%\\^&*#?/ "), 0, 20), c.h.nameChange = k);
                break;
            case "showparticles":
                "potion" != b || 0 != k && 0 != k && "false" != Std.string(k).toLowerCase() || (c.h.showParticles = !1);
                break;
            case "type":
                "String" == lemongine.Helpers.getQualifiedClassName(k) && ("megg" == b ? null != entities.Entity_Mob.matchMobID(k) && (p = entities.Entity_Mob.matchMobVariant(k), c.h.type = p) : "potion" == b ? (p = this.potionData, B = k.toLowerCase().split(" ").join(""), null != p.h[B] && (p = k.toLowerCase().split(" ").join(""), c.h.type = p, p = this.potionData, B = k.toLowerCase().split(" ").join(""), p = lemongine.Helpers.clone(p.h[B].h.effects), c.h.effects = p)) : "carpet" == b || "cloth" == b || "bdcloth" == b ? (p = Colors.colors, B = k.split(" ").join("").toLowerCase(), null != p.h[B] && (p = k.split(" ").join("").toLowerCase(), c.h.type = p)) : "bed" == b || "dye" == b || "LeatherShoes" == b || "LeatherShirt" == b || "LeatherPants" == b || "LeatherCap" == b || "gs" == b || "bdgs" == b ? (p = Colors.colors, B = k.split(" ").join("").toLowerCase(), null != p.h[B] && "rainbow" != k.toLowerCase() && (p = k.split(" ").join("").toLowerCase(), c.h.type = p)) : "bl" == b && (p = Colors.colors, B = k.split(" ").join("").toLowerCase(), null != p.h[B] && "rainbow" != k.toLowerCase() ? (p = k.split(" ").join("").toLowerCase(), c.h.type = p) : "ghast" == k.toLowerCase() && (p = k.toLowerCase(), c.h.type = p)));
                if (("String" == lemongine.Helpers.getQualifiedClassName(k) || "int" == lemongine.Helpers.getQualifiedClassName(k)) && "mh" == b) switch (k = Std.string(k).split(" ").join("").toLowerCase(), k) {
                case "creeper":
                case "enderdragon":
                case "skeleton":
                case "zombie":
                    c.h.type = k;
                    break;
                default:
                    Std.string(Std.parseInt(k)) == k && (c.h.type = k);
                }
                break;
            case "unbreakable":
                (lemongine.Helpers.tripleEqual(k, !0) || 1 == k || "true" == Std.string(k).toLowerCase()) && BlockData.get(b, "tool") && (c.h.unbreakable = !0);
                break;
            case "uses":
                "Number" != lemongine.Helpers.getQualifiedClassName(k) && "int" != lemongine.Helpers.getQualifiedClassName(k) || "cbook" != b || (c.h.uses = Math.floor(k));
            }
        }
        return c;
    },
    interpretCommand: function (b, a) {
        null == a && (a = !1);
        if ("/" == HxOverrides.substr(b, 0, 1) || "\\" == HxOverrides.substr(b, 0, 1)) b = HxOverrides.substr(b, 1, b.length - 1);else if (this.isScavenger && !ScavengerManager.chatDisabled) {
            ScavengerManager.packetToServer_sendChat(b);
            return;
        }
        var c = lemongine.Helpers.trim(b);
        if (!(0 > c.length)) {
            b = c.toLowerCase();
            for (var d = b.split(" "), f = 0; f < d.length;) "" == d[f] && (d.splice(f, 1), --f), ++f;
            f = this.getGameRule("sendcommandfeedback");
            if (lemongine.Helpers.tripleEqual(this.world.cheats, -1) && !a) switch (d[0]) {
            case "cheats":
                if ("enable" == d[1]) {
                    this.world.cheats = !0;
                    this.world.threadedSave();
                    Console.newLine("[INFO] Cheats have been enabled. Enjoy!");
                    break;
                } else if ("disable" == d[1]) {
                    this.world.cheats = !1;
                    this.world.threadedSave();
                    Console.newLine("[INFO] Cheats have been disabled.");
                    break;
                }
                Console.newLine("[INFO] cheats [enable|disable]");
                break;
            case "cls":
                Console.clearAll();
                break;
            case "seed":
                Console.newLine("[INFO] Seed: " + this.world.seed);
                f && Console.newLine("[INFO] Different game versions may generate different worlds.");
                break;
            default:
                Console.newLine("- - - - - - - - - - - - - - - [ Help ]- - - - - - - - - - - - -"), Console.newLine("Cheats are currently disabled!"), Console.newLine("Type 'cheats enable' to enable cheats."), Console.newLine("Type 'cheats disable' to permanently disable cheats."), Console.newLine("Note: You may not receive achievements if cheats are enabled."), Console.newLine("Commands: help, seed, cheats, cls"), Console.newLine("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            } else if (1 == this.world.cheats || a) switch (d[0]) {
            case "clear":
                if (1 < d.length) {
                    if (d[1] = d[1].toLowerCase(), null != BlockData.identifierToID.h[d[1]]) {
                        var l = lemongine.Mathz.MAX_INT();
                        a = -1;
                        var p = new haxe.ds.StringMap();
                        if (3 <= d.length) {
                            if (d[2] == parseFloat(Std.string(d[2]))) 0 <= Math.floor(d[2]) && (l = Math.floor(d[2]));else {
                                Console.newLine("[INFO] Invalid quantity. Set quantity to -1 to clear all.");
                                break;
                            }
                            if (4 <= d.length) {
                                if (d[3] == Math.floor(parseFloat(d[3]))) BlockData.get(BlockData.identifierToID.h[d[1]], "tool") && (a = 0 > d[3] ? BlockData.get(BlockData.identifierToID.h[d[1]], "life") - Math.abs(d[3]) | 0 : d[3]);else {
                                    Console.newLine("[INFO] Invalid damage value. Set to -1 to ignore.");
                                    break;
                                }
                                if (5 <= d.length) if ("{" == d[4].substr(0, 1)) {
                                    var Q = Game.parseCommandObject(HxOverrides.substr(c, b.indexOf("{"), b.length));
                                    if (-1 == Q[0]) {
                                        Console.newLine("[INFO] data_tags parse error: " + Std.string(Q[1]));
                                        break;
                                    }
                                    p = this.convertObjectToExtras(BlockData.identifierToID.h[d[1]], Q[1]);
                                    this.hasEnchantment(p) && "book" == BlockData.identifierToID.h[d[1]] && (d[1] = " enchanted_book");
                                } else {
                                    Console.newLine("[INFO] Invalid data_tags value.");
                                    break;
                                }
                            }
                        }
                        b = !1;
                        for (var B = c = 0; 45 > B;) {
                            if (this.world.getInventoryItemType(B) == BlockData.identifierToID.h[d[1]] && !(0 <= a && this.world.getInventoryItemDamage(B) != a && 1 == BlockData.get(this.world.getInventoryItemType(B), "tool")) && Game.hasExtras(this.world.getInventoryItemExtras(B), p)) {
                                b = !0;
                                if (0 == l) {
                                    Console.newLine("[INFO] Found a match.");
                                    return;
                                }
                                var m = Math.min(this.world.getInventoryItemCount(B), l - c) | 0;
                                this.world.reduceInventoryItemCount(B, m);
                                c += m;
                                if (c >= l) break;
                            }
                            ++B;
                        }
                        for (B = 0; B < this.world.armors.length;) {
                            if (this.world.armors[B][0] == BlockData.identifierToID.h[d[1]] && !(0 <= a && this.world.armors[B][1] != a && 1 == BlockData.get(this.world.armors[B][0], "tool")) && Game.hasExtras(this.world.armors[B][2], p)) {
                                b = !0;
                                if (0 == l) {
                                    Console.newLine("[INFO] Found a match.");
                                    return;
                                }
                                m = Math.min(1, l - c) | 0;
                                this.world.armors[B] = ["air", 0, new haxe.ds.StringMap()];
                                c += m;
                                if (c >= l) break;
                            }
                            ++B;
                        }
                        if (!b && 0 == l) {
                            Console.newLine("[INFO] No matches.");
                            break;
                        }
                        f && Console.newLine("[INFO] Removed " + c + " item" + (1 == c ? "" : "s") + ".");
                        break;
                    } else Console.newLine('[INFO] "' + Std.string(d[1]) + '" is not a proper item ID.');
                } else {
                    for (b = c = 0; 45 > b;) B = b++, m = this.world.getInventoryItemCount(B), this.world.setInventoryItem(B, Game.emptyItem()), c += m;
                    f && Console.newLine("[INFO] Removed " + c + " item" + (1 == c ? "" : "s") + ".");
                    break;
                }
                Console.newLine("[INFO] clear itemname [quantity|-1] [damage|-1] [data_tags]");
                break;
            case "clone":
                if (7 <= d.length && 10 >= d.length) {
                    d[1] = this.parseCoordinate(d[1], "x");
                    d[2] = this.parseCoordinate(d[2], "y");
                    d[5] = this.parseCoordinate(d[5], "x");
                    d[6] = this.parseCoordinate(d[6], "y");
                    if (isNaN(d[1]) || isNaN(d[2])) Console.newLine("[INFO] x1 and y1 must be valid coordinates.");else if (d[3] == parseFloat(Std.string(d[3])) && d[4] == parseFloat(Std.string(d[4])) && 0 <= d[3] && 0 <= d[4]) {
                        if (isNaN(d[5]) || isNaN(d[6])) Console.newLine("[INFO] xDest and yDest must be valid coordinates.");else {
                            l = new lemongine.Rectangle(Math.floor(d[1]), Math.floor(d[2]), Math.floor(d[3]), Math.floor(d[4]));
                            p = new lemongine.Rectangle(Math.floor(d[5]), Math.floor(d[6]), Math.floor(d[3]), Math.floor(d[4]));
                            if (1E4 < l.width * l.height) {
                                Console.newLine("[INFO] You may not involve more than a 10000-block region.");
                                break;
                            }
                            B = "replace";
                            m = "normal";
                            Q = "";
                            if (8 <= d.length) {
                                10 <= d.length && (d[9] = d[9].toLowerCase());
                                if ("filtered" == d[7].toLowerCase()) {
                                    if (B = "filtered", 10 > d.length) {
                                        Console.newLine("[INFO] When using filtered mode, you must provide a mask block.");
                                        break;
                                    } else if (1 == BlockData.get(BlockData.identifierToID.h[d[9]], "placeable") || "air" == d[9]) Q = d[9];else {
                                        Console.newLine('[INFO] "' + Std.string(d[9]) + '" is not a proper block ID.');
                                        break;
                                    }
                                } else if ("masked" == d[7].toLowerCase()) B = "masked";else if ("replace" != d[7].toLowerCase()) {
                                    Console.newLine("[INFO] Unrecognized filter mode: '" + Std.string(d[7]) + "'.");
                                    break;
                                }
                                if (9 <= d.length) if ("force" == d[8].toLowerCase()) m = "force";else if ("move" == d[8].toLowerCase()) m = "move";else if ("normal" != d[8].toLowerCase()) {
                                    Console.newLine("[INFO] Unrecognized move mode: '" + Std.string(d[8]) + "'.");
                                    break;
                                }
                            }
                            a = 0;
                            var M = Object.create(null);
                            b = Math.floor(l.x);
                            for (c = Math.floor(l.get_right()); b < c;) {
                                var ka = b++;
                                if (null != this.world.scene[ka]) {
                                    d = Math.floor(l.get_top());
                                    for (var T = Math.floor(l.get_bottom()); d < T;) {
                                        var x = d++;
                                        if (!(0 > x || "filtered" == B && Q != this.world.getFG(ka, x) || "masked" == B && this.isEmptyBlock(this.world.getFG(ka, x)))) {
                                            var C = new haxe.ds.StringMap(),
                                                K = this.world.getFG(ka, x);
                                            C.h.type = K;
                                            K = this.createBlockStateObject(ka, x);
                                            C.h.data = K;
                                            M["blockX" + ka + "Y" + x] = Game.makeDynamicMap(C);
                                            "move" == m && this.requestRemove(ka, x, !0, !1, !0);
                                            ++a;
                                        }
                                    }
                                }
                            }
                            b = Math.floor(p.x);
                            for (c = Math.floor(p.get_right()); b < c;) if (ka = b++, null != this.world.scene[ka]) for (d = Math.floor(p.get_top()), T = Math.floor(p.get_bottom()); d < T;) x = d++, 0 > x || (B = M["blockX" + (ka - p.x + l.x) + "Y" + (x - p.y + l.y)], null != B && (this.requestRemove(ka, x, !0, !1, !0), this.world.setFG(ka, x, B.h.type), this.applyBlockState(ka, x, B.h.data), this.makeBlock(ka, x)));
                            f && Console.newLine("[INFO] " + a + " block" + (1 == a ? "" : "s") + " cloned");
                        }
                    } else Console.newLine("[INFO] width and height must be valid numbers.");
                    break;
                } else Console.newLine("[INFO] Unexpected number of parameters.");
                Console.newLine("[INFO] clone [~]x1 [~]y1 width height [~]xDest [~]yDest");
                Console.newLine("       [filtered|masked|replace] [force|move|normal] block_mask");
                break;
            case "cls":
                Console.clearAll();
                break;
            case "difficulty":
                "peaceful" == d[1] || "p" == d[1] || "0" == d[1] ? (this.world.difficulty = "peaceful", this.world.fly = !1, f && Console.newLine("[INFO] Difficulty is now set to peaceful.")) : "easy" == d[1] || "e" == d[1] || "1" == d[1] ? (this.world.difficulty = "easy", this.world.fly = !1, f && Console.newLine("[INFO] Difficulty is now set to easy.")) : "normal" == d[1] || "n" == d[1] || "2" == d[1] ? (this.world.difficulty = "normal", this.world.fly = !1, f && Console.newLine("[INFO] Difficulty is now set to normal.")) : "hard" == d[1] || "h" == d[1] || "3" == d[1] ? (this.world.difficulty = "hard", this.world.fly = !1, f && Console.newLine("[INFO] Difficulty is now set to hard.")) : Console.newLine("[INFO] difficulty <peaceful|easy|normal|hard>");
                break;
            case "enchant":
                if (1 < d.length) {
                    d[1] = d[1].toLowerCase();
                    c = Object.keys(Game.enchantmentNames.h);
                    a = c.length;
                    for (l = 0; l < a;) if (b = c[l++], b.toLowerCase() == d[1].toLowerCase() || Game.enchantmentNames.h[b].split(" ").join("").toLowerCase() == d[1].toLowerCase()) {
                        a = Object.keys(this.world.get_selectedInventoryItemExtra().h);
                        l = a.length;
                        for (p = 0; p < l;) if (c = a[p++], HxOverrides.substr(c, 0, c.length - 1) == HxOverrides.substr(b, 0, b.length - 1)) {
                            T = Std.parseInt(HxOverrides.substr(c, -1, 1));
                            if (isNaN(T)) Console.newLine("[INFO] enchantment is already on the item.");else {
                                for (f = Std.parseInt(HxOverrides.substr(c, -1, 1)) + Std.parseInt(HxOverrides.substr(b, -1, 1)); null == Game.enchantmentNames.h[HxOverrides.substr(c, 0, c.length - 1) + (null == f ? "null" : "" + f)];) if (--f, 0 >= f) {
                                    Console.newLine("[INFO] enchantment is already on the item.");
                                    return;
                                }
                                f > Std.parseInt(HxOverrides.substr(c, -1, 1)) ? (Console.newLine("[INFO] " + Game.enchantmentNames.h[HxOverrides.substr(c, 0, c.length - 1) + (null == f ? "null" : "" + f)] + " added to selected item"), b = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(b.h, c) && delete b.h[c], this.world.get_selectedInventoryItemExtra().h[HxOverrides.substr(c, 0, c.length - 1) + (null == f ? "null" : "" + f)] = "enchant") : Console.newLine("[INFO] enchantment is already on the item.");
                            }
                            return;
                        }
                        "book" == this.world.get_selectedInventoryItemType() && this.world.setInventoryItemType(this.world.selectedInventoryItem, "ebook");
                        this.world.get_selectedInventoryItemExtra().h[b] = "enchant";
                        f && Console.newLine("[INFO] " + Game.enchantmentNames.h[b] + " added to selected item");
                        this.updateSelectedInventoryItemStuff();
                        return;
                    }
                    if (null != d[1] && 0 <= d[1].length) {
                        Console.newLine('[INFO] "' + Std.string(d[1]) + '" is not a proper enchantment.');
                        break;
                    }
                }
                Console.newLine("[INFO] enchant enchantment_id");
                break;
            case "explode":
                if (d[1] == parseFloat(Std.string(d[1]))) {
                    if (1 > d[1] || 10 < d[1]) {
                        Console.newLine("[INFO] Explosion size must be a number from 1 to 10.");
                        break;
                    }
                    if (2 == d.length) {
                        this.explode(Math.floor(this.world.worldX / 1), Math.floor(-this.world.worldY), d[1], !1);
                        break;
                    } else if (4 == d.length) if (d[2] = this.parseCoordinate(d[2], "x"), d[3] = this.parseCoordinate(d[3], "y"), isNaN(d[2]) || isNaN(d[3])) Console.newLine("[INFO] X and Y should be numbers.");else {
                        this.explode(Math.floor(d[2]), Math.floor(d[3]), d[1], !1);
                        break;
                    }
                }
                Console.newLine("[INFO] explode size [[~]x [~]y]");
                break;
            case "fill":
                if (6 <= d.length) {
                    d[1] = d[1].toLowerCase();
                    if (null != BlockData.identifierToID.h[d[1]]) {
                        if (1 != BlockData.get(BlockData.identifierToID.h[d[1]], "placeable") && "air" != d[1] || null != BlockData.get(BlockData.identifierToID.h[d[1]], "setBlockable")) Console.newLine('[INFO] "' + Std.string(BlockData.get(BlockData.identifierToID.h[d[1]], "name")) + '" is not a placeable block.');else if (d[2] = this.parseCoordinate(d[2], "x"), d[3] = this.parseCoordinate(d[3], "y"), isNaN(d[2]) || isNaN(d[3])) Console.newLine("[INFO] x and y should be valid coordinates.");else if (d[4] == parseFloat(Std.string(d[4])) && d[5] == parseFloat(Std.string(d[5])) && 0 <= d[4] && 0 <= d[5]) {
                            if (l = new lemongine.Rectangle(Math.floor(d[2]), Math.floor(d[3]), Math.floor(d[4]), Math.floor(d[5])), 1E4 >= (l.width + 1) * (l.height + 1)) {
                                a = 0;
                                p = "replace";
                                B = null;
                                Q = 6;
                                null != d[6] && (d[6] = d[6].toLowerCase(), "replace" == d[6] || "keep" == d[6] || "hallow" == d[6] || "outline" == d[6] || "destroy" == d[6]) && (Q = 7, p = d[6], null != d[7] && "replace" == d[6] && null != BlockData.identifierToID.h[d[7]] && (Q = 8, B = d[7]));
                                m = null;
                                if (d.length > Q) if ("{" == d[Q].substr(0, 1)) {
                                    if (-1 < b.indexOf("{")) {
                                        Q = Game.parseCommandObject(HxOverrides.substr(c, b.indexOf("{"), b.length));
                                        if (-1 == Q[0]) {
                                            Console.newLine("[INFO] data_tags parse error: " + Std.string(Q[1]));
                                            break;
                                        }
                                        m = this.convertObjectToBlockState(BlockData.identifierToID.h[d[1]], Q[1]);
                                    } else {
                                        Console.newLine("[INFO] Invalid data_tags value.");
                                        break;
                                    }
                                } else {
                                    6 == Q ? (Console.newLine("[INFO] Unknown oldBlockHandling value."), Console.newLine("[INFO] Expected [replace|keep|outline|hollow|destroy].")) : "replace" == p ? Console.newLine("[INFO] Unknown replace_block_type value.") : Console.newLine("[INFO] Unexpected parameter after oldBlockHandling.");
                                    break;
                                }
                                Q = BlockData.identifierToID.h[d[1]];
                                "dtg" == Q && (Q = "dt", null == m && (m = new BlockState()), m.states1 = 1);
                                b = Math.floor(l.x);
                                for (c = Math.floor(l.get_right()); b < c;) if (M = b++, null != this.world.scene[M]) for (d = Math.floor(l.get_top()), T = Math.floor(l.get_bottom()); d < T;) if (ka = d++, "hallow" == p || "outline" == p) M == l.get_left() || M == l.get_right() || ka == l.get_top() || ka == l.get_bottom() ? (this.world.setFG(M, ka, Q), this.makeBlock(M, ka), ++a) : "hallow" == p ? this.mineBlock(M, ka, !1, !1) : this.requestRemove(M, ka, !0, !1);else if ("undefined" == this.world.getFG(M, ka) || "replace" == p || "destroy" == p) if (null == B || BlockData.get(this.world.getFG(M, ka), "identifier") == B) "destroy" == p ? this.mineBlock(M, ka, !1, !1) : this.requestRemove(M, ka, !0, !1), this.world.setFG(M, ka, Q), this.applyBlockState(M, ka, m), this.makeBlock(M, ka), ++a;
                                f && Console.newLine("[INFO] " + a + " block" + (1 == a ? "" : "s") + " filled.");
                            } else Console.newLine("[INFO] You may not involve more than a 10000-block region.");
                        } else Console.newLine("[INFO] X2 and Y2 should be numeric.");
                    } else Console.newLine('[INFO] "' + Std.string(d[1]) + '" is not a proper item ID.');
                    break;
                }
                Console.newLine("[INFO] fill block_type [~]x [~]y width height");
                Console.newLine("       [(replace [replace_block_type])|keep|outline");
                Console.newLine("       |hollow|destroy] [data_tags]");
                break;
            case "gamemode":
                "survival" == d[1] || "s" == d[1] || "0" == d[1] ? (this.setGamemode(0), f && Console.newLine("[INFO] You are now in survival mode.")) : "creative" == d[1] || "c" == d[1] || "1" == d[1] ? (this.setGamemode(1), f && Console.newLine("[INFO] You are now in creative mode.")) : "adventure" == d[1] || "a" == d[1] || "2" == d[1] ? (this.setGamemode(2), f && Console.newLine("[INFO] You are now in adventure mode.")) : "spectator" == d[1] || "p" == d[1] || "3" == d[1] ? (this.setGamemode(3), f && Console.newLine("[INFO] You are now in spectator mode.")) : Console.newLine("[INFO] gamemode <survival|creative|adventure|spectator>");
                break;
            case "gamerule":
                if (3 == d.length) if (d[1] = d[1].toLowerCase(), d[2] = d[2].toLowerCase(), "keepinventory" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.keepinventory = !1, f && Console.newLine("[INFO] Inventory will be dropped upon death (default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.keepinventory = !0, f && Console.newLine("[INFO] Inventory will be kept upon death (not default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else if ("mobgriefing" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.mobgriefing = !1, f && Console.newLine("[INFO] Mobs will not be able to change blocks (not default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.mobgriefing = !0, f && Console.newLine("[INFO] Mobs will be able to change blocks (default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else if ("dodaylightcycle" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.dodaylightcycle = !1, f && Console.newLine("[INFO] The daylight cycle will stop (not default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.dodaylightcycle = !0, f && Console.newLine("[INFO] The daylight cycle will continue (default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else if ("dofiretick" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.dofiretick = !1, f && Console.newLine("[INFO] Fire will not spread and not be naturally put out (not default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.dofiretick = !0, f && Console.newLine("[INFO] Fire will spread and be naturally put out (default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else if ("passivemobs" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.passivemobs = !1, f && Console.newLine("[INFO] Passive mobs will not spawn (not default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.passivemobs = !0, f && Console.newLine("[INFO] Passive mobs will spawn (default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else if ("domobloot" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.domobloot = !1, f && Console.newLine("[INFO] Mobs will not drop items (not default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.domobloot = !0, f && Console.newLine("[INFO] Mobs will drop items (default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else if ("sendcommandfeedback" == d[1]) {
                    "false" == d[2] || "0" == d[2] ? (this.world.gameRules.h.sendcommandfeedback = !1, f && Console.newLine("[INFO] Commands will not return feedback (not default).")) : "true" == d[2] || "1" == d[2] ? (this.world.gameRules.h.sendcommandfeedback = !0, Console.newLine("[INFO] Commands will return feedback (default).")) : Console.newLine("[INFO] Unknown game rule value. <true|false> expected.");
                    break;
                } else Console.newLine("[INFO] Unknown game rule.");
                Console.newLine("[INFO] gamerule <keepinventory|dodaylightcycle|dofiretick|domobloot|mobgriefing|sendcommandfeedback> value", 7);
                break;
            case "give":
                if (1 < d.length) {
                    d[1] = d[1].toLowerCase();
                    if (null != BlockData.identifierToID.h[d[1]]) {
                        T = 1;
                        a = null;
                        p = new haxe.ds.StringMap();
                        if (3 <= d.length) {
                            if (d[2] == Math.floor(parseFloat(Std.string(d[2]))) && 1E4 > d[2]) T = d[2];else {
                                Console.newLine("[INFO] Invalid quantity.");
                                break;
                            }
                            if (4 <= d.length) {
                                if (d[3] == Math.floor(parseFloat(d[3]))) 1 == BlockData.get(BlockData.identifierToID.h[d[1]], "tool") && (a = 0 > d[3] ? BlockData.get(BlockData.identifierToID.h[d[1]], "life") - Math.abs(d[3]) | 0 : d[3]);else {
                                    Console.newLine("[INFO] Invalid damage value.");
                                    break;
                                }
                                if (4 < d.length) if ("{" == d[4].substr(0, 1)) {
                                    Q = Game.parseCommandObject(HxOverrides.substr(c, b.indexOf("{"), b.length));
                                    if (-1 == Q[0]) {
                                        Console.newLine("[INFO] data_tags parse error: " + Std.string(Q[1]));
                                        break;
                                    }
                                    p = this.convertObjectToExtras(BlockData.identifierToID.h[d[1]], Q[1]);
                                    this.hasEnchantment(p) && "book" == BlockData.identifierToID.h[d[1]] && (d[1] = " enchanted_book");
                                } else {
                                    Console.newLine("[INFO] Invalid data_tags value.");
                                    break;
                                }
                            }
                        }
                        this.addDrop(BlockData.identifierToID.h[d[1]], this.world.worldX, this.world.worldY, T, a, p);
                        f && Console.newLine("[INFO] Gave " + T + ' "' + this.getItemName(Game.item(BlockData.identifierToID.h[d[1]], T, a, p)) + '".');
                    } else Console.newLine('[INFO] "' + Std.string(d[1]) + '" is not a proper item ID.');
                    break;
                }
                Console.newLine("[INFO] give itemname [quantity] [damage] [data_tags]");
                break;
            case "heal":
                this.world.health = 20;
                f && Console.newLine("[INFO] Health restored.");
                break;
            case "help":
                Console.newLine("- - - - - - - - - - - - - - - [ Help ]- - - - - - - - - - - - -");
                Console.newLine("Commands: help, gamemode, tp, home, time, weather, give, explode, fill, gamerule, heal, kill, xp, spawnskin, difficulty, lightning, enchant, clone, setblock, cls, summon, say", 10);
                Console.newLine("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
                break;
            case "home":
                if ("set" == d[1]) {
                    if (2 == d.length) {
                        this.world.spawnPoint.set(this.world.worldX, this.world.worldY);
                        this.world.threadedSave();
                        f && Console.newLine("[INFO] Your home position has been set to your current position.");
                        break;
                    } else {
                        if (d[2] = this.parseCoordinate(d[2], "x"), d[3] = this.parseCoordinate(d[3], "y"), !isNaN(d[2]) && !isNaN(d[3])) {
                            this.world.spawnPoint = new lemongine.Point(d[2], -d[3]);
                            this.world.threadedSave();
                            f && Console.newLine("[INFO] Your home position has been set to x=" + Math.floor(100 * d[2]) / 100 + ", y=" + Math.floor(100 * d[3]) / 100 + ".");
                            break;
                        }
                    }
                } else if ("get" == d[1]) {
                    Console.newLine("[INFO] Your current home position: x=" + Math.floor(this.world.spawnPoint.x / 1 * 100) / 100 + ", y=" + Math.floor(100 * -this.world.spawnPoint.y) / 100 + ".");
                    break;
                } else if (1 == d.length) {
                    this.world.xSpeed = 0;
                    this.world.ySpeed = 0;
                    this.world.worldX = this.world.spawnPoint.x;
                    this.world.worldY = this.world.spawnPoint.y;
                    this.world.riding = "";
                    this.world.threadedSave();
                    f && Console.newLine("[INFO] Welcome home!");
                    break;
                }
                Console.newLine("[INFO] home <get|set [~]x [~]y>");
                break;
            case "kill":
                this.world.dead = 1;
                f && Console.newLine("[INFO] O_O");
                break;
            case "lightning":
                if (2 < d.length) {
                    if (d[1] = this.parseCoordinate(d[1], "x"), d[2] = this.parseCoordinate(d[2], "y"), isNaN(d[1]) || isNaN(d[2])) Console.newLine("[INFO] Invalid location.");else {
                        this.newLightning().doAt(d[1], d[2]);
                        break;
                    }
                } else if (1 == d.length) {
                    this.newLightning().doAt(Math.floor(this.world.worldX / 1), Math.floor(-this.world.worldY));
                    break;
                }
                Console.newLine("[INFO] lightning [[~]x [~]y]");
                break;
            case "resetspawnskins":
                this.world.loadedSkins = new haxe.ds.StringMap();
                f && Console.newLine("[INFO] Spawnskins have been reset.");
                break;
            case "say":
                Console.newLine("[SAY] " + this.parseSlashes(HxOverrides.substr(c, 4, null)), 6);
                break;
            case "seed":
                this.isScavenger ? (Console.newLine("[INFO] Seed: " + this.world.seed + " (Scavenger)"), f && Console.newLine("[INFO] This will generate a different world outside of Scavenger.")) : (Console.newLine("[INFO] Seed: " + this.world.seed), f && Console.newLine("[INFO] Different game versions may generate different worlds."));
                break;
            case "setblock":
                if (4 <= d.length) {
                    d[1] = d[1].toLowerCase();
                    if (null != BlockData.identifierToID.h[d[1]]) {
                        if (1 != BlockData.get(BlockData.identifierToID.h[d[1]], "placeable") && "air" != d[1] || null != BlockData.get(BlockData.identifierToID.h[d[1]], "setBlockable")) Console.newLine('[INFO] "' + Std.string(BlockData.get(BlockData.identifierToID.h[d[1]], "name")) + '" is not a placeable block.');else if (d[2] = this.parseCoordinate(d[2], "x"), d[3] = this.parseCoordinate(d[3], "y"), isNaN(d[2]) || isNaN(d[3])) Console.newLine("[INFO] x and y should be valid coordinates.");else {
                            d[2] = Math.floor(d[2]);
                            d[3] = Math.floor(d[3]);
                            l = "replace";
                            null != d[4] && (d[4] = d[4].toLowerCase(), l = d[4]);
                            a = 0;
                            if ("keep" == l || "replace" == l || "destroy" == l) {
                                if ("keep" != l || "undefined" == this.world.getFG(d[2], d[3])) {
                                    m = null;
                                    if (5 < d.length) if ("{" == d[5].substr(0, 1)) {
                                        Q = Game.parseCommandObject(HxOverrides.substr(c, b.indexOf("{"), b.length));
                                        if (-1 == Q[0]) {
                                            Console.newLine("[INFO] data_tags parse error: " + Std.string(Q[1]));
                                            break;
                                        }
                                        m = this.convertObjectToBlockState(BlockData.identifierToID.h[d[1]], Q[1]);
                                    } else {
                                        Console.newLine("[INFO] Invalid data_tags value.");
                                        break;
                                    }
                                    "destroy" == l ? this.mineBlock(d[2], d[3], !1, !1) : this.requestRemove(d[2], d[3], !0, !1);
                                    Q = BlockData.identifierToID.h[d[1]];
                                    "dtg" == Q && (Q = "dt", null == m && (m = new BlockState()), m.states1 = 1);
                                    this.world.setFG(d[2], d[3], Q);
                                    this.applyBlockState(d[2], d[3], m);
                                    this.makeBlock(d[2], d[3]);
                                    a = 1;
                                }
                            } else {
                                Console.newLine("[INFO] Unknown oldBlockHandling value.");
                                Console.newLine("[INFO] Expected [replace|keep|destroy].");
                                break;
                            }
                            f && Console.newLine("[INFO] " + a + " block" + (1 == a ? "" : "s") + " set.");
                        }
                    } else Console.newLine('[INFO] "' + Std.string(d[1]) + '" is not a proper item ID.');
                    break;
                }
                Console.newLine("[INFO] setblock block_type [~]x [~]y [replace|keep|destroy]");
                Console.newLine("       [data_tags]");
                break;
            case "spawnskin":
                if (1 < d.length) {
                    T = Std.parseInt(d[1]);
                    if (!isNaN(T) && 1 <= d[1]) {
                        a = this.world.worldX;
                        l = this.world.worldY;
                        f = 1;
                        if (2 < d.length) {
                            T = Std.parseInt(d[2]);
                            if (!isNaN(T) && 1 <= d[2] && 20 >= d[2]) f = d[2];else {
                                Console.newLine("[INFO] Amount must be a number from 1-20.");
                                break;
                            }
                            if (3 < d.length) if (d[3] = this.parseCoordinate(d[3], "x"), d[4] = this.parseCoordinate(d[4], "y"), isNaN(d[3]) || isNaN(d[4])) {
                                Console.newLine("[INFO] Invalid location.");
                                break;
                            } else a = d[3], l = -1 * d[4];
                        }
                        b = 0;
                        for (c = f; b < c;) ++b, this.world.spawnskinNum++, f = entities.Entity_Mob.nextMobID(), Q = this.world.mobs, C = entities.Entity_Mob.prepareMobData("spawnskin", f, a, l, 20), Q.h[f] = C, this.world.mobs.h[f].h.skin = d[1];
                    } else Console.newLine("[INFO] skin_id_number must be a number."), Console.newLine("[INFO] You can find it at the end of each skin link.");
                    break;
                }
                Console.newLine("[INFO] spawnskin skin_id_number [amount] [[~]x [~]y]");
                break;
            case "summon":
                if (1 < d.length) if (d[1] = d[1].toLowerCase(), M = entities.Entity_Mob.matchMobID(d[1]), null != M && null != this.world.mobData.h[M]) {
                    p = entities.Entity_Mob.matchMobVariant(d[1]);
                    m = 1;
                    B = Object.create(null);
                    a = this.world.worldX;
                    l = this.world.worldY;
                    if (3 <= d.length) {
                        d[2] == Math.floor(parseFloat(Std.string(d[2]))) ? (T = Std.parseInt(d[2]), m = !isNaN(T)) : m = !1;
                        if (m && 1 <= d[2] && 20 >= d[2]) m = d[2];else {
                            Console.newLine("[INFO] Quantity must a number from 1-20.");
                            break;
                        }
                        if (5 <= d.length) {
                            d[3] = this.parseCoordinate(d[3], "x");
                            d[4] = this.parseCoordinate(d[4], "y");
                            if (d[3] == parseFloat(Std.string(d[3])) && d[4] == parseFloat(Std.string(d[4]))) a = d[3], l = -1 * d[4];else {
                                Console.newLine("[INFO] Invalid location.");
                                break;
                            }
                            if (6 <= d.length) if ("{" == d[5].substr(0, 1)) {
                                Q = Game.parseCommandObject(HxOverrides.substr(c, b.indexOf("{"), b.length));
                                if (-1 == Q[0]) {
                                    Console.newLine("[INFO] data_tags parse error: " + Std.string(Q[1]));
                                    break;
                                }
                                ka = Object.keys(Game.makeDynamicMap(Q[1]).h);
                                x = ka.length;
                                for (var la = 0; la < x;) {
                                    b = ka[la++];
                                    var v = Game.makeDynamicMap(Q[1]).h[b];
                                    switch (b.toLowerCase()) {
                                    case "aggro":
                                        "spawnskin" != M || "String" != lemongine.Helpers.getQualifiedClassName(v) || "hostile" != v && "neutral" != v && "passive" != v || (B.aggro = v);
                                        break;
                                    case "armor":
                                        if ("spawnskin" == M || "zombie" == M) {
                                            c = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem(), Game.emptyItem()];
                                            d = [1, 1, 1, 1];
                                            if ("Array" == lemongine.Helpers.getQualifiedClassName(v)) for (b = 0; 4 > b;) (T = b++, v.length > T && "Object" == lemongine.Helpers.getQualifiedClassName(v[T])) ? null == BlockData.identifierToID.h[lemongine.Helpers.trim(Game.makeDynamicMap(v[T]).h.id).toLowerCase()] || (C = BlockData.identifierToID.h[lemongine.Helpers.trim(Game.makeDynamicMap(v[T]).h.id).toLowerCase()], 0 == T && "Cap" != HxOverrides.substr(C, -3, 3) && "jl" != C && "pk" != C && "mh" != C) || 1 == T && "Shirt" != HxOverrides.substr(C, -5, 5) || 2 == T && "Pants" != HxOverrides.substr(C, -5, 5) || 3 == T && "Shoes" != HxOverrides.substr(C, -5, 5) || (K = 0, Game.makeDynamicMap(v[T]).h.damage == parseFloat(Game.makeDynamicMap(v[T]).h.damage) && 1 == BlockData.get(C, "tool") && (K = 0 > Std.parseInt(Game.makeDynamicMap(v[T]).h.damage) ? BlockData.get(C, "life") - Math.floor(Math.abs(Game.makeDynamicMap(v[T]).h.damage)) | 0 : Math.floor(Game.makeDynamicMap(v[T]).h.damage)), c[T] = Game.item(C, 1, K, this.convertObjectToExtras(C, v[T])), d[T] = 1) : "String" != lemongine.Helpers.getQualifiedClassName(v[T]) || null == BlockData.identifierToID.h[lemongine.Helpers.trim(v[T]).toLowerCase()] || (C = BlockData.identifierToID.h[lemongine.Helpers.trim(v[T]).toLowerCase()], 0 == T && "Cap" != HxOverrides.substr(C, -3, 3) && "jl" != C && "pk" != C && "mh" != C) || 1 == T && "Shirt" != HxOverrides.substr(C, -5, 5) || 2 == T && "Pants" != HxOverrides.substr(C, -5, 5) || 3 == T && "Shoes" != HxOverrides.substr(C, -5, 5) || (c[T] = Game.item(C, 1, 0, new haxe.ds.StringMap()), d[T] = 1);
                                            B.armor = c;
                                            B.armorDropChanges = d;
                                        }
                                        break;
                                    case "attackstrength":
                                        "spawnskin" != M || "int" != lemongine.Helpers.getQualifiedClassName(v) && "Number" != lemongine.Helpers.getQualifiedClassName(v) || (B.attackDamage = Math.min(100, Math.max(-100, Math.floor(v))));
                                        break;
                                    case "baby":
                                        1 == this.world.mobData.h[M].h.canBeBaby && (lemongine.Helpers.tripleEqual(v, "true") || lemongine.Helpers.tripleEqual(v, !0) ? B.babyTimer = 1200 * Main.Instance.get_fps() : parseFloat(v) == v && 0 < v && (B.babyTimer = Main.Instance.get_fps() * Math.floor(v)));
                                        break;
                                    case "charged":
                                        "creeper" != M || "true" != v && 1 != v || (B.charged = !0);
                                        break;
                                    case "color":
                                        "sheep" != M && "wolf" != M || "String" != lemongine.Helpers.getQualifiedClassName(v) || null == Colors.colors.h[v] || "rainbow" == v || (B.color = v);
                                        break;
                                    case "defaultdrops":
                                        if ("false" == v.toString() || 0 == v) B.defaultDrops = !1;
                                        break;
                                    case "drops":
                                        b = [];
                                        if ("Array" == lemongine.Helpers.getQualifiedClassName(v)) for (c = 0, d = v.length; c < d;) if (T = c++, "Object" == lemongine.Helpers.getQualifiedClassName(v[T])) {
                                            var r = v[T];
                                            if (null != r.h.item && (T = new haxe.ds.StringMap(), T.h.type = "", T.h.properties = new haxe.ds.StringMap(), "String" == lemongine.Helpers.getQualifiedClassName(r.h.item) ? null != BlockData.identifierToID.h[lemongine.Helpers.trim(r.h.item).toLowerCase()] && (T.h.type = BlockData.identifierToID.h[lemongine.Helpers.trim(r.h.item).toLowerCase()]) : "Object" == lemongine.Helpers.getQualifiedClassName(r.h.item) && null != BlockData.identifierToID.h[lemongine.Helpers.trim(Game.makeDynamicMap(r.h.item).h.id).toLowerCase()] && (T.h.type = BlockData.identifierToID.h[lemongine.Helpers.trim(Game.makeDynamicMap(r.h.item).h.id).toLowerCase()], C = this.convertObjectToExtras(T.h.type, Game.makeDynamicMap(r.h.item)), T.h.extras = C, Game.makeDynamicMap(r.h.item).h.damage == parseFloat(Game.makeDynamicMap(r.h.item).h.damage) && BlockData.get(T.h.type, "tool") && (0 > parseFloat(Game.makeDynamicMap(r.h.item).h.damage) ? (C = BlockData.get(T.h.type, "life"), T.h.damage = C - Math.abs(Game.makeDynamicMap(r.h.item).h.damage)) : (C = parseFloat(Game.makeDynamicMap(r.h.item).h.damage), T.h.damage = C))), "" != T.h.type)) {
                                                T.h.quantity = 1;
                                                T.h.randomBonus = 0;
                                                T.h.lootBonus = 0;
                                                ("int" == lemongine.Helpers.getQualifiedClassName(r.h.quantity) || "Number" == lemongine.Helpers.getQualifiedClassName(r.h.quantity)) && 0 <= r.h.quantity && (T.h.quantity = Math.floor(r.h.quantity));
                                                ("int" == lemongine.Helpers.getQualifiedClassName(r.h.bonus) || "Number" == lemongine.Helpers.getQualifiedClassName(r.h.bonus)) && 0 <= r.h.bonus && (T.h.randomBonus = Math.floor(r.h.bonus));
                                                ("int" == lemongine.Helpers.getQualifiedClassName(r.h.lootBonus) || "Number" == lemongine.Helpers.getQualifiedClassName(r.h.lootBonus)) && 0 <= r.h.lootBonus && (T.h.lootBonus = Math.floor(r.h.lootBonus));
                                                "String" == lemongine.Helpers.getQualifiedClassName(r.h.dimension) && (C = r.h.dimension.toLowercase(), "overworld" == C ? T.h.isDimension = 1 : "the_nether" == C ? T.h.isDimension = 2 : "the_end" == C && (T.h.isDimension = 3));
                                                "String" == lemongine.Helpers.getQualifiedClassName(r.h.variant) && "cow" == M && ("normal" == r.h.variant ? T.h.isVariant = "normal" : "mooshroom" == r.h.variant ? T.h.isVariant = "mooshroom" : "cowctus" == r.h.variant && (T.h.isVariant = "cowctus"));
                                                if (null != r.h.sheared && "sheep" == M) if ("true" == r.h.sheared || 1 == r.h.sheared) T.h.isSheared = !0;else if ("false" == r.h.sheared || 0 == r.h.sheared) T.h.isSheared = !1;
                                                null == r.h.isBaby || "true" != r.h.isBaby && 1 != r.h.isBaby || (T.h.isBaby = !0);
                                                "String" != lemongine.Helpers.getQualifiedClassName(r.h.color) || "wolf" != M && "sheep" != M || null == Colors.colors.h[r.h.color] || "rainbow" == v || (Game.makeDynamicMap(T.h.properties).h.color = ["==", r.h.color]);
                                                if (null != r.h.onFire) if ("true" == r.h.onFire || 1 == r.h.onFire) T.h.onFire = !0;else if ("false" == r.h.onFire || 0 == r.h.onFire) T.h.onFire = !1;
                                                if ("int" == lemongine.Helpers.getQualifiedClassName(r.h.size) || "Number" == lemongine.Helpers.getQualifiedClassName(r.h.size)) if ("slime" == M || "magmacube" == M) Game.makeDynamicMap(T.h.properties).h.size = Game.makeDynamicArray(["==", Math.floor(r.h.size)]);
                                                if (null != r.h.tamed && "wolf" == M) if ("true" == r.h.tamed || 1 == r.h.tamed) Game.makeDynamicMap(T.h.properties).h.tamed = Game.makeDynamicArray(["==", !0]);else if ("false" == r.h.tamed || 0 == r.h.tamed) Game.makeDynamicMap(T.h.properties).h.tamed = Game.makeDynamicArray(["!=", !0]);
                                                "Object" == lemongine.Helpers.getQualifiedClassName(r.h.chance) && null != Game.makeDynamicMap(r.h.chance) && (C = new haxe.ds.StringMap(), K = null != Game.makeDynamicMap(r.h.chance).h.seed ? parseFloat(Game.makeDynamicMap(r.h.chance).h.seed) : 0, C.h.randomNum = K, K = null != Game.makeDynamicMap(r.h.chance).h.min ? parseFloat(Game.makeDynamicMap(r.h.chance).h.min) : 0, C.h.lowerBound = K, K = null != Game.makeDynamicMap(r.h.chance).h.max ? parseFloat(Game.makeDynamicMap(r.h.chance).h.max) : 1, C.h.upperBound = K, K = null != Game.makeDynamicMap(r.h.chance).h.lootOffset ? parseFloat(Game.makeDynamicMap(r.h.chance).h.lootOffset) : 0, C.h.lootingBonusChances = K, T.h.rare = Game.makeDynamicMap(C));
                                                b.push(T);
                                            }
                                        } else "String" == lemongine.Helpers.getQualifiedClassName(v[T]) && null != BlockData.identifierToID.h[lemongine.Helpers.trim(v[T]).toLowerCase()] && (C = new haxe.ds.StringMap(), C.h.type = BlockData.identifierToID.h[lemongine.Helpers.trim(v[T]).toLowerCase()], C.h.quantity = 1, b.push(Game.makeDynamicMap(C)));
                                        B.drops = b;
                                        break;
                                    case "health":
                                        ("int" == lemongine.Helpers.getQualifiedClassName(v) || "Number" == lemongine.Helpers.getQualifiedClassName(v)) && 1 <= v && (B.health = Math.floor(v));
                                        break;
                                    case "holding":
                                        if ("zombiepigman" == M || "enderman" == M) "Object" == lemongine.Helpers.getQualifiedClassName(v) ? null != BlockData.identifierToID.h[lemongine.Helpers.trim(Game.makeDynamicMap(v).h.id).toLowerCase()] && (b = BlockData.identifierToID.h[lemongine.Helpers.trim(Game.makeDynamicMap(v).h.id).toLowerCase()], T = 1, c = 0, Game.makeDynamicMap(v).h.quantity == parseFloat(Game.makeDynamicMap(v).h.quantity) && 0 <= Game.makeDynamicMap(v).h.quantity && (T = Math.floor(Game.makeDynamicMap(v).h.quantity)), Game.makeDynamicMap(v).h.damage == parseFloat(Game.makeDynamicMap(v).h.damage) && BlockData.get(b, "tool") && (c = 0 > Std.parseInt(Game.makeDynamicMap(v).h.damage) ? BlockData.get(b, "life") - Math.floor(Math.abs(Game.makeDynamicMap(v).h.damage)) | 0 : Math.floor(Game.makeDynamicMap(v).h.damage)), B.handItems = [Game.item(b, T, c, this.convertObjectToExtras(b, v)), Game.emptyItem()], B.handDropChances = [1, 1]) : "String" == lemongine.Helpers.getQualifiedClassName(v) && null != BlockData.identifierToID.h[lemongine.Helpers.trim(v).toLowerCase()] && (B.handItems = [Game.item(BlockData.identifierToID.h[lemongine.Helpers.trim(v).toLowerCase()], 1, 0, new haxe.ds.StringMap()), Game.emptyItem()], B.handDropChances = [1, 1]);
                                        break;
                                    case "name":
                                        "String" == lemongine.Helpers.getQualifiedClassName(v) && (B.name = HxOverrides.substr(lemongine.Helpers.restrict(v, "a-zA-Z0-9\\-=+|_!.,()[]<>'@$%\\^&*#?/ "), 0, 20));
                                        break;
                                    case "skin":
                                        "spawnskin" != M || "String" != lemongine.Helpers.getQualifiedClassName(v) && "int" != lemongine.Helpers.getQualifiedClassName(v) && "Number" != lemongine.Helpers.getQualifiedClassName(v) || (T = Std.parseInt(Std.string(v)), !isNaN(T) && 1 <= Std.parseInt(Std.string(v)) && (B.skin = Math.floor(Std.parseInt(Std.string(v)))));
                                    }
                                }
                            } else {
                                Console.newLine("[INFO] Invalid data_tags value.");
                                break;
                            }
                        }
                    }
                    b = 0;
                    for (c = m; b < c;) for (++b, d = entities.Entity_Mob.spawnMob(p, a, l), T = Object.keys(B), M = T.length, ka = 0; ka < M;) x = T[ka++], Q = Game.makeDynamicMap(this.world.mobs.h[d]), C = lemongine.Helpers.clone(B[x]), Q.h[x] = C;
                    f && Console.newLine("[INFO] Spawned " + entities.Entity_Mob.getMobName(p) + (1 < m ? " (" + m + " times)" : ""));
                    break;
                } else Console.newLine('[INFO] "' + Std.string(d[1]) + '" is not a proper mob_type.');
                Console.newLine("[INFO] summon mob_type [quantity] [[~]x [~]y] [data_tags]");
                break;
            case "time":
                if ("set" == d[1] && null != d[2]) {
                    if (d[2] = d[2].toLowerCase(), d[2] == parseFloat(Std.string(d[2]))) {
                        this.world.tim = Math.floor(d[2] % 100);
                        f && Console.newLine("[INFO] Time set to " + Math.floor(d[2] % 100) + ".");
                        break;
                    } else if ("day" == d[2]) {
                        this.world.tim = 0;
                        f && Console.newLine("[INFO] Time set to 0.");
                        break;
                    } else if ("night" == d[2]) {
                        this.world.tim = 50;
                        f && Console.newLine("[INFO] Time set to 50.");
                        break;
                    } else Console.newLine("[INFO] Unknown time input.");
                } else if ("get" == d[1]) {
                    Console.newLine("[INFO] The time is " + this.world.tim + ".");
                    break;
                }
                Console.newLine("[INFO] time <get|set <t|day|night>>");
                break;
            case "tp":
                if (2 < d.length) if (d[1] = this.parseCoordinate(d[1], "x"), d[2] = this.parseCoordinate(d[2], "y"), !isNaN(d[1]) && !isNaN(d[2]) && -100 <= d[1] && 1E4 >= d[1] && -100 <= d[2] && 1E3 >= d[2]) {
                    this.world.worldX = d[1];
                    this.world.worldY = -d[2];
                    this.world.xSpeed = 0;
                    this.world.ySpeed = 0;
                    this.world.riding = "";
                    this.world.threadedSave();
                    f && Console.newLine("[INFO] WHOOSH! Teleported to x:" + Math.floor(100 * d[1]) / 100 + ", y:" + Math.floor(100 * d[2]) / 100);
                    break;
                } else Console.newLine("[INFO] Invalid location.");
                Console.newLine("[INFO] tp [~]x [~]y");
                break;
            case "weather":
                if ("set" == d[1] && null != d[2]) {
                    if (d[2] = d[2].toLowerCase(), "clear" == d[2] || "0" == d[2]) {
                        this.world.raining = 0;
                        f && Console.newLine("[INFO] Weather set to clear.");
                        break;
                    } else if ("rain" == d[2] || "1" == d[2]) {
                        this.world.raining = 1;
                        f && Console.newLine("[INFO] Weather set to rain.");
                        break;
                    } else if ("thunder" == d[2] || "2" == d[2]) {
                        this.world.raining = 2;
                        f && Console.newLine("[INFO] Weather set to thunder.");
                        break;
                    } else Console.newLine("[INFO] Unknown weather input.");
                } else if ("get" == d[1]) {
                    1 == this.world.raining ? Console.newLine("[INFO] The weather is rain.") : 2 == this.world.raining ? Console.newLine("[INFO] The weather is thunder.") : 0 == this.world.raining && Console.newLine("[INFO] The weather is clear.");
                    break;
                }
                Console.newLine("[INFO] weather <get|set <clear|rain|thunder>>");
                break;
            case "xp":
                if (null != d[1] && 0 < d[1].length) if ("add" == d[1].toLowerCase()) {
                    if (null != d[2] && ("l" == d[2].substr(-1, 1).toLowerCase() && d[2].substr(0, d[2].length - 1) == Math.abs(parseFloat(d[2].substr(0, d[2].length - 1))) && (d[2] = 100 * d[2].substr(0, d[2].length - 1)), d[2] == Math.abs(parseFloat(d[2])))) {
                        b = Math.floor(Math.max(0, Math.min(1E6, this.world.experience + parseFloat(d[2]))));
                        f && Console.newLine("[INFO] " + (b - this.world.experience) + " experience was added.");
                        this.world.experience = b;
                        break;
                    }
                } else if ("l" == d[1].substr(-1, 1).toLowerCase() && d[1].substr(0, d[1].length - 1) == Math.abs(parseFloat(d[1].substr(0, d[1].length - 1))) && (d[1] = 100 * d[1].substr(0, d[1].length - 1)), d[1] == Math.abs(parseFloat(d[1]))) {
                    this.world.experience = Math.floor(Math.max(0, Math.min(1E6, d[1])));
                    f && Console.newLine("[INFO] experience set to " + Math.floor(d[1]) + ".");
                    break;
                }
                Console.newLine("[INFO] xp [add] value[L]");
                break;
            default:
                Console.newLine("[INFO] Command not recognised. Type /help for a list of commands.");
            } else {
                if (this.isScavenger) {
                    if ("whisper" == d[0]) {
                        ScavengerManager.handleWhisper(HxOverrides.substr(c, 8, null));
                        return;
                    }
                    if ("w" == d[0]) {
                        ScavengerManager.handleWhisper(HxOverrides.substr(c, 2, null));
                        return;
                    }
                }
                switch (d[0]) {
                case "cls":
                    Console.clearAll();
                    break;
                case "seed":
                    this.isScavenger ? (Console.newLine("[INFO] Seed: " + this.world.seed + " (Scavenger)"), f && Console.newLine("[INFO] This will generate a different world outside of Scavenger.")) : (Console.newLine("[INFO] Seed: " + this.world.seed), f && Console.newLine("[INFO] Different game versions may generate different worlds."));
                    break;
                default:
                    Console.newLine("- - - - - - - - - - - - - - - [ Help ]- - - - - - - - - - - - -"), Console.newLine("Cheats are disabled in this world!"), Console.newLine("The following commands can still be used:"), Console.newLine("Commands: help, seed, cls" + (this.isScavenger ? ", whisper" : "")), Console.newLine("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
                }
            }
        }
    },
    parseSlashes: function (b) {
        for (var a = 0;;) {
            a = b.indexOf("\\", a + 1);
            if (-1 == a) break;
            b = "n" == b.charAt(a + 1) ? HxOverrides.substr(b, 0, a) + "\n" + HxOverrides.substr(b, a + 2, null) : HxOverrides.substr(b, 0, a) + HxOverrides.substr(b, a + 1, null);
        }
        return b;
    },
    parseCoordinate: function (b, a) {
        null == a && (a = "x");
        var c = new lemongine.Point(this.world.worldX, this.world.worldY);
        if (null == b) return NaN;
        if ("y" == a) {
            if ("~" == HxOverrides.substr(b, 0, 1)) {
                b = HxOverrides.substr(b, 1, b.length - 1);
                if (b == Std.string(parseFloat(b))) return parseFloat(b) - c.y / 1;
                if (0 == b.length) return -c.y;
            }
        } else if ("~" == HxOverrides.substr(b, 0, 1)) {
            b = HxOverrides.substr(b, 1, b.length - 1);
            if (b == Std.string(parseFloat(b))) return parseFloat(b) + c.x / 1;
            if (0 == b.length) return c.x / 1;
        }
        return b == Std.string(parseFloat(b)) ? parseFloat(b) : NaN;
    },
    setGamemode: function (b) {
        this.world.gamemode = b;
        3 == this.world.gamemode ? this.world.fly = !0 : 1 != this.world.gamemode && (this.world.fly = !1);
    },
    itemMessageChangeItem: function (b) {
        b != this.itemMessageText && "" != b ? (this.itemMessageCountdown = 100, this.itemMessageText = b) : "" == b && (this.itemMessageText = "", this.itemMessageCountdown = 10 < this.itemMessageCountdown ? 10 : 0);
    },
    updateSelectedInventoryItemStuff: function (b) {
        null == b && (b = !0);
        this.isEmpty() ? this.itemMessageChangeItem("") : this.itemMessageChangeItem(this.getItemName(this.world.inventoryItem(this.world.selectedInventoryItem)));
        if (b) {
            b = 0;
            for (var a = this.hotbarSlots; b < a.length;) a[b++].checkInteraction();
        }
    },
    generateRecipes: function () {
        if (!(null != this.recipes && 0 < this.recipes.length)) {
            this.recipes = [];
            var b = new haxe.ds.StringMap(),
                a = new haxe.ds.StringMap();
            a.h.ty = "wp";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wd";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "st";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            var c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "th";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cl";
            a.h.ty2 = "cl2";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "craft";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "wp";
            var d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 0;
            d.h.ty = "wp";
            var f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenPickaxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            var l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StonePickaxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronPickaxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldPickaxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondPickaxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StoneAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StoneAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondAxe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenShovel";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StoneShovel";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronShovel";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldShovel";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondShovel";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenSword";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StoneSword";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronSword";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldSword";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondSword";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "WoodenHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StoneHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "StoneHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondHoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 2;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dr";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 0;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "wp";
            var p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bbdr";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 0;
            f.h.ty = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "bb";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "idr";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 0;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "td1";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "wp";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "oven";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "cs";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "cs";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "cs";
            var k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "cs";
            var B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "jl";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "pk";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "th";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ladder";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "st";
            a.h.ty2 = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 0;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "st";
            p.h.ty2 = "bb";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "st";
            k.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "chest";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "wp";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "wp";
            k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "wp";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ib";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "ii";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "gi";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "db";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "dm";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "lapb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "ll";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "clb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "cl";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "lemonb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "lemon";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "slimeb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "slimeball";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ii";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ib";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gi";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dm";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "db";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ll";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "lapb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cl";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "clb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cy1";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cy";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "cy";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 0;
            d.h.ty = "cy";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "cy";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "lemon";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "lemonb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "slimeball";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "slimeb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gss";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gss";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "gss";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "gss";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gss";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gss";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "gss";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "gss";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bk";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bowl";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "snowblock";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "snowb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "snowb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "snowb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "snowb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ice";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "snowblock";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "snowblock";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "snowblock";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "snowblock";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fiber";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sw";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            for (var n = Object.keys(Colors.colors.h), M = n.length, m = 0; m < M;) p = n[m++], "rainbow" != p && (b = new haxe.ds.StringMap(), a = new haxe.ds.StringMap(), a.h.ty = "bed", a.h.count = 1, a.h.damage = 0, c = new haxe.ds.StringMap(), c.h.type = p, a.h.extra = c, b.h.output = Game.makeDynamicMap(a), b.h.inputType = "relative", d = new haxe.ds.StringMap(), d.h.x = 0, d.h.y = 0, d.h.ty = "cloth", d.h.type = p, f = new haxe.ds.StringMap(), f.h.x = 1, f.h.y = 0, f.h.ty = "cloth", f.h.type = p, l = new haxe.ds.StringMap(), l.h.x = 2, l.h.y = 0, l.h.ty = "cloth", l.h.type = p, p = new haxe.ds.StringMap(), p.h.x = 0, p.h.y = 1, p.h.ty = "wp", k = new haxe.ds.StringMap(), k.h.x = 1, k.h.y = 1, k.h.ty = "wp", B = new haxe.ds.StringMap(), B.h.x = 2, B.h.y = 1, B.h.ty = "wp", b.h.input = Game.makeArrayOfDynamicMaps([d, f, l, p, k, B]), this.recipes.push(b));
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bed";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "dyekeepextra";
            a = new haxe.ds.StringMap();
            a.h.white = !0;
            b.h.exclude = a;
            a = new haxe.ds.StringMap();
            a.h.ty = "bed";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "TNT";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "sd";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "sd";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "gp";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "sd";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "gp";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "sd";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "gp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "fiber";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "fiber";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "fiber";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fiber";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "rp";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "Shear";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "Shear";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = -1;
            c.h.y = 1;
            c.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bricks";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "brick";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "brick";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "brick";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "brick";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "clock";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "rsd";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "gi";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "compass";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "rsd";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fas";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "flint";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fas";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "flint";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fas";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = -1;
            c.h.y = 1;
            c.h.ty = "flint";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fas";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "flint";
            c = new haxe.ds.StringMap();
            c.h.x = -1;
            c.h.y = 1;
            c.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rstorch";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "rsd";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "button";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "r";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "lever";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "st";
            a.h.ty2 = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "pp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "r";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "wpp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "light";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "rsd";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "rsd";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "glow";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "rsd";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "rsd";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "mobSpawner";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "oddrock";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "oddrock";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "oddrock";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "oddrock";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "dm";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "oddrock";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "oddrock";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "oddrock";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "oddrock";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ortorch";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "oddrock";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "portalstone";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "oddrock";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "oddrock";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "oddrock";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "oddrock";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ob";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "oddrock";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "oddrock";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "oddrock";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "oddrock";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "glow";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "yellowdust";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "yellowdust";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "yellowdust";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "yellowdust";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "note";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "rsd";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "wp";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "wp";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "wp";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "piston";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "cs";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "cs";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "cs";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "rsd";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nugget";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cchicken";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ss";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sd";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "sd";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "sd";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "sd";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bow";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "fiber";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "fiber";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "fiber";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "st";
            p.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bow";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "fiber";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 1;
            d.h.ty = "fiber";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 2;
            l.h.ty = "fiber";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "st";
            p.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "arrow";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "flint";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "feather";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "spear";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "flint";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "soup";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bowl", "ms1", "ms2"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bread";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wheat";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wheat";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wheat";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "gi";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ap";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "gi";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "gi";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "gi";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nbr";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "nbr";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "nbr";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "nbr";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rnb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nw";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "nbr";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "nbr";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "nw";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rnb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nbr";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "nw";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "nw";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "nbr";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "sb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "r";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "r";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "r";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "sign";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "wp";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "wp";
            k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "st";
            k.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gasd";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gap";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "sugar";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sc";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cake";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "mbk";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "mbk";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "mbk";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "sugar";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "egg";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "sugar";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "wheat";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "wheat";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "wheat";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "paper";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sc";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "sc";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "sc";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "book";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["paper", "paper", "paper", "leather"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "books";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "book";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "book";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "book";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "wp";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "wp";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "fiber";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "fiber";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "fiber";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "fiber";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "moss";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "moss";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "moss";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "moss";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "yellow";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "fw1";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "fw2";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "orange";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "yellow";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "yellow";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "yellow";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "red";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "orange";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "orange";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "orange";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "yellow";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "orange";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "yellow";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "red";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "blue";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ll"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "brown";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ccb"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "green";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgreen";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "bonem"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgreen";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "lightgreen";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgreen";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "bonem"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightblue";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["ll", "bonem"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightblue";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "lightblue";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightblue";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "blue";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "bonem"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "purple";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray(["ll", Game.makeDynamicMap(a)]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "purple";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray(["ll", Game.makeDynamicMap(a)]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "purple";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.type = "blue";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "purple";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "purple";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "cyan";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ll"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "cyan";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray(["ll", Game.makeDynamicMap(a)]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "cyan";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.type = "blue";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "cyan";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "cyan";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.type = "white";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "brown";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray(["ccb", Game.makeDynamicMap(a)]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "magenta";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "purple";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "bonem"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.type = "white";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "bonem"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "magenta";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.type = "purple";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "magenta";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "purple";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.type = "pink";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "magenta";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "magenta";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "gray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bonem", "ink"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            c = new haxe.ds.StringMap();
            c.h.type = "gray";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray(["bonem", Game.makeDynamicMap(a)]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dye";
            a.h.count = 2;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bonem", "ink", "ink"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "gray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "gray";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "lightgray";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "black";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ink"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "red";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "red";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "yellow";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "yellow";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "orange";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "orange";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "blue";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ll"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightblue";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "lightblue";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "green";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "green";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgreen";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "lightgreen";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "cyan";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "cyan";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "magenta";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "magenta";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "pink";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "pink";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "purple";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "purple";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "brown";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ccb"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "bonem"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "gray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "gray";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "lightgray";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            c = new haxe.ds.StringMap();
            c.h.ty = "dye";
            d = new haxe.ds.StringMap();
            d.h.type = "lightgray";
            c.h.extra = d;
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "black";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ink"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdwp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdbooks";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "books";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdcs";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdr";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdbricks";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bricks";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdsb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdnb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bddt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dt";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdob";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ob";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdgs";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "keepextra";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gs";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdcloth";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "keepextra";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cloth";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bdbbb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bbb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "wp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdwp";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "books";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdbooks";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cs";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdcs";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "r";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdr";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bricks";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdbricks";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "sb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdsb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdnb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bddt";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ob";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdob";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gs";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "keepextra";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdgs";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "keepextra";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdcloth";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bbb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bdbbb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "leather";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "leather";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "leather";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "leather";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "leather";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherShirt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "leather";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 2;
            c.h.ty = "leather";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "leather";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "leather";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "leather";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "leather";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "leather";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "leather";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherPants";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "leather";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "leather";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "leather";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "leather";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "leather";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "leather";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "leather";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherShoes";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "leather";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "leather";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "leather";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "leather";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronShirt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 2;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "ii";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronPants";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "IronShoes";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "gi";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldShirt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 2;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "gi";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "gi";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "gi";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "gi";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldPants";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "gi";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "gi";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "gi";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "GoldShoes";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "dm";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "dm";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondShirt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 2;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "dm";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "dm";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "dm";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "dm";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "dm";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondPants";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "dm";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "dm";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "dm";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "dm";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DiamondShoes";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dm";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "dm";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "dm";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DragonCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dscl";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dscl";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dscl";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "dscl";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "dscl";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DragonShirt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dscl";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 2;
            c.h.ty = "dscl";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dscl";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "dscl";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "dscl";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "dscl";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "dscl";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "dscl";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DragonPants";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dscl";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dscl";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "dscl";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "dscl";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "dscl";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "dscl";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "dscl";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "DragonShoes";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dscl";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "dscl";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "dscl";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "dscl";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "SnowCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.x = -1;
            c.h.y = 1;
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "cloth";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "cloth";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "AfroCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cloth";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cloth";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "cloth";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "cloth";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "cloth";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "cloth";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "cloth";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "cloth";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bonem";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bone";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cookie";
            a.h.count = 16;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wheat";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ccb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wheat";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bp";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "blazer";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "eoe";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bp", "ep"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "raft";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "bb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "goldn";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gi";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "goldn";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ironn";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ii";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "ironn";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gcarrot";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "goldn";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "goldn";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "goldn";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "goldn";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "carrot";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "goldn";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "goldn";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "goldn";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "goldn";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "capple";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "crml";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "crml";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ap";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "crml";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "hcl";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "egemd";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "egemd";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "egemd";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "egemd";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "dm";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "egemd";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "egemd";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "egemd";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "egemd";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "boneb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bone";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "bone";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "bone";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "bone";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bone";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "boneb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bshur";
            a.h.count = 8;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bone";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "bone";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "bone";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "bone";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 2;
            l.h.ty = "bone";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bbb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bbb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ccane";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sugar";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "sugar";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "sugar";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 2;
            f.h.ty = "sugar";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ccane";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sugar";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "sugar";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "sugar";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "sugar";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ms";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "moss";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "moss";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "moss";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "moss";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "cs";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "moss";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "moss";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "moss";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "moss";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fr";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "st";
            a.h.ty2 = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "fiber";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 2;
            l.h.ty = "fiber";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "coas";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "fr";
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "carrot";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfcs";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfr";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "r";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "r";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfbrick";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bricks";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "bricks";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "bricks";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfn";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "nb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "nb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfwp";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfsb";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "sb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "sb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfib";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ib";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ib";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ib";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfgb";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfdb";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "db";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "db";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "db";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfob";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ob";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ob";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ob";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfbr";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "br";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "br";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "br";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "halfbbb";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bbb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "bbb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "bbb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "staircs";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "cs";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "cs";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "staircs";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "cs";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "cs";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairr";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "r";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "r";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "r";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "r";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "r";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairr";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "r";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "r";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "r";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "r";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "r";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "r";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairbrick";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bricks";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "bricks";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "bricks";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "bricks";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "bricks";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "bricks";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairbrick";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "bricks";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "bricks";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "bricks";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "bricks";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "bricks";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "bricks";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairn";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "nb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "nb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "nb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "nb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "nb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairn";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "nb";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "nb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "nb";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "nb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "nb";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "nb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairwp";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "wp";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairwp";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "wp";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairsb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "sb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "sb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "sb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "sb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "sb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "sb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairsb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "sb";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "sb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "sb";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "sb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "sb";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "sb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairib";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ib";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "ib";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ib";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "ib";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "ib";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "ib";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairib";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "ib";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "ib";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ib";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "ib";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "ib";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "ib";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairgb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "gb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "gb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "gb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "gb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "gb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairgb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "gb";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "gb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "gb";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "gb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "gb";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "gb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairdb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "db";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "db";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "db";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "db";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "db";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "db";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairdb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "db";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "db";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "db";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "db";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "db";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "db";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairob";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ob";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "ob";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ob";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "ob";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "ob";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "ob";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairob";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "ob";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "ob";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ob";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "ob";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "ob";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "ob";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairbr";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "br";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "br";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "br";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "br";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "br";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "br";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairbr";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "br";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "br";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "br";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "br";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "br";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "br";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairbbb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "bbb";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "bbb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "bbb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 2;
            f.h.ty = "bbb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "bbb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 2;
            p.h.ty = "bbb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "stairbbb";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 2;
            a.h.y = 0;
            a.h.ty = "bbb";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 1;
            c.h.ty = "bbb";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "bbb";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 2;
            f.h.ty = "bbb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "bbb";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "bbb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "enchant";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "book";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "dm";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "ob";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "dm";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "ob";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "ob";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "ob";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dispense";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "cs";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "bow";
            l.h.damage = 0;
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "cs";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "cs";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "rsd";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dropper";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "cs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "cs";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "cs";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "cs";
            k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "rsd";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "spiston";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "slimeball";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "piston";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cart";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cartTNT";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "TNT";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cartTNT";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "TNT";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "cart";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cartchest";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "chest";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cartchest";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["chest", "cart"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cartoven";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "oven";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cartoven";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["oven", "cart"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rail";
            a.h.count = 16;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "railp";
            a.h.count = 8;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "gi";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "gi";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "gi";
            k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "rsd";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "raila";
            a.h.count = 8;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "rstorch";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "ii";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "st";
            B.h.ty2 = "bb";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "raild";
            a.h.count = 8;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "pp";
            l = new haxe.ds.StringMap();
            l.h.x = 2;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 0;
            p.h.y = 2;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "rsd";
            B = new haxe.ds.StringMap();
            B.h.x = 2;
            B.h.y = 2;
            B.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "lant";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "coral";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "coral";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "th";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "coral";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "coral";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ccake";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["cake", "ct"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cloth";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "rainbow";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "rainbow";
            b.h.input = [];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "magmac";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bp", "slimeball"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "icec";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bowl", "mbk", "sugar", "ice"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "PartyCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "rainbowcap";
            b.h.input = [];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "potion";
            a.h.count = 3;
            a.h.damage = 0;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gs";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 1;
            c.h.ty = "gs";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "gs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "lade";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "potion";
            c = new haxe.ds.StringMap();
            c.h.type = "water";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "lemon", "sugar"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "orade";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "potion";
            c = new haxe.ds.StringMap();
            c.h.type = "water";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "or", "sugar"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "apade";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "potion";
            c = new haxe.ds.StringMap();
            c.h.type = "water";
            a.h.extra = c;
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "ap", "sugar"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "hay";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "wheat";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "mel";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "mels";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "wheat";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["hay"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "wseed";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["mels"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "pseed";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["pk"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fse";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["se", "sugar", "ms1"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "pkp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["pk", "sugar", "egg"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gmels";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "goldn";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "goldn";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "goldn";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "goldn";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "mels";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "goldn";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "goldn";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "goldn";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "goldn";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "tob";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "topaz";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "topaz";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["tob"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "echest";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ob";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ob";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ob";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ob";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "eoe";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ob";
            k = new haxe.ds.StringMap();
            k.h.x = 0;
            k.h.y = 2;
            k.h.ty = "ob";
            B = new haxe.ds.StringMap();
            B.h.x = 1;
            B.h.y = 2;
            B.h.ty = "ob";
            n = new haxe.ds.StringMap();
            n.h.x = 2;
            n.h.y = 2;
            n.h.ty = "ob";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k, B, n]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "beetsoup";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "beet";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "beet";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "beet";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "beet";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "beet";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "beet";
            k = new haxe.ds.StringMap();
            k.h.x = 1;
            k.h.y = 2;
            k.h.ty = "bowl";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cdt";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "gv";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "dt";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "dt";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "gv";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cdt";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dt";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "gv";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "gv";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "dt";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fnc";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "wp";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "st";
            c.h.ty2 = "bb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "wp";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "wp";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "st";
            l.h.ty2 = "bb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "wp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nfnc";
            a.h.count = 6;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "nb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "nb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "nb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "nb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "nb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "fncg";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "st";
            a.h.ty2 = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "wp";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "wp";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "st";
            p.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nfncg";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "st";
            a.h.ty2 = "bb";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "nb";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "st";
            d.h.ty2 = "bb";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "st";
            f.h.ty2 = "bb";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "nb";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "st";
            p.h.ty2 = "bb";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ibar";
            a.h.count = 16;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 0;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 1;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 2;
            p.h.y = 1;
            p.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "carpet";
            a.h.count = 3;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "carpet";
            b.h.input = [];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "ssd";
            a.h.count = 2;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["n", "dt"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "magma";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "magmac";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "magmac";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 0;
            d.h.ty = "magmac";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "magmac";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rabbitsoup";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bowl", "crabbit", "carrot", "bpotato", "ms1"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "rabbitsoup";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["bowl", "crabbit", "carrot", "bpotato", "ms2"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "leather";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "rleather";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "rleather";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 0;
            d.h.ty = "rleather";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "rleather";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dsb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "dscl";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "dscl";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 0;
            d.h.ty = "dscl";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "dscl";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "dscl";
            a.h.count = 4;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            b.h.input = ["dsb"];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "anvil";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ib";
            c = new haxe.ds.StringMap();
            c.h.x = 1;
            c.h.y = 0;
            c.h.ty = "ib";
            d = new haxe.ds.StringMap();
            d.h.x = 2;
            d.h.y = 0;
            d.h.ty = "ib";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "TOOL";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "fix";
            b.h.input = [];
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bl";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "slimeball";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "fiber";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 2;
            d.h.ty = "fiber";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bl";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "dyekeepextra";
            a = new haxe.ds.StringMap();
            a.h.white = !0;
            b.h.exclude = a;
            a = new haxe.ds.StringMap();
            a.h.ty = "bl";
            c = new haxe.ds.StringMap();
            c.h.type = "white";
            a.h.extra = c;
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "bl";
            a.h.count = 1;
            a.h.damage = 0;
            c = new haxe.ds.StringMap();
            c.h.type = "ghast";
            a.h.extra = c;
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "contains";
            a = new haxe.ds.StringMap();
            a.h.ty = "bl";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeDynamicArray([Game.makeDynamicMap(a), "gt"]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherShoes";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "dyekeepextra";
            b.h.exclude = [];
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherShoes";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherPants";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "dyekeepextra";
            b.h.exclude = [];
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherPants";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherShirt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "dyekeepextra";
            b.h.exclude = [];
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherShirt";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherCap";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "dyekeepextra";
            b.h.exclude = [];
            a = new haxe.ds.StringMap();
            a.h.ty = "LeatherCap";
            a.h.extra = new haxe.ds.StringMap();
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cauldron";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "ii";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "ii";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "ii";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "ii";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "ii";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "ii";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "ii";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nwb";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "large box";
            b.h.input = "nw";
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "nw";
            a.h.count = 9;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "nwb";
            b.h.input = Game.makeArrayOfDynamicMaps([a]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "brew";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "relative";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "blazer";
            c = new haxe.ds.StringMap();
            c.h.x = -1;
            c.h.y = 1;
            c.h.ty = "cs";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "cs";
            f = new haxe.ds.StringMap();
            f.h.x = 1;
            f.h.y = 1;
            f.h.ty = "cs";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "gdt";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 1;
            a.h.y = 0;
            a.h.ty = "gi";
            c = new haxe.ds.StringMap();
            c.h.x = 0;
            c.h.y = 1;
            c.h.ty = "gi";
            d = new haxe.ds.StringMap();
            d.h.x = 1;
            d.h.y = 1;
            d.h.ty = "dt";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "gi";
            l = new haxe.ds.StringMap();
            l.h.x = 1;
            l.h.y = 2;
            l.h.ty = "gi";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]);
            this.recipes.push(b);
            b = new haxe.ds.StringMap();
            a = new haxe.ds.StringMap();
            a.h.ty = "cmp";
            a.h.count = 1;
            a.h.damage = 0;
            a.h.extra = new haxe.ds.StringMap();
            b.h.output = Game.makeDynamicMap(a);
            b.h.inputType = "absolute";
            a = new haxe.ds.StringMap();
            a.h.x = 0;
            a.h.y = 0;
            a.h.ty = "halfwp";
            c = new haxe.ds.StringMap();
            c.h.x = 2;
            c.h.y = 0;
            c.h.ty = "halfwp";
            d = new haxe.ds.StringMap();
            d.h.x = 0;
            d.h.y = 1;
            d.h.ty = "halfwp";
            f = new haxe.ds.StringMap();
            f.h.x = 2;
            f.h.y = 1;
            f.h.ty = "halfwp";
            l = new haxe.ds.StringMap();
            l.h.x = 0;
            l.h.y = 2;
            l.h.ty = "halfwp";
            p = new haxe.ds.StringMap();
            p.h.x = 1;
            p.h.y = 2;
            p.h.ty = "halfwp";
            k = new haxe.ds.StringMap();
            k.h.x = 2;
            k.h.y = 2;
            k.h.ty = "halfwp";
            b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l, p, k]);
            this.recipes.push(b);
            this.isScavenger && ScavengerManager.userMember.hasPlus && (b = new haxe.ds.StringMap(), a = new haxe.ds.StringMap(), a.h.ty = "dtb", a.h.count = 8, a.h.damage = 0, a.h.extra = new haxe.ds.StringMap(), b.h.output = Game.makeDynamicMap(a), b.h.inputType = "absolute", a = new haxe.ds.StringMap(), a.h.x = 1, a.h.y = 0, a.h.ty = "dt", c = new haxe.ds.StringMap(), c.h.x = 0, c.h.y = 1, c.h.ty = "dt", d = new haxe.ds.StringMap(), d.h.x = 1, d.h.y = 1, d.h.ty = "dt", f = new haxe.ds.StringMap(), f.h.x = 2, f.h.y = 1, f.h.ty = "dt", l = new haxe.ds.StringMap(), l.h.x = 1, l.h.y = 2, l.h.ty = "dt", b.h.input = Game.makeArrayOfDynamicMaps([a, c, d, f, l]), this.recipes.push(b));
        }
    },
    pickCombinedColor: function (b, a) {
        return Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && Colors.colors.h[b].h.combines.exists(a) ? js.Boot.__cast(Colors.colors.h[b].h.combines, haxe.ds.StringMap).h[a] : .5 > Math.random() ? b : a;
    },
    getItemName: function (b) {
        if (null == b) return "Nothing";
        var a = null != BlockData.get(b[0], "name") ? BlockData.get(b[0], "name") : "Nothing";
        null == b[3] && (b[3] = new haxe.ds.StringMap());
        var c = b[3];
        if (null != c.h.nameChange && "" != c.h.nameChange) return c.h.nameChange;
        switch (b[0]) {
        case "LeatherCap":
        case "LeatherPants":
        case "LeatherShirt":
        case "LeatherShoes":
        case "bdgs":
        case "gs":
            Object.prototype.hasOwnProperty.call(c.h, "type") && Object.prototype.hasOwnProperty.call(Colors.colors.h, c.h.type) && "rainbow" != c.h.type && (a = Std.string(Colors.colors.h[c.h.type].h.name) + " " + a);
            break;
        case "bl":
            Object.prototype.hasOwnProperty.call(c.h, "type") && ("ghast" == c.h.type ? a = "Ghast " + a : Object.prototype.hasOwnProperty.call(Colors.colors.h, c.h.type) && (a = Std.string(Colors.colors.h[c.h.type].h.name) + " " + a));
            break;
        case "bdcloth":
        case "carpet":
        case "cloth":
        case "dye":
            Object.prototype.hasOwnProperty.call(c.h, "type") && Object.prototype.hasOwnProperty.call(Colors.colors.h, c.h.type) && (a = Std.string(Colors.colors.h[c.h.type].h.name) + " " + a);
            break;
        case "megg":
            a = "Unknown Spawn Egg";
            Object.prototype.hasOwnProperty.call(c.h, "type") && null != entities.Entity_Mob.matchMobID(c.h.type) && null != entities.Entity_Mob.getMobName(c.h.type) && (a = entities.Entity_Mob.getMobName(c.h.type) + " Egg");
            break;
        case "mh":
            a = "Mob Head";
            if (Object.prototype.hasOwnProperty.call(c.h, "type")) switch (c.h.type) {
            case "creeper":
            case "enderdragon":
            case "skeleton":
            case "zombie":
                a = Std.string(this.world.mobData.h[c.h.type].h.name) + " Head";
            }
            break;
        case "potion":
            Object.prototype.hasOwnProperty.call(c.h, "type") && null != this.potionData.h[c.h.type] && (a = ("splash" == c.h.category ? "Splash " : "") + Std.string(this.potionData.h[c.h.type].h.name));
        }
        return a;
    },
    initPotionData: function () {
        var b = new haxe.ds.StringMap();
        b.h.name = "Empty Bottle";
        b.h.r = 1;
        b.h.g = 1;
        b.h.b = 1;
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.empty = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Bottle of Water";
        b.h.r = .5;
        b.h.g = .8;
        b.h.b = 1;
        var a = new haxe.ds.StringMap();
        a.h.nw = "awkward";
        a.h.se = "mundane";
        a.h.bp = "mundane";
        a.h.gt = "mundane";
        a.h.rfoot = "mundane";
        a.h.gmels = "mundane";
        a.h.sugar = "mundane";
        a.h.magmac = "mundane";
        a.h.rsd = "mundane";
        a.h.yellowdust = "thick";
        a.h.fse = "weakness";
        b.h.recipes = a;
        this.potionData.h.water = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Awkward Potion";
        b.h.r = .5;
        b.h.g = .8;
        b.h.b = 1;
        a = new haxe.ds.StringMap();
        a.h.gcarrot = "nightvision";
        a.h.magmac = "fireresistance";
        a.h.rfoot = "leaping";
        a.h.sugar = "swiftness";
        a.h.puff = "waterbreathing";
        a.h.gmels = "healing";
        a.h.se = "poison";
        a.h.gt = "regeneration";
        a.h.bp = "strength";
        b.h.recipes = a;
        this.potionData.h.awkward = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Night Vision Potion";
        b.h.r = .2;
        b.h.g = .5;
        b.h.b = .7;
        a = new haxe.ds.StringMap();
        a.h.type = "nightvision";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "invisibility";
        a.h.rsd = "nightvision+";
        b.h.recipes = a;
        this.potionData.h.nightvision = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Night Vision Potion +";
        b.h.r = .2;
        b.h.g = .5;
        b.h.b = .7;
        a = new haxe.ds.StringMap();
        a.h.type = "nightvision";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "invisibility+";
        b.h.recipes = a;
        this.potionData.h["nightvision+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Invisibility Potion";
        b.h.r = .5;
        b.h.g = .5;
        b.h.b = .6;
        a = new haxe.ds.StringMap();
        a.h.type = "invisibility";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "invisibility+";
        b.h.recipes = a;
        this.potionData.h.invisibility = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Invisibility Potion +";
        b.h.r = .5;
        b.h.g = .5;
        b.h.b = .6;
        a = new haxe.ds.StringMap();
        a.h.type = "invisibility";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["invisibility+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Fire Resistance Potion";
        b.h.r = 1;
        b.h.g = .7;
        b.h.b = .4;
        a = new haxe.ds.StringMap();
        a.h.type = "fireresistance";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "fireresistance+";
        b.h.recipes = a;
        this.potionData.h.fireresistance = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Fire Resistance Potion +";
        b.h.r = 1;
        b.h.g = .7;
        b.h.b = .4;
        a = new haxe.ds.StringMap();
        a.h.type = "fireresistance";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["fireresistance+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Leaping Potion";
        b.h.r = .3;
        b.h.g = 1;
        b.h.b = .6;
        a = new haxe.ds.StringMap();
        a.h.type = "jumpboost";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "slowness";
        a.h.rsd = "leaping+";
        a.h.yellowdust = "leaping2";
        b.h.recipes = a;
        this.potionData.h.leaping = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Leaping Potion +";
        b.h.r = .3;
        b.h.g = 1;
        b.h.b = .6;
        a = new haxe.ds.StringMap();
        a.h.type = "jumpboost";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "slowness+";
        b.h.recipes = a;
        this.potionData.h["leaping+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Leaping Potion II";
        b.h.r = .3;
        b.h.g = 1;
        b.h.b = .6;
        a = new haxe.ds.StringMap();
        a.h.type = "jumpboost";
        a.h.duration = 90;
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.leaping2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Slowness Potion";
        b.h.r = .35;
        b.h.g = .4;
        b.h.b = .5;
        a = new haxe.ds.StringMap();
        a.h.type = "slowness";
        a.h.duration = 90;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "slowness+";
        b.h.recipes = a;
        this.potionData.h.slowness = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Slowness Potion +";
        b.h.r = .35;
        b.h.g = .4;
        b.h.b = .5;
        a = new haxe.ds.StringMap();
        a.h.type = "slowness";
        a.h.duration = 240;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["slowness+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Swiftness Potion";
        b.h.r = .4;
        b.h.g = .55;
        b.h.b = .65;
        a = new haxe.ds.StringMap();
        a.h.type = "speed";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "slowness";
        a.h.rsd = "swiftness+";
        a.h.yellowdust = "swiftness2";
        b.h.recipes = a;
        this.potionData.h.swiftness = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Swiftness Potion +";
        b.h.r = .4;
        b.h.g = .55;
        b.h.b = .65;
        a = new haxe.ds.StringMap();
        a.h.type = "speed";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "slowness+";
        b.h.recipes = a;
        this.potionData.h["swiftness+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Swiftness Potion II";
        b.h.r = .4;
        b.h.g = .55;
        b.h.b = .65;
        a = new haxe.ds.StringMap();
        a.h.type = "speed";
        a.h.duration = 90;
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.swiftness2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Water Breathing Potion";
        b.h.r = .55;
        b.h.g = .6;
        b.h.b = .45;
        a = new haxe.ds.StringMap();
        a.h.type = "waterbreathing";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "waterbreathing+";
        b.h.recipes = a;
        this.potionData.h.waterbreathing = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Water Breathing Potion +";
        b.h.r = .55;
        b.h.g = .6;
        b.h.b = .45;
        a = new haxe.ds.StringMap();
        a.h.type = "waterbreathing";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["waterbreathing+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Healing Potion";
        b.h.r = .8;
        b.h.g = .1;
        b.h.b = .1;
        a = new haxe.ds.StringMap();
        a.h.type = "instanthealth";
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "harming";
        a.h.yellowdust = "healing2";
        b.h.recipes = a;
        this.potionData.h.healing = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Healing Potion II";
        b.h.r = .8;
        b.h.g = .1;
        b.h.b = .1;
        a = new haxe.ds.StringMap();
        a.h.type = "instanthealth";
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "harming2";
        b.h.recipes = a;
        this.potionData.h.healing2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Harming Potion";
        b.h.r = .1;
        b.h.g = .05;
        b.h.b = .05;
        a = new haxe.ds.StringMap();
        a.h.type = "instantdamage";
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.yellowdust = "harming2";
        b.h.recipes = a;
        this.potionData.h.harming = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Harming Potion II";
        b.h.r = .1;
        b.h.g = .05;
        b.h.b = .05;
        a = new haxe.ds.StringMap();
        a.h.type = "instantdamage";
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.harming2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Poison Potion";
        b.h.r = .3;
        b.h.g = .55;
        b.h.b = .2;
        a = new haxe.ds.StringMap();
        a.h.type = "poison";
        a.h.duration = 45;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "harming";
        a.h.rsd = "poison+";
        a.h.yellowdust = "poison2";
        b.h.recipes = a;
        this.potionData.h.poison = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Poison Potion +";
        b.h.r = .3;
        b.h.g = .55;
        b.h.b = .2;
        a = new haxe.ds.StringMap();
        a.h.type = "poison";
        a.h.duration = 90;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["poison+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Poison Potion II";
        b.h.r = .3;
        b.h.g = .55;
        b.h.b = .2;
        a = new haxe.ds.StringMap();
        a.h.type = "poison";
        a.h.duration = 21;
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.fse = "harming2";
        b.h.recipes = a;
        this.potionData.h.poison2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Regeneration Potion";
        b.h.r = .8;
        b.h.g = .4;
        b.h.b = .1;
        a = new haxe.ds.StringMap();
        a.h.type = "regeneration";
        a.h.duration = 45;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "regeneration+";
        a.h.yellowdust = "regeneration2";
        b.h.recipes = a;
        this.potionData.h.regeneration = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Regeneration Potion +";
        b.h.r = .8;
        b.h.g = .4;
        b.h.b = .1;
        a = new haxe.ds.StringMap();
        a.h.type = "regeneration";
        a.h.duration = 90;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["regeneration+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Regeneration Potion II";
        b.h.r = .8;
        b.h.g = .4;
        b.h.b = .1;
        a = new haxe.ds.StringMap();
        a.h.type = "regeneration";
        a.h.duration = 21;
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.regeneration2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Strength Potion";
        b.h.r = .6;
        b.h.g = 0;
        b.h.b = 0;
        a = new haxe.ds.StringMap();
        a.h.type = "strength";
        a.h.duration = 180;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "strength+";
        a.h.yellowdust = "strength2";
        b.h.recipes = a;
        this.potionData.h.strength = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Strength Potion +";
        b.h.r = .6;
        b.h.g = 0;
        b.h.b = 0;
        a = new haxe.ds.StringMap();
        a.h.type = "strength";
        a.h.duration = 480;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["strength+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Strength Potion II";
        b.h.r = .6;
        b.h.g = 0;
        b.h.b = 0;
        a = new haxe.ds.StringMap();
        a.h.type = "strength";
        a.h.duration = 90;
        a.h.level = 2;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.strength2 = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Weakness Potion";
        b.h.r = .3;
        b.h.g = 3;
        b.h.b = 4;
        a = new haxe.ds.StringMap();
        a.h.type = "weakness";
        a.h.duration = 90;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        a = new haxe.ds.StringMap();
        a.h.rsd = "weakness+";
        b.h.recipes = a;
        this.potionData.h.weakness = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Weakness Potion +";
        b.h.r = .3;
        b.h.g = 3;
        b.h.b = 4;
        a = new haxe.ds.StringMap();
        a.h.type = "weakness";
        a.h.duration = 240;
        a.h.level = 1;
        b.h.effects = [Game.makeDynamicMap(a)];
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h["weakness+"] = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Mundane Potion";
        b.h.r = .5;
        b.h.g = .8;
        b.h.b = .85;
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.mundane = Game.makeDynamicMap(b);
        b = new haxe.ds.StringMap();
        b.h.name = "Thick Potion";
        b.h.r = .5;
        b.h.g = .8;
        b.h.b = .7;
        b.h.recipes = new haxe.ds.StringMap();
        this.potionData.h.thick = Game.makeDynamicMap(b);
    },
    hasEffect: function (b) {
        return Object.prototype.hasOwnProperty.call(this.world.effects.h, b) ? !0 : !1;
    },
    initEffects: function () {
        var b = new haxe.ds.StringMap();
        b.h.name = "Regeneration";
        b.h.r = .8;
        b.h.g = .4;
        b.h.b = .1;
        b.h.strengthType = "hearts";
        b.h.perLevel = 30;
        this.effectData.h.regeneration = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Weakness";
        b.h.r = .3;
        b.h.g = 3;
        b.h.b = 4;
        b.h.strengthType = "damage";
        b.h.perLevel = -4;
        this.effectData.h.weakness = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Strength";
        b.h.r = .6;
        b.h.g = 0;
        b.h.b = 0;
        b.h.strengthType = "damage";
        b.h.perLevel = 3;
        this.effectData.h.strength = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Speed";
        b.h.r = .4;
        b.h.g = .55;
        b.h.b = .65;
        b.h.strengthType = "percent";
        b.h.perLevel = 20;
        this.effectData.h.speed = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Instant Health";
        b.h.r = .8;
        b.h.g = .1;
        b.h.b = .1;
        b.h.strengthType = "heartsexponential";
        b.h.perLevel = 2;
        this.effectData.h.instanthealth = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Instant Damage";
        b.h.r = .1;
        b.h.g = .05;
        b.h.b = .05;
        b.h.strengthType = "heartsexponential";
        b.h.perLevel = -3;
        this.effectData.h.instantdamage = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Slowness";
        b.h.r = .35;
        b.h.g = .4;
        b.h.b = .5;
        b.h.strengthType = "percent";
        b.h.perLevel = -20;
        this.effectData.h.slowness = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Poison";
        b.h.r = .3;
        b.h.g = .55;
        b.h.b = .2;
        b.h.strengthType = "none";
        this.effectData.h.poison = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Fire Resistance";
        b.h.r = 1;
        b.h.g = .7;
        b.h.b = .4;
        b.h.strengthType = "none";
        this.effectData.h.fireresistance = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Water Breathing";
        b.h.r = .55;
        b.h.g = .6;
        b.h.b = .45;
        b.h.strengthType = "none";
        this.effectData.h.waterbreathing = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Jump Boost";
        b.h.r = .3;
        b.h.g = 1;
        b.h.b = .6;
        b.h.strengthType = "none";
        this.effectData.h.jumpboost = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Invisibility";
        b.h.r = .5;
        b.h.g = .5;
        b.h.b = .6;
        b.h.strengthType = "none";
        this.effectData.h.invisibility = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Night Vision";
        b.h.r = .2;
        b.h.g = .5;
        b.h.b = .7;
        b.h.strengthType = "none";
        this.effectData.h.nightvision = b;
        b = new haxe.ds.StringMap();
        b.h.name = "Hunger";
        b.h.r = .5;
        b.h.g = .7;
        b.h.b = .2;
        b.h.strengthType = "none";
        this.effectData.h.hunger = b;
    },
    emptyPotion: function (b) {
        return null == b || "undefined" == b || "" == b || "empty" == b ? !0 : !1;
    },
    isEmpty: function (b) {
        null == b && (b = -1);
        -1 == b && (b = this.world.selectedInventoryItem);
        if (null == this.world.inventoryItem(b)) return this.world.setInventoryItem(b, Game.emptyItem()), !0;
        var a = this.world.getInventoryItemType(b);
        return "air" == a ? !0 : null == a || "undefined" == a || "air" == a || "" == a || "na" == a || 0 == js.Boot.__cast(this.world.inventoryItem(b), Array)[1] ? (this.world.setInventoryItem(b, Game.emptyItem()), !0) : !1;
    },
    pickRandomEnchant: function (b) {
        var a = "",
            c = 0;
        b = Object.keys(b.h);
        for (var d = b.length, f = 0; f < d;) {
            var l = b[f++];
            Math.random() < 1 / ++c && (a = l);
        }
        return a;
    },
    enchant: function (b, a, c, d) {
        null == d && (d = !1);
        null == c && (c = 0);
        var f = c;
        c = Object.create(null);
        for (var l = Object.create(null), g = 0; 16 > g;) {
            ++g;
            var k = 0,
                B = "";
            if (1 <= f) {
                var n = BlockData.get(b, "enchantType");
                if (null == n) return;
                "Random" == n && (n = this.enchantBookTypesList[Math.floor(Math.random() * this.enchantBookTypesList.length)]);
                for (var M = 0; 6 > M;) {
                    ++M;
                    var m = this.pickRandomEnchant(Game.enchantTypes.h[n]);
                    Game.enchantTypes.h[n].h[m] <= f && Game.enchantTypes.h[n].h[m] > k && null == l[HxOverrides.substr(m, 0, m.length - 1)] && !("silkTouch" == m && null != l.fortune || "fortune" == HxOverrides.substr(m, 0, 7) && null != c.silkTouch || "frostWalker" == HxOverrides.substr(m, 0, 11) && null != l.depthStrider || "depthStrider" == HxOverrides.substr(m, 0, 12) && null != c.frostWalker) && (k = Game.enchantTypes.h[n].h[m], B = m);
                }
                c[B] = k;
                l[HxOverrides.substr(B, 0, B.length - 1)] = k;
                f -= k;
                8 == this.inventario.currentFrame && (this.inventario.unArrange(0), this.inventario.unArrange(1), this.inventario.unArrange(2));
            }
        }
        b = Object.keys(c);
        f = b.length;
        for (l = 0; l < f;) g = b[l++], d && (this.world.experience = Math.floor(Math.max(0, this.world.experience - 100 * c[g]))), a.h[g] = "enchant";
    },
    getBlockColor: function (b, a) {
        var c = this.world.getFG(b, a);
        if (null != BlockData.get(c, "color")) if ("state" == BlockData.get(c, "color")) {
            c = Std.string(this.world.states.h["blockX" + b + "Y" + a]);
            if ("rainbow" == c) return [Math.random(), Math.random(), Math.random()];
            if (Object.prototype.hasOwnProperty.call(Colors.colors.h, c)) return [Colors.colors.h[c].h.r, Colors.colors.h[c].h.g, Colors.colors.h[c].h.b];
        } else if (b = Colors.colors, a = BlockData.get(c, "color"), null != b.h[a]) {
            b = Colors.colors;
            a = BlockData.get(c, "color");
            var d = b.h[a].h.r;
            b = Colors.colors;
            a = BlockData.get(c, "color");
            var f = b.h[a].h.g;
            b = Colors.colors;
            a = BlockData.get(c, "color");
            return [d, f, b.h[a].h.b];
        }
        return [1, 1, 1];
    },
    mineBlock: function (b, a, c, d) {
        var f = "blockX" + b + "Y" + a,
            l = this.world.getFG(b, a);
        this.currentlyMiningBlock[0] == b && this.currentlyMiningBlock[1] == a && (this.currentlyMining = "", this.currentlyMiningBlock = [-1E4, -1E4], this.miningAnimation = !1);
        if ("air" != l && "undefined" != l && ("wd1" == l && this.unlockAchieve(0), "br" != l || 1 == this.world.gamemode)) {
            var p = !1,
                h = this.world.get_selectedInventoryItemExtra();
            Object.prototype.hasOwnProperty.call(h.h, "silkTouch") && (p = !0);
            var B = 0;
            h = this.world.get_selectedInventoryItemExtra();
            Object.prototype.hasOwnProperty.call(h.h, "fortune3") ? B = 3 : (h = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(h.h, "fortune2") ? B = 2 : (h = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(h.h, "fortune1") && (B = 1)));
            null != this.world.getBlock(b, a + 1, !1) && this.world.getBlock(b, a + 1).inter();
            this.miningAnimation = !1;
            "air" != l && this.blockSound(b, a, b + .5 - this.world.worldX, -(a + .5) - this.world.worldY);
            var n = !1;
            if ("ice" == l || "fice" == l) this.requestSound("glass" + ((3 * Math.random() | 0) + 1), b + .5 - this.world.worldX, -(a + .5) - this.world.worldY), n = !0;
            var m = !1,
                ka = !1;
            if (!c) {
                h = new lemongine.Point(b + .5, 0);
                c = new lemongine.Point(-(a + .5), 0);
                var T = new haxe.ds.StringMap(),
                    x = this.getBlockColor(b, a);
                T.h.color = x;
                this.addParticles("mining", 0, 5, h, c, !1, T);
                if ("snow" == l) "Shear" == this.world.get_selectedInventoryItemType() ? this.damageTool() : "Shovel" != HxOverrides.substr(this.world.get_selectedInventoryItemType(), -6, 6) && (n = !0);else if ("lgr" == l) "Shear" == this.world.get_selectedInventoryItemType() && (this.damageTool(), m = !0);else if ("moss" == l) "Shear" != this.world.get_selectedInventoryItemType() ? n = !0 : this.damageTool();else if ("web" == l) {
                    if (p) 1 != this.world.gamemode && this.addDrop("web", b + .5, -(a + .5), 1, null, null), n = !0;else {
                        if (0 != B || 0 < (Math.random() * (B + 1) | 0)) 1 != this.world.gamemode && this.addDrop("fiber", b + .5, -(a + .5), (Math.random() * B | 0) + 1, null, null), n = !0;
                    }
                } else if ("dt" == l) 1 == this.world.states.h[f] && p && (1 != this.world.gamemode && this.addDrop("dtg", b + .5, -(a + .5), 1, null, null), n = !0);else if ("myc" == l || "mobSpawner" == l || "msb1" == l || "msb2" == l || "msb3" == l || "msb4" == l) p && (m = !0);else if ("shrub" == l) "Shear" == this.world.get_selectedInventoryItemType() && (m = !0, this.damageTool()), p && (m = !0);else if ("ds" == l) "Shear" == this.world.get_selectedInventoryItemType() && (m = !0, this.damageTool()), p && (m = !0), m || 1 == this.world.gamemode || this.addDrop("st", b + .5, -(a + .5), (2 * Math.random() | 0) + 1 + (Math.random() * (B + 1) | 0), null, null);else if ("lv" == l) {
                    if ("Shear" == this.world.get_selectedInventoryItemType() || p) ka = !0, this.damageTool();
                } else "lv1" == l || "lv2" == l || "lv3" == l || "lv4" == l ? p && (1 != this.world.gamemode && this.addDrop(l, b + .5, -(a + .5), 1, null, null), n = !0) : "snowblock" == l ? "Shear" == this.world.get_selectedInventoryItemType() || "Shovel" == HxOverrides.substr(this.world.get_selectedInventoryItemType(), -6, 6) ? (m = !0, this.damageTool()) : n = !0 : "boneb" == l ? p ? m = !0 : (1 != this.world.gamemode && this.addDrop("bone", b + .5, -(a + .5), (2 * Math.random() | 0) + 2 + (Math.random() * (B + 1) | 0), null, null), n = !0) : "books" == l ? p ? m = !0 : (1 != this.world.gamemode && this.addDrop("book", b + .5, -(a + .5), 3, null, null), n = !0) : "gs" == l || "bdgs" == l ? (this.requestSound("glass" + ((3 * Math.random() | 0) + 1), b + .5 - this.world.worldX, -(a + .5) - this.world.worldY), p ? m = !0 : (1 != this.world.gamemode && this.addDrop("gss", b + .5, -(a + .5), Math.min(4, (2 * Math.random() | 0) + 1 + (Math.random() * B | 0)) | 0, null, null), n = !0)) : "glow" == l ? (this.requestSound("glass" + ((3 * Math.random() | 0) + 1), b + .5 - this.world.worldX, -(a + .5) - this.world.worldY), p ? m = !0 : (1 != this.world.gamemode && this.addDrop("yellowdust", b + .5, -(a + .5), Math.max(4, (4 * Math.random() | 0) + 1 + (Math.random() * (B + 1) | 0)) | 0, null, null), n = !0)) : "cy1" == l ? (p ? 1 != this.world.gamemode && this.addDrop("cy1", b + .5, -(a + .5), 1, null, null) : 1 != this.world.gamemode && this.addDrop("cy", b + .5, -(a + .5), 4, null, null), n = !0) : null != BlockData.get(l, "dropsWith") && (h = js.Boot.__cast(BlockData.get(l, "dropsWith"), haxe.ds.StringMap), c = this.world.get_selectedInventoryItemType(), null == h.h[c] ? n = !0 : "clore" == l ? p ? m = !0 : (0 != B && (Math.random() * B | 0) < B - 1 && 1 != this.world.gamemode && this.addDrop("cl", b + .5, -(a + .5), 1 + Math.ceil((Math.random() * (B + 1) | 0) / 1.5), null, null), this.dropXP(b + .5, -(a + .5), 2 * Math.random() + 3 | 0)) : "r" == l ? p && (m = !0) : "os" == l ? p ? m = !0 : (1 != this.world.gamemode && this.addDrop("oddrock", b + .5, -(a + .5), 3 + (Math.random() * (B + 1) | 0), null, null), n = !0, this.dropXP(b + .5, -(a + .5), 3 * Math.random() + 4 | 0)) : "ob" == l ? this.unlockAchieve(27) : "dmore" == l ? (this.unlockAchieve(29), p ? m = !0 : (0 != B && (Math.random() * B | 0) < B - 1 && 1 != this.world.gamemode && this.addDrop("dm", b + .5, -(a + .5), 1 + Math.ceil((Math.random() * (B + 1) | 0) / 1.5), null, null), this.dropXP(b + .5, -(a + .5), 3 * Math.random() + 10 | 0))) : "egem" == l ? p ? m = !0 : (this.dropXP(b + .5, -(a + .5), 2 * Math.random() + 6 | 0), 0 != B && (Math.random() * B | 0) < B - 1 && (1 != this.world.gamemode && this.addDrop("egemd", b + .5, -(a + .5), 1 + Math.ceil((Math.random() * (B + 1) | 0) / 2), null, null), n = !0)) : "gd" == l ? this.unlockAchieve(28) : "to" == l ? p ? m = !0 : (1 != this.world.gamemode && this.addDrop("topaz", b + .5, -(a + .5), (2 * Math.random() | 0) + 1 + (Math.random() * (B + 1) | 0), null, null), n = !0, this.dropXP(b + .5, -(a + .5), 2 * Math.random() + 4 | 0)) : "lap" == l ? p ? m = !0 : (1 != this.world.gamemode && this.addDrop("ll", b + .5, -(a + .5), (6 * Math.random() | 0) + 1 + 2 * (Math.random() * (B + 1) | 0), null, null), n = !0, this.dropXP(b + .5, -(a + .5), 2 * Math.random() + 4 | 0)) : "rs" == l && (p ? m = !0 : (1 != this.world.gamemode && this.addDrop("rsd", b + .5, -(a + .5), 4 + (2 * Math.random() | 0) + 2 * (Math.random() * (B + 1) | 0), null, null), n = !0, this.dropXP(b + .5, -(a + .5), 3 * Math.random() + 4 | 0))));
                1 == this.world.get_selectedInventoryTool() && "Shear" != this.world.get_selectedInventoryItemType() && (null != BlockData.get(l, "mining") ? (h = js.Boot.__cast(BlockData.get(l, "mining"), haxe.ds.StringMap), c = this.world.get_selectedInventoryItemType(), c = null != h.h[c]) : c = !1, c ? h = !0 : null != BlockData.get(l, "dropsWith") ? (h = js.Boot.__cast(BlockData.get(l, "dropsWith"), haxe.ds.StringMap), c = this.world.get_selectedInventoryItemType(), h = null != h.h[c]) : h = !1, h && this.damageTool());
            }
            "seed" == l ? 7 == this.world.wheat.h[f] && (this.unlockAchieve(23), 1 != this.world.gamemode && (this.addDrop("wheat", b + .5, -(a + .5), 1, null, null), 2 <= (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) && this.addDrop("seed", b + .5, -(a + .5), 1, null, null), 2 <= (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) && this.addDrop("seed", b + .5, -(a + .5), 1, null, null))) : "mel" == l ? p ? m = !0 : (1 != this.world.gamemode && this.addDrop("mels", b + .5, -(a + .5), Math.min(9, (5 * Math.random() | 0) + 3 + (Math.random() * (B + 1) | 0)) | 0, null, null), n = !0) : "carrot" == l ? (6 == this.world.wheat.h[f] && 2 <= (3 * Math.random() + (Math.random() * B + 1 | 0) | 0) || 7 == this.world.wheat.h[f]) && 1 != this.world.gamemode && this.addDrop("carrot", b + .5, -(a + .5), 1, null, null) : "potato" == l ? (6 == this.world.wheat.h[f] && 2 <= (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) || 7 == this.world.wheat.h[f]) && 1 != this.world.gamemode && (.2 > Math.random() && this.addDrop("ppotato", b + .5, -(a + .5), 1, null, null), this.addDrop("potato", b + .5, -(a + .5), (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) + 1, null, null)) : "nw" == l ? (6 == this.world.wheat.h[f] && 2 <= (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) || 7 == this.world.wheat.h[f]) && 1 != this.world.gamemode && this.addDrop("nw", b + .5, -(a + .5), (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) + 1, null, null) : "bseed" == l && (6 == this.world.wheat.h[f] && 2 <= (3 * Math.random() + (Math.random() * (B + 1) | 0) | 0) || 7 == this.world.wheat.h[f]) && 1 != this.world.gamemode && this.addDrop("beet", b + .5, -(a + .5), (4 * Math.random() | 0) + 1, null, null);
            0 == n && (null != BlockData.get(l, "dropDifferent") && 1 != m ? 1 != this.world.gamemode && "na" != BlockData.get(l, "dropDifferent") && ("bed1" == l || "bed2" == l ? (h = BlockData.get(l, "dropDifferent"), T = new haxe.ds.StringMap(), T.h.type = this.world.states.h[f], this.addDrop(h, b + .5, -(a + .5), 1, null, T)) : this.addDrop(BlockData.get(l, "dropDifferent"), b + .5, -(a + .5), 1, null, null)) : "gs" == l || "bdgs" == l ? 1 != this.world.gamemode && (this.world.states.h[f] ? (T = new haxe.ds.StringMap(), T.h.type = this.world.states.h[f], this.addDrop(l, b + .5, -(a + .5), 1, null, T)) : this.addDrop(l, b + .5, -(a + .5), 1, null, null)) : "lv" == l ? 1 == ka ? 1 != this.world.gamemode && this.addDrop(l, b + .5, -(a + .5), 1, null, null) : 1 == (Math.random() * (10 - 2 * (Math.random() * (B + 1) | 0)) | 0) ? 1 != this.world.gamemode && this.addDrop("sl", b + .5, -(a + .5), 1, null, null) : 1 != this.world.gamemode && this.addDrop("na", b + .5, -(a + .5), 1, null, null) : "lgr" == l ? p || m ? 1 != this.world.gamemode && this.addDrop(l, b + .5, -(a + .5), 1, null, null) : 1 != this.world.gamemode && (4 <= (Math.random() * (5 + (Math.random() * (B + 1) | 0)) | 0) && this.addDrop("seed", b + .5, -(a + .5), 1, null, null), 29 <= (Math.random() * (30 + 2 * (Math.random() * (B + 1) | 0)) | 0) && this.addDrop("bseed", b + .5, -(a + .5), 1, null, null), 69 <= (Math.random() * (70 + 3 * (Math.random() * (B + 1) | 0)) | 0) && this.addDrop("pseed", b + .5, -(a + .5), 1, null, null), 89 <= (Math.random() * (90 + 3 * (Math.random() * (B + 1) | 0)) | 0) && this.addDrop("wseed", b + .5, -(a + .5), 1, null, null)) : "gv" == l ? 1 != this.world.gamemode && (p || m || 1 != (Math.random() * (10 - 2 * (Math.random() * (B + 1) | 0)) | 0) ? this.addDrop("gv", b + .5, -(a + .5), 1, null, null) : this.addDrop("flint", b + .5, -(a + .5), 1, null, null)) : "carpet" == l || "cloth" == l || "bdcloth" == l || "mh" == l ? 1 != this.world.gamemode && (T = new haxe.ds.StringMap(), T.h.type = this.world.states.h[f], this.addDrop(l, b + .5, -(a + .5), 1, null, T)) : "chest" == l || "oven" == l || "brew" == l || "enchant" == l ? 1 != this.world.gamemode && ("" == this.world.states.h[f] ? h = null : (T = new haxe.ds.StringMap(), T.h.nameChange = this.world.states.h[f], h = T), this.addDrop(l, b + .5, -(a + .5), 1, null, h)) : "dropper" == l || "dispense" == l ? 1 != this.world.gamemode && ("" == this.world.states.h[f + "_3"] ? h = null : (T = new haxe.ds.StringMap(), T.h.nameChange = this.world.states.h[f + "_3"], h = T), this.addDrop(l, b + .5, -(a + .5), 1, null, h)) : "anvil" == l ? 1 != this.world.gamemode && (T = new haxe.ds.StringMap(), T.h.damage = this.world.states.h[f], this.addDrop(l, b + .5, -(a + .5), 1, null, T)) : 1 != this.world.gamemode && this.addDrop(l, b + .5, -(a + .5), 1, null, null));
            1 == this.requestRemove(b, a, !0, d) && this.world.setFG(b, a, "air");
            if ("ice" == l || "fice" == l || "sw" == l) this.world.setFG(b, a, "wr"), this.makeBlock(b, a);
        }
    },
    itemFromBlock: function (b, a) {
        var c = this.world.getFG(b, a);
        if ("air" == c) return Game.emptyItem();
        b = "blockX" + b + "Y" + a;
        a = new haxe.ds.StringMap();
        switch (c) {
        case "anvil":
            a.h.damage = this.world.states.h[b];
            break;
        case "dispense":
        case "dropper":
            "" != this.world.states.h[b + "_3"] && (a.h.nameChange = this.world.states.h[b + "_3"]);
            break;
        case "dt":
            1 == this.world.states.h[b] && (c = "dtg");
            break;
        case "brew":
        case "chest":
        case "enchant":
        case "oven":
            "" != this.world.states.h[b] && (a.h.nameChange = this.world.states.h[b]);
            break;
        case "bdcloth":
        case "bdgs":
        case "carpet":
        case "cloth":
        case "gs":
        case "mh":
            a.h.type = this.world.states.h[b];
            break;
        case "bdr1":
        case "bdr2":
        case "bdr3":
        case "bdr4":
        case "bed1":
        case "bed2":
        case "dr1":
        case "dr2":
        case "dr3":
        case "dr4":
        case "idr1":
        case "idr2":
        case "idr3":
        case "idr4":
        case "piston1":
        case "piston2":
        case "rs":
        case "spiston1":
        case "spiston2":
        case "td2":
            null != BlockData.get(c, "dropDifferent") && "na" != BlockData.get(c, "dropDifferent") && ("bed1" == c || "bed2" == c ? (c = BlockData.get(c, "dropDifferent"), a.h.type = this.world.states.h[b]) : c = BlockData.get(c, "dropDifferent"));
        }
        return [c, 1, 0, a];
    },
    canBeOnFire: function (b, a) {
        b = this.world.getFG(b, a);
        return "n" == b || "magma" == b ? !0 : null == BlockData.get(b, "flamRate") ? !1 : !0;
    },
    canCatchOnFire: function (b, a) {
        var c = this.world.getFG(b, a);
        return null == BlockData.get(c, "flamRate") || 0 == BlockData.get(c, "flamRate") ? !1 : this.canBeOnFire(b, a);
    },
    removeFiresAround: function (b, a) {
        "fire" != this.world.getFG(b - 1, a) || this.canFireExistAt(b - 1, a) || this.requestRemove(b - 1, a, !0, !1, !0);
        "fire" != this.world.getFG(b + 1, a) || this.canFireExistAt(b + 1, a) || this.requestRemove(b + 1, a, !0, !1, !0);
        "fire" != this.world.getFG(b, a - 1) || this.canFireExistAt(b, a - 1) || this.requestRemove(b, a - 1, !0, !1, !0);
        "fire" != this.world.getFG(b, a + 1) || this.canFireExistAt(b, a + 1) || this.requestRemove(b, a + 1, !0, !1, !0);
    },
    canFireExistAt: function (b, a) {
        return "air" != this.world.getFG(b, a) && "fire" != this.world.getFG(b, a) || !(this.canBeOnFire(b - 1, a) || this.canBeOnFire(b + 1, a) || this.canBeOnFire(b, a - 1) || this.canBeOnFire(b, a + 1)) ? !1 : !0;
    },
    extinguishBlock: function (b, a) {
        "fire" != this.world.getFG(b - 1, a) || this.canBeOnFire(b - 2, a) || this.canBeOnFire(b - 1, a - 1) || this.canBeOnFire(b - 1, a + 1) || this.requestRemove(b - 1, a, !0, !1, !0);
        "fire" != this.world.getFG(b + 1, a) || this.canBeOnFire(b + 2, a) || this.canBeOnFire(b + 1, a - 1) || this.canBeOnFire(b + 1, a + 1) || this.requestRemove(b + 1, a, !0, !1, !0);
        "fire" != this.world.getFG(b, a - 1) || this.canBeOnFire(b, a - 2) || this.canBeOnFire(b - 1, a - 1) || this.canBeOnFire(b + 1, a - 1) || this.requestRemove(b, a - 1, !0, !1, !0);
        "fire" != this.world.getFG(b, a + 1) || this.canBeOnFire(b, a + 2) || this.canBeOnFire(b - 1, a + 1) || this.canBeOnFire(b + 1, a + 1) || this.requestRemove(b, a + 1, !0, !1, !0);
    },
    requestRemove: function (b, a, c, d, f) {
        null == f && (f = !1);
        null == d && (d = !1);
        null == c && (c = !1);
        null == c && (c = !1);
        null == d && (d = !1);
        var l = "blockX" + b + "Y" + a,
            g = this.world.getFG(b, a);
        f && this.world.setFG(b, a, "air");
        this.currentlyMiningBlock[0] == b && this.currentlyMiningBlock[1] == a && (this.currentlyMining = "", this.currentlyMiningBlock = [-1E4, -1E4], this.miningAnimation = !1);
        this.lighting.removeLight(l);
        if (c) {
            c = this.world.water;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            c = this.world.playingTNT;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            c = this.world.wheat;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            this.extinguishBlock(b, a);
            null != this.world.getBlock(b, a + 1, !1) && this.world.getBlock(b, a + 1).inter();
            c = this.world.signs;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            c = this.world.toGrow;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            if ("rail" == HxOverrides.substr(g, 0, 4)) "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h[l]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h[l][1]) && (-1 != this.world.states.h[l][1][1] && (1 == this.world.states.h[l][0] ? "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b + 1) + "Y" + a]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b + 1) + "Y" + a][1]) && this.world.states.h["blockX" + (b + 1) + "Y" + a][1][0] == this.world.states.h[l][1][0] - 1 && (this.world.states.h["blockX" + (b + 1) + "Y" + a][1] = [0, 0]) : 2 == this.world.states.h[l][0] ? "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b + 1) + "Y" + (a - 1)]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b + 1) + "Y" + (a - 1)][1]) && this.world.states.h["blockX" + (b + 1) + "Y" + (a - 1)][1][0] == this.world.states.h[l][1][0] - 1 && (this.world.states.h["blockX" + (b + 1) + "Y" + (a - 1)][1] = [0, 0]) : "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b + 1) + "Y" + (a + 1)]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b + 1) + "Y" + (a + 1)][1]) && this.world.states.h["blockX" + (b + 1) + "Y" + (a + 1)][1][0] == this.world.states.h[l][1][0] - 1 && (this.world.states.h["blockX" + (b + 1) + "Y" + (a + 1)][1] = [0, 0])), 1 != this.world.states.h[l][1][1] && (1 == this.world.states.h[l][0] ? "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b - 1) + "Y" + a]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b - 1) + "Y" + a][1]) && this.world.states.h["blockX" + (b - 1) + "Y" + a][1][0] == this.world.states.h[l][1][0] - 1 && (this.world.states.h["blockX" + (b - 1) + "Y" + a][1] = [0, 0]) : 2 == this.world.states.h[l][0] ? "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b - 1) + "Y" + (a + 1)]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b - 1) + "Y" + (a + 1)][1]) && this.world.states.h["blockX" + (b - 1) + "Y" + (a + 1)][1][0] == this.world.states.h[l][1][0] - 1 && (this.world.states.h["blockX" + (b - 1) + "Y" + (a + 1)][1] = [0, 0]) : "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b - 1) + "Y" + (a - 1)]) && "Array" == lemongine.Helpers.getQualifiedClassName(this.world.states.h["blockX" + (b - 1) + "Y" + (a - 1)][1]) && this.world.states.h["blockX" + (b - 1) + "Y" + (a - 1)][1][0] == this.world.states.h[l][1][0] - 1 && (this.world.states.h["blockX" + (b - 1) + "Y" + (a - 1)][1] = [0, 0])));else if ("rsd" == g) Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, l) && 1 < this.world.hasSignal.h[l][0] && (-1 != this.world.hasSignal.h[l][1] && (BlockData.get(this.world.getFG(b + 1, a), "walkThroughBlock") ? BlockData.get(this.world.getFG(b + 1, a - 1), "walkThroughBlock") ? "air" != this.world.getFG(b + 1, a - 1) && (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a - 1)) && this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a - 1)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), "rsd" == this.world.getFG(b + 1, a - 1) && Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a - 2)) && this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a - 2)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + a) && this.world.hasSignal.h["blockX" + (b + 1) + "Y" + a][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a - 1)) && this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a - 1)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + a) && this.world.hasSignal.h["blockX" + (b + 1) + "Y" + a][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a + 1)) && this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a + 1)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]))), 1 != this.world.hasSignal.h[l][1] && (1 == !BlockData.get(this.world.getFG(b - 1, a), "walkThroughBlock") ? (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + a) && this.world.hasSignal.h["blockX" + (b - 1) + "Y" + a][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + (a + 1)) && this.world.hasSignal.h["blockX" + (b - 1) + "Y" + (a + 1)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : BlockData.get(this.world.getFG(b - 1, a - 1), "walkThroughBlock") ? "air" != this.world.getFG(b - 1, a - 1) && (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + (a - 1)) && this.world.hasSignal.h["blockX" + (b - 1) + "Y" + (a - 1)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), "rsd" == this.world.getFG(b - 1, a - 1) && Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + (a - 2)) && this.world.hasSignal.h["blockX" + (b - 1) + "Y" + (a - 2)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + a) && this.world.hasSignal.h["blockX" + (b - 1) + "Y" + a][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + (a - 1)) && this.world.hasSignal.h["blockX" + (b - 1) + "Y" + (a - 1)][0] == this.world.hasSignal.h[l][0] - 1 && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]))));else if ("rstorch" == g) 2 == this.world.states.h[l] ? (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a - 1)) && 16 == this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a - 1)][0] && "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + a) && 16 == this.world.hasSignal.h["blockX" + (b + 1) + "Y" + a][0] && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : (3 != this.world.states.h[l] && (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a - 1)) && 16 == this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a - 1)][0] && "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + a) && 16 == this.world.hasSignal.h["blockX" + (b + 1) + "Y" + a][0] && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + (a - 1)) && 16 == this.world.hasSignal.h["blockX" + (b - 1) + "Y" + (a - 1)][0] && "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + a) && 16 == this.world.hasSignal.h["blockX" + (b - 1) + "Y" + a][0] && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])), 1 != BlockData.get(this.world.getFG(b, a + 1), "walkThroughBlock") && (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + b + "Y" + (a + 1)) && 16 == this.world.hasSignal.h["blockX" + b + "Y" + (a + 1)][0] && (c = this.world.hasSignal, g = "blockX" + b + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + b + "Y" + (a + 2)) && 16 == this.world.hasSignal.h["blockX" + b + "Y" + (a + 2)][0] && (c = this.world.hasSignal, g = "blockX" + b + "Y" + (a + 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b - 1) + "Y" + (a + 1)) && 16 == this.world.hasSignal.h["blockX" + (b - 1) + "Y" + (a + 1)][0] && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (b + 1) + "Y" + (a + 1)) && 16 == this.world.hasSignal.h["blockX" + (b + 1) + "Y" + (a + 1)][0] && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]));else if ("pp" == g || "wpp" == g) c = this.world.hasSignal, g = "blockX" + b + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + b + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a) && (c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a - 1) && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a - 1) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]);else if ("button" == g || "lever" == g) 2 == this.world.states.h[l] ? (c = this.world.hasSignal, g = "blockX" + b + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a + 1) && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 2, a) && (c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 3) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + b + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b, a - 1) && (c = this.world.hasSignal, g = "blockX" + b + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a - 1) && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : 3 == this.world.states.h[l] ? (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + b + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a + 1) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a + 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a) && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b + 3) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a - 1) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + b + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b, a - 1) && (c = this.world.hasSignal, g = "blockX" + b + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g])) : (c = this.world.hasSignal, g = "blockX" + b + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + b + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a) && (c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + a, Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a) && (c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b - 1, a - 1) && (c = this.world.hasSignal, g = "blockX" + (b - 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b - 2) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]), c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], "rsd" == this.world.getFG(b + 1, a - 1) && (c = this.world.hasSignal, g = "blockX" + (b + 1) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], c = this.world.hasSignal, g = "blockX" + (b + 2) + "Y" + (a - 2), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g]));else if ("chest" == g) {
                if (1 != this.world.gamemode && Object.prototype.hasOwnProperty.call(this.world.chests.h, l)) for (g = 0, f = this.world.chests.h[l]; g < f.length;) c = f[g], ++g, null != c && this.addDrop(c[0], b + .5, -(a + .5), c[1], c[2], c[3]);
                c = this.world.chests;
                Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            } else if ("dispense" == g || "dropper" == g) {
                if (1 != this.world.gamemode && Object.prototype.hasOwnProperty.call(this.world.states.h, l + "_2")) for (f = this.world.states.h[l + "_2"], g = 0; g < f.length;) c = f[g], ++g, null != c[0] && this.addDrop(c[0], b + .5, -(a + .5), c[1], c[2], c[3]);
            } else if ("oven" == g) 1 != this.world.gamemode && null != this.world.toSmelt.h[l] && (f = this.world.toSmelt.h[l], g = f.h.input, c = f.h.fuel, f = f.h.output, null != g && this.addDrop(g[0], b + .5, -(a + .5), g[1], g[2], g[3]), null != c && this.addDrop(c[0], b + .5, -(a + .5), c[1], c[2], c[3]), null != f && this.addDrop(f[0], b + .5, -(a + .5), f[1], f[2], f[3])), c = this.world.toSmelt, Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];else if ("brew" == g) 1 != this.world.gamemode && null != this.world.toBrew.h[l] && (f = this.world.toBrew.h[l], g = f.h.input, c = f.h.fuel, f = f.h.output, this.addDrop(g[0], b + .5, -(a + .5), g[1], g[2], g[3]), this.addDrop(c[0], b + .5, -(a + .5), c[1], c[2], c[3]), this.addDrop(f[0][0], b + .5, -(a + .5), f[0][1], f[0][2], f[0][3]), this.addDrop(f[1][0], b + .5, -(a + .5), f[1][1], f[1][2], f[1][3]), this.addDrop(f[2][0], b + .5, -(a + .5), f[2][1], f[2][2], f[2][3])), c = this.world.toBrew, Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];else if ("piston1" == g || "spiston1" == g) 4 == this.world.states.h[l] ? "piston2" == HxOverrides.substr(this.world.getFG(b - 1, a), -7, 7) && (this.world.setFG(b - 1, a, "air"), this.applyBlockState(b - 1, a, new BlockState())) : 2 == this.world.states.h[l] ? "piston2" == HxOverrides.substr(this.world.getFG(b + 1, a), -7, 7) && (this.world.setFG(b + 1, a, "air"), this.applyBlockState(b + 1, a, new BlockState())) : 3 == this.world.states.h[l] ? "piston2" == HxOverrides.substr(this.world.getFG(b, a - 1), -7, 7) && (this.world.setFG(b, a - 1, "air"), this.applyBlockState(b, a - 1, new BlockState())) : "piston2" == HxOverrides.substr(this.world.getFG(b, a + 1), -7, 7) && (this.world.setFG(b, a + 1, "air"), this.applyBlockState(b, a + 1, new BlockState()));else if ("piston2" == g || "spiston2" == g) 2 == this.world.states.h[l] ? "piston1" == HxOverrides.substr(this.world.getFG(b - 1, a), -7, 7) && (this.world.setFG(b - 1, a, "air"), this.applyBlockState(b - 1, a, new BlockState())) : 3 == this.world.states.h[l] ? "piston1" == HxOverrides.substr(this.world.getFG(b, a + 1), -7, 7) && (this.world.setFG(b, a + 1, "air"), this.applyBlockState(b, a + 1, new BlockState())) : 4 == this.world.states.h[l] ? "piston1" == HxOverrides.substr(this.world.getFG(b + 1, a), -7, 7) && (this.world.setFG(b + 1, a, "air"), this.applyBlockState(b + 1, a, new BlockState())) : "piston1" == HxOverrides.substr(this.world.getFG(b, a - 1), -7, 7) && (this.world.setFG(b, a - 1, "air"), this.applyBlockState(b, a - 1, new BlockState()));else if ("bed1" == g) this.world.setFG(b + 1, a, "air");else if ("bed2" == g) this.world.setFG(b - 1, a, "air");else if ("dr1" == g || "dr3" == g || "idr1" == g || "idr3" == g || "bdr1" == g || "bdr3" == g) this.world.setFG(b, a + 1, "air");else if ("dr2" == g || "dr4" == g || "idr2" == g || "idr4" == g || "bdr2" == g || "bdr4" == g) c = this.world.states, g = "blockX" + b + "Y" + (a - 1), Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g], this.world.setFG(b, a - 1, "air");
            c = this.world.states;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            c = this.world.states;
            g = l + "_2";
            Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g];
            c = this.world.states;
            g = l + "_3";
            Object.prototype.hasOwnProperty.call(c.h, g) && delete c.h[g];
            c = this.world.hasSignal;
            Object.prototype.hasOwnProperty.call(c.h, l) && delete c.h[l];
            this.updateAround(b, a, !0);
        } else this.updateAround(b, a, !1);
        d && this.reloadBlock(b, a);
        return d ? !1 : !0;
    },
    createBlockStateObject: function (b, a) {
        return BlockState.fromBlock(b, a, this.world);
    },
    applyBlockState: function (b, a, c) {
        BlockState.apply(b, a, this.world, c);
    },
    reloadBlock: function (b, a) {
        null != this.world.getBlock(b, a) && this.world.getBlock(b, a).reload();
        return !0;
    },
    updateAround: function (b, a, c) {
        if (Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + b + "Y" + a) && null == BlockData.get(this.world.getFG(b, a), "liquid")) {
            var d = this.world.water,
                f = "blockX" + b + "Y" + a;
            Object.prototype.hasOwnProperty.call(d.h, f) && delete d.h[f];
        }
        1 == c && this.abortRedstoneTorchesAround(b, a);
        this.removeFiresAround(b, a);
        null != this.world.getBlock(b, a + 1, !1) && this.world.getBlock(b, a + 1).inter();
        null != this.world.getBlock(b, a - 1, !1) && this.world.getBlock(b, a - 1).inter();
        null != this.world.getBlock(b + 1, a, !1) && this.world.getBlock(b + 1, a).inter();
        null != this.world.getBlock(b - 1, a, !1) && this.world.getBlock(b - 1, a).inter();
    },
    abortRedstoneTorchesAround: function (b, a) {
        null != this.world.getBlock(b, a + 1, !1) && this.world.getBlock(b, a + 1).abortSignalz();
        null != this.world.getBlock(b, a - 1, !1) && this.world.getBlock(b, a - 1).abortSignalz();
        null != this.world.getBlock(b + 1, a, !1) && this.world.getBlock(b + 1, a).abortSignalz();
        null != this.world.getBlock(b - 1, a, !1) && this.world.getBlock(b - 1, a).abortSignalz();
    },
    pushBlock: function (b, a, c, d, f, l, p, Q) {
        null == Q && (Q = !1);
        null == p && (p = 12);
        var B = 0,
            n = Object.create(null),
            m = Object.create(null);
        m["blockX" + b + "Y" + a] = new lemongine.Point(b, a);
        for (var ka = 1, T = new lemongine.Point(); 0 < ka;) {
            for (var x = Object.keys(m), t = x.length; 0 < t;) {
                x = m[x[0]];
                T.x = x.x;
                T.y = x.y;
                break;
            }
            x = "blockX" + T.x + "Y" + T.y;
            Object.prototype.hasOwnProperty.call(m, x) && delete m[x];
            --ka;
            if (T.x != f || T.y != l) if (x = this.world.getFG(T.x, T.y), "air" != x && 1 != BlockData.get(x, "pistonDrop")) {
                if (1 == BlockData.get(x, "pistonDontPush")) return !1;
                ++B;
                if (!(B > p)) {
                    n["blockX" + T.x + "Y" + T.y] = new lemongine.Point(T.x, T.y);
                    if (!Object.prototype.hasOwnProperty.call(m, "blockX" + (T.x + c) + "Y" + (T.y + d)) && !Object.prototype.hasOwnProperty.call(n, "blockX" + (T.x + c) + "Y" + (T.y + d))) {
                        if (T.x + c == f && T.y + d == l) return !1;
                        ++ka;
                        m["blockX" + (T.x + c) + "Y" + (T.y + d)] = new lemongine.Point(T.x + c, T.y + d);
                    }
                    "slimeb" == x && (-1 == c || Object.prototype.hasOwnProperty.call(m, "blockX" + (T.x - 1) + "Y" + T.y) || Object.prototype.hasOwnProperty.call(n, "blockX" + (T.x - 1) + "Y" + T.y) || 1 == BlockData.get(this.world.getFG(T.x - 1, T.y), "pistonDontPush") || T.x - 1 == f && T.y == l || (++ka, m["blockX" + (T.x - 1) + "Y" + T.y] = new lemongine.Point(T.x - 1, T.y)), 1 == c || Object.prototype.hasOwnProperty.call(m, "blockX" + (T.x + 1) + "Y" + T.y) || Object.prototype.hasOwnProperty.call(n, "blockX" + (T.x + 1) + "Y" + T.y) || 1 == BlockData.get(this.world.getFG(T.x + 1, T.y), "pistonDontPush") || T.x + 1 == f && T.y == l || (++ka, m["blockX" + (T.x + 1) + "Y" + T.y] = new lemongine.Point(T.x + 1, T.y)), -1 == d || Object.prototype.hasOwnProperty.call(m, "blockX" + T.x + "Y" + (T.y - 1)) || Object.prototype.hasOwnProperty.call(n, "blockX" + T.x + "Y" + (T.y - 1)) || 1 == BlockData.get(this.world.getFG(T.x, T.y - 1), "pistonDontPush") || T.x == f && T.y - 1 == l || (++ka, m["blockX" + T.x + "Y" + (T.y - 1)] = new lemongine.Point(T.x, T.y - 1)), 1 == d || Object.prototype.hasOwnProperty.call(m, "blockX" + T.x + "Y" + (T.y + 1)) || Object.prototype.hasOwnProperty.call(n, "blockX" + T.x + "Y" + (T.y + 1)) || 1 == BlockData.get(this.world.getFG(T.x, T.y + 1), "pistonDontPush") || T.x == f && T.y + 1 == l || (++ka, m["blockX" + T.x + "Y" + (T.y + 1)] = new lemongine.Point(T.x, T.y + 1)));
                }
            }
        }
        if (B > p) return !1;
        p = Object.create(null);
        B = Object.keys(n);
        m = B.length;
        for (ka = 0; ka < m;) l = B[ka++], T = this.createBlockStateObject(n[l].x | 0, n[l].y | 0), T.hasSignal = null, f = new haxe.ds.StringMap(), f.h.x = n[l].x, f.h.y = n[l].y, x = this.world.getFG(n[l].x, n[l].y), f.h.fg = x, f.h.state = T, p[l] = Game.makeDynamicMap(f), this.applyBlockState(p[l].h.x, p[l].h.y, new BlockState()), 1 == this.requestRemove(p[l].h.x, p[l].h.y, !0, !1) && this.world.setFG(p[l].h.x, p[l].h.y, "air");
        B = Object.keys(n);
        m = B.length;
        for (ka = 0; ka < m;) l = B[ka++], this.mineBlock(p[l].h.x + c | 0, p[l].h.y + d | 0, !0, !1), this.applyBlockState(p[l].h.x + c | 0, p[l].h.y + d | 0, p[l].h.state), this.world.setFG(p[l].h.x + c | 0, p[l].h.y + d | 0, p[l].h.fg);
        Q && (n["blockX" + (b - c) + "Y" + (a - d)] = new lemongine.Point(b - c, a - d));
        b = Object.keys(this.world.mobs.h);
        a = b.length;
        for (Q = 0; Q < a;) l = b[Q++], null != n["blockX" + Math.floor(this.world.mobs.h[l].h.x / 1 - c) + "Y" + -Math.floor(this.world.mobs.h[l].h.y / 1 + d)] ? ("slimeb" == this.world.getFG(Math.floor(this.world.mobs.h[l].h.x / 1), -Math.floor(this.world.mobs.h[l].h.y / 1)) && (f = this.world.mobs.h[l], f.h.speedX += Game.migrateSpeed(30 * c), f = this.world.mobs.h[l], f.h.speedY += Game.migrateSpeed(30 * d), f = this.world.mobs.h[l], f.h.y -= 30 * d / 2 / 30), f = this.world.mobs.h[l], f.h.x += c, f = this.world.mobs.h[l], f.h.y -= d) : null != this.world.mobData.h[this.world.mobs.h[l].h.type] && 2 == this.world.mobData.h[this.world.mobs.h[l].h.type].h.sizeCategory && null != n["blockX" + Math.floor(this.world.mobs.h[l].h.x / 1 - c) + "Y" + (-Math.floor(this.world.mobs.h[l].h.y / 1 + d) + 1)] && ("slimeb" == this.world.getFG(Math.floor(this.world.mobs.h[l].h.x / 1), -Math.floor(this.world.mobs.h[l].h.y / 1) + 1) && (f = this.world.mobs.h[l], f.h.speedX += Game.migrateSpeed(30 * c), f = this.world.mobs.h[l], f.h.speedY += Game.migrateSpeed(30 * d), f = this.world.mobs.h[l], f.h.y -= 30 * d / 2 / 30), f = this.world.mobs.h[l], f.h.x += c, f = this.world.mobs.h[l], f.h.y -= d);
        b = Object.keys(this.world.carts.h);
        a = b.length;
        for (Q = 0; Q < a;) l = b[Q++], null != n["blockX" + Math.floor(this.world.carts.h[l].h.x / 1 - c) + "Y" + Math.floor(-(this.world.carts.h[l].h.y - .26666666666666666) - d)] && ("slimeb" == this.world.getFG(Math.floor(this.world.carts.h[l].h.x / 1), Math.floor(-(this.world.carts.h[l].h.y - .26666666666666666))) && (f = this.world.carts.h[l], f.h.speedX += Game.migrateSpeed(2 * c / 3), f = this.world.carts.h[l], f.h.speedY -= Game.migrateSpeed(2 * d / 3), f = this.world.carts.h[l], f.h.y -= 10 * d / 2 / 30), f = this.world.carts.h[l], f.h.x += c, f = this.world.carts.h[l], f.h.y -= d, f = this.world.carts.h[l], f.h.speedX += Game.migrateSpeed(3 * c), f = this.world.carts.h[l], f.h.speedY -= Game.migrateSpeed(3 * d));
        b = Object.keys(this.world.drops.h);
        a = b.length;
        for (Q = 0; Q < a;) f = b[Q++], Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(this.world.drops.h[f][0] / 1 - c) + "Y" + Math.floor(-this.world.drops.h[f][1] - d)) && (Object.prototype.hasOwnProperty.call(this.world.entities.h, f) ? (f = this.world.entities.h[f], "slimeb" == this.world.getFG(Math.floor(f.get_x() / 1), Math.floor(-f.get_y())) && (f.speedX += Game.migrateSpeed(c), f.speedY -= Game.migrateSpeed(d), f.set_y(f.get_y() - d / 2)), f.set_x(f.get_x() + c), f.set_y(f.get_y() - d), f.speedX += 5 * c, f.speedY -= 5 * d) : (Game.makeDynamicArray(this.world.drops.h[f])[0] += c, Game.makeDynamicArray(this.world.drops.h[f])[1] -= d));
        l = this.world.fallingBlocks.h;
        b = Object.keys(l);
        a = b.length;
        for (Q = 0; Q < a;) f = l[b[Q++]], Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(f[2] / 1 - c) + "Y" + Math.floor(-f[3] - d)) && ("slimeb" == this.world.getFG(Math.floor(f[2] / 1), Math.floor(-f[3])) && (f[4] += 20 * c, f[5] -= 20 * d), f[2] += c, f[3] -= d, f[4] += 3 * c, f[5] -= 3 * d);
        a = Object.keys(this.world.arrows.h);
        Q = a.length;
        for (f = 0; f < Q;) l = this.world.arrows.h[a[f++]], Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(l.h.x / 1 - .1 * c) + "Y" + Math.floor(-l.h.y + .1 * d)) ? "slimeb" == this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + c), Math.floor(-l.h.y + .1 * d + d)) && 1 == BlockData.get(this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + 2 * c), Math.floor(-l.h.y + .1 * d + 2 * d)), "walkThroughBlock") ? (b = l.h.speedX + Game.migrateSpeed((10 * c + (2 * Math.random() - 1)) / 30), l.h.speedX = b, b = l.h.speedY - Game.migrateSpeed((10 * d + (2 * Math.random() - 1)) / 30), l.h.speedY = b, l.h.x += c, l.h.y -= d) : 0 == l.h.speedX && 0 == l.h.speedY && null == l.h.stuckIn && (l.h.x += c, l.h.y -= d) : Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(l.h.x / 1 - c) + "Y" + Math.floor(-l.h.y - d + .1 * d)) && "slimeb" == this.world.getFG(Math.floor(l.h.x / 1 - .1 * c), Math.floor(-l.h.y + .1 * d)) && 1 == BlockData.get(this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + c), Math.floor(-l.h.y + d + .1 * d)), "walkThroughBlock") && (b = l.h.speedX + Game.migrateSpeed((10 * c + (2 * Math.random() - 1)) / 30), l.h.speedX = b, b = l.h.speedY - Game.migrateSpeed((10 * d + (2 * Math.random() - 1)) / 30), l.h.speedY = b, l.h.x += c, l.h.y -= d);
        a = Object.keys(this.world.spears.h);
        Q = a.length;
        for (f = 0; f < Q;) l = this.world.spears.h[a[f++]], Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(l.h.x / 1 - .1 * c) + "Y" + Math.floor(-l.h.y + .1 * d)) ? "slimeb" == this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + c), Math.floor(-l.h.y + .1 * d + d)) && 1 == BlockData.get(this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + 2 * c), Math.floor(-l.h.y + .1 * d + 2 * d)), "walkThroughBlock") ? (b = l.h.speedX + Game.migrateSpeed((10 * c + (2 * Math.random() - 1)) / 30), l.h.speedX = b, b = l.h.speedY - Game.migrateSpeed((10 * d + (2 * Math.random() - 1)) / 30), l.h.speedY = b, l.h.x += c, l.h.y -= d) : 0 == l.h.speedX && 0 == l.h.speedY && null == l.h.stuckIn && (l.h.x += c, l.h.y -= d) : Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(l.h.x / 1 - c) + "Y" + Math.floor(-l.h.y - d + .1 * d)) && "slimeb" == this.world.getFG(Math.floor(l.h.x / 1 - .1 * c), Math.floor(-l.h.y + .1 * d)) && 1 == BlockData.get(this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + c), Math.floor(-l.h.y + d + .1 * d)), "walkThroughBlock") && (b = l.h.speedX + Game.migrateSpeed((10 * c + (2 * Math.random() - 1)) / 30), l.h.speedX = b, b = l.h.speedY - Game.migrateSpeed((10 * d + (2 * Math.random() - 1)) / 30), l.h.speedY = b, l.h.x += c, l.h.y -= d);
        a = Object.keys(this.world.shurikens.h);
        Q = a.length;
        for (f = 0; f < Q;) l = this.world.shurikens.h[a[f++]], Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(l.h.x / 1 - .1 * c) + "Y" + Math.floor(-l.h.y + .1 * d)) ? "slimeb" == this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + c), Math.floor(-l.h.y + .1 * d + d)) && 1 == BlockData.get(this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + 2 * c), Math.floor(-l.h.y + .1 * d + 2 * d)), "walkThroughBlock") ? (b = l.h.speedX + Game.migrateSpeed((10 * c + (2 * Math.random() - 1)) / 30), l.h.speedX = b, b = l.h.speedY - Game.migrateSpeed((10 * d + (2 * Math.random() - 1)) / 30), l.h.speedY = b, l.h.x += c, l.h.y -= d) : 0 == l.h.speedX && 0 == l.h.speedY && null == l.h.stuckIn && (l.h.x += c, l.h.y -= d) : Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(l.h.x / 1 - c) + "Y" + Math.floor(-l.h.y - d + .1 * d)) && "slimeb" == this.world.getFG(Math.floor(l.h.x / 1 - .1 * c), Math.floor(-l.h.y + .1 * d)) && 1 == BlockData.get(this.world.getFG(Math.floor(l.h.x / 1 - .1 * c + c), Math.floor(-l.h.y + d + .1 * d)), "walkThroughBlock") && (b = l.h.speedX + Game.migrateSpeed((10 * c + (2 * Math.random() - 1)) / 30), l.h.speedX = b, b = l.h.speedY - Game.migrateSpeed((10 * d + (2 * Math.random() - 1)) / 30), l.h.speedY = b, l.h.x += c, l.h.y -= d);
        3 != this.world.gamemode && (Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(this.world.worldX / 1 - c) + "Y" + -Math.floor(this.world.worldY / 1 + d)) ? ("slimeb" == this.world.getFG(Math.floor(this.world.worldX / 1), -Math.floor(this.world.worldY / 1)) && (this.world.xSpeed -= Game.migrateSpeed(30 * c), this.world.ySpeed += Game.migrateSpeed(30 * d), this.world.worldY -= 30 * d / 2 / 30), this.world.worldX += c, this.world.worldY -= d, this.resetCamera()) : Object.prototype.hasOwnProperty.call(n, "blockX" + Math.floor(this.world.worldX / 1 - c) + "Y" + (-Math.floor(this.world.worldY / 1 + d) + 1)) && ("slimeb" == this.world.getFG(Math.floor(this.world.worldX / 1), -Math.floor(this.world.worldY / 1) + 1) && (this.world.xSpeed -= Game.migrateSpeed(30 * c), this.world.ySpeed += Game.migrateSpeed(30 * d), this.world.worldY -= 30 * d / 2 / 30), this.world.worldX += c, this.world.worldY -= d, this.resetCamera()));
        return !0;
    },
    onKeyDown: function (b) {
        1 == Main.Instance.keyDown(b) && (27 == b && this.openPauseMenu(), 0 == this.inventario.currentFrame && 1 == this.blackScreen.currentFrame && (b == GlobalSave.intToKey.h[GlobalSave.keyBindings.h.gui.h.id] && (GlobalSave.hideGUI = !GlobalSave.hideGUI, Main.Instance.keyPreventDefault()), b == GlobalSave.intToKey.h[GlobalSave.keyBindings.h.pick.h.id] && (this.mMC(), Main.Instance.keyPreventDefault()), b == GlobalSave.intToKey.h[GlobalSave.keyBindings.h.screenshot.h.id] && (this.takeScreenshot = !0, Main.Instance.keyPreventDefault()), 49 <= b && 59 >= b && this.world.selectedInventoryItem != b - 49 && (this.requestSound("tick", 0, 0), this.world.set_selectedInventoryItem(b - 49), this.updateSelectedInventoryItemStuff(), this.currentlyMining = "", this.currentlyMiningBlock = [-1E3, -1E3])));
    },
    renderHUD: function () {
        GlobalSave.hideGUI || (this.renderHotbar(), this.renderItemMessage(), GlobalSave.touchControls && 0 == this.inventario.currentFrame && this.renderTouchControls());
    },
    isMouseOverUI: function () {
        return this.isMouseOverHotbar() ? !0 : !1;
    },
    isMouseOverHotbar: function () {
        return this.hotbarBounds.containsPoint(Main.Instance.mouse);
    },
    isMouseOverInventoryButton: function () {
        return this.inventoryButtonBounds.containsPoint(Main.Instance.mouse);
    },
    renderTouchControls: function () {
        null == this.touchControlsEntity && (this.touchControlsEntity = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("ui")), this.touchControlsEntity.add9Slice(new lemongine.Rectangle(), new lemongine.Rectangle(), new lemongine.Rectangle()), this.touchControlsEntity.layer = 15, this.touchControlsEntity.isTransparent = !0);
        this.touchControlsMatrix.reset().translate(-36, -51).scale2D(this.touchScale).translate(this.touchPadPosition.x, this.touchPadPosition.y);
        this.touchControlsEntity.updateQuad(0, null, new lemongine.Point(128, 68 + (this.touchPad1Pressed ? 51 : 0)), new lemongine.Point(72, 51), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 72, 51), this.touchControlsMatrix));
        this.touchControlsMatrix.reset().translate(-36, -51).rotate2D(-Math.PI / 2).scale2D(this.touchScale).translate(this.touchPadPosition.x, this.touchPadPosition.y);
        this.touchControlsEntity.updateQuad(1, null, new lemongine.Point(128, 68 + (this.touchPad2Pressed ? 51 : 0)), new lemongine.Point(72, 51), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 72, 51), this.touchControlsMatrix));
        this.touchControlsMatrix.reset().translate(-36, -51).rotate2D(-Math.PI).scale2D(this.touchScale).translate(this.touchPadPosition.x, this.touchPadPosition.y);
        this.touchControlsEntity.updateQuad(2, null, new lemongine.Point(128, 68 + (this.touchPad3Pressed ? 51 : 0)), new lemongine.Point(72, 51), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 72, 51), this.touchControlsMatrix));
        this.touchControlsMatrix.reset().translate(-36, -51).rotate2D(3 * -Math.PI / 2).scale2D(this.touchScale).translate(this.touchPadPosition.x, this.touchPadPosition.y);
        this.touchControlsEntity.updateQuad(3, null, new lemongine.Point(128, 68 + (this.touchPad4Pressed ? 51 : 0)), new lemongine.Point(72, 51), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 72, 51), this.touchControlsMatrix));
        var b = this.touchButtonPressed1 ? 34 : 0,
            a = 100 * this.touchScale,
            c = 34 * this.touchScale;
        this.touchControlsEntity.updateQuad(4, new lemongine.Vector3(this.touchButtonPosition1.x, this.touchButtonPosition1.y, 0), new lemongine.Point(128, b), new lemongine.Point(100, 34), new lemongine.Point(a, c));
        b = TextCache.get("touchControl1", "Commands", new lemongine.Point(this.touchButtonPosition1.x + 50 * this.touchScale, this.touchButtonPosition1.y + 17 * this.touchScale), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER);
        b.layer = 16;
        this.scene.draw(b);
        b = this.touchButtonPressed2 ? 34 : 0;
        a = 100 * this.touchScale;
        c = 34 * this.touchScale;
        this.touchControlsEntity.updateQuad(5, new lemongine.Vector3(this.touchButtonPosition2.x, this.touchButtonPosition2.y, 0), new lemongine.Point(128, b), new lemongine.Point(100, 34), new lemongine.Point(a, c));
        b = TextCache.get("touchControl2", "Drop", new lemongine.Point(this.touchButtonPosition2.x + 50 * this.touchScale, this.touchButtonPosition2.y + 17 * this.touchScale), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER);
        b.layer = 16;
        this.scene.draw(b);
        b = this.touchButtonPressed3 ? 34 : 0;
        a = 100 * this.touchScale;
        c = 34 * this.touchScale;
        this.touchControlsEntity.updateQuad(6, new lemongine.Vector3(this.touchButtonPosition3.x, this.touchButtonPosition3.y, 0), new lemongine.Point(128, b), new lemongine.Point(100, 34), new lemongine.Point(a, c));
        b = TextCache.get("touchControl3", "Inventory", new lemongine.Point(this.touchButtonPosition3.x + 50 * this.touchScale, this.touchButtonPosition3.y + 17 * this.touchScale), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER);
        b.layer = 16;
        this.scene.draw(b);
        this.scene.draw(this.touchControlsEntity);
    },
    initHUD: function () {
        this.hudEntity = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("ui"), null, lemongine.shader.BasicTexture.getShader());
        this.hudEntity.isTransparent = !0;
        this.hudEntity.layer = 7;
        var b = lemongine.AssetManager.getImage("hotbar"),
            a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
            c = new haxe.ds.StringMap(),
            d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.hotbarEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.updateHotbarBounds();
        this.hotbarEntity.isTransparent = !0;
        this.hotbarEntity.layer = 7;
        b = Textures.blockTextures;
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.hotbarItemEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.hotbarItemEntity.transform.scale2D(17.5067175);
        this.hotbarItemEntity.isTransparent = !0;
        this.hotbarItemEntity.layer = 9;
        this.hotbarNumberEntity = new lemongine.QuadPoolEntity(this.itemNumberTexture);
        this.hotbarNumberEntity.isTransparent = !0;
        this.hotbarNumberEntity.layer = 10;
        b = lemongine.AssetManager.getImage("ui");
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.hotbarSlotEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.hotbarSlotEntity.isTransparent = !0;
        this.hotbarSlotEntity.layer = 8;
        for (c = 0; 9 > c;) b = c++, this.hotbarSlots[b] = new ItemSlot(this.hotbarSlotEntity, this.hotbarItemEntity, this.hotbarNumberEntity, this.scene.get_width() / 2 + 1.649 * (-84 + 20 * b), this.scene.get_height() - 2 - 16.490000000000002, 1.6716900000000001, this, this.world, this.world.inventoryItem(b)), this.hotbarSlots[b].number = b, this.hotbarSlots[b].mini = !0, this.world.selectedInventoryItem == b && this.hotbarSlots[b].set_hovering(!0);
    },
    updateHotbarBounds: function () {
        this.hotbarEntity.updateQuad(0, new lemongine.Vector3(), new lemongine.Point(0, 0), new lemongine.Point(180, 22));
        this.hotbarEntity.updateQuad(1, new lemongine.Vector3(180), new lemongine.Point(180, 0), new lemongine.Point(9, 22));
        this.hotbarEntity.transform.reset().translate(-lemongine.AssetManager.getImage("hotbar").width / 2, -lemongine.AssetManager.getImage("hotbar").height).scale2D(1.649).translate(this.scene.get_width() / 2, this.scene.get_height());
        this.hotbarBounds = new lemongine.Rectangle(this.scene.get_width() / 2 - 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").width) / 2, this.scene.get_height() - 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").height), 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").width), 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").height));
        this.inventoryButtonBounds = new lemongine.Rectangle(this.scene.get_width() / 2 - 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").width) / 2 + 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").width) - 14, this.scene.get_height() - 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").height), 14, 1.649 * G.toFloat(lemongine.AssetManager.getImage("hotbar").height));
        for (var b = 0; 9 > b;) {
            var a = b++;
            if (null == this.hotbarSlots[a]) break;
            this.hotbarSlots[a].set_x(this.scene.get_width() / 2 + 1.649 * (-84 + 20 * a));
            this.hotbarSlots[a].set_y(this.scene.get_height() - 2 - 16.490000000000002);
        }
    },
    renderHotbar: function () {
        null == this.hotbarEntity && this.initHUD();
        var b = !1;
        if (0 == this.inventario.currentFrame && this.isMouseOverHotbar()) {
            for (var a = 0; 9 > a && !this.hotbarSlots[a++].checkInteraction(););
            this.isMouseOverInventoryButton() && (b = !0, Main.Instance.cursor = lime.ui.MouseCursor.POINTER, 1 == Main.Instance.mouseUp() && this.openInventario());
        }
        if (this.wasMouseOverInventoryButton != b) {
            if (b) {
                var c = this.hotbarEntity,
                    d = new lemongine.Vector3(180),
                    f = new lemongine.Point(180, 0),
                    l = new lemongine.Point(9, 22);
                a = new haxe.ds.StringMap();
                var p = lemongine.Mathz.repeatArray([.9, .9, .9, 1], 6);
                a.h.color = p;
                p = lemongine.Mathz.repeatArray([.1, .1, .1, 0], 6);
            } else c = this.hotbarEntity, d = new lemongine.Vector3(180), f = new lemongine.Point(180, 0), l = new lemongine.Point(9, 22), a = new haxe.ds.StringMap(), p = lemongine.Mathz.repeatArray([1], 24), a.h.color = p, p = lemongine.Mathz.repeatArray([0], 24);
            a.h.colorOffset = p;
            c.updateQuad(1, d, f, l, null, null, null, a);
            this.wasMouseOverInventoryButton = b;
        }
        this.hudEntity.clearPool(!1);
        this.renderXPBar();
        if (0 == this.world.gamemode || 2 == this.world.gamemode) this.renderHealthBar(), this.renderHungerBar(), this.renderArmorBar(), this.renderAirBar();
        this.hudEntity.resetUnusedQuads();
        this.scene.draw(this.hudEntity);
        0 < Math.floor(this.world.experience / 100) && (b = TextCache.get("xpValueShadow", Std.string(Math.floor(this.world.experience / 100)), new lemongine.Point(this.hotbarBounds.get_centerX(), this.scene.get_height() - 49 + 7.2), Fonts.get_volter(), lemongine.Color.black, 1.4, lemongine.TextAlignment.CENTER, 1.5), b.layer = 8, this.scene.draw(b), b = TextCache.get("xpValue", Std.string(Math.floor(this.world.experience / 100)), new lemongine.Point(this.hotbarBounds.get_centerX(), this.scene.get_height() - 49 + 6.2), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1), b.layer = 8, this.scene.draw(b));
        this.scene.draw(this.hotbarEntity);
        this.scene.draw(this.hotbarSlotEntity);
        this.scene.draw(this.hotbarItemEntity);
        this.scene.draw(this.hotbarNumberEntity);
    },
    renderXPBar: function () {
        for (var b = 0; 10 > b;) {
            var a = b++;
            this.hudEntity.addQuad(new lemongine.Vector3(this.hotbarBounds.get_left() + 30 * a * 1.04, this.scene.get_height() - 49, 0), new lemongine.Point(0 == a ? 0 : 9 == a ? 60 : 30, 96), new lemongine.Point(30, 10), !0, new lemongine.Point(31.200000000000003, 10.4));
            if (a / 10 < lemongine.Mathz.modulus(this.world.experience / 100, 1)) {
                var c = this.hudEntity,
                    d = this.hotbarBounds.get_left() + 30 * a * 1.04,
                    f = this.scene.get_height() - 49,
                    g = 30 * lemongine.Mathz.clamp(0, 1, 10 * lemongine.Mathz.modulus(this.world.experience / 100, 1) - a),
                    p = 30 * lemongine.Mathz.clamp(0, 1, 10 * lemongine.Mathz.modulus(this.world.experience / 100, 1) - a) * 1.04;
                c.addQuad(new lemongine.Vector3(d, f, 0), new lemongine.Point(0 == a ? 0 : 9 == a ? 60 : 30, 80), new lemongine.Point(g, 10), !0, new lemongine.Point(p, 10.4));
            }
        }
    },
    renderHealthBar: function () {
        for (var b = 0; 10 > b;) {
            var a = b++,
                c = this.hudEntity,
                d = this.hotbarBounds.get_left() + 108 * a / 9 + 4,
                f = this.scene.get_height() - 64,
                g = this.world.health / 2 > a ? (this.world.health - 1) / 2 > a ? 98 : 89 : 80,
                p = this.world.hardcore ? 9 : 0;
            c.addQuad(new lemongine.Vector3(d, f + (6 < this.world.health ? 0 : 2.8 * Math.sin(3.7 * a + 2.3 * Math.floor(this.world.tick / 4)) / (this.world.health + 1)), 0), new lemongine.Point(g, 57 + p), new lemongine.Point(9, 9), !0, new lemongine.Point(11.34, 11.34));
        }
    },
    renderHungerBar: function () {
        for (var b = 0; 10 > b;) {
            var a = b++;
            this.hudEntity.addQuad(new lemongine.Vector3(this.hotbarBounds.get_right() - 108 * a / 9 - 11, this.scene.get_height() - 64 + (300 < this.world.food ? 0 : 2.8 * Math.sin(3.7 * a + 2.3 * Math.floor(this.world.tick / 8)) / (this.world.food / 50 + 1)), 0), new lemongine.Point(this.world.food / 100 > a ? this.hasEffect("poison") ? 116 : 107 : 98, 48), new lemongine.Point(9, 9), !0, new lemongine.Point(11.34, 11.34));
        }
    },
    renderAirBar: function () {
        0 < this.popLastAirBarBubble && this.popLastAirBarBubble--;
        for (var b = 0; 10 > b;) {
            var a = b++;
            if (11 <= this.world.air) break;
            if (a >= this.world.air && (0 >= this.popLastAirBarBubble || a - 1 >= this.world.air)) break;
            var c = this.hudEntity,
                d = this.hotbarBounds.get_left() + 108 * a / 9 + 4,
                f = this.scene.get_height() - 77;
            a = a < this.world.air ? 80 : 89;
            c.addQuad(new lemongine.Vector3(d, f, 0), new lemongine.Point(a, 48), new lemongine.Point(9, 9), !0, new lemongine.Point(11.34, 11.34));
        }
        this.world.air < this.lastAirBarBubble && (this.popLastAirBarBubble = 3, 10 > this.world.air && this.requestSound("pop", 0, 0));
        this.lastAirBarBubble = this.world.air;
    },
    renderArmorBar: function () {
        var b = 0;
        if ("Array" == lemongine.Helpers.getQualifiedClassName(this.world.armors)) for (var a = 0; 4 > a;) {
            var c = a++;
            "Leather" == this.world.armors[c][0].substr(0, 7) ? b += .09 * ((BlockData.get(this.world.armors[c][0], "life") - this.world.armors[c][1]) / BlockData.get(this.world.armors[c][0], "life")) : "Gold" == this.world.armors[c][0].substr(0, 4) ? b += .14 * ((BlockData.get(this.world.armors[c][0], "life") - this.world.armors[c][1]) / BlockData.get(this.world.armors[c][0], "life")) : "Iron" == this.world.armors[c][0].substr(0, 4) ? b += .17 * ((BlockData.get(this.world.armors[c][0], "life") - this.world.armors[c][1]) / BlockData.get(this.world.armors[c][0], "life")) : "Diamond" == this.world.armors[c][0].substr(0, 7) ? b += .22 * ((BlockData.get(this.world.armors[c][0], "life") - this.world.armors[c][1]) / BlockData.get(this.world.armors[c][0], "life")) : "Dragon" == this.world.armors[c][0].substr(0, 6) && (b += .24 * ((BlockData.get(this.world.armors[c][0], "life") - this.world.armors[c][1]) / BlockData.get(this.world.armors[c][0], "life")));
        }
        if (!(0 >= Math.ceil(10 * b))) for (a = 0; 10 > a;) {
            c = a++;
            var d = this.hudEntity,
                f = this.hotbarBounds.get_right() - 108 * c / 9 - 11,
                g = this.scene.get_height() - 77;
            c = Math.ceil(10 * b) > c ? 116 : 107;
            d.addQuad(new lemongine.Vector3(f, g, 0), new lemongine.Point(c, 57), new lemongine.Point(9, 9), !0, new lemongine.Point(11.34, 11.34));
        }
    },
    initScavengerUI: function () {
        this.scavengerStartAnimationStartTime = new Date();
        this.scavengerStartAnimationEndTime = new Date(ScavengerManager.getStartTime() + 1E3 * ScavengerManager.secondsForIntro);
        this.scavengerStartAnimationEnded = this.scavengerStartAnimationStartTime.getTime() > this.scavengerStartAnimationEndTime.getTime();
        var b = Textures.blockTextures,
            a = shader.TwoTexture.getShader(shader.BlendMode.NORMAL),
            c = new haxe.ds.StringMap(),
            d = lemongine.Mathz.repeatArray([1], 6);
        c.h.texBlend = d;
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.scavengerPlayers = new EntityPool("scavengerPlayers", new QuadPoolEntity_MatrixState(b, null, a, c), 1);
        this.scavengerPlayers.entity.isTransparent = !0;
        this.scavengerPlayers.entity.layer = 0;
        this.scavengerPlayersScene = new lemongine.Scene(0, 0);
        this.scavengerPlayersScene.setup2D(this.scene.get_width(), this.scene.get_height(), lemongine.Color.clear);
        this.scavengerPlayersEntity = new lemongine.Image().fromScene(this.scavengerPlayersScene).toEntity(null, !1, !0);
        this.scavengerPlayersEntity.setUniform("color", [1, 1, 1, .5]);
        this.scavengerPlayersEntity.isTransparent = !0;
        c = this.scavengerPlayersEntity.layer = 0;
        for (b = ScavengerManager.members; c < b.length;) this.addScavengerMob(b[c++]);
        b = Textures.blockTextures;
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.scavengerStartAnimationEntity = new QuadPoolEntity_MatrixState(b, null, a, c);
        this.scavengerStartAnimationEntity.isTransparent = !0;
        b = lemongine.AssetManager.getImage("ui");
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.scavengerUIBackdropEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.scavengerUIBackdropEntity.isTransparent = !0;
        b = lemongine.AssetManager.getImage("ui");
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.scavengerUIEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.scavengerUIEntity.isTransparent = !0;
        b = lemongine.AssetManager.getImage("ui");
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.scavengerUITopEntity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.scavengerUITopEntity.isTransparent = !0;
        this.scavengerUITopEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
        b = Textures.blockTextures;
        a = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
        c = new haxe.ds.StringMap();
        d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.scavengerItemsEntity = new QuadPoolEntity_MatrixState(b, null, a, c);
        this.scavengerItemsEntity.isTransparent = !0;
        this.scavengerUIBackdropEntity.layer = 11;
        this.scavengerStartAnimationEntity.layer = 11;
        this.scavengerUIEntity.layer = 13;
        this.scavengerItemsEntity.layer = 13;
        this.scavengerUITopEntity.layer = 14;
        this.scavengerItems = [];
        c = 0;
        for (b = ScavengerManager.items.length; c < b;) a = ScavengerManager.items[c++], null != a && this.scavengerItems.push(new Item(this.scavengerItemsEntity, 0, 0, this, a.item));
    },
    addScavengerMob: function (b) {
        b != ScavengerManager.userMember && (b.entity = new entities.Entity_Mob_Scavenger(b.id, this, this.world));
    },
    getScavengerItemPosition: function (b, a, c) {
        null == c && (c = 0);
        c = a ? this.scene.get_width() / 2 + 28 * (b - (ScavengerManager.items.length - 1) / 2) : 12 - 5 * lemongine.Mathz.interpolateSmootherstep(lemongine.Mathz.normalizeFloat(c, 1.5, 2, !0)) - 28 * (this.getScavengerItemScale(b) - 1);
        if (!this.scavengerStartAnimationEnded) {
            if (1.5 > this.secondsSinceAnimationStart - b / ScavengerManager.items.length * 3) return -100;
            b > this.scavengerLastItemRevealed && (this.scavengerLastItemRevealed = b, null == ScavengerManager.items[b] ? lemongine.AssetManager.getSound("scavengerStartItemSecret_" + (5 * Math.random() | 0)).play(GlobalSave.soundVol / 100, 0, 0, 0, 1, !0, .5 * (-.1 + Math.pow(1.05946, b))) : lemongine.AssetManager.getSound("scavengerStartItem_" + (5 * Math.random() | 0)).play(GlobalSave.soundVol / 100, 0, 0, 0, 1, !0, -.1 + Math.pow(1.05946, b)));
            a = a ? this.scene.get_width() / 2 + 50 * (b - (ScavengerManager.items.length - 1) / 2) + .5 * Math.sin(3 * this.secondsSinceAnimationStart + 1.3 * b) : this.scene.get_height() / 2 + 2 * Math.cos(2 * this.secondsSinceAnimationStart + 2.3 * b);
            b = lemongine.Mathz.interpolateExitSmoother(lemongine.Mathz.normalizeFloat(this.secondsUntilAnimationEnd + b / ScavengerManager.items.length, 2, 1));
            return (c - a) * b + a;
        }
        return c;
    },
    getScavengerItemScale: function (b) {
        return this.scavengerStartAnimationEnded ? 1 : 5.5 > this.secondsSinceAnimationStart ? .625 * lemongine.Mathz.interpolateEnterSmoother(lemongine.Mathz.normalizeFloat(this.secondsSinceAnimationStart - b / ScavengerManager.items.length * 3, 1.5, 2)) + 1 : 2 > this.secondsUntilAnimationEnd ? -.625 * lemongine.Mathz.interpolateExitSmoother(lemongine.Mathz.normalizeFloat(this.secondsUntilAnimationEnd + b / ScavengerManager.items.length, 2, 1)) + 1.625 : 1.625;
    },
    revealFinalItems: function () {
        for (var b = this.scavengerItems.length, a = ScavengerManager.items.length; b < a;) {
            var c = ScavengerManager.items[b++];
            null != c && this.scavengerItems.push(new Item(this.scavengerItemsEntity, 0, 0, this, c.item));
        }
    },
    checkForScavengerItem: function (b) {
        0 != this.isScavenger && (Game.isEmptyItem(b) || ScavengerManager.packetToServer_foundItem(b));
    },
    renderScavengerIntroSequence: function () {
        var b = new lemongine.Matrix4(),
            a = new lemongine.Point();
        this.secondsSinceAnimationStart = (new Date().getTime() - this.scavengerStartAnimationStartTime.getTime()) / 1E3;
        this.secondsUntilAnimationEnd = (this.scavengerStartAnimationEndTime.getTime() - new Date().getTime()) / 1E3;
        var c = this.scavengerStartAnimationEntity;
        var d = new lemongine.Vector3(),
            f = new lemongine.Point(),
            l = new lemongine.Point(1, 1),
            p = new lemongine.Point(this.scene.get_width(), this.scene.get_height()),
            h = new haxe.ds.StringMap(),
            B = lemongine.Mathz.repeatArray([0], 24);
        h.h.color = B;
        B = lemongine.Mathz.repeatArray([0, 0, 0, lemongine.Mathz.interpolateSine(lemongine.Mathz.clamp(lemongine.Mathz.clamp(0, .5, this.secondsUntilAnimationEnd / 2), 1, 2 - this.secondsSinceAnimationStart / 2))], 6);
        h.h.colorOffset = B;
        c.updateQuad(0, d, f, l, p, null, null, h);
        for (h = 0; 15 > h;) for (d = h++, f = 0; 6 > f;) l = f++, b.reset(), 0 == l || 5 == l ? (c = Textures.getTexture("wood"), b.rotate2D(Math.PI / 2)) : c = Textures.getTexture("stone"), a.set(this.scene.get_width() / 2 + 40 * (d - 7.5 + .5), this.scene.get_height() / 2 + 40 * (l - 3 + .5)), 4 > this.secondsSinceAnimationStart && b.scale2D(lemongine.Mathz.interpolateEnterSmoother(lemongine.Mathz.interpolateEnterSmoother(4 * (this.secondsSinceAnimationStart - .5) - 3 * lemongine.Mathz.distance((a.x - this.scene.get_width() / 2) / this.scene.get_height(), (a.y - this.scene.get_height() / 2) / this.scene.get_height())))), 3.5 > this.secondsUntilAnimationEnd && b.scale2D(lemongine.Mathz.interpolateEnterSmoother(4 * (this.secondsUntilAnimationEnd - .5) - 3 * lemongine.Mathz.distance((a.x - this.scene.get_width() / 2) / this.scene.get_height(), (a.y - this.scene.get_height() / 2) / this.scene.get_height()))), b.translate(a.x, a.y), this.scavengerStartAnimationEntity.updateQuad(1 + d + 15 * l, null, new lemongine.Point(c.x, c.y), new lemongine.Point(c.width, c.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(-20, -20, 40, 40), b));
        1 < this.secondsSinceAnimationStart && 1.2 < this.secondsUntilAnimationEnd && (b = TextCache.get("scavengerAnimationHeader1Shadow", "Find or create these items:", null, Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER), a = 1.5 + .5 * lemongine.Mathz.interpolateEnterSmoother(2 * (this.secondsSinceAnimationStart - 1)) - lemongine.Mathz.interpolateExitSmoother(1 + 2 * (1.2 - this.secondsUntilAnimationEnd)), b.transform.reset().translate(0, -5).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 48), b.layer = 13, this.scene.draw(b), b = TextCache.get("scavengerAnimationHeader1", "Find or create these items:", null, Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), b.transform.reset().translate(0, -6).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 48), b.layer = 14, this.scene.draw(b));
        5.5 < this.secondsSinceAnimationStart && 1 < this.secondsUntilAnimationEnd && (h = Math.floor(ScavengerManager.secondsForGameplay / 60), a = 2.5 + .5 * lemongine.Mathz.interpolateEnterSmoother(2 * (this.secondsSinceAnimationStart - 5.5)) - lemongine.Mathz.interpolateExitSmoother(1 + 2 * (1 - this.secondsUntilAnimationEnd)), d = TextCache.get("scavengerAnimationHeader2Shadow", "You have " + h + " minutes.", null, Fonts.get_volter(), lemongine.Color.black, 3, lemongine.TextAlignment.CENTER), d.transform.reset().translate(0, -4).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 + 50), d.layer = 13, this.scene.draw(d), b = TextCache.get("scavengerAnimationHeader2-1", "You have ", null, Fonts.get_volter(), lemongine.Color.white, 3, lemongine.TextAlignment.LEFT), c = d.calculatedWidth / 2, b.transform.reset().translate(-Math.floor(c), -5).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 + 50), b.layer = 14, this.scene.draw(b), c = b.calculatedWidth, b = TextCache.get("scavengerAnimationHeader2-2", h + " minutes", null, Fonts.get_volter(), new lemongine.Color(-41984), 3, lemongine.TextAlignment.LEFT), b.transform.reset().translate(-Math.floor(d.calculatedWidth / 2) + c, -5).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 + 50), b.layer = 15, this.scene.draw(b), c += b.calculatedWidth, b = TextCache.get("scavengerAnimationHeader2-3", ".", null, Fonts.get_volter(), lemongine.Color.white, 3, lemongine.TextAlignment.LEFT), b.transform.reset().translate(-Math.floor(d.calculatedWidth / 2) + c, -5).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 + 50), b.layer = 16, this.scene.draw(b));
        3 > this.secondsUntilAnimationEnd && (c = Std.string(Math.floor(Math.max(1, this.secondsUntilAnimationEnd + 1))), b = TextCache.get("scavengerAnimationCountdownShadow", c, null, Fonts.get_volter(), lemongine.Color.black, 1, lemongine.TextAlignment.CENTER), a = 5 + 10 * (1 - lemongine.Mathz.interpolateEnterSmoother(this.secondsUntilAnimationEnd / 3)), b.transform.reset().translate(0, -5).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2), b.layer = 16, this.scene.draw(b), b = TextCache.get("scavengerAnimationCountdown", c, null, Fonts.get_volter(), new lemongine.Color(-16711819), 1, lemongine.TextAlignment.CENTER), b.transform.reset().translate(0, -6).scale2D(a).translate(this.scene.get_width() / 2, this.scene.get_height() / 2), b.layer = 17, this.scene.draw(b));
        this.scavengerIntroCountdownSeconds != Math.floor(this.secondsUntilAnimationEnd + 1) && (this.scavengerIntroCountdownSeconds = Math.floor(this.secondsUntilAnimationEnd + 1), 3 >= this.scavengerIntroCountdownSeconds && 0 <= this.scavengerIntroCountdownSeconds && (0 == this.scavengerIntroCountdownSeconds ? lemongine.AssetManager.getSound("scavengerStartGo_" + (5 * Math.random() | 0)).play(GlobalSave.soundVol / 100) : lemongine.AssetManager.getSound("scavengerStartCountdown_" + (5 * Math.random() | 0)).play((5 - this.scavengerIntroCountdownSeconds) / 5 * GlobalSave.soundVol / 100)));
        0 >= this.secondsUntilAnimationEnd && (this.scavengerStartAnimationEnded = !0);
        this.scene.draw(this.scavengerStartAnimationEntity);
    },
    renderScavengerUI: function () {
        if (null != ScavengerManager.userMember) {
            UI.drawDropdown();
            this.scavengerUIBackdropEntity.clearPool();
            var b = this.scavengerUIBackdropEntity,
                a = new lemongine.Vector3(),
                c = new lemongine.Point(),
                d = new lemongine.Point(1, 1),
                f = new lemongine.Point(this.scene.get_width(), 48),
                l = new haxe.ds.StringMap(),
                p = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
            l.h.color = p;
            p = lemongine.Mathz.repeatArray([0, 0, 0, .2], 6);
            l.h.colorOffset = p;
            b.addQuad(a, c, d, !0, f, null, null, l);
            b = this.scavengerUIBackdropEntity;
            a = new lemongine.Vector3(0, 48);
            c = new lemongine.Point();
            d = new lemongine.Point(1, 1);
            f = new lemongine.Point(this.scene.get_width(), 1);
            l = new haxe.ds.StringMap();
            p = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
            l.h.color = p;
            p = lemongine.Mathz.repeatArray([0, 0, 0, .4], 6);
            l.h.colorOffset = p;
            b.addQuad(a, c, d, !0, f, null, null, l);
            this.scavengerUIEntity.clearPool();
            this.scavengerUITopEntity.clearPool();
            var h = new lemongine.Point();
            l = 0;
            for (var B = ScavengerManager.items.length; l < B;) {
                var m = l++,
                    M = null != ScavengerManager.userMember.isItemFound[m],
                    ka = M ? (new Date().getTime() - ScavengerManager.userMember.isItemFound[m].collectionTimeClient) / 1E3 : 0;
                h.set(this.getScavengerItemPosition(m, !0, ka), this.getScavengerItemPosition(m, !1, ka));
                var T = this.getScavengerItemScale(m);
                c = T;
                1.5 > ka && (c = T * (1 + .6 * Math.pow(1 - Math.pow(2 * lemongine.Mathz.normalizeFloat(ka, .3, 1.5, !0) - 1, 2), .3)));
                b = Math.floor(28 * T);
                a = Math.floor(28 * T);
                this.scavengerUIEntity.addQuad(new lemongine.Vector3(h.x - 28 * T / 2, h.y - 28 * T / 2), new lemongine.Point(128, 222), new lemongine.Point(28, 28), !0, new lemongine.Point(b, a));
                if (null != this.scavengerItems[m]) b = ScavengerManager.items[m], this.scavengerItemsEntity.currentMatrix.reset().translate(-.5, -.5).scale2D(17.5067175 * c).translate(h.x, h.y), this.scavengerItems[m].render(), this.scavengerStartAnimationEnded && new lemongine.Rectangle(this.scene.get_width() / 2 + 28 * (m - (ScavengerManager.items.length - 1) / 2 - .5), 0, 28, 28).containsPoint(Main.Instance.mouse) && (a = "", c = RECIPE_TYPE.NONE, d = [], null != b.tooltipData && (null != b.tooltipData.t && (a = b.tooltipData.t), null != b.tooltipData.sc ? (c = RECIPE_TYPE.SMALL_CRAFTING, d = b.tooltipData.sc) : null != b.tooltipData.bc && (c = RECIPE_TYPE.BIG_CRAFTING, d = b.tooltipData.bc), null != b.tooltipData.t && (a = b.tooltipData.t)), M ? this.showBottomTooltip(this.getItemName(b.item), "Found for " + ScavengerManager.userMember.isItemFound[m].score + " points.") : this.showBottomTooltip(this.getItemName(b.item), a, c, d)), 1 == b.spawnSparkles && (b.spawnSparkles = !1, new particles.Particle_SS_Grow(h.x + 20 * Math.random() - 10, h.y + 20 * Math.random()), new particles.Particle_SS_Grow(h.x + 20 * Math.random() - 10, h.y + 20 * Math.random()), new particles.Particle_SS_Grow(h.x + 20 * Math.random() - 10, h.y + 20 * Math.random()), new particles.Particle_SS_Grow(h.x + 20 * Math.random() - 10, h.y + 20 * Math.random()));else {
                    this.scavengerStartAnimationEnded && new lemongine.Rectangle(h.x - 28 * T / 2, h.y - 28 * T / 2, 28 * T, 28 * T).containsPoint(Main.Instance.mouse) && (b = Math.ceil(Math.max(0, (ScavengerManager.getEndTime() - 1E3 * ScavengerManager.secondsFromEndToReveal - new Date().getTime()) / 1E3)), M ? this.showBottomTooltip("Secret item", "Found for " + ScavengerManager.userMember.isItemFound[m].score + " points.") : this.showBottomTooltip("Secret item", "Reveals in " + Language.shortCountdownString(b) + "."));
                    c = this.scavengerUITopEntity;
                    d = new lemongine.Vector3(h.x - 28 * T / 2, h.y - 28 * T / 2);
                    f = new lemongine.Point();
                    b = new lemongine.Point(1, 1);
                    a = new lemongine.Point(28 * T, 28 * T);
                    var x = new haxe.ds.StringMap();
                    p = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
                    x.h.color = p;
                    p = lemongine.Mathz.repeatArray([0, 0, 0, .5], 6);
                    x.h.colorOffset = p;
                    c.addQuad(d, f, b, !0, a, null, null, x);
                    f = Math.floor(12 * T);
                    x = Math.floor(16 * T);
                    this.scavengerUITopEntity.addQuad(new lemongine.Vector3(h.x - 12 * T / 2, h.y - 16 * T / 2), new lemongine.Point(66, 223), new lemongine.Point(12, 16), !0, new lemongine.Point(f, x));
                }
                if (M) {
                    if (0 == ScavengerManager.userMember.isItemFound[m].didParticleEffect) for (ScavengerManager.userMember.isItemFound[m].didParticleEffect = !0, p = 0; 12 > p;) m = p++, new particles.Particle_SS_Spark(h.x + 8 * Math.cos(m / 12 * 2 * Math.PI), h.y + 8 * Math.sin(m / 12 * 2 * Math.PI), Math.cos(m / 12 * 2 * Math.PI) * (.45 + .2 * Math.random()), Math.sin(m / 12 * 2 * Math.PI) * (.45 + .2 * Math.random()));
                    c = this.scavengerUITopEntity;
                    M = new lemongine.Vector3(h.x - 28 * T / 2, h.y - 28 * T / 2);
                    b = new lemongine.Point();
                    m = new lemongine.Point(1, 1);
                    a = new lemongine.Point(Math.floor(28 * T), Math.floor(28 * T));
                    f = new haxe.ds.StringMap();
                    d = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
                    f.h.color = d;
                    d = .5 > ka ? lemongine.Mathz.repeatArray([1, 1, 1, 1 - 2 * ka], 6) : 1.5 < ka ? lemongine.Mathz.repeatArray([0, 0, 0, .5 * lemongine.Mathz.normalizeFloat(ka, 1.5, 2, !0)], 6) : lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
                    f.h.colorOffset = d;
                    c.addQuad(M, b, m, !0, a, null, null, f);
                    T *= lemongine.Mathz.normalizeFloat(ka, 1, 1.5, !0);
                    m = Math.floor(19 * T);
                    M = Math.floor(16 * T);
                    this.scavengerUITopEntity.addQuad(new lemongine.Vector3(h.x - 19 * T / 2, h.y - 16 * T / 2 + 8 - 4 * lemongine.Mathz.normalizeFloat(ka, 1, 1.5, !0)), new lemongine.Point(156, 222), new lemongine.Point(19, 16), !0, new lemongine.Point(m, M));
                }
            }
            l = 0;
            for (B = ScavengerManager.members; l < B.length;) T = B[l], ++l, null != T.entity && T.entity.run();
            l = Main.Instance.tick;
            B = G.gt(Main.Instance.tick - ScavengerManager.lastSeenSomeone, Main.Instance.get_fps()) ? Math.floor(Main.Instance.get_fps() / 2) : 2;
            l = 0 == (G.toFloat(l) % G.toFloat(B) | 0);
            "respawn" == Main.Instance.frame && (l = !1);
            if (l) {
                B = 0;
                if (0 > this.world.ySpeed) for (l = 0; 11 > l;) if (ka = l++, this.collision(this.world.worldX + this.world.xSpeed / 30 * ka, this.world.worldY - this.world.ySpeed / 30 * ka, 0, 0, 1)) {
                    B = .5 * Math.round((this.world.worldY - this.world.ySpeed / 30 * ka) / .5);
                    break;
                }
                ScavengerManager.packetToServer_heartbeat(this.world.worldX, this.world.worldY, this.world.xSpeed, this.world.ySpeed, this.characterCurrentFrame, this.characterFrameNumber, this.characterFrameTimer, this.sneaking, this.wasSprinting, B, this.world.sceneNum, this.world.dead);
            }
            l = lemongine.Mathz.clamp(0, ScavengerManager.secondsForGameplay, (ScavengerManager.getEndTime() - new Date().getTime()) / 1E3);
            this.scavengerStartedEndSfx && -1 == ScavengerManager.getEndTime() && (l = 0);
            h = 1 - lemongine.Mathz.interpolateEnterSmoother(1 - this.secondsUntilAnimationEnd);
            ka = (1 - Math.pow(2 * Math.pow(lemongine.Mathz.modulus(l - .05, 1), 4) - 1, 4)) * lemongine.Mathz.interpolateSmootherstep(1 - lemongine.Mathz.normalizeFloat(l, 0, 11, !0));
            B = lemongine.Mathz.interpolateSmootherstep(1 - lemongine.Mathz.normalizeFloat(l, 30, 32, !0));
            !this.scavengerStartedEndSfx && 10 >= l && (this.scavengerStartedEndSfx = !0, lemongine.AssetManager.getSound("scavengerEnd_0").play(GlobalSave.soundVol / 100));
            T = 3 + B + ka;
            m = new lemongine.Color().fromRGB(1, 1 - ka, 1 - ka);
            1 != h && (ka = TextCache.get("scavengerTimerShadow", Language.shortCountdownString(Math.ceil(l)), new lemongine.Point(), Fonts.get_volter(), lemongine.Color.black, 1, lemongine.TextAlignment.LEFT), ka.layer = 12, M = ka.transform.reset().translate(-ka.calculatedWidth / 2 * B, -Fonts.get_volter().height / 2 * B).scale2D(T).translate((5 - 150 * h) * (1 - B), 7 * (1 - B)).translate(68 * B, 28 * B), this.scene.draw(ka), ka = TextCache.get("scavengerTimer", Language.shortCountdownString(Math.ceil(l)), new lemongine.Point(), Fonts.get_volter(), m, 1, lemongine.TextAlignment.LEFT), ka.layer = 13, ka.transform.set(M.values).translate(0, -T), this.scene.draw(ka), 1 != B && (ka = TextCache.get("scavengerTimerLabelShadow", "Time remaining", new lemongine.Point(5 - 120 * h - 120 * B, 36), Fonts.get_volter(), lemongine.Color.black, 1, lemongine.TextAlignment.LEFT), ka.layer = 12, this.scene.draw(ka), ka = TextCache.get("scavengerTimerLabel", "Time remaining", new lemongine.Point(5 - 120 * h - 120 * B, 35), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.LEFT), ka.layer = 13, this.scene.draw(ka)));
            .56 > this.secondsUntilAnimationEnd && (ka = TextCache.get("scavengerItemsLabelShadow", "Items left", new lemongine.Point(this.scene.get_width() / 2, 40), Fonts.get_volter(), lemongine.Color.black, 1, lemongine.TextAlignment.CENTER), ka.layer = 12, this.scene.draw(ka), ka = TextCache.get("scavengerItemsLabel", "Items left", new lemongine.Point(this.scene.get_width() / 2, 39), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER), ka.layer = 13, this.scene.draw(ka));
            ka = TextCache.get("scavengerLeaderboardLabelShadow", "Leaderboard", new lemongine.Point(this.scene.get_width() - 5 + 180 * h, 36), Fonts.get_volter(), lemongine.Color.black, 1, lemongine.TextAlignment.RIGHT);
            ka.layer = 12;
            this.scene.draw(ka);
            ka = TextCache.get("scavengerLeaderboardLabel", "Leaderboard", new lemongine.Point(this.scene.get_width() - 5 + 180 * h, 35), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.RIGHT);
            ka.layer = 13;
            this.scene.draw(ka);
            m = new lemongine.Rectangle();
            l = 0;
            for (B = ScavengerManager.members; l < B.length;) T = [B[l]], ++l, T[0].joinedGame && (T[0].incrementSmoothPlacement(), M = T[0].getSmoothPlacement(), 13 <= M || (m.set(this.scene.get_width() - 150 + 180 * h, 49 + Math.round(13 * (M - 1)), 150, 13), b = this.scavengerUIBackdropEntity, a = new lemongine.Vector3(m.x, m.y), c = new lemongine.Point(), d = new lemongine.Point(1, 1), f = new lemongine.Point(m.width, m.height - 1), x = new haxe.ds.StringMap(), p = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6), x.h.color = p, p = lemongine.Mathz.repeatArray([0, 0, 0, .2], 6), x.h.colorOffset = p, b.addQuad(a, c, d, !0, f, null, null, x), b = this.scavengerUIBackdropEntity, a = new lemongine.Vector3(m.x, m.y + 12), f = new lemongine.Point(), x = new lemongine.Point(1, 1), c = new lemongine.Point(m.width, 1), p = new haxe.ds.StringMap(), d = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6), p.h.color = d, d = lemongine.Mathz.repeatArray([0, 0, 0, .4], 6), p.h.colorOffset = d, b.addQuad(a, f, x, !0, c, null, null, p), b = new lemongine.Color(-1), T[0].id == ScavengerManager.userID && b.fromHex(-16711819), a = !1, 0 < T[0].itemsFound.length && (c = T[0].itemsFound[T[0].itemsFound.length - 1], ka = (new Date().getTime() - c.collectionTimeClient) / 1E3, 2 > ka && .125 > lemongine.Mathz.modulus(ka, .25) && b.fromHex(-256), 5 > ka ? (a = !0, ka = TextCache.get("scavengerLeaderboardItemScore" + T[0].id, "+" + c.score, new lemongine.Point(m.get_right() - 20, m.y + 2), Fonts.get_volter(), b, 1, lemongine.TextAlignment.RIGHT), ka.layer = 12, this.scene.draw(ka), null == this.scavengerItems[c.index] ? this.scavengerUIEntity.addQuad(new lemongine.Vector3(), new lemongine.Point(66, 223), new lemongine.Point(12, 16), !0, null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 12, 16), new lemongine.Matrix4().translate(-6, -8).scale2D((16 + 2 * Math.sin(G.toFloat(Main.Instance.tick) / G.toFloat(16) + M)) / 16).rotate2D(Math.sin(G.toFloat(Main.Instance.tick) / G.toFloat(12) + M) / 3).translate(m.get_right() - 17 + 8, m.y - 1 + 8))) : (null == T[0].latestItemForLeaderboard && (T[0].latestItemForLeaderboard = new Item(this.scavengerItemsEntity, 0, 0, this, this.scavengerItems[c.index].item)), this.scavengerItemsEntity.currentMatrix.reset().translate(-.5, -.5).scale2D(16 + 2 * Math.sin(G.toFloat(Main.Instance.tick) / G.toFloat(16) + M)).rotate2D(Math.sin(G.toFloat(Main.Instance.tick) / G.toFloat(12) + M) / 3).translate(m.get_right() - 17 + 8, m.y - 1 + 8), T[0].latestItemForLeaderboard.render())) : null != T[0].latestItemForLeaderboard && (T[0].latestItemForLeaderboard.destroy(), T[0].latestItemForLeaderboard = null)), ka = TextCache.get("scavengerLeaderboardScore" + T[0].id, null == T[0].score ? "null" : "" + T[0].score, new lemongine.Point(m.x + 24, m.y + 2), Fonts.get_volter(), b, 1, lemongine.TextAlignment.RIGHT), ka.layer = 12, this.scene.draw(ka), ka = TextCache.get("scavengerLeaderboardName" + T[0].id, T[0].username, new lemongine.Point(m.x + 32, m.y + 2), Fonts.get_volter(), b, 1, lemongine.TextAlignment.LEFT), ka.layer = 12, a ? (b = ka.mask, M = (null != b ? b : new lemongine.Rectangle()).set(0, 0, m.width - 32 - 45, Fonts.get_volter().height)) : M = null, ka.set_mask(M), this.scene.draw(ka), T[0].hasPlus && (!a || ka.calculatedWidth < m.width - 32 - 45) && this.scavengerUIEntity.addQuad(new lemongine.Vector3(m.x + 32 + 1 + Math.min(m.width - 32 - 45, ka.calculatedWidth), m.y + 2 - 1, 0), new lemongine.Point(60, 236), new lemongine.Point(5, 5)), 0 == this.inventario.currentFrame || null == this.inventario.backgroundEntityRect || 0 == this.inventario.backgroundEntityRect.width ? m.containsPoint(Main.Instance.mouse) && (this.showRightTooltip("", new lemongine.Point(m.x, m.y + 6), T[0].isItemFound), ScavengerManager.isHost && T[0].id != ScavengerManager.userID && UI.rightClickMenu("scavengerMemberMenu", ["Kick " + T[0].username], -1, m.x | 0, m.y | 0, m.width | 0, m.height | 0, function (a) {
                return function (b, c) {
                    Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Kick " + a[0].username + "?", "Are you sure you want to remove " + a[0].username + " from this party?\n\nThey will not be able to rejoin.", "Kick", function (a) {
                        return function () {
                            ScavengerManager.packetToServer_kickMember(a[0]);
                        };
                    }(a), "Cancel"));
                };
            }(T))) : (ka = Math.max(0, this.scene.get_width() / 2 + this.inventario.backgroundEntityRect.width / 2 - m.x), new lemongine.Rectangle(m.x + ka, m.y, m.width - ka, m.height).containsPoint(Main.Instance.mouse) && this.showRightTooltip("", new lemongine.Point(m.x + ka, m.y + 6), T[0].isItemFound))));
            ScavengerManager.userMember.itemsFound.length == ScavengerManager.items.length && (l = ScavengerManager.userMember.itemsFound[ScavengerManager.userMember.itemsFound.length - 1].collectionTimeClient, this.renderScavengerWinSequence((new Date().getTime() - l) / 1E3, 4));
            this.scavengerUIBackdropEntity.resetUnusedQuads();
            this.scavengerUIEntity.resetUnusedQuads();
            this.scavengerUITopEntity.resetUnusedQuads();
            this.scene.draw(this.scavengerUIBackdropEntity);
            this.scene.draw(this.scavengerUIEntity);
            this.scene.draw(this.scavengerUITopEntity);
            this.scene.draw(this.scavengerItemsEntity);
        }
    },
    renderScavengerWinSequence: function (b, a) {
        if (!(b >= a)) {
            if (null == this.scavengerWinPlayerEntity) {
                this.scavengerSequenceFireworksSecond = 0;
                this.scavengerSequenceFireworksSecondOffset = Math.floor(4 * Math.random());
                var c = lemongine.AssetManager.getImage("ui"),
                    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                    f = new haxe.ds.StringMap(),
                    l = lemongine.Mathz.repeatArray([1], 24);
                f.h.color = l;
                l = lemongine.Mathz.repeatArray([0], 24);
                f.h.colorOffset = l;
                this.scavengerWinTopTextBackdropEntity = new lemongine.QuadPoolEntity(c, null, d, f);
                this.scavengerWinTopTextBackdropEntity.layer = 30;
                this.scavengerWinTopTextBackdropEntity.isTransparent = !0;
                this.scavengerWinPlayerEntity = new lemongine.QuadPoolEntity(SkinLoader.frames.skin);
                this.scavengerWinPlayerEntity.layer = 31;
                this.scavengerWinPlayerEntity.isTransparent = !0;
            }
            d = TextCache.get("scavengerWinTopTextShadow", "True Scavenger!", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 106), Fonts.get_volter(), lemongine.Color.black, 4, lemongine.TextAlignment.CENTER);
            d.layer = 31;
            f = (4 * d.calculatedWidth + 40) * lemongine.Mathz.interpolateEnterSmoother(b) * lemongine.Mathz.interpolateEnterSmoother(a - b);
            c = new lemongine.Rectangle(-f / 4 / 2, 0, f / 4, 4 * Fonts.get_volter().height);
            if (14 <= f) {
                d.set_mask(c);
                this.scene.draw(d);
                d = TextCache.get("scavengerWinTopText", "True Scavenger!", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 102), Fonts.get_volter(), lemongine.Color.white, 4, lemongine.TextAlignment.CENTER);
                d.layer = 31;
                d.set_mask(c);
                this.scene.draw(d);
                c = this.scavengerWinTopTextBackdropEntity;
                d = new lemongine.Rectangle(this.scene.get_width() / 2 - f / 2, this.scene.get_height() / 2 - 207 + 102 - (4 * d.calculatedHeight + 24) / 2, f, 4 * d.calculatedHeight + 24);
                var p = new lemongine.Rectangle(0, 16, 16, 16),
                    h = new lemongine.Rectangle(7, 7, 2, 2);
                f = new haxe.ds.StringMap();
                l = lemongine.Mathz.repeatArray([1, 1, 1, 2.5], 6);
                f.h.color = l;
                c.update9Slice(0, d, p, h, 0, f);
            }
            if (3 > this.scavengerSequenceFireworksSecond && Math.floor(b + .2) > this.scavengerSequenceFireworksSecond) for (this.scavengerSequenceFireworksSecond = Math.floor(b + .2), l = 1 == (this.scavengerSequenceFireworksSecond + this.scavengerSequenceFireworksSecondOffset) % 2, p = 1 == Math.floor((this.scavengerSequenceFireworksSecond + this.scavengerSequenceFireworksSecondOffset) / 2) % 2, f = 0; 3 > f;) {
                h = f++;
                for (var B = 24 + 2 * h, n = 0; n < B;) {
                    var m = n++;
                    c = this.scene.get_width() / 2;
                    d = this.scene.get_width();
                    new particles.Particle_SS_Spark(c + (l ? -1 : 1) * d * (p ? .2 : .3) + Math.cos(B + m / B * 2 * Math.PI) * (15 + 5 * h), this.scene.get_height() / 2 + this.scene.get_height() * (p ? .1 : -.1) + Math.sin(B + m / B * 2 * Math.PI) * (15 + 5 * h), Math.cos(B + m / B * 2 * Math.PI) * (3 + h + .5 * Math.random()), Math.sin(B + m / B * 2 * Math.PI) * (3 + h + .5 * Math.random()));
                }
            }
            c = this.scene.get_width() / 3 * Math.pow(2 * (lemongine.Mathz.normalizeFloat(b - .5, 0, a - 1) - .5), 3);
            a = (this.scene.get_height() / 2 + 4 * Skin.frameSize.y + 20) * (1 - Math.pow(1 - Math.pow(2 * lemongine.Mathz.normalizeFloat(b - .5, 0, a - 1) - 1, 2), .2));
            b = new lemongine.Matrix4().translate(-Skin.frameSize.x / 2, -Skin.frameSize.y / 2).scale(8, 8).rotate2D((4 + 8 * Math.sin(2.5 * b)) / 180 * Math.PI).translate(this.scene.get_width() / 2 + c, this.scene.get_height() / 2 + a);
            this.scavengerWinPlayerEntity.updateQuad(0, new lemongine.Vector3(), Skin.jump, Skin.frameSize, Skin.frameSize, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, Skin.frameSize.x, Skin.frameSize.y), b), lemongine.Geom.flippedQuadUVs);
            this.scene.draw(this.scavengerWinTopTextBackdropEntity);
            this.scene.draw(this.scavengerWinPlayerEntity);
        }
    },
    renderTutorial: function () {
        if (-1 == this.tutorialFrame) {
            if (GlobalSave.completedTutorial) return;
            this.tutorialFrame = 0;
        } else if (GlobalSave.completedTutorial) {
            this.tutorialFrame = -1;
            return;
        }
        if (0 == this.tutorialFrame) this.get_pawsed() || this.tutorialTimerIn++, this.tutorialTimerIn > 5 * Main.Instance.get_fps() && (this.hasMoved && this.hasJumped || GlobalSave.touchControls ? this.hasMined || 0 != this.world.gamemode && 1 != this.world.gamemode ? (this.tutorialFrame = -1, GlobalSave.completedTutorial = !0, GlobalSave.save()) : (this.tutorialTimerIn = 0, this.tutorialFrame = 2) : (this.tutorialTimerIn = 0, this.tutorialFrame = 1));else {
            if (null == this.tutorialUIEntity) {
                var b = lemongine.AssetManager.getImage("ui"),
                    a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                    c = new haxe.ds.StringMap(),
                    d = lemongine.Mathz.repeatArray([1], 24);
                c.h.color = d;
                d = lemongine.Mathz.repeatArray([0], 24);
                c.h.colorOffset = d;
                this.tutorialUIEntity = new lemongine.QuadPoolEntity(b, null, a, c);
                this.tutorialUIEntity.isTransparent = !0;
                this.tutorialUIEntity.layer = 5;
            }
            this.tutorialUIEntity.clearPool();
            if (1 == this.tutorialFrame) {
                this.get_pawsed() || this.tutorialTimerIn++;
                var f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps()) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps() - .1);
                b = this.tutorialUIEntity;
                a = new lemongine.Vector3(this.scene.get_width() / 2 - 70 - 13, this.scene.get_height() / 2 - 115 + 8 + 10 * f);
                var l = new lemongine.Point(228, 41),
                    p = new lemongine.Point(13, 15),
                    h = new lemongine.Point(26, 30);
                c = new haxe.ds.StringMap();
                d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6);
                c.h.color = d;
                b.addQuad(a, l, p, !0, h, null, null, c);
                b = TextCache.get("tutorialLeftShadow", GlobalSave.keyBindings.h.left.h.name, new lemongine.Point(this.scene.get_width() / 2 - 70, this.scene.get_height() / 2 - 115 + 8 - 12 + 2 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 5;
                this.scene.draw(b);
                b = TextCache.get("tutorialLeft", GlobalSave.keyBindings.h.left.h.name, new lemongine.Point(this.scene.get_width() / 2 - 70, this.scene.get_height() / 2 - 115 + 8 - 12 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 6;
                this.scene.draw(b);
                f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps() - .2) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps() - .3);
                b = this.tutorialUIEntity;
                a = new lemongine.Vector3(this.scene.get_width() / 2 - 13, this.scene.get_height() / 2 - 115 + 10 * f);
                l = new lemongine.Point(242, 41);
                p = new lemongine.Point(13, 15);
                h = new lemongine.Point(26, 30);
                c = new haxe.ds.StringMap();
                d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6);
                c.h.color = d;
                b.addQuad(a, l, p, !0, h, null, null, c);
                b = TextCache.get("tutorialJumpShadow", GlobalSave.keyBindings.h.up.h.name, new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 115 - 12 + 2 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 5;
                this.scene.draw(b);
                b = TextCache.get("tutorialJump", GlobalSave.keyBindings.h.up.h.name, new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 115 - 12 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 6;
                this.scene.draw(b);
                f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps() - .4) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps() - .5);
                b = this.tutorialUIEntity;
                a = new lemongine.Vector3(this.scene.get_width() / 2 + 70 - 13, this.scene.get_height() / 2 - 115 + 8 + 10 * f);
                l = new lemongine.Point(228, 41);
                p = new lemongine.Point(13, 15);
                h = new lemongine.Point(26, 30);
                var B = lemongine.Geom.flippedQuadUVs;
                c = new haxe.ds.StringMap();
                d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6);
                c.h.color = d;
                b.addQuad(a, l, p, !0, h, null, B, c);
                b = TextCache.get("tutorialRightShadow", GlobalSave.keyBindings.h.right.h.name, new lemongine.Point(this.scene.get_width() / 2 + 70, this.scene.get_height() / 2 - 115 + 8 - 12 + 2 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 5;
                this.scene.draw(b);
                b = TextCache.get("tutorialRight", GlobalSave.keyBindings.h.right.h.name, new lemongine.Point(this.scene.get_width() / 2 + 70, this.scene.get_height() / 2 - 115 + 8 - 12 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 6;
                this.scene.draw(b);
                f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps() - 1) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps());
                b = TextCache.get("tutorialTipShadow", "Tip: Double-tap " + Std.string(GlobalSave.keyBindings.h.left.h.name) + " or " + Std.string(GlobalSave.keyBindings.h.right.h.name) + " to sprint", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 + 62 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 5;
                this.scene.draw(b);
                b = TextCache.get("tutorialTip", "Tip: Double-tap " + Std.string(GlobalSave.keyBindings.h.left.h.name) + " or " + Std.string(GlobalSave.keyBindings.h.right.h.name) + " to sprint", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 + 60 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER);
                b.layer = 6;
                this.scene.draw(b);
                this.tutorialTimerIn > Main.Instance.get_fps() && this.hasMoved && this.hasJumped && (this.tutorialTimerOut++, this.tutorialTimerOut > Main.Instance.get_fps() && (this.tutorialTimerOut = this.tutorialTimerIn = 0, this.hasMined || 0 != this.world.gamemode && 1 != this.world.gamemode ? (this.tutorialFrame = -1, GlobalSave.completedTutorial = !0, GlobalSave.save()) : this.tutorialFrame = 2));
            } else 2 == this.tutorialFrame && (this.get_pawsed() || this.tutorialTimerIn++, f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps()) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps() - .1), c = lemongine.Mathz.modulus(G.toFloat(Main.Instance.tick), 2.5 * Main.Instance.get_fps()) > Main.Instance.get_fps(), GlobalSave.touchControls ? (b = this.tutorialUIEntity, a = new lemongine.Vector3(this.scene.get_width() / 2 - 60 - 14 + 2 + Math.round(c ? .55 * Math.sin(G.toFloat(2 * Main.Instance.tick)) : 0), this.scene.get_height() / 2 - 115 + 8 + 10 * f), l = new lemongine.Point(228 + (c ? 0 : 14), 0), p = new lemongine.Point(14, 21), h = new lemongine.Point(28, 42)) : (b = this.tutorialUIEntity, a = new lemongine.Vector3(this.scene.get_width() / 2 - 60 - 14 - 2 + Math.round(c ? .55 * Math.sin(G.toFloat(2 * Main.Instance.tick)) : 0), this.scene.get_height() / 2 - 115 + 8 + 10 * f), l = new lemongine.Point(228 + (c ? 0 : 14), 21), p = new lemongine.Point(14, 20), h = new lemongine.Point(28, 40)), c = new haxe.ds.StringMap(), d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6), c.h.color = d, b.addQuad(a, l, p, !0, h, null, null, c), b = TextCache.get("tutorialCollectShadow", "Collect", new lemongine.Point(this.scene.get_width() / 2 - 60, this.scene.get_height() / 2 - 115 + 8 - 12 + 2 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER), b.layer = 5, this.scene.draw(b), b = TextCache.get("tutorialCollect", "Collect", new lemongine.Point(this.scene.get_width() / 2 - 60, this.scene.get_height() / 2 - 115 + 8 - 12 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER), b.layer = 6, this.scene.draw(b), f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps() - .2) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps() - .3), b = Main.Instance.tick, a = .2 * Main.Instance.get_fps(), c = lemongine.Mathz.modulus(G.toFloat(b) - a, 2.5 * Main.Instance.get_fps()) < .2 * Main.Instance.get_fps(), GlobalSave.touchControls ? (b = this.tutorialUIEntity, a = new lemongine.Vector3(this.scene.get_width() / 2 + 60 - 14 + 2, this.scene.get_height() / 2 - 115 + 8 + 10 * f), l = new lemongine.Point(228 + (c ? 0 : 14), 0), p = new lemongine.Point(14, 21), h = new lemongine.Point(28, 42), c = new haxe.ds.StringMap(), d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6), c.h.color = d, b.addQuad(a, l, p, !0, h, null, null, c)) : GlobalSave.useRightClickKey ? (a = TextCache.get("tutorialSecondClickKey", "+" + Std.string(GlobalSave.keyBindings.h.secondClick.h.name), new lemongine.Point(), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f)), a.layer = 6, this.scene.draw(a), a.transform.reset().scale2D(2).translate(this.scene.get_width() / 2 + 60 - (2 * a.calculatedWidth + 32) / 2 + 32, this.scene.get_height() / 2 - 115 + 20 + 10 * f), b = TextCache.get("tutorialSecondClickKeyShadow", "+" + Std.string(GlobalSave.keyBindings.h.secondClick.h.name), new lemongine.Point(this.scene.get_width() / 2 + 60 - (2 * a.calculatedWidth + 32) / 2 + 32, this.scene.get_height() / 2 - 115 + 22 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.LEFT), b.layer = 5, this.scene.draw(b), b = this.tutorialUIEntity, a = new lemongine.Vector3(this.scene.get_width() / 2 + 60 - (2 * a.calculatedWidth + 32) / 2, this.scene.get_height() / 2 - 115 + 8 + 10 * f), l = new lemongine.Point(228 + (c ? 0 : 14), 21), p = new lemongine.Point(14, 20), h = new lemongine.Point(28, 40), c = new haxe.ds.StringMap(), d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6), c.h.color = d, b.addQuad(a, l, p, !0, h, null, null, c)) : (b = this.tutorialUIEntity, a = new lemongine.Vector3(this.scene.get_width() / 2 + 60 - 14 + 2, this.scene.get_height() / 2 - 115 + 8 + 10 * f), l = new lemongine.Point(228 + (c ? 0 : 14), 21), p = new lemongine.Point(14, 20), h = new lemongine.Point(28, 40), B = lemongine.Geom.flippedQuadUVs, c = new haxe.ds.StringMap(), d = lemongine.Mathz.repeatArray([1, 1, 1, 1 - f], 6), c.h.color = d, b.addQuad(a, l, p, !0, h, null, B, c)), b = TextCache.get("tutorialBuildShadow", "Build", new lemongine.Point(this.scene.get_width() / 2 + 60, this.scene.get_height() / 2 - 115 + 8 - 12 + 2 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER), b.layer = 5, this.scene.draw(b), b = TextCache.get("tutorialBuild", "Build", new lemongine.Point(this.scene.get_width() / 2 + 60, this.scene.get_height() / 2 - 115 + 8 - 12 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER), b.layer = 6, this.scene.draw(b), f = 1 - lemongine.Mathz.interpolateEnterSmoother(2 * this.tutorialTimerIn / Main.Instance.get_fps() - 1) + lemongine.Mathz.interpolateExitSmoother(2 * this.tutorialTimerOut / Main.Instance.get_fps()), b = TextCache.get("tutorialTipShadow", "Tip: " + (GlobalSave.touchControls ? "Tap" : "Click") + " and hold to mine", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 + 62 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, 1 - f), 2, lemongine.TextAlignment.CENTER), b.layer = 5, this.scene.draw(b), b = TextCache.get("tutorialTip", "Tip: " + (GlobalSave.touchControls ? "Tap" : "Click") + " and hold to mine", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 + 60 + 10 * f), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, 1 - f), 2, lemongine.TextAlignment.CENTER), b.layer = 6, this.scene.draw(b), this.tutorialTimerIn > Main.Instance.get_fps() && this.hasMined && (this.tutorialTimerOut++, this.tutorialTimerOut > Main.Instance.get_fps() && (this.tutorialTimerOut = this.tutorialTimerIn = 0, this.tutorialFrame = -1, GlobalSave.completedTutorial = !0, GlobalSave.save())));
            this.tutorialUIEntity.resetUnusedQuads();
            this.scene.draw(this.tutorialUIEntity);
        }
    },
    renderItemMessage: function () {
        if (0 < this.itemMessageCountdown) {
            this.itemMessageCountdown--;
            var b = TextCache.get("itemMessage", this.itemMessageText, new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() - 89), Fonts.get_volter(), new lemongine.Color(16777216 * Math.floor(255 * lemongine.Mathz.clamp(0, 1, this.itemMessageCountdown / 10)) + 16777215), 1.625, lemongine.TextAlignment.CENTER, 1);
            b.layer = 7;
            this.scene.draw(b);
        }
    },
    generateItemNumberTexture: function () {
        var b = new lemongine.Scene(256, 256);
        b.setup2D(256, 256, new lemongine.Color());
        this.itemNumberTexture = new lemongine.Image().fromScene(b);
        var a = new lemongine.Scene(256, 256);
        a.setup2D(256, 256, new lemongine.Color());
        var c = new lemongine.Image().fromScene(a),
            d = new lemongine.Scene(256, 256);
        d.setup2D(256, 256, new lemongine.Color());
        for (var f = new lemongine.Image().fromScene(d), g = 0; 64 > g;) {
            var p = g++;
            a.draw(TextCache.get("itemCount1", Std.string(p + 1), new lemongine.Point(p % 8 * 32 + 32, 32 * Math.floor(p / 8)), Fonts.get_volter(), lemongine.Color.white, 1.625, lemongine.TextAlignment.RIGHT, 2), !0);
            a.draw(TextCache.get("itemCount2", Std.string(p + 1), new lemongine.Point(p % 8 * 32 + 32, 32 * Math.floor(p / 8) + 1), Fonts.get_volter(), lemongine.Color.white, 1.625, lemongine.TextAlignment.RIGHT, 2), !0);
        }
        for (g = 0; 64 > g;) p = g++, d.draw(TextCache.get("itemCount1", Std.string(p + 1), new lemongine.Point(p % 8 * 32 + 32, 32 * Math.floor(p / 8)), Fonts.get_volter(), lemongine.Color.black, 1.625, lemongine.TextAlignment.RIGHT, 2), !0);
        b.draw2DFlipped(f.blurFilter(2, 2), new lemongine.Point(0, -1));
        b.draw2D(c, new lemongine.Point(-1, 0));
    },
    forceCloseInventory: function () {
        0 != this.inventario.currentFrame && (this.inventario.requestClose(!0), this.inventario.gotoAndStop(0));
    },
    usePortalNether: function () {
        var b = this;
        this.portalling || (this.portalling = !0, this.endOfFrameTasks.push(function () {
            b.portalling = !1;
            b.usePortal(1);
        }));
    },
    usePortalEnd: function () {
        var b = this;
        this.portalling || (this.portalling = !0, this.endOfFrameTasks.push(function () {
            b.portalling = !1;
            b.usePortal(2);
        }));
    },
    usePortal: function (b) {
        null == b && (b = 1);
        this.forceCloseInventory();
        2 == b ? (this.set_pawsed(!1), 3 == this.world.sceneNum ? (this.world.savee(), this.world.loadScene(1), this.world.worldX = this.world.spawnPoint.x, this.world.worldY = this.world.spawnPoint.y, this.world.savee(), Main.Instance.set_frame("credits")) : null == this.world.getSaveData("scene3") ? (this.world.savee(), this.world.loadScene(3), this.world.sceneNum = 3, this.world.worldX = this.world.worldWidth / 6, this.world.worldY = -52, this.world.spawnPoint = new lemongine.Point(this.world.worldX, this.world.worldY), this.seed = this.stringToSeed(this.world.seedNum), this.loadWorld = !0, this.set_pawsed(!1), this.generateEnder = !0, this.initializeWorldGen(this.world.seedNum, this.world.cheats, this.world.gamemode, this.world.hardcore, this.bonusChest)) : (this.world.savee(), this.world.loadScene(3), this.world.worldX = this.world.worldWidth / 6, this.world.worldY = -53, this.world.spawnPoint = new lemongine.Point(this.world.worldX, this.world.worldY))) : (this.set_pawsed(!1), 2 == this.world.sceneNum ? (this.world.savee(), this.world.loadScene(1), null != this.world.portalCoords ? (this.world.worldX = this.world.portalCoords.x, this.world.worldY = this.world.portalCoords.y) : (this.world.worldX = this.world.spawnPoint.x, this.world.worldY = this.world.spawnPoint.y)) : null == this.world.getSaveData("scene2") ? (1 == this.world.sceneNum && (this.world.portalCoords = new lemongine.Point(this.world.worldX, this.world.worldY)), this.world.savee(), this.world.loadScene(2), this.world.worldX = this.world.worldWidth / 2, this.world.worldY = -30, this.world.spawnPoint = new lemongine.Point(this.world.worldX, this.world.worldY), this.seed = this.stringToSeed(this.world.seedNum), this.loadWorld = !0, this.set_pawsed(!1), this.generateNether = !0, this.initializeWorldGen(this.world.seedNum, this.world.cheats, this.world.gamemode, this.world.hardcore, this.bonusChest)) : (1 == this.world.sceneNum && (this.world.portalCoords = new lemongine.Point(this.world.worldX, this.world.worldY)), this.world.savee(), this.world.loadScene(2), this.world.worldX = this.world.worldWidth / 2, this.world.worldY = -30, this.world.spawnPoint = new lemongine.Point(this.world.worldX, this.world.worldY)));
        this.initSky();
    },
    buildRoom: function (b, a, c, d, f) {
        for (var g = b, p = b + c + 1; g < p;) for (var k = g++, h = a, n = a + d + 1; h < n;) {
            var m = h++;
            k == b || k == b + c || m == a || m == a + d ? "mob spawner" == f ? m == a ? this.world.setFG(k, m, "ms") : this.world.setFG(k, m, "cs") : "empty2" == f ? 0 != this.randomNumber(0, 2) ? this.world.setFG(k, m, "ms") : this.world.setFG(k, m, "cs") : this.world.setFG(k, m, "sb") : 1 == this.randomNumber(0, 50 - (m - a)) || "library" == f && 1 == this.randomNumber(0, 5) ? this.world.setFG(k, m, "web") : this.world.setFG(k, m, "air");
        }
        "library" == f ? (this.world.setFG(b + 2, a + 5, "books"), this.world.setFG(b + 2, a + 4, "books"), this.world.setFG(b + 2, a + 3, "books"), this.world.setFG(b + 4, a + 5, "books"), this.world.setFG(b + 4, a + 4, "books"), this.world.setFG(b + 4, a + 3, "books"), this.world.setFG(b + 6, a + 5, "books"), this.world.setFG(b + 6, a + 4, "books"), this.world.setFG(b + 6, a + 3, "books"), this.world.setFG(b + 8, a + 5, "books"), this.world.setFG(b + 8, a + 4, "books"), this.world.setFG(b + 8, a + 3, "books"), this.world.setFG(b + 10, a + 5, "books"), this.world.setFG(b + 10, a + 4, "books"), this.world.setFG(b + 10, a + 3, "books"), this.world.setFG(b + 2, a + 2, "bdbooks"), this.world.setFG(b + 2, a + 1, "bdbooks"), this.world.setFG(b + 4, a + 2, "bdbooks"), this.world.setFG(b + 4, a + 1, "bdbooks"), this.world.setFG(b + 6, a + 2, "bdbooks"), this.world.setFG(b + 6, a + 1, "bdbooks"), this.world.setFG(b + 8, a + 2, "bdbooks"), this.world.setFG(b + 8, a + 1, "bdbooks"), this.world.setFG(b + 10, a + 2, "bdbooks"), this.world.setFG(b + 10, a + 1, "bdbooks"), this.world.setFG(b + 3, a + 4, "th"), this.world.states.h["blockX" + (b + 3) + "Y" + (a + 4)] = 2, this.world.setFG(b + 9, a + 4, "th"), this.world.states.h["blockX" + (b + 9) + "Y" + (a + 4)] = 3) : "chest1" == f ? (this.world.setFG(b + 4, a + 5, "sb"), this.world.setFG(b + 5, a + 5, "sb"), this.world.setFG(b + 6, a + 5, "sb"), this.world.setFG(b + 7, a + 5, "sb"), this.world.setFG(b + 8, a + 5, "sb"), this.world.setFG(b + 4, a + 1, "sb"), this.world.setFG(b + 5, a + 1, "sb"), this.world.setFG(b + 6, a + 1, "sb"), this.world.setFG(b + 7, a + 1, "sb"), this.world.setFG(b + 8, a + 1, "sb"), this.world.setFG(b + 5, a + 1, "sb"), this.world.setFG(b + 7, a + 1, "sb"), this.world.setFG(b + 6, a + 2, "chest"), this.prizeChest(b + 6, a + 2), this.world.setFG(b + 5, a + 2, "sb"), this.world.setFG(b + 7, a + 2, "sb"), this.world.setFG(b + 5, a + 3, "th"), this.world.states.h["blockX" + (b + 5) + "Y" + (a + 3)] = 1, this.world.setFG(b + 7, a + 3, "th"), this.world.states.h["blockX" + (b + 7) + "Y" + (a + 3)] = 1) : "fountain" == f ? (this.world.setFG(b + 6, a + 4, "wr"), this.world.setFG(b + 4, a + 1, "sb"), this.world.setFG(b + 8, a + 1, "sb")) : "mob spawner" == f ? (this.world.setFG(b + 5, a + 1, "ms"), this.world.setFG(b + 6, a + 1, "ms"), this.world.setFG(b + 7, a + 1, "ms"), this.world.setFG(b + 6, a + 2, "mobSpawner")) : "fountain" == f ? (this.world.setFG(b + 6, a + 4, "wr"), this.world.setFG(b + 4, a + 1, "sb"), this.world.setFG(b + 8, a + 1, "sb")) : "lava" == f ? (this.world.setFG(b + 3, a, "la"), this.world.setFG(b + 4, a, "la"), this.world.setFG(b + 5, a, "la"), this.world.setFG(b + 6, a, "la"), this.world.setFG(b + 7, a, "la"), this.world.setFG(b + 8, a, "la"), this.world.setFG(b + 9, a, "la"), this.world.setFG(b + 2, a + -1, "sb"), this.world.setFG(b + 3, a + -1, "sb"), this.world.setFG(b + 4, a + -1, "sb"), this.world.setFG(b + 5, a + -1, "sb"), this.world.setFG(b + 6, a + -1, "sb"), this.world.setFG(b + 7, a + -1, "sb"), this.world.setFG(b + 8, a + -1, "sb"), this.world.setFG(b + 9, a + -1, "sb"), this.world.setFG(b + 10, a + -1, "sb")) : "acid" == f ? (this.world.setFG(b + 3, a, "ad"), this.world.setFG(b + 4, a, "ad"), this.world.setFG(b + 5, a, "ad"), this.world.setFG(b + 6, a, "ad"), this.world.setFG(b + 7, a, "ad"), this.world.setFG(b + 8, a, "ad"), this.world.setFG(b + 9, a, "ad"), this.world.setFG(b + 2, a + -1, "sb"), this.world.setFG(b + 3, a + -1, "sb"), this.world.setFG(b + 4, a + -1, "sb"), this.world.setFG(b + 5, a + -1, "sb"), this.world.setFG(b + 6, a + -1, "sb"), this.world.setFG(b + 7, a + -1, "sb"), this.world.setFG(b + 8, a + -1, "sb"), this.world.setFG(b + 9, a + -1, "sb"), this.world.setFG(b + 10, a + -1, "sb")) : "portal" == f && (this.world.setFG(b + 2, a + 1, "sb"), this.world.setFG(b + 3, a + 1, "sb"), this.world.setFG(b + 4, a + 1, "sb"), this.world.setFG(b + 5, a + 1, "sb"), this.world.setFG(b + 6, a + 1, "sb"), this.world.setFG(b + 7, a + 1, "sb"), this.world.setFG(b + 8, a + 1, "sb"), this.world.setFG(b + 9, a + 1, "sb"), this.world.setFG(b + 10, a + 1, "sb"), this.world.setFG(b + 3, a + 2, "pf"), this.world.setFG(b + 4, a + 2, "pf"), this.world.setFG(b + 5, a + 2, "pf"), this.world.setFG(b + 6, a + 2, "pf"), this.world.setFG(b + 7, a + 2, "pf"), this.world.setFG(b + 8, a + 2, "pf"), this.world.setFG(b + 9, a + 2, "pf"));
    },
    buildStaircase: function (b, a, c) {
        a = Math.round(a);
        c = Math.round(c);
        if ("up" == b) {
            b = 0;
            for (var d = [[1, 0], [2, 0], [2, 1], [2, 2], [3, 2], [3, 3], [3, 4], [4, 4], [4, 5], [4, 6], [5, 6], [5, 7], [5, 8], [6, 8], [6, 9], [6, 10], [1, 5], [1, 6], [1, 7], [2, 7], [2, 8], [2, 9], [3, 9], [3, 10], [3, 11], [4, 11], [4, 12], [4, 13], [5, 13]]; b < d.length;) {
                var f = d[b];
                ++b;
                this.world.setFG(a + f[0], c + f[1], "sb");
            }
            b = 0;
            for (d = [[0, 1], [0, 2], [1, 1], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [2, 5], [2, 6], [3, 5], [3, 6], [3, 7], [3, 8], [4, 7], [4, 8], [4, 9], [4, 10], [5, 9], [5, 10], [5, 11], [5, 12], [6, 1], [6, 12]]; b < d.length;) f = d[b], ++b, this.world.setFG(a + f[0], c + f[1], "air");
            this.world.setFG(a, c + 1, "air");
            this.world.setFG(a, c + 2, "air");
            this.world.setFG(a + 6, c + 11, "air");
            this.world.setFG(a + 6, c + 12, "air");
        } else if ("down" == b) {
            b = 0;
            for (d = [[0, -1], [0, -2], [1, -2], [1, -3], [1, -4], [2, -4], [2, -5], [2, -6], [3, -6], [3, -7], [3, -8], [4, -8], [4, -9], [4, -10], [5, -10], [1, 3], [2, 3], [2, 2], [2, 1], [3, 1], [3, 0], [3, -1], [4, -1], [4, -2], [4, -3], [5, -3], [5, -4], [5, -5]]; b < d.length;) f = d[b], ++b, this.world.setFG(a + f[0], c + f[1], "sb");
            b = 0;
            for (d = [[0, 1], [0, 2], [1, -1], [1, 0], [1, 1], [1, 2], [2, -3], [2, -2], [2, -1], [2, 0], [3, -5], [3, -4], [3, -3], [3, -2], [4, -7], [4, -6], [4, -5], [4, -4], [5, -9], [5, -8], [5, -7], [5, -6], [6, -9], [6, -8]]; b < d.length;) f = d[b], ++b, this.world.setFG(a + f[0], c + f[1], "air");
        }
    },
    buildHall: function (b, a) {
        b = Math.round(b);
        a = Math.round(a);
        if (1 == this.randomNumber(0, 2)) {
            this.world.setFG(b + 1, a, "sb");
            this.world.setFG(b + 2, a, "sb");
            this.world.setFG(b + 3, a, "sb");
            this.world.setFG(b + 4, a, "sb");
            this.world.setFG(b + 5, a, "sb");
            this.world.setFG(b + 1, a + 3, "sb");
            this.world.setFG(b + 2, a + 3, "sb");
            this.world.setFG(b + 3, a + 3, "sb");
            this.world.setFG(b + 4, a + 3, "sb");
            this.world.setFG(b + 5, a + 3, "sb");
            for (var c = 0; 7 > c;) {
                var d = c++;
                this.world.setFG(b + d, a + 1, "air");
                this.world.setFG(b + d, a + 2, "air");
            }
            1 != this.randomNumber(0, 3) && (1 != this.randomNumber(0, 2) ? (this.world.setFG(b + 6, a + 1, "dr3"), this.world.setFG(b + 6, a + 2, "dr4")) : (this.world.setFG(b + 5, a + 1, "idr3"), this.world.setFG(b + 5, a + 2, "idr4"), this.world.setFG(b + 4, a + 1, "pp"), this.world.setFG(b + 6, a + 1, "pp")));
            1 != this.randomNumber(0, 3) && (1 != this.randomNumber(0, 2) ? (this.world.setFG(b, a + 1, "dr3"), this.world.setFG(b, a + 2, "dr4")) : (this.world.setFG(b + 1, a + 1, "idr3"), this.world.setFG(b + 1, a + 2, "idr4"), this.world.setFG(b, a + 1, "pp"), this.world.setFG(b + 2, a + 1, "pp")));
        } else for (this.world.setFG(b + 1, a, "sb"), this.world.setFG(b + 2, a, "sb"), this.world.setFG(b + 3, a, "sb"), this.world.setFG(b + 4, a, "sb"), this.world.setFG(b + 5, a, "sb"), this.world.setFG(b + 1, a + 6, "sb"), this.world.setFG(b + 2, a + 6, "sb"), this.world.setFG(b + 3, a + 6, "sb"), this.world.setFG(b + 4, a + 6, "sb"), this.world.setFG(b + 5, a + 6, "sb"), c = 0; 7 > c;) d = c++, this.world.setFG(b + d, a + 1, "air"), this.world.setFG(b + d, a + 2, "air"), this.world.setFG(b + d, a + 3, "air"), this.world.setFG(b + d, a + 4, "air"), this.world.setFG(b + d, a + 5, "air");
    },
    buildLadder: function (b, a) {
        b = Math.round(b);
        a = Math.round(a);
        for (var c = 0; 11 > c;) this.world.setFG(b, a + c++, "ladder");
        this.world.setFG(b - 1, a + 6, "sb");
        this.world.setFG(b + 1, a + 6, "sb");
        this.world.setFG(b - 1, a + 7, "sb");
        this.world.setFG(b + 1, a + 7, "sb");
        this.world.setFG(b - 1, a + 8, "sb");
        this.world.setFG(b + 1, a + 8, "sb");
    },
    prizeChest: function (b, a, c) {
        null == c && (c = "normal");
        this.world.chests.h["blockX" + b + "Y" + a] = [];
        for (var d = 0; 27 > d;) ++d, this.world.chests.h["blockX" + b + "Y" + a].push(Game.emptyItem());
        for (d = 0; 8 > d;) {
            ++d;
            var f = "bonus" == c ? [["sl", this.randomNumber(1, 2), 0], ["wp", this.randomNumber(6, 12), 0], ["ap", this.randomNumber(1, 2), 0], ["bread", this.randomNumber(1, 3), 0], ["WoodenPickaxe", 1, 0], ["WoodenAxe", 1, 0], ["StonePickaxe", 1, this.randomNumber(20, 50)], ["StoneAxe", 1, this.randomNumber(20, 50)], ["th", this.randomNumber(2, 3), 0], ["bb", this.randomNumber(5, 20), 0]] : [["ep", 1, 0], ["tag", 1, 0], ["wseed", this.randomNumber(2, 4), 0], ["pseed", this.randomNumber(2, 4), 0], ["bseed", this.randomNumber(1, 3), 0], ["ccb", this.randomNumber(1, 6), 0], ["wd", this.randomNumber(1, 5), 0], ["gp", 1, 0], ["oddrock", this.randomNumber(1, 5), 0], ["or", this.randomNumber(1, 5), 0], ["gap", this.randomNumber(1, 2), 0], ["topaz", this.randomNumber(1, 5), 0], ["StonePickaxe", 1, this.randomNumber(50, 100)], ["StoneShovel", 1, this.randomNumber(50, 100)], ["StoneSword", 1, this.randomNumber(50, 100)], ["StoneAxe", 1, this.randomNumber(50, 100)], ["cs", this.randomNumber(1, 15), 0], ["gi", this.randomNumber(1, 3), 0], ["dm", this.randomNumber(1, 3), 0], ["cl", this.randomNumber(1, 6), 0], ["ii", this.randomNumber(1, 6), 0], ["rsd", this.randomNumber(1, 10), 0], ["bb", this.randomNumber(1, 20), 0], ["sw", this.randomNumber(1, 9), 0], ["bk", 1, 0], ["wp", this.randomNumber(1, 8), 0], ["fw1", this.randomNumber(1, 3), 0], ["fw2", this.randomNumber(1, 3), 0], ["flint", this.randomNumber(1, 4), 0]];
            var g = Math.floor(this.randomNumber(0, f.length - 1)),
                p = Math.floor(this.randomNumber(0, 27));
            27 != p && (this.world.chests.h["blockX" + b + "Y" + a][p] = [f[g][0], f[g][1], f[g][2]]);
        }
    },
    useBonemeal: function (b, a) {
        if ("sl" == this.world.getFG(b, a)) {
            if ("dt" == this.world.getFG(b, a - 1) && "air" == this.world.getFG(b, a + 1) && "air" == this.world.getFG(b, a + 2) && "air" == this.world.getFG(b, a + 3) && "air" == this.world.getFG(b, a + 4) && "air" == this.world.getFG(b, a + 5) && "air" == this.world.getFG(b, a + 6) && "air" == this.world.getFG(b, a + 7)) {
                this.world.setFG(b, a, "wd1");
                this.unlockAchieve(10);
                this.makeTree(b + 1, a, !1, !1);
                var c = this.world.toGrow;
                b = "blockX" + b + "Y" + a;
                Object.prototype.hasOwnProperty.call(c.h, b) && delete c.h[b];
                return !0;
            }
        } else if ("ms1" == this.world.getFG(b, a)) {
            if (("dt" == this.world.getFG(b, a - 1) || "myc" == this.world.getFG(b, a - 1)) && "air" == this.world.getFG(b, a + 1) && "air" == this.world.getFG(b, a + 2) && "air" == this.world.getFG(b, a + 3) && "air" == this.world.getFG(b, a + 4) && "air" == this.world.getFG(b, a + 5)) return this.world.setFG(b, a, "msb4"), this.makeGiantMushroom(b + 1, a, 1), this.requestRemove(b, a, !0, !0), !0;
        } else if ("ms2" == this.world.getFG(b, a)) {
            if (("dt" == this.world.getFG(b, a - 1) || "myc" == this.world.getFG(b, a - 1)) && "air" == this.world.getFG(b, a + 1) && "air" == this.world.getFG(b, a + 2) && "air" == this.world.getFG(b, a + 3) && "air" == this.world.getFG(b, a + 4) && "air" == this.world.getFG(b, a + 5)) return this.world.setFG(b, a, "msb2"), this.makeGiantMushroom(b + 1, a, 2), this.requestRemove(b, a, !0, !0), !0;
        } else {
            if ("bseed" == this.world.getFG(b, a) || "pseed" == this.world.getFG(b, a) || "wseed" == this.world.getFG(b, a) || "seed" == this.world.getFG(b, a) || "potato" == this.world.getFG(b, a) || "carrot" == this.world.getFG(b, a)) return 7 != this.world.wheat.h["blockX" + b + "Y" + a] && (this.world.wheat.h["blockX" + b + "Y" + a] = 7), !0;
            if ("dt" == this.world.getFG(b, a) && 1 == this.world.states.h["blockX" + b + "Y" + a] || "sd" == this.world.getFG(b, a)) {
                for (c = -5; 6 > c;) for (var d = c++, f = -5; 6 > f;) {
                    var g = f++;
                    "dt" == this.world.getFG(b + d, a + g) && 1 == this.world.states.h["blockX" + (b + d) + "Y" + (a + g)] && "air" == this.world.getFG(b + d, a + g + 1) ? 0 != Math.floor(3 * Math.random()) && (0 == Math.floor(30 * Math.random()) ? this.world.setFG(b + d, a + g + 1, "sl") : 0 == Math.floor(30 * Math.random()) ? this.world.setFG(b + d, a + g + 1, "sc") : 0 == Math.floor(5 * Math.random()) ? this.world.setFG(b + d, a + g + 1, "fw1") : 0 == Math.floor(5 * Math.random()) ? this.world.setFG(b + d, this.closestMinableBlock[1] + g + 1, "fw2") : 0 == Math.floor(5 * Math.random()) ? this.world.setFG(b + d, this.closestMinableBlock[1] + g + 1, "shrub") : 0 == Math.floor(15 * Math.random()) ? this.world.setFG(b + d, this.closestMinableBlock[1] + g + 1, "ms1") : 0 == Math.floor(15 * Math.random()) ? this.world.setFG(b + d, this.closestMinableBlock[1] + g + 1, "ms2") : this.world.setFG(b + d, this.closestMinableBlock[1] + g + 1, "lgr"), this.makeBlock(b + d, a + g + 1)) : "sd" == this.world.getFG(b + d, a + g) && "air" == this.world.getFG(b + d, a + g + 1) && 0 != Math.floor(3 * Math.random()) && (0 == Math.floor(5 * Math.random()) ? "air" == this.world.getFG(b + d - 1, a + g + 1) && "air" == this.world.getFG(b + d + 1, a + g + 1) && this.world.setFG(b + d, a + g + 1, "ct") : 0 == Math.floor(3 * Math.random()) ? "ct" != this.world.getFG(b + d - 1, a + g + 1) && "ct" != this.world.getFG(b + d + 1, a + g + 1) && this.world.setFG(b + d, a + g + 1, "shrub") : "ct" != this.world.getFG(b + d - 1, a + g + 1) && "ct" != this.world.getFG(b + d + 1, a + g + 1) && this.world.setFG(b + d, a + g + 1, "ds"), this.makeBlock(b + d, a + g + 1));
                }
                return !0;
            }
            if ("wr" == this.world.getFG(b, a) && this.isFullWater(b, a)) {
                for (c = -5; 6 > c;) for (d = c++, f = -5; 6 > f;) g = f++, "sd" != this.world.getFG(b + d, a + g) && "dt" != this.world.getFG(b + d, a + g) || "wr" != this.world.getFG(b + d, a + g + 1) || !this.isFullWater(b + d, a + g + 1) || 1 == BlockData.get(this.world.getFG(b + d - 1, a + g), "waterWalkThroughBlock") || 1 == BlockData.get(this.world.getFG(b + d + 1, a + g), "waterWalkThroughBlock") || 0 == Math.floor(3 * Math.random()) || (this.world.setFG(b + d, a + g + 1, "sw"), this.makeBlock(b + d, a + g + 1));
                return !0;
            }
        }
        return !1;
    },
    initVignette: function () {
        this.vignetteEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.GradientRadial.getShader());
        lemongine.shader.GradientRadial.setupEntity(this.vignetteEntity, [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], new lemongine.Color(0), new lemongine.Color(-872415232), new lemongine.Rectangle(.5, .5, .1, Math.sqrt(2) / 2));
        this.vignetteEntity.isTransparent = !0;
        this.vignetteEntity.layer = 4;
        this.vignetteEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.DST_ALPHA, lemongine.Lemongine.gl.ONE];
        this.vignetteEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
    },
    renderVignette: function () {
        null == this.vignetteEntity && this.initVignette();
        this.scene.draw(this.vignetteEntity);
    },
    getMobHead: function (b, a, c, d) {
        Object.prototype.hasOwnProperty.call(Textures.blockTextureMap.h, "mob_head[" + b + "]") ? a() : this.getSkinObject(b, function (c) {
            Textures.addTexture("mob_head[" + b + "]", c.skin, SkinLoader.getMobHeadRect(c.skin), d);
            a();
        }, function () {
            null != c && c();
        });
    },
    addEffect: function (b, a, c, d, f, l, p) {
        null == p && (p = 1);
        null == l && (l = !1);
        null == f && (f = !1);
        null == d && (d = 1);
        null == c && (c = 10);
        null == a && (a = "poison");
        b == this.world.player.id ? (b = new haxe.ds.StringMap(), b.h.duration = c, b.h.level = d, b.h.showIcon = f && -1 < this.effectIconLabels.indexOf(a), b.h.showParticles = l, b.h.potency = p, this.world.effects.h[a] = Game.makeDynamicMap(b), this.resetEffectIcons()) : Object.prototype.hasOwnProperty.call(this.world.mobs.h, b) && (f = Game.makeDynamicMap(this.world.mobs.h[b].h.effects), b = new haxe.ds.StringMap(), b.h.duration = c, b.h.level = d, b.h.showParticles = l, b.h.potency = p, f.h[a] = Game.makeDynamicMap(b));
    },
    manageEffects: function (b) {
        var a = !1,
            c = this.world.effects;
        if (b == this.world.player.id) a = !0;else if (null != this.world.mobs.h[b]) c = this.world.mobs.h[b].h.effects;else return;
        for (var d = Object.keys(c.h), f = d.length, l = 0; l < f;) {
            var p = d[l++];
            if (null == this.effectData.h[p]) Object.prototype.hasOwnProperty.call(c.h, p) && delete c.h[p], a && this.resetEffectIcons();else {
                var Q = c.h[p];
                null == Q.h.potency && (Q.h.potency = 1);
                var B = Q.h.potency;
                if ("instanthealth" == p || "instantdamage" == p) {
                    if (a) B = Math.floor(Math.min(20, this.world.health + B * Math.pow(2, Math.min(15, Math.max(0, Q.h.level - 1))) * Game.makeDynamicMap(this.effectData.h[p]).h.perLevel * 2)), B < Math.min(20, this.world.health) ? this.ouch(1, this.world.health - B, "potion") : this.world.health = B;else {
                        var m = "zombie" == this.world.mobs.h[b].h.type || "skeleton" == this.world.mobs.h[b].h.type || "zombiepigman" == this.world.mobs.h[b].h.type ? Math.floor(this.world.mobs.h[b].h.health - B * Math.pow(2, Math.min(15, Math.max(0, Q.h.level - 1))) * Game.makeDynamicMap(this.effectData.h[p]).h.perLevel * 2) : Math.floor(this.world.mobs.h[b].h.health + B * Math.pow(2, Math.min(15, Math.max(0, Q.h.level - 1))) * Game.makeDynamicMap(this.effectData.h[p]).h.perLevel * 2);
                        m < this.world.mobs.h[b].h.health ? this.getMob(b).hurtMob(b, this.world.mobs.h[b].h.health - m, "potion") : (B = this.world.mobs.h[b], m = Math.min(this.getMob(b).mobMaxHealth(b), m), B.h.health = m);
                    }
                    --Q.h.duration;
                    if (0 >= Q.h.duration) {
                        Object.prototype.hasOwnProperty.call(c.h, p) && delete c.h[p];
                        a && this.resetEffectIcons();
                        continue;
                    }
                } else if (0 == this.world.tick % Main.Instance.get_fps()) {
                    if (0 >= Q.h.duration) {
                        Object.prototype.hasOwnProperty.call(c.h, p) && delete c.h[p];
                        a && this.resetEffectIcons();
                        continue;
                    }
                    --Q.h.duration;
                }
                null == Q.h.level && (Q.h.level = 1);
                switch (p) {
                case "hunger":
                    a && 20 < this.world.food && 0 == this.world.tick % Main.Instance.get_fps() && (this.world.food -= Math.floor(6.25 * Q.h.level));
                    break;
                case "poison":
                    0 == this.world.tick % Math.max(1, Math.floor(2 * Main.Instance.get_fps() / Math.pow(2, Q.h.level))) && (a ? 1 < this.world.health && this.ouch(1, 1, "poison") : 1 < this.world.mobs.h[b].h.health && this.getMob(b).hurtMob(b, 1, "poison"));
                    break;
                case "regeneration":
                    0 == this.world.tick % Math.max(1, Math.floor(2.5 * Main.Instance.get_fps() / Math.pow(2, Q.h.level))) && (a ? (20 > this.world.health && (this.world.health += 1), 1E3 > this.world.food && (this.world.food += 50)) : "zombie" == this.world.mobs.h[b].h.type || "skeleton" == this.world.mobs.h[b].h.type || "zombiepigman" == this.world.mobs.h[b].h.type ? (B = this.world.mobs.h[b], --B.h.health) : this.world.mobs.h[b].h.health < this.world.mobData.h[this.world.mobs.h[b].h.type].h.health && (B = this.world.mobs.h[b], B.h.health += 1));
                }
                1 == Q.h.showParticles && .2 > Math.random() && (a ? (Q = new lemongine.Point(this.world.worldX, 0), B = new lemongine.Point(this.world.worldY - 1, 0), m = new haxe.ds.StringMap(), m.h.r = this.effectData.h[p].h.r, m.h.g = this.effectData.h[p].h.g, m.h.b = this.effectData.h[p].h.b, this.addParticles("effect", 1, 0, Q, B, !1, m)) : (Q = new lemongine.Point(this.world.mobs.h[b].h.x, 0), B = new lemongine.Point(this.world.mobs.h[b].h.y, 0), m = new haxe.ds.StringMap(), m.h.r = this.effectData.h[p].h.r, m.h.g = this.effectData.h[p].h.g, m.h.b = this.effectData.h[p].h.b, this.addParticles("effect", 1, 0, Q, B, !1, m)));
            }
        }
    },
    getSkinObject: function (b, a, c) {
        null == b && (b = "1");
        var d = !0;
        if (!Object.prototype.hasOwnProperty.call(this.loadedSkinFrames.h, b)) {
            d = this.loadedSkinFrames;
            var f = new Skin();
            d.h[b] = f;
            this.loadedSkinFrames.h[b].resetFrames();
            Object.prototype.hasOwnProperty.call(this.world.loadedSkins.h, b) && this.world.loadedSkins.h[b].loaded ? (this.loadedSkinFrames.h[b] = this.world.loadedSkins.h[b], null != a && a(this.loadedSkinFrames.h[b])) : SkinLoader.getSkinFrom("https://mineblocks.com/1/skins/" + b + ".png", this.loadedSkinFrames.h[b], 0, a, c);
            d = !1;
        } else if (0 == this.loadedSkinFrames.h[b].loading) if (1 != this.loadedSkinFrames.h[b].failed) {
            if (Object.prototype.hasOwnProperty.call(this.world.loadedSkins.h, b) || (this.world.loadedSkins.h[b] = this.loadedSkinFrames.h[b]), d = !1, null != a && a(this.loadedSkinFrames.h[b]), Object.prototype.hasOwnProperty.call(this.skinLoadingCallbacks.h, b)) {
                f = 0;
                for (var g = this.skinLoadingCallbacks.h[b].success.length; f < g;) this.skinLoadingCallbacks.h[b].success[f++](this.loadedSkinFrames.h[b]);
                f = this.skinLoadingCallbacks;
                Object.prototype.hasOwnProperty.call(f.h, b) && delete f.h[b];
            }
        } else if (d = !1, null != c && c(), Object.prototype.hasOwnProperty.call(this.skinLoadingCallbacks.h, b)) {
            f = 0;
            for (g = this.skinLoadingCallbacks.h[b].fail.length; f < g;) this.skinLoadingCallbacks.h[b].fail[f++]();
            f = this.skinLoadingCallbacks;
            Object.prototype.hasOwnProperty.call(f.h, b) && delete f.h[b];
        }
        !d || null == a && null == c || (Object.prototype.hasOwnProperty.call(this.skinLoadingCallbacks.h, b) ? (null != a && this.skinLoadingCallbacks.h[b].success.push(a), null != c && this.skinLoadingCallbacks.h[b].fail.push(c)) : this.skinLoadingCallbacks.h[b] = {
            success: null != a ? [a] : [],
            fail: null != c ? [c] : []
        });
        return this.loadedSkinFrames.h[b];
    },
    renderSelector: function () {
        this.blockSelector.transform.reset().translate(.5, -.5).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(this.selectedBlockPoint.x, -this.selectedBlockPoint.y).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.scene.draw(this.blockSelector);
    },
    renderCracks: function (b, a, c) {
        this.miningCracks.transform.reset().translate(.5, -.5).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(this.selectedBlockPoint.x, -this.selectedBlockPoint.y).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.miningCracks.setUniform("texClip", Textures.getTexture("break", Math.max(1, Math.min(5, Math.floor(5 * c) + 1))).toArray());
        this.scene.draw(this.miningCracks);
    },
    renderReticle: function () {
        this.reticleLine.transform.reset().translate(-25, 0).translate(116, 0).rotate(this.rotAngle, new lemongine.Vector3(0, 0, -1)).scale(.03333333333333333, .03333333333333333, .03333333333333333).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(Math.floor(this.world.worldX * this.zoom) / this.zoom, Math.floor((this.world.worldY - 1) * this.zoom) / this.zoom).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.reticlePlus.transform.reset().rotate(-this.rotAngle, new lemongine.Vector3(0, 0, -1)).translate(116, 0).rotate(this.rotAngle, new lemongine.Vector3(0, 0, -1)).scale(.03333333333333333, .03333333333333333, .03333333333333333).translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(Math.floor(this.world.worldX * this.zoom) / this.zoom, Math.floor((this.world.worldY - 1) * this.zoom) / this.zoom).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.scene.draw(this.reticleLine);
        this.scene.draw(this.reticlePlus);
    },
    initSky: function () {
        this.backgroundImage = 2 == this.world.sceneNum ? lemongine.AssetManager.getImage("nether_bg") : lemongine.AssetManager.getImage("ender_bg");
        this.background = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1, !1, !0), lemongine.shader.BasicTextureSingle.getShader());
        this.background.setTextureBuffer("texture", this.backgroundImage);
        this.background.setUniform("texSize", [this.backgroundImage.width, this.backgroundImage.height]);
        this.background.setUniform("texClip", [0, 0, this.backgroundImage.width, this.backgroundImage.height]);
        this.background.setUniform("color", [1, 1, 1, 1]);
        this.background.setUniform("colorOffset", [0, 0, 0, 0]);
        this.background.setUniform("wrap", [1, 0]);
        this.background.transform.translate(.5, .5, 0).scale(this.scene.get_width(), this.scene.get_height(), 0);
        this.background.layer = -11;
        this.farGradient = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1, !1, !0), lemongine.shader.BasicVertexColor.getShader());
        this.farGradient.transform.translate(.5, .5, 0).scale(this.scene.get_width(), this.scene.get_height(), 0);
        this.farGradient.layer = -10;
        this.updateFarGradient();
        this.closeGradient = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1, !1, !0), lemongine.shader.BasicVertexColor.getShader());
        this.closeGradient.transform.translate(.5, .5, 0).scale(this.scene.get_width(), this.scene.get_height(), 0);
        this.closeGradient.layer = -9;
        this.closeGradient.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA];
        this.updateCloseGradient();
        this.starsImage = lemongine.AssetManager.getImage("stars");
        this.stars = new lemongine.Entity([], lemongine.Geom.createQuad(G.toFloat(this.starsImage.width), G.toFloat(this.starsImage.height), !1, !0), lemongine.shader.BasicTextureSingle.getShader());
        this.stars.setTextureBuffer("texture", this.starsImage);
        this.stars.setUniform("texSize", [this.starsImage.width, this.starsImage.height]);
        this.stars.setUniform("texClip", [0, 0, this.starsImage.width, this.starsImage.height]);
        this.stars.setUniform("color", [1, 1, 1, 1]);
        this.stars.setUniform("colorOffset", [0, 0, 0, 0]);
        this.stars.setUniform("wrap", [1, 0]);
        this.stars.transform.translate(-1E3, -1E3, 0);
        this.stars.isTransparent = !0;
        this.stars.layer = -8;
        this.sunAndMoonImage = lemongine.AssetManager.getImage("sun_and_moon");
        this.sun = new lemongine.Entity([], lemongine.Geom.createQuad(G.toFloat(this.sunAndMoonImage.height), G.toFloat(this.sunAndMoonImage.height), !1, !0), lemongine.shader.BasicTextureSingle.getShader());
        this.sun.setTextureBuffer("texture", this.sunAndMoonImage);
        this.sun.setUniform("texSize", [this.sunAndMoonImage.width, this.sunAndMoonImage.height]);
        this.sun.setUniform("texClip", [0, 0, this.sunAndMoonImage.height, this.sunAndMoonImage.height]);
        this.sun.setUniform("color", [1, 1, 1, 1]);
        this.sun.setUniform("colorOffset", [0, 0, 0, 0]);
        this.sun.setUniform("wrap", [1, 0]);
        this.sun.customBlendFunc = [lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA];
        this.sun.transform.scale(3.375, 3.375, 1).translate(-100, -100, 0);
        this.sun.isTransparent = !0;
        this.sun.layer = -7;
        this.moon = new lemongine.Entity([], lemongine.Geom.createQuad(G.toFloat(this.sunAndMoonImage.height), G.toFloat(this.sunAndMoonImage.height), !1, !0), lemongine.shader.BasicTextureSingle.getShader());
        this.moon.setTextureBuffer("texture", this.sunAndMoonImage);
        this.moon.setUniform("texSize", [this.sunAndMoonImage.width, this.sunAndMoonImage.height]);
        this.moon.setUniform("texClip", [this.sunAndMoonImage.height, 0, this.sunAndMoonImage.height, this.sunAndMoonImage.height]);
        this.moon.setUniform("color", [1, 1, 1, 1]);
        this.moon.setUniform("colorOffset", [0, 0, 0, 0]);
        this.moon.setUniform("wrap", [1, 0]);
        this.moon.customBlendFunc = [lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA];
        this.moon.transform.scale(3.375, 3.375, 1).translate(-100, -100, 0);
        this.moon.isTransparent = !0;
        this.moon.layer = -7;
        this.updateCelestialBodies();
        this.bgTreesImage = lemongine.AssetManager.getImage("background_trees");
        this.backgroundLoop = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1, !1, !0), lemongine.shader.BasicTextureSingle.getShader());
        this.backgroundLoop.setTextureBuffer("texture", this.bgTreesImage);
        this.backgroundLoop.setUniform("texSize", [this.bgTreesImage.width, this.bgTreesImage.height]);
        this.backgroundLoop.setUniform("color", [1, 1, 1, 1]);
        this.backgroundLoop.setUniform("colorOffset", [0, 0, 0, 0]);
        this.backgroundLoop.setUniform("wrap", [1, 0]);
        this.backgroundLoop.transform.reset().translate(.5, .5, 0).scale(this.scene.get_width(), this.scene.get_height(), 0);
        this.backgroundLoop.isTransparent = !0;
        this.backgroundLoop.layer = -6;
    },
    resize: function () {
        this.background.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        this.farGradient.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        this.closeGradient.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        this.backgroundLoop.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        null != this.vignetteEntity && this.vignetteEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        this.updateCelestialBodies();
        this.vectorRenderer.setDimensions(this.scene.get_width(), this.scene.get_height());
        this.vectorEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        null != this.hotbarEntity && this.updateHotbarBounds();
        this.lighting.resize();
        this.blackScreen.resize();
        this.touchScale = this.scene.get_width() / 552;
        this.touchPadPosition.set(10 + 50 * this.touchScale, this.scene.get_height() - 10 - 50 * this.touchScale);
        this.touchButtonPosition1.set(this.scene.get_width() - 10 - 100 * this.touchScale, this.scene.get_height() - 3 * (11 + 34 * this.touchScale));
        this.touchButtonPosition2.set(this.scene.get_width() - 10 - 100 * this.touchScale, this.scene.get_height() - 2 * (11 + 34 * this.touchScale));
        this.touchButtonPosition3.set(this.scene.get_width() - 10 - 100 * this.touchScale, this.scene.get_height() - (11 + 34 * this.touchScale));
        null != this.inventario && this.inventario.resize();
    },
    updateCelestialBodies: function () {
        var b = this.world.tim / 100;
        0 != this.getGameRule("doDaylightCycle") && (b += this.world.tick % 600 / 600 / 100);
        var a = (1.5 + (b + .2544) % 1 * -2.193) * Math.PI;
        this.sun.transform.setPosition(241 * Math.cos(a) + this.scene.get_width() / 2, 241 * -Math.sin(a) + 310, 0);
        a = (1.5 + (b + .7514) % 1 * -2.193) * Math.PI;
        this.moon.transform.setPosition(241 * Math.cos(a) + this.scene.get_width() / 2, 241 * -Math.sin(a) + 310, 0);
        this.stars.setUniform("color", [1, 1, 1, lemongine.Mathz.clamp(0, 1, 5 - Math.abs((b - .7) / .04))]);
        this.stars.transform.reset().scale(2.1978, 2.1978).rotate(Math.PI / 2 - Math.PI / 2 * ((b - .5) / .4), new lemongine.Vector3(0, 0, 1)).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 30);
    },
    renderSky: function () {
        1 == this.world.sceneNum ? (0 == this.world.tick % 10 && this.updateFarGradient(), 0 == this.world.tick % 60 && (this.updateCelestialBodies(), this.updateCloseGradient()), this.updateTrees(), this.scene.draw(this.farGradient), this.scene.draw(this.closeGradient), this.scene.draw(this.stars), this.scene.draw(this.sun), this.scene.draw(this.moon), this.scene.draw(this.backgroundLoop)) : 2 == this.world.sceneNum ? this.scene.draw(this.background) : 3 == this.world.sceneNum && (this.bgPlaying && (4 >= this.bgFrame && this.background.setUniform("colorOffset", [(1 - this.bgFrame / 4) / 4, (1 - this.bgFrame / 4) / 4, (1 - this.bgFrame / 4) / 4, 0]), 4 == this.bgFrame ? (this.bgPlaying = !1, this.bgFrame = 0) : this.bgFrame++), this.scene.draw(this.background));
    },
    updateFarGradient: function () {
        this.farGradient.setAttrib("color", [.3254901960784314 * (1 - this.darkness) + .0392156862745098 * this.darkness, .6431372549019608 * (1 - this.darkness) + .050980392156862744 * this.darkness, .8705882352941177 * (1 - this.darkness) + .12941176470588237 * this.darkness, 1, .6862745098039216 * (1 - this.darkness) + .09019607843137255 * this.darkness, .5372549019607843 * (1 - this.darkness) + .10588235294117647 * this.darkness, .7607843137254902 * (1 - this.darkness) + .20784313725490197 * this.darkness, 1, .3254901960784314 * (1 - this.darkness) + .0392156862745098 * this.darkness, .6431372549019608 * (1 - this.darkness) + .050980392156862744 * this.darkness, .8705882352941177 * (1 - this.darkness) + .12941176470588237 * this.darkness, 1, .6862745098039216 * (1 - this.darkness) + .09019607843137255 * this.darkness, .5372549019607843 * (1 - this.darkness) + .10588235294117647 * this.darkness, .7607843137254902 * (1 - this.darkness) + .20784313725490197 * this.darkness, 1]);
    },
    updateCloseGradient: function () {
        var b = this.world.tim / 100 + this.world.tick % 600 / 600 / 100;
        .057 >= b ? (b /= .057, this.closeGradient.setAttrib("color", [1, 1, 1, 0, 1, .6, 0, 1 - b, 1, 1, 1, 0, 1, .6, 0, 1 - b])) : .028 >= b - .373 ? (b = Math.max(0, (b - .373) / .028), this.closeGradient.setAttrib("color", [1, 1, 1, 0, 1, .6, 0, b, 1, 1, 1, 0, 1, .6, 0, b])) : .026 >= b - .401 ? (b = (b - .401) / .026, this.closeGradient.setAttrib("color", [1, 1, 1, 0, 1, .6, 0, 1 - b, 1, 1, 1, 0, 1, .6, 0, 1 - b])) : .534 >= b - .427 ? (b = Math.min(1, (b - .427) / .137), this.closeGradient.setAttrib("color", [1 - b, 1 - b, 1 - b, b, 1 - b, .6 * (1 - b), 0 * (1 - b), .4980392156862745 * b, 1 - b, 1 - b, 1 - b, b, 1 - b, .6 * (1 - b), 0 * (1 - b), .4980392156862745 * b])) : (b = Math.min(1, (b - .961) / .039), this.closeGradient.setAttrib("color", [b, b, b, 1 - b, b, .6 * b, 0 * b, .4980392156862745 * (1 - b) + b, b, b, b, 1 - b, b, .6 * b, 0 * b, .4980392156862745 * (1 - b) + b]));
    },
    updateTrees: function () {
        var b = Math.floor(705 - G.toFloat(this.bgTreesImage.width) - ((30 * -this.camera.x + this.scene.get_width() / 2) / 15 - 100 * Math.floor((30 * -this.camera.x + this.scene.get_width() / 2) / 1500)) / 100 * (0 - G.toFloat(this.bgTreesImage.width)) - 989 + 282);
        var a = 70 == this.world.worldHeight ? Math.floor((30 * -this.camera.y - this.scene.get_height() / 2) / 3 - 430) - 341 + 209 : Math.floor(Math.max(-170, (30 * -this.camera.y + this.scene.get_height() / 2) / 3 - 1E3)) - 341 + 209;
        this.backgroundLoop.setUniform("texClip", [-b, -a, this.scene.get_width(), this.scene.get_height()]);
    },
    runBlockEventsFrame: function () {
        for (var b = Math.floor(this.camera.x), a = -Math.floor(this.camera.y), c = -5; 5 > c;) for (var d = c++, f = -4; 4 > f;) {
            var g = f++;
            null != this.world.getChunk(b + 8 * d, a + 8 * g) && this.world.getChunk(b + 8 * d, a + 8 * g).runBlockEventsFrame();
        }
    },
    renderWorld: function () {
        var b = Math.floor(this.camera.x / 16),
            a = -Math.floor(this.camera.y / 16),
            c = Math.ceil(this.scene.get_width() / 16 / this.zoom),
            d = Math.ceil(this.scene.get_height() / 16 / this.zoom),
            f = -c - 1;
        for (c += 1; f < c;) for (var g = f++, p = -d - 1, k = d + 1; p < k;) this.renderChunk(b + g, a + p++);
    },
    getRenderChunk: function (b, a, c) {
        null == c && (c = !1);
        b = Math.floor(b / 16);
        var d = Math.floor(a / 16);
        a = this.world.sceneNum + ":" + b + "," + d;
        if (!Object.prototype.hasOwnProperty.call(this.renderChunks.h, a)) if (c) c = new RenderChunk(b, d, this.world), c.render(), this.renderChunks.h[a] = c, this.renderChunks.h[a].entity.layer = -3;else return null;
        return this.renderChunks.h[a];
    },
    renderChunk: function (b, a) {
        var c = this.getRenderChunk(16 * b, 16 * a, !0);
        c.renderChanges();
        0 != c.blocksRendering && (c.entity.transform.reset().translate(Math.floor(-this.camera.x * this.zoom) / this.zoom, Math.floor(-this.camera.y * this.zoom) / this.zoom).translate(16 * b, 16 * -(a + 1)).scale(this.zoom, this.zoom, this.zoom).translate(this.scene.get_width() / 2, this.scene.get_height() / 2), this.scene.draw(c.entity));
    },
    renderBlock: function (b, a) {
        var c = this.getRenderChunk(b, a, !1);
        null != c && c.addChange(b, a);
    },
    exit: function () {
        this.world.savee();
        this.playingRainSound && (this.playingRainSound = !1, lemongine.AssetManager.getSound("rainsound_0").stop());
        lemongine.AssetManager.getSound("underwater_0").stop();
        lemongine.Audio.stopAll(lemongine.AudioTag.MUSIC);
        Main.Instance.set_frame("menu");
        Main.Instance.mainMenu.gotoAndStop(1);
    },
    mMC: function () {
        if (!this.cantMove) {
            var b = this.selectedBlock();
            if (null != b && "air" != this.world.getFG(b.x, b.y)) {
                for (var a = 0; 45 > a;) {
                    var c = a++;
                    if (this.blockMatchesItem(b.x | 0, b.y | 0, this.world.inventoryItem(c))) {
                        if (9 > c) this.world.set_selectedInventoryItem(c);else {
                            for (b = 0; 9 > b;) if (a = b++, this.isEmpty(a)) {
                                this.world.setInventoryItem(a, this.world.inventoryItem(c));
                                this.world.setInventoryItem(c, Game.emptyItem());
                                this.world.set_selectedInventoryItem(a);
                                this.updateSelectedInventoryItemStuff();
                                this.currentlyMining = "";
                                this.currentlyMiningBlock = [-1E4, -1E4];
                                return;
                            }
                            b = this.world.inventoryItem(c);
                            this.world.setInventoryItem(c, this.world.inventoryItem(this.world.selectedInventoryItem));
                            this.world.setInventoryItem(this.world.selectedInventoryItem, b);
                        }
                        this.updateSelectedInventoryItemStuff();
                        this.currentlyMining = "";
                        this.currentlyMiningBlock = [-1E4, -1E4];
                        return;
                    }
                }
                if (1 == this.world.gamemode) {
                    for (a = 0; 9 > a;) if (c = a++, this.isEmpty(c)) {
                        this.world.setInventoryItem(c, this.itemFromBlock(b.x | 0, b.y | 0));
                        this.world.set_selectedInventoryItem(c);
                        this.updateSelectedInventoryItemStuff();
                        this.currentlyMining = "";
                        this.currentlyMiningBlock = [-1E4, -1E4];
                        return;
                    }
                    this.world.setInventoryItem(this.world.selectedInventoryItem, this.itemFromBlock(b.x | 0, b.y | 0));
                    this.updateSelectedInventoryItemStuff();
                    this.currentlyMining = "";
                    this.currentlyMiningBlock = [-1E4, -1E4];
                }
            }
        }
    },
    blockMatchesItem: function (b, a, c) {
        if ("air" == this.world.getFG(b, a) && Game.isEmptyItem(c)) return !0;
        b = this.itemFromBlock(b, a);
        return b[0] == c[0] && Game.hasExtras(c[3], b[3]) ? !0 : !1;
    },
    mD2: function () {
        G.gt(Main.Instance.keyDown(1073742050), 0) || G.gt(Main.Instance.keyDown(1073742054), 0) ? this.mMC() : GlobalSave.touchControls || (this.shifting ? (this.treatingClickAsRightClick = !0, this.rightClickDown()) : (this.mouseD = 1, this.gCMTimer = 20, this.world.tick - this.lastMouseDown > .3 * Main.Instance.get_fps() ? this.isDoubleClick = this.isDoubleClick ? !1 : !0 : this.isDoubleClick = !1, this.lastMouseDown = this.world.tick));
    },
    mU2: function () {
        GlobalSave.touchControls || (this.treatingClickAsRightClick ? this.rightClickUp() : (this.mouseD = 0, this.waitTillMouseIsUp = !1));
    },
    rMD: function () {
        GlobalSave.touchControls || this.rightClickDown();
    },
    rMU: function () {
        GlobalSave.touchControls || this.rightClickUp();
    },
    rightClickDown: function () {
        0 != this.rMouseD ? this.rMouseD = 0 : (this.rMouseD = 1, this.world.tick - this.lastRightMouseDown > .3 * Main.Instance.get_fps() ? this.isDoubleRightClick = this.isDoubleRightClick ? !1 : !0 : this.isDoubleRightClick = !1, this.lastRightMouseDown = this.world.tick);
    },
    rightClickUp: function () {
        this.rMouseD = 0;
        this.treatingClickAsRightClick = this.waitTillRightMouseIsUp = !1;
    },
    mouseWheelHandler: function () {
        if (this.mouseWheelThing && 1 == this.blackScreen.currentFrame) {
            this.requestSound("tick", 0, 0);
            if (8 == this.world.selectedInventoryItem && 0 > Main.Instance.mouseWheelDelta) this.world.set_selectedInventoryItem(0);else if (0 == this.world.selectedInventoryItem && 0 < Main.Instance.mouseWheelDelta) this.world.set_selectedInventoryItem(8);else {
                var b = this.world;
                b.set_selectedInventoryItem(b.selectedInventoryItem + (0 > Main.Instance.mouseWheelDelta ? 1 : -1));
            }
            this.updateSelectedInventoryItemStuff();
            this.currentlyMining = "";
            this.currentlyMiningBlock = [-1E3, -1E3];
        }
        this.mouseWheelThing = !1;
    },
    __class__: Game
}
Game.deeplink = DEEPLINK.NONE
Game.newgroundsAchievementNames = "Mine Wood;Place Block;Open Inventory;Crafting Table;Wooden Pickaxe;Stone Pickaxe;Iron Pickaxe;Furnace;Iron Ingot;Torches;Grow Tree;Tame a Dog;Kill a Pig;Kill a Cow;Kill a Sheep;Kill a Zombie;Kill a Skeleton;Kill a Spider;Kill a Nethereye;Kill a Blaze;Kill an Enderman;Kill a Creeper;Kill a Flaming Chicken;Grow Wheat;Make Cake;Eat Food;Use a Bed;Mine Obsidian;Mine Gold;Mine Diamonds;Make Portal Stone;Go to the Nether;Open Door with Wiring;Fire a Bow;Teleport;Unlock Ender Portal;Slay the Ender Dragon;Kill a Slime;Kill a Magma Cube;Fish a Fish;Blacksmith;Kill a Zombie Pigman;Return to Sender;Brew a Potion;Breed Two Animals;Enchant an Item".split(";")
Game.achievements = "Mine a block of wood;Place a block;Open the inventory;Craft a crafting table;Craft a wooden pickaxe;Craft a stone pickaxe;Craft an iron pickaxe;Make a furnace;Make an iron ingot;Make some torches;Grow a tree;Tame a dog;Slay a pig;Slay a cow;Slay a sheep;Slay a zombie;Slay a skeleton;Slay a spider;Slay a nethereye;Slay a blaze;Slay an enderman;Slay a creeper;Defeat a flaming chicken;Grow a farm;Make a cake;Eat some food;Use a bed;Mine obsidian;Mine gold;Mine diamonds;Make portal stone;Travel to the nether;Open a door with wiring;Fire a bow;Teleport with enderpearl;Unlock the ender portal;Slay the ender dragon;Slay a slime;Slay a magma cube;Fish a fish;Use an anvil;Slay a zombie pigman;Slay a ghast by its fireball;Brew a potion;Breed two animals;Enchant an item".split(";")
Game.biomes = "forest plain water desert mountain ruins mushroom".split(" ")
Game.enchantTypes = function (b) {
    b = new haxe.ds.StringMap();
    var a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.protection1 = 1;
    a.h.protection2 = 5;
    a.h.protection3 = 12;
    a.h.protection4 = 21;
    a.h.protection5 = 28;
    a.h.protectionFire1 = 6;
    a.h.protectionFire2 = 8;
    a.h.protectionFire3 = 16;
    a.h.protectionBlast1 = 3;
    a.h.protectionBlast2 = 6;
    a.h.protectionBlast3 = 14;
    a.h.protectionProjectile1 = 3;
    a.h.protectionProjectile2 = 10;
    a.h.protectionProjectile3 = 17;
    a.h.respiration1 = 6;
    a.h.respiration2 = 11;
    a.h.respiration3 = 18;
    a.h.aguaAffinity = 10;
    b.h.Caps = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.protection1 = 1;
    a.h.protection2 = 5;
    a.h.protection3 = 12;
    a.h.protection4 = 21;
    a.h.protection5 = 28;
    a.h.protectionFire1 = 6;
    a.h.protectionFire2 = 8;
    a.h.protectionFire3 = 16;
    a.h.protectionBlast1 = 3;
    a.h.protectionBlast2 = 6;
    a.h.protectionBlast3 = 14;
    a.h.protectionProjectile1 = 3;
    a.h.protectionProjectile2 = 10;
    a.h.protectionProjectile3 = 17;
    a.h.thorns1 = 9;
    a.h.thorns2 = 13;
    a.h.thorns3 = 20;
    b.h.Shirts = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.protection1 = 1;
    a.h.protection2 = 5;
    a.h.protection3 = 12;
    a.h.protection4 = 21;
    a.h.protection5 = 28;
    a.h.protectionFire1 = 6;
    a.h.protectionFire2 = 8;
    a.h.protectionFire3 = 16;
    a.h.protectionBlast1 = 3;
    a.h.protectionBlast2 = 6;
    a.h.protectionBlast3 = 14;
    a.h.protectionProjectile1 = 3;
    a.h.protectionProjectile2 = 10;
    a.h.protectionProjectile3 = 17;
    b.h.Pants = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.protection1 = 1;
    a.h.protection2 = 7;
    a.h.protection3 = 12;
    a.h.protection4 = 21;
    a.h.protection5 = 28;
    a.h.protectionFire1 = 6;
    a.h.protectionFire2 = 8;
    a.h.protectionFire3 = 16;
    a.h.protectionBlast1 = 3;
    a.h.protectionBlast2 = 6;
    a.h.protectionBlast3 = 14;
    a.h.protectionProjectile1 = 3;
    a.h.protectionProjectile2 = 10;
    a.h.protectionProjectile3 = 17;
    a.h.protectionFalling1 = 7;
    a.h.protectionFalling2 = 17;
    a.h.protectionFalling3 = 29;
    a.h.frostWalker1 = 24;
    a.h.frostWalker2 = 29;
    a.h.depthStrider1 = 14;
    a.h.depthStrider2 = 20;
    a.h.depthStrider3 = 24;
    b.h.Shoes = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.sharpness1 = 2;
    a.h.sharpness2 = 8;
    a.h.sharpness3 = 19;
    a.h.sharpness4 = 27;
    a.h.smite1 = 2;
    a.h.smite2 = 7;
    a.h.smite3 = 15;
    a.h.smite4 = 22;
    a.h.baneOfArthropods1 = 6;
    a.h.baneOfArthropods2 = 15;
    a.h.baneOfArthropods3 = 21;
    a.h.knockback1 = 8;
    a.h.knockback2 = 12;
    a.h.knockback3 = 24;
    a.h.fireAspect = 20;
    a.h.looting1 = 10;
    a.h.looting2 = 17;
    a.h.looting3 = 25;
    b.h.Swords = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.efficiency1 = 7;
    a.h.efficiency2 = 20;
    a.h.silkTouch = 23;
    a.h.fortune1 = 20;
    a.h.fortune2 = 24;
    a.h.fortune3 = 38;
    a.h.sharpness1 = 2;
    a.h.sharpness2 = 8;
    a.h.sharpness3 = 19;
    a.h.sharpness4 = 27;
    a.h.smite1 = 2;
    a.h.smite2 = 7;
    a.h.smite3 = 15;
    a.h.smite4 = 22;
    a.h.baneOfArthropods1 = 6;
    a.h.baneOfArthropods2 = 15;
    a.h.baneOfArthropods3 = 21;
    a.h.knockback1 = 8;
    a.h.knockback2 = 12;
    a.h.knockback3 = 24;
    a.h.fireAspect = 20;
    a.h.looting1 = 10;
    a.h.looting2 = 17;
    a.h.looting3 = 25;
    b.h.Axes = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.efficiency1 = 7;
    a.h.efficiency2 = 20;
    a.h.silkTouch = 14;
    a.h.fortune1 = 15;
    a.h.fortune2 = 17;
    a.h.fortune3 = 19;
    b.h.Pickaxes = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.efficiency1 = 7;
    a.h.efficiency2 = 20;
    a.h.silkTouch = 14;
    a.h.fortune1 = 15;
    a.h.fortune2 = 17;
    a.h.fortune3 = 19;
    b.h.Shovels = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    b.h.Hoes = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.efficiency1 = 7;
    a.h.efficiency2 = 20;
    a.h.silkTouch = 14;
    b.h.Shears = a;
    a = new haxe.ds.StringMap();
    a.h.luckOfTheSea1 = 8;
    a.h.luckOfTheSea2 = 12;
    a.h.luckOfTheSea3 = 20;
    a.h.lure1 = 4;
    a.h.lure2 = 8;
    a.h.lure3 = 15;
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    b.h.FishingRods = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    b.h.FlintAndSteel = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    b.h.CarrotOnStick = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 5;
    a.h.unbreaking3 = 13;
    a.h.unbreaking4 = 20;
    a.h.power1 = 8;
    a.h.power2 = 15;
    a.h.power3 = 26;
    a.h.punch1 = 10;
    a.h.punch2 = 20;
    a.h.flame = 20;
    a.h.infinity = 20;
    b.h.Bows = a;
    a = new haxe.ds.StringMap();
    a.h.unbreaking1 = 1;
    a.h.unbreaking2 = 3;
    a.h.unbreaking3 = 7;
    a.h.unbreaking4 = 10;
    b.h.Balloons = a;
    return b;
}(this)
Game.enchantmentNames = function (b) {
    b = new haxe.ds.StringMap();
    b.h.depthStrider1 = "Depth Strider I";
    b.h.depthStrider2 = "Depth Strider II";
    b.h.depthStrider3 = "Depth Strider III";
    b.h.frostWalker1 = "Frost Walker I";
    b.h.frostWalker2 = "Frost Walker II";
    b.h.unbreaking1 = "Unbreaking I";
    b.h.unbreaking2 = "Unbreaking II";
    b.h.unbreaking3 = "Unbreaking III";
    b.h.unbreaking4 = "Unbreaking IV";
    b.h.protection1 = "Protection I";
    b.h.protection2 = "Protection II";
    b.h.protection3 = "Protection III";
    b.h.protection4 = "Protection IV";
    b.h.protection5 = "Protection V";
    b.h.protectionFire1 = "Fire Protection I";
    b.h.protectionFire2 = "Fire Protection II";
    b.h.protectionFire3 = "Fire Protection III";
    b.h.protectionBlast1 = "Blast Protection I";
    b.h.protectionBlast2 = "Blast Protection II";
    b.h.protectionBlast3 = "Blast Protection III";
    b.h.protectionProjectile1 = "Projectile Protection I";
    b.h.protectionProjectile2 = "Projectile Protection II";
    b.h.protectionProjectile3 = "Projectile Protection III";
    b.h.protectionFalling1 = "Feather Falling I";
    b.h.protectionFalling2 = "Feather Falling II";
    b.h.protectionFalling3 = "Feather Falling III";
    b.h.thorns1 = "Thorns I";
    b.h.thorns2 = "Thorns II";
    b.h.thorns3 = "Thorns III";
    b.h.respiration1 = "Respiration I";
    b.h.respiration2 = "Respiration II";
    b.h.respiration3 = "Respiration III";
    b.h.aguaAffinity = "Aqua Affinity";
    b.h.sharpness1 = "Sharpness I";
    b.h.sharpness2 = "Sharpness II";
    b.h.sharpness3 = "Sharpness III";
    b.h.sharpness4 = "Sharpness IV";
    b.h.smite1 = "Smite I";
    b.h.smite2 = "Smite II";
    b.h.smite3 = "Smite III";
    b.h.smite4 = "Smite IV";
    b.h.baneOfArthropods1 = "Bane of Arthropods I";
    b.h.baneOfArthropods2 = "Bane of Arthropods II";
    b.h.baneOfArthropods3 = "Bane of Arthropods III";
    b.h.knockback1 = "Knockback I";
    b.h.knockback2 = "Knockback II";
    b.h.knockback3 = "Knockback III";
    b.h.fireAspect = "Fire Aspect";
    b.h.looting1 = "Looting I";
    b.h.looting2 = "Looting II";
    b.h.looting3 = "Looting III";
    b.h.efficiency1 = "Efficiency I";
    b.h.efficiency2 = "Efficiency II";
    b.h.silkTouch = "Silk Touch";
    b.h.fortune1 = "Fortune I";
    b.h.fortune2 = "Fortune II";
    b.h.fortune3 = "Fortune III";
    b.h.power1 = "Power I";
    b.h.power2 = "Power II";
    b.h.power3 = "Power III";
    b.h.punch1 = "Punch I";
    b.h.punch2 = "Punch II";
    b.h.flame = "Flame";
    b.h.infinity = "Infinity";
    b.h.lure1 = "Lure I";
    b.h.lure2 = "Lure II";
    b.h.lure3 = "Lure III";
    b.h.luckOfTheSea1 = "Luck of the Sea I";
    b.h.luckOfTheSea2 = "Luck of the Sea II";
    b.h.luckOfTheSea3 = "Luck of the Sea III";
    return b;
}(this)