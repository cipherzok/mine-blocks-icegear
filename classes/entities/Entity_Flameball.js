entities.Entity_Flameball = function (b, a, c, d, f, g) {
    this.entityMatrix = new lemongine.Matrix4();
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Flameball"] = entities.Entity_Flameball
entities.Entity_Flameball.__name__ = "entities.Entity_Flameball"
entities.Entity_Flameball.__super__ = entities.Entity_Base
entities.Entity_Flameball.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.entityPoolID = "projectile";
    },
    run: function () {
        this.onScreen(1);
        if (12 < this.get_timer()) {
            if (3 != this.world.gamemode && this.world.player.get_hit().contains(this.get_x(), this.get_y())) {
                this.explodee();
                return;
            }
            for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
                var d = b[c++];
                if (this.get_shotBy() != d && "enderdragon" != this.world.mobs.h[d].h.type && "enderman" != this.world.mobs.h[d].h.type && this.game.getMob(d).mobCollisionPoint(d, new lemongine.Point(this.get_x(), this.get_y()))) {
                    this.explodee();
                    return;
                }
            }
        }
        1 != GlobalSave.particles && .05 > Math.random() && this.game.addParticles("smoke2", 1, 0, new lemongine.Point(this.get_x() + (10 * Math.random() - 5) / 30, 0), new lemongine.Point(this.get_y() + (10 * Math.random() - 5) / 30, 0));
        null == BlockData.get(this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y())), "waterWalkThroughBlock") ? 12 < this.get_timer() ? this.explodee() : this.remove() : (this.set_x(this.get_x() + this.get_speedX() / 30), this.set_y(this.get_y() + this.get_speedY() / 30), null == this.get_timer() && this.set_timer(0), this.set_timer(this.get_timer() + 1) > 60 * Main.Instance.get_fps() ? this.remove() : this.render());
    },
    explodee: function () {
        if (1 == this.world.sceneNum) {
            this.game.requestSound("boom", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
            3 != this.world.gamemode && 3.5 > Math.abs(this.get_x() - this.world.worldX) && 3.5 > Math.abs(this.get_y() - this.world.worldY) && this.game.ouch(1, 1, "explosion");
            for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
                var d = b[c++];
                this.get_shotBy() != d && "enderdragon" != this.world.mobs.h[d].h.type && "enderman" != this.world.mobs.h[d].h.type && 3.5 > Math.abs(this.get_x() - this.world.mobs.h[d].h.x) && 3.5 > Math.abs(this.get_y() - this.world.mobs.h[d].h.x) && null != this.game.getMob(d) && this.game.getMob(d).hurtMob(d, 1, "fire", this.get_shotBy());
            }
        } else for (this.game.requestSound("boom", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1), 3 != this.world.gamemode && 3.5 > Math.abs(this.get_x() - this.world.worldX) && 3.5 > Math.abs(this.get_y() - this.world.worldY) && this.game.ouch(1, 3, "explosion"), b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) d = b[c++], this.get_shotBy() != d && "enderdragon" != this.world.mobs.h[d].h.type && "enderman" != this.world.mobs.h[d].h.type && 3.5 > Math.abs(this.get_x() - this.world.mobs.h[d].h.x) && 3.5 > Math.abs(this.get_y() - this.world.mobs.h[d].h.x) && null != this.game.getMob(d) && this.game.getMob(d).hurtMob(d, 1, "fire", this.get_shotBy());
        this.game.addParticles("smoke2", 1, 3, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0));
        this.game.addParticles("shockwave", 1, 3, new lemongine.Point(this.get_x() + (50 * Math.random() - 25) / 30, 0), new lemongine.Point(this.get_y() + (50 * Math.random() - 25) / 30, 0));
        this.remove();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 1);
        this.entityMatrix.reset().translate(0, -.26666666666666666).scale2D(1 + 2 * Math.min(1, this.get_timer() / 80)).rotate2D(-this.get_rotation() / 180 * Math.PI).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30);
        b = this.entity;
        var a = this.quadPositions[0],
            c = new lemongine.Point(Textures.getTexture("flameball").x, Textures.getTexture("flameball").y),
            d = new lemongine.Point(Textures.getTexture("flameball").width, Textures.getTexture("flameball").height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([Math.min(1, this.get_timer() / 80), .5 + .5 * Math.min(1, this.get_timer() / 80), .5 + .5 * Math.min(1, this.get_timer() / 80), 1], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
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
    __class__: entities.Entity_Flameball
})