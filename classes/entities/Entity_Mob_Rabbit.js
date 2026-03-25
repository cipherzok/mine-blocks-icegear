entities.Entity_Mob_Rabbit = function (b, a, c) {
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Rabbit"] = entities.Entity_Mob_Rabbit
entities.Entity_Mob_Rabbit.__name__ = "entities.Entity_Mob_Rabbit"
entities.Entity_Mob_Rabbit.__super__ = entities.Entity_Mob
entities.Entity_Mob_Rabbit.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 2);
        null != this.world.mobs.h[this.id].h.name && ("toast" == this.world.mobs.h[this.id].h.name.toLowerCase() ? this.world.mobs.h[this.id].h.rabbitType = 7 : "moose" == this.world.mobs.h[this.id].h.name.toLowerCase() && (this.world.mobs.h[this.id].h.rabbitType = 8));
        b = 1;
        this.world.mobs.h[this.id].h.falling && (b = 0 < this.world.mobs.h[this.id].h.speedY ? 2 : 3);
        this.currentFrame != b + (null == this.world.mobTmpData.h[this.id].h.animationOffset ? 0 : this.world.mobTmpData.h[this.id].h.animationOffset) && this.gotoAndStop(b + (null == this.world.mobTmpData.h[this.id].h.animationOffset ? 0 : this.world.mobTmpData.h[this.id].h.animationOffset));
        var a = null == this.world.mobs.h[this.id].h.rabbitType ? 1 : this.world.mobs.h[this.id].h.rabbitType;
        this.entityMatrix.reset().translate(-.2, -.5333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(1.919922 * this.scaleX, 1.919922 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        var c = this.quadPositions[0];
        a = new lemongine.Point(128 + (this.currentFrame - 1 + 4 * (a - 1)) % 8 * 12, 16 * Math.floor((this.currentFrame - 1 + 4 * (a - 1)) / 8));
        var d = new lemongine.Point(12, 16),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .4, .5333333333333333), this.entityMatrix),
            l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(c, null, a, d, null, f, null, l);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).rotate2D(-.25 * Math.PI).scale(1.3125216999999998, 1.3125216999999998).translate(.26666666666666666, -.6).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), b = this.entity, c = this.quadPositions[1], a = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), l = new haxe.ds.StringMap(), l.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), l.h.color = p, b.updateQuad(c, null, a, d, null, f, null, l)) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Rabbit
})