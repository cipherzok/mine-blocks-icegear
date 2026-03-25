entities.Entity_Drop = function (b, a, c, d, f, g) {
    this.wasOnScreen = !1;
    this.firstFrame = !0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Drop"] = entities.Entity_Drop
entities.Entity_Drop.__name__ = "entities.Entity_Drop"
entities.Entity_Drop.__super__ = entities.Entity_Base
entities.Entity_Drop.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.bobTick = Math.floor(100 * Math.random());
    },
    run: function () {
        if (this.onScreen(1)) this.render(), this.wasOnScreen = !0;else if (this.wasOnScreen && (this.wasOnScreen = !1, this.item.destroy()), !this.onScreen(20)) return;
        if (0 == lemongine.Mathz.modulus(this.world.tick, Main.Instance.get_fps()) && (this.set_life(this.get_life() + 1), 300 < this.get_life())) {
            this.remove();
            return;
        }
        this.firstFrame && (this.firstFrame = !1);
        this.bobTick++;
        var b = this.speedY;
        isNaN(b) ? b = !0 : (b = this.speedX, b = isNaN(b));
        b && (this.speedX = this.speedY = 0);
        this.set_x(this.get_x() + this.speedX / 30);
        this.set_y(this.get_y() + this.speedY / 30);
        this.speedX *= Game.migrateDampening(.8);
        this.speedY *= Game.migrateDampening(.9);
        b = Math.floor(this.get_x());
        var a = Math.floor(-this.get_y());
        if (null == this.get_ty()) this.remove();else if ("Dragon" == HxOverrides.substr(this.get_ty(), 0, 6) || "degg" == this.get_ty() || "la" != this.world.getFG(b, a) && "ad" != this.world.getFG(b, a) && "fire" != this.world.getFG(b, a)) {
            var c = !1;
            1 == BlockData.get(this.world.getFG(b, Math.floor(-this.get_y() - .16666666666666666)), "walkThroughBlockHit") ? (c = !0, this.speedY += Game.migrateAcc(1, .9)) : 4 < this.speedY && "slimeb" == this.world.getFG(b, Math.floor(-this.get_y() - .16666666666666666)) ? this.speedY = -this.speedY : this.speedX = this.speedY = 0;
            var d = "blockX" + b + "Y" + a;
            Object.prototype.hasOwnProperty.call(this.world.water.h, d) && (this.world.water.h[d][0] > this.world.water.h[d][1] ? this.speedX += Game.migrateAcc(1, .8) : this.world.water.h[d][0] < this.world.water.h[d][1] && (this.speedX -= Game.migrateAcc(1, .8)), 1 == this.world.states.h[d] ? this.speedY -= Game.migrateAcc(3, .9) : -1 == this.world.states.h[d] && c && (this.speedY += Game.migrateAcc(1, .9)));
            if (1 != BlockData.get(this.world.getFG(b, a), "walkThroughBlockHit")) {
                b = 0;
                a = !1;
                for (c = 5; 300 > c;) {
                    for (b = 0; b < 2 * Math.PI;) {
                        if (1 == BlockData.get(this.world.getFG(Math.floor(this.get_x() + Math.cos(b + Math.PI / 2) * c / 30), Math.floor(-this.get_y() - Math.sin(b + Math.PI / 2) * c / 30)), "walkThroughBlockHit")) {
                            a = !0;
                            break;
                        }
                        b += Math.PI / 8;
                    }
                    if (a) break;
                    c += Math.floor(5 * (1 + c / 30));
                }
                a && (this.set_x(this.get_x() + 5 * Math.cos(b + Math.PI / 2) / 30), this.set_y(this.get_y() + 5 * Math.sin(b + Math.PI / 2) / 30));
            }
            3 != this.world.gamemode && 1.5 > Math.abs(this.world.worldX - this.get_x()) && 1.5 > Math.abs(this.world.worldY - 1 - this.get_y()) && (b = this.game.addToInventory(this.get_ty(), this.get_quantity(), this.get_damage(), this.get_extra()), 0 < b && (this.game.requestSound("pop", 0, 0, 1, 1), this.set_quantity(this.get_quantity() - b)), 0 == this.get_quantity() && this.remove());
        } else this.game.requestSound("sizzle", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), this.remove();
    },
    getEntityScale: function () {
        return entities.Entity_Drop.DROP_SCALE;
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 0);
        null == this.item && (this.item = new Item(this.entity, this.get_x(), this.get_y(), this.game, [this.get_ty(), this.get_quantity(), this.get_damage(), this.get_extra()]));
        this.item.setPosition(this.get_x() / entities.Entity_Drop.DROP_SCALE - .5, (this.get_y() - (4 * Math.sin(this.bobTick / (10 * Main.Instance.get_fps() / 25)) + 9) / 30) / entities.Entity_Drop.DROP_SCALE - .5, !1);
        this.item.render();
    },
    remove: function () {
        null != this.item && this.item.destroy();
        entities.Entity_Base.prototype.remove.call(this);
    },
    getData: function (b) {
        return js.Boot.__cast(this.data, Array)[b];
    },
    setData: function (b, a) {
        return js.Boot.__cast(this.data, Array)[b] = a;
    },
    get_x: function () {
        return this.getData(0);
    },
    set_x: function (b) {
        return this.setData(0, b);
    },
    get_y: function () {
        return this.getData(1);
    },
    set_y: function (b) {
        return this.setData(1, b);
    },
    get_ty: function () {
        return this.getData(2);
    },
    get_life: function () {
        return this.getData(3);
    },
    set_life: function (b) {
        return this.setData(3, b);
    },
    get_damage: function () {
        return this.getData(4);
    },
    get_quantity: function () {
        return this.getData(5);
    },
    set_quantity: function (b) {
        return this.setData(5, b);
    },
    get_extra: function () {
        return this.getData(6);
    },
    __class__: entities.Entity_Drop
})
entities.Entity_Drop.DROP_SCALE = .375