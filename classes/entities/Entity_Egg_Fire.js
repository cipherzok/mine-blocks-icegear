entities.Entity_Egg_Fire = function (b, a, c, d, f, g) {
    this._x = this._y = 0;
    this.entityMatrix = new lemongine.Matrix4();
    this.xSpeed = this.ySpeed = 0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Egg_Fire"] = entities.Entity_Egg_Fire
entities.Entity_Egg_Fire.__name__ = "entities.Entity_Egg_Fire"
entities.Entity_Egg_Fire.__super__ = entities.Entity_Base
entities.Entity_Egg_Fire.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.entityPoolID = "projectile";
    },
    run: function () {
        this.onScreen(1);
        for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
            var d = b[c++];
            if (null != this.game.getMob(d) && this.game.getMob(d).mobCollisionPoint(d, new lemongine.Point(this.get_x(), this.get_y()))) {
                1 > 5 * Math.random() && (b = this.world.mobs, a = entities.Entity_Mob.spawnMob("chicken", this.get_x(), this.get_y() + .16666666666666666), b = b.h[a], a = 1200 * Main.Instance.get_fps(), b.h.babyTimer = a);
                this.world.onFire.h[d] = !0;
                this.game.addParticles("chicken", 1, 5, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0));
                for (d = 9; 11 > d;) ++d, b = Math.floor(this.get_x() + (3 * Math.random() - 1 | 0)), a = Math.floor(-this.get_y() + (3 * Math.random() - 1 | 0)), "air" != this.world.getFG(b, a) && BlockData.get(this.world.getFG(b, a), "flammable") && "air" == this.world.getFG(b, a + 1) && this.world.setFG(b, a + 1, "fire");
                this.remove();
                return;
            }
        }
        this.game.addParticles("chicken", 1, 0, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0));
        if (this.game.collision(this.get_x(), this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) || this.game.collision(this.get_x() + this.xSpeed / 2 / 30, this.get_y() + this.ySpeed / 2 / 30, .03333333333333333, .03333333333333333, .03333333333333333, !1)) {
            1 > 5 * Math.random() && (b = this.world.mobs, a = entities.Entity_Mob.spawnMob("chicken", this.get_x(), this.get_y() + .16666666666666666), b = b.h[a], a = 1200 * Main.Instance.get_fps(), b.h.babyTimer = a);
            this.game.addParticles("chicken", 1, 5, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0));
            for (d = 9; 11 > d;) ++d, b = Math.floor(this.get_x() + (3 * Math.random() - 1 | 0)), a = Math.floor(-this.get_y() + (3 * Math.random() - 1 | 0)), "air" != this.world.getFG(b, a) && BlockData.get(this.world.getFG(b, a), "flammable") && "air" == this.world.getFG(b, a + 1) && this.world.setFG(b, a + 1, "fire");
            this.remove();
        } else this.ySpeed += Game.migrateAcc(.5, 1), this.set_x(this.get_x() + this.xSpeed / 30), this.set_y(this.get_y() + this.ySpeed / 30), this.render();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 1);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30);
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("egg_fire").x, Textures.getTexture("egg_fire").y), new lemongine.Point(Textures.getTexture("egg_fire").width, Textures.getTexture("egg_fire").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
    },
    get_x: function () {
        return this._x;
    },
    set_x: function (b) {
        return this._x = b;
    },
    get_y: function () {
        return this._y;
    },
    set_y: function (b) {
        return this._y = b;
    },
    __class__: entities.Entity_Egg_Fire
})