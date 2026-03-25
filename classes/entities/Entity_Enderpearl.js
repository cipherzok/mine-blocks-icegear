entities.Entity_Enderpearl = function (b, a, c, d, f, g) {
    this._x = this._y = 0;
    this.entityMatrix = new lemongine.Matrix4();
    this.doLogic = !0;
    this.playing = !1;
    this.frame = 1;
    this.rotation = 0;
    this.henry = !1;
    this.xSpeed = this.ySpeed = 0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Enderpearl"] = entities.Entity_Enderpearl
entities.Entity_Enderpearl.__name__ = "entities.Entity_Enderpearl"
entities.Entity_Enderpearl.__super__ = entities.Entity_Base
entities.Entity_Enderpearl.prototype = z(entities.Entity_Base.prototype, {
    gotoAndStop: function (b) {
        this.frame = 2 * (b - 1) + 1;
    },
    init: function () {
        this.entityPoolID = "projectile";
    },
    run: function () {
        this.onScreen(1);
        if (this.henry && this.playing && (this.frame++, 6 == this.frame && this.game.requestSound("teleporter", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), this.frame > entities.Entity_Enderpearl.frameNums.length)) {
            if (!Object.prototype.hasOwnProperty.call(this.world.entities.h, "henry_" + this.world.player.id)) {
                var b = this.world.entities,
                    a = "henry_" + this.world.player.id,
                    c = new entities.Entity_Henry("henry", new haxe.ds.StringMap(), "henry_" + this.world.player.id, [], this.game, this.world);
                b.h[a] = c;
            }
            js.Boot.__cast(this.world.entities.h["henry_" + this.world.player.id], entities.Entity_Henry).play();
            this.remove();
            return;
        }
        if (this.doLogic) {
            1 == this.henry && (this.gotoAndStop(2), this.rotation += .05555555555555555 * Math.PI / 2);
            b = Object.keys(this.world.mobs.h);
            a = b.length;
            for (c = 0; c < a;) {
                var d = b[c++];
                if (Math.round(this.world.mobs.h[d].h.x / 80 * 30) == Math.round(this.get_x() / 80 * 30) && Math.round(this.world.mobs.h[d].h.y / 80 * 30) == Math.round(this.get_y() / 80 * 30)) {
                    null != this.game.getMob(d) && this.game.getMob(d).hurtMob(d, 1, "enderpearl");
                    b = 0;
                    null != this.world.armors[3][2] && (Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "protectionFalling1") && (b = 2), Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "protectionFalling2") && (b += 3), Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "protectionFalling3") && (b += 4));
                    this.world.health -= 5 - b;
                    this.game.unlockAchieve(34);
                    this.world.worldX = this.get_x();
                    this.world.worldY = this.get_y();
                    this.world.riding = "";
                    this.game.addParticles("ender", 1, 5, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y() - 1.5, 1));
                    1 == this.henry ? (this.rotation = 0, this.playing = !0, this.doLogic = !1) : this.remove();
                    return;
                }
            }
            "air" != this.world.getFG(Math.round(this.get_x()), Math.round(-this.get_y() - 1)) && null == BlockData.get(this.world.getFG(Math.round(this.get_x()), Math.round(-this.get_y() - 1)), "walkThroughBlockHit") ? (b = 0, null != this.world.armors[3][2] && (Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "protectionFalling1") && (b = 2), Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "protectionFalling2") && (b += 3), Object.prototype.hasOwnProperty.call(Game.makeDynamicMap(this.world.armors[3][2]).h, "protectionFalling3") && (b += 4)), this.world.health -= 5 - b, this.game.unlockAchieve(34), this.world.worldX = this.get_x(), this.world.worldY = this.get_y(), this.world.riding = "", this.game.addParticles("ender", 1, 5, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y() - 1.5, 1)), 1 == this.henry ? (this.rotation = 0, this.playing = !0, this.doLogic = !1) : this.remove()) : (this.ySpeed += Game.migrateAcc(.5, 1), this.set_x(this.get_x() + this.xSpeed / 30), this.set_y(this.get_y() + this.ySpeed / 30), this.render());
        } else this.render();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 2);
        2 >= this.frame ? (this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).rotate(this.rotation, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("ender_pearl").x, Textures.getTexture("ender_pearl").y), new lemongine.Point(Textures.getTexture("ender_pearl").width, Textures.getTexture("ender_pearl").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix)), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point())) : 4 >= this.frame ? (this.entityMatrix.reset().translate(-.26666666666666666, -.23333333333333334).scale2D(1.439987).rotate(this.rotation, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("teleporter").x, Textures.getTexture("teleporter").y), new lemongine.Point(Textures.getTexture("teleporter").width, Textures.getTexture("teleporter").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix)), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point())) : this.frame < entities.Entity_Enderpearl.frameNums.length && (b = 10 + entities.Entity_Enderpearl.frames[entities.Entity_Enderpearl.frameNums[this.frame]].y, this.entityMatrix.reset().translate(-.4, -(b / 30)).scale2D(1.583954).rotate(this.rotation, new lemongine.Vector3(0, 0, -1)).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30), entities.Entity_Enderpearl.frames[entities.Entity_Enderpearl.frameNums[this.frame]].tV ? this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("teleporter_broken").x, Textures.getTexture("teleporter_broken").y), new lemongine.Point(Textures.getTexture("teleporter_broken").width, Textures.getTexture("teleporter_broken").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .8, .5333333333333333), this.entityMatrix)) : this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(), new lemongine.Point()), entities.Entity_Enderpearl.frames[entities.Entity_Enderpearl.frameNums[this.frame]].sV ? this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(Textures.getTexture("teleporter_sparks").x, Textures.getTexture("teleporter_sparks").y), new lemongine.Point(Textures.getTexture("teleporter_sparks").width, Textures.getTexture("teleporter_sparks").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .8, .5333333333333333), this.entityMatrix)) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point()));
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
    __class__: entities.Entity_Enderpearl
})
entities.Entity_Enderpearl.frameNums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11]
entities.Entity_Enderpearl.frames = [{
    y: 0,
    tV: !0,
    sV: !1
}, {
    y: 1,
    tV: !0,
    sV: !1
}, {
    y: 2,
    tV: !0,
    sV: !1
}, {
    y: 3,
    tV: !0,
    sV: !0
}, {
    y: 3,
    tV: !0,
    sV: !1
}, {
    y: 3,
    tV: !0,
    sV: !0
}, {
    y: 3,
    tV: !0,
    sV: !1
}, {
    y: 3,
    tV: !1,
    sV: !0
}, {
    y: 3,
    tV: !0,
    sV: !1
}, {
    y: 3,
    tV: !1,
    sV: !1
}, {
    y: 3,
    tV: !1,
    sV: !0
}, {
    y: 3,
    tV: !0,
    sV: !1
}]