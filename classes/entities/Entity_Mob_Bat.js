entities.Entity_Mob_Bat = function (b, a, c) {
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Bat"] = entities.Entity_Mob_Bat
entities.Entity_Mob_Bat.__name__ = "entities.Entity_Mob_Bat"
entities.Entity_Mob_Bat.__super__ = entities.Entity_Mob
entities.Entity_Mob_Bat.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 2);
        if (1 == this.world.mobs.h[this.id].h.hanging) this.gotoAndStop(6);else {
            b = this.world.mobTmpData.h[this.id];
            var a = null != this.world.mobTmpData.h[this.id].h.flyFrame ? this.world.mobTmpData.h[this.id].h.flyFrame : 0,
                c = 1 == this.get_keys().h.up ? .5 : .05;
            b.h.flyFrame = lemongine.Mathz.modulus(a + c, 5);
            this.gotoAndStop(Math.floor(this.world.mobTmpData.h[this.id].h.flyFrame + 1));
        }
        this.scaleX = (0 > this.world.mobs.h[this.id].h.speedX ? 1 : -1) * Math.abs(this.scaleX);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).translate(0, -.05).rotate2D(-this.rotation / 180 * Math.PI).scale(1.5 * this.scaleX, 1.5 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        b = this.entity;
        a = this.quadPositions[0];
        c = new lemongine.Point(15 + 16 * (this.currentFrame - 1), 42);
        var d = new lemongine.Point(16, 16),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix),
            l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.5333333333333333).scale(1.3125216999999998, 1.3125216999999998).translate(0, -.36666666666666664).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), b = this.entity, a = this.quadPositions[1], c = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), l = new haxe.ds.StringMap(), l.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), l.h.color = p, b.updateQuad(a, null, c, d, null, f, null, l)) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Bat
})