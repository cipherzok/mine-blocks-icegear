var World = function (b, a, c) {
    null == b && (b = "");
    this.mobTmpData = new haxe.ds.StringMap();
    this.mobData = new haxe.ds.StringMap();
    this.chunks = new haxe.ds.StringMap();
    this.fallingBlockNum = this.flameballNum = this.zombiepigmanNum = this.enderdragonNum = this.spawnskinNum = this.nethereyeNum = this.snowgolemNum = this.magmacubeNum = this.skeletonNum = this.endermanNum = this.creeperNum = this.chickenNum = this.zombieNum = this.rabbitNum = this.spiderNum = this.sheepNum = this.ghastNum = this.blazeNum = this.slimeNum = this.squidNum = this.wolfNum = this.mobNum = this.cowNum = this.pigNum = this.batNum = this.dead = 0;
    this.cheats = !1;
    this.worldVer = "1.31.2";
    this.portalCoords = null;
    this.spawnPoint = new lemongine.Point();
    this.toGrow = new haxe.ds.StringMap();
    this.signs = new haxe.ds.StringMap();
    this.rafts = new haxe.ds.StringMap();
    this.drops = new haxe.ds.StringMap();
    this.carts = new haxe.ds.StringMap();
    this.onFire = new haxe.ds.StringMap();
    this.xpOrbs = new haxe.ds.StringMap();
    this.arrows = new haxe.ds.StringMap();
    this.spears = new haxe.ds.StringMap();
    this.effects = new haxe.ds.StringMap();
    this.firstTimes = new haxe.ds.StringMap();
    this.inventoryList = [];
    this.balloons = new haxe.ds.StringMap();
    this.loadedSkins = new haxe.ds.StringMap();
    this.snowballs = new haxe.ds.StringMap();
    this.shurikens = new haxe.ds.StringMap();
    this.gameRules = new haxe.ds.StringMap();
    this.fireballs = new haxe.ds.StringMap();
    this.flameballs = new haxe.ds.StringMap();
    this.fallingBlocks = new haxe.ds.StringMap();
    this.splashPotions = new haxe.ds.StringMap();
    this.chests = new haxe.ds.StringMap();
    this.mobs = new haxe.ds.StringMap();
    this.enderChests = new haxe.ds.StringMap();
    this.selectedInventoryItem = 0;
    this.respawn = !1;
    this.lastTarget = "";
    this.defeatedEnder = !1;
    this.xSpeed = this.ySpeed = 0;
    this.worldY = 120;
    this.worldX = 500;
    this.sleepingAnimation = 0;
    this.worldHeight = 120;
    this.worldWidth = 1E3;
    this.gamemode = 0;
    this.hardcore = !1;
    this.difficulty = "normal";
    this.fly = !1;
    this.experience = 0;
    this.health = icegear.maxHealth;
    this.achieve = [];
    this.food = 1E3;
    this.armors = [["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()]];
    this.endPortal = new lemongine.Point();
    this.enderCrystals = new haxe.ds.StringMap();
    this.snowRegions = new haxe.ds.StringMap();
    this.day = this.rainDay = 1;
    this.tim = 4;
    this.air = 11;
    this.tick = 0;
    this.riding = "";
    this.biomeList = [];
    this.water = new haxe.ds.StringMap();
    this.toSmelt = new haxe.ds.StringMap();
    this.toBrew = new haxe.ds.StringMap();
    this.wheat = new haxe.ds.StringMap();
    this.hasSignal = new haxe.ds.StringMap();
    this.playingTNT = new haxe.ds.StringMap();
    this.raining = 0;
    this.states = new haxe.ds.StringMap();
    this.scene = [];
    this.numberOfScenes = 3;
    this.sceneNum = 1;
    this.seedNum = "";
    this.seed = 0;
    this.fileName = "New World";
    this.lastSaveDate = new Date();
    this.entities = new haxe.ds.StringMap();
    this.loadingWorld = !1;
    this.setMobData();
    this.player = new entities.Entity_Mob_Player("char", null, this);
    this.clearWorldProperties();
    "" != b && this.fromLocalStorage(b, a, c);
};
m.World = World
World.__name__ = "World"
World.versionToNumber = function (b) {
    null == b && (b = "");
    var a = 0;
    for (b = b.split("."); 4 > b.length;) b.push("0");
    "1" == b[0] && (30 < Std.parseInt(b[1]) || 30 == Std.parseInt(b[1]) && 3 < Std.parseInt(b[2])) && (b[0] = "2");
    for (var c = 0, d = b.length; c < d;) {
        var f = c++;
        a += Std.parseInt(b[f]) * Math.pow(1E3, b.length - f - 1);
    }
    return a;
}
World.prototype = {
    fromLocalStorage: function (b, a, c) {
        var d = this;
        this.loadingWorld = !0;
        new lemongine.LocalStorage(b, "Mine_Blocks", function (b) {
            d.saveStorage = b;
            d.loadingWorld = !1;
            if (Object.prototype.hasOwnProperty.call(b.data.h, "data")) {
                d.worldData = b.data.h.data;
                try {
                    d.loadScene();
                } catch (l) {
                    b.removeSaveOnExitListener();
                    null != c && c(d);
                    return;
                }
                null != a && a(d);
            } else b.removeSaveOnExitListener(), d.savee(), null != c && c(d);
        });
    },
    clearWorldProperties: function () {
        this.armors = [["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()], ["air", 0, new haxe.ds.StringMap()]];
        for (var b = 0; 45 > b;) this.inventoryList[b++] = Game.emptyItem();
        this.seed = 1E5 * Math.random() | 0;
        this.portalCoords = null;
        this.spawnPoint = new lemongine.Point();
        this.sleepingAnimation = 0;
        this.difficulty = "normal";
        this.defeatedEnder = !1;
        this.flameballNum = this.rainDay = this.day = this.fallingBlockNum = 0;
        this.hardcore = !1;
        this.lastTarget = "";
        this.experience = 0;
        this.sceneNum = 1;
        this.cheats = -1;
        this.riding = "";
        this.food = 1E3;
        this.tim = this.tick = this.raining = 0;
        this.enderCrystals = new haxe.ds.StringMap();
        this.splashPotions = new haxe.ds.StringMap();
        this.fallingBlocks = new haxe.ds.StringMap();
        this.snowRegions = new haxe.ds.StringMap();
        this.enderChests = new haxe.ds.StringMap();
        this.loadedSkins = new haxe.ds.StringMap();
        this.firstTimes = new haxe.ds.StringMap();
        this.playingTNT = new haxe.ds.StringMap();
        this.flameballs = new haxe.ds.StringMap();
        this.biomeList = [];
        this.gameRules = new haxe.ds.StringMap();
        this.snowballs = new haxe.ds.StringMap();
        this.shurikens = new haxe.ds.StringMap();
        this.fireballs = new haxe.ds.StringMap();
        this.hasSignal = new haxe.ds.StringMap();
        this.balloons = new haxe.ds.StringMap();
        this.toSmelt = new haxe.ds.StringMap();
        this.effects = new haxe.ds.StringMap();
        this.achieve = [];
        this.toBrew = new haxe.ds.StringMap();
        this.toGrow = new haxe.ds.StringMap();
        this.onFire = new haxe.ds.StringMap();
        this.xpOrbs = new haxe.ds.StringMap();
        this.arrows = new haxe.ds.StringMap();
        this.spears = new haxe.ds.StringMap();
        this.states = new haxe.ds.StringMap();
        this.chests = new haxe.ds.StringMap();
        this.wheat = new haxe.ds.StringMap();
        this.signs = new haxe.ds.StringMap();
        this.drops = new haxe.ds.StringMap();
        this.rafts = new haxe.ds.StringMap();
        this.carts = new haxe.ds.StringMap();
        this.water = new haxe.ds.StringMap();
        this.scene = [];
        this.mobs = new haxe.ds.StringMap();
        this.cowNum = this.pigNum = this.batNum = this.wolfNum = this.sheepNum = this.blazeNum = this.slimeNum = this.squidNum = this.ghastNum = this.spiderNum = this.zombieNum = this.rabbitNum = this.creeperNum = this.chickenNum = this.endermanNum = this.skeletonNum = this.snowgolemNum = this.nethereyeNum = this.spawnskinNum = this.magmacubeNum = this.enderdragonNum = this.zombiepigmanNum = 0;
    },
    fromFileData: function (b, a) {
        null == a && (a = !0);
        var c = "";
        try {
            for (var d = 0, f = b.length; d < f;) {
                var g = d++,
                    p = HxOverrides.cca(b, g) - (5 * g % 33 + 1);
                c += String.fromCodePoint(p);
            }
            this.worldData = JSON.parse(c);
        } catch (Q) {
            return null;
        }
        a && this.loadScene();
        return this;
    },
    loadScene: function (b) {
        null == b && (b = -1);
        var a = this;
        this.clearWorldProperties();
        this.resetWorldChunks();
        this.clearWorldEntities();
        null != Main.Instance.game && (Main.Instance.game.lighting.clearLights(), Main.Instance.game.bossBarFrame = 1);
        this.worldDataMap = lemongine.Helpers.mappifyObjectsInMap(this.worldData);
        0 < b ? this.sceneNum = b : this.dE(this.worldDataMap, "sceneNum") ? this.sceneNum = this.dG(this.worldDataMap, "sceneNum") : this.sceneNum = 1;
        b = Object.create(null);
        b.selectedInventoryItem = function (b, c) {
            a.set_selectedInventoryItem(c);
        };
        b.sleepingAnimation = function (b, c) {
            a.sleepingAnimation = c;
        };
        b.fallingBlockNum = function (b, c) {
            a.fallingBlockNum = c;
        };
        b.defeatedEnder = function (b, c) {
            a.defeatedEnder = c;
        };
        b.worldHeight = function (b, c) {
            a.worldHeight = c;
        };
        b.worldWidth = function (b, c) {
            a.worldWidth = c;
        };
        b.experience = function (b, c) {
            a.experience = c;
        };
        b.difficulty = function (b, c) {
            a.difficulty = c;
        };
        b.lastTarget = function (b, c) {
            a.lastTarget = c;
        };
        b.hardcore = function (b, c) {
            a.hardcore = c;
        };
        b.gamemode = function (b, c) {
            a.gamemode = c;
        };
        b.seedNum = function (b, c) {
            a.seedNum = c;
        };
        b.raining = function (b, c) {
            a.raining = c;
        };
        b.rainDay = function (b, c) {
            a.rainDay = c;
        };
        b.respawn = function (b, c) {
            a.respawn = c;
        };
        b.health = function (b, c) {
            a.health = c;
        };
        b.worldX = function (b, c) {
            a.worldX = c;
        };
        b.worldY = function (b, c) {
            a.worldY = c;
        };
        b.xSpeed = function (b, c) {
            a.xSpeed = c;
        };
        b.ySpeed = function (b, c) {
            a.ySpeed = c;
        };
        b.riding = function (b, c) {
            a.riding = c;
        };
        b.cheats = function (b, c) {
            a.cheats = c;
        };
        b.seed = function (b, c) {
            a.seed = c;
        };
        b.food = function (b, c) {
            a.food = c;
        };
        b.tick = function (b, c) {
            a.tick = c;
        };
        b.air = function (b, c) {
            a.air = c;
        };
        b.tim = function (b, c) {
            a.tim = c;
        };
        b.day = function (b, c) {
            a.day = c;
        };
        b.fly = function (b, c) {
            a.fly = c;
        };
        b.inventoryList = F(this, this.parseInventoryList);
        b.enderCrystals = F(this, this.parseEnderCrystals);
        b.fallingBlocks = F(this, this.parseFallingBlocks);
        b.splashPotions = F(this, this.parseSplashPotions);
        b.portalCoords = F(this, this.parsePortalCoords);
        b.snowRegions = F(this, this.parseSnowRegions);
        b.loadedSkins = F(this, this.parseLoadedSkins);
        b.enderChests = F(this, this.parseEnderChests);
        b.flameballs = F(this, this.parseFlameballs);
        b.playingTNT = F(this, this.parsePlayingTNT);
        b.spawnPoint = F(this, this.parseSpawnPoint);
        b.firstTimes = F(this, this.parseFirstTimes);
        b.hasSignal = F(this, this.parseHasSignal);
        b.endPortal = F(this, this.parseEndPortal);
        b.biomeList = F(this, this.parseBiomeList);
        b.gameRules = F(this, this.parseGameRules);
        b.shurikens = F(this, this.parseShurikens);
        b.fireballs = F(this, this.parseFireballs);
        b.snowballs = F(this, this.parseSnowballs);
        b.balloons = F(this, this.parseBalloons);
        b.toSmelt = F(this, this.parseToSmelt);
        b.achieve = F(this, this.parseAchieve);
        b.effects = F(this, this.parseEffects);
        b.states = F(this, this.parseStates);
        b.toBrew = F(this, this.parseToBrew);
        b.armors = F(this, this.parseArmors);
        b.chests = F(this, this.parseChests);
        b.spears = F(this, this.parseSpears);
        b.arrows = F(this, this.parseArrows);
        b.toGrow = F(this, this.parseToGrow);
        b.xpOrbs = F(this, this.parseXpOrbs);
        b.onFire = F(this, this.parseOnFire);
        b.scene = F(this, this.parseScene);
        b.wheat = F(this, this.parseWheat);
        b.water = F(this, this.parseWater);
        b.carts = F(this, this.parseCarts);
        b.drops = F(this, this.parseDrops);
        b.signs = F(this, this.parseSigns);
        b.rafts = F(this, this.parseRafts);
        b.mobs = F(this, this.parseMobs);
        b.zombiepigmanNum = function (b, c) {
            a.zombiepigmanNum = c;
        };
        b.enderdragonNum = function (b, c) {
            a.enderdragonNum = c;
        };
        b.spawnskinNum = function (b, c) {
            a.spawnskinNum = c;
        };
        b.nethereyeNum = function (b, c) {
            a.nethereyeNum = c;
        };
        b.snowgolemNum = function (b, c) {
            a.snowgolemNum = c;
        };
        b.magmacubeNum = function (b, c) {
            a.magmacubeNum = c;
        };
        b.skeletonNum = function (b, c) {
            a.skeletonNum = c;
        };
        b.endermanNum = function (b, c) {
            a.endermanNum = c;
        };
        b.creeperNum = function (b, c) {
            a.creeperNum = c;
        };
        b.chickenNum = function (b, c) {
            a.chickenNum = c;
        };
        b.zombieNum = function (b, c) {
            a.zombieNum = c;
        };
        b.rabbitNum = function (b, c) {
            a.rabbitNum = c;
        };
        b.spiderNum = function (b, c) {
            a.spiderNum = c;
        };
        b.sheepNum = function (b, c) {
            a.sheepNum = c;
        };
        b.ghastNum = function (b, c) {
            a.ghastNum = c;
        };
        b.blazeNum = function (b, c) {
            a.blazeNum = c;
        };
        b.slimeNum = function (b, c) {
            a.slimeNum = c;
        };
        b.squidNum = function (b, c) {
            a.squidNum = c;
        };
        b.wolfNum = function (b, c) {
            a.wolfNum = c;
        };
        b.mobNum = function (b, c) {
            a.mobNum = c;
        };
        b.cowNum = function (b, c) {
            a.cowNum = c;
        };
        b.pigNum = function (b, c) {
            a.pigNum = c;
        };
        b.batNum = function (b, c) {
            a.batNum = c;
        };
        b.fileInfo = F(this, this.parseFileInfo);
        this.worldVer = this.dG(this.worldDataMap, "worldVer");
        "1.31.2" != this.worldVer && (this.updateWorldVersion(this.worldDataMap), this.worldData = lemongine.Helpers.objectifyObjectsInMap(this.worldDataMap), this.saveStorageToDisc());
        for (var c = Object.keys(this.worldDataMap.h), d = c.length, f = 0; f < d;) {
            var g = c[f++];
            try {
                if ("1" == HxOverrides.substr(g, -1, 1) || "2" == HxOverrides.substr(g, -1, 1) || "3" == HxOverrides.substr(g, -1, 1)) {
                    if (HxOverrides.substr(g, -1, 1) == this.sceneNum && Object.prototype.hasOwnProperty.call(b, HxOverrides.substr(g, 0, g.length - 1))) b[HxOverrides.substr(g, 0, g.length - 1)](g, this.worldDataMap.h[g]);
                } else if (Object.prototype.hasOwnProperty.call(b, g)) b[g](g, this.worldDataMap.h[g]);
            } catch (p) {
                haxe.Log.trace("Error parsing " + g + "; " + Std.string(haxe.Exception.caught(p).unwrap()), {
                    fileName: "src/World.hx",
                    lineNumber: 493,
                    className: "World",
                    methodName: "loadScene"
                });
            }
        }
        return this;
    },
    threadedSave: function () {
        this.savee();
    },
    saveItem: function (b, a) {
        null == this.worldData && (this.worldData = {});
        var c = new haxe.ds.StringMap();
        c.h.o = a;
        this.worldData[b] = Reflect.field(lemongine.Helpers.objectifyObjectsInMap(c), "o");
    },
    savee: function () {
        this.saveItem("water" + this.sceneNum, this.water);
        this.saveItem("wheat" + this.sceneNum, this.wheat);
        this.saveItem("firstTimes" + this.sceneNum, this.firstTimes);
        this.saveItem("playingTNT" + this.sceneNum, this.playingTNT);
        this.saveItem("toSmelt" + this.sceneNum, this.toSmelt);
        this.saveItem("toBrew" + this.sceneNum, this.toBrew);
        this.saveItem("states" + this.sceneNum, this.states);
        this.saveItem("toGrow" + this.sceneNum, this.toGrow);
        this.saveItem("onFire" + this.sceneNum, this.onFire);
        this.saveItem("hasSignal" + this.sceneNum, this.hasSignal);
        this.saveItem("signs" + this.sceneNum, this.signs);
        this.saveItem("enderCrystals", this.enderCrystals);
        this.saveItem("snowRegions", this.snowRegions);
        this.saveItem("biomeList", this.biomeList);
        this.saveItem("chests" + this.sceneNum, this.chests);
        this.saveItem("enderChests", this.enderChests);
        this.saveItem("inventoryList", this.inventoryList);
        this.saveItem("drops" + this.sceneNum, this.drops);
        this.saveItem("armors", this.armors);
        this.saveItem("scene" + this.sceneNum, this.scene);
        this.saveItem("mobs" + this.sceneNum, this.mobs);
        this.saveItem("zombiepigmanNum" + this.sceneNum, this.zombiepigmanNum);
        this.saveItem("enderdragonNum" + this.sceneNum, this.enderdragonNum);
        this.saveItem("spawnskinNum" + this.sceneNum, this.spawnskinNum);
        this.saveItem("nethereyeNum" + this.sceneNum, this.nethereyeNum);
        this.saveItem("snowgolemNum" + this.sceneNum, this.snowgolemNum);
        this.saveItem("magmacubeNum" + this.sceneNum, this.magmacubeNum);
        this.saveItem("skeletonNum" + this.sceneNum, this.skeletonNum);
        this.saveItem("endermanNum" + this.sceneNum, this.endermanNum);
        this.saveItem("creeperNum" + this.sceneNum, this.creeperNum);
        this.saveItem("chickenNum" + this.sceneNum, this.chickenNum);
        this.saveItem("zombieNum" + this.sceneNum, this.zombieNum);
        this.saveItem("rabbitNum" + this.sceneNum, this.rabbitNum);
        this.saveItem("spiderNum" + this.sceneNum, this.spiderNum);
        this.saveItem("sheepNum" + this.sceneNum, this.sheepNum);
        this.saveItem("ghastNum" + this.sceneNum, this.ghastNum);
        this.saveItem("blazeNum" + this.sceneNum, this.blazeNum);
        this.saveItem("slimeNum" + this.sceneNum, this.slimeNum);
        this.saveItem("squidNum" + this.sceneNum, this.squidNum);
        this.saveItem("wolfNum" + this.sceneNum, this.wolfNum);
        this.saveItem("mobNum" + this.sceneNum, this.mobNum);
        this.saveItem("cowNum" + this.sceneNum, this.cowNum);
        this.saveItem("pigNum" + this.sceneNum, this.pigNum);
        this.saveItem("batNum" + this.sceneNum, this.batNum);
        this.saveItem("arrows" + this.sceneNum, this.arrows);
        this.saveItem("spears" + this.sceneNum, this.spears);
        this.saveItem("shurikens" + this.sceneNum, this.shurikens);
        this.saveItem("carts" + this.sceneNum, this.carts);
        this.saveItem("rafts" + this.sceneNum, this.rafts);
        this.saveItem("fireballs" + this.sceneNum, this.fireballs);
        this.saveItem("flameballs" + this.sceneNum, this.flameballs);
        this.saveItem("xpOrbs" + this.sceneNum, this.xpOrbs);
        this.saveItem("fallingBlocks" + this.sceneNum, this.fallingBlocks);
        this.saveItem("balloons" + this.sceneNum, this.balloons);
        this.saveItem("snowballs" + this.sceneNum, this.snowballs);
        this.saveItem("splashPotions" + this.sceneNum, this.splashPotions);
        this.saveItem("flameballNum", this.flameballNum);
        this.saveItem("fallingBlockNum", this.fallingBlockNum);
        this.saveItem("fly", this.fly);
        this.saveItem("gamemode", this.gamemode);
        this.saveItem("cheats", this.cheats);
        this.saveItem("difficulty", this.difficulty);
        this.saveItem("hardcore", this.hardcore);
        this.saveItem("spiderNum", this.spiderNum);
        this.saveItem("food", this.food);
        this.saveItem("achieve", this.achieve);
        this.saveItem("seedNum", this.seedNum);
        this.saveItem("seed", this.seed);
        this.saveItem("rainDay", this.rainDay);
        this.saveItem("sceneNum", this.sceneNum);
        this.saveItem("lastTarget", this.lastTarget);
        this.saveItem("raining", this.raining);
        this.saveItem("defeatedEnder", this.defeatedEnder);
        this.saveItem("day", this.day);
        this.saveItem("air", this.air);
        this.saveItem("tim", this.tim);
        this.saveItem("experience", this.experience);
        this.saveItem("effects", this.effects);
        this.saveItem("selectedInventoryItem", this.selectedInventoryItem);
        this.saveItem("tick", this.tick);
        this.saveItem("sleepingAnimation", this.sleepingAnimation);
        this.saveItem("gameRules", this.gameRules);
        this.saveItem("health", this.health);
        this.saveItem("xSpeed", this.xSpeed);
        this.saveItem("ySpeed", this.ySpeed);
        this.saveItem("riding", this.riding);
        this.saveItem("spawnPoint" + this.sceneNum, [this.spawnPoint.x, this.spawnPoint.y]);
        null != this.portalCoords && this.saveItem("portalCoords", [this.portalCoords.x, this.portalCoords.y]);
        this.saveItem("endPortal", [this.endPortal.x, this.endPortal.y]);
        this.saveItem("worldX", this.worldX);
        this.saveItem("worldY", this.worldY);
        this.saveItem("worldVer", this.worldVer);
        this.saveStorageToDisc();
    },
    saveStorageToDisc: function () {
        if (null != this.saveStorage) {
            null == this.saveStorage.quotaExceededCallback && (this.saveStorage.quotaExceededCallback = function () {
                Main.Instance.game.saveWarning++;
                3 >= Main.Instance.game.saveWarning && (Console.newLine("[ERROR] Could not save game! Your browser storage may be limited."), Console.newLine("        See FAQ for details."));
            });
            var b = new haxe.ds.StringMap();
            b.h.data = this.worldData;
            this.saveStorage.data = b;
            this.saveStorage.save();
        }
    },
    getSaveData: function (b) {
        return Reflect.field(this.worldData, b);
    },
    getFG: function (b, a) {
        b = Math.floor(b);
        a = Math.floor(a);
        return 0 > b || b >= this.scene.length || null == this.scene[Math.floor(b)] || 0 > a || a >= this.scene[Math.floor(b)].length || null == this.scene[Math.floor(b)][Math.floor(a)] ? "air" : this.scene[Math.floor(b)][Math.floor(a)];
    },
    setFG: function (b, a, c) {
        "undefined" == c && (haxe.Log.trace("Warning: type is undefined", {
            fileName: "src/World.hx",
            lineNumber: 644,
            className: "World",
            methodName: "setFG"
        }), c = "air");
        b |= 0;
        a |= 0;
        if (0 > b || 0 > a) return !1;
        if (b >= this.scene.length || null == this.scene[b | 0]) this.scene[b | 0] = [];
        "air" == c && (c = null);
        this.scene[b | 0][a | 0] = c;
        if ("sl" == c || "gasd" == c) this.toGrow.h["blockX" + b + "Y" + a] = !0;
        null != this.getChunk(b, a) && this.getChunk(b, a).createBlock(b | 0, a | 0);
        null != Main.Instance.game.getRenderChunk(b | 0, a | 0) && Main.Instance.game.getRenderChunk(b | 0, a | 0).addChange(b | 0, a | 0);
        return !0;
    },
    canBeOnFire: function (b, a) {
        b = this.getFG(b, a);
        return "n" == b || "magma" == b ? !0 : null == BlockData.get(b, "flamRate") ? !1 : !0;
    },
    resetWorldChunks: function () {
        this.chunks.h = Object.create(null);
        null != Main.Instance.game && (Main.Instance.game.renderChunks.h = Object.create(null));
    },
    clearWorldEntities: function () {
        if (null != Main.Instance.game) {
            if (null != Main.Instance.game.entityPools) for (var b = Main.Instance.game.entityPools.h, a = Object.keys(b), c = a.length, d = 0; d < c;) b[a[d++]].entity.clearPool(!0);
            null != Main.Instance.game.worldGradientEntity && Main.Instance.game.worldGradientEntity.clearPool(!0);
        }
        null != this.entities && (this.entities.h = Object.create(null));
    },
    getChunk: function (b, a, c, d) {
        null == d && (d = !1);
        null == c && (c = Std.string(this.sceneNum));
        b = Math.floor(b / 8);
        a = Math.floor(a / 8);
        if (Object.prototype.hasOwnProperty.call(this.chunks.h, c + ":" + b + "," + a)) return this.chunks.h[c + ":" + b + "," + a];
        if (d) {
            d = this.chunks;
            var f = new WorldChunk(b, a, this);
            d.h[c + ":" + b + "," + a] = f;
            return this.chunks.h[c + ":" + b + "," + a];
        }
        return null;
    },
    getBlock: function (b, a, c) {
        null == c && (c = !1);
        return "air" != this.getFG(b, a) && null != this.getChunk(b, a, null, c) ? (c = lemongine.Mathz.modulus(b, 8) | 0, this.getChunk(b, a).tiles[c][lemongine.Mathz.modulus(a, 8) | 0]) : null;
    },
    getSignal: function (b, a) {
        return Object.prototype.hasOwnProperty.call(this.hasSignal.h, "blockX" + b + "Y" + a) ? this.hasSignal.h["blockX" + b + "Y" + a][0] : 0;
    },
    parseFileInfo: function (b, a) {
        null == a ? (this.lastSaveDate = new Date(), this.fileName = "New World") : (this.lastSaveDate = new Date(this.dG(a, "date")), this.fileName = Std.string(this.dG(a, "name")).replace(/[\\/:"*?<>|]+\/g/g, ""));
    },
    parseScene: function (b, a) {
        this.scene = a;
    },
    parseStates: function (b, a) {
        this.states = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.states.h[f] = a.h[f];
        }
    },
    parseWheat: function (b, a) {
        this.wheat = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.wheat.h[f] = a.h[f];
        }
    },
    parseHasSignal: function (b, a) {
        this.hasSignal = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.hasSignal.h[f] = a.h[f];
        }
    },
    parseToBrew: function (b, a) {
        this.toBrew = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.toBrew.h[f] = a.h[f];
        }
    },
    parseToSmelt: function (b, a) {
        this.toSmelt = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.toSmelt.h[f] = a.h[f];
        }
    },
    parseWater: function (b, a) {
        this.water = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.water.h[f] = a.h[f];
        }
    },
    parseInventoryList: function (b, a) {
        this.inventoryList = [];
        for (b = 0; 45 > b;) {
            var c = b++;
            this.inventoryList[c] = a[c];
        }
    },
    setInventoryItem: function (b, a) {
        this.inventoryList[b] = a;
        null != Main.Instance.game && Main.Instance.game.isScavenger && (this.selectedInventoryItem == b && ScavengerManager.packetToServer_changeHandItem(this.inventoryList[b]), Main.Instance.game.checkForScavengerItem(this.inventoryList[b]));
    },
    setInventoryItemType: function (b, a) {
        this.inventoryList[b][0] = a;
        null != Main.Instance.game && Main.Instance.game.isScavenger && (this.selectedInventoryItem == b && ScavengerManager.packetToServer_changeHandItem(this.inventoryList[b]), Main.Instance.game.checkForScavengerItem(this.inventoryList[b]));
    },
    setInventoryItemCount: function (b, a) {
        this.inventoryList[b][1] = a;
    },
    setInventoryItemDamage: function (b, a) {
        this.inventoryList[b][2] = a;
    },
    inflictInventoryItemDamage: function (b, a) {
        this.inventoryList[b][2] += a;
    },
    reduceInventoryItemCount: function (b, a) {
        null == a && (a = 1);
        this.inventoryList[b][1] -= a;
        0 >= this.inventoryList[b][1] && (this.inventoryList[b] = Game.emptyItem(), null != Main.Instance.game && Main.Instance.game.isScavenger && this.selectedInventoryItem == b && ScavengerManager.packetToServer_changeHandItem(this.inventoryList[b]));
    },
    getInventoryItemType: function (b) {
        return this.inventoryList[b][0];
    },
    getInventoryItemCount: function (b) {
        return this.inventoryList[b][1];
    },
    getInventoryItemDamage: function (b) {
        return this.inventoryList[b][2];
    },
    getInventoryItemExtras: function (b) {
        return this.inventoryList[b][3];
    },
    inventoryItem: function (b) {
        null == this.inventoryList[b] && (this.inventoryList[b] = Game.emptyItem());
        return this.inventoryList[b];
    },
    armorsAsItem: function (b) {
        return null == this.armors[b] ? Game.emptyItem() : [this.armors[b][0], 1, this.armors[b][1], this.armors[b][2]];
    },
    set_selectedInventoryItem: function (b) {
        null != Main.Instance.game && Main.Instance.game.isScavenger && this.selectedInventoryItem != b && ScavengerManager.packetToServer_changeHandItem(this.inventoryList[b]);
        return this.selectedInventoryItem = b;
    },
    get_selectedInventoryItemType: function () {
        return null == this.inventoryList[this.selectedInventoryItem] || null == this.inventoryList[this.selectedInventoryItem][0] ? "air" : this.inventoryList[this.selectedInventoryItem][0];
    },
    get_selectedInventoryTool: function () {
        return null == this.inventoryList[this.selectedInventoryItem] ? !1 : BlockData.get(this.inventoryList[this.selectedInventoryItem][0], "tool");
    },
    get_selectedInventoryItemExtra: function () {
        return null == this.inventoryList[this.selectedInventoryItem] || null == this.inventoryList[this.selectedInventoryItem][3] || "Object" != lemongine.Helpers.getQualifiedClassName(this.inventoryList[this.selectedInventoryItem][3]) ? new haxe.ds.StringMap() : this.inventoryList[this.selectedInventoryItem][3];
    },
    parseLoadedSkins: function (b, a) {
        this.loadedSkins = new haxe.ds.StringMap();
        b = Object.keys(a.h).length;
        for (a = 0; a < b;) ++a;
    },
    parsePortalCoords: function (b, a) {
        null == a || isNaN(a[0]) || isNaN(a[1]) ? this.portalCoords = null : this.portalCoords = new lemongine.Point(a[0], a[1]);
    },
    parseSpawnPoint: function (b, a) {
        this.spawnPoint = null == a ? new lemongine.Point() : new lemongine.Point(a[0], a[1]);
    },
    parseAchieve: function (b, a) {
        this.achieve = a;
    },
    parseFirstTimes: function (b, a) {
        this.firstTimes = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.firstTimes.h[f] = a.h[f];
        }
    },
    parseMobs: function (b, a) {
        this.mobs = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.mobs.h[f] = a.h[f];
        }
    },
    parseChests: function (b, a) {
        this.chests = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.chests.h[f] = a.h[f];
        }
    },
    parseEnderChests: function (b, a) {
        this.enderChests = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.enderChests.h[f] = a.h[f];
        }
    },
    parseSpears: function (b, a) {
        this.spears = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.spears.h[f] = a.h[f];
        }
    },
    parseArrows: function (b, a) {
        this.arrows = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.arrows.h[f] = a.h[f];
        }
    },
    parseShurikens: function (b, a) {
        this.shurikens = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.shurikens.h[f] = a.h[f];
        }
    },
    parseCarts: function (b, a) {
        this.carts = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.carts.h[f] = a.h[f];
        }
    },
    parseToGrow: function (b, a) {
        this.toGrow = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        a = b.length;
        for (var c = 0; c < a;) this.toGrow.h[b[c++]] = !0;
    },
    parseDrops: function (b, a) {
        this.drops = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.drops.h[f] = a.h[f];
        }
    },
    parseSigns: function (b, a) {
        this.signs = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.signs.h[f] = a.h[f];
        }
    },
    parseArmors: function (b, a) {
        this.armors = [];
        for (b = 0; 4 > b;) {
            var c = b++;
            this.armors[c] = null == a[c] || null == a[c][0] || "" == a[c][0] ? Game.makeDynamicArray(["air", 0, new haxe.ds.StringMap()]) : a[c];
        }
    },
    parsePlayingTNT: function (b, a) {
        this.playingTNT = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.playingTNT.h[f] = a.h[f];
        }
    },
    parseEffects: function (b, a) {
        this.effects = new haxe.ds.StringMap();
        if (null != a && "Object" == lemongine.Helpers.getQualifiedClassName(a)) {
            b = Object.keys(a.h);
            for (var c = b.length, d = 0; d < c;) {
                var f = b[d++];
                this.effects.h[f] = a.h[f];
            }
        }
    },
    parseBiomeList: function (b, a) {
        this.biomeList = [];
        b = 0;
        for (var c = a.length; b < c;) {
            var d = b++;
            this.biomeList[d] = a[d];
        }
    },
    parseSnowRegions: function (b, a) {
        this.snowRegions = new haxe.ds.StringMap();
        if (null != a) {
            b = Object.keys(a.h);
            for (var c = b.length, d = 0; d < c;) {
                var f = b[d++];
                this.snowRegions.h[f] = a.h[f];
            }
        }
    },
    parseGameRules: function (b, a) {
        this.gameRules = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.gameRules.h[f] = a.h[f];
        }
    },
    parseEnderCrystals: function (b, a) {
        this.enderCrystals = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.enderCrystals.h[f] = a.h[f];
        }
    },
    parseEndPortal: function (b, a) {
        this.endPortal = null == a ? new lemongine.Point(0, 0) : new lemongine.Point(a[0], a[1]);
    },
    parseRafts: function (b, a) {
        this.rafts = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            "raft" != HxOverrides.substr(f, 0, 4) ? this.rafts.h["raft" + f] = a.h[f] : this.rafts.h[f] = a.h[f];
        }
    },
    parseFlameballs: function (b, a) {
        this.flameballs = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.flameballs.h[f] = a.h[f];
        }
    },
    parseFireballs: function (b, a) {
        this.fireballs = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.fireballs.h[f] = a.h[f];
        }
    },
    parseXpOrbs: function (b, a) {
        this.xpOrbs = new haxe.ds.StringMap();
        if (null != a && "Object" == lemongine.Helpers.getQualifiedClassName(a)) {
            b = Object.keys(a.h);
            for (var c = b.length, d = 0; d < c;) {
                var f = b[d++];
                if ("xpOrb" != HxOverrides.substr(Std.string(a.h[f][0]), 0, 5)) break;
                this.xpOrbs.h[f] = a.h[f];
            }
        }
    },
    parseFallingBlocks: function (b, a) {
        this.fallingBlocks = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.fallingBlocks.h[f] = a.h[f];
        }
    },
    parseOnFire: function (b, a) {
        this.onFire = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.onFire.h[f] = a.h[f];
        }
    },
    parseBalloons: function (b, a) {
        this.balloons = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.balloons.h[f] = a.h[f];
        }
    },
    parseSnowballs: function (b, a) {
        this.snowballs = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.snowballs.h[f] = a.h[f];
        }
    },
    parseSplashPotions: function (b, a) {
        this.splashPotions = new haxe.ds.StringMap();
        b = Object.keys(a.h);
        for (var c = b.length, d = 0; d < c;) {
            var f = b[d++];
            this.splashPotions.h[f] = a.h[f];
        }
    },
    dG: function (b, a) {
        return b.h[a];
    },
    dS: function (b, a, c) {
        b.h[a] = c;
    },
    dE: function (b, a) {
        return null != b && Object.prototype.hasOwnProperty.call(b.h, a) ? null != b.h[a] : !1;
    },
    itemArr: function (b, a, c, d) {
        null == c && (c = 0);
        null == d && (d = new haxe.ds.StringMap());
        return [b, a, c, d];
    },
    mDM: function (b) {
        return null == b ? new haxe.ds.StringMap() : b;
    },
    updateWorldVersion: function (b) {
        if (World.versionToNumber(this.worldVer) < World.versionToNumber("1.27")) {
            var a = this.dG(b, "achieve");
            "number" == typeof a && (a | 0) === a && (1 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1]) : 2 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 0, 1]) : 3 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 0, 1, 1]) : 4 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1]) : 5 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1]) : 6 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 0, 0, 0, 0, 1]) : 7 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 0, 0, 1]) : 8 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]) : 9 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1]) : 11 >= this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]) : 12 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]) : 15 >= this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]) : 16 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]) : 17 == this.dG(b, "achieve") ? this.dS(b, "achieve", [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]) : this.dS(b, "achieve", [0]));
            this.dE(b, "keepInventory") && (this.dS(this.dG(b, "gameRules"), "keepinventory", b.h.keepInventory), this.dS(this.dG(b, "gameRules"), "dodaylightcycle", b.h.doDaylightCycle), this.dS(this.dG(b, "gameRules"), "dofiretick", b.h.doFireTick));
            !this.dE(b, "firstTimes1") && this.dE(b, "firstTimes") && (this.dS(b, "firstTimes1", this.dG(b, "firstTimes")), Object.prototype.hasOwnProperty.call(b.h, "firstTimes") && delete b.h.firstTimes);
            for (var c = 0, d = this.numberOfScenes + 1; c < d;) for (var f = c++, l = this.mDM(this.dG(b, "drops" + f)).h, p = Object.keys(l), k = p.length, n = 0; n < k;) {
                var m = l[p[n++]],
                    M = Std.parseInt(this.dG(this.dG(b, "drops" + f), m)[2]);
                isNaN(M) || (M = js.Boot.__cast(this.dG(b, "drops" + f), haxe.ds.StringMap), Object.prototype.hasOwnProperty.call(M.h, m) && delete M.h[m]);
            }
        }
        if (World.versionToNumber(this.worldVer) < World.versionToNumber("1.28")) for (this.migrateItems(b, [["cloth", "cloth", !0, "both"], ["dye", "dye", !0, "item"]]), c = 0, d = this.numberOfScenes + 1; c < d;) {
            f = c++;
            l = this.dG(b, "toSmelt" + f);
            if (null != l) for (p = Object.keys(l.h), k = p.length, n = 0; n < k;) {
                m = p[n++];
                a = this.dG(this.dG(b, "toSmelt" + f), m);
                M = new haxe.ds.StringMap();
                var x = this.itemArr(a[0], a[1], 0, new haxe.ds.StringMap());
                M.h.input = x;
                x = this.itemArr(a[2], a[3], 0, new haxe.ds.StringMap());
                M.h.fuel = x;
                M.h.smeltTimer = a[4];
                M.h.fuelTimer = a[4];
                M.h.fuelTimerTotal = a[8];
                a = this.itemArr(a[5], a[6], 0, new haxe.ds.StringMap());
                M.h.output = a;
                this.dS(l, m, Game.makeDynamicMap(M));
            }
            l = this.dG(b, "spears" + f);
            if (null != l) for (M = Object.keys(l.h), p = M.length, k = 0; k < p;) n = M[k++], m = this.dG(this.dG(b, "spears" + f), n), a = new haxe.ds.StringMap(), a.h.x = m[1], a.h.y = m[2], a.h.speedX = m[4], a.h.speedY = m[5], a.h.rotation = (m[3] + 90) / 180 * Math.PI, a.h.shotBy = m[7], a.h.timer = 0, this.dS(l, n, Game.makeDynamicMap(a));
            l = this.dG(b, "arrows" + f);
            if (null != l) for (p = Object.keys(l.h), k = p.length, n = 0; n < k;) m = p[n++], a = this.dG(this.dG(b, "arrows" + f), m), M = new haxe.ds.StringMap(), M.h.x = a[1], M.h.y = a[2], M.h.speedX = a[3], M.h.speedY = a[4], M.h.rotation = (a[5] + 90) / 180 * Math.PI, M.h.shotBy = a[7], M.h.punch = a[8], M.h.power = a[9], M.h.flame = a[10], M.h.infinity = a[11], this.dS(l, m, Game.makeDynamicMap(M));
            l = this.dG(b, "shurikens" + f);
            if (null != l) for (M = Object.keys(l.h), p = M.length, k = 0; k < p;) n = M[k++], m = this.dG(this.dG(b, "shurikens" + f), n), a = new haxe.ds.StringMap(), a.h.x = m[1], a.h.y = m[2], a.h.speedX = m[3], a.h.speedY = m[4], a.h.rotation = 0, a.h.shotBy = m[6], a.h.type = "bone", a.h.timer = 0, this.dS(l, n, Game.makeDynamicMap(a));
            l = this.dG(b, "fireballs" + f);
            if (null != l) for (M = Object.keys(l.h), p = M.length, k = 0; k < p;) n = M[k++], m = this.dG(this.dG(b, "fireballs" + f), n), a = new haxe.ds.StringMap(), a.h.x = m[1], a.h.y = m[2], a.h.speedX = m[3], a.h.speedY = m[4], a.h.shotBy = m[5], this.dS(l, n, Game.makeDynamicMap(a));
        }
        if (World.versionToNumber(this.worldVer) < World.versionToNumber("1.29")) {
            c = 0;
            for (d = this.numberOfScenes + 1; c < d;) for (f = c++, p = Object.keys(this.mDM(this.dG(b, "mobs" + f)).h), k = p.length, n = 0; n < k;) if (m = p[n++], "Array" == lemongine.Helpers.getQualifiedClassName(Game.makeDynamicMap(this.dG(b, "mobs" + f)).h[m])) {
                l = Game.makeDynamicMap(this.dG(b, "mobs" + f)).h[m];
                M = new haxe.ds.StringMap();
                M.h.type = l[0];
                M.h.id = l[1];
                M.h.scene = l[2];
                M.h.name = null;
                M.h.variant = "";
                M.h.babyTimer = 0;
                M.h.breedTimer = 0;
                M.h.x = l[3];
                M.h.y = l[4];
                M.h.speedX = null != Std.parseInt(Std.string(l[5])) ? Std.parseInt(Std.string(l[5])) : 0;
                M.h.speedY = null != Std.parseInt(Std.string(l[6])) ? Std.parseInt(Std.string(l[6])) : 0;
                M.h.direction = 1;
                M.h.health = l[7];
                a = new haxe.ds.StringMap();
                a.h.left = l[8];
                a.h.right = l[9];
                a.h.up = l[10];
                M.h.keys = a;
                M.h.target = null;
                M.h.focus = null;
                M.h.riddenBy = null;
                M.h.riding = null;
                M.h.leash = null;
                x = [];
                M.h.inventory = x;
                x = [];
                M.h.handItems = x;
                a = [];
                M.h.armor = a;
                M.h.defaultDrops = !0;
                M.h.handDropChances = [.085, .085];
                M.h.armorDropChances = [.085, .085, .085, .085];
                M.h.persists = !1;
                M.h.air = 0;
                M.h.airTimer = 0;
                M.h.startUnderwaterTimer = 0;
                M.h.animationType = "idle";
                M.h.animationFrame = 0;
                M.h.attackCooldown = 0;
                M.h.hitCooldown = 0;
                M.h.lastDamageType = "";
                M.h.lastDamageID = "";
                M.h.ticksSinceLastDamageID = 0;
                M.h.falling = !1;
                M.h.wasFalling = !1;
                M.h.wasFallingSpeed = 0;
                M.h.effects = new haxe.ds.StringMap();
                switch (M.h.type) {
                case "chicken":
                    M.h.target = l[11];
                    M.h.name = l[12];
                    1 == l[13] && (js.Boot.__cast(M.h.armor, Array)[0] = this.itemArr("ShadesCap", 1, 0), js.Boot.__cast(M.h.armorDropChances, Array)[0] = 1);
                    break;
                case "cow":
                    1 == l[10] && (M.h.variant = "mooshroom");
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[12];
                    break;
                case "creeper":
                    M.h.charged = !1;
                    M.h.fuse = l[11];
                    a = l[12];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[13];
                    break;
                case "dummy":
                    M.h.type = "spawnskin";
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.skin = l[12];
                    M.h.name = l[13];
                    break;
                case "enderdragon":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.nextSpotX = l[12];
                    M.h.nextSpotY = l[13];
                    M.h.official = l[14];
                    M.h.endTimer = l[15];
                    M.h.endingX = l[16];
                    M.h.endingY = l[17];
                    M.h.name = l[18];
                    M.h.flyBob = 0;
                    M.h.flameBallThread = 0;
                    M.h.flameBallDelay = 0;
                    break;
                case "enderman":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    1 == l[12] && (js.Boot.__cast(M.h.handItems, Array)[0] = [l[12], 1, 0, new haxe.ds.StringMap()]);
                    M.h.name = l[14];
                    M.h.teleportDistance = 10;
                    break;
                case "magmacube":
                case "slime":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.size = Math.log(l[12] / 15) / Math.log(2) + 1;
                    M.h.name = l[13];
                    break;
                case "netherwalker":
                    M.h.type = "nethereye";
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[12];
                    break;
                case "pig":
                    1 == l[11] && (M.h.saddleItem = Game.makeDynamicArray(["saddle", 1, 0, new haxe.ds.StringMap()]));
                    M.h.riddenBy = l[12];
                    a = l[13];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[14];
                    break;
                case "rabbit":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.rabbitType = l[12];
                    M.h.name = l[13];
                    break;
                case "sheep":
                    this.dS(M, "color", l[11]);
                    this.dS(M, "sheared", l[12]);
                    this.dS(M, "eating", !1);
                    a = l[13];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[14];
                    break;
                case "skeleton":
                    js.Boot.__cast(M.h.handItems, Array)[0] = this.itemArr("bow", 1, Math.floor(50 * Math.random() + 10));
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[12];
                    break;
                case "blaze":
                case "ghast":
                case "snowgolem":
                case "spider":
                case "zombie":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[12];
                    break;
                case "squid":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.name = l[12];
                    M.h.actualRotation = l[13];
                    M.h.rotationDirection = l[14];
                    M.h.cooldownSpeed = l[15];
                    M.h.actualSpeed = l[16];
                    M.h.movementCooldown = l[17];
                    M.h.rotationSpeed = l[18];
                    break;
                case "wolf":
                    a = l[11];
                    M.h.focus = a;
                    M.h.target = a;
                    M.h.tameable = !0;
                    M.h.tamed = 1 == l[12];
                    1 == M.h.tamed ? this.dS(M, "tamedBy", this.player.id) : M.h.tamedBy = null;
                    M.h.sitting = l[13];
                    M.h.name = l[14];
                    M.h.collarColor = l[15];
                    break;
                case "zombiepigman":
                    a = l[11], M.h.focus = a, M.h.target = a, M.h.name = l[12], 1 == l[13] && (js.Boot.__cast(M.h.handItems, Array)[0] = [l[13], 1, 0, new haxe.ds.StringMap()]), M.h.aggressiveness = l[14];
                }
                js.Boot.__cast(this.dG(b, "mobs" + f), haxe.ds.StringMap).h[m] = M;
            }
            null != this.dG(this.dG(b, "chests1"), "ender") && (c = new haxe.ds.StringMap(), d = this.player.id, x = this.dG(this.dG(b, "chests1"), "ender"), c.h[d] = x, this.dS(b, "enderChests", c), M = js.Boot.__cast(this.dG(b, "chests1"), haxe.ds.StringMap), Object.prototype.hasOwnProperty.call(M.h, "ender") && delete M.h.ender);
            this.dS(b, "worldX", 275 - this.dG(b, "worldX"));
            this.dS(b, "worldY", 200 - this.dG(b, "worldY"));
            c = 0;
            for (d = this.numberOfScenes + 1; c < d;) if (f = c++, this.dE(b, "spawnPoint" + f) && this.dS(b, "spawnPoint" + f, [275 - this.dG(b, "spawnPoint" + f)[0], 200 - this.dG(b, "spawnPoint" + f)[1]]), this.dE(b, "carts" + f)) {
                l = new haxe.ds.StringMap();
                p = Object.keys(this.mDM(this.dG(b, "carts" + f)).h);
                k = p.length;
                for (n = 0; n < k;) m = p[n++], "Array" == lemongine.Helpers.getQualifiedClassName(Game.makeDynamicMap(this.dG(b, "carts" + f)).h[m]) && (m = this.dG(this.dG(b, "carts" + f), m), a = "cart" + Std.string(m[0]), M = new haxe.ds.StringMap(), M.h.id = "cart" + Std.string(m[0]), M.h.x = m[1], M.h.y = m[2], M.h.speedX = m[3], M.h.speedY = m[4], M.h.riddenBy = m[5], M.h.onActivator = m[6], M.h.type = m[7], M.h.health = 3, M.h.tilt = 0, M.h.onRail = 0, l.h[a] = Game.makeDynamicMap(M));
                b.h["carts" + f] = l;
            }
            this.dE(b, "portalCoords") && this.dS(b, "portalCoords", [275 - this.dG(b, "portalCoords")[0], 200 - this.dG(b, "portalCoords")[1]]);
            this.migrateItems(b, [["bed", "bed", "red", "item"], ["bed1", "bed1", "red", "block"], ["bed2", "bed2", "red", "block"]]);
            this.dS(b, "gamemode", 1 == this.dG(b, "creative") ? 1 : 0);
            this.dS(b, "spawnskinNum", this.dG(b, "dummyNum"));
        }
        if (World.versionToNumber(this.worldVer) < World.versionToNumber("1.29.1")) for (c = 0, d = this.numberOfScenes + 1; c < d;) for (f = c++, p = Object.keys(this.mDM(this.dG(b, "mobs" + f)).h), k = p.length, n = 0; n < k;) m = p[n++], M = js.Boot.__cast(this.dG(b, "mobs" + f), haxe.ds.StringMap).h[m], "chicken" == M.h.type && Game.makeDynamicArray(M.h.handItems)[0] && "ShadesCap" == Game.makeDynamicArray(M.h.handItems)[0][0] && (Game.makeDynamicArray(M.h.armor)[0] = this.itemArr("ShadesCap", 1, 0), Game.makeDynamicArray(M.h.armorDropChances)[0] = 1, M.h.handItems.splice(0, 1));
        if (World.versionToNumber(this.worldVer) < World.versionToNumber("1.30")) for (c = 0, d = this.numberOfScenes + 1; c < d;) for (f = c++, p = Object.keys(this.mDM(this.dG(b, "onFire" + f)).h), k = p.length, n = 0; n < k;) m = p[n++], "blockX" == HxOverrides.substr(m, 0, 6) && (M = Std.parseInt(m.split("X")[1].split("Y")[0]), l = Std.parseInt(m.split("X")[1].split("Y")[1]), null != js.Boot.__cast(this.dG(b, "scene" + f), Array) && null != js.Boot.__cast(this.dG(b, "scene" + f), Array)[M] && null != BlockData.get(js.Boot.__cast(js.Boot.__cast(this.dG(b, "scene" + f), Array)[M], Array)[l], "flamRate") && (js.Boot.__cast(this.dG(b, "scene" + f), Array)[M][l] = "fire"), M = Game.makeDynamicMap(this.dG(b, "onFire" + f)), Object.prototype.hasOwnProperty.call(M.h, m) && delete M.h[m]);
        if (World.versionToNumber(this.worldVer) < World.versionToNumber("2.0")) {
            c = 0;
            for (d = this.numberOfScenes + 1; c < d;) {
                f = c++;
                p = Object.keys(this.mDM(this.dG(b, "balloons" + f)).h);
                k = p.length;
                for (n = 0; n < k;) m = p[n++], this.dS(this.dG(this.dG(b, "balloons" + f), m), "x", this.dG(this.dG(this.dG(b, "balloons" + f), m), "x") / 30), this.dS(this.dG(this.dG(b, "balloons" + f), m), "y", this.dG(this.dG(this.dG(b, "balloons" + f), m), "y") / 30), this.dS(this.dG(this.dG(b, "balloons" + f), m), "stringX", this.dG(this.dG(this.dG(b, "balloons" + f), m), "stringX") / 30), this.dS(this.dG(this.dG(b, "balloons" + f), m), "stringY", this.dG(this.dG(this.dG(b, "balloons" + f), m), "stringY") / 30), this.dS(this.dG(this.dG(b, "balloons" + f), m), "speedX", Game.migrateSpeed(this.dG(this.dG(this.dG(b, "balloons" + f), m), "speedX"))), this.dS(this.dG(this.dG(b, "balloons" + f), m), "speedY", Game.migrateSpeed(this.dG(this.dG(this.dG(b, "balloons" + f), m), "speedY"))), this.dS(this.dG(this.dG(b, "balloons" + f), m), "stringSpeedX", Game.migrateSpeed(this.dG(this.dG(this.dG(b, "balloons" + f), m), "stringSpeedX"))), this.dS(this.dG(this.dG(b, "balloons" + f), m), "stringSpeedY", Game.migrateSpeed(this.dG(this.dG(this.dG(b, "balloons" + f), m), "stringSpeedY")));
                M = Object.keys(this.mDM(this.dG(b, "drops" + f)).h);
                p = M.length;
                for (k = 0; k < p;) n = M[k++], this.dG(this.dG(b, "drops" + f), n)[0] = this.dG(this.dG(b, "drops" + f), n)[0] / 30, this.dG(this.dG(b, "drops" + f), n)[1] = this.dG(this.dG(b, "drops" + f), n)[1] / 30;
                if ("Array" != lemongine.Helpers.getQualifiedClassName(this.dG(b, "xpOrbs" + f))) for (p = Object.keys(this.mDM(this.dG(b, "xpOrbs" + f)).h), k = p.length, n = 0; n < k;) m = p[n++], this.dG(this.dG(b, "xpOrbs" + f), m)[1] = this.dG(this.dG(b, "xpOrbs" + f), m)[1] / 30, this.dG(this.dG(b, "xpOrbs" + f), m)[2] = this.dG(this.dG(b, "xpOrbs" + f), m)[2] / 30;
                M = Object.keys(this.mDM(this.dG(b, "fallingBlocks" + f)).h);
                p = M.length;
                for (k = 0; k < p;) n = M[k++], this.dG(this.dG(b, "fallingBlocks" + f), n)[2] = this.dG(this.dG(b, "fallingBlocks" + f), n)[2] / 30, this.dG(this.dG(b, "fallingBlocks" + f), n)[3] = this.dG(this.dG(b, "fallingBlocks" + f), n)[3] / 30;
                this.dE(b, "spawnPoint" + f) && this.dS(b, "spawnPoint" + f, [this.dG(b, "spawnPoint" + f)[0] / 30, this.dG(b, "spawnPoint" + f)[1] / 30]);
                M = Object.keys(this.mDM(this.dG(b, "rafts" + f)).h);
                p = M.length;
                for (k = 0; k < p;) n = M[k++], this.dG(this.dG(b, "rafts" + f), n)[1] = this.dG(this.dG(b, "rafts" + f), n)[1] / 30, this.dG(this.dG(b, "rafts" + f), n)[2] = this.dG(this.dG(b, "rafts" + f), n)[2] / 30, this.dG(this.dG(b, "rafts" + f), n)[3] = Game.migrateSpeed(this.dG(this.dG(b, "rafts" + f), n)[3]), this.dG(this.dG(b, "rafts" + f), n)[4] = Game.migrateSpeed(this.dG(this.dG(b, "rafts" + f), n)[4]);
                l = Object.keys(this.mDM(this.dG(b, "flameballs" + f)).h);
                p = l.length;
                for (k = 0; k < p;) n = l[k++], a = this.dG(this.dG(b, "flameballs" + f), n), m = this.dG(b, "flameballs" + f), M = new haxe.ds.StringMap(), M.h.x = a[1] / 30, M.h.y = a[2] / 30, M.h.speedX = Game.migrateSpeed(a[3]), M.h.speedY = Game.migrateSpeed(a[4]), M.h.shotBy = "new" == HxOverrides.substr(Std.string(a[5]), 0, 3) ? HxOverrides.substr(Std.string(a[5]), 3, null) : a[5], this.dS(m, n, Game.makeDynamicMap(M));
                a = 0;
                for (M = "arrows spears shurikens splashPotions carts mobs".split(" "); a < M.length;) for (l = M[a], ++a, p = Object.keys(this.mDM(this.dG(b, l + f)).h), k = p.length, n = 0; n < k;) m = p[n++], this.dS(this.dG(this.dG(b, l + f), m), "x", this.dG(this.dG(this.dG(b, l + f), m), "x") / 30), this.dS(this.dG(this.dG(b, l + f), m), "y", this.dG(this.dG(this.dG(b, l + f), m), "y") / 30), this.dS(this.dG(this.dG(b, l + f), m), "speedX", Game.migrateSpeed(this.dG(this.dG(this.dG(b, l + f), m), "speedX"))), this.dS(this.dG(this.dG(b, l + f), m), "speedY", Game.migrateSpeed(this.dG(this.dG(this.dG(b, l + f), m), "speedY")));
            }
            this.dE(b, "portalCoords") && this.dS(b, "portalCoords", [this.dG(b, "portalCoords")[0] / 30, this.dG(b, "portalCoords")[1] / 30]);
            this.dE(b, "worldX") && this.dS(b, "worldX", this.dG(b, "worldX") / 30);
            this.dE(b, "worldY") && this.dS(b, "worldY", this.dG(b, "worldY") / 30);
        }
        World.versionToNumber(this.worldVer) < World.versionToNumber("1.30.4") && this.migrateItems(b, [["cl", "clore", !1, "block"], ["dm", "dmore", !1, "block"], ["cy", "cy1", !1, "block"]]);
        this.dS(b, "worldVer", "1.31.2");
        this.worldVer = "1.31.2";
    },
    migrateItems: function (b, a) {
        for (var c = 0, d = this.dG(b, "inventoryList").length; c < d;) {
            var f = c++;
            if (this.dG(b, "inventoryList")[f] instanceof Array && null != this.dG(b, "inventoryList")[f][0]) for (var l = 0, k = a.length; l < k;) {
                var n = l++;
                if ("block" != a[n][3] && HxOverrides.substr(Std.string(this.dG(b, "inventoryList")[f][0]), 0, a[n][lemongine.Helpers.tripleEqual(a[n][2], !0) ? 0 : 1].length) == a[n][0] && this.dG(b, "inventoryList")[f][0] != a[n][1]) {
                    if (lemongine.Helpers.tripleEqual(a[n][2], !0)) {
                        null == this.dG(b, "inventoryList")[f][3] && (this.dG(b, "inventoryList")[f][3] = new haxe.ds.StringMap());
                        var m = this.dG(b, "inventoryList")[f];
                        l = this.dG(b, "inventoryList")[f][0];
                        k = a[n][0].length;
                        var x = this.dG(b, "inventoryList")[f];
                        m[3].type = l.substr(k, x[0].length - a[n][0].length);
                    } else lemongine.Helpers.tripleEqual(a[n][2], !1) || (null == this.dG(b, "inventoryList")[f][3] && (this.dG(b, "inventoryList")[f][3] = new haxe.ds.StringMap()), this.dG(b, "inventoryList")[f][3].type = a[n][2]);
                    this.dG(b, "inventoryList")[f][0] = a[n][1];
                    break;
                }
            }
        }
        c = 0;
        for (d = this.numberOfScenes + 1; c < d;) {
            f = c++;
            for (var M = Object.keys(this.mDM(this.dG(b, "drops" + f)).h), ka = M.length, T = 0; T < ka;) {
                var t = M[T++];
                l = 0;
                for (k = a.length; l < k;) if (n = l++, "block" != a[n][3] ? (m = parseFloat(Std.string(this.dG(this.dG(b, "drops" + f), t)[2])), m = !isNaN(m)) : m = !0, !m && HxOverrides.substr(Std.string(this.dG(this.dG(b, "drops" + f), t)[2]), 0, a[n][lemongine.Helpers.tripleEqual(a[n][2], !0) ? 0 : 1].length) == a[n][0] && this.dG(this.dG(b, "drops" + f), t)[2] != a[n][1]) {
                    lemongine.Helpers.tripleEqual(a[n][2], !0) ? (null == this.dG(this.dG(b, "drops" + f), t)[6] && (this.dG(this.dG(b, "drops" + f), t)[6] = new haxe.ds.StringMap()), l = this.dG(this.dG(b, "drops" + f), t), x = this.dG(this.dG(b, "drops" + f), t)[2], k = a[n][0].length, m = this.dG(this.dG(b, "drops" + f), t), l[6].type = x.substr(k, m[2].length - a[n][0].length)) : lemongine.Helpers.tripleEqual(a[n][2], !1) || (null == this.dG(this.dG(b, "drops" + f), t)[6] && (this.dG(this.dG(b, "drops" + f), t)[6] = new haxe.ds.StringMap()), this.dG(this.dG(b, "drops" + f), t)[6].type = a[n][2]);
                    this.dG(this.dG(b, "drops" + f), t)[2] = a[n][1];
                    break;
                }
            }
            "string" == typeof this.dG(b, "states" + f) && this.dS(b, "states" + f, new haxe.ds.StringMap());
            if (null != this.dG(b, "scene" + f)) for (n = 0, l = this.dG(b, "scene" + f).length; n < l;) if (M = n++, this.dG(b, "scene" + f)[M] instanceof Array) for (ka = 0, T = this.dG(b, "scene" + f)[M].length; ka < T;) if (t = ka++, null != this.dG(b, "scene" + f)[M][t]) if ("dispense" == this.dG(b, "scene" + f)[M][t] || "dropper" == this.dG(b, "scene" + f)[M][t]) for (m = 0; 9 > m;) {
                k = this.dG(this.dG(b, "states" + f), "blockX" + M + "Y" + t + "_2")[m++];
                x = 0;
                for (var w = a.length; x < w;) {
                    var q = x++;
                    if ("block" != a[q][3] && null != k && null != k[0] && k[0].substr(0, a[q][lemongine.Helpers.tripleEqual(a[q][2], !0) ? 0 : 1].length) == a[q][0] && k[0] != a[q][1]) {
                        lemongine.Helpers.tripleEqual(a[q][2], !0) ? (null == k[3] && (k[3] = new haxe.ds.StringMap()), k[3].type = k[0].substr(a[q][0].length, k[0].length - a[q][0].length)) : lemongine.Helpers.tripleEqual(a[q][2], !1) || (null == k[3] && (k[3] = new haxe.ds.StringMap()), k[3].type = a[q][2]);
                        k[0] = a[q][1];
                        break;
                    }
                }
            } else for (k = 0, x = a.length; k < x;) if (m = k++, "item" != a[m][3] ? (w = parseFloat(this.dG(b, "scene" + f)[M][t]), w = !isNaN(w)) : w = !0, !w) {
                w = this.dG(b, "scene" + f)[M][t];
                q = a[m];
                var C = lemongine.Helpers.tripleEqual(a[m][2], !0) ? 0 : 1;
                if (w.substr(0, q[C].length) == a[m][0] && (this.dG(b, "scene" + f)[M][t] != a[m][1] || a[m][0] == a[m][1])) {
                    lemongine.Helpers.tripleEqual(a[m][2], !0) ? (k = this.dG(b, "states" + f), x = this.dG(b, "scene" + f)[M][t], w = a[m][0].length, q = this.dG(b, "scene" + f)[M], this.dS(k, "blockX" + M + "Y" + t, x.substr(w, q[t].length - a[m][0].length))) : lemongine.Helpers.tripleEqual(a[m][2], !1) || this.dS(this.dG(b, "states" + f), "blockX" + M + "Y" + t, a[m][2]);
                    this.dG(b, "scene" + f)[M][t] = a[m][1];
                    break;
                }
            }
            M = Object.keys(this.mDM(this.dG(b, "chests" + f)).h);
            ka = M.length;
            for (T = 0; T < ka;) for (t = M[T++], n = 0; 27 > n;) if (m = this.dG(this.dG(b, "chests" + f), t)[n++], null != m && null != m[0]) for (k = 0, x = a.length; k < x;) if (l = k++, "block" != a[l][3] && m[0].substr(0, a[l][lemongine.Helpers.tripleEqual(a[l][2], !0) ? 0 : 1].length) == a[l][0] && m[0] != a[l][1]) {
                lemongine.Helpers.tripleEqual(a[l][2], !0) ? (null == m[3] && (m[3] = new haxe.ds.StringMap()), k = Game.makeDynamicMap(m[3]), x = m[0].substr(a[l][lemongine.Helpers.tripleEqual(a[l][2], !0) ? 0 : 1].length, m[0].length - a[l][lemongine.Helpers.tripleEqual(a[l][2], !0) ? 0 : 1].length), k.h.type = x) : lemongine.Helpers.tripleEqual(a[l][2], !1) || (null == m[3] && (m[3] = new haxe.ds.StringMap()), Game.makeDynamicMap(m[3]).h.type = a[l][2]);
                m[0] = a[l][1];
                break;
            }
            f = Object.keys(this.mDM(this.dG(b, "toSmelt" + f)).h).length;
            for (n = 0; n < f;) ++n;
        }
        M = Object.keys(this.mDM(this.dG(b, "enderChests")).h);
        ka = M.length;
        for (T = 0; T < ka;) for (t = M[T++], c = 0; 27 > c;) if (m = this.dG(this.dG(b, "enderChests"), t)[c++], null != m && null != m[0]) for (d = 0, l = a.length; d < l;) if (n = d++, "block" != a[n][3] && m[0].substr(0, a[n][lemongine.Helpers.tripleEqual(a[n][2], !0) ? 0 : 1].length) == a[n][0] && m[0] != a[n][1]) {
            lemongine.Helpers.tripleEqual(a[n][2], !0) ? (null == m[3] && (m[3] = new haxe.ds.StringMap()), k = Game.makeDynamicMap(m[3]), x = m[0].substr(a[n][lemongine.Helpers.tripleEqual(a[n][2], !0) ? 0 : 1].length, m[0].length - a[n][lemongine.Helpers.tripleEqual(a[n][2], !0) ? 0 : 1].length), k.h.type = x) : lemongine.Helpers.tripleEqual(a[n][2], !1) || (null == m[3] && (m[3] = new haxe.ds.StringMap()), Game.makeDynamicMap(m[3]).h.type = a[n][2]);
            m[0] = a[n][1];
            break;
        }
    },
    setMobNum: function (b, a, c) {
        null == c && (c = !1);
        null == a && (a = 0);
        switch (b) {
        case "bat":
            this.batNum = (c ? 0 : this.batNum) + a;
            break;
        case "blaze":
            this.blazeNum = (c ? 0 : this.blazeNum) + a;
            break;
        case "chicken":
            this.chickenNum = (c ? 0 : this.chickenNum) + a;
            break;
        case "cow":
            this.cowNum = (c ? 0 : this.cowNum) + a;
            break;
        case "creeper":
            this.creeperNum = (c ? 0 : this.creeperNum) + a;
            break;
        case "enderdragon":
            this.enderdragonNum = (c ? 0 : this.enderdragonNum) + a;
            break;
        case "enderman":
            this.endermanNum = (c ? 0 : this.endermanNum) + a;
            break;
        case "ghast":
            this.ghastNum = (c ? 0 : this.ghastNum) + a;
            break;
        case "magmacube":
            this.magmacubeNum = (c ? 0 : this.magmacubeNum) + a;
            break;
        case "mob":
            this.mobNum = (c ? 0 : this.mobNum) + a;
            break;
        case "nethereye":
            this.nethereyeNum = (c ? 0 : this.nethereyeNum) + a;
            break;
        case "pig":
            this.pigNum = (c ? 0 : this.pigNum) + a;
            break;
        case "rabbit":
            this.rabbitNum = (c ? 0 : this.rabbitNum) + a;
            break;
        case "sheep":
            this.sheepNum = (c ? 0 : this.sheepNum) + a;
            break;
        case "skeleton":
            this.skeletonNum = (c ? 0 : this.skeletonNum) + a;
            break;
        case "slime":
            this.slimeNum = (c ? 0 : this.slimeNum) + a;
            break;
        case "snowgolem":
            this.snowgolemNum = (c ? 0 : this.snowgolemNum) + a;
            break;
        case "spawnskin":
            this.spawnskinNum = (c ? 0 : this.spawnskinNum) + a;
            break;
        case "spider":
            this.spiderNum = (c ? 0 : this.spiderNum) + a;
            break;
        case "squid":
            this.squidNum = (c ? 0 : this.squidNum) + a;
            break;
        case "wolf":
            this.wolfNum = (c ? 0 : this.wolfNum) + a;
            break;
        case "zombie":
            this.zombieNum = (c ? 0 : this.zombieNum) + a;
            break;
        case "zombiepigman":
            this.zombiepigmanNum = (c ? 0 : this.zombiepigmanNum) + a;
        }
    },
    setMobData: function () {
        var b = this,
            a = this,
            c = this.mobData,
            d = new haxe.ds.StringMap();
        d.h.name = "Zombie";
        d.h.constructor = entities.Entity_Mob_Zombie;
        d.h.hostile = !0;
        d.h.passive = !1;
        var f = new haxe.ds.StringMap();
        f.h.hurt = ["zombiehurt1", "zombiehurt2"];
        f.h.idle = ["zombie1", "zombie2", "zombie3"];
        f.h.death = ["zombiedie"];
        d.h.sounds = f;
        d.h.idleSoundFrequency = 400;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "rf";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 3;
        var l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "ii";
        var p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .016666666666666666;
        p.h.lootingBonusChances = .45;
        f.h.rare = p;
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        var m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "carrot";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = .016666666666666666;
        p.h.upperBound = .03333333333333333;
        p.h.lootingBonusChances = .45;
        f.h.rare = p;
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        var B = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "potato";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = .03333333333333333;
        p.h.upperBound = .05000000000000001;
        p.h.lootingBonusChances = .45;
        f.h.rare = p;
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        d.h.drops = [l, m, B, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 10;
        d.h.burnsInSun = !0;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5, 6];
        p.h.frameDelay = 6;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = f;
        d.h.percentageChanceToDoMovement = .05;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .0125;
        d.h.walkSpeed = 1.1;
        d.h.canClimb = !0;
        d.h.attackContact = !0;
        d.h.attackFrequency = 26;
        d.h.attackDamage = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.9, .8, 1.9);
        d.h.collisionBounds = l;
        c.h.zombie = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Skeleton";
        d.h.constructor = entities.Entity_Mob_Skeleton;
        d.h.hostile = !0;
        d.h.passive = !1;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["skeletonhurt1", "skeletonhurt2", "skeletonhurt3", "skeletonhurt4"];
        f.h.idle = ["skeleton1", "skeleton2", "skeleton3", "skeleton4"];
        f.h.death = ["skeletondeath"];
        d.h.sounds = f;
        d.h.idleSoundFrequency = 400;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "bone";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "arrow";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        d.h.drops = [l, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 10;
        d.h.burnsInSun = !0;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5, 6];
        p.h.frameDelay = 4;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = f;
        d.h.percentageChanceToDoMovement = .05;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .0125;
        d.h.walkSpeed = 1;
        d.h.canClimb = !0;
        d.h.attackBow = !0;
        d.h.attackFrequency = 70;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.9, .8, 1.9);
        d.h.collisionBounds = l;
        c.h.skeleton = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Pig";
        d.h.constructor = entities.Entity_Mob_Pig;
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["pig1", "pig2", "pig3", "pig4", "pig5"];
        f.h.idle = ["pig1", "pig2", "pig3", "pig4", "pig5"];
        d.h.sounds = f;
        d.h.idleSoundFrequency = 1E3;
        d.h.despawnChance = 2.5E-5;
        d.h.canBreed = !0;
        f = new haxe.ds.StringMap();
        f.h.carrot = !0;
        f.h.potato = !0;
        f.h.beet = !0;
        f.h.coas = !0;
        d.h.followItems = f;
        f = new haxe.ds.StringMap();
        f.h.carrot = !0;
        f.h.potato = !0;
        f.h.beet = !0;
        d.h.breedItems = f;
        d.h.canBeBaby = !0;
        f = new haxe.ds.StringMap();
        f.h.type = "pork";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        f.h.onFire = !1;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "cpork";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        f.h.onFire = !0;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "bacon";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .3333333333333333;
        p.h.lootingBonusChances = .3333333333333333;
        f.h.rare = p;
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 1;
        f.h.onFire = !1;
        B = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "cbacon";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .3333333333333333;
        p.h.lootingBonusChances = .3333333333333333;
        f.h.rare = p;
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 1;
        f.h.onFire = !0;
        d.h.drops = [l, m, B, Game.makeDynamicMap(f)];
        d.h.health = 10;
        d.h.xp = 4;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 4, 4];
        p.h.frameDelay = 8;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = f;
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .007142857142857143;
        d.h.doFrightenedRunning = !0;
        d.h.walkSpeed = 1;
        d.h.walkSpeedWhenRidden = 3;
        d.h.sprintMultiplier = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 3;
        l = new lemongine.Rectangle(-.8, -.8, 1.6, .8);
        d.h.collisionBounds = l;
        d.h.specialRendering = function (a) {};
        c.h.pig = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Snow Golem";
        d.h.constructor = entities.Entity_Mob_SnowGolem;
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.hurt = "snowgolemhurt1 snowgolemhurt2 snowgolemhurt3 snowgolemhurt4 snowgolemhurt5 snowgolemhurt6".split(" ");
        f.h.death = "snowgolemhurt1 snowgolemhurt2 snowgolemhurt3 snowgolemhurt4 snowgolemhurt5 snowgolemhurt6".split(" ");
        d.h.sounds = f;
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 0;
        f = new haxe.ds.StringMap();
        f.h.type = "snowb";
        f.h.quantity = 0;
        f.h.randomBonus = 15;
        f.h.lootBonus = 3;
        d.h.drops = [Game.makeDynamicMap(f)];
        d.h.health = 4;
        d.h.xp = 0;
        d.h.burnsInDesert = !0;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = f;
        d.h.percentageChanceToDoMovement = .05;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .0125;
        d.h.walkSpeed = 1;
        d.h.canClimb = !0;
        d.h.attackSnowball = !0;
        d.h.attackFrequency = 100;
        d.h.randomlyHostileChance = .01;
        d.h.randomlyForgetHostility = .001;
        f = new haxe.ds.StringMap();
        f.h.zombiepigman = !0;
        f.h.slime = !0;
        f.h.zombie = !0;
        f.h.skeleton = !0;
        f.h.spider = !0;
        f.h.enderman = !0;
        f.h.blaze = !0;
        f.h.nethereye = !0;
        f.h.ghast = !0;
        d.h.randomlyHostileTowards = f;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.8, .8, 1.8);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (c) {
            1 == Main.Instance.game.getGameRule("mobgriefing") && 1 != BlockData.get(a.getFG(Math.floor(b.mobs.h[c].h.x / 1), Math.floor(-b.mobs.h[c].h.y)), "walkThroughBlock") && "air" == a.getFG(Math.floor(b.mobs.h[c].h.x / 1), Math.floor(-b.mobs.h[c].h.y) + 1) && a.setFG(Math.floor(b.mobs.h[c].h.x / 1), Math.floor(-b.mobs.h[c].h.y) + 1, "snow");
        };
        c.h.snowgolem = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Sheep";
        d.h.constructor = entities.Entity_Mob_Sheep;
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["sheep1", "sheep2", "sheep3"];
        f.h.idle = ["sheep1", "sheep2", "sheep3"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 1E3;
        d.h.despawnChance = 2.5E-5;
        d.h.canBreed = !0;
        f = new haxe.ds.StringMap();
        f.h.wheat = !0;
        d.h.followItems = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.wheat = !0;
        d.h.breedItems = Game.makeDynamicMap(f);
        d.h.canBeBaby = !0;
        f = new haxe.ds.StringMap();
        f.h.type = "cloth";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        f.h.setColor = !0;
        p = new haxe.ds.StringMap();
        p.h.sheared = ["==", !1];
        f.h.properties = Game.makeDynamicMap(p);
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "mutton";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        f.h.onFire = !1;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "cmutton";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        f.h.onFire = !0;
        d.h.drops = [l, m, Game.makeDynamicMap(f)];
        d.h.health = 8;
        d.h.xp = 4;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 2, 1, 3];
        p.h.frameDelay = 8;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [4, 5];
        p.h.frameDelay = 8;
        p.h.loop = !0;
        f.h.eating = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .007142857142857143;
        d.h.doFrightenedRunning = !0;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 3;
        l = new lemongine.Rectangle(-.8, -1.3, 1.6, 1.3);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (a) {
            var c = b.mobs.h[a],
                d = Math.floor(c.h.x / 1),
                f = Math.floor(-c.h.y);
            Math.random() < 1 / (2E3 * Main.Instance.get_fps() / 25) && "dt" == b.getFG(d, f) && 1 == b.states.h["blockX" + d + "Y" + f] && (c.h.eating = 1);
            0 < c.h.eating && (c.h.eating += 1, 32 == c.h.eating && (c.h.sheared = !1, "dt" == b.getFG(d, f) && (Main.Instance.game.blockSound(d, f, c.h.x - b.worldX, c.h.y - b.worldY), 1 == Main.Instance.game.getGameRule("mobgriefing") && (b.states.h["blockX" + d + "Y" + f] = 2, null != b.getBlock(d, f) && js.Boot.__cast(b.getBlock(d, f), blocks.Block_Dirt).updateRenderer())), c.h.eating = 0), b.mobTmpData.h[a].h.immobile = !0);
        };
        c.h.sheep = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Spider";
        d.h.constructor = entities.Entity_Mob_Spider;
        d.h.hostile = !1;
        d.h.passive = !1;
        d.h.neutral = !0;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["spider1", "spider2", "spider3", "spider4"];
        f.h.idle = ["spider1", "spider2", "spider3", "spider4"];
        f.h.death = ["spiderdeath"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        f = new haxe.ds.StringMap();
        f.h.type = "fiber";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "se";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .3333333333333333;
        p.h.lootingBonusChances = .3333333333333333;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        d.h.drops = [l, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 4;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.ignoreWeb = !0;
        d.h.ignoreCliffs = !0;
        d.h.climbsWalls = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5, 6, 7, 8];
        p.h.frameDelay = 2;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .014285714285714285;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .016666666666666666;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.jumpAttack = !0;
        d.h.attackContact = !0;
        d.h.attackFrequency = 26;
        d.h.attackDamage = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 3;
        l = new lemongine.Rectangle(-.8, -1, 1.6, 1);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (a) {
            Math.random() < 1 / (100 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(b.mobs.h[a].h.keys).h.up = !0);
            Math.random() < 1 / (50 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(b.mobs.h[a].h.keys).h.up = !1);
            Math.random() < 1 / (200 * Main.Instance.get_fps() / 25) && (48 > b.tim && 2 <= b.tim && 0 == b.raining && -50 >= b.mobs.h[a].h.y && null == b.mobs.h[a].h.target ? (b.mobs.h[a].h.aggressiveness = 0, b.mobs.h[a].h.target = null) : b.mobs.h[a].h.aggressiveness = 1E3);
        };
        c.h.spider = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Nethereye";
        d.h.constructor = entities.Entity_Mob_Nethereye;
        d.h.hostile = !0;
        d.h.passive = !1;
        f = new haxe.ds.StringMap();
        f.h.idle = ["nethereye1", "nethereye2", "nethereye3", "nethereye4"];
        f.h.hurt = ["nethereye1", "nethereye2", "nethereye3", "nethereye4"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 2E3;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "nbr";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 3;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "ob";
        p = new haxe.ds.StringMap();
        p.h.randomNum = 0;
        p.h.lowerBound = 0;
        p.h.upperBound = .0666;
        p.h.lootingBonusChances = .4;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 2;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "br";
        p = new haxe.ds.StringMap();
        p.h.randomNum = 0;
        p.h.lowerBound = .0666;
        p.h.upperBound = .2;
        p.h.lootingBonusChances = .1;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 2;
        d.h.drops = [l, m, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 10;
        d.h.takesFallDamage = !1;
        d.h.burnsInLava = !1;
        d.h.burnsInAcid = !0;
        d.h.burnsOnFire = !1;
        d.h.animations = null;
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .007142857142857143;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.attackContact = !0;
        d.h.attackFrequency = 26;
        d.h.attackDamage = 2;
        d.h.ignoreCliffs = !0;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.5, -.5, 1, 1);
        d.h.collisionBounds = l;
        d.h["float"] = !0;
        d.h.floatMaxSpeed = 5;
        d.h.followVertically = !0;
        d.h.specialGravityFunction = function (a) {
            a = b.mobs.h[a];
            Main.Instance.game.collision(a.h.x - .3333333333333333, a.h.y + .3333333333333333, .6666666666666666, 0, .16666666666666666, !1) ? (a.h.y -= .06666666666666667, a.h.speedY += Game.migrateSpeed(2)) : a.h.speedY -= Game.migrateSpeed(1);
            1 == BlockData.get(b.getFG(Math.floor(a.h.x / 1), Math.floor(-a.h.y)), "liquidCollision") && (a.h.speedX *= Game.migrateDampening(.8), a.h.speedY *= Game.migrateDampening(.8));
            a.h.speedX *= Game.migrateDampening(.9);
            a.h.speedY *= Game.migrateDampening(.9);
        };
        c.h.nethereye = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Bat";
        d.h.constructor = entities.Entity_Mob_Bat;
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.idle = ["batidle1", "batidle2", "batidle3", "batidle4", "batidle5"];
        f.h.hurt = ["bathurt1", "bathurt2", "bathurt3", "bathurt4"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 1200;
        d.h.despawnChance = 1E-4;
        d.h.drops = [];
        d.h.health = 6;
        d.h.xp = 0;
        d.h.takesFallDamage = !1;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.burnsOnFire = !0;
        d.h.animations = null;
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .007142857142857143;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.ignoreCliffs = !0;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.5, -.5, 1, 1);
        d.h.collisionBounds = l;
        d.h["float"] = !0;
        d.h.floatMaxSpeed = 3;
        d.h.floatJump = 1.4;
        d.h.followVertically = !0;
        d.h.specialGravityFunction = function (c) {
            var d = b.mobs.h[c],
                f = !1;
            Math.random() < 1 / (10 * Main.Instance.get_fps() / 25) && 1 != a.gamemode && 5 > Math.abs(b.worldX - d.h.x) && (f = !0, Game.makeDynamicMap(d.h.keys).h.left = b.worldX > d.h.x, Game.makeDynamicMap(d.h.keys).h.right = !Game.makeDynamicMap(d.h.keys).h.left);
            for (var g = 0, l = 0; 10 > g && BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) - g), "walkThroughBlockHit") && 1 != BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) - g), "liquidCollision");) ++g;
            for (; 4 > l && BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) + l), "walkThroughBlockHit") && 1 != BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) + l), "liquidCollision");) ++l;
            1 != d.h.hanging && Math.random() < 1 / (20 * Main.Instance.get_fps() / 25) && 2 < g && 1 != BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) + 1), "walkThroughBlockHit") && "b" != b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) + 1) && (d.h.hanging = !0);
            if (1 == d.h.hanging) if (d.h.speedY = 0, d.h.speedX = 0, Game.makeDynamicMap(d.h.keys).h.up = !1, d.h.y = -Math.floor(-d.h.y) - .36666666666666664, b.mobTmpData.h[c].h.immobile = !0, f || 1 == BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y) + 1), "walkThroughBlockHit") || .03333333333333333 > Math.random()) d.h.hanging = !1, d.h.speedY = Game.migrateSpeed(-2), Game.makeDynamicMap(d.h.keys).h.left = .5 > Math.random(), Game.makeDynamicMap(d.h.keys).h.right = !Game.makeDynamicMap(d.h.keys).h.left;else return;
            3 >= g ? Math.random() < 1 / (5 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(d.h.keys).h.up = !0) : 8 <= g || 2 >= l ? Math.random() < 1 / (5 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(d.h.keys).h.up = !1) : Math.random() < 1 / (20 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(d.h.keys).h.up = !Game.makeDynamicMap(d.h.keys).h.up);
            Math.random() < 1 / (40 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(d.h.keys).h.left = Game.makeDynamicMap(d.h.keys).h.right, Game.makeDynamicMap(d.h.keys).h.right = !Game.makeDynamicMap(d.h.keys).h.left);
            0 == Game.makeDynamicMap(d.h.keys).h.up && (d.h.speedY -= Game.migrateAcc(.8, 1));
            1 != d.h.hanging && (1 == Game.makeDynamicMap(d.h.keys).h.left ? d.h.speedX += Game.migrateAcc(.4, 1) : d.h.speedX -= Game.migrateAcc(.4, 1));
            d.h.speedX = Math.max(Game.migrateSpeed(-5), Math.min(Game.migrateSpeed(5), d.h.speedX));
            1 == BlockData.get(b.getFG(Math.floor(d.h.x / 1), Math.floor(-d.h.y)), "liquidCollision") && (d.h.speedX *= Game.migrateDampening(.7), d.h.speedY *= Game.migrateDampening(.7));
        };
        c.h.bat = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Cow";
        d.h.constructor = entities.Entity_Mob_Cow;
        f = new haxe.ds.StringMap();
        f.h.mooshroom = "Mooshroom";
        f.h.cowctus = "Cowctus";
        d.h.variants = Game.makeDynamicMap(f);
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.idle = ["cow1", "cow2", "cow3", "cow4"];
        f.h.hurt = ["cowhurt1"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 1E3;
        d.h.despawnChance = 2.5E-5;
        d.h.canBreed = !0;
        f = new haxe.ds.StringMap();
        f.h.wheat = !0;
        d.h.followItems = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.wheat = !0;
        d.h.breedItems = Game.makeDynamicMap(f);
        d.h.canBeBaby = !0;
        f = new haxe.ds.StringMap();
        f.h.type = "leather";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "ms1";
        f.h.quantity = 1;
        f.h.randomBonus = 2;
        f.h.lootBonus = 3;
        f.h.isVariant = "mooshroom";
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "ms2";
        f.h.quantity = 1;
        f.h.randomBonus = 2;
        f.h.lootBonus = 3;
        f.h.isVariant = "mooshroom";
        B = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "beef";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        f.h.onFire = !1;
        var x = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "cbeef";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        f.h.onFire = !0;
        p = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "ct";
        f.h.quantity = 1;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        f.h.isVariant = "cowctus";
        d.h.drops = [l, m, B, x, p, Game.makeDynamicMap(f)];
        d.h.health = 10;
        d.h.xp = 4;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 1, 3];
        l = new haxe.ds.StringMap();
        m = new haxe.ds.StringMap();
        m.h.offset = 9;
        l.h.mooshroom = Game.makeDynamicMap(m);
        m = new haxe.ds.StringMap();
        m.h.offset = 3;
        l.h.cowctus = Game.makeDynamicMap(m);
        p.h.variants = Game.makeDynamicMap(l);
        p.h.frameDelay = 8;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        l = new haxe.ds.StringMap();
        m = new haxe.ds.StringMap();
        m.h.offset = 9;
        l.h.mooshroom = Game.makeDynamicMap(m);
        m = new haxe.ds.StringMap();
        m.h.offset = 3;
        l.h.cowctus = Game.makeDynamicMap(m);
        p.h.variants = Game.makeDynamicMap(l);
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [7, 8, 9];
        p.h.frameDelay = 8;
        p.h.loop = !0;
        f.h.chargewalk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [7];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.chargeidle = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .007142857142857143;
        d.h.doFrightenedRunning = !0;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 3;
        l = new lemongine.Rectangle(-.8, -1.3, 1.6, 1.3);
        d.h.collisionBounds = l;
        d.h.specialOnHit = function (c, d, f, g) {
            d = b.mobs.h[c];
            if ("cowctus" == d.h.variant && !("attack" != f && ("projectile" != f || g != a.player.id && null == b.mobs.h[g]) || 0 < d.h.aggressiveness)) for (f = 10 * Main.Instance.get_fps(), d.h.aggressiveness = f, d.h.target = g, f = Main.Instance.get_fps(), d.h.chargeTimer = f, d.h.direction = null != b.mobTmpData.h[c] && b.mobTmpData.h[c].h.followPoint.x > d.h.x ? 1 : 0, Game.makeDynamicMap(d.h.keys).h.left = 0 == d.h.direction, Game.makeDynamicMap(d.h.keys).h.right = 1 == d.h.direction, Game.makeDynamicMap(d.h.keys).h.up = !1, c = 1, g = 4 * (GlobalSave.particles - 1) + 1; c < g;) ++c, new particles.Particle_Dust(d.h.x + (40 * Math.random() - 20) / 30, d.h.y - 30 * Math.random() / 30, Main.Instance.game, b, d.h.speedX);
        };
        d.h.specialFunction = function (c) {
            var d = b.mobs.h[c];
            0 < d.h.aggressiveness && --d.h.aggressiveness;
            if ("cowctus" == d.h.variant) if (0 < d.h.aggressiveness) {
                b.mobTmpData.h[c].h.overrideMovement = !0;
                if (0 < d.h.chargeTimer) {
                    if (--d.h.chargeTimer, b.mobTmpData.h[c].h.immobile = !0, b.mobTmpData.h[c].h.animationOverride = "chargeidle", 0 >= d.h.chargeTimer) for (var f = 1, g = 4 * (GlobalSave.particles - 1) + 1; f < g;) ++f, new particles.Particle_Dust(d.h.x + (40 * Math.random() - 20) / 30, d.h.y - 30 * Math.random() / 30, Main.Instance.game, b, d.h.speedX);
                } else {
                    Game.makeDynamicMap(d.h.keys).h.left = 0 == d.h.direction;
                    Game.makeDynamicMap(d.h.keys).h.right = 1 == d.h.direction;
                    Game.makeDynamicMap(d.h.keys).h.up = !1;
                    b.mobTmpData.h[c].h.forceSpeedMultiplier = 3.9;
                    if (null != b.mobTmpData.h[c].h.followPoint) if (b.mobTmpData.h[c].h.followPoint.x > d.h.x != (1 == d.h.direction)) f = .5 * Main.Instance.get_fps(), d.h.chargeTimer = f, d.h.direction = b.mobTmpData.h[c].h.followPoint.x > d.h.x ? 1 : 0, Game.makeDynamicMap(d.h.keys).h.left = 0 == d.h.direction, Game.makeDynamicMap(d.h.keys).h.right = 1 == d.h.direction;else if (1 == Game.makeDynamicMap(d.h.keys).h.left && 1 != b.mobTmpData.h[c].h.leftable || 1 == Game.makeDynamicMap(d.h.keys).h.right && 1 != b.mobTmpData.h[c].h.rightable) d.h.aggressiveness = 0, d.h.chargeTimer = 0, d.h.target = null;
                    if ((1 == Game.makeDynamicMap(d.h.keys).h.left || 1 == Game.makeDynamicMap(d.h.keys).h.right) && 2 < Math.abs(d.h.speedX)) {
                        if (b.mobTmpData.h[c].h.animationOverride = "chargewalk", 1 == b.tick % 2) for (f = 1, g = GlobalSave.particles - 1 + 1; f < g;) ++f, new particles.Particle_Dust(d.h.x + (40 * Math.random() - 20) / 30, d.h.y - 30 * Math.random() / 30, Main.Instance.game, b, d.h.speedX);
                    } else b.mobTmpData.h[c].h.animationOverride = "chargeidle";
                }
                d.h.target == a.player.id ? Main.Instance.game.getMob(c).mobCollision(c, a.player.id) && (Main.Instance.game.addParticles("shockwave", 4, 2, new lemongine.Point(d.h.x + ((0 < d.h.direction ? 20 : -20) - 20) / 30, 1.3333333333333333), new lemongine.Point(d.h.y - 1.6666666666666667, 1)), a.worldY -= .3333333333333333, b.ySpeed = Game.migrateSpeed(20), f = 5 + (null != Game.makeDynamicMap(d.h.effects).h.strength ? Game.makeDynamicMap(Game.makeDynamicMap(d.h.effects).h.strength).h.level * Game.makeDynamicMap(Main.Instance.game.effectData.h.strength).h.perLevel : 0), f += null != Game.makeDynamicMap(d.h.effects).h.weakness ? Game.makeDynamicMap(Game.makeDynamicMap(d.h.effects).h.weakness).h.level * Game.makeDynamicMap(Main.Instance.game.effectData.h.weakness).h.perLevel : 0, Main.Instance.game.ouch(1, f, "attack"), null != b.armors[1][2] && (null != Game.makeDynamicMap(b.armors[1][2]).h.thorns1 ? (Main.Instance.game.getMob(c).hurtMob(c, 2, "attack", a.player.id), f = d.h.speedX + Game.migrateSpeed(11 * Math.random() - 5), d.h.speedX = f, Game.makeDynamicMap(d.h.keys).h.up = !0) : null != Game.makeDynamicMap(b.armors[1][2]).h.thorns2 ? (Main.Instance.game.getMob(c).hurtMob(c, 4, "attack", a.player.id), f = d.h.speedX + Game.migrateSpeed(19 * Math.random() - 9), d.h.speedX = f, Game.makeDynamicMap(d.h.keys).h.up = !0) : null != Game.makeDynamicMap(b.armors[1][2]).h.thorns3 && (Main.Instance.game.getMob(c).hurtMob(c, 6, "attack", a.player.id), f = d.h.speedX + Game.migrateSpeed(27 * Math.random() - 13), d.h.speedX = f, Game.makeDynamicMap(d.h.keys).h.up = !0)), d.h.aggressiveness = 0, d.h.chargeTimer = 0, d.h.target = null) : null != d.h.target && null != b.mobs.h[d.h.target] && Main.Instance.game.getMob(c).mobCollision(c, d.h.target) && (Main.Instance.game.addParticles("shockwave", 4, 2, new lemongine.Point(d.h.x + ((0 < d.h.direction ? 20 : -20) - 20) / 30, 1.3333333333333333), new lemongine.Point(d.h.y - 1.6666666666666667, 1)), f = b.mobs.h[d.h.target], f.h.y -= .3333333333333333, b.mobs.h[d.h.target].h.speedY = Game.migrateSpeed(20), f = 5 + (Game.makeDynamicMap(d.h.effects).h.strength ? Game.makeDynamicMap(Game.makeDynamicMap(d.h.effects).h.strength).h.level * Game.makeDynamicMap(Main.Instance.game.effectData.h.strength).h.perLevel : 0), f += Game.makeDynamicMap(d.h.effects).h.weakness ? Game.makeDynamicMap(Game.makeDynamicMap(d.h.effects).h.weakness).h.level * Game.makeDynamicMap(Main.Instance.game.effectData.h.weakness).h.perLevel : 0, Main.Instance.game.getMob(c).hurtMob(d.h.target, f, "attack", c), d.h.aggressiveness = 0, d.h.chargeTimer = 0, d.h.target = null);
            } else d.h.chargeTimer = 0, b.mobTmpData.h[c].h.animationOverride = "";
        };
        c.h.cow = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Chicken";
        d.h.constructor = entities.Entity_Mob_Chicken;
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["chicken1", "chicken2", "chicken3"];
        f.h.idle = ["chicken1", "chicken2", "chicken3"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        d.h.canBreed = !0;
        f = new haxe.ds.StringMap();
        f.h.seed = !0;
        f.h.pseed = !0;
        f.h.wseed = !0;
        f.h.bseed = !0;
        d.h.followItems = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.seed = !0;
        f.h.pseed = !0;
        f.h.wseed = !0;
        f.h.bseed = !0;
        d.h.breedItems = Game.makeDynamicMap(f);
        d.h.canBeBaby = !0;
        f = new haxe.ds.StringMap();
        f.h.type = "feather";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "chicken";
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 2;
        f.h.onFire = !1;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "cchicken";
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 2;
        f.h.onFire = !0;
        d.h.drops = [l, m, Game.makeDynamicMap(f)];
        d.h.health = 4;
        d.h.xp = 2;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.burnsOnFire = !1;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11];
        p.h.frameDelay = 2;
        p.h.loop = !0;
        f.h.falling = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 2, 3, 3, 3, 4, 4, 5, 5];
        p.h.frameDelay = 2;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .03333333333333333;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .1;
        d.h.percentageChanceToJump = .0025;
        d.h.doFrightenedRunning = !0;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 2;
        d.h.fallSpeed = .5;
        d.h.jumpSpeedMultiplier = .5;
        d.h.hostileOnFire = !0;
        d.h.attackContact = !0;
        d.h.attackFrequency = 70;
        d.h.attackDamage = 3;
        d.h.ignoreCliffs = !0;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -.8, .8, .8);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (c) {
            if (Object.prototype.hasOwnProperty.call(b.onFire.h, c) && (Main.Instance.game.addEffect(c, "jumpboost", 2, 2), Main.Instance.game.addEffect(c, "speed", 2, 1), Main.Instance.game.addEffect(c, "regeneration", 2, 1), Main.Instance.game.addEffect(c, "fireresistance", 2, 1), Math.random() < 1 / (320 * Main.Instance.get_fps() / 25) && Main.Instance.game.requestSound("distantThunder" + (10 * Math.random() + 1 | 0), 0, 0), Math.random() < (GlobalSave.particles - 1) / 2 && (Main.Instance.game.addParticles("lavabubble", 2, 0, new lemongine.Point(b.mobs.h[c].h.x, 0), new lemongine.Point(b.mobs.h[c].h.y, 0)), Main.Instance.game.addParticles("chicken", 1, 1, new lemongine.Point(b.mobs.h[c].h.x - .3333333333333333, .6666666666666666), new lemongine.Point(b.mobs.h[c].h.y - .6666666666666666, .6666666666666666))), 1 == b.gameRules.h.mobgriefing)) {
                var d = Math.floor(b.mobs.h[c].h.x / 1 + (3 * Math.random() - 1)),
                    f = Math.floor(-b.mobs.h[c].h.y + (3 * Math.random() - 1));
                Main.Instance.game.canFireExistAt(d, f) && "air" == a.getFG(d, f) && a.setFG(d, f);
            }
            0 == b.mobs.h[c].h.babyTimer && Math.random() < 1 / (240 * Main.Instance.get_fps() - (1 == b.onFire.h[c] ? 120 * Main.Instance.get_fps() : 0)) && (Main.Instance.game.requestSound("layEgg", b.mobs.h[c].h.x - b.worldX, b.mobs.h[c].h.y - b.worldY), 1 == b.onFire.h[c] ? Main.Instance.game.addDrop("fireegg", b.mobs.h[c].h.x, b.mobs.h[c].h.y, 1, null, null) : Main.Instance.game.addDrop("egg", b.mobs.h[c].h.x, b.mobs.h[c].h.y, 1, null, null));
            b.mobs.h[c].h.falling && Math.random() < 1 / (30 * Main.Instance.get_fps() / 25) && (b.mobTmpData.h[c].h.lookingBackwards = !1);
            Math.random() < 1 / (120 * Main.Instance.get_fps() / 25) && (b.mobTmpData.h[c].h.lookingBackwards = !0);
            Math.random() < 1 / (30 * Main.Instance.get_fps() / 25) && (b.mobTmpData.h[c].h.lookingBackwards = !1);
        };
        c.h.chicken = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Creeper";
        d.h.constructor = entities.Entity_Mob_Creeper;
        d.h.hostile = !0;
        d.h.passive = !1;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["creeper1", "creeper2", "creeper3", "creeper4"];
        f.h.death = ["creeperdeath"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        f = new haxe.ds.StringMap();
        f.h.type = "gp";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        d.h.drops = [Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 10;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5];
        p.h.frameDelay = 8;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .05;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .016666666666666666;
        d.h.walkSpeed = 1;
        d.h.attackExplode = !0;
        d.h.fuseLength = 140;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.85, .8, 1.85);
        d.h.collisionBounds = l;
        c.h.creeper = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Rabbit";
        d.h.constructor = entities.Entity_Mob_Rabbit;
        d.h.hostile = !1;
        d.h.passive = !0;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["rabbitHurt1", "rabbitHurt2", "rabbitHurt3", "rabbitHurt4"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        d.h.canBreed = !0;
        f = new haxe.ds.StringMap();
        f.h.fw1 = !0;
        f.h.carrot = !0;
        f.h.gcarrot = !0;
        d.h.followItems = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.fw1 = !0;
        f.h.carrot = !0;
        f.h.gcarrot = !0;
        d.h.breedItems = Game.makeDynamicMap(f);
        d.h.canBeBaby = !0;
        f = new haxe.ds.StringMap();
        f.h.type = "rleather";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "crabbit";
        f.h.quantity = 0;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        f.h.onFire = !0;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "rabbit";
        f.h.quantity = 0;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        f.h.onFire = !1;
        B = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "rfoot";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .1;
        p.h.lootingBonusChances = .03;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        x = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "carrot";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = .1;
        p.h.upperBound = .35;
        p.h.lootingBonusChances = .03;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        d.h.drops = [l, m, B, x, Game.makeDynamicMap(f)];
        d.h.health = 3;
        d.h.xp = 2;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.animations = null;
        d.h.hops = !0;
        d.h.percentageChanceToDoMovement = 1;
        d.h.percentageChanceToChangeDirection = .0125;
        d.h.percentageChanceToStopMoving = .16666666666666666;
        d.h.percentageChanceToJump = 5.555555555555556E-4;
        d.h.doFrightenedRunning = !0;
        d.h.walkSpeed = 1.5;
        d.h.sprintMultiplier = 1.5;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -.8, .8, .8);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (a) {
            a = b.mobs.h[a];
            if (1 == Main.Instance.game.getGameRule("mobgriefing") && Math.random() < 1 / (30 * Main.Instance.get_fps())) {
                var c = Math.floor(a.h.x / 1),
                    d = Math.floor(-a.h.y);
                "carrot" == b.getFG(c, d) && null != b.wheat.h["blockX" + c + "Y" + d] && 7 == b.wheat.h["blockX" + c + "Y" + d] && (Main.Instance.game.blockSound(c, d, -b.worldX - a.h.x, b.worldY - a.h.y), Main.Instance.game.requestRemove(c, d, !0, !1, !0));
            }
            !a.h.falling && .3333333333333333 > Math.random() && (c = Game.makeDynamicMap(a.h.keys), d = Game.makeDynamicMap(a.h.keys), Game.makeDynamicMap(a.h.keys).h.up = !1, d.h.left = !1, c.h.right = !1);
        };
        c.h.rabbit = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Wolf";
        d.h.constructor = entities.Entity_Mob_Wolf;
        d.h.hostile = !1;
        d.h.passive = !1;
        d.h.neutral = !0;
        d.h.tameable = !0;
        f = new haxe.ds.StringMap();
        f.h.idle = "Bark1 Bark2 Bark3 Bark4 Bark5 Bark6 Bark7 Bark8 Bark9 Bark10".split(" ");
        f.h.hurt = ["Whine"];
        f.h.aggroIdle = ["Growl1", "Growl2", "Growl3", "Growl4"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 3E3;
        d.h.despawnChance = 1E-4;
        d.h.canBreed = !0;
        d.h.followItems = new haxe.ds.StringMap();
        f = new haxe.ds.StringMap();
        f.h.pork = !0;
        f.h.cpork = !0;
        f.h.beef = !0;
        f.h.cbeef = !0;
        f.h.chicken = !0;
        f.h.cchicken = !0;
        f.h.rabbit = !0;
        f.h.crabbit = !0;
        f.h.mutton = !0;
        f.h.cmutton = !0;
        f.h.rf = !0;
        f.h.fi = !0;
        f.h.cfi = !0;
        f.h.salmon = !0;
        f.h.csalmon = !0;
        d.h.breedItems = Game.makeDynamicMap(f);
        d.h.canBeBaby = !0;
        d.h.drops = [];
        d.h.health = 20;
        d.h.xp = 8;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5, 5];
        p.h.frameDelay = 4;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [6];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.sitting = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .03333333333333333;
        d.h.percentageChanceToChangeDirection = .016666666666666666;
        d.h.percentageChanceToStopMoving = .16666666666666666;
        d.h.percentageChanceToJump = .01;
        d.h.walkSpeed = 2;
        d.h.sprintMultiplier = 1.5;
        f = new haxe.ds.StringMap();
        f.h.sheep = !0;
        f.h.chicken = !0;
        d.h.randomlyHostileTowards = Game.makeDynamicMap(f);
        d.h.randomlyHostileChance = .0033333333333333335;
        d.h.randomlyForgetHostility = .001;
        d.h.attackContact = !0;
        d.h.attackFrequency = 30;
        d.h.attackDamage = 3;
        d.h.groupAttack = !0;
        d.h.groupAttackDistance = 10;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 3;
        l = new lemongine.Rectangle(-.8, -1.3, 1.6, 1.3);
        d.h.collisionBounds = l;
        d.h.specialInit = function (a) {
            1 == b.mobs.h[a].h.sitting && (b.mobTmpData.h[a].h.immobile = !0);
        };
        d.h.specialFunction = function (c) {
            b.mobTmpData.h[c].h.animationOffset = 1 == b.mobs.h[c].h.tamed ? 5 : 0;
            if (1 == b.mobs.h[c].h.tamed) {
                if ((null == b.mobs.h[c].h.target || null == b.mobs.h[b.mobs.h[c].h.target] || 7 < Math.abs(b.mobs.h[b.mobs.h[c].h.target].h.x - b.mobs.h[c].h.x)) && null != b.mobs.h[b.lastTarget] && "wolf" != b.mobs.h[b.lastTarget].h.type) {
                    var d = b.mobs.h[c],
                        f = b.lastTarget;
                    b.mobs.h[c].h.target = f;
                    d.h.focus = f;
                    d = b.mobs.h[c];
                    f = 25 * Main.Instance.get_fps();
                    d.h.aggressiveness = f;
                }
                b.mobs.h[c].h.sitting && (b.mobTmpData.h[c].h.immobile = !0);
            } else b.mobs.h[c].h.sitting && (b.mobs.h[c].h.sitting = !1);
            b.mobs.h[c].h.tamed && 5 > b.mobs.h[c].h.health && .002 > Math.random() && Main.Instance.game.requestSound("Whine", b.mobs.h[c].h.x - a.worldX, b.mobs.h[c].h.y - a.worldY, 1, 1, 0 < b.mobs.h[c].h.babyTimer ? 1.3 : 1);
            b.mobs.h[c].h.sitting && null != BlockData.get(b.getFG(Math.floor(b.mobs.h[c].h.x / 1), Math.floor(-b.mobs.h[c].h.y)), "liquidCollision") && (b.mobs.h[c].h.sitting = !1);
        };
        c.h.wolf = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Slime";
        d.h.constructor = entities.Entity_Mob_Slime;
        d.h.hostile = !0;
        d.h.passive = !1;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["slimejump1", "slimejump2", "slimeland3"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        f = new haxe.ds.StringMap();
        f.h.type = "slimeball";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        p = new haxe.ds.StringMap();
        p.h.size = ["==", 1];
        f.h.properties = Game.makeDynamicMap(p);
        d.h.drops = [Game.makeDynamicMap(f)];
        d.h.health = 4;
        d.h.healthFunction = function (a) {
            return Math.pow(4, b.mobs.h[a].h.size - 1) | 0;
        };
        d.h.xp = 0;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.animations = null;
        d.h.hops = !0;
        d.h.percentageChanceToDoMovement = .0125;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = 1;
        d.h.percentageChanceToJump = 0;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.attackContact = !0;
        d.h.attackFrequency = 26;
        d.h.attackDamage = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.45, -.45, .9, .9);
        d.h.collisionBounds = l;
        d.h.specialDeath = function (a) {
            Main.Instance.game.dropXP(b.mobs.h[a].h.x, b.mobs.h[a].h.y, Math.pow(2, b.mobs.h[a].h.size - 1) | 0);
            if (1 < b.mobs.h[a].h.size) for (var c = 4 * Math.random() + 1 | 0; 0 < c;) {
                var d = entities.Entity_Mob.spawnMob("slime", b.mobs.h[a].h.x, b.mobs.h[a].h.y, b.mobs.h[a].h.name);
                b.mobs.h[d].h.size = b.mobs.h[a].h.size - 1;
                b.mobs.h[d].h.health = Math.pow(4, b.mobs.h[d].h.size - 1);
                --c;
            }
        };
        c.h.slime = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Magma Cube";
        d.h.constructor = entities.Entity_Mob_MagmaCube;
        d.h.hostile = !0;
        d.h.passive = !1;
        f = new haxe.ds.StringMap();
        f.h.hurt = ["slimejump1", "slimejump2", "slimeland3"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        f = new haxe.ds.StringMap();
        f.h.type = "magmac";
        f.h.quantity = 0;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        p = new haxe.ds.StringMap();
        p.h.size = ["!=", 1];
        f.h.properties = Game.makeDynamicMap(p);
        d.h.drops = [Game.makeDynamicMap(f)];
        d.h.health = 4;
        d.h.healthFunction = function (a) {
            return Math.pow(4, b.mobs.h[a].h.size - 1) | 0;
        };
        d.h.xp = 0;
        d.h.burnsInLava = !1;
        d.h.burnsInAcid = !0;
        d.h.animations = null;
        d.h.hops = !0;
        d.h.percentageChanceToDoMovement = .0125;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = 1;
        d.h.percentageChanceToJump = 0;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.attackContact = !0;
        d.h.attackFrequency = 26;
        d.h.attackDamage = 2;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.45, -.45, .9, .9);
        d.h.collisionBounds = l;
        d.h.specialDeath = function (a) {
            Main.Instance.game.dropXP(b.mobs.h[a].h.x, b.mobs.h[a].h.y, Math.pow(2, b.mobs.h[a].h.size - 1) | 0);
            if (1 < b.mobs.h[a].h.size) for (var c = 4 * Math.random() + 1 | 0; 0 < c;) {
                var d = entities.Entity_Mob.spawnMob("magmacube", b.mobs.h[a].h.x, b.mobs.h[a].h.y, b.mobs.h[a].h.name);
                b.mobs.h[d].h.size = b.mobs.h[a].h.size - 1;
                b.mobs.h[d].h.health = Math.pow(4, b.mobs.h[d].h.size - 1);
                --c;
            }
        };
        c.h.magmacube = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Ghast";
        d.h.constructor = entities.Entity_Mob_Ghast;
        d.h.hostile = !0;
        d.h.passive = !1;
        d.h.sounds = new haxe.ds.StringMap();
        d.h.idleSoundFrequency = 2E3;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "gp";
        f.h.quantity = 1;
        f.h.randomBonus = 1;
        f.h.lootBonus = 3;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "gt";
        f.h.quantity = 0;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        d.h.drops = [l, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 10;
        d.h.takesFallDamage = !1;
        d.h.burnsInLava = !1;
        d.h.burnsInAcid = !0;
        d.h.burnsOnFire = !1;
        d.h.animations = null;
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .03571428571428571;
        d.h.percentageChanceToJump = .007142857142857143;
        d.h.walkSpeed = .2;
        d.h.sprintMultiplier = 1.5;
        d.h.attackCharge = !0;
        d.h.attackFrequency = 180;
        d.h.attackDamage = 3;
        d.h.ignoreCliffs = !0;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 5;
        l = new lemongine.Rectangle(-2, -4, 4, 4);
        d.h.collisionBounds = l;
        d.h["float"] = !0;
        d.h.floatMaxSpeed = 2;
        d.h.floatJump = 0;
        d.h.followVertically = !0;
        d.h.specialGravityFunction = function (a) {
            a = b.mobs.h[a];
            for (var c = 0, d = 0; 7 > c && BlockData.get(b.getFG(Math.floor(a.h.x / 1), Math.floor(-a.h.y) - c), "walkThroughBlockHit") && 1 != BlockData.get(b.getFG(Math.floor(a.h.x / 1), Math.floor(-a.h.y) - c), "liquidCollision");) ++c;
            for (; 7 > d && BlockData.get(b.getFG(Math.floor(a.h.x / 1), Math.floor(-a.h.y) + 3 + d), "walkThroughBlockHit") && 1 != BlockData.get(b.getFG(Math.floor(a.h.x / 1), Math.floor(-a.h.y) + 3 + d), "liquidCollision");) ++d;
            3 <= c - d || 6 <= c ? Math.random() < 1 / (120 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(a.h.keys).h.up = !1) : -3 >= c - d && Math.random() < 1 / (5 * Main.Instance.get_fps() / 25) && (Game.makeDynamicMap(a.h.keys).h.up = !0);
            1 == Game.makeDynamicMap(a.h.keys).h.up ? a.h.speedY += Game.migrateSpeed(.5) : a.h.speedY -= Game.migrateSpeed(.15);
            1 == BlockData.get(b.getFG(Math.floor(a.h.x / 1), Math.floor(-a.h.y)), "liquidCollision") && (a.h.speedX *= Game.migrateDampening(.8), a.h.speedY *= Game.migrateDampening(.8));
            a.h.speedX *= Game.migrateDampening(.9);
            a.h.speedY *= Game.migrateDampening(.9);
        };
        c.h.ghast = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Squid";
        d.h.constructor = entities.Entity_Mob_Squid;
        d.h.hostile = !1;
        d.h.passive = !0;
        d.h.sounds = new haxe.ds.StringMap();
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 2.5E-5;
        f = new haxe.ds.StringMap();
        f.h.type = "ink";
        f.h.quantity = 1;
        f.h.randomBonus = 2;
        f.h.lootBonus = 3;
        d.h.drops = [Game.makeDynamicMap(f)];
        d.h.health = 10;
        d.h.xp = 4;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.animations = null;
        d.h.aiType = "custom";
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 3;
        l = new lemongine.Rectangle(-.3333333333333333, -.3333333333333333, .6666666666666666, .6666666666666666);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (a) {
            var c = b.mobs.h[a],
                d = b.mobTmpData.h[a];
            c.h.actualSpeed = 2;
            c.h.movementCooldown += 3 * c.h.cooldownSpeed;
            if (200 <= c.h.movementCooldown) {
                c.h.movementCooldown = 0;
                var f = c.h.cooldownSpeed + ((1 - c.h.cooldownSpeed) / 5 + (.2 * Math.random() - .1));
                c.h.cooldownSpeed = f;
                f = c.h.rotationSpeed + (-c.h.rotationSpeed / 5 + (Math.random() - .5));
                c.h.rotationSpeed = f;
                d.h.closeAnimation = 10;
                f = c.h.speedX - Game.migrateSpeed(Math.cos(c.h.actualRotation / 180 * Math.PI) * c.h.actualSpeed);
                c.h.speedX = f;
                f = c.h.speedY - Game.migrateSpeed(Math.sin(c.h.actualRotation / 180 * Math.PI) * c.h.actualSpeed);
                c.h.speedY = f;
            }
            0 < d.h.closeAnimation && --d.h.closeAnimation;
            d = Main.Instance.game.collision(c.h.x + .6666666666666666, c.h.y, .03333333333333333, .03333333333333333, .03333333333333333, !0) ? 1 : 0;
            f = Main.Instance.game.collision(c.h.x, c.h.y + .6666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !0) ? 1 : 0;
            var g = Main.Instance.game.collision(c.h.x - .6666666666666666, c.h.y, .03333333333333333, .03333333333333333, .03333333333333333, !0) ? 1 : 0,
                l = Main.Instance.game.collision(c.h.x, c.h.y - .6666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !0) ? 1 : 0;
            1 == d && (c.h.speedX = 0 == g ? Math.max(Game.migrateSpeed(.1), -c.h.speedX / 3) : 0);
            1 == g && (c.h.speedX = 0 == d ? Math.min(-Game.migrateSpeed(.1), -c.h.speedX / 3) : 0);
            1 == f && (c.h.speedY = 0 == l ? Math.max(Game.migrateSpeed(.1), c.h.speedY / 3) : 0);
            1 == l && (c.h.speedY = 0 == f ? Math.min(-Game.migrateSpeed(.1), c.h.speedY / 3) : 0);
            null == BlockData.get(b.getFG(Math.floor(c.h.x / 1), Math.floor(-c.h.y)), "liquidCollision") ? (--c.h.airTimer, 0 >= c.h.airTimer && (c.h.airTimer = 60, --c.h.air), 0 > c.h.air && (c.h.air = 0, Main.Instance.game.getMob(a).hurtMob(a, 1, "drown")), Main.Instance.game.collision(c.h.x - .3333333333333333, c.h.y + .3333333333333333, .6666666666666666, .03333333333333333, .13333333333333333, !0) ? c.h.speedY = 0 : c.h.speedY -= Game.migrateAcc(.3, .97), c.h.speedX *= Game.migrateDampening(.9), 180 > lemongine.Mathz.modulus(c.h.actualRotation + 90, 360) ? c.h.actualRotation = .8 * (lemongine.Mathz.modulus(c.h.actualRotation + 90, 360) - 90) : c.h.actualRotation = .8 * (lemongine.Mathz.modulus(c.h.actualRotation + 90, 360) - 90 - 180) + 180) : null == BlockData.get(b.getFG(Math.floor(c.h.x / 1), Math.floor(-c.h.y + .6666666666666666)), "liquidCollision") ? (c.h.airTimer = 60, c.h.air = 11, c.h.speedY -= Game.migrateAcc(.3, .97)) : (c.h.airTimer = 60, c.h.air = 11);
            d = Math.floor(c.h.x / 1);
            f = -Math.floor(c.h.y / 1);
            --c.h.hitCooldown;
            if (0 >= c.h.hitCooldown) {
                c.h.hitCooldown = 40;
                if ("la" == b.getFG(d, f + 1) || "la" == b.getFG(d, f + 2)) c.h.health -= 5, Main.Instance.game.getMob(a).hurtMob(a, Math.floor(2 * Math.random() + 1), "lava");
                if ("ad" == b.getFG(d, f + 1) || "ad" == b.getFG(d, f + 2)) c.h.health -= 5, Main.Instance.game.getMob(a).hurtMob(a, Math.floor(2 * Math.random() + 1), "acid");
            }
            c.h.rotationSpeed *= Game.migrateDampening(.97);
            c.h.actualRotation += 10 * c.h.rotationSpeed / 2;
            c.h.actualRotation = lemongine.Mathz.modulus(c.h.actualRotation, 360);
            c.h.speedX *= Game.migrateDampening(.97);
            c.h.speedY *= Game.migrateDampening(.97);
            c.h.x -= c.h.speedX / 30;
            c.h.y -= c.h.speedY / 30;
            a = "blockX" + Math.floor(c.h.x / 1) + "Y" + (Math.floor(-c.h.y) + 1);
            null != b.water.h[a] && (b.water.h[a][0] > b.water.h[a][1] ? c.h.speedX -= Game.migrateAcc(1, .97) / 5 : b.water.h[a][0] < b.water.h[a][1] && (c.h.speedX += Game.migrateAcc(1, .97) / 5));
            if ("web" == b.getFG(Math.floor(c.h.x / 1), Math.floor(-c.h.y) + 1) || "web" == b.getFG(Math.floor(c.h.x / 1), Math.floor(-c.h.y) + 2)) c.h.speedX *= Game.migrateDampening(.2), c.h.speedY *= Game.migrateDampening(.2);
            if ("ssd" == b.getFG(Math.floor(c.h.x / 1), Math.floor(-c.h.y) - 1) || "slimeb" == b.getFG(Math.floor(c.h.x / 1), Math.floor(-c.h.y) - 1)) c.h.speedX *= Game.migrateDampening(.5);
        };
        c.h.squid = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Blaze";
        d.h.constructor = entities.Entity_Mob_Blaze;
        d.h.hostile = !0;
        d.h.passive = !1;
        f = new haxe.ds.StringMap();
        f.h.idle = ["blaze1", "blaze2", "blaze3", "blaze4", "blaze5"];
        f.h.hurt = ["blazehurt1", "blazehurt2", "blazehurt3"];
        f.h.death = ["blazedeath"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 3E3;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "blazer";
        f.h.quantity = 0;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "cl2";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 3;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "yellowdust";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .1;
        p.h.lootingBonusChances = .4;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 3;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        d.h.drops = [l, m, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 15;
        d.h.takesFallDamage = !1;
        d.h.burnsInLava = !1;
        d.h.burnsInAcid = !0;
        d.h.burnsOnFire = !1;
        d.h.animations = null;
        d.h.percentageChanceToDoMovement = .02;
        d.h.percentageChanceToChangeDirection = .05;
        d.h.percentageChanceToStopMoving = .03333333333333333;
        d.h.percentageChanceToJump = .05;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.attackTripleCharge = !0;
        d.h.attackFrequency = 400;
        d.h.attackDamage = 3;
        d.h.ignoreCliffs = !0;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.9, .8, 1.9);
        d.h.collisionBounds = l;
        d.h["float"] = !0;
        d.h.followVertically = !0;
        d.h.specialFunction = function (a) {
            Math.random() < 1 / (5 * Main.Instance.get_fps() / 25) && Main.Instance.game.addParticles("smoke", 1, 0, new lemongine.Point(b.mobs.h[a].h.x, 0), new lemongine.Point(b.mobs.h[a].h.y - 1, 0));
            if (Math.random() < 1 / (200 * Main.Instance.get_fps() / 25)) {
                var c = b.onFire;
                Object.prototype.hasOwnProperty.call(c.h, a) && delete c.h[a];
            }
            Math.random() < 1 / (100 * Main.Instance.get_fps() / 25) && (b.onFire.h[a] = !0);
        };
        c.h.blaze = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Zombie Pigman";
        d.h.constructor = entities.Entity_Mob_ZombiePigman;
        d.h.hostile = !1;
        d.h.passive = !1;
        d.h.neutral = !0;
        d.h.sounds = new haxe.ds.StringMap();
        d.h.idleSoundFrequency = 800;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "rf";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "goldn";
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        m = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "gi";
        p = new haxe.ds.StringMap();
        p.h.randomNum = 0;
        p.h.lowerBound = 0;
        p.h.upperBound = .025;
        p.h.lootingBonusChances = .03;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 0;
        f.h.randomBonus = 2;
        f.h.lootBonus = 2;
        B = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "nw";
        p = new haxe.ds.StringMap();
        p.h.randomNum = 1;
        p.h.lowerBound = 0;
        p.h.upperBound = .2;
        p.h.lootingBonusChances = .6;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        f.h.isDimension = 2;
        d.h.drops = [l, m, B, Game.makeDynamicMap(f)];
        d.h.health = 20;
        d.h.xp = 10;
        d.h.burnsInLava = !1;
        d.h.burnsInAcid = !0;
        d.h.burnsOnFire = !1;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5, 6];
        p.h.frameDelay = 4;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .05;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .0125;
        d.h.walkSpeed = 1;
        d.h.canClimb = !0;
        d.h.attackContact = !0;
        d.h.attackFrequency = 70;
        d.h.attackDamage = 5;
        d.h.groupAttack = !0;
        d.h.groupAttackDistance = 5;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.9, .8, 1.9);
        d.h.collisionBounds = l;
        c.h.zombiepigman = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Enderman";
        d.h.constructor = entities.Entity_Mob_Enderman;
        d.h.hostile = !1;
        d.h.passive = !1;
        d.h.neutral = !0;
        f = new haxe.ds.StringMap();
        f.h.idle = ["endermanidle1", "endermanidle2", "endermanidle3", "endermanidle4", "endermanidle5"];
        d.h.sounds = Game.makeDynamicMap(f);
        d.h.idleSoundFrequency = 800;
        d.h.despawnChance = 1E-4;
        f = new haxe.ds.StringMap();
        f.h.type = "ep";
        f.h.quantity = 0;
        f.h.randomBonus = 1;
        f.h.lootBonus = 2;
        l = Game.makeDynamicMap(f);
        f = new haxe.ds.StringMap();
        f.h.type = "dm";
        p = new haxe.ds.StringMap();
        p.h.lowerBound = 0;
        p.h.upperBound = .005;
        p.h.lootingBonusChances = .002;
        f.h.rare = Game.makeDynamicMap(p);
        f.h.quantity = 1;
        f.h.randomBonus = 0;
        f.h.lootBonus = 0;
        d.h.drops = [l, Game.makeDynamicMap(f)];
        d.h.health = 40;
        d.h.xp = 15;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        f = new haxe.ds.StringMap();
        p = new haxe.ds.StringMap();
        p.h.frames = [2, 3, 4, 5, 6];
        p.h.frameDelay = 6;
        p.h.loop = !0;
        f.h.walk = Game.makeDynamicMap(p);
        p = new haxe.ds.StringMap();
        p.h.frames = [1];
        p.h.frameDelay = 1;
        p.h.loop = !0;
        f.h.idle = Game.makeDynamicMap(p);
        d.h.animations = Game.makeDynamicMap(f);
        d.h.percentageChanceToDoMovement = .05;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = .07142857142857142;
        d.h.percentageChanceToJump = .0125;
        d.h.walkSpeed = 1;
        d.h.teleports = !0;
        d.h.teleportOnDamageChance = .3333333333333333;
        d.h.teleportRandomChance = 5E-4;
        d.h.canClimb = !0;
        d.h.attackContact = !0;
        d.h.attackFrequency = 50;
        d.h.attackDamage = 4;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 4;
        l = new lemongine.Rectangle(-.4, -2.8, .8, 2.8);
        d.h.collisionBounds = l;
        d.h.specialFunction = function (c) {
            var d = b.mobs.h[c];
            (Math.random() < b.mobData.h[d.h.type].h.teleportRandomChance || 1 == BlockData.get(b.getFG(Math.floor(d.h.x), -Math.floor(d.h.y)), "waterCollision")) && Main.Instance.game.getMob(c).teleportMob();
            if (Math.random() < 1 / (100 * Main.Instance.get_fps() / 25)) {
                for (var f = !0, l = 2; 31 > l;) if ("air" != b.getFG(Math.floor(d.h.x), -Math.floor(d.h.y) + l++)) {
                    f = !1;
                    break;
                }
                f && (0 != a.raining && .02 > Math.random() ? Main.Instance.game.getMob(c).teleportMob() : .0033333333333333335 > Math.random() && Main.Instance.game.getMob(c).teleportMob());
            }
            0 < d.h.aggressiveness ? (d.h.aggressiveness = 10, Math.random() < 1 / (200 * Main.Instance.get_fps() / 25) && ("undefined" == d.h.target || d.h.target == a.player.id ? Main.Instance.game.getMob(c).teleportMob(new lemongine.Point(b.worldX, b.worldY)) : null != b.mobs.h[d.h.target] && (f = b.mobs.h[d.h.target].h.x, l = b.mobs.h[d.h.target].h.y, Main.Instance.game.getMob(c).teleportMob(new lemongine.Point(f, l)))), l = b.mobTmpData.h[c], f = (6 * Math.random() - 3) / 30 / 2, l.h.offsetX = f, l = b.mobTmpData.h[c], f = (6 * Math.random() - 3) / 30 / 2, l.h.offsetY = f) : (l = b.mobTmpData.h[c], b.mobTmpData.h[c].h.offsetY = 0, l.h.offsetX = 0, 0 == Main.Instance.game.inventario.currentFrame && 1 == Main.Instance.game.blackScreen.currentFrame && 1 != a.gamemode && 3 != a.gamemode && 1 != b.defeatedEnder && "pk" != b.armors[0][0] && "jl" != b.armors[0][0] && 8 > Math.abs(d.h.x - b.worldX) && 8 > Math.abs(d.h.y - b.worldY) && (Game.angleBetweenVectors(new lemongine.Point(d.h.x - b.worldX, d.h.y - b.worldY), new lemongine.Point(Main.Instance.game.mouseWorldPosition.x - b.worldX, Main.Instance.game.mouseWorldPosition.y - b.worldY)) < .1111111111111111 * Math.PI ? (null == b.mobTmpData.h[c].h.staring && Math.random() < 1 / (5 * Main.Instance.get_fps() / 25) && (b.mobTmpData.h[c].h.staring = 1), Game.makeDynamicMap(d.h.keys).h.left = !1, Game.makeDynamicMap(d.h.keys).h.right = !1, Game.makeDynamicMap(d.h.keys).h.up = !1, l = b.mobTmpData.h[c], f = (6 * Math.random() - 3) / 30 / 2, l.h.offsetX = f, l = b.mobTmpData.h[c], f = (6 * Math.random() - 3) / 30 / 2, l.h.offsetY = f) : null != b.mobTmpData.h[c].h.staring && (d.h.target = a.player.id, d.h.aggressiveness = 10)));
            1 == Main.Instance.game.getGameRule("mobgriefing") && Math.random() < 1 / (300 * Main.Instance.get_fps() / 25) && (c = Math.floor(d.h.x / 1) + (3 * Math.random() | 0) - 1, f = Math.floor(-d.h.y) + (5 * Math.random() | 0), Game.isEmptyItem(d.h.handItems[0]) ? 1 == BlockData.get(b.getFG(c, f), "endermenCanChange") && "air" != b.getFG(c, f) && (d.h.handItems[0] = Game.item(b.getFG(c, f), 1, 0, new haxe.ds.StringMap()), d.h.handDropChances[0] = 1, Main.Instance.game.requestRemove(c, f, !0, !1, !0)) : 1 != BlockData.get(b.getFG(c, f), "replaceable") || 1 != BlockData.get(d.h.handItems[0][0], "placeable") || c == Math.floor(d.h.x / 1) && f != Math.floor(-d.h.y) || "air" == b.getFG(c, f - 1) && "air" == b.getFG(c, f + 1) && "air" == b.getFG(c - 1, f) && "air" == b.getFG(c + 1, f) || (Main.Instance.game.requestRemove(c, f, !0, !1), b.setFG(c, f, d.h.handItems[0][0]), d.h.handItems[0] = Game.emptyItem()));
        };
        c.h.enderman = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Spawn Skin";
        d.h.constructor = entities.Entity_Mob_Spawnskin;
        d.h.hostile = !1;
        d.h.passive = !0;
        d.h.sounds = new haxe.ds.StringMap();
        d.h.idleSoundFrequency = 400;
        d.h.despawnChance = 2.5E-5;
        d.h.drops = [];
        d.h.health = 20;
        d.h.xp = 0;
        d.h.burnsInLava = !0;
        d.h.burnsInAcid = !0;
        d.h.animations = null;
        d.h.percentageChanceToDoMovement = .025;
        d.h.percentageChanceToChangeDirection = .03333333333333333;
        d.h.percentageChanceToStopMoving = .1;
        d.h.percentageChanceToJump = .01;
        d.h.walkSpeed = 1.3;
        d.h.attackContact = !0;
        d.h.attackFrequency = 26;
        d.h.attackDamage = 2;
        d.h.canClimb = !0;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.9, .8, 1.9);
        d.h.collisionBounds = l;
        d.h.specialInit = function (a) {
            null == b.mobs.h[a].h.skin && (b.mobs.h[a].h.skin = 1);
        };
        c.h.spawnskin = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.name = "Ender Dragon";
        d.h.constructor = entities.Entity_Mob_EnderDragon;
        d.h.hostile = !0;
        d.h.passive = !1;
        d.h.sounds = new haxe.ds.StringMap();
        d.h.idleSoundFrequency = 600;
        d.h.despawnChance = 0;
        d.h.alwaysActive = !0;
        d.h.minimumRenderDistance = 30;
        d.h.drops = [];
        d.h.health = 333;
        d.h.xp = 0;
        d.h.burnsInLava = !1;
        d.h.burnsInAcid = !1;
        d.h.cactusDamage = !1;
        d.h.animations = null;
        d.h.aiType = "custom";
        d.h.percentageChanceToDoMovement = .0125;
        d.h.percentageChanceToChangeDirection = .07142857142857142;
        d.h.percentageChanceToStopMoving = 1;
        d.h.percentageChanceToJump = 0;
        d.h.walkSpeed = 1;
        d.h.sprintMultiplier = 1.5;
        d.h.attackContact = !0;
        d.h.attackFrequency = 40;
        d.h.attackDamage = 5;
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-2, -2, 4, 4);
        d.h.collisionBounds = l;
        d.h.specialDeathAnimation = function (a) {
            var c = b.mobs.h[a],
                d = js.Boot.__cast(b.entities.h[a], entities.Entity_Mob_EnderDragon);
            Main.Instance.game.ENDING = a;
            if (c.h.dead < 300 * Main.Instance.get_fps() / 25) {
                c.h.dead < 150 * Main.Instance.get_fps() / 25 ? c.h.y -= Game.migrateSpeed(5) / 30 : c.h.dead < 170 * Main.Instance.get_fps() / 25 ? c.h.y -= Game.migrateSpeed(3) / 30 : c.h.dead < 180 * Main.Instance.get_fps() / 25 ? c.h.y -= Game.migrateSpeed(1) / 30 : Math.random() / 4 < c.h.dead / 1E3 && c.h.dead < 250 * Main.Instance.get_fps() / 25 && Main.Instance.game.addParticles("raythings", 1, 0, new lemongine.Point(c.h.x + 5, 0), new lemongine.Point(c.h.y, 0), !0);
                if (Math.random() < 1 / (20 * Main.Instance.get_fps() / 25)) {
                    a = Main.Instance.game;
                    var f = Math.floor(Math.random() * c.h.dead / 10),
                        l = new lemongine.Point(c.h.x - 3.3333333333333335, 20),
                        p = new lemongine.Point(c.h.y - 2, 2),
                        m = new haxe.ds.StringMap();
                    m.h.scale = 1 + c.h.dead / 300 + .5 * Math.random();
                    a.addParticles("shockwave", 0, f, l, p, !1, m);
                }
                Math.random() < 1 / (12 * Main.Instance.get_fps() / 25) && (Main.Instance.game.bgPlaying = !0);
                0 == c.h.dead % (5 * Main.Instance.get_fps() / 25) && (Main.Instance.game.addDrop("dscl", c.h.x + 20 * Math.random(), c.h.y - 1 + 2 * Math.random(), 1, null, null), Main.Instance.game.dropXP(c.h.x, c.h.y, 20, 0, !0, !0));
                Main.Instance.game.camera.set(c.h.x, c.h.y);
                c.h.speedX = 1;
                c.h.speedY = 0;
                null != d && (d.alpha = lemongine.Mathz.clamp(0, 1, 2 - c.h.dead / 300), d.mobMovie.h.h.frame = 4, d.mobMovie.h.h.playing = !1);
                Math.random() < 1 / (3 * Main.Instance.get_fps() / 25) && Main.Instance.game.addParticles("smoke2", 1, 0, new lemongine.Point(c.h.x - 3.3333333333333335, 20), new lemongine.Point(c.h.y));
            } else {
                Math.random() < 1 / (3 * Main.Instance.get_fps() / 25) && Main.Instance.game.addParticles("smoke2", 0, 20, new lemongine.Point(c.h.x - 3.3333333333333335, 20), new lemongine.Point(c.h.y));
                if (b.worldX / 1 <= b.worldWidth / 6) {
                    c = Math.round(b.worldX / 1 + 10);
                    for (m = 30; (null == b.scene[c] || "es" != b.getFG(c, b.scene[c].length - 1)) && 0 < m;) --m, ++c;
                    d = b.scene[c].length;
                    for (m = 0; 7 > m;) f = m++, b.states.h["blockX" + (c + f) + "Y" + d] = 2, b.setFG(c + f, d, "pf"), b.setFG(c + f, d + 1, "air"), b.setFG(c + f, d + 2, "air"), b.setFG(c + f, d + 3, "air");
                    b.setFG(c + 7, d, "chest");
                    b.chests.h["blockX" + (c + 7) + "Y" + d] = [];
                    for (m = 0; 27 > m;) ++m, b.chests.h["blockX" + (c + 7) + "Y" + d].push(Game.emptyItem());
                    b.chests.h["blockX" + (c + 7) + "Y" + d][11] = Game.item("dm", 8, 0, new haxe.ds.StringMap());
                    b.chests.h["blockX" + (c + 7) + "Y" + d][13] = Game.item("degg", 1);
                    b.chests.h["blockX" + (c + 7) + "Y" + d][15] = Game.item("dm", 8);
                } else {
                    c = Math.round(b.worldX / 1 - 10);
                    for (m = 30; (null == b.scene[c] || "es" != b.getFG(c, b.scene[c].length - 1)) && 0 < m;) --m, --c;
                    d = b.scene[c].length;
                    for (m = 0; 7 > m;) f = m++, b.states.h["blockX" + (c - f) + "Y" + d] = 2, b.setFG(c - f, d, "pf"), b.setFG(c - f, d + 1, "air"), b.setFG(c - f, d + 2, "air"), b.setFG(c - f, d + 3, "air");
                    b.setFG(c - 7, d, "chest");
                    b.chests.h["blockX" + (c - 7) + "Y" + d] = [];
                    for (m = 0; 27 > m;) ++m, b.chests.h["blockX" + (c - 7) + "Y" + d].push(Game.emptyItem());
                    b.chests.h["blockX" + (c - 7) + "Y" + d][11] = Game.item("dm", 8, 0, new haxe.ds.StringMap());
                    b.chests.h["blockX" + (c - 7) + "Y" + d][13] = Game.item("degg", 1);
                    b.chests.h["blockX" + (c - 7) + "Y" + d][15] = Game.item("dm", 8);
                }
                b.defeatedEnder = !0;
                Main.Instance.game.getMob(a).removeMob(a);
            }
        };
        d.h.specialDeath = function (a) {
            var c = b.mobs.h[a];
            if (1 == c.h.official) Main.Instance.game.bossBarFrame = 1, Main.Instance.game.unlockAchieve(36), lemongine.AssetManager.getSound("enderdragondeath").play(), c.h.endingX = b.worldX, c.h.endingY = b.worldY, Main.Instance.game.ENDING = a, null != window.celebrate && window.celebrate(), b.threadedSave();else {
                for (var d = 0; 15 > d;) ++d, Main.Instance.game.addDrop("dscl", c.h.x + 600 * Math.random(), c.h.y - 1 + 2 * Math.random(), 1, null, null), Main.Instance.game.dropXP(c.h.x, c.h.y, 20, 0, !0, !0);
                Main.Instance.game.getMob(a).removeMob(a);
            }
        };
        d.h.specialFunction = function (a) {
            var c = b.mobs.h[a],
                d = js.Boot.__cast(b.entities.h[a], entities.Entity_Mob_EnderDragon),
                f = Math.floor(c.h.x / 1),
                l = Math.floor(-c.h.y);
            1 == c.h.official && (Main.Instance.game.bossBarFrame = Math.floor(lemongine.Mathz.clamp(1, 101, Math.round(c.h.health / 333 * 100 + 1))));
            for (var p = 1E4, m = null, Q = Object.keys(b.enderCrystals.h), B = Q.length, x = 0; x < B;) {
                var M = Q[x++],
                    w = Math.pow(c.h.x - b.enderCrystals.h[M][0], 2) + Math.pow(c.h.y - -b.enderCrystals.h[M][1], 2);
                w <= Math.pow(p, 2) && w <= Math.pow(30, 2) && (p = Math.sqrt(w), m = M);
            }
            1E4 != p && (null != b.entities.h[m] && (js.Boot.__cast(b.entities.h[m], entities.Entity_EHC).hAlpha = 1, js.Boot.__cast(b.entities.h[m], entities.Entity_EHC).hWidth = p, js.Boot.__cast(b.entities.h[m], entities.Entity_EHC).hRotation = 180 * Math.atan2(c.h.y - js.Boot.__cast(-b.enderCrystals.h[m][1], ie), c.h.x - js.Boot.__cast(b.enderCrystals.h[m][0], ie)) / Math.PI), 0 == c.h.flyBob % (80 * Main.Instance.get_fps() / 25) && (c.h.health = Math.min(c.h.health + 1, 333)));
            .005 > Math.random() && (Object.prototype.hasOwnProperty.call(b.onFire.h, a) ? (p = b.onFire, Object.prototype.hasOwnProperty.call(p.h, a) && delete p.h[a]) : b.onFire.h[a] = !0);
            --c.h.hitCooldown;
            if (0 >= c.h.hitCooldown) {
                c.h.hitCooldown = 20;
                if ("la" == b.getFG(f, l + 1) || "la" == b.getFG(f, l + 2)) c.h.health -= 5, Main.Instance.game.getMob(a).hurtMob(a, Math.floor(2 * Math.random() + 1), "lava");
                if ("ad" == b.getFG(f, l + 1) || "ad" == b.getFG(f, l + 2)) c.h.health -= 5, Main.Instance.game.getMob(a).hurtMob(a, Math.floor(2 * Math.random() + 1), "acid");
            }
            for (p = -1; 2 > p;) for (m = p++, Q = -1; 2 > Q;) B = Q++, 1 != BlockData.get(b.getFG(f + m, l + B), "dragonDontBreak") && 3 == b.sceneNum && (Main.Instance.game.requestRemove(f + m, l + B, !0, !1), Main.Instance.game.addParticles("shockwave", 1, 0, new lemongine.Point(c.h.x + m, 1), new lemongine.Point(c.h.y - B, 1)));
            c.h.flyBob = (c.h.flyBob + 5) % 360;
            5 > Math.abs(c.h.nextSpotX - c.h.x) && 5 > Math.abs(c.h.nextSpotY - c.h.y) || Math.random() < 1 / (100 * Main.Instance.get_fps() / 25) ? 3 != b.sceneNum || .3333333333333333 > Math.random() ? (l = b.worldX, f = 50 * Math.random() - 25, c.h.nextSpotX = l + f * (1.5 - Main.Instance.game.visibility), l = b.worldY, f = 50 * Math.random() - 25, c.h.nextSpotY = l + f * (1.5 - Main.Instance.game.visibility) - 2) : (f = Math.random(), c.h.nextSpotX = f * (b.worldWidth / 3 - 30) + 15, f = 10 * -Math.random() - 65, c.h.nextSpotY = f) : (l = Math.atan2(c.h.nextSpotY - c.h.y, c.h.nextSpotX - c.h.x), f = c.h.speedX - Game.migrateAcc(3 * Math.cos(l) + (2 * Math.random() - 1) / 2 + Math.cos(c.h.flyBob / 180 * Math.PI) / 10, .98), c.h.speedX = f, f = c.h.speedY - Game.migrateAcc(3 * Math.sin(l) + (2 * Math.random() - 1) / 2 + Math.sin(c.h.flyBob / 180 * Math.PI) / 10, .98), c.h.speedY = f, c.h.speedX *= Game.migrateDampening(.98), c.h.speedY *= Game.migrateDampening(.98));
            (3 < c.h.speedY || Math.random() < 1 / (100 * Main.Instance.get_fps() / 25)) && null != d && (d.mobMovie.h.t4.playing = !0);
            Math.random() < 1 / (200 * Main.Instance.get_fps() / 25) && 0 >= c.h.flameBallThread && (f = Math.floor(5 * Math.random()) + 5, c.h.flameBallThread = f, c.h.flameBallDelay = 3, null != d && (d.mobMovie.h.h.frame = 0, d.mobMovie.h.h.playing = !0));
            0 < c.h.flameBallThread && (0 >= c.h.flameBallDelay ? (--c.h.flameBallThread, c.h.flameBallDelay = 2, b.flameballNum++, f = b.flameballs, l = Std.string(b.flameballNum), p = new haxe.ds.StringMap(), p.h.x = c.h.x + 1.6666666666666667 * Math.cos((null != d ? d.mobMovie.h.h.rotation : 0) / 180 * Math.PI), p.h.y = c.h.y - 1.6666666666666667 * Math.sin((null != d ? d.mobMovie.h.h.rotation : 0) / 180 * Math.PI), p.h.speedX = Math.cos((null != d ? d.mobMovie.h.h.rotation : 0) / 180 * Math.PI) * Game.migrateSpeed(20), p.h.speedY = -Math.sin((null != d ? d.mobMovie.h.h.rotation : 0) / 180 * Math.PI) * Game.migrateSpeed(20), p.h.shotBy = a, p.h.rotation = null != d ? 180 - d.mobMovie.h.h.rotation : 0, f.h[l] = Game.makeDynamicMap(p), null != d && (d.mobMovie.h.h.frame = 6, d.mobMovie.h.h.playing = !0)) : --c.h.flameBallDelay);
            c.h.speedY = lemongine.Mathz.clamp(-Game.migrateSpeed(50), Game.migrateSpeed(50), c.h.speedY);
            c.h.speedX = lemongine.Mathz.clamp(-Game.migrateSpeed(50), Game.migrateSpeed(50), c.h.speedX);
            c.h.y -= lemongine.Mathz.clamp(-Game.migrateSpeed(8), Game.migrateSpeed(8), c.h.speedY) / 30;
            c.h.x -= lemongine.Mathz.clamp(-Game.migrateSpeed(8), Game.migrateSpeed(8), c.h.speedX) / 30;
            --c.h.attackCooldown;
            null != d && 3 != b.gamemode && (a = b.player.get_hit(), a = new lemongine.Point(a.get_centerX(), a.get_centerY()), (1 > d.get_headCenter().distanceTo(a) || 1 > d.getPointOnPart("hand", .5, .5).distanceTo(a) || 1 > d.getPointOnPart("foot", .5, .5).distanceTo(a)) && 0 >= c.h.attackCooldown && (c.h.attackCooldown = 20, b.xSpeed = c.h.speedX / 2, Main.Instance.game.ouch(1, 3, "attack"), d.mobMovie.h.h.playing = !0));
        };
        c.h.enderdragon = Game.makeDynamicMap(d);
        c = this.mobData;
        d = new haxe.ds.StringMap();
        d.h.mobTmpData = new haxe.ds.StringMap();
        d.h.sizeCategory = 2;
        l = new lemongine.Rectangle(-.4, -1.9, .8, 1.9);
        d.h.collisionBounds = l;
        c.h.player = Game.makeDynamicMap(d);
    },
    __class__: World
}