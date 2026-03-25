entities.Entity_Mob_Squid = function (b, a, c) {
    this.tentNum = [1, 4, 2, 3];
    this.tentaclePositions = [new lemongine.Point(-7.2, 16.45), new lemongine.Point(7.2, 16.45), new lemongine.Point(-2.5, 19.65), new lemongine.Point(2.5, 19.65)];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Squid"] = entities.Entity_Mob_Squid
entities.Entity_Mob_Squid.__name__ = "entities.Entity_Mob_Squid"
entities.Entity_Mob_Squid.__super__ = entities.Entity_Mob
entities.Entity_Mob_Squid.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 7);
        for (b = 1; 5 > b;) {
            var a = b++,
                c = -Math.sin(this.tentNum[a - 1] - 2.5) * (0 < this.world.mobTmpData.h[this.id].h.closeAnimation ? 10 * this.world.mobTmpData.h[this.id].h.closeAnimation - 20 : this.world.mobs.h[this.id].h.movementCooldown / 2 - 20) / 100 * 50 - 80 * this.world.mobs.h[this.id].h.rotationSpeed;
            this.entityMatrix.reset().translate(-.05, -.05).scale2D(2.4000000000000004).rotate2D(-c / 180 * Math.PI).translate(this.tentaclePositions[a - 1].x / 30, this.tentaclePositions[a - 1].y / 30).rotate2D(-(this.world.mobs.h[this.id].h.actualRotation + 90) / 180 * Math.PI).scale(Math.abs(this.scaleX), this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            c = this.entity;
            a = this.quadPositions[a - 1];
            var d = new lemongine.Point(215, 112),
                f = new lemongine.Point(3, 15),
                l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .1, .5), this.entityMatrix),
                p = new haxe.ds.StringMap();
            p.h.texBlend = entities.Entity_Mob.blendMob;
            var h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            p.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            p.h.color = h;
            c.updateQuad(a, null, d, f, null, l, null, p);
        }
        this.entityMatrix.reset().translate(-.16666666666666666, -.25).scale2D(2.4).translate(0, .060000000000000005).rotate2D(-(this.world.mobs.h[this.id].h.actualRotation + 90) / 180 * Math.PI).scale(Math.abs(this.scaleX), this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        c = this.entity;
        a = this.quadPositions[4];
        d = new lemongine.Point(195 + (null == this.world.mobs.h[this.id].h.name || "ghost" != this.world.mobs.h[this.id].h.name.toLowerCase() && "ghostid" != this.world.mobs.h[this.id].h.name.toLowerCase() && "ghostsquid" != this.world.mobs.h[this.id].h.name.toLowerCase() ? 0 : 10), 112);
        f = new lemongine.Point(10, 15);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .3333333333333333, .5), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = h;
        h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = h;
        c.updateQuad(a, null, d, f, null, l, null, b);
    },
    __class__: entities.Entity_Mob_Squid
})