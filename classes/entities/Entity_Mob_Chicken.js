entities.Entity_Mob_Chicken = function (b, a, c) {
    this.gradientQuadPosition = -1;
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Chicken"] = entities.Entity_Mob_Chicken
entities.Entity_Mob_Chicken.__name__ = "entities.Entity_Mob_Chicken"
entities.Entity_Mob_Chicken.__super__ = entities.Entity_Mob
entities.Entity_Mob_Chicken.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 3);
        this.entityMatrix.reset().translate(-.23333333333333334, -.5).rotate2D(-this.rotation / 180 * Math.PI).scale(2 * this.scaleX, 2 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        var a = this.quadPositions[0],
            c = new lemongine.Point((this.currentFrame - 1) % 9 * 14, 182 + 15 * Math.floor((this.currentFrame - 1) / 9)),
            d = new lemongine.Point(14, 15),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .4666666666666667, .5), this.entityMatrix),
            l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        b = this.world.mobTmpData.h[this.id].h.lookingBackwards ? -1 : 1;
        this.entityMatrix.reset().translate(-.1, 0).scale(b, 1).translate(-.16666666666666666, (-18 - (2 == this.currentFrame || 3 == this.currentFrame ? 1 : 0)) / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(2 * this.scaleX, 2 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        a = this.quadPositions[1];
        c = new lemongine.Point(28, 197);
        d = new lemongine.Point(5, 8);
        f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .16666666666666666, .26666666666666666), this.entityMatrix);
        l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        null != this.get_armor()[0] && "ShadesCap" == Game.makeDynamicArray(this.get_armor()[0])[0] && 1 <= Game.makeDynamicArray(this.get_armor()[0])[1] ? (b = this.world.mobTmpData.h[this.id].h.lookingBackwards ? -1 : 1, this.entityMatrix.reset().scale2D(.5).translate(-.16666666666666666, .1).scale(b, 1).translate(-.16666666666666666, (-18 - (2 == this.currentFrame || 3 == this.currentFrame ? 1 : 0)) / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(2 * this.scaleX, 2 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), d = Textures.getTexture("shades", "armor"), b = this.entity, a = this.quadPositions[2], c = new lemongine.Point(d.x, d.y), d = new lemongine.Point(d.width, d.height), f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), l = new haxe.ds.StringMap(), l.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6), l.h.colorOffset = p, p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6), l.h.color = p, b.updateQuad(a, null, c, d, null, f, null, l)) : this.entity.updateQuad(this.quadPositions[2], null, new lemongine.Point(), new lemongine.Point());
        if (Object.prototype.hasOwnProperty.call(this.world.onFire.h, this.id)) {
            -1 == this.gradientQuadPosition && (this.gradientQuadPosition = this.game.worldGradientEntity.nearestConsecutiveEmpty(1));
            b = this.game.worldGradientEntity;
            a = this.gradientQuadPosition;
            c = new lemongine.Vector3(Math.floor((this.movieX - 3.3333333333333335) * this.game.zoom) / this.game.zoom, Math.floor((this.movieY - 3.3333333333333335 - .5) * this.game.zoom) / this.game.zoom);
            d = new lemongine.Point();
            f = new lemongine.Point(1, 1);
            var n = new lemongine.Point(6.666666666666667, 6.666666666666667);
            l = new haxe.ds.StringMap();
            p = lemongine.Mathz.repeatArray([1, 0, 0, .25], 6);
            l.h.colori = p;
            p = lemongine.Mathz.repeatArray([1, 0, 0, 0], 6);
            l.h.coloro = p;
            b.updateQuad(a, c, d, f, n, null, null, l);
        } else -1 != this.gradientQuadPosition && (this.game.worldGradientEntity.removeQuad(this.gradientQuadPosition), this.gradientQuadPosition = -1);
    },
    remove: function () {
        entities.Entity_Mob.prototype.remove.call(this);
        -1 != this.gradientQuadPosition && (this.game.worldGradientEntity.removeQuad(this.gradientQuadPosition), this.gradientQuadPosition = -1);
    },
    __class__: entities.Entity_Mob_Chicken
})