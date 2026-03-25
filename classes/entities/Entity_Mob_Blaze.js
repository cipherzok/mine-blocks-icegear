entities.Entity_Mob_Blaze = function (b, a, c) {
    var d = new haxe.ds.StringMap();
    d.h.x = 0;
    d.h.y = -33.15;
    d.h.s = 0;
    d.h.r = 7;
    d.h.ss = 16;
    var f = new haxe.ds.StringMap();
    f.h.x = 0;
    f.h.y = -33.15;
    f.h.s = 130;
    f.h.r = 7;
    f.h.ss = 20;
    var l = new haxe.ds.StringMap();
    l.h.x = 0;
    l.h.y = -33.15;
    l.h.s = 310;
    l.h.r = 7;
    l.h.ss = 23;
    var k = new haxe.ds.StringMap();
    k.h.x = 0;
    k.h.y = -23.1;
    k.h.s = 50;
    k.h.r = 5;
    k.h.ss = 13;
    var h = new haxe.ds.StringMap();
    h.h.x = 0;
    h.h.y = -23.1;
    h.h.s = 200;
    h.h.r = 5;
    h.h.ss = 14;
    var n = new haxe.ds.StringMap();
    n.h.x = 0;
    n.h.y = -14.5;
    n.h.s = -.3;
    n.h.r = 3;
    n.h.ss = 12;
    this.arms = [d, f, l, k, h, n];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Blaze"] = entities.Entity_Mob_Blaze
entities.Entity_Mob_Blaze.__name__ = "entities.Entity_Mob_Blaze"
entities.Entity_Mob_Blaze.__super__ = entities.Entity_Mob
entities.Entity_Mob_Blaze.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 9);
        this.entityMatrix.reset().translate(-.2, -.31666666666666665).scale2D(2.858337).translate(-.05, -1).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        var a = this.entity,
            c = this.quadPositions[0];
        b = new lemongine.Point(218, 112);
        var d = new lemongine.Point(12, 19),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .4, .6333333333333333), this.entityMatrix),
            l = new haxe.ds.StringMap();
        l.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        l.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        l.h.color = p;
        a.updateQuad(c, null, b, d, null, f, null, l);
        for (l = 0; 6 > l;) {
            d = l++;
            this.arms[d].h.s += this.arms[d].h.ss / 2;
            this.arms[d].h.s = lemongine.Mathz.modulus(this.arms[d].h.s, 360);
            this.arms[d].h.x = (Math.sin(this.arms[d].h.s / 180 * Math.PI) - .5) * this.arms[d].h.r * 2 + 6;
            a = this.arms[d].h.x / 30;
            c = this.arms[d].h.y / 30;
            this.entityMatrix.reset().translate(-.05, -.16666666666666666).scale(2, 2).translate(a, c).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            b = this.entity;
            d = this.quadPositions[d + 1];
            f = new lemongine.Point(230, 112);
            a = new lemongine.Point(3, 10);
            c = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .1, .3333333333333333), this.entityMatrix);
            var h = new haxe.ds.StringMap();
            h.h.texBlend = entities.Entity_Mob.blendMob;
            p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            h.h.colorOffset = p;
            p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            h.h.color = p;
            b.updateQuad(d, null, f, a, null, c, null, h);
        }
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -2.1783333333333332).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), a = this.entity, c = this.quadPositions[7], b = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), l = new haxe.ds.StringMap(), l.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), l.h.color = p, a.updateQuad(c, null, b, d, null, f, null, l)) : this.entity.updateQuad(this.quadPositions[7], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Blaze
})