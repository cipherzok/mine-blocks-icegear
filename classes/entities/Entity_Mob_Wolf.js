entities.Entity_Mob_Wolf = function (b, a, c) {
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Wolf"] = entities.Entity_Mob_Wolf
entities.Entity_Mob_Wolf.__name__ = "entities.Entity_Mob_Wolf"
entities.Entity_Mob_Wolf.__super__ = entities.Entity_Mob
entities.Entity_Mob_Wolf.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 4);
        this.entityMatrix.reset().translate(-.36666666666666664, -.5333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(2.7 * this.scaleX, 2.7 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        var a = this.quadPositions[0],
            c = new lemongine.Point(128 + (this.currentFrame - 1) % 5 * 22, 64 + 16 * Math.floor((this.currentFrame - 1) / 5)),
            d = new lemongine.Point(22, 16),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .7333333333333333, .5333333333333333), this.entityMatrix),
            l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        this.entityMatrix.reset().translate(0, -.06666666666666667).rotate2D(-(entities.Entity_Mob_Wolf.tailRotation[this.currentFrame - 1] + (5 >= this.currentFrame ? 0 : 11 == this.currentFrame ? 0 : 4 * (20 - this.world.mobs.h[this.id].h.health))) / 180 * Math.PI).translate(.25, (-8 + entities.Entity_Mob_Wolf.tailOffset[this.currentFrame - 1]) / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(2.7 * this.scaleX, 2.7 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        a = this.quadPositions[1];
        c = new lemongine.Point(238, 64 + (5 < this.currentFrame ? 4 : 0));
        d = new lemongine.Point(8, 4);
        f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .26666666666666666, .13333333333333333), this.entityMatrix);
        l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        if (0 < entities.Entity_Mob_Wolf.collarType[this.currentFrame - 1]) {
            var h = null != this.world.mobs.h[this.id].h.collarColor && null != Colors.colors.h[this.world.mobs.h[this.id].h.collarColor] ? Colors.colors.h[this.world.mobs.h[this.id].h.collarColor] : Colors.colors.h.white;
            this.entityMatrix.reset().translate((-7 + (11 == this.currentFrame ? 1 : 0)) / 30, (-10 + (10 == this.currentFrame ? -1 : 0)) / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(2.7 * this.scaleX, 2.7 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            b = this.entity;
            a = this.quadPositions[2];
            c = new lemongine.Point(238, 72 + (2 == entities.Entity_Mob_Wolf.collarType[this.currentFrame - 1] ? 4 : 0));
            d = new lemongine.Point(5, 4);
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .16666666666666666, .13333333333333333), this.entityMatrix);
            l = new haxe.ds.StringMap();
            l.h.texBlend = entities.Entity_Mob.blendMob;
            p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            l.h.colorOffset = p;
            p = lemongine.Mathz.repeatArray([this.colorTransform[0] * h.h.r, this.colorTransform[1] * h.h.g, this.colorTransform[2] * h.h.b, this.colorTransform[3] * this.alpha], 6);
            l.h.color = p;
            b.updateQuad(a, null, c, d, null, f, null, l);
        } else this.entity.updateQuad(this.quadPositions[2], null, new lemongine.Point(), new lemongine.Point());
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), b = 46.5 - 2.7 * entities.Entity_Mob_Wolf.headBob[this.currentFrame - 1], this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(-.5866666666666667, -(b / 30)).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), b = this.entity, a = this.quadPositions[3], c = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), l = new haxe.ds.StringMap(), l.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), l.h.color = p, b.updateQuad(a, null, c, d, null, f, null, l)) : this.entity.updateQuad(this.quadPositions[3], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Wolf
})
entities.Entity_Mob_Wolf.headBob = [0, 1, 1, 0, -2, 0, 1, 1, 0, -2, 0]
entities.Entity_Mob_Wolf.collarType = [0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 1]
entities.Entity_Mob_Wolf.tailOffset = [0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 5]
entities.Entity_Mob_Wolf.tailRotation = [45, 30, 21.3, 15, 23.3, -15, -15, -15, -15, -15, -15]