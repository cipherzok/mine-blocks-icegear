entities.Entity_Projectile = function (b, a, c, d, f, g) {
    this.randomTexture = "1";
    this.entityMatrix = new lemongine.Matrix4();
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Projectile"] = entities.Entity_Projectile
entities.Entity_Projectile.__name__ = "entities.Entity_Projectile"
entities.Entity_Projectile.__super__ = entities.Entity_Base
entities.Entity_Projectile.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.entityPoolID = "projectile";
    },
    run: function () {
        this.onScreen(1);
        var b = 5;
        "spear" == this.entityType ? b = 3 : "arrow" == this.entityType ? b = 3 + (null == this.get_power() ? 0 : 3 * this.get_power()) : "shuriken" == this.entityType ? b = 3 : "fireball" == this.entityType ? b = 3 : "snowball" == this.entityType && (b = 0);
        var a = this.get_x(),
            c = this.get_y();
        0 < this.get_cooldown() && this.set_cooldown(this.get_cooldown() - 1);
        if (0 == this.get_speedX() && 0 == this.get_speedY() || null != this.get_stuckIn()) {
            if ("fireball" == this.entityType || "snowball" == this.entityType) {
                this.remove();
                return;
            }
            if (null != this.get_shotBy() && (this.get_shotBy() == this.world.player.id || "dispenser" == HxOverrides.substr(this.get_shotBy(), 0, 9)) && 1 != this.get_infinity() && null == this.get_stuckIn() && 3 != this.world.gamemode && this.world.player.get_hit().intersects(new lemongine.Rectangle(this.get_x() - .3333333333333333, this.get_y() - .3333333333333333, .6666666666666666, .6666666666666666))) {
                if (1 == this.world.gamemode) {
                    this.game.requestSound("pop", 0, 0, 1, 1);
                    this.remove();
                    return;
                }
                if (1 == this.game.addToInventory("shuriken" == this.entityType ? "bshur" : this.entityType, 1)) {
                    this.game.requestSound("pop", 0, 0, 1, 1);
                    this.remove();
                    return;
                }
            }
        } else if ("shuriken" == this.entityType ? this.set_rotation(this.get_rotation() + (0 < this.get_speedX() ? 1 : -1) * (Math.abs(this.get_speedX()) + Math.abs(this.get_speedY())) / 10) : "splashPotion" != this.entityType && this.set_rotation(Math.atan2(this.get_speedY(), this.get_speedX())), this.set_x(this.get_x() + this.get_speedX() / 30), this.set_y(this.get_y() + this.get_speedY() / 30), null == this.get_hurtCooldown() || 0 >= this.get_hurtCooldown()) {
            for (var d = Object.keys(this.world.mobs.h), f = d.length, l = 0; l < f;) {
                var p = d[l++];
                if (!(0 < this.world.mobs.h[p].h.dead) && null != this.world.mobData.h[this.world.mobs.h[p].h.type]) if ("enderdragon" == this.world.mobs.h[p].h.type) {
                    if ((0 >= this.get_cooldown() || this.get_shotBy() != p) && null != this.game.getMob(p) && (3 > js.Boot.__cast(this.game.getMob(p), entities.Entity_Mob_EnderDragon).get_bodyCenter().distanceTo(new lemongine.Point(this.get_x(), this.get_y())) || 2 > js.Boot.__cast(this.game.getMob(p), entities.Entity_Mob_EnderDragon).get_headCenter().distanceTo(new lemongine.Point(this.get_x(), this.get_y())))) {
                        this.game.getMob(p).hurtMob(p, b, "projectile", this.get_shotBy());
                        this.remove();
                        return;
                    }
                } else if (null != this.game.getMob(p) && this.game.getMob(p).mobCollisionPoint(p, new lemongine.Point(this.get_x(), this.get_y())) && (0 >= this.get_cooldown() || this.get_shotBy() != p)) {
                    var m = this.world.mobs.h[p].h.x,
                        B = this.world.mobs.h[p].h.y;
                    if ("snowball" == this.entityType) {
                        if ("snowgolem" == this.world.mobs.h[p].h.type) {
                            var x = this.world.mobs,
                                t = this.get_shotBy();
                            if (null != x.h[t]) {
                                var w = this.world.mobs;
                                t = this.get_shotBy();
                                w = "snowgolem" != w.h[t].h.type;
                            } else w = !0;
                            w && (this.world.mobs.h[p].h.health = Math.min(this.world.mobs.h[p].h.health + 1, 20));
                        } else (.3333333333333333 > Math.random() || "blaze" == this.world.mobs.h[p].h.type || "enderman" == this.world.mobs.h[p].h.type) && this.game.getMob(p).hurtMob(p, 1, "projectile", this.get_shotBy());
                    } else this.game.getMob(p).hurtMob(p, b, "projectile", this.get_shotBy());
                    x = this.world.mobs.h[p];
                    t = x.h.speedX;
                    w = 0 < this.get_speedX() ? 1 : -1;
                    var q = null == this.get_punch() ? 0 : 5 * this.get_punch();
                    x.h.speedX = t + w * (5 + q);
                    t = this.world.mobs.h[p];
                    x = null == this.get_punch() ? 0 : 5 * this.get_punch();
                    t.h.speedY = Game.migrateSpeed(3 + x);
                    if (1 == this.get_flame() || Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id)) this.world.onFire.h[p] = !0;
                    "snowball" == this.entityType && this.game.addParticles("snowball", 0, 10, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0), !1);
                    this.set_hurtCooldown(5);
                    if ("spear" != this.entityType || .3333333333333333 > Math.random()) if (null != this.world.mobs.h[p] && "squid" != this.world.mobs.h[p].h.type) {
                        d = new haxe.ds.StringMap();
                        d.h.type = "mob";
                        d.h.id = p;
                        d.h.direction = this.world.mobs.h[p].h.direction;
                        p = this.get_rotation();
                        d.h.rotation = p;
                        p = this.get_x() - m;
                        d.h.relativeX = p;
                        p = this.get_y() - B;
                        d.h.relativeY = p;
                        this.set_stuckIn(d);
                        break;
                    } else {
                        this.remove();
                        return;
                    }
                }
            }
            d = Object.keys(this.world.balloons.h);
            f = d.length;
            for (l = 0; l < f;) if (p = d[l++], B = this.world.balloons.h[p], .4444444444444444 > Math.pow(this.get_x() - B.h.x, 2) + Math.pow(this.get_y() - B.h.y, 2)) {
                this.game.damageEntity(this.world.balloons, p, b);
                x = B.h.speedX;
                w = this.get_speedX();
                q = null == this.get_punch() || 0 == this.get_punch() ? 1 : 2 * this.get_punch();
                B.h.speedX = x + w * q;
                t = B.h.speedY;
                x = this.get_speedY();
                m = null == this.get_punch() || 0 == this.get_punch() ? 1 : 2 * this.get_punch();
                B.h.speedY = t + x * m;
                this.set_speedX(this.set_speedY(0));
                this.set_hurtCooldown(5);
                d = new haxe.ds.StringMap();
                d.h.type = "balloon";
                d.h.id = p;
                d.h.direction = B.h.rotation;
                p = this.get_rotation();
                d.h.rotation = p;
                p = this.get_x();
                d.h.relativeX = p - B.h.x;
                p = this.get_y();
                d.h.relativeY = p - B.h.y;
                this.set_stuckIn(d);
                break;
            }
            3 != this.world.gamemode && this.world.player.get_hit().contains(this.get_x(), this.get_y()) && (0 >= this.get_cooldown() || this.get_shotBy() != this.world.player.id) && (this.game.ouch(1, b, "arrow"), 0 < this.get_speedX() ? this.world.xSpeed -= 4 + (null == this.get_punch() ? 0 : 5 * this.get_punch()) : 0 > this.get_speedX() && (this.world.xSpeed += 4 + (null == this.get_punch() ? 0 : 5 * this.get_punch())), w = null == this.get_punch() ? 0 : 5 * this.get_punch(), this.world.ySpeed = 3 + w, this.set_hurtCooldown(5), "spear" != this.entityType || .3333333333333333 > Math.random()) && (x = new haxe.ds.StringMap(), x.h.type = "player", x.h.id = this.world.player.id, x.h.direction = this.game.characterXScale, p = this.get_rotation(), x.h.rotation = p, p = this.get_x() - this.world.worldX, x.h.relativeX = p, p = this.get_y() - this.world.worldY, x.h.relativeY = p, this.set_stuckIn(x));
        } else this.set_hurtCooldown(this.get_hurtCooldown() - 1);
        if (null != this.get_stuckIn()) {
            if (this.set_timer(this.get_timer() + 2), this.set_speedX(this.set_speedY(0)), "player" == this.get_stuckIn().h.type) {
                if ("snowball" == this.entityType) {
                    this.remove();
                    return;
                }
                if ("fireball" == this.entityType) {
                    this.game.explode(this.get_x(), -this.get_y(), 4, 1 == this.get_flame(), !1);
                    this.remove();
                    return;
                }
                this.set_x(this.world.worldX + (this.game.characterXScale != this.get_stuckIn().h.direction ? -1 : 1) * this.get_stuckIn().h.relativeX);
                this.set_y(this.world.worldY + this.get_stuckIn().h.relativeY);
                this.set_rotation(Math.PI / 2 + (this.get_stuckIn().h.rotation - Math.PI / 2) * (this.game.characterXScale != this.get_stuckIn().h.direction ? -1 : 1));
            } else if ("mob" == this.get_stuckIn().h.type) {
                if ("snowball" == this.entityType) {
                    this.remove();
                    return;
                }
                if ("fireball" == this.entityType) {
                    this.get_returnedBy() == this.world.player.id ? (x = this.world.mobs, t = this.get_shotBy(), w = null != x.h[t]) : w = !1;
                    w && (x = this.world.mobs, t = this.get_shotBy(), "ghast" == x.h[t].h.type && (x = this.world.mobs, t = this.get_shotBy(), 4 > Math.abs(x.h[t].h.x - this.get_x()) ? (x = this.world.mobs, t = this.get_shotBy(), w = 4 > Math.abs(x.h[t].h.y - this.get_y())) : w = !1, w && (this.game.unlockAchieve(42), this.game.getMob(this.get_shotBy()).hurtMob(this.get_shotBy(), 20, "projectile", this.get_shotBy()))));
                    this.game.explode(this.get_x(), -this.get_y(), 4, 1 == this.get_flame(), !1);
                    this.remove();
                    return;
                }
                x = this.world.mobs;
                t = this.get_stuckIn().h.id;
                if (null != x.h[t]) x = this.world.mobs, t = this.get_stuckIn().h.id, w = x.h[t].h.x, x = this.world.mobs, t = this.get_stuckIn().h.id, this.set_x(w + (x.h[t].h.direction == this.get_stuckIn().h.direction ? 1 : -1) * this.get_stuckIn().h.relativeX), x = this.world.mobs, t = this.get_stuckIn().h.id, this.set_y(x.h[t].h.y + this.get_stuckIn().h.relativeY), w = Math.PI / 2, a = this.get_stuckIn().h.rotation - Math.PI / 2, x = this.world.mobs, t = this.get_stuckIn().h.id, this.set_rotation(w + a * (x.h[t].h.direction == this.get_stuckIn().h.direction ? 1 : -1));else {
                    this.remove();
                    return;
                }
            } else {
                if ("balloon" == this.get_stuckIn().h.type) {
                    if ("snowball" == this.entityType) {
                        this.remove();
                        return;
                    }
                    if ("fireball" == this.entityType) {
                        this.game.explode(this.get_x(), -this.get_y(), 4, 1 == this.get_flame(), !1);
                        this.remove();
                        return;
                    }
                    x = this.world.balloons;
                    t = this.get_stuckIn().h.id;
                    if (null == x.h[t]) if (x = this.game.renamedBalloons, t = this.get_stuckIn().h.id, null != x.h[t]) x = this.get_stuckIn(), w = this.game.renamedBalloons, t = this.get_stuckIn().h.id, x.h.id = w.h[t];else {
                        this.remove();
                        return;
                    }
                    x = this.world.balloons;
                    t = this.get_stuckIn().h.id;
                    B = x.h[t];
                    a = -this.get_stuckIn().h.direction + B.h.rotation + Math.atan2(this.get_stuckIn().h.relativeY, this.get_stuckIn().h.relativeX);
                    c = Math.sqrt(Math.pow(this.get_stuckIn().h.relativeX, 2) + Math.pow(this.get_stuckIn().h.relativeY, 2));
                    this.set_x(B.h.x + Math.cos(a) * c);
                    this.set_y(B.h.y + Math.sin(a) * c);
                    this.set_rotation(this.get_stuckIn().h.rotation + B.h.rotation - this.get_stuckIn().h.direction);
                }
            }
        } else {
            if (this.game.collision(this.get_x(), this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333)) {
                if ("snowball" == this.entityType) {
                    this.game.addParticles("snowball", 0, 10, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0), !1);
                    this.remove();
                    return;
                }
                if ("fireball" == this.entityType) {
                    0 >= this.get_cooldown() && this.game.explode(this.get_x(), -this.get_y(), 4, 1 == this.get_flame(), !1);
                    this.remove();
                    return;
                }
                b = !0;
                this.get_wasntHitting() && (p = this.game.raycastSolidBlock(a, c, Math.atan2(this.get_speedY(), this.get_speedX()), 2), null != p && "slimeb" == this.world.getFG(p.h.x, p.h.y) && (p.h.previousX != p.h.x ? (Math.abs(this.get_speedX()) > Game.migrateSpeed(3) && (b = !1), this.set_speedX(.8 * -this.get_speedX())) : (Math.abs(this.get_speedY()) > Game.migrateSpeed(3) && (b = !1), this.set_speedY(.8 * -this.get_speedY())), b || (this.set_x(a), this.set_y(c))));
                b && (this.set_speedX(0), this.set_speedY(0), 1 == this.get_wasntHitting() && (this.set_wasntHitting(!1), this.game.requestSound("Trrrr", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY)));
            } else {
                if ("la" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y()))) {
                    if ("snowball" == this.entityType) {
                        this.game.addParticles("snowball", 0, 10, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0), !1);
                        this.remove();
                        return;
                    }
                    this.set_flame(!0);
                } else {
                    if ("ad" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y()))) {
                        this.remove();
                        return;
                    }
                    "wr" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y())) ? (this.set_flame(!1), this.world.onFire.h[this.id] && (t = this.id, a = this.world.onFire, Object.prototype.hasOwnProperty.call(a.h, t) && delete a.h[t])) : this.set_wasntHitting(!0);
                }
                "fireball" != this.entityType && this.set_speedY(this.get_speedY() + Game.migrateAcc(.5, 1));
            }
            if (3 == this.world.sceneNum) for (a = Object.keys(this.world.enderCrystals.h), c = a.length, b = 0; b < c;) if (p = a[b++], 1 > Math.abs(this.get_x() - (this.world.enderCrystals.h[p][0] + .5)) && 1 > Math.abs(this.get_y() - (-this.world.enderCrystals.h[p][1] - .5))) {
                null != this.world.entities.h[p] && js.Boot.__cast(this.world.entities.h[p], entities.Entity_EHC).explod();
                this.remove();
                return;
            }
        }
        null == this.get_timer() && this.set_timer(0);
        this.set_timer(this.get_timer() + 1) > 60 * Main.Instance.get_fps() ? this.remove() : this.render();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 2);
        "arrow" == this.entityType ? (this.entityMatrix.reset().scale2D(1.125).translate(-.13333333333333333, -.13333333333333333).rotate(this.get_rotation() - Math.PI / 4 + Math.PI, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture(this.entityType).x, Textures.getTexture(this.entityType).y), new lemongine.Point(Textures.getTexture(this.entityType).width, Textures.getTexture(this.entityType).height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix))) : "spear" == this.entityType ? (this.entityMatrix.reset().translate(-.4, -.13333333333333333).scale2D(2).rotate(this.get_rotation() + Math.PI / 4, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture(this.entityType).x, Textures.getTexture(this.entityType).y), new lemongine.Point(Textures.getTexture(this.entityType).width, Textures.getTexture(this.entityType).height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix))) : "shuriken" == this.entityType ? (this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(1.582).rotate(this.get_rotation() + Math.PI / 4 + Math.PI, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture(this.get_type() + "_" + this.entityType).x, Textures.getTexture(this.get_type() + "_" + this.entityType).y), new lemongine.Point(Textures.getTexture(this.get_type() + "_" + this.entityType).width, Textures.getTexture(this.get_type() + "_" + this.entityType).height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix))) : "snowball" == this.entityType ? (this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(.9375).rotate(this.get_rotation() + Math.PI / 4 + Math.PI, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("snow_ball").x, Textures.getTexture("snow_ball").y), new lemongine.Point(Textures.getTexture("snow_ball").width, Textures.getTexture("snow_ball").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix))) : "fireball" == this.entityType && (this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(1.2).rotate(this.get_rotation() + Math.PI / 4 + Math.PI, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture(this.entityType).x, Textures.getTexture(this.entityType).y), new lemongine.Point(Textures.getTexture(this.entityType).width, Textures.getTexture(this.entityType).height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix)));
        1 == this.get_flame() ? (0 == Main.Instance.game.world.tick % 2 && (this.randomTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().scale2D(1).translate(-.26666666666666666, -.5333333333333333).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(Textures.getTexture("fire", this.randomTexture).x, Textures.getTexture("fire", this.randomTexture).y), new lemongine.Point(Textures.getTexture("fire", this.randomTexture).width, Textures.getTexture("fire", this.randomTexture).height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix))) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point());
    },
    getData: function (b) {
        return js.Boot.__cast(this.data, haxe.ds.StringMap).h[b];
    },
    setData: function (b, a) {
        return js.Boot.__cast(this.data, haxe.ds.StringMap).h[b] = a;
    },
    get_x: function () {
        return this.getData("x");
    },
    set_x: function (b) {
        return this.setData("x", b);
    },
    get_y: function () {
        return this.getData("y");
    },
    set_y: function (b) {
        return this.setData("y", b);
    },
    get_speedX: function () {
        return this.getData("speedX");
    },
    set_speedX: function (b) {
        return this.setData("speedX", b);
    },
    get_speedY: function () {
        return this.getData("speedY");
    },
    set_speedY: function (b) {
        return this.setData("speedY", b);
    },
    get_type: function () {
        return this.getData("type");
    },
    get_timer: function () {
        return this.getData("timer");
    },
    set_timer: function (b) {
        return this.setData("timer", b);
    },
    get_cooldown: function () {
        return this.getData("cooldown");
    },
    set_cooldown: function (b) {
        return this.setData("cooldown", b);
    },
    get_hurtCooldown: function () {
        return this.getData("hurtCooldown");
    },
    set_hurtCooldown: function (b) {
        return this.setData("hurtCooldown", b);
    },
    get_rotation: function () {
        return null != this.getData("rotation") ? this.getData("rotation") : 0;
    },
    set_rotation: function (b) {
        return this.setData("rotation", b);
    },
    get_shotBy: function () {
        return this.getData("shotBy");
    },
    get_returnedBy: function () {
        return this.getData("returnedBy");
    },
    get_power: function () {
        return this.getData("power");
    },
    get_punch: function () {
        return this.getData("punch");
    },
    get_flame: function () {
        return this.getData("flame");
    },
    set_flame: function (b) {
        return this.setData("flame", b);
    },
    get_infinity: function () {
        return this.getData("infinity");
    },
    get_stuckIn: function () {
        return this.getData("stuckIn");
    },
    set_stuckIn: function (b) {
        return this.setData("stuckIn", b);
    },
    get_wasntHitting: function () {
        return this.getData("wasntHitting");
    },
    set_wasntHitting: function (b) {
        return this.setData("wasntHitting", b);
    },
    __class__: entities.Entity_Projectile
})