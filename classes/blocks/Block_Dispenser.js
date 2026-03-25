blocks.Block_Dispenser = function (b, a, c, d, f) {
    this.dropX = this.dropY = 0;
    this.changeOfSignal = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Dispenser"] = blocks.Block_Dispenser
blocks.Block_Dispenser.__name__ = "blocks.Block_Dispenser"
blocks.Block_Dispenser.__super__ = blocks.Block
blocks.Block_Dispenser.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        null == this.world.states.h[this.blockID] && (this.world.states.h[this.blockID] = 1);
        2 == this.world.states.h[this.blockID] ? this.dropX = 20 : 3 == this.world.states.h[this.blockID] ? this.dropY = -20 : 4 == this.world.states.h[this.blockID] ? this.dropY = 20 : this.dropX = -20;
        null == this.world.states.h[this.blockID + "_2"] && (this.world.states.h[this.blockID + "_2"] = [], this.world.states.h[this.blockID + "_2"][0] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][1] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][2] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][3] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][4] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][5] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][6] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][7] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][8] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]));
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (0 == this.world.getSignal(this.x, this.y) && 0 == this.world.getSignal(this.x, this.y - 1)) this.changeOfSignal = !0;else if (this.changeOfSignal && (this.changeOfSignal = !1, null != this.world.states.h[this.blockID + "_2"] && 9 == this.world.states.h[this.blockID + "_2"].length)) {
            var b = [];
            "air" != this.world.states.h[this.blockID + "_2"][0][0] && b.push(0);
            "air" != this.world.states.h[this.blockID + "_2"][1][0] && b.push(1);
            "air" != this.world.states.h[this.blockID + "_2"][2][0] && b.push(2);
            "air" != this.world.states.h[this.blockID + "_2"][3][0] && b.push(3);
            "air" != this.world.states.h[this.blockID + "_2"][4][0] && b.push(4);
            "air" != this.world.states.h[this.blockID + "_2"][5][0] && b.push(5);
            "air" != this.world.states.h[this.blockID + "_2"][6][0] && b.push(6);
            "air" != this.world.states.h[this.blockID + "_2"][7][0] && b.push(7);
            "air" != this.world.states.h[this.blockID + "_2"][8][0] && b.push(8);
            if (!(0 >= b.length)) {
                var a = new particles.Particle_Smoke2(this.x + .5 + this.dropX / 2 / 30, -this.y - .5 + this.dropY / 2 / 30, this.game, this.world);
                a.xSpeed = Game.migrateSpeed(this.dropX / 2 + 2 * Math.random() - 1);
                a.ySpeed = Game.migrateSpeed(this.dropY / 2 + 2 * Math.random() - 1);
                b = b[Math.random() * b.length | 0];
                a = this.world.states.h[this.blockID + "_2"][b];
                if (null == a || null == a[0]) a = this.world.states.h[this.blockID + "_2"][b] = Game.emptyItem();
                var c = a[0],
                    d = !1;
                if ("arrow" == c) {
                    var f = this.world.arrows,
                        l = Game.uniqueID(this.world.arrows, "arrow"),
                        p = new haxe.ds.StringMap();
                    p.h.x = this.x + .5 + this.dropX / 30;
                    p.h.y = -this.y - .5 + this.dropY / 30;
                    p.h.speedX = Game.migrateSpeed(this.dropX);
                    p.h.speedY = Game.migrateSpeed(this.dropY);
                    p.h.rotation = 0;
                    p.h.shotBy = "dispenser" + this.blockID;
                    p.h.timer = 0;
                    p.h.cooldown = 1;
                    f.h[l] = Game.makeDynamicMap(p);
                    this.removeFromInventory(b);
                } else if ("spear" == c) f = this.world.spears, l = Game.uniqueID(this.world.spears, "spear"), p = new haxe.ds.StringMap(), p.h.x = this.x + .5 + this.dropX / 30, p.h.y = -this.y - .5 + this.dropY / 30, p.h.speedX = Game.migrateSpeed(this.dropX), p.h.speedY = Game.migrateSpeed(this.dropY), p.h.rotation = 0, p.h.shotBy = "dispenser" + this.blockID, p.h.timer = 0, p.h.cooldown = 1, f.h[l] = Game.makeDynamicMap(p), this.removeFromInventory(b);else if ("bshur" == c) f = this.world.shurikens, l = Game.uniqueID(this.world.shurikens, "shuriken"), p = new haxe.ds.StringMap(), p.h.x = this.x + .5 + this.dropX / 30, p.h.y = -this.y - .5 + this.dropY / 30, p.h.speedX = Game.migrateSpeed(this.dropX), p.h.speedY = Game.migrateSpeed(1.5 * this.dropY), p.h.rotation = 0, p.h.shotBy = "dispenser" + this.blockID, p.h.timer = 0, p.h.type = "bone", p.h.cooldown = 1, f.h[l] = Game.makeDynamicMap(p), this.removeFromInventory(b);else if ("potion" == c) {
                    if ("splash" == Game.makeDynamicMap(a[3]).h.category) {
                        var n = [];
                        null != Game.makeDynamicMap(a[3]).h.effects ? n = Game.makeDynamicMap(a[3]).h.effects : null != this.game.potionData.h[Game.makeDynamicMap(a[3]).h.type] && null != Game.makeDynamicMap(this.game.potionData.h[Game.makeDynamicMap(a[3]).h.type]).h.effects && (n = Game.makeDynamicMap(this.game.potionData.h[Game.makeDynamicMap(a[3]).h.type]).h.effects);
                        f = this.world.splashPotions;
                        l = Game.uniqueID(this.world.splashPotions, "splashPotion");
                        p = new haxe.ds.StringMap();
                        p.h.x = this.x + .5 + this.dropX / 30;
                        p.h.y = -this.y - .5 + this.dropY / 30;
                        p.h.speedX = Game.migrateSpeed(this.dropX);
                        p.h.speedY = Game.migrateSpeed(1.5 * this.dropY);
                        p.h.rotation = 0;
                        p.h.timer = 0;
                        p.h.shotBy = "dispenser" + this.blockID;
                        p.h.cooldown = 1;
                        p.h.type = Game.makeDynamicMap(a[3]).h.type;
                        p.h.effects = n;
                        p.h.showParticles = 0 != Game.makeDynamicMap(a[3]).h.showParticles;
                        f.h[l] = Game.makeDynamicMap(p);
                        this.removeFromInventory(b);
                    }
                } else if ("raft" == c) "wr" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (f = 1E9 * Math.random() | 0, this.world.rafts.h["raft" + f] = Game.makeDynamicArray(["raft" + f, this.x + .5 + this.dropX / 30, -this.y - .5 + (this.dropY - 10) / 30, 0, 0, ""]), this.removeFromInventory(b));else if ("cart" == HxOverrides.substr(c, 0, 4)) "rail" == HxOverrides.substr(this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20), 0, 4) ? (f = Game.uniqueID(this.world.carts, "cart"), p = new haxe.ds.StringMap(), p.h.id = f, p.h.x = this.x + .5 + this.dropX / 2 * 3 / 30, p.h.y = -this.y - .5 + (this.dropY / 2 * 3 - 10) / 30, p.h.speedX = 0, p.h.speedY = 0, p.h.riddenBy = "", p.h.onActivator = !1, p.h.type = HxOverrides.substr(c, 4, null), p.h.health = 3, p.h.tilt = 0, p.h.onRail = 0, this.world.carts.h[f] = Game.makeDynamicMap(p), this.removeFromInventory(b)) : "rail" == HxOverrides.substr(this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20 + 1), 0, 4) && (f = Game.uniqueID(this.world.carts, "cart"), p = new haxe.ds.StringMap(), p.h.id = f, p.h.x = this.x + .5 + this.dropX / 2 * 3 / 30, p.h.y = -this.y - .5 + (this.dropY / 2 * 3 - 40) / 30, p.h.speedX = 0, p.h.speedY = 0, p.h.riddenBy = "", p.h.onActivator = !1, p.h.type = HxOverrides.substr(c, 4, null), p.h.health = 3, p.h.tilt = 0, p.h.onRail = 0, this.world.carts.h[f] = Game.makeDynamicMap(p), this.removeFromInventory(b));else if ("bonem" == c) (f = this.game.useBonemeal(this.x + this.dropX / 20 | 0, this.y - this.dropY / 20 | 0)) || (f = this.game.useBonemeal(this.x + this.dropX / 20 | 0, this.y - this.dropY / 20 + 1 | 0)), f && this.removeFromInventory(b);else if ("Hoe" == HxOverrides.substr(c, -3, 3)) "dt" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20, "farm"), a[2]++, a[2] > BlockData.get(c, "life") && (this.world.states.h[this.blockID + "_2"][b] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()])));else if ("cmp" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && null != BlockData.get(c, "compostChance")) f = blocks.Block.getID(this.x + this.dropX / 20 | 0, this.y - this.dropY / 20 | 0), 5 > this.world.states.h[f] && (this.removeFromInventory(b), Math.random() <= BlockData.get(c, "compostChance") && (p = this.world.states.h[f] + 1, this.world.states.h[f] = p, this.world.states.h[f] = p, this.game.requestSound("crunch" + Math.floor(3 * Math.random()), this.x - this.world.worldX, -this.y - this.world.worldY, 1, 1), f = this.world.getBlock(this.x + this.dropX / 20, this.y - this.dropY / 20), null != f && f.updateState()), this.game.addParticles("grow", 0, 1, new lemongine.Point(this.x + this.dropX / 20 + .5), new lemongine.Point(-this.y - this.dropY / 20 - .5)));else if ("nw" == c || "seed" == c || "pseed" == c || "bseed" == c || "wseed" == c || "carrot" == c || "potato" == c) "farm" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20 - 1) ? "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20, c), this.removeFromInventory(b)) : "farm" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20 + 1) && (this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20 + 1, c), this.removeFromInventory(b));else if ("sl" == c) "dt" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20 - 1) ? "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20, c), this.removeFromInventory(b)) : "dt" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20 + 1) && (this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20 + 1, c), this.removeFromInventory(b));else if ("TNT" == c) {
                    if ("air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) || "wr" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20)) {
                        this.world.fallingBlockNum++;
                        f = this.world.fallingBlocks;
                        l = Std.string(this.world.fallingBlockNum);
                        p = this.world.fallingBlockNum;
                        n = this.x + .5 + this.dropX / 2 * 3 / 30;
                        var m = -this.y - .5 + this.dropY / 2 * 3 / 30,
                            x = Game.migrateSpeed(2 * Math.random() - 1);
                        f.h[l] = Game.makeDynamicArray([p, c, n, m, x, Game.migrateSpeed(-5), 10, !0]);
                        this.removeFromInventory(b);
                    }
                } else if ("snowb" == c) f = this.world.snowballs, l = Game.uniqueID(this.world.snowballs, "snowball"), p = new haxe.ds.StringMap(), p.h.x = this.x + .5 + this.dropX / 30, p.h.y = -this.y - .5 + this.dropY / 30, p.h.speedX = Game.migrateSpeed(this.dropX), p.h.speedY = Game.migrateSpeed(this.dropY), p.h.rotation = Math.PI, p.h.timer = 0, p.h.cooldown = 4, p.h.shotBy = "dispenser" + this.blockID, f.h[l] = Game.makeDynamicMap(p), this.removeFromInventory(b);else if ("bk" == c) "wr" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && 10 == this.world.water.h["blockX" + (this.x + this.dropX / 20) + "Y" + (this.y - this.dropY / 20)][0] ? (a[0] = "wbk", this.game.requestRemove(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20), !0, !1, !0)) : "la" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && 10 == this.world.water.h["blockX" + (this.x + this.dropX / 20) + "Y" + (this.y - this.dropY / 20)][0] ? (a[0] = "lbk", this.game.requestRemove(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20), !0, !1, !0)) : "ad" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && 10 == this.world.water.h["blockX" + (this.x + this.dropX / 20) + "Y" + (this.y - this.dropY / 20)][0] && (a[0] = "abk", this.game.requestRemove(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20), !0, !1, !0));else if ("wbk" == c) "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (a[0] = "bk", this.world.water.h["blockX" + (this.x + this.dropX / 20) + "Y" + (this.y - this.dropY / 20)] = [10, 10], this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20, "wr"));else if ("lbk" == c) "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (a[0] = "bk", this.world.water.h["blockX" + (this.x + this.dropX / 20) + "Y" + (this.y - this.dropY / 20)] = [10, 10], this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20, "la"));else if ("abk" == c) "air" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && (a[0] = "bk", this.world.water.h["blockX" + (this.x + this.dropX / 20) + "Y" + (this.y - this.dropY / 20)] = [10, 10], this.world.setFG(this.x + this.dropX / 20, this.y - this.dropY / 20, "ad"));else if ("egg" == c) f = "egg" + Math.random(), l = new entities.Entity_Egg("egg", null, f, null, this.game, this.world), this.world.entities.h[f] = l, l.set_x(this.x + .5 + this.dropX / 30), l.set_y(-this.y - .5 + this.dropY / 30), l.xSpeed = Game.migrateSpeed(this.dropX), l.ySpeed = Game.migrateSpeed(this.dropY), this.removeFromInventory(b);else if ("Cap" == HxOverrides.substr(c, -3, 3) || "pk" == c || "mh" == c) {
                    if (3 != this.world.gamemode && 1.1666666666666667 > Math.abs(this.world.worldX - (this.x + .5 + this.dropX / 30)) && 1.1666666666666667 > Math.abs(this.world.worldY - (-this.y - .5 + this.dropY / 30)) && "air" == this.world.armors[0][0]) {
                        this.world.armors[0] = Game.makeDynamicArray([c, a[2], new haxe.ds.StringMap()]);
                        f = Object.keys(Game.makeDynamicMap(a[3]).h);
                        l = f.length;
                        for (p = 0; p < l;) n = f[p++], Game.makeDynamicMap(this.world.armors[0][2]).h[n] = Game.makeDynamicMap(a[3]).h[n];
                        this.removeFromInventory(b);
                        this.game.updateArmorRenderers();
                    }
                } else if ("Shirt" == HxOverrides.substr(c, -5, 5)) {
                    if (3 != this.world.gamemode && 1.1666666666666667 > Math.abs(this.world.worldX - (this.x + .5 + this.dropX / 30)) && 1.1666666666666667 > Math.abs(this.world.worldY - (-this.y - .5 + this.dropY / 30)) && "air" == this.world.armors[1][0]) {
                        this.world.armors[1] = Game.makeDynamicArray([c, a[2], new haxe.ds.StringMap()]);
                        f = Object.keys(Game.makeDynamicMap(a[3]).h);
                        l = f.length;
                        for (p = 0; p < l;) n = f[p++], Game.makeDynamicMap(this.world.armors[1][2]).h[n] = Game.makeDynamicMap(a[3]).h[n];
                        this.removeFromInventory(b);
                        this.game.updateArmorRenderers();
                    }
                } else if ("Pants" == HxOverrides.substr(c, -5, 5)) {
                    if (3 != this.world.gamemode && 1.1666666666666667 > Math.abs(this.world.worldX - (this.x + .5 + this.dropX / 30)) && 1.1666666666666667 > Math.abs(this.world.worldY - (-this.y - .5 + this.dropY / 30)) && "air" == this.world.armors[2][0]) {
                        this.world.armors[2] = Game.makeDynamicArray([c, a[2], new haxe.ds.StringMap()]);
                        f = Object.keys(Game.makeDynamicMap(a[3]).h);
                        l = f.length;
                        for (p = 0; p < l;) n = f[p++], Game.makeDynamicMap(this.world.armors[2][2]).h[n] = Game.makeDynamicMap(a[3]).h[n];
                        this.removeFromInventory(b);
                        this.game.updateArmorRenderers();
                    }
                } else if ("Shoes" == HxOverrides.substr(c, -5, 5)) {
                    if (3 != this.world.gamemode && 1.1666666666666667 > Math.abs(this.world.worldX - (this.x + .5 + this.dropX / 30)) && 1.1666666666666667 > Math.abs(this.world.worldY - (-this.y - .5 + this.dropY / 30)) && "air" == this.world.armors[3][0]) {
                        this.world.armors[3] = Game.makeDynamicArray([c, a[2], new haxe.ds.StringMap()]);
                        f = Object.keys(Game.makeDynamicMap(a[3]).h);
                        l = f.length;
                        for (p = 0; p < l;) n = f[p++], Game.makeDynamicMap(this.world.armors[3][2]).h[n] = Game.makeDynamicMap(a[3]).h[n];
                        this.removeFromInventory(b);
                        this.game.updateArmorRenderers();
                    }
                } else if ("megg" == c) entities.Entity_Mob.spawnMob(Game.makeDynamicMap(a[3]).h.type, this.x + .5 + this.dropX / 30, -this.y - .5 + (0 < this.dropY ? 3 * this.dropY : this.dropY) / 30), this.removeFromInventory(b);else if ("fireegg" == c) f = "egg" + Math.random(), l = new entities.Entity_Egg_Fire("fireegg", null, f, null, this.game, this.world), this.world.entities.h[f] = l, l.set_x(this.x + .5 + this.dropX / 30), l.set_y(-this.y - .5 + this.dropY / 30), l.xSpeed = Game.migrateSpeed(this.dropX), l.ySpeed = Game.migrateSpeed(this.dropY), this.removeFromInventory(b);else if ("fas" == c) {
                    f = !1;
                    l = Object.keys(this.world.mobs.h);
                    p = l.length;
                    for (n = 0; n < p;) if (m = l[n++], .6666666666666666 > Math.abs(this.world.mobs.h[m].h.x - (this.x + .5)) && .6666666666666666 > Math.abs(this.world.mobs.h[m].h.y - (-this.y - .5))) {
                        f = this.world.onFire.h[m] = !0;
                        a[2]++;
                        a[2] > BlockData.get(c, "life") && (this.world.states.h[this.blockID + "_2"][b] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]));
                        break;
                    }
                    f || (f = !1, this.game.canFireExistAt(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20)) ? "air" == this.world.getFG(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20)) && (f = !0, this.world.setFG(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20), "fire")) : this.game.canBeOnFire(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20)) && "air" == this.world.getFG(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20 + 1)) && (f = !0, this.world.setFG(Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20 + 1), "fire")), f && (a[2]++, a[2] > BlockData.get(c, "life") && (this.world.states.h[this.blockID + "_2"][b] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]))));
                } else d = !0;
                d && (a = this.game.addDrop(c, this.x + .5 + this.dropX / 30, -this.y - .5 + this.dropY / 30, 1, a[2], a[3]), null != a && (js.Boot.__cast(this.world.entities.h[js.Boot.__cast(a, String)], entities.Entity_Drop).speedX = Game.migrateSpeed((this.dropX + 10 * Math.random() - 5) / 3), js.Boot.__cast(this.world.entities.h[js.Boot.__cast(a, String)], entities.Entity_Drop).speedY = Game.migrateSpeed((this.dropY + 10 * Math.random() - 5) / 3), this.removeFromInventory(b)));
            }
        }
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        this.game.inventario.dispenseName = this.blockID;
        this.game.inventario.craftCoords = [this.x, this.y];
        this.game.inventario.newName = null != this.world.states.h[this.blockID + "_3"] ? this.world.states.h[this.blockID + "_3"] : "";
        this.game.inventario.dispenserType = "Dispenser";
        this.game.inventario.gotoAndStop(9);
    },
    removeFromInventory: function (b) {
        Game.makeDynamicArray(this.world.states.h[this.blockID + "_2"][b])[1]--;
        0 >= this.world.states.h[this.blockID + "_2"][b][1] && (this.world.states.h[this.blockID + "_2"][b] = Game.emptyItem());
    },
    __class__: blocks.Block_Dispenser
})