entities.Entity_Mob = function (b, a, c, d) {
    this.randomFireTexture = "1";
    this.hasRendered = !1;
    this.entityMatrix = new lemongine.Matrix4();
    this.alpha = 1;
    this.showNametag = this.fire = !1;
    this.nametagText = "";
    this.rotation = 0;
    this.colorTransform = [1, 1, 1, 1, 0, 0, 0, 0];
    this.movieX = this.movieY = 0;
    this.scaleX = this.scaleY = 1;
    this.currentFrame = 0;
    this.hasInit = !1;
    null == d && (d = c.mobs);
    entities.Entity_Base.call(this, "mob", d, b, d.h[b], a, c);
}
m["entities.Entity_Mob"] = entities.Entity_Mob
entities.Entity_Mob.__name__ = "entities.Entity_Mob"
entities.Entity_Mob.mobIsFencedIn = function (b) {
    var a = Main.Instance.game.world;
    b = a.mobs.h[b];
    var c = a.getFG(Math.floor(b.h.x / 1), Math.floor(-b.h.y + 1));
    if ("fnc" == HxOverrides.substr(c, -3, 3) || "fncg" == HxOverrides.substr(c, -4, 4) || "ibar" == c) return !0;
    c = a.getFG(Math.floor(b.h.x / 1), Math.floor(-b.h.y));
    if ("fnc" == HxOverrides.substr(c, -3, 3) || "fncg" == HxOverrides.substr(c, -4, 4) || "ibar" == c) return !0;
    if (1 == b.h.falling) {
        c = a.getFG(Math.floor(b.h.x / 1), Math.floor(-b.h.y) - 1);
        if ("fnc" == HxOverrides.substr(c, -3, 3) || "fncg" == HxOverrides.substr(c, -4, 4) || "ibar" == c) return !0;
        c = a.getFG(Math.floor(b.h.x / 1), Math.floor(-b.h.y) - 2);
        if ("fnc" == HxOverrides.substr(c, -3, 3) || "fncg" == HxOverrides.substr(c, -4, 4) || "ibar" == c) return !0;
    }
    return !1;
}
entities.Entity_Mob.findSpawnArea = function (b, a, c, d, f, g, k, h) {
    null == h && (h = -1);
    for (var l = Main.Instance.game.world, p = 0; 21 > p;) {
        ++p;
        var m = 6.283 * Math.random(),
            Q = Math.random() * (k - g) + g,
            x = Math.round(d / 1 + Math.sin(m) * Q);
        m = Math.round(-f + Math.cos(m) * Q) + 1;
        for (Q = 0;;) {
            var t = !0;
            if (6 == a) {
                var w = 0,
                    C = 0;
                if ("wr" == l.getFG(x, m) || "sw" == l.getFG(x, m)) {
                    for (var v = 1; 5 > v;) {
                        var r = v++;
                        if ("wr" == l.getFG(x, m + r) || "sw" == l.getFG(x, m + r)) ++w;else break;
                    }
                    for (v = 1; 5 > v;) if (r = v++, "wr" == l.getFG(x, m - r) || "sw" == l.getFG(x, m - r)) ++w;else break;
                    for (v = 1; 5 > v;) if (r = v++, "wr" == l.getFG(x + r, m) || "sw" == l.getFG(x + r, m)) ++C;else break;
                    for (v = 1; 5 > v;) if (r = v++, "wr" == l.getFG(x - r, m) || "sw" == l.getFG(x - r, m)) ++C;else break;
                }
                if (4 <= w && 4 <= C) {
                    "dark" == b ? 1 != Main.Instance.game.ifDark(x, m) && (t = !1) : "light" == b && 1 == Main.Instance.game.ifDark(x, m) && (t = !1);
                    if (t) return [x, m];
                    break;
                } else if (--m, ++Q, !(5 >= Q)) break;
            } else if (0 != c && "dt" != l.getFG(x, m - 1) && "cdt" != l.getFG(x, m - 1) && "myc" != l.getFG(x, m - 1) || "lv" == HxOverrides.substr(l.getFG(x, m - 1), 0, 2) || null == BlockData.get(l.getFG(x, m), "walkThroughBlockHit") || 1 == BlockData.get(l.getFG(x, m), "liquid") || null != BlockData.get(l.getFG(x, m - 1), "walkThroughBlockHit")) {
                if (--m, ++Q, !(5 >= Q)) break;
            } else {
                "dark" == b ? 1 != Main.Instance.game.ifDark(x, m) && (t = !1) : "light" == b && 1 == Main.Instance.game.ifDark(x, m) && (t = !1);
                if (t && -1 != h) {
                    Q = !1;
                    t = 0;
                    for (w = 1; 20 > w;) if (null != BlockData.get(l.getFG(x, m + w++), "walkThroughBlockHit") && 5 <= ++t) {
                        Q = !0;
                        break;
                    }
                    t = h == Q;
                }
                if (t) if (t = !1, 1 == a) t = !0;else if (2 == a) {
                    if ("air" == l.getFG(x, m + 1) || null != BlockData.get(l.getFG(x, m + 1), "walkThroughBlockHit")) t = !0;
                } else if (3 == a) {
                    if ("air" == l.getFG(x + 1, m) || null != BlockData.get(l.getFG(x + 1, m), "walkThroughBlockHit")) t = !0;else {
                        if ("air" == l.getFG(x - 1, m) || null != BlockData.get(l.getFG(x - 1, m), "walkThroughBlockHit")) --x, t = !0;
                    }
                } else if (4 == a) {
                    if ("air" == l.getFG(x, m + 1) || null != BlockData.get(l.getFG(x, m + 1), "walkThroughBlockHit")) if ("air" == l.getFG(x, m + 2) || null != BlockData.get(l.getFG(x, m + 2), "walkThroughBlockHit")) t = !0;
                } else 5 != a || "air" != l.getFG(x + 1, m) && null == BlockData.get(l.getFG(x + 1, m), "walkThroughBlockHit") || "air" != l.getFG(x + 2, m) && null == BlockData.get(l.getFG(x + 2, m), "walkThroughBlockHit") || "air" != l.getFG(x + 1, m + 1) && null == BlockData.get(l.getFG(x + 1, m + 1), "walkThroughBlockHit") || "air" != l.getFG(x + 2, m + 1) && null == BlockData.get(l.getFG(x + 2, m + 1), "walkThroughBlockHit") || "air" != l.getFG(x + 1, m + 2) && null == BlockData.get(l.getFG(x + 1, m + 2), "walkThroughBlockHit") || "air" != l.getFG(x + 2, m + 2) && null == BlockData.get(l.getFG(x + 2, m + 2), "walkThroughBlockHit") || (t = !0);
                if (1 == t) return [x, m];
                break;
            }
        }
    }
    return null;
}
entities.Entity_Mob.nextMobID = function () {
    var b = Main.Instance.game.world;
    do var a = "mob" + ++b.mobNum; while (null != b.mobs.h[a]);
    return a;
}
entities.Entity_Mob.spawnMob = function (b, a, c, d) {
    var f = Main.Instance.game.world,
        l = f.mobs;
    switch (b) {
    case "bat":
        f.batNum++;
        var k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("bat", k, a, c, 6, null != d ? d : "");
        l.h[k] = a;
        break;
    case "blaze":
        f.blazeNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("blaze", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "chicken":
        f.chickenNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("chicken", k, a, c, 4, null != d ? d : "");
        l.h[k] = a;
        .01 > Math.random() && (l.h[k].h.armor[0] = Game.makeDynamicArray(["ShadesCap", 1, 0, new haxe.ds.StringMap()]), l.h[k].h.armorDropChances[0] = 1);
        break;
    case "cow":
    case "cowctus":
    case "mooshroom":
        f.cowNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("cow", k, a, c, 10, null != d ? d : "");
        l.h[k] = a;
        l.h[k].h.variant = "cow" == b ? "" : b;
        break;
    case "creeper":
        f.creeperNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("creeper", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "enderdragon":
        f.enderdragonNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("enderdragon", k, a, c, 333, null != d ? d : "");
        l.h[k] = a;
        break;
    case "enderman":
        f.endermanNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("enderman", k, a, c, 40, null != d ? d : "");
        l.h[k] = a;
        break;
    case "ghast":
        f.ghastNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("ghast", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "magmacube":
        f.magmacubeNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("magmacube", k, a, c, 4, null != d ? d : "");
        l.h[k] = a;
        break;
    case "nethereye":
    case "netherwalker":
        f.nethereyeNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("nethereye", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "pig":
        f.pigNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("pig", k, a, c, 10, null != d ? d : "");
        l.h[k] = a;
        break;
    case "rabbit":
        f.rabbitNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("rabbit", k, a, c, 3, null != d ? d : "");
        l.h[k] = a;
        l = l.h[k];
        a = 6 * Math.random() + 1 | 0;
        l.h.rabbitType = a;
        break;
    case "sheep":
        f.sheepNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("sheep", k, a, c, 8, null != d ? d : "");
        l.h[k] = a;
        f = Math.random();
        l.h[k].h.color = .005 > f ? "gray" : .01 > f ? "lightgray" : .015 > f ? "black" : .018 > f ? "brown" : .018164 > f ? "pink" : .018328 > f ? "blue" : "white";
        .005 > Math.random() && (l.h[k].h.armor[0] = Game.makeDynamicArray(["MustacheCap", 1, 0, new haxe.ds.StringMap()]), l.h[k].h.armorDropChances[0] = 0);
        break;
    case "skeleton":
        f.skeletonNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("skeleton", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "slime":
        f.slimeNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("slime", k, a, c, 4, null != d ? d : "");
        l.h[k] = a;
        break;
    case "snowgolem":
        f.snowgolemNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("snowgolem", k, a, c, 4, null != d ? d : "");
        l.h[k] = a;
        break;
    case "spawnskin":
        f.spawnskinNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("spawnskin", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "spider":
        f.spiderNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("spider", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "squid":
        f.squidNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("squid", k, a, c, 10, null != d ? d : "");
        l.h[k] = a;
        break;
    case "wolf":
        f.wolfNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("wolf", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        break;
    case "zombie":
        f.zombieNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("zombie", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        if ("easy" != f.difficulty && Math.random() < ("hard" == f.difficulty ? .08 : .04)) {
            b = [null, null, null, null];
            Math.random();
            a = .4873 > Math.random() ? "Gold" : .5 > Math.random() ? "Iron" : .5004 > Math.random() ? "Diamond" : "Leather";
            Math.random();
            for (d = 0; 4 > d;) {
                var m = d++;
                var B = 0 == m ? a + "Cap" : 1 == m ? a + "Shirt" : 2 == m ? a + "Pants" : a + "Shoes";
                c = Math.floor(BlockData.get(B, "life") * (.92 - .08 * Math.random()));
                b[m] = Game.makeDynamicArray([B, 1, c, new haxe.ds.StringMap()]);
                if (Math.random() < ("hard" == f.difficulty ? .1 : .25)) break;
            }
            l.h[k].h.armor = b;
            l.h[k].h.armorDropChances = [.085, .085, .085, .085];
        }
        .001 > Math.random() && (null == l.h[k].h.armor[0] || 0 == l.h[k].h.armor[0][1]) && (l.h[k].h.armor[0] = Game.makeDynamicArray(["AfroCap", 1, 0, new haxe.ds.StringMap()]), l.h[k].h.armorDropChances[0] = 1);
        break;
    case "zombiepigman":
        f.zombiepigmanNum++;
        k = entities.Entity_Mob.nextMobID();
        a = entities.Entity_Mob.prepareMobData("zombiepigman", k, a, c, 20, null != d ? d : "");
        l.h[k] = a;
        l.h[k].h.handItems[0] = Game.makeDynamicArray(["GoldSword", 1, Math.floor(20 * Math.random() + 5), new haxe.ds.StringMap()]);
        break;
    default:
        return haxe.Log.trace("Mob " + b + " not identified", {
            fileName: "src/entities/Entity_Mob.hx",
            lineNumber: 2256,
            className: "entities.Entity_Mob",
            methodName: "spawnMob"
        }), "undefined";
    }
    return k;
}
entities.Entity_Mob.prepareMobData = function (b, a, c, d, f, l) {
    null == l && (l = "");
    null == f && (f = 20);
    var k = Main.Instance.game.world,
        m = new haxe.ds.StringMap();
    m.h.type = b;
    m.h.id = a;
    m.h.scene = k.sceneNum;
    m.h.name = l;
    m.h.variant = "";
    m.h.babyTimer = 0;
    m.h.breedTimer = 0;
    m.h.x = c;
    m.h.y = d;
    m.h.speedX = 0;
    m.h.speedY = 0;
    m.h.direction = 1;
    m.h.health = f;
    a = new haxe.ds.StringMap();
    a.h.left = !1;
    a.h.right = !1;
    a.h.up = !1;
    m.h.keys = a;
    m.h.target = null;
    m.h.focus = null;
    m.h.riddenBy = null;
    m.h.riding = null;
    m.h.leash = null;
    m.h.inventory = [];
    m.h.handItems = [];
    m.h.armor = [];
    m.h.defaultDrops = !0;
    m.h.handDropChances = [.085, .085];
    m.h.armorDropChances = [.085, .085, .085, .085];
    m.h.persists = !1;
    m.h.air = 0;
    m.h.airTimer = 0;
    m.h.startUnderwaterTimer = 0;
    m.h.animationType = "idle";
    m.h.animationFrame = 0;
    m.h.attackCooldown = 0;
    m.h.hitCooldown = 0;
    m.h.lastDamageType = "";
    m.h.lastDamageID = "";
    m.h.ticksSinceLastDamageID = 0;
    m.h.falling = !1;
    m.h.wasFalling = !1;
    m.h.wasFallingSpeed = 0;
    m.h.effects = new haxe.ds.StringMap();
    m = Game.makeDynamicMap(m);
    switch (b) {
    case "bat":
        m.h.hanging = !1;
        break;
    case "cow":
        m.h.variant = "";
        break;
    case "creeper":
        m.h.fuse = -1;
        m.h.charged = !1;
        break;
    case "enderdragon":
        m.h.nextSpotX = c;
        m.h.nextSpotY = d;
        m.h.official = !1;
        m.h.endTimer = !1;
        m.h.endingX = null;
        m.h.endingY = null;
        m.h.flyBob = 0;
        m.h.flameBallThread = 0;
        m.h.flameBallDelay = 0;
        break;
    case "enderman":
        m.h.teleportDistance = 10;
        break;
    case "magmacube":
    case "slime":
        m.h.size = Math.floor(3 * Math.random() + 1);
        m.h.health = Math.pow(4, m.h.size - 1);
        break;
    case "pig":
        m.h.saddleItem = Game.makeDynamicArray(["air", 1, 0, new haxe.ds.StringMap()]);
        break;
    case "rabbit":
        m.h.rabbitType = 1;
        break;
    case "sheep":
        m.h.color = "white";
        m.h.sheared = !1;
        m.h.eating = !1;
        break;
    case "skeleton":
        m.h.handItems[0] = Game.makeDynamicArray(["bow", 1, 100 * Math.random() + 220 | 0, new haxe.ds.StringMap()]);
        break;
    case "spawnskin":
        m.h.skin = 1;
        break;
    case "squid":
        m.h.actualRotation = 0;
        m.h.rotationDirection = 0;
        m.h.cooldownSpeed = 1;
        m.h.actualSpeed = 2;
        m.h.movementCooldown = 0;
        m.h.rotationSpeed = 0;
        break;
    case "wolf":
        m.h.tameable = !0;
        m.h.tamed = !1;
        m.h.tamedBy = m.h.tamed ? k.player.id : null;
        m.h.sitting = !1;
        m.h.collarColor = "red";
        break;
    case "zombiepigman":
        m.h.handItems[0] = Game.makeDynamicArray(["GoldSword", 1, 20 * Math.random() + 10 | 0, new haxe.ds.StringMap()]), m.h.aggressiveness = 0;
    }
    return m;
}
entities.Entity_Mob.recalculateMobCount = function () {
    entities.Entity_Mob.resetMobCount();
    for (var b = Object.keys(Main.Instance.game.world.mobs.h), a = b.length, c = 0; c < a;) {
        var d = b[c++];
        entities.Entity_Mob.canDespawn(d) && Main.Instance.game.world.setMobNum(Main.Instance.game.world.mobs.h[d].h.type.toLowerCase(), 1);
    }
}
entities.Entity_Mob.canDespawn = function (b) {
    var a = Main.Instance.game.world,
        c = a.mobs.h[b];
    a = a.mobData.h[c.h.type];
    return null == a ? !1 : null != c.h.name && "" != c.h.name || 1 == a.h.tameable && 1 == c.h.tamed || 0 == a.h.despawnChance || entities.Entity_Mob.mobIsFencedIn(b) ? !1 : !0;
}
entities.Entity_Mob.resetMobCount = function () {
    for (var b = Main.Instance.game.world, a = Object.keys(b.mobData.h), c = a.length, d = 0; d < c;) b.setMobNum(a[d++], 0, !0);
}
entities.Entity_Mob.matchMobID = function (b) {
    b = b.toLowerCase().replace(/[ ]+/, "");
    switch (b) {
    case "bat":
    case "blaze":
    case "chicken":
    case "creeper":
    case "enderdragon":
    case "enderman":
    case "ghast":
    case "magmacube":
    case "nethereye":
    case "pig":
    case "rabbit":
    case "sheep":
    case "skeleton":
    case "slime":
    case "snowgolem":
    case "spider":
    case "squid":
    case "wolf":
    case "zombie":
    case "zombiepigman":
        return b;
    case "bunny":
        return "rabbit";
    case "dog":
        return "wolf";
    case "cow":
    case "cowctus":
    case "mooshroom":
        return "cow";
    case "netherwalker":
        return "nethereye";
    case "octopus":
        return "squid";
    case "pigman":
        return "zombiepigman";
    case "spawnskin":
        return "spawnskin";
    default:
        return null;
    }
}
entities.Entity_Mob.matchMobVariant = function (b) {
    var a = Main.Instance.game.world;
    b = b.toLowerCase().replace(/[ ]+/, "");
    if (null != entities.Entity_Mob.matchMobID(b)) {
        var c = a.mobData;
        var d = entities.Entity_Mob.matchMobID(b);
        null != c.h[d] ? (c = a.mobData, d = entities.Entity_Mob.matchMobID(b), c = null != c.h[d].h.variants) : c = !1;
        c ? (c = a.mobData, d = entities.Entity_Mob.matchMobID(b), a = null != Game.makeDynamicMap(c.h[d].h.variants).h[b]) : a = !1;
        return a ? b : entities.Entity_Mob.matchMobID(b);
    }
    return null;
}
entities.Entity_Mob.getMobName = function (b) {
    var a = Main.Instance.game.world;
    b = b.toLowerCase().replace(/[ ]+/, "");
    if (null != entities.Entity_Mob.matchMobID(b)) {
        var c = a.mobData;
        var d = entities.Entity_Mob.matchMobID(b);
        c = null != c.h[d];
    } else c = !1;
    if (c) {
        c = a.mobData;
        d = entities.Entity_Mob.matchMobID(b);
        null != c.h[d].h.variants ? (c = a.mobData, d = entities.Entity_Mob.matchMobID(b), c = null != Game.makeDynamicMap(c.h[d].h.variants).h[b]) : c = !1;
        if (c) return c = a.mobData, d = entities.Entity_Mob.matchMobID(b), Game.makeDynamicMap(c.h[d].h.variants).h[b];
        c = a.mobData;
        d = entities.Entity_Mob.matchMobID(b);
        return c.h[d].h.name;
    }
    return null;
}
entities.Entity_Mob.__super__ = entities.Entity_Base
entities.Entity_Mob.prototype = z(entities.Entity_Base.prototype, {
    run: function () {
        var b = this.world.mobs,
            a = this.world.mobData,
            c = this.world.mobs.h[this.id];
        if (null == this.world.mobData.h[c.h.type]) this.remove();else if ("Object" != lemongine.Helpers.getQualifiedClassName(c)) this.removeMob(this.id);else {
            a = a.h[c.h.type];
            null == this.world.mobTmpData.h[this.id] && this.setMobTmpData(this.id);
            var d = this.world.mobTmpData.h[this.id];
            if (!this.hasInit) {
                if (null != a.h.specialInit && (a.h.specialInit(this.id), null == this.world.mobs.h[this.id])) return;
                this.hasInit = !0;
            }
            if (1 != a.h.alwaysActive) {
                if ((("hostile" == this.mobGetAlignment(this.id) || "neutral" == this.mobGetAlignment(this.id)) && "peaceful" == this.world.difficulty || "passive" == this.mobGetAlignment(this.id) && 0 == this.game.getGameRule("passivemobs")) && "" == this.get_name() && (1 != a.h.tameable || 1 != c.h.tamed)) {
                    this.removeMob(this.id);
                    return;
                }
                if (this.onScreen(30, !0)) d.h.onScreen = !0;else {
                    1 == d.h.onScreen && (d.h.onScreen = !1, this.hideRendering());
                    entities.Entity_Mob.canDespawn(this.id) && Math.random() < a.h.despawnChance && this.removeMob(this.id);
                    return;
                }
            }
            null == c.h.ticksSinceLastDamageID && (c.h.ticksSinceLastDamageID = 0);
            c.h.ticksSinceLastDamageID += 1;
            c.h.ticksSinceLastDamageID >= 20 * Main.Instance.get_fps() && (c.h.lastDamageID = "");
            if (0 < c.h.dead) {
                c.h.dead += 1;
                if (null != a.h.specialDeathAnimation) {
                    if (a.h.specialDeathAnimation(this.id), null == this.world.mobs.h[this.id]) return;
                } else if (1 <= c.h.dead && (this.colorTransform = [1, .3, .3, 1, 20, 0, 0, 0], this.rotation = (1 == c.h.direction ? 1 : -1) * Math.sqrt(Math.min(1, c.h.dead / 40)) * 90, 60 < c.h.dead)) {
                    this.game.addParticles("smoke", 0, 5, new lemongine.Point(c.h.x - (20 + 10 * (1 == c.h.direction ? 1 : -1)) / 30, 1.3333333333333333), new lemongine.Point(c.h.y - .6666666666666666, 1));
                    this.removeMob(this.id);
                    return;
                }
                this.mobOnScreen() && (this.updateAlpha(), this.movieX = c.h.x, this.movieY = c.h.y - .16666666666666666, this.render());
            } else if (0 >= c.h.health) this.killMob(this.id);else {
                this.game.manageEffects(this.id);
                1 >= Math.random() * (null != a.h.idleSoundFrequency ? a.h.idleSoundFrequency : 200) && null != this.get_sounds().h.idle && (null != this.get_sounds().h.aggroIdle && c.h.target == this.world.player.id ? this.game.requestSound(this.get_sounds().h.aggroIdle[Math.random() * this.get_sounds().h.aggroIdle.length | 0], c.h.x - this.world.worldX, c.h.y - this.world.worldY, 1, 1, 0 < c.h.babyTimer ? 1.3 : 1) : this.game.requestSound(this.get_sounds().h.idle[Math.random() * this.get_sounds().h.idle.length | 0], c.h.x - this.world.worldX, c.h.y - this.world.worldY, 1, 1, 0 < c.h.babyTimer ? 1.3 : 1));
                var f = Math.floor(c.h.x / 1),
                    g = Math.floor(-c.h.y);
                if (a.h.burnsInSun && 48 > this.world.tim && 2 < this.world.tim && !Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id) && 0 == this.world.raining && "wr" != this.world.getFG(f, g)) if (null != this.get_armor() && null != this.get_armor()[0] && "" != this.get_armor()[0][0]) 0 == this.world.tick % 600 && 1 == BlockData.get(this.get_armor()[0][0], "tool") && (this.get_armor()[0][2] += 1) >= BlockData.get(this.get_armor()[0][0], "life") && (this.get_armor()[0][0] = "air");else if (.005 > Math.random()) {
                    for (var p = !0, m = 2; 21 > m;) if ("air" != this.world.getFG(f, g + m++)) {
                        p = !1;
                        break;
                    }
                    p && (this.world.onFire.h[this.id] = !0);
                }
                1 == a.h.burnsInDesert && Math.random() < 1 / Main.Instance.get_fps() && null != this.world.biomeList[f] && "desert" == this.world.biomeList[f] && this.hurtMob(this.id, 1, "heat");
                if (0 >= c.h.hitCooldown) {
                    c.h.hitCooldown = 40;
                    if (Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id) && .025 > Math.random()) {
                        var B = this.id;
                        m = this.world.onFire;
                        Object.prototype.hasOwnProperty.call(m.h, B) && delete m.h[B];
                    }
                    1 != a.h.burnsInLava || "la" != this.world.getFG(f, g) && "la" != this.world.getFG(f, g + 1) ? 1 != a.h.burnsInAcid || "ad" != this.world.getFG(f, g) && "ad" != this.world.getFG(f, g + 1) ? "magma" == this.world.getFG(f, g) && 1 != BlockData.get(this.world.getFG(f, g + 1), "waterCollision") ? this.hurtMob(this.id, 2, "lava") : Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id) && 0 != a.h.burnsOnFire ? this.hurtMob(this.id, 2, "fire") : "wolf" == c.h.type && 1 == c.h.tamed || "cow" == c.h.type && "cowctus" == c.h.variant || 0 == a.h.cactusDamage || "ct" != this.world.getFG(f, g) && "ct" != this.world.getFG(f, g + 1) || this.hurtMob(this.id, 1, "cactus") : this.hurtMob(this.id, 5, "acid") : (this.world.onFire.h[this.id] = !0, this.hurtMob(this.id, 5, "lava"));
                } else --c.h.hitCooldown;
                this.mobCalculateTarget(this.id);
                if ("custom" != a.h.aiType) {
                    null != d.h.overrideMovement ? d.h.overrideMovement = !1 : 1 != a.h.hops || 0 == c.h.falling ? (Math.random() < a.h.percentageChanceToDoMovement * (1 == d.h.isFrightened ? 3 : 1) && (Math.random() < a.h.percentageChanceToStopMoving * (1 == d.h.isFrightened ? .5 : 1) && (1 == a.h.hops && (this.get_keys().h.up = !1), this.get_keys().h.left = !1, this.get_keys().h.right = !1), p = Math.random(), p < a.h.percentageChanceToChangeDirection * (1 == d.h.isFrightened ? 4 : 1) ? (1 == a.h.hops && (this.get_keys().h.up = !0), this.get_keys().h.left = !0, this.get_keys().h.right = !1) : p < 2 * a.h.percentageChanceToChangeDirection * (1 == d.h.isFrightened ? 4 : 1) && (1 == a.h.hops && (this.get_keys().h.up = !0), this.get_keys().h.left = !1, this.get_keys().h.right = !0), Math.random() < a.h.percentageChanceToJump * (1 == d.h.isFrightened ? 3 : 1) ? this.get_keys().h.up = !0 : 1 != a.h.hops && (this.get_keys().h.up = !1)), 1 == a.h.jumpAttack && 1 == d.h.following && 3 > Math.abs(c.h.x - d.h.followPoint.x) && 3 <= d.h.followMaxDistance && Math.random() < 2 / Main.Instance.get_fps() && (this.get_keys().h.up = !0), 1 == d.h.following && 0 == d.h.isFrightened && (Math.abs(c.h.y - d.h.followPoint.y) < d.h.followMaxDistance / 2 ? (Math.abs(c.h.x - d.h.followPoint.x) <= d.h.followMaxDistance ? Math.abs(c.h.x - d.h.followPoint.x) >= d.h.followMinDistance && Math.random() < (null != a.h.percentageChanceToUpdatePursuit ? a.h.percentageChanceToUpdatePursuit : .2) && (0 < c.h.x - d.h.followPoint.x ? (1 == a.h.hops && (this.get_keys().h.up = !0), this.get_keys().h.left = !0, this.get_keys().h.right = !1) : (1 == a.h.hops && (this.get_keys().h.up = !0), this.get_keys().h.right = !0, this.get_keys().h.left = !1)) : 0 < c.h.aggressiveness && --c.h.aggressiveness, 1 == a.h.followVertically && (c.h.y - d.h.followPoint.y < -d.h.followMaxDistance / 2 && 0 < c.h.y - d.h.followPoint.y ? this.get_keys().h.up = !0 : c.h.y - d.h.followPoint.y > -d.h.followMaxDistance / 2 && 0 > c.h.y - d.h.followPoint.y && (this.get_keys().h.up = !1))) : 0 < c.h.aggressiveness && --c.h.aggressiveness, 0 < d.h.teleportWhenAway && !c.h.sitting && Math.pow(c.h.y - d.h.followPoint.y, 2) + Math.pow(c.h.x - d.h.followPoint.x, 2) > d.h.teleportWhenAway * d.h.teleportWhenAway && this.teleportMob(this.mobPosition(this.world.player.id), 4, 2, !1))) : 1 == a.h.hops && (this.get_keys().h.up = !1);
                    if (0 < c.h.breedTimer) {
                        if (c.h.breedTimer = Math.max(0, c.h.breedTimer - 1), Math.random() < 1 / Main.Instance.get_fps() && this.game.addParticles("heart", 1, 0, new lemongine.Point(c.h.x, 0), new lemongine.Point(c.h.y - 2, 0), !0), 0 >= c.h.breedTimer && (c.h.breedTimer = 0, "" != c.h.breedTarget && null != b.h[c.h.breedTarget])) if (6.25 > Math.pow(b.h[c.h.breedTarget].h.x - c.h.x, 2) + Math.pow(b.h[c.h.breedTarget].h.y - c.h.y, 2)) {
                            B = entities.Entity_Mob.spawnMob(c.h.type, (b.h[c.h.breedTarget].h.x + c.h.x) / 2, (b.h[c.h.breedTarget].h.y + c.h.y) / 2);
                            p = b.h[B];
                            p.h.parents = [this.id, c.h.breedTarget];
                            p.h.variant = c.h.variant;
                            var x = 1200 * Main.Instance.get_fps();
                            p.h.babyTimer = x;
                            "wolf" == c.h.type && (p.h.tamed = !0, x = .5 > Math.random() ? c.h.tamedBy : b.h[c.h.breedTarget].h.tamedBy, p.h.tamedBy = x);
                            if ("sheep" == c.h.type || "wolf" == c.h.type) x = this.game.pickCombinedColor(c.h.color, b.h[c.h.breedTarget].h.color), p.h.color = x;
                            this.game.dropXP(p.h.x, p.h.y, 3);
                            this.game.unlockAchieve(44);
                            B = b.h[c.h.breedTarget];
                            x = 300 * -Main.Instance.get_fps();
                            B.h.breedTimer = x;
                            c.h.breedTimer = x;
                        } else b.h[c.h.breedTarget].h.breedTimer = 0;
                    } else 0 > c.h.breedTimer && (c.h.breedTimer = Math.min(0, c.h.breedTimer + 1));
                    0 < c.h.babyTimer && (c.h.babyTimer = Math.max(0, c.h.babyTimer - 1));
                    1 != a.h.ignoreCliffs && (p = (this.get_keys().h.right ? .5 : 0) + (this.get_keys().h.left ? -.5 : 0), this.game.collision(c.h.x + p, c.h.y, 0, 3 + (null != this.get_effects().h.jumpboost ? Game.makeDynamicMap(this.get_effects().h.jumpboost).h.level : 0), .5, !0, !0, !0) || (0 < p ? this.get_keys().h.right = !1 : 0 > p && (this.get_keys().h.left = !1), 1 == a.h.hops && 0 != p && (this.get_keys().h.up = !0)));
                    p = 0;
                    null != this.get_armor()[3] && (this.getArmorExtras(3).h.depthStrider1 ? p = .4 : this.getArmorExtras(3).h.depthStrider2 ? p = .7 : this.getArmorExtras(3).h.depthStrider3 && (p = 1));
                    null != this.world.water.h["blockX" + f + "Y" + (g + 1)] && (this.world.water.h["blockX" + f + "Y" + (g + 1)][0] > this.world.water.h["blockX" + f + "Y" + (g + 1)][1] ? this.set_speedX(this.get_speedX() + Game.migrateAcc(1 - p, .7)) : this.world.water.h["blockX" + f + "Y" + (g + 1)][0] < this.world.water.h["blockX" + f + "Y" + (g + 1)][1] && this.set_speedX(this.get_speedX() - Game.migrateAcc(1 - p, .7)), 1 == this.world.states.h["blockX" + f + "Y" + (g + 1)] ? this.set_speedY(this.get_speedY() + Game.migrateAcc(3, .6)) : -1 == this.world.states.h["blockX" + f + "Y" + (g + 1)] && c.h.falling && this.set_speedY(this.get_speedY() - Game.migrateAcc(2, .6)));
                    null != this.world.water.h["blockX" + f + "Y" + (g + 2)] && (this.world.water.h["blockX" + f + "Y" + (g + 2)][0] > this.world.water.h["blockX" + f + "Y" + (g + 2)][1] ? this.set_speedX(this.get_speedX() + Game.migrateAcc(1 - p, .7)) : this.world.water.h["blockX" + f + "Y" + (g + 2)][0] < this.world.water.h["blockX" + f + "Y" + (g + 2)][1] && this.set_speedX(this.get_speedX() - Game.migrateAcc(1 - p, .7)), 1 == this.world.states.h["blockX" + f + "Y" + (g + 2)] ? this.set_speedY(this.get_speedY() + Game.migrateAcc(3, .6)) : -1 == this.world.states.h["blockX" + f + "Y" + (g + 2)] && c.h.falling && this.set_speedY(this.get_speedY() - Game.migrateAcc(2, .6)));
                    null == BlockData.get(this.world.getFG(f, g + 1), "walkThroughBlockHit") && (1 == BlockData.get(this.world.getFG(f - 1, g + 1), "walkThroughBlockHit") ? this.set_speedX(this.get_speedX() - Game.migrateAcc(1, .7)) : 1 == BlockData.get(this.world.getFG(f + 1, g + 1), "walkThroughBlockHit") ? this.set_speedX(this.get_speedX() + Game.migrateAcc(1, .7)) : c.h.falling = !0);
                    1 == a.h.ignoreWeb || "web" != this.world.getFG(f, g + 1) && "web" != this.world.getFG(f, g + 2) || (this.set_speedX(this.get_speedX() * Game.migrateDampening(.2)), this.set_speedY(this.get_speedY() * Game.migrateDampening(.2)));
                    "ssd" != this.world.getFG(f, g) && "slimeb" != this.world.getFG(f, g) || this.set_speedX(this.get_speedX() * Game.migrateDampening(.5));
                    this.game.collision(c.h.x + .7 * this.mobCollisionBounds(this.id).get_left(), c.h.y - .3333333333333333, .7 * this.mobCollisionBounds(this.id).width, 0, .13333333333333333, !1) && !this.game.collision(c.h.x + .7 * this.mobCollisionBounds(this.id).get_left(), c.h.y - 1.5, .7 * this.mobCollisionBounds(this.id).width, 0, .13333333333333333, !1) && (c.h.y -= .5);
                    c.h.wasFalling = 1 == c.h.falling;
                    p = c.h.falling = !0;
                    d.h.rightable = !0;
                    d.h.leftable = !0;
                    var t = !1,
                        w = !1,
                        C = c.h.x,
                        v = c.h.y,
                        r = Math.max(1, Math.ceil(Math.sqrt(this.get_speedX() * this.get_speedX() + this.get_speedY() * this.get_speedY()))) | 0;
                    for (m = 0; m < r;) if (B = m++, w || (C = c.h.x + this.get_speedX() * (B + 1) / r / 30), t || (v = c.h.y - this.get_speedY() * (B + 1) / r / 30, this.game.collision(C + .7 * this.mobCollisionBounds(this.id).get_left(), v + .03333333333333333, .7 * this.mobCollisionBounds(this.id).width, 0, .13333333333333333, !1) && (t = !0, c.h.falling = !1, c.h.wasFalling && (x = -this.get_speedY(), c.h.wasFallingSpeed = x), this.set_speedY(0)), this.game.collision(C + .7 * this.mobCollisionBounds(this.id).get_left(), v + this.mobCollisionBounds(this.id).get_top(), .7 * this.mobCollisionBounds(this.id).width, 0, .13333333333333333, !1) && (p = !1, 0 < this.get_speedY() && (t = !0, this.set_speedY(-Math.abs(this.get_speedY() / 2))))), !w && (this.game.collision(C + this.mobCollisionBounds(this.id).get_left(), v + this.mobCollisionBounds(this.id).get_top(), 0, Math.max(0, this.mobCollisionBounds(this.id).height - .6), .13333333333333333) && (d.h.leftable = !1, 1 == a.h.climbsWalls ? .016666666666666666 > Math.random() && (B = this.get_keys(), x = !this.get_keys().h.up, B.h.up = x) : (.1 >= Math.random() && (this.get_keys().h.up = !0, this.get_keys().h.left = !0), .1 >= Math.random() && (this.get_keys().h.up = !1, this.get_keys().h.left = !1)), 0 > this.get_speedX() && (w = !0, this.set_speedX(0))), this.game.collision(C + this.mobCollisionBounds(this.id).get_right(), v + this.mobCollisionBounds(this.id).get_top(), 0, Math.max(0, this.mobCollisionBounds(this.id).height - .6), .13333333333333333))) {
                        d.h.rightable = !1;
                        if (1 == a.h.climbsWalls) {
                            if (.016666666666666666 > Math.random()) {
                                var K = this.get_keys();
                                B = !this.get_keys().h.up;
                                K.h.up = B;
                            }
                        } else .1 >= Math.random() && (this.get_keys().h.up = !0, this.get_keys().h.right = !0), .1 >= Math.random() && (this.get_keys().h.up = !1, this.get_keys().h.right = !1);
                        0 < this.get_speedX() && (w = !0, this.set_speedX(0));
                    }
                    1 == d.h.following && 1 != d.h.isFrightened && Math.abs(c.h.x - d.h.followPoint.x) >= d.h.followMinDistance && Math.abs(C - d.h.followPoint.x) < d.h.followMinDistance && (this.get_keys().h.left = !1, this.get_keys().h.right = !1);
                    c.h.x = C;
                    c.h.y = v;
                    if (1 == c.h.wasFalling && 0 == c.h.falling) {
                        0 >= d.h.wasFallingAndNotFalling && ("slimeb" == this.world.getFG(Math.floor(c.h.x / 1), Math.floor(-(c.h.y + .03333333333333333))) ? (this.game.addParticles("slime", 0, 5, new lemongine.Point(c.h.x, 0), new lemongine.Point(c.h.y, 0)), this.game.requestSound("slimeblockland", c.h.x - this.world.worldX, c.h.y - this.world.worldY, 1, 1)) : this.game.blockSound(f, g, c.h.x - this.world.worldX, c.h.y - this.world.worldY), null != this.get_armor()[3] ? (B = this.getArmorExtras(3), Object.prototype.hasOwnProperty.call(B.h, "frostWalker1") ? m = !0 : (B = this.getArmorExtras(3), m = Object.prototype.hasOwnProperty.call(B.h, "frostWalker2"))) : m = !1, m && (m = this.game, t = Math.floor(c.h.x / 1), w = Math.floor(-c.h.y), B = this.getArmorExtras(3), m.doFrostWalker(t, w, Object.prototype.hasOwnProperty.call(B.h, "frostWalker2") ? 3 : 2)));
                        d.h.wasFallingAndNotFalling = 6;
                        "bed" == HxOverrides.substr(this.world.getFG(Math.floor(c.h.x / 1), Math.floor(-(c.h.y + 1))), 0, 3) ? c.h.wasFallingSpeed *= Game.migrateDampening(.6) : "slimeb" == this.world.getFG(Math.floor(c.h.x / 1), Math.floor(-(c.h.y + 1))) && (c.h.wasFallingSpeed > Game.migrateSpeed(6) ? (this.set_speedY(.78 * Math.max(0, c.h.wasFallingSpeed - Game.migrateSpeed(5))), c.h.wasFallingSpeed = 0, x = c.h.y - this.get_speedY() / 2 / 30, c.h.y = x) : this.set_speedY(0));
                        if (0 != a.h.takesFallDamage && c.h.wasFallingSpeed > Game.migrateSpeed(23)) {
                            c.h.wasFallingSpeed -= Game.migrateSpeed(14);
                            for (m = B = 0; 0 <= c.h.wasFallingSpeed;) B += 2, ++m, c.h.wasFallingSpeed -= Game.migrateSpeed(Math.max(11 - B, 1));
                            null != this.get_effects().h.jumpboost && (m -= Math.ceil(1.75 * Game.makeDynamicMap(this.get_effects().h.jumpboost).h.level));
                            0 < m && this.hurtMob(this.id, m, "fall");
                        }
                        0 >= this.get_speedY() && (c.h.y = .5 * Math.round(c.h.y / .5) + .16666666666666666);
                    } else --d.h.wasFallingAndNotFalling;
                    x = d.h.distanceX + Math.abs(this.get_speedX()) / 30;
                    d.h.distanceX = x;
                    1 < d.h.distanceX && (d.h.distanceX = 0, 1 != a.h["float"] && this.game.blockSound(f, g, c.h.x - this.world.worldX, c.h.y - this.world.worldY), null != this.get_armor() && null != this.get_armor()[3] ? (B = this.getArmorExtras(3), Object.prototype.hasOwnProperty.call(B.h, "frostWalker1") ? m = !0 : (B = this.getArmorExtras(3), m = Object.prototype.hasOwnProperty.call(B.h, "frostWalker2"))) : m = !1, m && (m = this.game, t = Math.floor(c.h.x / 1), w = Math.floor(-c.h.y), B = this.getArmorExtras(3), m.doFrostWalker(t, w, Object.prototype.hasOwnProperty.call(B.h, "frostWalker2") ? 3 : 2)));
                    this.game.collisionWithLiquid(c.h.x + .7 * this.mobCollisionBounds(this.id).get_left(), c.h.y - this.mobCollisionBounds(this.id).get_top(), .7 * this.mobCollisionBounds(this.id).width, this.mobCollisionBounds(this.id).height, .5, !1) && (this.get_keys().h.up = !0);
                    B = this.world.getFG(f, Math.floor(g + .8 * this.mobCollisionBounds(this.id).height));
                    BlockData.get(B, "liquidCollision") ? (null != this.get_effects().h.waterbreathing ? (c.h.airTimer = 60, c.h.air = 11) : --c.h.airTimer, c.h.startUnderwaterTimer = 5, 0 >= c.h.airTimer && (c.h.airTimer = 60, 0 >= c.h.air ? this.hurtMob(this.id, 1, "drown") : --c.h.air), "wr" == B && (.1 > Math.random() && this.game.addParticles("water", 1, 0, new lemongine.Point(c.h.x, 0), new lemongine.Point(c.h.y - 2, 0)), 0 == d.h.inWater && this.game.addParticles("water", 0, 5, new lemongine.Point(c.h.x, 0), new lemongine.Point(c.h.y - 2, 0)), d.h.inWater = !0)) : (c.h.air = 11, c.h.airTimer = 60, 0 >= c.h.startUnderwaterTimer ? (1 == d.h.inWater && (this.game.addParticles("water", 0, 10, new lemongine.Point(c.h.x - .5, 1), new lemongine.Point(c.h.y - .5, 0)), this.game.requestSound("splash", c.h.x - this.world.worldX, c.h.y - this.world.worldY, 1, 1)), d.h.inWater = !1) : --c.h.startUnderwaterTimer);
                    if (BlockData.get(this.world.getFG(f, g), "waterCollision") || BlockData.get(this.world.getFG(f, g + 1), "waterCollision")) B = this.id, m = this.world.onFire, Object.prototype.hasOwnProperty.call(m.h, B) && delete m.h[B];
                    null != a.h.specialGravityFunction ? a.h.specialGravityFunction(this.id) : 1 == c.h.falling ? (1 == BlockData.get(this.world.getFG(f, g + 1), "liquidCollision") ? this.set_speedX(this.get_speedX() * Game.migrateDampening(.55)) : this.set_speedX(this.get_speedX() * Game.migrateDampening(.65)), this.set_speedY(this.get_speedY() - Game.migrateAcc(null != a.h.fallSpeed ? a.h.fallSpeed : 2, .97))) : "ice" == this.world.getFG(f, g) || "fice" == this.world.getFG(f, g) ? this.set_speedX(this.get_speedX() * Game.migrateDampening(.9)) : this.set_speedX(this.get_speedX() * Game.migrateDampening(.7));
                    1 == BlockData.get(this.world.getFG(f, g + 1), "climbable") && this.set_speedY(this.get_speedY() * Game.migrateDampening(.6));
                    1 == a.h["float"] && this.set_speedY(Math.max(Game.migrateSpeed(-(null != a.h.floatMaxSpeed ? a.h.floatMaxSpeed : 3)), Math.min(Game.migrateSpeed(null != a.h.floatMaxSpeed ? a.h.floatMaxSpeed : 3), this.get_speedY())));
                    B = a.h.walkSpeed;
                    if ("slime" == c.h.type || "magmacube" == c.h.type) B = .6 * c.h.size + .3;
                    null != c.h.riddenBy && (B = a.h.walkSpeedWhenRidden);
                    m = B * (1 + (null != this.get_effects().h.speed ? Game.makeDynamicMap(this.get_effects().h.speed).h.level * Game.makeDynamicMap(this.game.effectData.h.speed).h.perLevel / 100 : 0) + (null != this.get_effects().h.slowness ? Game.makeDynamicMap(this.get_effects().h.slowness).h.level * Game.makeDynamicMap(this.game.effectData.h.slowness).h.perLevel / 100 : 0));
                    d.h.forceSpeedMultiplier ? (m += B * (d.h.forceSpeedMultiplier - 1), d.h.forceSpeedMultiplier = null) : d.h.isFrightened && (m += B * (a.h.sprintMultiplier - 1));
                    0 < c.h.babyTimer && (m *= 1.2);
                    1 == d.h.immobile && (B = this.get_keys(), K = this.get_keys(), x = this.get_keys().h.up = !1, K.h.left = x, B.h.right = x, d.h.immobile = !1);
                    1 == this.get_keys().h.left && 1 == d.h.leftable && (1 == a.h.hops && 1 != c.h.falling || this.set_speedX(this.get_speedX() - Game.migrateAcc(m, .97)), c.h.direction = 0);
                    1 == this.get_keys().h.right && 1 == d.h.rightable && (1 == a.h.hops && 1 != c.h.falling || this.set_speedX(this.get_speedX() + Game.migrateAcc(m, .97)), c.h.direction = 1);
                    if (1 == a.h.attackExplode) {
                        if (null != c.h.target || Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id)) {
                            if (0 == c.h.fuse) this.mobCollision(this.id, c.h.target) && (this.game.requestSound("fuse", c.h.x - this.world.worldX, c.h.y - this.world.worldY), c.h.fuse = 1);else if (B = this.mobPosition(c.h.target), 25 <= Math.pow(B.x - c.h.x, 2) + Math.pow(B.y - c.h.y, 2) && !Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id)) 0 < c.h.fuse && --c.h.fuse;else if (c.h.fuse < a.h.fuseLength) c.h.fuse += 1;else {
                                1 == c.h.charged ? this.game.explode(c.h.x / 1, -c.h.y, 8, !1, this.game.getGameRule("mobgriefing"), this.id) : this.game.explode(c.h.x / 1, -c.h.y, 4, !1, this.game.getGameRule("mobgriefing"), this.id);
                                c.h.health = 0;
                                this.removeMob(this.id);
                                return;
                            }
                        } else 0 < c.h.fuse && --c.h.fuse;
                    } else 0 >= c.h.attackCooldown ? this.mobAttack(this.id) : --c.h.attackCooldown;
                    1 == a.h.climbsWalls && (1 == c.h.falling && this.game.collision(c.h.x + this.mobCollisionBounds(this.id).get_left() - .16666666666666666, c.h.y + this.mobCollisionBounds(this.id).get_top(), 0, Math.max(0, this.mobCollisionBounds(this.id).height + .3), .2) || this.game.collision(c.h.x + this.mobCollisionBounds(this.id).get_right() + .16666666666666666, c.h.y + this.mobCollisionBounds(this.id).get_top(), 0, Math.max(0, this.mobCollisionBounds(this.id).height + .3), .2) ? (this.set_speedY(this.get_speedY() * Game.migrateDampening(.7)), 1 == this.get_keys().h.up && this.set_speedY(this.get_speedY() + Game.migrateAcc(3, .97))) : .05 > Math.random() && (this.get_keys().h.up = !1));
                    if (1 == this.get_keys().h.up) if (B = 0, 1 == a.h["float"]) p && (B = 1 == a.h.ignoreWeb || "web" != this.world.getFG(f, g) && "web" != this.world.getFG(f, g + 1) ? B + (null != a.h.floatJump ? a.h.floatJump : 2) : B + (null != a.h.floatJump ? a.h.floatJump : 2) / 2), this.set_speedY(this.get_speedY() + Game.migrateAcc(B, .97)), c.h.y -= B / 2 / 30;else if (1 == BlockData.get(this.world.getFG(f, g), "climbable") && 1 != BlockData.get(this.world.getFG(f, g + 1), "climbable") && 1 != BlockData.get(this.world.getFG(f, g + 2), "climbable") && 1 != BlockData.get(this.world.getFG(f, g + 3), "climbable") || 1 == BlockData.get(this.world.getFG(f, g + 1), "climbable") && 1 == BlockData.get(this.world.getFG(f, g + 2), "walkThroughBlockHit")) p && (B = 3 * (null != a.h.jumpSpeedMultiplier ? a.h.jumpSpeedMultiplier : 1), this.set_speedY(this.get_speedY() + Game.migrateAcc(B, .7)), 0 == c.h.falling && (c.h.y -= B / 2 / 30));else if (p && ("bed" != HxOverrides.substr(this.world.getFG(f, g), 0, 3) || c.h.falling ? 1 == a.h.ignoreWeb || "web" != this.world.getFG(f, g) && "web" != this.world.getFG(f, g + 1) ? c.h.falling || (B = 15) : B = 2 : B = 17, "slimeb" != this.world.getFG(f, g) || c.h.falling || this.game.requestSound("slimeblockjump", c.h.x - this.world.worldX, c.h.y - this.world.worldY, 1, 1), 0 < B)) {
                        B *= null != a.h.jumpSpeedMultiplier ? a.h.jumpSpeedMultiplier : 1;
                        0 != B && null != this.get_effects().h.jumpboost && (B += 3.5 * Game.makeDynamicMap(this.get_effects().h.jumpboost).h.level);
                        if ("slime" == c.h.type || "magmacube" == c.h.type) B *= .2 * c.h.size + .6;
                        B > this.get_speedY() && (this.set_speedY(Game.migrateSpeed(B)), c.h.y -= B / 2 / 30);
                    }
                }
                this.mobRiding(this.id);
                if (null != a.h.specialFunction && (a.h.specialFunction(this.id), null == b.h[this.id])) return;
                this.renderMob(this.id);
                d.h.loot = 0;
                0 < d.h.hurtAnimation && (--d.h.hurtAnimation, this.colorTransform = 0 < d.h.hurtAnimation ? [1, .6, .6, 1, 20, 0, 0, 0] : [1, 1, 1, 1, 0, 0, 0, 0]);
            }
        }
    },
    mobOnScreen: function () {
        var b = this.world.mobData.h[this.world.mobs.h[this.id].h.type];
        return entities.Entity_Base.prototype.onScreen.call(this, null != b.h.minimumRenderDistance ? b.h.minimumRenderDistance : 5, !0);
    },
    updateAlpha: function () {
        null != this.get_effects().h.invisibility ? 0 != this.alpha && (this.alpha = 0) : 1 != this.alpha && (this.alpha = 1);
    },
    renderMob: function (b) {
        var a = this.world.mobs.h[b],
            c = this.world.mobData.h[a.h.type];
        if (this.mobOnScreen()) {
            var d = this.world.mobTmpData.h[b];
            this.updateAlpha();
            if (null != c.h.animations) {
                var f = this.get_keys().h.left || this.get_keys().h.right;
                a.h.animationFrame += 1;
                null != d.h.animationOverride && "" != d.h.animationOverride ? (null == this.get_animations().h[d.h.animationOverride] && (haxe.Log.trace("Couldn't find animation '" + Std.string(d.h.animationOverride) + "' for " + Std.string(a.h.type), {
                    fileName: "src/entities/Entity_Mob.hx",
                    lineNumber: 805,
                    className: "entities.Entity_Mob",
                    methodName: "renderMob"
                }), d.h.animationOverride = null), a.h.animationType != d.h.animationOverride && (a.h.animationFrame = 0, a.h.animationType = d.h.animationOverride)) : a.h.eating && null != this.get_animations().h.eating ? "eating" != a.h.animationType && (a.h.animationFrame = 0, a.h.animationType = "eating") : a.h.sitting && null != this.get_animations().h.sitting ? "sitting" != a.h.animationType && (a.h.animationFrame = 0, a.h.animationType = "sitting") : a.h.falling && null != this.get_animations().h.falling ? "falling" != a.h.animationType && (a.h.animationFrame = 0, a.h.animationType = "falling") : f && Math.abs(this.get_speedX()) > Game.migrateSpeed(2) ? "walk" != a.h.animationType && (a.h.animationFrame = 0, a.h.animationType = "walk") : "idle" != a.h.animationType && (a.h.animationFrame = 0, a.h.animationType = "idle");
                var l = this.get_animations().h[a.h.animationType];
                f = null == l ? 1 : l.h.frames[a.h.animationFrame / l.h.frameDelay % l.h.frames.length | 0];
                "" != a.h.variant && null != l.h.variants && null != js.Boot.__cast(l.h.variants, haxe.ds.StringMap).h[a.h.variant] && (f += Game.makeDynamicMap(js.Boot.__cast(l.h.variants, haxe.ds.StringMap).h[a.h.variant]).h.offset);
                this.currentFrame != f + (null != d.h.animationOffset ? d.h.animationOffset : 0) && this.gotoAndStop(f + (null != d.h.animationOffset ? d.h.animationOffset : 0));
            }
            this.movieX = a.h.x;
            this.movieY = a.h.y - .16666666666666666;
            this.scaleX = (a.h.direction ? -1 : 1) * (0 < a.h.babyTimer ? .7 : 1);
            this.scaleY = 0 < a.h.babyTimer ? .7 : 1;
            this.fire = Object.prototype.hasOwnProperty.call(this.world.onFire.h, b);
            this.nameTagBehavior();
            null != c.h.specialRendering && c.h.specialRendering(b);
            this.render();
        } else this.hasRendered && 0 != this.alpha && (this.alpha = 0, this.render());
    },
    nameTagBehavior: function () {
        "" != this.get_name() && 2 > Math.abs(this.game.mouseWorldPosition.x - this.get_x()) && 2 > Math.abs(this.game.mouseWorldPosition.y - this.get_y()) && 4 > Math.abs(this.game.mouseWorldPosition.x - this.world.worldX) && 4 > Math.abs(this.game.mouseWorldPosition.y - this.world.worldY) ? (this.showNametag = !0, this.nametagText = this.get_name()) : this.showNametag = !1;
    },
    gotoAndStop: function (b) {
        this.currentFrame = b;
    },
    render: function (b) {
        null == b && (b = 0);
        this.initMobEntity();
        entities.Entity_Base.prototype.render.call(this, b);
        this.showNametag && this.renderNametag();
        this.hasRendered = !0;
    },
    renderNametag: function () {
        var b = TextCache.get("nametag" + this.id + "shadow", this.nametagText, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-16777216), 1.375, lemongine.TextAlignment.CENTER, 1);
        b.transform.reset().scale2D(1.375 / this.game.zoom).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor((this.get_y() - 1 + js.Boot.__cast(this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.collisionBounds, lemongine.Rectangle).get_top()) * this.game.zoom) / this.game.zoom).translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale2D(this.game.zoom).translate(this.game.scene.get_width() / 2 + 1, this.game.scene.get_height() / 2 + 1);
        b.layer = 1;
        this.game.scene.draw(b);
        b = TextCache.get("nametag" + this.id, this.nametagText, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-1), 1.25, lemongine.TextAlignment.CENTER, 1);
        b.transform.reset().scale2D(1.375 / this.game.zoom).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor((this.get_y() - 1 + js.Boot.__cast(this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.collisionBounds, lemongine.Rectangle).get_top()) * this.game.zoom) / this.game.zoom).translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale2D(this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        b.layer = 1;
        this.game.scene.draw(b);
    },
    hideRendering: function () {
        for (var b = 0, a = this.quadPositions; b < a.length;) this.entity.updateQuad(a[b++], null, null, null, new lemongine.Point());
    },
    initMobEntity: function () {
        if (null == this.entity) {
            if (null == this.entityPool) {
                if (null == this.game.entityPools.h[this.entityPoolID]) {
                    var b = this.game.entityPools,
                        a = this.entityPoolID,
                        c = this.entityPoolID,
                        d = Textures.blockTextures,
                        f = shader.TwoTexture.getShader(shader.BlendMode.NORMAL),
                        l = new haxe.ds.StringMap(),
                        k = lemongine.Mathz.repeatArray([1], 6);
                    l.h.texBlend = k;
                    k = lemongine.Mathz.repeatArray([1], 24);
                    l.h.color = k;
                    k = lemongine.Mathz.repeatArray([0], 24);
                    l.h.colorOffset = k;
                    c = new EntityPool(c, new QuadPoolEntity_MatrixState(d, null, f, l), this.getEntityScale());
                    b.h[a] = c;
                    this.game.entityPools.h[this.entityPoolID].entity.isTransparent = !0;
                    this.game.entityPools.h[this.entityPoolID].entity.layer = 0;
                }
                this.entityPool = this.game.entityPools.h[this.entityPoolID];
            }
            this.entity = this.entityPool.entity;
            this.entity.forceNoCulling = !0;
            this.entity.setTextureBuffer("texture2", lemongine.AssetManager.getImage("mobs"));
            this.entity.setUniform("texSize2", [lemongine.AssetManager.getImage("mobs").width, lemongine.AssetManager.getImage("mobs").height]);
        }
    },
    mobCanBreed: function (b, a) {
        null == a && (a = "");
        return !this.world.mobData.h[this.world.mobs.h[b].h.type].h.canBreed || null != this.world.mobs.h[b].h.breedTimer && 0 != this.world.mobs.h[b].h.breedTimer || null != this.world.mobs.h[b].h.babyTimer && 0 < this.world.mobs.h[b].h.babyTimer || 1 == this.world.mobData.h[this.world.mobs.h[b].h.type].h.tameable && (!this.world.mobs.h[b].h.tamed || this.world.mobs.h[b].h.tamedBy != a || this.world.mobs.h[b].h.health < this.mobMaxHealth(b)) ? !1 : !0;
    },
    mobGetAlignment: function (b) {
        return null != this.world.mobs.h[b].h.aggro ? this.world.mobs.h[b].h.aggro : this.world.mobData.h[this.world.mobs.h[b].h.type].h.hostile ? "hostile" : this.world.mobData.h[this.world.mobs.h[b].h.type].h.neutral ? "neutral" : "passive";
    },
    mobCalculateTarget: function (b) {
        var a = this.world.mobs.h[b],
            c = this.world.mobData.h[a.h.type],
            d = this.world.mobTmpData.h[b];
        "passive" == this.mobGetAlignment(b) && !this.mobIsAggro(b) && (1 != c.h.doFrightenedRunning || Math.random() < 1 / (30 * Main.Instance.get_fps())) && (a.h.target = null, a.h.focus = null);
        if (a.h.target == this.world.player.id) 0 < this.world.dead && (a.h.target = null, a.h.aggressiveness = 0);else if (null == this.world.mobs.h[a.h.target] || 0 < this.world.mobs.h[a.h.target].h.dead) a.h.target = null, a.h.aggressiveness = 0;
        null != a.h.tamed && a.h.target == a.h.tamedBy && (a.h.target = null, a.h.aggressiveness = 0);
        3 == this.world.gamemode && (a.h.target == this.world.player.id && (a.h.target = null, a.h.aggressiveness = 0), a.h.focus == this.world.player.id && (a.h.focus = null));
        if (!(null == c.h.randomlyHostileTowards || c.h.tameable && a.h.tamed)) if (null == a.h.target) {
            if (Math.random() < c.h.randomlyHostileChance) {
                for (var f = "", l = 1E3, p = Object.keys(this.world.mobs.h), m = p.length, B = 0; B < m;) {
                    var x = p[B++];
                    1 == js.Boot.__cast(c.h.randomlyHostileTowards, haxe.ds.StringMap).h[this.world.mobs.h[x].h.type] && Math.pow(this.world.mobs.h[x].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[x].h.y - a.h.y, 2) < l && (l = Math.pow(this.world.mobs.h[x].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[x].h.y - a.h.y, 2), f = x);
                }
                "" != f && l < Math.pow(8, 2) && (a.h.target = f);
            }
        } else Math.random() < c.h.randomlyForgetHostility && a.h.target != this.world.player.id && js.Boot.__cast(c.h.randomlyHostileTowards, haxe.ds.StringMap).h[this.world.mobs.h[a.h.target].h.type] && (a.h.target = null);
        d.h.isFrightened = 1 == c.h.doFrightenedRunning && null != a.h.target;
        d.h.followMinDistance = .5;
        d.h.followMaxDistance = 12;
        d.h.followPoint = new lemongine.Point(0, 0);
        d.h.following = !1;
        d.h.teleportWhenAway = 0;
        f = !0;
        l = !1;
        if (this.mobIsAggro(b)) null == a.h.target ? 1 != this.world.gamemode && 3 != this.world.gamemode && (m = this.world.player.id, a.h.focus = m, a.h.target = m) : a.h.focus = a.h.target;else {
            if (0 < a.h.breedTimer) {
                if (null == this.world.mobs.h[a.h.breedTarget] || this.world.mobs.h[a.h.breedTarget].h.type != a.h.type || 0 == this.world.mobs.h[a.h.breedTarget].h.breedTimer || this.world.mobs.h[a.h.breedTarget].h.variant != a.h.variant || 0 < this.world.mobs.h[a.h.breedTarget].h.babyTimer || this.world.mobs.h[a.h.breedTarget].h.breedTarget != b && "" != this.world.mobs.h[a.h.breedTarget].h.breedTarget) for (a.h.breedTarget = "", m = Object.keys(this.world.mobs.h), B = m.length, x = 0; x < B;) if (p = m[x++], p != b && this.world.mobs.h[p].h.type == a.h.type && 0 != this.world.mobs.h[p].h.breedTimer && this.world.mobs.h[p].h.variant == a.h.variant && !(0 < this.world.mobs.h[p].h.babyTimer || this.world.mobs.h[p].h.breedTarget != b && "" != this.world.mobs.h[p].h.breedTarget || 25 < Math.pow(this.world.mobs.h[p].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[p].h.y - a.h.y, 2))) {
                    B = this.world.mobs.h[p];
                    m = 5 * Main.Instance.get_fps();
                    B.h.breedTimer = m;
                    m = 5 * Main.Instance.get_fps();
                    a.h.breedTimer = m;
                    this.world.mobs.h[p].h.breedTarget = b;
                    a.h.breedTarget = p;
                    break;
                }
                "" != a.h.breedTarget && (a.h.focus = a.h.breedTarget, l = !0);
            }
            l || null == c.h.followItems || (B = Game.makeDynamicMap(c.h.followItems), p = this.world.get_selectedInventoryItemType(), null != B.h[p] && 3 != this.world.gamemode && 49 > Math.pow(this.world.worldX - a.h.x, 2) + Math.pow(this.world.worldY - a.h.y, 2) && (a.h.focus = this.world.player.id, l = !0));
            if (!l && 0 < a.h.babyTimer && (l = !0, null != a.h.parents)) if (2 == a.h.parents.length) {
                if (null == this.world.mobs.h[a.h.parents[0]]) a.h.parents.shift();else if (null == this.world.mobs.h[a.h.parents[1]]) a.h.parents.pop();else if (p = Math.pow(this.world.mobs.h[a.h.parents[0]].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[a.h.parents[0]].h.y - a.h.y, 2), m = Math.pow(this.world.mobs.h[a.h.parents[1]].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[a.h.parents[1]].h.y - a.h.y, 2), p < m && ("wolf" != a.h.type || 0 == this.world.mobs.h[a.h.parents[0]].h.sitting)) l = !0, 64 > p && (a.h.focus = a.h.parents[0]);else {
                    if ("wolf" != a.h.type || 0 == this.world.mobs.h[a.h.parents[1]].h.sitting) l = !0, 64 > m && (a.h.focus = a.h.parents[1]);
                }
            } else if (1 == a.h.parents.length) {
                if (null == this.world.mobs.h[a.h.parents[0]]) a.h.parents.pop();else {
                    if ("wolf" != a.h.type || 0 == this.world.mobs.h[a.h.parents[0]].h.sitting) l = !0, 64 > Math.pow(this.world.mobs.h[a.h.parents[0]].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[a.h.parents[0]].h.y - a.h.y, 2) && (a.h.focus = a.h.parents[0]);
                }
            } else if (.02 > Math.random()) for (m = Object.keys(this.world.mobs.h), B = m.length, x = 0; x < B;) if (p = m[x++], p != b && this.world.mobs.h[p].h.type == a.h.type && this.world.mobs.h[p].h.variant == a.h.variant && !(25 < Math.pow(this.world.mobs.h[p].h.x - a.h.x, 2) + Math.pow(this.world.mobs.h[p].h.y - a.h.y, 2))) {
                a.h.parents.push(p);
                break;
            }
        }
        l || (1 == c.h.tameable && 1 == a.h.tamed ? null == a.h.target && (a.h.focus = a.h.tamedBy, f = !1, d.h.followMinDistance = 4, d.h.followMaxDistance = 20, a.h.sitting || (d.h.teleportWhenAway = 20)) : "hostile" != this.mobGetAlignment(b) && 0 >= a.h.aggressiveness && (a.h.focus = null));
        a.h.focus == this.world.player.id ? (f && (d.h.followMinDistance *= this.game.visibility, d.h.followMaxDistance *= this.game.visibility), b = this.world.worldX, c = (this.mobCollisionBounds(this.world.player.id).get_left() + this.mobCollisionBounds(this.world.player.id).get_right()) / 2, d.h.followPoint.x = b + c, b = this.world.worldY, c = (this.mobCollisionBounds(this.world.player.id).get_top() + this.mobCollisionBounds(this.world.player.id).get_bottom()) / 2, d.h.followPoint.y = b + c, d.h.following = !0) : null != a.h.focus && null != this.world.mobs.h[a.h.focus] && (f && (b = d.h.followMinDistance, m = null != this.game.getMob(a.h.focus).get_effects().h.invisibility ? 0 : 1, d.h.followMinDistance = b * m, b = d.h.followMaxDistance, m = null != this.game.getMob(a.h.focus).get_effects().h.invisibility ? 0 : 1, d.h.followMaxDistance = b * m), b = this.world.mobs.h[a.h.focus].h.x, c = (this.mobCollisionBounds(a.h.focus).get_left() + this.mobCollisionBounds(a.h.focus).get_right()) / 2, d.h.followPoint.x = b + c, b = this.world.mobs.h[a.h.focus].h.y, c = (this.mobCollisionBounds(a.h.focus).get_top() + this.mobCollisionBounds(a.h.focus).get_bottom()) / 2, d.h.followPoint.y = b + c, d.h.following = !0);
    },
    mobIsAggro: function (b) {
        if (null == this.world.mobs.h[b]) return !1;
        var a = this.world.mobs.h[b],
            c = this.world.mobData.h[a.h.type];
        return "hostile" == this.mobGetAlignment(b) || 0 < a.h.aggressiveness || 1 == c.h.hostileOnFire && Object.prototype.hasOwnProperty.call(this.world.onFire.h, b) || null != c.h.randomlyHostileTowards && null != this.world.mobs.h[a.h.target] && 1 == js.Boot.__cast(c.h.randomlyHostileTowards, haxe.ds.StringMap).h[this.world.mobs.h[a.h.target].h.type] ? !0 : !1;
    },
    mobCollision: function (b, a) {
        return this.mobBounds(b).intersects(this.mobBounds(a));
    },
    mobCollisionPoint: function (b, a) {
        return this.mobBounds(b).containsPoint(a);
    },
    mobCollisionRectangle: function (b, a) {
        return this.mobBounds(b).intersects(a);
    },
    mobBounds: function (b) {
        if ((null == this.world.mobs.h[b] || null == this.world.mobData.h[this.world.mobs.h[b].h.type]) && b != this.world.player.id) return new lemongine.Rectangle();
        if (b == this.world.player.id) {
            var a = js.Boot.__cast(this.world.mobData.h.player.h.collisionBounds, lemongine.Rectangle).clone();
            a.translate(this.world.worldX, this.world.worldY);
        } else a = js.Boot.__cast(this.world.mobData.h[this.world.mobs.h[b].h.type].h.collisionBounds, lemongine.Rectangle).clone(), a.translate(this.world.mobs.h[b].h.x, this.world.mobs.h[b].h.y);
        return a;
    },
    mobCollisionBounds: function (b) {
        if ((null == this.world.mobs.h[b] || null == this.world.mobData.h[this.world.mobs.h[b].h.type]) && b != this.world.player.id) return new lemongine.Rectangle();
        if (b == this.world.player.id) var a = js.Boot.__cast(this.world.mobData.h.player.h.collisionBounds, lemongine.Rectangle).clone();else a = js.Boot.__cast(this.world.mobData.h[this.world.mobs.h[b].h.type].h.collisionBounds, lemongine.Rectangle).clone(), 0 < this.world.mobs.h[b].h.babyTimer && a.set(.7 * a.x, .7 * a.y, .7 * a.width, .7 * a.height);
        return a;
    },
    mobPosition: function (b) {
        return b == this.world.player.id ? new lemongine.Point(this.world.worldX, this.world.worldY) : null != this.world.mobs.h[b] ? new lemongine.Point(this.world.mobs.h[b].h.x, this.world.mobs.h[b].h.y) : new lemongine.Point(0, 0);
    },
    mobMaxHealth: function (b) {
        return null != this.world.mobData.h[this.world.mobs.h[b].h.type].h.healthFunction ? this.world.mobData.h[this.world.mobs.h[b].h.type].h.healthFunction(b) : this.world.mobData.h[this.world.mobs.h[b].h.type].h.health;
    },
    mobAttack: function (b) {
        var a = this.world.mobs.h[b],
            c = this.world.mobData.h[a.h.type],
            d = new lemongine.Point(0, -1E4),
            f = !1;
        if (this.mobIsAggro(b) && (!a.h.tamed || !a.h.sitting)) {
            var l = (null == a.h.target && 1 != this.world.gamemode || a.h.target == this.world.player.id) && 3 != this.world.gamemode,
                p = null != a.h.target && null != this.world.mobs.h[a.h.target];
            if (l) {
                if (1 == c.h.attackContact && this.mobCollision(b, this.world.player.id) && ("slime" != a.h.type || 1 < a.h.size)) if (a.h.attackCooldown = c.h.attackFrequency, this.world.mobTmpData.h[b].h.miningAnimation = !0, this.world.mobTmpData.h[b].h.stopMiningAnimation = !0, 0 < this.game.visibility && (f = null != a.h.attackDamage ? a.h.attackDamage : null != c.h.attackDamage ? c.h.attackDamage : 2, f += null != this.game.getMob(b).get_effects().h.strength ? Game.makeDynamicMap(this.game.getMob(b).get_effects().h.strength).h.level * Game.makeDynamicMap(this.game.effectData.h.strength).h.perLevel : 0, f += null != this.game.getMob(b).get_effects().h.weakness ? Game.makeDynamicMap(this.game.getMob(b).get_effects().h.weakness).h.level * Game.makeDynamicMap(this.game.effectData.h.weakness).h.perLevel : 0, this.game.ouch(1, Math.max(1, f), "attack")), null != Game.makeDynamicMap(this.world.armorsAsItem(1)[3]).h.thorns1) {
                    this.game.getMob(b).hurtMob(b, 2, "attack", this.world.player.id);
                    var n = a.h.speedX + Game.migrateSpeed(11 * Math.random() - 5);
                    a.h.speedX = n;
                    this.get_keys().h.up = !0;
                    a.h.target = this.world.player.id;
                } else null != Game.makeDynamicMap(this.world.armorsAsItem(1)[3]).h.thorns2 ? (this.game.getMob(b).hurtMob(b, 4, "attack", this.world.player.id), n = a.h.speedX + Game.migrateSpeed(19 * Math.random() - 9), a.h.speedX = n, this.get_keys().h.up = !0, a.h.target = this.world.player.id) : null != Game.makeDynamicMap(this.world.armorsAsItem(1)[3]).h.thorns3 && (this.game.getMob(b).hurtMob(b, 6, "attack", this.world.player.id), n = a.h.speedX + Game.migrateSpeed(27 * Math.random() - 13), a.h.speedX = n, this.get_keys().h.up = !0, a.h.target = this.world.player.id);
                f = !0;
                d.x = this.world.worldX;
                d.y = this.world.worldY;
            } else p && (1 == c.h.attackContact && this.mobCollision(b, a.h.target) && (a.h.attackCooldown = this.world.mobData.h[a.h.type].h.attackFrequency, f = null != a.h.attackDamage ? a.h.attackDamage : null != c.h.attackDamage ? c.h.attackDamage : 2, f += null != this.game.getMob(b).get_effects().h.strength ? Game.makeDynamicMap(this.game.getMob(b).get_effects().h.strength).h.level * Game.makeDynamicMap(this.game.effectData.h.strength).h.perLevel : 0, f += null != this.game.getMob(b).get_effects().h.weakness ? Game.makeDynamicMap(this.game.getMob(b).get_effects().h.weakness).h.level * Game.makeDynamicMap(this.game.effectData.h.weakness).h.perLevel : 0, this.game.getMob(a.h.target).hurtMob(a.h.target, f, "attack", b)), f = !0, d.x = this.world.mobs.h[a.h.target].h.x, d.y = this.world.mobs.h[a.h.target].h.y);
            var m = Math.sqrt(Math.pow(d.x - a.h.x, 2) + Math.pow(d.y - a.h.y, 2)),
                x = 10;
            l ? x *= this.game.visibility : p && (l = this.game.getMob(a.h.focus), null != l && (x *= null != l.get_effects().h.invisibility ? 0 : 1));
            if (1 == c.h.attackBow) if (f && m < x) {
                var t = Math.atan2(d.y - Math.abs(d.x - a.h.x) / 5 - a.h.y, d.x - a.h.x) + (2 * Math.random() - 1) / 20;
                l = this.world.arrows;
                p = Game.uniqueID(this.world.arrows, "arrow");
                n = new haxe.ds.StringMap();
                n.h.x = a.h.x;
                n.h.y = a.h.y - 1.5;
                n.h.speedX = Game.migrateSpeed(20 * Math.cos(t));
                n.h.speedY = Game.migrateSpeed(20 * Math.sin(t));
                n.h.rotation = Math.PI;
                n.h.timer = 0;
                n.h.cooldown = 10;
                n.h.shotBy = b;
                l.h[p] = Game.makeDynamicMap(n);
                this.game.requestSound("bowsfx", a.h.x - this.world.worldX, a.h.y - this.world.worldY);
                a.h.attackCooldown = this.world.mobData.h[a.h.type].h.attackFrequency;
            } else a.h.attackCooldown = -30;
            1 == c.h.attackSnowball && (f && m < x ? (t = Math.atan2(d.y - Math.abs(d.x - a.h.x) / 5 - a.h.y, d.x - a.h.x) + (2 * Math.random() - 1) / 20, l = this.world.snowballs, p = Game.uniqueID(this.world.snowballs, "snowball"), n = new haxe.ds.StringMap(), n.h.x = a.h.x, n.h.y = a.h.y - 1.5, n.h.speedX = Game.migrateSpeed(20 * Math.cos(t)), n.h.speedY = Game.migrateSpeed(20 * Math.sin(t)), n.h.rotation = Math.PI, n.h.timer = 0, n.h.cooldown = 10, n.h.shotBy = b, l.h[p] = Game.makeDynamicMap(n), this.game.requestSound("throwsfx", a.h.x - this.world.worldX, a.h.y - this.world.worldY), a.h.attackCooldown = this.world.mobData.h[a.h.type].h.attackFrequency) : a.h.attackCooldown = -30);
            1 == c.h.attackTripleCharge && (f && m < x ? (-30 != a.h.attackCooldown && Object.prototype.hasOwnProperty.call(this.world.onFire.h, b) && 0 == -a.h.attackCooldown % 20 && (t = Math.atan2(d.y - a.h.y, d.x - a.h.x) + 15 * Math.random() / 180 * Math.PI, l = this.world.fireballs, p = Game.uniqueID(this.world.fireballs, "fireball"), n = new haxe.ds.StringMap(), n.h.x = a.h.x + Math.cos(t), n.h.y = a.h.y - 1 + Math.sin(t), n.h.speedX = Game.migrateSpeed(9 * Math.cos(t)), n.h.speedY = Game.migrateSpeed(9 * Math.sin(t)), n.h.shotBy = b, n.h.flame = !0, n.h.cooldown = 10, l.h[p] = Game.makeDynamicMap(n), this.game.requestSound("firethrow", a.h.x - this.world.worldX, a.h.y - this.world.worldY)), -30 >= a.h.attackCooldown ? (n = this.world.mobData.h[a.h.type].h.attackFrequency * (Math.random() - .5) | 0, a.h.attackCooldown = n) : --a.h.attackCooldown) : a.h.attackCooldown = -30);
            1 == c.h.attackCharge && (f && m < x ? (-30 != a.h.attackCooldown && (t = Math.atan2(d.y - a.h.y, d.x - a.h.x) + 5 * Math.random() / 180 * Math.PI, l = this.world.fireballs, p = Game.uniqueID(this.world.fireballs, "fireball"), n = new haxe.ds.StringMap(), n.h.x = a.h.x + 3 * Math.cos(t), n.h.y = a.h.y - 2 + 3 * Math.sin(t), n.h.speedX = Game.migrateSpeed(9 * Math.cos(t)), n.h.speedY = Game.migrateSpeed(9 * Math.sin(t)), n.h.shotBy = b, n.h.flame = !0, n.h.cooldown = 10, l.h[p] = Game.makeDynamicMap(n), this.game.requestSound("firethrow", a.h.x - this.world.worldX, a.h.y - this.world.worldY)), a.h.attackCooldown = this.world.mobData.h[a.h.type].h.attackFrequency) : a.h.attackCooldown = -30);
        }
    },
    shearMob: function (b) {
        if (null == this.world.mobs.h[b]) return !1;
        var a = this.world.mobs.h[b];
        if (0 < a.h.dead) return !1;
        if ("sheep" == a.h.type) {
            if (0 < a.h.babyTimer) return !1;
            null != this.get_armor()[0] && "MustacheCap" == this.get_armor()[0][0] && 1 <= this.get_armor()[0][1] && (this.game.addDrop("MustacheCap", a.h.x, a.h.y, 1, null, null), this.game.addParticles("shockwave", 1, 5, new lemongine.Point(a.h.x - Math.random() / 2, 1), new lemongine.Point(a.h.y - Math.random() / 2, 1)), this.get_armor()[0] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]));
            a.h.sheared = !0;
            b = this.game;
            var c = a.h.x,
                d = a.h.y,
                f = 2 * Math.random() + 1 | 0,
                l = new haxe.ds.StringMap();
            l.h.type = a.h.color;
            b.addDrop("cloth", c, d, f, null, Game.makeDynamicMap(l));
            return !0;
        }
        if ("cow" == a.h.type) {
            if (0 < a.h.babyTimer) return !1;
            "mooshroom" == a.h.variant ? (this.game.addDrop("ms1", a.h.x, a.h.y, 3 * Math.random() + 1 | 0, null, null), this.game.addDrop("ms2", a.h.x, a.h.y, 2 * Math.random() + 2 + Math.random() * (this.world.mobTmpData.h[b].h.loot + 1) | 0, null, null), this.game.addParticles("shockwave", 1, 5, new lemongine.Point(a.h.x - Math.random() / 2, 1), new lemongine.Point(a.h.y - Math.random() / 2, 1)), a.h.variant = "") : "cowctus" == a.h.variant && (this.game.addDrop("ct", a.h.x, a.h.y, 3 * Math.random() + 2 + Math.random() * (this.world.mobTmpData.h[b].h.loot + 1) | 0, null, null), this.game.addParticles("shockwave", 1, 5, new lemongine.Point(a.h.x - Math.random() / 2, 1), new lemongine.Point(a.h.y - Math.random() / 2, 1)), a.h.variant = "");
            return !0;
        }
        return !1;
    },
    hurtMob: function (b, a, c, d) {
        null == d && (d = "");
        null == c && (c = "");
        var f = this.world.mobData.h[this.world.mobs.h[b].h.type],
            l = this.world.mobs.h[b];
        if (!(0 < l.h.dead)) {
            if (isNaN(l.h.health)) {
                var k = this.mobMaxHealth(b);
                l.h.health = k;
            }
            if (null == f || null == f.h.specialOnHit || 0 != f.h.specialOnHit(b, a, c, d)) {
                if ("anvil" == c || "fall" == c || "lava" == c || "acid" == c || "explosion" == c || "fire" == c || "lightning" == c || "attack" == c || "arrow" == c || "cactus" == c) {
                    if (("fire" == c || "lava" == c || "lightning" == c) && null != this.game.getMob(b).get_effects().h.fireresistance) return;
                    k = 0;
                    for (var m, B = 0, x = this.get_armor().length; B < x;) {
                        m = B++;
                        var t = 0;
                        if (null != this.get_armor()[m]) {
                            if ("anvil" == c && 0 == m) "Leather" == this.get_armor()[m][0].substr(0, 7) ? a *= .8 : "Gold" == this.get_armor()[m][0].substr(0, 4) ? a *= .6 : "Iron" == this.get_armor()[m][0].substr(0, 4) ? a *= .4 : "Diamond" == this.get_armor()[m][0].substr(0, 7) ? a *= .3 : "Dragon" == this.get_armor()[m][0].substr(0, 6) && (a *= .2);else if ("hunger" != c && "void" != c) {
                                this.getArmorExtras(m).h.protection1 ? t = .02 : this.getArmorExtras(m).h.protection2 ? t = .035 : this.getArmorExtras(m).h.protection3 ? t = .05 : this.getArmorExtras(m).h.protection4 && (t = .065);
                                this.getArmorExtras(m).h.protection5 && (t += .08);
                                if ("lava" == c || "fire" == c || "lightning" == c) this.getArmorExtras(m).h.protectionFire1 ? t += .04 : this.getArmorExtras(m).h.protectionFire2 ? t += .055 : this.getArmorExtras(m).h.protectionFire3 && (t += .07);
                                "explosion" == c && (this.getArmorExtras(m).h.protectionBlast1 ? t += .04 : this.getArmorExtras(m).h.protectionBlast2 ? t += .055 : this.getArmorExtras(m).h.protectionBlast3 && (t += .07));
                                "arrow" == c && (this.getArmorExtras(m).h.protectionProjectile1 ? t += .04 : this.getArmorExtras(m).h.protectionProjectile2 ? t += .055 : this.getArmorExtras(m).h.protectionProjectile3 && (t += .07));
                                "fall" == c && (this.getArmorExtras(m).h.protectionFalling1 ? t += .09 : this.getArmorExtras(m).h.protectionFalling2 ? t += .12 : this.getArmorExtras(m).h.protectionFalling3 && (t += .16));
                            }
                            "anvil" != c && null != BlockData.get(this.get_armor()[m][0], "life") && this.get_armor()[m][2] <= BlockData.get(this.get_armor()[m][0], "life") && ("Leather" == this.get_armor()[m][0].substr(0, 7) ? (m = a * (Math.random() * (.02 + t) + .07), k += m) : "Gold" == this.get_armor()[m][0].substr(0, 4) ? (m = a * (Math.random() * (.04 + t) + .1), k += m) : "Iron" == this.get_armor()[m][0].substr(0, 4) ? (m = a * (Math.random() * (.05 + t) + .13), k += m) : "Diamond" == this.get_armor()[m][0].substr(0, 7) ? (m = a * (Math.random() * (.07 + t) + .15), k += m) : "Dragon" == this.get_armor()[m][0].substr(0, 6) && (m = a * (Math.random() * (.09 + t) + .15), k = "fire" == c || "lightning" == c || "lava" == c ? k + Math.pow(Math.random(), 3) * m : k + m));
                        }
                    }
                    a -= Math.round(k);
                }
                l.h.health = Math.round(l.h.health - a);
                0 < a && null != this.get_sounds().h.hurt && this.game.requestSound(this.get_sounds().h.hurt[Math.random() * this.get_sounds().h.hurt.length | 0], l.h.x - this.world.worldX, l.h.y - this.world.worldY, 1, 1, 0 < l.h.babyTimer ? 1.3 : 1);
                "" != c && "" != d && (l.h.lastDamageType = c, l.h.lastDamageID = d, l.h.ticksSinceLastDamageID = 0);
                if (("attack" == c || "projectile" == c && (d == this.world.player.id || null != this.world.mobs.h[d])) && d != b) {
                    l.h.target = d;
                    if (null != f && f.h.groupAttack && (1 != l.h.tamed || l.h.tamedBy != d)) for (a = Object.keys(this.world.mobs.h), B = a.length, x = 0; x < B;) k = a[x++], this.world.mobs.h[k].h.type == l.h.type && 1 != this.world.mobs.h[k].h.tamed && this.world.mobs.h[k].h.tamedBy != d && (m = 1, "attack" == c && d == this.world.player.id && (m = this.game.visibility, "mh" == this.world.armors[0][0] && Game.makeDynamicMap(this.world.armors[0][2]).h.type == l.h.type && (m *= .5)), Math.abs(l.h.x - this.world.mobs.h[k].h.x) < 15 * m && Math.abs(l.h.y - this.world.mobs.h[k].h.y) < 9 * m && (this.world.mobs.h[k].h.target = l.h.target, m = this.world.mobs.h[k], k = Math.random() * Main.Instance.get_fps() * 50 + 100 * Main.Instance.get_fps(), m.h.aggressiveness = k));
                    "passive" != this.mobGetAlignment(b) && (k = Math.random() * Main.Instance.get_fps() * 50 + 100 * Main.Instance.get_fps(), l.h.aggressiveness = k);
                }
                0 < l.h.health ? null != f && 1 == f.h.teleports && Math.random() < (null != f.h.teleportOnDamageChance ? f.h.teleportOnDamageChance : 0) && this.teleportMob() : "explosion" != c || null == this.world.mobs.h[d] || d == b || "creeper" != this.world.mobs.h[d].h.type || 1 != this.world.mobs.h[d].h.charged || "zombie" != this.world.mobs.h[b].h.type && "skeleton" != this.world.mobs.h[b].h.type && "creeper" != this.world.mobs.h[b].h.type || (null == this.world.mobs.h[b].h.drops && (m = this.world.mobs.h[b], k = [], m.h.drops = k), c = js.Boot.__cast(this.world.mobs.h[b].h.drops, Array), B = new haxe.ds.StringMap(), B.h.quantity = 1, B.h.type = "mh", x = new haxe.ds.StringMap(), x.h.type = this.world.mobs.h[b].h.type, B.h.extras = Game.makeDynamicMap(x), c.push(Game.makeDynamicMap(B)));
                null != this.world.mobTmpData.h[b] && (this.world.mobTmpData.h[b].h.hurtAnimation = 10);
                .3333333333333333 > Math.random() && (this.get_keys().h.up = !0);
            }
        }
    },
    killMob: function (b) {
        if (null != this.world.mobs.h[b]) {
            var a = this.world.mobs.h[b],
                c = this.world.mobTmpData.h[b],
                d = this.world.mobData.h[a.h.type];
            if (this.game.getGameRule("domobloot")) {
                c.h.loot = 0;
                var f = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(f.h, "looting1") && (c.h.loot = .3333333333333333);
                f = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(f.h, "looting2") && (c.h.loot = .6666666666666666);
                f = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(f.h, "looting3") && (c.h.loot = 1);
                f = [];
                0 != a.h.defaultDrops && (f = f.concat(d.h.drops));
                null != a.h.drops && (f = f.concat(a.h.drops));
                var l = {};
                l[0] = Math.random();
                for (var k = f.length - 1; 0 <= k;) {
                    var n = f[k];
                    if (1 == n.h.onFire) {
                        if (!Object.prototype.hasOwnProperty.call(this.world.onFire.h, b)) {
                            --k;
                            continue;
                        }
                    } else if (null != n.h.onFire && 0 == n.h.onFire && Object.prototype.hasOwnProperty.call(this.world.onFire.h, b)) {
                        --k;
                        continue;
                    }
                    if (null != n.h.properties) {
                        for (var m = !1, x = Object.keys(Game.makeDynamicMap(n.h.properties).h), t = x.length, w = 0; w < t;) {
                            var q = x[w++];
                            if ("==" == Game.makeDynamicMap(n.h.properties).h[q][0]) {
                                if (a.h[q] != Game.makeDynamicMap(n.h.properties).h[q][1]) {
                                    m = !0;
                                    break;
                                }
                            } else if ("!=" == Game.makeDynamicMap(n.h.properties).h[q][0]) {
                                if (a.h[q] == Game.makeDynamicMap(n.h.properties).h[q][1]) {
                                    m = !0;
                                    break;
                                }
                            } else if (">=" == Game.makeDynamicMap(n.h.properties).h[q][0]) {
                                if (parseFloat(a.h[q]) < Game.makeDynamicMap(n.h.properties).h[q][1]) {
                                    m = !0;
                                    break;
                                }
                            } else if (">" == Game.makeDynamicMap(n.h.properties).h[q][0]) {
                                if (parseFloat(a.h[q]) <= Game.makeDynamicMap(n.h.properties).h[q][1]) {
                                    m = !0;
                                    break;
                                }
                            } else if ("<=" == Game.makeDynamicMap(n.h.properties).h[q][0]) {
                                if (parseFloat(a.h[q]) > Game.makeDynamicMap(n.h.properties).h[q][1]) {
                                    m = !0;
                                    break;
                                }
                            } else if ("<" == Game.makeDynamicMap(n.h.properties).h[q][0] && parseFloat(a.h[q]) >= Game.makeDynamicMap(n.h.properties).h[q][1]) {
                                m = !0;
                                break;
                            }
                        }
                        if (m) {
                            --k;
                            continue;
                        }
                    }
                    if (!(1 == n.h.isBaby != 0 < a.h.babyTimer || null != n.h.isVariant && (a.h.variant != n.h.isVariant || "" == a.h.variant && "normal" == n.h.isVariant) || null != n.h.isDimension && this.world.sceneNum != n.h.isDimension || null != n.h.isSheared && a.h.sheared != n.h.isSheared)) {
                        if (null != n.h.rare && (m = 0, null != Game.makeDynamicMap(n.h.rare).h.randomNum && (m = Game.makeDynamicMap(n.h.rare).h.randomNum, null == l[m] && (l[m] = Math.random())), l[m] * (1 - Game.makeDynamicMap(n.h.rare).h.lootingBonusChances * c.h.loot) < Game.makeDynamicMap(n.h.rare).h.lowerBound || l[m] * (1 - Game.makeDynamicMap(n.h.rare).h.lootingBonusChances * c.h.loot) >= Game.makeDynamicMap(n.h.rare).h.upperBound)) {
                            --k;
                            continue;
                        }
                        m = n.h.quantity;
                        null != n.h.randomBonus && (m += Math.random() * (n.h.randomBonus + 1) | 0);
                        null != n.h.lootBonus && (m += (.6 * Math.random() + .4) * c.h.loot * (n.h.lootBonus + 1) | 0);
                        x = null != n.h.extras ? lemongine.Helpers.clone(n.h.extras) : new haxe.ds.StringMap();
                        n.h.setColor && (x.h.type = a.h.color);
                        this.game.addDrop(n.h.type, a.h.x, a.h.y, m, null != n.h.damage ? n.h.damage : 0, x);
                    }
                    --k;
                }
                !Game.isEmptyItem(a.h.handItems[0]) && Math.random() < a.h.handDropChances[0] + .01 * c.h.loot && ("wd1" == a.h.handItems[0][0] && (a.h.handItems[0][0] = "wd"), this.game.addDrop(a.h.handItems[0][0], a.h.x, a.h.y, a.h.handItems[0][1], a.h.handItems[0][2], a.h.handItems[0][3]));
                !Game.isEmptyItem(a.h.handItems[1]) && Math.random() < a.h.handDropChances[1] + .01 * c.h.loot && ("wd1" == a.h.handItems[1][0] && (a.h.handItems[1][0] = "wd"), this.game.addDrop(a.h.handItems[1][0], a.h.x, a.h.y, a.h.handItems[1][1], a.h.handItems[1][2], a.h.handItems[1][3]));
                !Game.isEmptyItem(this.get_armor()[0]) && Math.random() < a.h.armorDropChances[0] + .01 * c.h.loot && this.game.addDrop(this.get_armor()[0][0], a.h.x, a.h.y, this.get_armor()[0][1], this.get_armor()[0][2], this.get_armor()[0][3]);
                !Game.isEmptyItem(this.get_armor()[1]) && Math.random() < a.h.armorDropChances[1] + .01 * c.h.loot && this.game.addDrop(this.get_armor()[1][0], a.h.x, a.h.y, this.get_armor()[1][1], this.get_armor()[1][2], this.get_armor()[1][3]);
                !Game.isEmptyItem(this.get_armor()[2]) && Math.random() < a.h.armorDropChances[2] + .01 * c.h.loot && this.game.addDrop(this.get_armor()[2][0], a.h.x, a.h.y, this.get_armor()[2][1], this.get_armor()[2][2], this.get_armor()[2][3]);
                !Game.isEmptyItem(this.get_armor()[3]) && Math.random() < a.h.armorDropChances[3] + .01 * c.h.loot && this.game.addDrop(this.get_armor()[3][0], a.h.x, a.h.y, this.get_armor()[3][1], this.get_armor()[3][2], this.get_armor()[3][3]);
                Game.isEmptyItem(a.h.saddleItem) || this.game.addDrop(a.h.saddleItem[0], a.h.x, a.h.y, a.h.saddleItem[1], a.h.saddleItem[2], a.h.saddleItem[3]);
            }
            null != this.get_sounds().h.death && this.game.requestSound(this.get_sounds().h.death[Math.random() * this.get_sounds().h.death.length | 0], a.h.x - this.world.worldX, a.h.y - this.world.worldY, 1, 1, 0 < a.h.babyTimer ? 1.3 : 1);
            if (a.h.lastDamageID == this.world.player.id || null != this.world.mobs.h[a.h.lastDamageID] && "wolf" == this.world.mobs.h[a.h.lastDamageID].h.type && this.world.mobs.h[a.h.lastDamageID].h.tamed) if (this.game.dropXP(a.h.x, a.h.y, d.h.xp), 0 >= a.h.health) switch (a.h.type) {
            case "blaze":
                this.game.unlockAchieve(19);
                break;
            case "chicken":
                Object.prototype.hasOwnProperty.call(this.world.onFire.h, b) && this.game.unlockAchieve(22);
                break;
            case "cow":
                "" == a.h.variant && this.game.unlockAchieve(13);
                break;
            case "creeper":
                this.game.unlockAchieve(21);
                break;
            case "enderman":
                this.game.unlockAchieve(20);
                break;
            case "magmacube":
                this.game.unlockAchieve(38);
                break;
            case "nethereye":
                this.game.unlockAchieve(18);
                break;
            case "pig":
                this.game.unlockAchieve(12);
                break;
            case "sheep":
                this.game.unlockAchieve(14);
                break;
            case "skeleton":
                this.game.unlockAchieve(16);
                break;
            case "slime":
                this.game.unlockAchieve(37);
                break;
            case "spider":
                this.game.unlockAchieve(17);
                break;
            case "zombie":
                this.game.unlockAchieve(15);
                break;
            case "zombiepigman":
                this.game.unlockAchieve(41);
            }
            null != d.h.specialDeath && d.h.specialDeath(b);
            if (null == a.h.dead || 0 == a.h.dead) a.h.dead = 1;
        }
    },
    teleportMob: function (b, a, c, d, f) {
        null == f && (f = !1);
        null == d && (d = !0);
        null == c && (c = 5);
        null == a && (a = -1);
        var g = this.world.mobs.h[this.id],
            k = this.id == this.world.player.id ? this.world.mobData.h.player : this.world.mobData.h[g.h.type];
        this.id == this.world.player.id && 0 > a && (a = 10);
        if (0 <= a) var h = a;else null == g.h.teleportDistance && (g.h.teleportDistance = 10), h = g.h.teleportDistance;
        k = k.h.sizeCategory;
        c = null != b ? entities.Entity_Mob.findSpawnArea("none", k, !1, b.x, b.y, h - c, h + c) : this.id == this.world.player.id ? entities.Entity_Mob.findSpawnArea("none", k, !1, this.world.worldX, this.world.worldY, h - c, h + c) : entities.Entity_Mob.findSpawnArea("none", k, !1, g.h.x, g.h.y, h - c, h + c);
        0 > a && (g.h.teleportDistance += 5);
        if (null != c) return d && Main.Instance.game.requestSound("tp1", g.h.x - this.world.worldX, g.h.y - this.world.worldY), this.id == this.world.player.id ? (this.world.worldX = c[0], this.world.worldY = -1 * c[1]) : (g.h.x = c[0], g.h.y = -1 * c[1]), d && Main.Instance.game.requestSound("tp2", g.h.x - this.world.worldX, g.h.y - this.world.worldY), !0;
        f && (this.id == this.world.player.id ? (this.world.worldX = b.x, this.world.worldY = b.y) : (g.h.x = b.x, g.h.y = b.y));
        return !1;
    },
    mobRiding: function (b) {
        var a = this.world.mobs.h[b];
        a.h.riddenBy == this.world.player.id ? this.world.riding != b ? a.h.riddenBy = null : (this.world.worldX = a.h.x, this.world.worldY = a.h.y - .43333333333333335, this.game.resetCamera(), "pig" == a.h.type && "coas" == this.world.get_selectedInventoryItemType() && (0 > this.game.characterXScale && (this.get_keys().h.left = !1, this.get_keys().h.right = !0), 0 < this.game.characterXScale && (this.get_keys().h.left = !0, this.get_keys().h.right = !1), G.gt(Main.Instance.keyDown(GlobalSave.intToKey.h[GlobalSave.keyBindings.h.down.h.id]), 0) && (b = this.get_keys(), this.get_keys().h.right = !1, b.h.left = !1), .03333333333333333 > Math.random() && (this.game.damageTool(), "air" == this.world.get_selectedInventoryItemType() && this.world.setInventoryItem(this.world.selectedInventoryItem, Game.item("fr", 1, 0, new haxe.ds.StringMap())))), this.game.upKey && (this.world.xSpeed = .7 * a.h.speedX, this.world.ySpeed = a.h.speedY, this.world.riding = "", a.h.riddenBy = null)) : this.world.riding == b && (this.world.riding = "");
    },
    setMobTmpData: function (b) {
        var a = new haxe.ds.StringMap();
        a.h.loot = 0;
        a.h.distanceX = 0;
        a.h.wasFallingAndNotFalling = 0;
        a.h.inWater = !1;
        this.world.mobTmpData.h[b] = Game.makeDynamicMap(a);
        a = Object.keys(this.world.mobData.h[this.world.mobs.h[b].h.type].h);
        for (var c = a.length, d = 0; d < c;) {
            var f = a[d++];
            this.world.mobTmpData.h[b].h[f] = Game.makeDynamicMap(this.world.mobData.h[this.world.mobs.h[b].h.type].h.mobTmpData).h[f];
        }
    },
    removeMob: function (b) {
        this.world.setMobNum(this.world.mobs.h[b].h.type.toLowerCase(), -1);
        this.game.removeEntity(b, this.world.mobs);
        var a = this.world.mobTmpData;
        Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
    },
    getRotD: function (b, a, c) {
        for (; 180 < b;) b -= 360;
        for (; -180 > b;) b += 360;
        for (; 180 < a;) a -= 360;
        for (; -180 > a;) a += 360;
        return 0 < b && a < b - 180 ? (.1 == c && (c = (180 - b + (180 + a)) / 4), a - c) : 0 > b && a > b + 180 ? (.1 == c && (c = (180 + b + (180 - a)) / 4), a + c) : .1 == c && Math.abs(a - b) > Math.abs(a - b) / 4 ? a + (b - a) / Math.abs(b - a) * Math.abs(a - b) / 4 : Math.abs(a - b) > c ? a + (b - a) / Math.abs(b - a) * c : b;
    },
    get_x: function () {
        return this.world.mobs.h[this.id].h.x;
    },
    get_y: function () {
        return this.world.mobs.h[this.id].h.y;
    },
    get_speedX: function () {
        return this.world.mobs.h[this.id].h.speedX;
    },
    set_speedX: function (b) {
        return this.world.mobs.h[this.id].h.speedX = b;
    },
    get_speedY: function () {
        return this.world.mobs.h[this.id].h.speedY;
    },
    set_speedY: function (b) {
        return this.world.mobs.h[this.id].h.speedY = b;
    },
    get_name: function () {
        return null == this.world.mobs.h[this.id].h.name ? "" : this.world.mobs.h[this.id].h.name;
    },
    get_keys: function () {
        null == this.world.mobs.h[this.id].h.keys && (this.world.mobs.h[this.id].h.keys = new haxe.ds.StringMap());
        return this.world.mobs.h[this.id].h.keys;
    },
    get_effects: function () {
        null == this.world.mobs.h[this.id].h.effects && (this.world.mobs.h[this.id].h.effects = new haxe.ds.StringMap());
        return this.world.mobs.h[this.id].h.effects;
    },
    get_armor: function () {
        null == this.world.mobs.h[this.id].h.armor && (this.world.mobs.h[this.id].h.armor = [Game.emptyItem(), Game.emptyItem(), Game.emptyItem(), Game.emptyItem()]);
        return this.world.mobs.h[this.id].h.armor;
    },
    getArmorExtras: function (b) {
        return null == this.get_armor()[b] ? new haxe.ds.StringMap() : this.get_armor()[b][3];
    },
    get_sounds: function () {
        null == this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.sounds && (this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.sounds = new haxe.ds.StringMap());
        return this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.sounds;
    },
    get_animations: function () {
        null == this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.animations && (this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.animations = new haxe.ds.StringMap());
        return this.world.mobData.h[this.world.mobs.h[this.id].h.type].h.animations;
    },
    __class__: entities.Entity_Mob
})
entities.Entity_Mob.blendMob = lemongine.Mathz.repeatArray([1], 6)
entities.Entity_Mob.blendItems = lemongine.Mathz.repeatArray([0], 6)