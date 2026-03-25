entities.Entity_Mob_Creeper = function (b, a, c) {
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Creeper"] = entities.Entity_Mob_Creeper
entities.Entity_Mob_Creeper.__name__ = "entities.Entity_Mob_Creeper"
entities.Entity_Mob_Creeper.__super__ = entities.Entity_Mob
entities.Entity_Mob_Creeper.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 9);
        for (b = 0; 4 > b;) {
            var a = b++,
                c = this.entityMatrix.reset().translate(-.06666666666666667, -.05),
                d = entities.Entity_Mob_Creeper.legs[a].h.x[this.currentFrame - 1] / 30,
                f = entities.Entity_Mob_Creeper.legs[a].h.y[this.currentFrame - 1] / 30;
            c.rotate2D(-entities.Entity_Mob_Creeper.legs[a].h.rotation[this.currentFrame - 1] / 180 * Math.PI).scale(2.4, 2.4).translate(d, f).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            var l = this.entity,
                p = this.quadPositions[a];
            a = new lemongine.Point(55, 2 > a ? 3 : 0);
            c = new lemongine.Point(4, 3);
            d = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .13333333333333333, .1), this.entityMatrix);
            f = new haxe.ds.StringMap();
            f.h.texBlend = entities.Entity_Mob.blendMob;
            var h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            f.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            f.h.color = h;
            l.updateQuad(p, null, a, c, null, d, null, f);
        }
        this.entityMatrix.reset().scale(2.4, 2.4).translate(-.26333333333333336, -1.6766666666666665).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        c = this.entity;
        d = this.quadPositions[4];
        f = new lemongine.Point(48, 0);
        l = new lemongine.Point(7, 18);
        p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .23333333333333334, .6), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = h;
        h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = h;
        c.updateQuad(d, null, f, l, null, p, null, b);
        if (1 == this.world.mobs.h[this.id].h.charged) {
            var m = new lemongine.Rectangle(-10.5, -52.8, 22.5, 20.8);
            this.entityMatrix.reset().translate(m.x / 30, m.y / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            c = this.entity;
            d = this.quadPositions[5];
            f = new lemongine.Point(96, 0);
            l = new lemongine.Point(32, 32);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, m.width / 30, m.height / 30), this.entityMatrix);
            a = [m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32];
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            c.updateQuad(d, null, f, l, null, p, a, b);
            m.set(-6.4, -33, 13.1, 24.1);
            this.entityMatrix.reset().translate(m.x / 30, m.y / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            c = this.entity;
            d = this.quadPositions[6];
            f = new lemongine.Point(96, 0);
            l = new lemongine.Point(32, 32);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, m.width / 30, m.height / 30), this.entityMatrix);
            a = [m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32];
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            c.updateQuad(d, null, f, l, null, p, a, b);
            m.set(-15.4, -8.9, 31.6, 9.3);
            this.entityMatrix.reset().translate(m.x / 30, m.y / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            c = this.entity;
            d = this.quadPositions[7];
            f = new lemongine.Point(96, 0);
            l = new lemongine.Point(32, 32);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, m.width / 30, m.height / 30), this.entityMatrix);
            a = [m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200, m.x / 2.43 / 32 + this.world.tick / 200, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32, m.x / 2.43 / 32 + this.world.tick / 200 + m.width / 2.43 / 32, m.y / 2.43 / 32 + this.world.tick / 200 + m.height / 2.43 / 32];
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            c.updateQuad(d, null, f, l, null, p, a, b);
        } else this.entity.updateQuad(this.quadPositions[5], null, new lemongine.Point(), new lemongine.Point()), this.entity.updateQuad(this.quadPositions[6], null, new lemongine.Point(), new lemongine.Point()), this.entity.updateQuad(this.quadPositions[7], null, new lemongine.Point(), new lemongine.Point());
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.0500173599999998, 1.0500173599999998).translate(0, -1.9333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), c = this.entity, d = this.quadPositions[8], f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), l = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, h = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), b.h.color = h, c.updateQuad(d, null, f, l, null, p, null, b)) : this.entity.updateQuad(this.quadPositions[8], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Creeper
})
entities.Entity_Mob_Creeper.legs = function (b) {
    b = new haxe.ds.StringMap();
    b.h.x = [-8.5, -8.9, -8.7, -8.4, -8.7];
    b.h.y = [-3.6, -4.9, -4.5, -3.8, -4.5];
    b.h.rotation = [0, 15, 7.5, 0, 7.5];
    var a = new haxe.ds.StringMap();
    a.h.x = [8.8, 9, 9.5, 9.5, 9.5];
    a.h.y = [-3.5, -3.6, -4.2, -4.9, -4.2];
    a.h.rotation = [0, 0, -7.5, -15, -7.5];
    var c = new haxe.ds.StringMap();
    c.h.x = [-8.5, -8.4, -8.7, -8.9, -8.7];
    c.h.y = [-3.6, -3.8, -4.5, -4.9, -4.5];
    c.h.rotation = [0, 0, 7.5, 15, 7.5];
    var d = new haxe.ds.StringMap();
    d.h.x = [8.8, 9.5, 9.5, 9, 9.5];
    d.h.y = [-3.5, -4.9, -4.2, -3.6, -4.2];
    d.h.rotation = [0, -15, -7.5, 0, -7.5];
    return [b, a, c, d];
}(this)