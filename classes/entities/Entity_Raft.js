entities.Entity_Raft = function (b, a, c, d, f, g) {
    this.entityMatrix = new lemongine.Matrix4();
    this.fallingOrInWater = !1;
    this.tilt = this.rotation = 0;
    this.damag = 3;
    this.hitTimer = 60;
    this.maxSpeed = 50;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Raft"] = entities.Entity_Raft
entities.Entity_Raft.__name__ = "entities.Entity_Raft"
entities.Entity_Raft.__super__ = entities.Entity_Base
entities.Entity_Raft.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        entities.Entity_Base.prototype.init.call(this);
    },
    run: function () {
        if (this.onScreen(2)) {
            this.hitTimer--;
            0 >= this.hitTimer && (this.damag = Math.min(this.damag + 1, 3), this.hitTimer = 2.4 * Main.Instance.get_fps() | 0);
            this.tilt = (this.tilt += Game.migrateAcc(-this.rotation / 10, .93)) * Game.migrateDampening(.93);
            this.rotation += Game.migrateSpeed(this.tilt);
            if (0 == this.world.tick % 10) {
                var b = this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y()));
                "la" == b || "ad" == b ? (this.damag = 0, this.game.requestSound("sizzle", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), this.game.addParticles("smoke", 1, 1, new lemongine.Point(this.get_x() - .5, .5), new lemongine.Point(this.get_y() - .5, .5))) : "ct" == b && (this.damag = 0);
            }
            if (0 >= this.damag) 1 != this.world.gamemode && this.game.addDrop("bb", this.get_x(), this.get_y() - .5, (3 * Math.random() | 0) + 3, null, null), this.world.riding == this.id && (this.world.riding = ""), this.remove();else {
                1 != BlockData.get(this.world.getFG(Math.round(this.get_x() - 1.5), Math.round(-(this.get_y() + .5))), "liquidCollision") && "lp" != this.world.getFG(Math.round(this.get_x() - 1.5), Math.round(-(this.get_y() + .5))) && null == BlockData.get(this.world.getFG(Math.round(this.get_x() - 1.5), Math.round(-(this.get_y() + .5))), "walkThroughBlockHit") && this.set_xSpeed(Math.max(0, this.get_xSpeed()));
                1 != BlockData.get(this.world.getFG(Math.round(this.get_x() + .5), Math.round(-(this.get_y() + .5))), "liquidCollision") && "lp" != this.world.getFG(Math.round(this.get_x() + .5), Math.round(-(this.get_y() + .5))) && null == BlockData.get(this.world.getFG(Math.round(this.get_x() + .5), Math.round(-(this.get_y() + .5))), "walkThroughBlockHit") && this.set_xSpeed(Math.min(0, this.get_xSpeed()));
                this.fallingOrInWater = !1;
                BlockData.get(this.world.getFG(Math.round(this.get_x() - .5), Math.round(-(this.get_y() + this.get_ySpeed() / 30 + .5))), "liquidCollision") && (3 < Math.abs(this.get_xSpeed()) && this.game.addParticles("water", 1, 0, new lemongine.Point(this.get_x() + (10 * Math.random() - 5) / 30, 0), new lemongine.Point(this.get_y() + (10 * Math.random() - 5) / 30, 0)), this.rotation += ((9 * Math.random() | 0) - 4) / 5, this.set_ySpeed(this.get_ySpeed() - Game.migrateAcc(2, .9)), this.fallingOrInWater = !0);
                if (!BlockData.get(this.world.getFG(Math.round(this.get_x() - .5), Math.round(-(this.get_y() + this.get_ySpeed() / 30 + .5))), "liquidCollision")) if (null != BlockData.get(this.world.getFG(Math.round(this.get_x() - .5), Math.round(-(this.get_y() + this.get_ySpeed() / 30 + .5))), "walkThroughBlockHit") || "lp" == this.world.getFG(Math.round(this.get_x() - .5), Math.round(-(this.get_y() + this.get_ySpeed() / 30 + .5)))) this.set_ySpeed(this.get_ySpeed() + Game.migrateAcc(2, .9)), this.fallingOrInWater = !0;else if (null != BlockData.get(this.world.getFG(Math.round(this.get_x() - .5), Math.round(-(this.get_y() + this.get_ySpeed() / 30 + .6666666666666666))), "walkThroughBlockHit") || "lp" == this.world.getFG(Math.round(this.get_x() - .5), Math.round(-(this.get_y() + this.get_ySpeed() / 30 + .5)))) this.set_xSpeed(this.get_xSpeed() * Game.migrateDampening(.9)), this.set_ySpeed(this.get_ySpeed() + Game.migrateAcc(2, .9)), this.fallingOrInWater = !0;
                if (!this.fallingOrInWater) {
                    if (12 < Math.abs(this.get_ySpeed()) || 10 < Math.abs(this.get_xSpeed())) {
                        this.game.addDrop("bb", this.get_x(), this.get_y(), (3 * Math.random() | 0) + 3, null, null);
                        this.world.riding == this.id && (this.world.riding = "");
                        this.remove();
                        return;
                    }
                    this.set_ySpeed(0);
                    this.set_xSpeed(this.get_xSpeed() * Game.migrateDampening(.7));
                }
                this.set_xSpeed(this.get_xSpeed() * Game.migrateDampening(.99));
                this.set_ySpeed(this.get_ySpeed() * Game.migrateDampening(.9));
                this.set_x(this.get_x() + Math.min(this.maxSpeed / 2, Math.max(-this.maxSpeed / 2, this.get_xSpeed())) / 30);
                this.set_y(this.get_y() + this.get_ySpeed() / 30);
                "char" == this.get_riddenBy() ? this.world.riding != this.id ? this.set_riddenBy(null) : (this.world.worldX = this.get_x(), b = this.get_y(), this.world.worldY = b + .6666666666666666, this.game.resetCamera(), this.game.rightKey && this.set_xSpeed(Math.min(this.maxSpeed, this.get_xSpeed() + Game.migrateAcc(.4, .99))), this.game.leftKey && this.set_xSpeed(Math.max(-this.maxSpeed, this.get_xSpeed() - Game.migrateAcc(.4, .99))), this.game.upKey && (this.world.ySpeed = this.get_ySpeed(), this.world.xSpeed = .7 * -this.get_xSpeed(), this.world.riding = "", this.set_riddenBy(null))) : this.world.riding == this.id && (this.world.riding = "");
                this.render();
            }
        }
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 1);
        this.entityMatrix.reset().translate(-.5333333333333333, -.26666666666666666).scale2D(2).rotate2D(-this.rotation / 180 * Math.PI).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor(this.get_y() * this.game.zoom) / this.game.zoom);
        b = Textures.getTexture("raft");
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1.0666666666666667, .5333333333333333), this.entityMatrix));
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
    get_riddenBy: function () {
        return this.getData(5);
    },
    set_riddenBy: function (b) {
        return this.setData(5, b);
    },
    __class__: entities.Entity_Raft
})