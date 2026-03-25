entities.Entity_Mob_Ghast = function (b, a, c) {
    this.tentaclePositions = [new lemongine.Point(-22.2, 32.25), new lemongine.Point(15.15, 19.25), new lemongine.Point(52.5, 25.75), new lemongine.Point(-52.2, 19.25), new lemongine.Point(-14.85, 32.25), new lemongine.Point(22.5, 25.75)];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Ghast"] = entities.Entity_Mob_Ghast
entities.Entity_Mob_Ghast.__name__ = "entities.Entity_Mob_Ghast"
entities.Entity_Mob_Ghast.__super__ = entities.Entity_Mob
entities.Entity_Mob_Ghast.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 7);
        for (b = 1; 7 > b;) {
            var a = b++,
                c = -(-lemongine.Mathz.sign(this.scaleX) * this.world.mobs.h[this.id].h.speedX * 34 + 5 * Math.sin(this.world.tick / (Main.Instance.get_fps() / 25) / 6 - 2 * a)) * Math.min(2, Math.abs(2 * this.world.mobs.h[this.id].h.speedX) + Math.abs(2 * this.world.mobs.h[this.id].h.speedY)) / 4;
            this.entityMatrix.reset().translate(-.03333333333333333, -.03333333333333333).scale2D(9.308592).rotate2D(-c / 180 * Math.PI).translate(this.tentaclePositions[a - 1].x / 30, this.tentaclePositions[a - 1].y / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            c = this.entity;
            var d = this.quadPositions[a - 1],
                f = new lemongine.Point(193, 112),
                l = new lemongine.Point(2, 8),
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .26666666666666666), this.entityMatrix),
                h = new haxe.ds.StringMap();
            h.h.texBlend = entities.Entity_Mob.blendMob;
            var m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            h.h.colorOffset = m;
            a = lemongine.Mathz.repeatArray([this.colorTransform[0] * (4 > a ? .5 : 1), this.colorTransform[1] * (4 > a ? .5 : 1), this.colorTransform[2] * (4 > a ? .5 : 1), this.colorTransform[3] * this.alpha], 6);
            h.h.color = a;
            c.updateQuad(d, null, f, l, null, p, null, h);
        }
        this.entityMatrix.reset().translate(-.26666666666666666, -.23333333333333334).scale2D(9.308716).translate(0, -1.0766666666666667).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        c = this.entity;
        d = this.quadPositions[6];
        f = new lemongine.Point(177, 112 + (15 > this.world.mobs.h[this.id].h.attackCooldown && 0 < this.world.mobs.h[this.id].h.attackCooldown ? 14 : 0));
        l = new lemongine.Point(16, 14);
        p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .4666666666666667), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = m;
        m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = m;
        c.updateQuad(d, null, f, l, null, p, null, b);
    },
    __class__: entities.Entity_Mob_Ghast
})