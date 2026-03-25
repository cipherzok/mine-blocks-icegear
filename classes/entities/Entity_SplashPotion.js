entities.Entity_SplashPotion = function (b, a, c, d, f, g) {
    this.entityMatrix = new lemongine.Matrix4();
    this.inWater = !1;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_SplashPotion"] = entities.Entity_SplashPotion
entities.Entity_SplashPotion.__name__ = "entities.Entity_SplashPotion"
entities.Entity_SplashPotion.__super__ = entities.Entity_Base
entities.Entity_SplashPotion.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        entities.Entity_Base.prototype.init.call(this);
    },
    run: function () {
        0 < this.get_cooldown() && this.set_cooldown(this.get_cooldown() - 1);
        this.set_x(this.get_x() + this.get_speedX() / 30);
        this.set_y(this.get_y() + this.get_speedY() / 30);
        for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
            var d = b[c++];
            if (0 >= this.get_cooldown() || this.get_shotBy() != d) if ("enderdragon" == this.world.mobs.h[d].h.type) {
                if (null != this.game.getMob(d) && (3 > js.Boot.__cast(this.game.getMob(d), entities.Entity_Mob_EnderDragon).get_bodyCenter().distanceTo(new lemongine.Point(this.get_x(), this.get_y())) || 2 > js.Boot.__cast(this.game.getMob(d), entities.Entity_Mob_EnderDragon).get_headCenter().distanceTo(new lemongine.Point(this.get_x(), this.get_y())))) {
                    this.game.requestSound("glass" + (3 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
                    this.remove();
                    return;
                }
            } else if (null != this.game.getMob(d) && this.game.getMob(d).mobCollisionPoint(d, new lemongine.Point(this.get_x(), this.get_y()))) {
                this.game.requestSound("glass" + (3 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
                this.remove();
                return;
            }
        }
        b = Object.keys(this.world.balloons.h);
        a = b.length;
        for (c = 0; c < a;) if (d = b[c++], .4444444444444444 > Math.pow(this.get_x() - Game.makeDynamicMap(this.world.balloons.h[d]).h.x, 2) + Math.pow(this.get_y() - Game.makeDynamicMap(this.world.balloons.h[d]).h.y, 2)) {
            this.game.requestSound("glass" + (3 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
            this.remove();
            return;
        }
        if (3 != this.world.gamemode && this.world.player.get_hit().contains(this.get_x(), this.get_y()) && (0 >= this.get_cooldown() || this.get_shotBy() != this.world.player.id)) this.game.requestSound("glass" + (3 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1), this.remove();else if (this.game.collision(this.get_x(), this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333)) this.game.requestSound("glass" + (3 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1), this.remove();else if ("la" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y()))) this.game.requestSound("sizzle", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), this.remove();else if ("ad" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y()))) this.game.requestSound("sizzle", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), this.remove();else {
            "wr" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y())) ? this.inWater || (this.inWater = !0, this.game.requestSound("splash", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1)) : this.inWater = !1;
            this.set_speedY(this.get_speedY() + .5);
            if (3 == this.world.sceneNum) for (b = Object.keys(this.world.enderCrystals.h), a = b.length, c = 0; c < a;) if (d = b[c++], 1 > Math.abs(this.get_x() - (this.world.enderCrystals.h[d][0] + .5)) && 1 > Math.abs(this.get_y() - (-this.world.enderCrystals.h[d][1] - .5))) {
                null != this.world.entities.h[d] && js.Boot.__cast(this.world.entities.h[d], entities.Entity_EHC).explod();
                this.game.requestSound("glass" + (3 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
                this.remove();
                return;
            }
            null == this.get_timer() && this.set_timer(0);
            this.set_timer(this.get_timer() + 1) > 60 * Main.Instance.get_fps() ? this.remove() : this.render();
        }
    },
    remove: function () {
        this.game.splashAPotion(this.get_x(), this.get_y(), this.get_effects(), this.get_showParticles());
        entities.Entity_Base.prototype.remove.call(this);
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 2);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(1.03125).rotate2D(this.get_rotation()).translate(this.get_x(), this.get_y());
        var a = Textures.getTexture("potion", "splash_contents");
        b = this.entity;
        var c = this.quadPositions[0],
            d = new lemongine.Point(a.x, a.y);
        a = new lemongine.Point(a.width, a.height);
        var f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = this.game.potionData,
            h = this.get_type(),
            m = p.h[h].h.r;
        p = this.game.potionData;
        h = this.get_type();
        var n = p.h[h].h.g;
        p = this.game.potionData;
        h = this.get_type();
        p = lemongine.Mathz.repeatArray([m, n, p.h[h].h.b, 1], 6);
        l.h.color = p;
        b.updateQuad(c, null, d, a, null, f, null, l);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(1.03125).rotate2D(this.get_rotation()).translate(this.get_x(), this.get_y());
        a = Textures.getTexture("potion", "splash");
        this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(a.x, a.y), new lemongine.Point(a.width, a.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
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
    get_speedY: function () {
        return this.getData("speedY");
    },
    set_speedY: function (b) {
        return this.setData("speedY", b);
    },
    get_rotation: function () {
        return this.getData("rotation");
    },
    get_shotBy: function () {
        return this.getData("shotBy");
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
    get_type: function () {
        return this.getData("type");
    },
    get_effects: function () {
        return this.getData("effects");
    },
    get_showParticles: function () {
        return this.getData("showParticles");
    },
    __class__: entities.Entity_SplashPotion
})