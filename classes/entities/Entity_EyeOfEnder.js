entities.Entity_EyeOfEnder = function (b, a, c, d, f, g) {
    this._x = this._y = 0;
    this.entityMatrix = new lemongine.Matrix4();
    this.timer = 100;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_EyeOfEnder"] = entities.Entity_EyeOfEnder
entities.Entity_EyeOfEnder.__name__ = "entities.Entity_EyeOfEnder"
entities.Entity_EyeOfEnder.__super__ = entities.Entity_Base
entities.Entity_EyeOfEnder.prototype = z(entities.Entity_Base.prototype, {
    run: function () {
        100 == this.timer && (this.xSpeed = Game.migrateSpeed(5 * Math.cos(Math.atan2(-this.world.endPortal.y - this.get_y(), this.world.endPortal.x - this.get_x()))), this.ySpeed = Game.migrateSpeed(5 * Math.sin(Math.atan2(-this.world.endPortal.y - this.get_y(), this.world.endPortal.x - this.get_x()))));
        1 != GlobalSave.particles && .2 > Math.random() && this.game.addParticles("ender", 1, 0, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0));
        this.timer--;
        if (20 <= this.timer && (1.6666666666666667 < Math.abs(this.world.endPortal.x - this.get_x()) || 1.6666666666666667 < Math.abs(-this.world.endPortal.y - this.get_y()))) this.set_x(this.get_x() + this.xSpeed / 30), this.set_y(this.get_y() + this.ySpeed / 30);else if (0 > this.timer) {
            0 < (7 * Math.random() | 0) && this.game.addDrop("eoe", this.get_x(), this.get_y(), 1, null, null);
            this.game.addParticles("ender", 0, 10, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0));
            this.remove();
            return;
        }
        this.onScreen(1) && this.render();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 1);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).translate(this.get_x(), this.get_y());
        b = Textures.getTexture("eye_of_ender");
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
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
    __class__: entities.Entity_EyeOfEnder
})