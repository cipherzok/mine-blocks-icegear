entities.Entity_Mob_Skeleton = function (b, a, c) {
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Skeleton"] = entities.Entity_Mob_Skeleton
entities.Entity_Mob_Skeleton.__name__ = "entities.Entity_Mob_Skeleton"
entities.Entity_Mob_Skeleton.__super__ = entities.Entity_Mob
entities.Entity_Mob_Skeleton.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 3);
        this.entityMatrix.reset().translate(-.2, -.7).rotate2D(-this.rotation / 180 * Math.PI).scale(2.858276 * this.scaleX, 2.858276 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        var a = this.quadPositions[0],
            c = new lemongine.Point(12 * entities.Entity_Mob_Skeleton.frames[this.currentFrame], 0),
            d = new lemongine.Point(12, 21),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .4, .7), this.entityMatrix),
            l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(2, 2).rotate2D(Math.PI / 4).translate(-.16666666666666666, -.7333333333333333 - (1 == entities.Entity_Mob_Skeleton.frames[this.currentFrame] || 2 == entities.Entity_Mob_Skeleton.frames[this.currentFrame] ? .09527586666666667 * this.scaleY : 0)).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        d = Textures.getTexture("bow");
        b = this.entity;
        a = this.quadPositions[1];
        c = new lemongine.Point(d.x, d.y);
        d = new lemongine.Point(d.width, d.height);
        f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix);
        l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendItems;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -2.2366666666666664).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), b = this.entity, a = this.quadPositions[2], c = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), l = new haxe.ds.StringMap(), l.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), l.h.color = p, b.updateQuad(a, null, c, d, null, f, null, l)) : this.entity.updateQuad(this.quadPositions[2], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Skeleton
})
entities.Entity_Mob_Skeleton.frames = [0, 0, 1, 2, 1, 3, 0]