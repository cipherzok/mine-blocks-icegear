entities.Entity_Mob_MagmaCube = function (b, a, c) {
    this.frameScales = [new lemongine.Point(4, 0), new lemongine.Point(4, 0), new lemongine.Point(3.075012, .35714285714285715), new lemongine.Point(2.754868, .75), new lemongine.Point(2.599915, 1.1071428571428572), new lemongine.Point(2.754868, .75), new lemongine.Point(3.075012, .35714285714285715)];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_MagmaCube"] = entities.Entity_Mob_MagmaCube
entities.Entity_Mob_MagmaCube.__name__ = "entities.Entity_Mob_MagmaCube"
entities.Entity_Mob_MagmaCube.__super__ = entities.Entity_Mob
entities.Entity_Mob_MagmaCube.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 9);
        var a = this.world.mobs.h[this.id];
        b = 1;
        null == this.world.mobTmpData.h[this.id].h.animationFrame && (this.world.mobTmpData.h[this.id].h.animationFrame = 0);
        if (1 == a.h.falling) {
            0 == this.world.mobTmpData.h[this.id].h.animationFrame && this.game.requestSound("slimejump" + Math.floor(2 * Math.random() + 1), a.h.x - this.world.worldX, a.h.y - this.world.worldY, 1, 1);
            b = this.world.mobTmpData;
            var c = this.id;
            b.h[c].h.animationFrame += 1;
            b = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7][Math.min(16, Math.floor(this.world.mobTmpData.h[this.id].h.animationFrame / (Main.Instance.get_fps() / 25))) | 0];
        } else 0 < (this.world.mobTmpData.h[this.id].h.animationFrame | 0) && (this.world.mobTmpData.h[this.id].h.animationFrame = 0, this.game.addParticles("magmacube", 0, 2 * a.h.size, new lemongine.Point(a.h.x - 15 * a.h.size / 2 / 30, 15 * a.h.size / 30), new lemongine.Point(a.h.y, 0)), this.game.requestSound("slimeland" + Math.floor(4 * Math.random() + 1), a.h.x - this.world.worldX, a.h.y - this.world.worldY, 1, 1));
        a = 15 * Math.pow(2, a.h.size - 1) / 64;
        for (c = 0; 8 > c;) {
            var d = c++;
            this.entityMatrix.reset().translate(-.26666666666666666, (-16 + 2 * d - (7 - d) * this.frameScales[b - 1].y) / 30).scale(this.frameScales[b - 1].x * this.scaleX, 4 * this.scaleY).scale2D(a).rotate2D(-this.rotation / 180 * Math.PI).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            var f = this.entity,
                l = this.quadPositions[d];
            d = new lemongine.Point(161, 112 + 2 * d);
            var p = new lemongine.Point(16, 2),
                h = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .06666666666666667), this.entityMatrix),
                m = new haxe.ds.StringMap();
            m.h.texBlend = entities.Entity_Mob.blendMob;
            var x = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            m.h.colorOffset = x;
            x = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            m.h.color = x;
            f.updateQuad(l, null, d, p, null, h, null, m);
        }
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.5333333333333333).translate(0, (-16 - 7 * this.frameScales[b - 1].y) / 30).scale(this.scaleX * this.frameScales[b - 1].x * a, 4 * this.scaleY * a).rotate2D(-this.rotation / 180 * Math.PI).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), f = this.entity, l = this.quadPositions[8], d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), p = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), h = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), c = new haxe.ds.StringMap(), c.h.texBlend = entities.Entity_Mob.blendItems, x = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), c.h.color = x, f.updateQuad(l, null, d, p, null, h, null, c)) : this.entity.updateQuad(this.quadPositions[8], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_MagmaCube
})