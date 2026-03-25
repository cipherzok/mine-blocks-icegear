entities.Entity_Bobber = function (b, a, c, d, f, l) {
    this._x = this._y = 0;
    this.bobberQuad = -1;
    this.entityMatrix = new lemongine.Matrix4();
    this.handX = this.handY = 0;
    var p = new haxe.ds.StringMap();
    p.h.ty = "";
    p.h.count = 1;
    p.h.damage = 0;
    p.h.extras = new haxe.ds.StringMap();
    this.pickedItem = p;
    this.middleThing2 = new lemongine.Point(0, 0);
    this.middleThing = new lemongine.Point(0, 0);
    this.fishingCountdown = 0;
    this.fishing = !1;
    this.trackingPositiveScale = !0;
    this.trackingPos = new lemongine.Point(0, 0);
    this.tracking = "";
    this.reeling = !1;
    this.xSpeed = this.ySpeed = 0;
    this.throwSpeed = 15;
    this.visible = this.itemVisible = !1;
    entities.Entity_Base.call(this, b, a, c, d, f, l);
}
m["entities.Entity_Bobber"] = entities.Entity_Bobber
entities.Entity_Bobber.__name__ = "entities.Entity_Bobber"
entities.Entity_Bobber.__super__ = entities.Entity_Base
entities.Entity_Bobber.prototype = z(entities.Entity_Base.prototype, {
    init: function () {},
    throwIt: function () {
        if (this.visible) {
            if (!this.reeling) if (this.reeling = !0, this.fishing && 0 >= this.fishingCountdown && -100 <= this.fishingCountdown) {
                this.game.damageTool();
                var b = 100 * Math.random() | 0,
                    a = 0,
                    c = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(c.h, "lure1") ? a = 1 : (c = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(c.h, "lure2") ? a = 2 : (c = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(c.h, "lure3") && (a = 3)));
                var d = 0;
                c = this.world.get_selectedInventoryItemExtra();
                Object.prototype.hasOwnProperty.call(c.h, "luckOfTheSea1") ? d = 1 : (c = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(c.h, "luckOfTheSea2") ? d = 2 : (c = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(c.h, "luckOfTheSea3") && (d = 3)));
                this.pickedItem.h.extras = new haxe.ds.StringMap();
                this.pickedItem.h.damage = 0;
                this.pickedItem.h.count = 1;
                b < 85 - 3 * d + 2 * a ? (c = 100 * Math.random() | 0, 60 > c ? this.pickedItem.h.ty = "fi" : 85 > c ? this.pickedItem.h.ty = "salmon" : 97 > c ? this.pickedItem.h.ty = "puff" : 100 >= c && (this.pickedItem.h.ty = "clown"), this.game.unlockAchieve(39)) : b < 95 - 2 * d + .5 * a ? (c = Math.floor(70 * Math.random()), 5 > c ? this.pickedItem.h.ty = "bowl" : 10 > c ? this.pickedItem.h.ty = "leather" : 15 > c ? this.pickedItem.h.ty = "LeatherShoes" : 20 > c ? this.pickedItem.h.ty = "rf" : 25 > c ? this.pickedItem.h.ty = "st" : 30 > c ? this.pickedItem.h.ty = "fiber" : 35 > c ? (this.pickedItem.h.ty = "potion", Game.makeDynamicMap(this.pickedItem.h.extras).h.type = "water") : 40 > c ? this.pickedItem.h.ty = "bone" : 43 > c ? (this.pickedItem.h.ty = "fr", c = this.pickedItem, b = BlockData.get("fr", "life") * (.4 * Math.random() + .5) | 0, c.h.damage = b) : 47 > c ? this.pickedItem.h.ty = "dt" : 52 > c ? (this.pickedItem.h.ty = "sw", c = this.pickedItem, b = 3 * Math.random() + 1 | 0, c.h.count = b) : 56 > c ? (this.pickedItem.h.ty = "coral", this.pickedItem.h.count = 1) : 61 > c ? (this.pickedItem.h.ty = "ink", this.pickedItem.h.count = 1) : 66 > c ? (this.pickedItem.h.ty = "cy", this.pickedItem.h.count = 1) : 70 > c && (this.pickedItem.h.ty = "sd")) : 100 >= b && (c = 10 * Math.random() | 0, 2 > c ? (this.pickedItem.h.ty = "bow", c = this.pickedItem, b = BlockData.get("bow", "life") * (.5 * Math.random() + .4) | 0, c.h.damage = b, this.game.enchant("bow", this.pickedItem.h.extras, 10 * Math.random() + 20 | 0)) : 4 > c ? (this.pickedItem.h.ty = "fr", c = this.pickedItem, b = BlockData.get("fr", "life") * (.5 * Math.random() + .4) | 0, c.h.damage = b, this.game.enchant("fr", this.pickedItem.h.extras, 10 * Math.random() + 20 | 0)) : 5 > c ? (this.pickedItem.h.ty = "ebook", this.game.enchant("ebook", this.pickedItem.h.extras, 10 * Math.random() + 20 | 0)) : 7 > c ? this.pickedItem.h.ty = "tag" : 8 > c ? this.pickedItem.h.ty = "saddle" : 10 >= c && (this.pickedItem.h.ty = "lp"));
                this.game.dropXP(this.world.worldX, this.world.worldY, 3, 2);
                this.itemVisible = !0;
            } else "" != this.tracking && null != this.world.mobs.h[this.tracking] && (c = Math.atan2(-(this.get_y() - (this.world.worldY - 1.5)), this.get_x() - this.world.worldX), this.world.mobs.h[this.tracking].h.speedX = -Game.migrateSpeed(30 * Math.cos(c)), this.world.mobs.h[this.tracking].h.speedY = -Game.migrateSpeed(30 * Math.sin(c)), c = this.world.mobs.h[this.tracking], c.h.y -= .16666666666666666);
        } else this.set_x(this.world.worldX), this.set_y(this.world.worldY - 1.5), this.middleThing.x = this.middleThing2.x = 0, this.middleThing.y = this.middleThing2.y = 0, c = Math.atan2(this.game.mouseWorldPosition.y - (this.world.worldY - 1.5), this.game.mouseWorldPosition.x - this.world.worldX), this.xSpeed = Game.migrateSpeed(Math.cos(c) * this.throwSpeed), this.ySpeed = Game.migrateSpeed(Math.sin(c) * this.throwSpeed), this.reeling = !1, this.tracking = "", this.fishing = !1, this.visible = !0, this.itemVisible = !1;
    },
    run: function () {
        this.onScreen(5);
        if ("fr" != this.world.get_selectedInventoryItemType()) this.visible = !1, this.remove();else {
            if (this.reeling) {
                this.handX = this.world.worldX - this.get_x() + 8 * (0 > this.game.characterXScale ? 1 : -1) / 30;
                this.handY = this.world.worldY - this.get_y() - 1.1;
                var b = Math.atan2(this.handY, this.handX),
                    a = Game.migrateSpeed(Math.max(.6666666666666666, Math.sqrt(this.handX * this.handX + this.handY * this.handY) / 3));
                this.set_x(this.get_x() + Math.cos(b) * a);
                this.set_y(this.get_y() + Math.sin(b) * a);
                this.handX = this.world.worldX - this.get_x() + 8 * (0 > this.game.characterXScale ? 1 : -1) / 30;
                this.handY = this.world.worldY - this.get_y() - 1.1;
                "" != this.tracking && null != this.world.mobs.h[this.tracking] && 1.5 > Math.abs(this.world.mobs.h[this.tracking].h.x - this.get_x()) && 1.5 > Math.abs(this.world.mobs.h[this.tracking].h.y - 1.1 - this.get_y()) && (this.world.mobs.h[this.tracking].h.speedX = Game.migrateSpeed(15 * this.handX), this.world.mobs.h[this.tracking].h.speedY = -Game.migrateSpeed(15 * this.handY));
                if (3.3333333333333335 > this.handX * this.handX + this.handY * this.handY) {
                    this.itemVisible && (b = this.game.addDrop(this.pickedItem.h.ty, this.get_x(), this.get_y(), this.pickedItem.h.count, this.pickedItem.h.damage, this.pickedItem.h.extras), null != b && null != this.world.entities.h[b] && (js.Boot.__cast(this.world.entities.h[b], entities.Entity_Drop).speedX = this.handX / 8 * 30, js.Boot.__cast(this.world.entities.h[b], entities.Entity_Drop).speedY = this.handY / 8 * 30), this.itemVisible = !1);
                    this.visible = !1;
                    this.remove();
                    return;
                }
            } else if ("" != this.tracking && null != this.world.mobs.h[this.tracking]) this.set_x(this.world.mobs.h[this.tracking].h.x - (this.trackingPositiveScale != 0 < this.world.mobs.h[this.tracking].h.direction ? -1 : 1) * this.trackingPos.x), this.set_y(this.world.mobs.h[this.tracking].h.y - this.trackingPos.y);else {
                this.tracking = "";
                if (!this.fishing) {
                    b = Object.keys(this.world.mobs.h);
                    a = b.length;
                    for (var c = 0; c < a;) {
                        var d = b[c++];
                        if (1 > Math.abs(this.world.mobs.h[d].h.x - this.get_x()) && 1 > Math.abs(this.world.mobs.h[d].h.y - 1 - this.get_y())) {
                            this.tracking = d;
                            this.trackingPositiveScale = 0 < this.world.mobs.h[d].h.direction;
                            var f = this.world.mobs.h[d].h.x,
                                g = this.get_x();
                            this.trackingPos.x = f - g;
                            d = this.world.mobs.h[d].h.y;
                            f = this.get_y();
                            this.trackingPos.y = d - f;
                        }
                    }
                }
                this.game.collision(this.get_x(), this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333) ? this.ySpeed = this.xSpeed = 0 : (0 > this.world.xSpeed == 0 > this.xSpeed && (this.xSpeed -= this.world.xSpeed / 5), BlockData.get(this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y())), "liquid") || "sw" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y())) ? (this.ySpeed -= Game.migrateAcc(.5, .582), this.xSpeed *= Game.migrateDampening(.5), this.ySpeed *= Game.migrateDampening(.6)) : this.ySpeed += Game.migrateAcc(.5, .97), this.xSpeed *= Game.migrateDampening(.99), this.ySpeed *= Game.migrateDampening(.97), this.set_x(this.get_x() + this.xSpeed / 30), this.set_y(this.get_y() + this.ySpeed / 30));
                "wr" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-(this.get_y() + .5))) || "sw" == this.world.getFG(Math.floor(this.get_x()), Math.floor(-(this.get_y() + .5))) ? this.fishing ? (this.fishingCountdown--, 0 == this.fishingCountdown && (this.game.requestSound("splash", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1), this.set_y(this.get_y() + .16666666666666666), this.ySpeed = Game.migrateSpeed(-7), this.game.addParticles("water", 0, 5, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y(), 0)))) : (this.fishing = !0, b = 0, a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "lure1") ? b = 1 : (a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "lure2") ? b = 2 : (a = this.world.get_selectedInventoryItemExtra(), Object.prototype.hasOwnProperty.call(a.h, "lure3") && (b = 3))), this.fishingCountdown = (4 + Math.random() * (20 - 4 * b)) * (0 < this.world.raining ? .8 : 1) * 50 | 0) : 0 < this.fishingCountdown && (this.fishing = !1);
            }
            this.handX = this.world.worldX - this.get_x() + (0 > this.game.characterXScale ? 1 : -1) * (3 == this.game.animate ? 40 : 8) / 30;
            this.handY = this.world.worldY - this.get_y() - 1.1;
            400 < this.handX * this.handX + this.handY * this.handY ? (this.visible = !1, this.remove()) : (this.middleThing2.x -= Game.migrateSpeed(.2 * (this.middleThing.x - .7 * this.handX)), this.middleThing2.y -= Game.migrateSpeed(.2 * (this.middleThing.y - Math.max(.2 * this.handY, .8 * this.handY))), this.middleThing2.x *= Game.migrateDampening(.9), this.middleThing2.y *= Game.migrateDampening(.9), this.middleThing.x += this.middleThing2.x, this.middleThing.y += this.middleThing2.y, this.render());
        }
    },
    render: function (b) {
        if (null == this.game.entityPools.h[this.entityPoolID]) {
            b = this.game.entityPools;
            var a = this.entityPoolID,
                c = this.entityPoolID,
                d = Textures.blockTextures,
                f = shader.BlockShader.getShader(),
                l = new haxe.ds.StringMap(),
                p = lemongine.Mathz.repeatArray([1], 24);
            l.h.color = p;
            p = lemongine.Mathz.repeatArray([0], 24);
            l.h.colorOffset = p;
            c = new EntityPool(c, new QuadPoolEntity_MatrixState(d, null, f, l), this.getEntityScale());
            b.h[a] = c;
            this.game.entityPools.h[this.entityPoolID].entity.isTransparent = !0;
            this.game.entityPools.h[this.entityPoolID].entity.layer = 0;
        }
        entities.Entity_Base.prototype.render.call(this);
        this.itemVisible ? (null == this.item && (-1 != this.bobberQuad && (this.entity.removeQuad(this.bobberQuad), this.bobberQuad = -1), this.item = new Item(this.entity, 0, 0, this.game, [this.pickedItem.h.ty, this.pickedItem.h.count, this.pickedItem.h.damage, this.pickedItem.h.extras])), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset().translate(-.5, -.5).scale2D(13.5 / this.game.zoom).translate(0, .3783333333333333).translate(this.get_x(), this.get_y()), this.item.render(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset()) : null != this.item && null != this.item.renderer && 0 < this.item.renderer.quadPositions.length && this.item.destroy();
        -1 == this.bobberQuad && (this.bobberQuad = this.itemVisible ? this.entity.nearestConsecutiveEmpty(1, Math.max(this.item.enchantmentGlintQuad, this.item.renderer.quadPositions[this.item.renderer.quadPositions.length - 1]) | 0) : this.entity.nearestConsecutiveEmpty(1), this.quadPositions.push(this.bobberQuad));
        this.entityMatrix.reset().translate(-.06666666666666667, -.16666666666666666).scale2D(1.5).translate(0, .14666666666666667).translate(this.get_x(), this.get_y());
        this.entity.updateQuad(this.bobberQuad, null, new lemongine.Point(Textures.getTexture("bobber").x, Textures.getTexture("bobber").y), new lemongine.Point(Textures.getTexture("bobber").width, Textures.getTexture("bobber").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, Textures.getTexture("bobber").width / 30, Textures.getTexture("bobber").height / 30), this.entityMatrix));
        this.entityMatrix.reset().translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor(this.get_y() * this.game.zoom) / this.game.zoom).scale(this.game.zoom, this.game.zoom, this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        b = this.entityMatrix.apply(new lemongine.Vector3(this.handX, this.handY));
        a = this.entityMatrix.apply(new lemongine.Vector3(0, 0, 0));
        c = this.entityMatrix.apply(new lemongine.Vector3(this.middleThing.x, this.middleThing.y, 0));
        this.game.vectorRenderer.beginPath();
        this.game.vectorRenderer.lineStyle(this.game.zoom / 30, new lemongine.Color(-1));
        this.game.vectorRenderer.moveTo(b.x, b.y);
        this.game.vectorRenderer.curveTo(c.x, c.y, a.x, a.y);
        this.game.vectorRenderer.stroke();
        this.game.vectorRenderer.endPath();
    },
    destroy: function () {
        null != this.item && this.item.destroy();
        entities.Entity_Base.prototype.destroy.call(this);
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
    __class__: entities.Entity_Bobber
})