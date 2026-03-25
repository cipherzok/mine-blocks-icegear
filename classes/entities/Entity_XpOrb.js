entities.Entity_XpOrb = function (b, a, c, d, f, g) {
    this.entityMatrix = new lemongine.Matrix4();
    this.enderDragonOrb = !1;
    this.orbType = 1;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_XpOrb"] = entities.Entity_XpOrb
entities.Entity_XpOrb.__name__ = "entities.Entity_XpOrb"
entities.Entity_XpOrb.__super__ = entities.Entity_Base
entities.Entity_XpOrb.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.orbType = 3 * Math.random() + 1 | 0;
        entities.Entity_Base.prototype.init.call(this);
    },
    run: function () {
        if (1 == this.enderDragonOrb || this.onScreen(1)) {
            if (3 != this.world.gamemode && 16 >= Math.pow(this.world.worldX - this.get_x(), 2) + Math.pow(this.world.worldY - 1.3333333333333333 - this.get_y(), 2) && (this.set_xSpeed(this.get_xSpeed() + Game.migrateAcc((this.world.worldX - this.get_x()) / 2.3333333333333335, .97)), this.set_ySpeed(this.get_ySpeed() + Game.migrateAcc((this.world.worldY - 1.3333333333333333 - this.get_y()) / 2.3333333333333335, .97)), this.set_x(this.get_x() + this.get_xSpeed() / 3 / 30), this.set_y(this.get_y() + this.get_ySpeed() / 3 / 30), .25 >= Math.pow(this.world.worldX - this.get_x(), 2) + Math.pow(this.world.worldY - 1.3333333333333333 - this.get_y(), 2))) {
                Math.floor(this.world.experience / 500) != Math.floor((this.world.experience + this.get_amount()) / 500) ? this.game.requestSound("levelup", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY) : this.game.requestSound("orb" + (5 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY);
                this.world.experience += this.get_amount();
                this.remove();
                return;
            }
            this.set_xSpeed(this.get_xSpeed() * Game.migrateDampening(.97));
            this.set_ySpeed(this.get_ySpeed() * Game.migrateDampening(.97));
            this.set_ySpeed(this.get_ySpeed() + Game.migrateAcc(.2, .97));
            this.game.collision(this.get_x(), this.get_y() + .16666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !1) && this.game.collision(this.get_x(), this.get_y() - .16666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !1) ? this.set_ySpeed(0) : this.game.collision(this.get_x(), this.get_y() + .16666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !1) && !this.game.collision(this.get_x(), this.get_y() - .16666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !1) ? (this.set_y(this.get_y() - .016666666666666666), this.set_ySpeed(0)) : this.game.collision(this.get_x(), this.get_y() - .16666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !1) && !this.game.collision(this.get_x(), this.get_y() + .16666666666666666, .03333333333333333, .03333333333333333, .03333333333333333, !1) && (this.set_y(this.get_y() + .016666666666666666), this.set_ySpeed(0));
            this.game.collision(this.get_x() + .16666666666666666, this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) && this.game.collision(this.get_x() - .16666666666666666, this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) ? this.set_xSpeed(0) : this.game.collision(this.get_x() + .16666666666666666, this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) && !this.game.collision(this.get_x() - .16666666666666666, this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) ? (this.set_x(this.get_x() - .016666666666666666), this.set_xSpeed(0)) : this.game.collision(this.get_x() - .16666666666666666, this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) && !this.game.collision(this.get_x() + .16666666666666666, this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) && (this.set_x(this.get_x() + .016666666666666666), this.set_xSpeed(0));
            this.set_x(this.get_x() + this.get_xSpeed() * (1 + (10 * Math.random() | 0) / 100) / 30);
            this.set_y(this.get_y() + this.get_ySpeed() * (1 + (10 * Math.random() | 0) / 100) / 30);
            this.set_timeout(this.get_timeout() - 1);
            0 >= this.get_timeout() || null == this.get_timeout() ? this.remove() : this.render();
        }
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 1);
        this.entityMatrix.reset().translate(-.1, -.1).translate(this.get_x(), this.get_y());
        b = Textures.getTexture("particle_xporb", Std.string(this.orbType));
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .2, .2), this.entityMatrix));
    },
    getData: function (b) {
        return js.Boot.__cast(this.data, Array)[b];
    },
    setData: function (b, a) {
        return js.Boot.__cast(this.data, Array)[b] = a;
    },
    get_x: function () {
        return this.getData(1);
    },
    set_x: function (b) {
        return this.setData(1, b);
    },
    get_y: function () {
        return this.getData(2);
    },
    set_y: function (b) {
        return this.setData(2, b);
    },
    get_xSpeed: function () {
        return this.getData(3);
    },
    set_xSpeed: function (b) {
        return this.setData(3, b);
    },
    get_ySpeed: function () {
        return this.getData(4);
    },
    set_ySpeed: function (b) {
        return this.setData(4, b);
    },
    get_amount: function () {
        return this.getData(5);
    },
    get_timeout: function () {
        return this.getData(6);
    },
    set_timeout: function (b) {
        return this.setData(6, b);
    },
    __class__: entities.Entity_XpOrb
})