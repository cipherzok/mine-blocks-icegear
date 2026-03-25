entities.Entity_Mob_Spider = function (b, a, c) {
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Spider"] = entities.Entity_Mob_Spider
entities.Entity_Mob_Spider.__name__ = "entities.Entity_Mob_Spider"
entities.Entity_Mob_Spider.__super__ = entities.Entity_Mob
entities.Entity_Mob_Spider.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 6);
        for (b = 0; 4 > b;) {
            var a = b++,
                c = this.entityMatrix.reset().translate(-.03333333333333333, 0),
                d = (6 + entities.Entity_Mob_Spider.legs[a].h.x[this.currentFrame - 1]) / 30,
                f = (-18.55 + entities.Entity_Mob_Spider.legs[a].h.y[this.currentFrame - 1]) / 30;
            c.rotate2D(entities.Entity_Mob_Spider.legs[a].h.rotation[this.currentFrame - 1] / 180 * Math.PI).scale(2.471, 2.471).translate(d, f).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            var l = this.entity;
            a = this.quadPositions[a];
            c = new lemongine.Point(20, 112);
            d = new lemongine.Point(2, 8);
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .26666666666666666), this.entityMatrix);
            var p = new haxe.ds.StringMap();
            p.h.texBlend = entities.Entity_Mob.blendMob;
            var h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            p.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            p.h.color = h;
            l.updateQuad(a, null, c, d, null, f, null, p);
        }
        this.entityMatrix.reset().scale(2.471039, 2.471039).translate(-.43666666666666665, -.9666666666666667).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        c = this.entity;
        d = this.quadPositions[4];
        f = new lemongine.Point(0, 112);
        l = new lemongine.Point(20, 8);
        a = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .6666666666666666, .26666666666666666), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = h;
        h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = h;
        c.updateQuad(d, null, f, l, null, a, null, b);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.0500173599999998, 1.0500173599999998).translate(-.1, -1.1).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), c = this.entity, d = this.quadPositions[5], f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), l = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), a = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, h = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), b.h.color = h, c.updateQuad(d, null, f, l, null, a, null, b)) : this.entity.updateQuad(this.quadPositions[5], null, new lemongine.Point(), new lemongine.Point());
    },
    __class__: entities.Entity_Mob_Spider
})
entities.Entity_Mob_Spider.legs = function (b) {
    b = new haxe.ds.StringMap();
    b.h.x = [1, 0, 1, 2.2, 2.5, 2.15, 2.4, 1.05];
    b.h.y = [3.15, 1.35, 3.15, 3.8, 4.8, 4.6, 3.5, 1.9];
    b.h.rotation = [45, 46.6, 45, 47.9, 52.4, 57.4, 60.3, 53.1];
    var a = new haxe.ds.StringMap();
    a.h.x = [-.35, .1, -.95, -2.1, -.35, .4, .1, -.5];
    a.h.y = [-1.05, -1.7, -2.15, -2.5, -1.05, -.8, -.35, -.85];
    a.h.rotation = [12.9, 31.5, 24.8, 20.3, 12.9, 18.7, 24.4, 29.6];
    var c = new haxe.ds.StringMap();
    c.h.x = [-.3, -1.45, -2.95, -3.15, -2.9, -2.9, -.05, -1.5];
    c.h.y = [-1, -1.15, -2.5, -2.4, -2.6, -3.3, -.7, -1];
    c.h.rotation = [-17, -1, 9.9, 13.9, 3.5, -3.7, -17, -6];
    var d = new haxe.ds.StringMap();
    d.h.x = [-2.2, -2.2, -1.75, -1.05, -.9, -.4, -1.8, -2.5];
    d.h.y = [2.95, 2.95, 1.7, 1.1, -.45, -2.1, -2.2, -.7];
    d.h.rotation = [-45, -45, -38.3, -35.3, -30.9, -29.2, -34.6, -39.6];
    return [b, a, c, d];
}(this)