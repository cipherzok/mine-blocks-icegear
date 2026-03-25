entities.Entity_FallingBlock = function (b, a, c, d, f, l) {
    this.isFrame1 = !0;
    this.dontHurt = new haxe.ds.StringMap();
    entities.Entity_Base.call(this, b, a, c, d, f, l);
}
m["entities.Entity_FallingBlock"] = entities.Entity_FallingBlock
entities.Entity_FallingBlock.__name__ = "entities.Entity_FallingBlock"
entities.Entity_FallingBlock.__super__ = entities.Entity_Base
entities.Entity_FallingBlock.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.fallingBlockNum = HxOverrides.substr(this.id, 12, 10);
    },
    run: function () {
        this.isFrame1 && (this.isFrame1 = !1);
        if (this.get_isTnt()) if (Object.prototype.hasOwnProperty.call(this.world.playingTNT.h, this.id)) {
            if (this.world.playingTNT.h[this.id] += 1, 4 == this.world.playingTNT.h[this.id] && this.game.requestSound("fuse", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), 200 <= this.world.playingTNT.h[this.id]) {
                this.game.explode(this.get_x() | 0, -this.get_y() | 0, 6);
                this.remove();
                return;
            }
        } else this.world.playingTNT.h[this.id] = 1;
        this.set_speedY(Math.min(Game.migrateSpeed(14), Math.max(Game.migrateSpeed(-30), this.get_speedY() + .5)));
        this.set_speedX(Math.min(Game.migrateSpeed(50), Math.max(Game.migrateSpeed(-50), this.get_speedX() * Game.migrateDampening(.98))));
        this.game.collision(this.get_x() + (-14 + this.get_speedX() / Game.migrateSpeed(1)) / 30, this.get_y() - .43333333333333335, .03333333333333333, .8666666666666667, .16666666666666666, !0, !1) && (this.set_x(Math.round(this.get_x() - .5) + .5), this.set_speedX(Math.abs(this.get_speedX()) / 2));
        this.game.collision(this.get_x() + (14 + this.get_speedX() / Game.migrateSpeed(1)) / 30, this.get_y() - .43333333333333335, .03333333333333333, .8666666666666667, .16666666666666666, !0, !1) && (this.set_x(Math.round(this.get_x() - .5) + .5), this.set_speedX(-Math.abs(this.get_speedX()) / 2));
        var b = !1;
        if ("anvil" == this.get_ty() && 0 < this.get_speedY()) {
            for (var a = Object.keys(this.world.mobs.h), c = a.length, d = 0; d < c;) {
                var f = a[d++];
                null == this.dontHurt.h[f] && .6666666666666666 > Math.abs(this.world.mobs.h[f].h.x - this.get_x()) && 1 > Math.abs(this.world.mobs.h[f].h.y - 2 - this.get_y()) && (null != this.game.getMob(f) && this.game.getMob(f).hurtMob(f, 2 * this.get_speedY(), "anvil"), this.dontHurt.h[f] = !0);
            }
            !Object.prototype.hasOwnProperty.call(this.dontHurt.h, this.world.player.id) && .6666666666666666 > Math.abs(this.world.worldX - this.get_x()) && 1 > Math.abs(this.world.worldY - 2 - this.get_y()) && (this.game.ouch(5 < this.get_speedY() / Game.migrateSpeed(1) ? 2 : 1, this.get_speedY() | 0, "anvil"), this.dontHurt.h[this.world.player.id] = !0);
        }
        this.game.collision(this.get_x() + (-5 + this.get_speedX() / Game.migrateSpeed(1)) / 30, this.get_y() + (-15 + this.get_speedY() / Game.migrateSpeed(1)) / 30, .3333333333333333, .03333333333333333, .16666666666666666, !0, !1) && (this.set_speedY(0), this.set_speedX(.5 * this.get_speedX()), this.set_y(Math.ceil(2 * this.get_y()) / 2));
        if (this.game.collision(this.get_x() + (-5 + this.get_speedX() / Game.migrateSpeed(1)) / 30, this.get_y() + (15 + this.get_speedY() / Game.migrateSpeed(1)) / 30, .03333333333333333, .03333333333333333, .16666666666666666, !0, !1) || this.game.collision(this.get_x() + (5 + this.get_speedX() / Game.migrateSpeed(1)) / 30, this.get_y() + (15 + this.get_speedY() / Game.migrateSpeed(1)) / 30, .03333333333333333, .03333333333333333, .16666666666666666, !0, !1)) b = !0, this.set_speedY(0), this.set_speedX(.8 * this.get_speedX()), this.set_y(Math.ceil(2 * this.get_y()) / 2);
        this.set_y(this.get_y() + this.get_speedY() / 30);
        this.set_x(this.get_x() + this.get_speedX() / 30);
        if (this.get_isTnt() || 0 != Math.round(this.get_speedX()) || 1 != b) 1 <= this.get_y() ? this.remove() : this.render();else {
            if (1 != BlockData.get(this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y())), "replaceable")) {
                if (1 != this.world.gamemode) if ("anvil" == this.get_ty() && null != this.get_extraInfo()) {
                    b = this.game;
                    a = this.get_ty();
                    c = this.get_x();
                    d = this.get_y();
                    f = new haxe.ds.StringMap();
                    var l = this.get_extraInfo();
                    f.h.damage = l;
                    b.addDrop(a, c, d, 1, null, f);
                } else this.game.addDrop(this.get_ty(), this.get_x(), this.get_y(), 1);
            } else this.game.requestRemove(Math.floor(this.get_x()), Math.floor(-this.get_y()), !0, !1, !0), "anvil" == this.get_ty() && (null != this.get_extraInfo() ? (b = this.world.states, a = "blockX" + Math.floor(this.get_x()) + "Y" + Math.floor(-this.get_y()), c = (.12 > Math.random() ? 1 : 0) + this.get_extraInfo(), b.h[a] = c) : (b = this.world.states, a = "blockX" + Math.floor(this.get_x()) + "Y" + Math.floor(-this.get_y()), c = .12 > Math.random() ? 1 : 0, b.h[a] = c + 1)), this.world.setFG(Math.floor(this.get_x()), Math.floor(-this.get_y()), this.get_ty()), "anvil" == this.get_ty() && this.game.requestSound("anvilsound", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, .5, 1);
            this.remove();
        }
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 0);
        if (null == this.item) if ("anvil" == this.get_ty()) {
            b = this.entity;
            var a = this.get_x(),
                c = this.get_y(),
                d = this.game,
                f = this.get_ty(),
                l = new haxe.ds.StringMap(),
                k = this.get_extraInfo();
            l.h.damage = k;
            this.item = new Item(b, a, c, d, [f, 1, 0, l]);
        } else this.item = new Item(this.entity, this.get_x(), this.get_y(), this.game, [this.get_ty(), 1, 0, this.get_extraInfo()]);
        this.get_isTnt() && (js.Boot.__cast(this.item.renderer, renderers.blocks.Q_TNT).fusePercentage = this.world.playingTNT.h[this.id] / 100 / 2, this.item.renderer.update());
        this.item.setPosition(this.get_x() - .5, this.get_y() - .5);
        this.item.render();
    },
    remove: function () {
        null != this.item && this.item.destroy();
        var b = this.id,
            a = this.world.playingTNT;
        Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
        entities.Entity_Base.prototype.remove.call(this);
    },
    getData: function (b) {
        return js.Boot.__cast(this.data, Array)[b];
    },
    setData: function (b, a) {
        return js.Boot.__cast(this.data, Array)[b] = a;
    },
    get_x: function () {
        return this.getData(2);
    },
    set_x: function (b) {
        return this.setData(2, b);
    },
    get_y: function () {
        return this.getData(3);
    },
    set_y: function (b) {
        return this.setData(3, b);
    },
    get_ty: function () {
        return this.getData(1);
    },
    get_speedX: function () {
        return this.getData(4);
    },
    set_speedX: function (b) {
        return this.setData(4, b);
    },
    get_speedY: function () {
        return this.getData(5);
    },
    set_speedY: function (b) {
        return this.setData(5, b);
    },
    get_isTnt: function () {
        return this.getData(7);
    },
    get_extraInfo: function () {
        return this.getData(8);
    },
    __class__: entities.Entity_FallingBlock
})