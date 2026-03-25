entities.Entity_Mob_Slime = function (b, a, c) {
    this.frameScales = [new lemongine.Point(2, 2), new lemongine.Point(1.790634, 2.195984), new lemongine.Point(1.659363, 2.269379), new lemongine.Point(1.593872, 2.337036), new lemongine.Point(1.568848, 2.353012), new lemongine.Point(1.593872, 2.337036), new lemongine.Point(1.659363, 2.269379), new lemongine.Point(1.790634, 2.195984)];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Slime"] = entities.Entity_Mob_Slime
entities.Entity_Mob_Slime.__name__ = "entities.Entity_Mob_Slime"
entities.Entity_Mob_Slime.__super__ = entities.Entity_Mob
entities.Entity_Mob_Slime.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 2);
        var a = this.world.mobs.h[this.id];
        b = 1;
        null == this.world.mobTmpData.h[this.id].h.animationFrame && (this.world.mobTmpData.h[this.id].h.animationFrame = 0);
        if (1 == a.h.falling) {
            0 == Std.parseInt(this.world.mobTmpData.h[this.id].h.animationFrame) && this.game.requestSound("slimejump" + Math.floor(2 * Math.random() + 1), a.h.x - this.world.worldX, a.h.y - this.world.worldY, 1, 1);
            b = this.world.mobTmpData;
            var c = this.id;
            b.h[c].h.animationFrame += 1;
            b = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8][Math.min(15, Math.floor(this.world.mobTmpData.h[this.id].h.animationFrame / (Main.Instance.get_fps() / 25))) | 0];
        } else 0 < (this.world.mobTmpData.h[this.id].h.animationFrame | 0) && (this.world.mobTmpData.h[this.id].h.animationFrame = 0, this.game.addParticles("slime", 0, 2 * a.h.size, new lemongine.Point(a.h.x - 15 * a.h.size / 2 / 30, 15 * a.h.size / 30), new lemongine.Point(a.h.y, 0)), this.game.requestSound("slimeland" + Math.floor(4 * Math.random() + 1), a.h.x - this.world.worldX, a.h.y - this.world.worldY, 1, 1));
        a = 15 * Math.pow(2, a.h.size - 1) / 64;
        this.entityMatrix.reset().translate(-.5333333333333333, -1.0666666666666667).scale(this.frameScales[b - 1].x * this.scaleX, this.frameScales[b - 1].y * this.scaleY).scale2D(a).rotate2D(-this.rotation / 180 * Math.PI).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        c = this.entity;
        var d = this.quadPositions[0],
            f = new lemongine.Point(129, 112),
            l = new lemongine.Point(32, 32),
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1.0666666666666667, 1.0666666666666667), this.entityMatrix),
            h = new haxe.ds.StringMap();
        h.h.texBlend = entities.Entity_Mob.blendMob;
        var m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        h.h.colorOffset = m;
        m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        h.h.color = m;
        c.updateQuad(d, null, f, l, null, p, null, h);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.5333333333333333).scale(2, 2).translate(0, -1.0666666666666667).scale(this.scaleX * this.frameScales[b - 1].x * a, this.scaleY * this.frameScales[b - 1].y * a).rotate2D(-this.rotation / 180 * Math.PI).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), c = this.entity, d = this.quadPositions[1], f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), l = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), h = new haxe.ds.StringMap(), h.h.texBlend = entities.Entity_Mob.blendItems, m = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), h.h.color = m, c.updateQuad(d, null, f, l, null, p, null, h)) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Slime
})