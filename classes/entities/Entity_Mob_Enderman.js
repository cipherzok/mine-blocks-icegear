entities.Entity_Mob_Enderman = function (b, a, c) {
    this.wasHolding = [];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Enderman"] = entities.Entity_Mob_Enderman
entities.Entity_Mob_Enderman.__name__ = "entities.Entity_Mob_Enderman"
entities.Entity_Mob_Enderman.__super__ = entities.Entity_Mob
entities.Entity_Mob_Enderman.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 8);
        this.movieX = this.world.mobs.h[this.id].h.x + this.world.mobTmpData.h[this.id].h.offsetX;
        this.movieY = this.world.mobs.h[this.id].h.y + this.world.mobTmpData.h[this.id].h.offsetY;
        null == this.world.mobTmpData.h[this.id].h.wasHolding && (this.world.mobTmpData.h[this.id].h.wasHolding = "");
        null == this.world.mobs.h[this.id].h.handItems && (this.world.mobs.h[this.id].h.handItems = []);
        null == this.world.mobs.h[this.id].h.handItems[0] && (this.world.mobs.h[this.id].h.handItems[0] = Game.emptyItem());
        if (this.wasHolding != this.world.mobs.h[this.id].h.handItems[0][0]) {
            this.wasHolding = lemongine.Helpers.clone(this.world.mobs.h[this.id].h.handItems[0][0]);
            b = this.world.mobTmpData.h[this.id];
            var a = lemongine.Helpers.clone(this.world.mobs.h[this.id].h.handItems[0][0]);
            b.h.wasHolding = a;
            if (Game.isEmptyItem(this.world.mobs.h[this.id].h.handItems[0])) null != this.item && this.item.destroy();else if (js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = this.quadPositions[0] + 6, null == this.item ? this.item = new Item(this.entity, 0, 0, this.game, this.world.mobs.h[this.id].h.handItems[0]) : this.item.set_item(this.world.mobs.h[this.id].h.handItems[0]), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = -1, this.item.renderer.quadPositions[0] != this.quadPositions[0] + 6) {
                a = 8 + this.item.renderer.quadPositions.length;
                this.destroy();
                var c = this.entity.nearestConsecutiveEmpty(a);
                this.quadPositions = [];
                for (b = 0; b < a;) this.quadPositions.push(c + b++);
            }
        }
        a = this.entityMatrix.reset().translate(-.03333333333333333, 0).scale(3 * this.scaleX, 1.674622 * this.scaleY);
        c = entities.Entity_Mob_Enderman.appendages.h.leg11.h.x[this.currentFrame - 1] / 30;
        var d = entities.Entity_Mob_Enderman.appendages.h.leg11.h.y[this.currentFrame - 1] / 30;
        a.rotate2D(-entities.Entity_Mob_Enderman.appendages.h.leg11.h.r[this.currentFrame - 1] / 180 * Math.PI).translate(c, d).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[0];
        d = new lemongine.Point(247, 112);
        var f = new lemongine.Point(2, 12),
            l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .4), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        a = this.entityMatrix.reset().translate(-.03333333333333333, 0).scale(3 * this.scaleX, 1.725159 * this.scaleY);
        c = entities.Entity_Mob_Enderman.appendages.h.leg12.h.x[this.currentFrame - 1] / 30;
        d = entities.Entity_Mob_Enderman.appendages.h.leg12.h.y[this.currentFrame - 1] / 30;
        a.rotate2D(-entities.Entity_Mob_Enderman.appendages.h.leg12.h.r[this.currentFrame - 1] / 180 * Math.PI).translate(c, d).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[1];
        d = new lemongine.Point(247, 112);
        f = new lemongine.Point(2, 12);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .4), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        a = this.entityMatrix.reset().translate(-.03333333333333333, 0).scale(3 * this.scaleX, 1.629059 * this.scaleY);
        c = entities.Entity_Mob_Enderman.appendages.h.leg21.h.x[this.currentFrame - 1] / 30;
        d = entities.Entity_Mob_Enderman.appendages.h.leg21.h.y[this.currentFrame - 1] / 30;
        a.rotate2D(-entities.Entity_Mob_Enderman.appendages.h.leg21.h.r[this.currentFrame - 1] / 180 * Math.PI).translate(c, d).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[2];
        d = new lemongine.Point(247, 112);
        f = new lemongine.Point(2, 12);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .4), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        a = this.entityMatrix.reset().translate(-.03333333333333333, 0).scale(3 * this.scaleX, 1.725159 * this.scaleY);
        c = entities.Entity_Mob_Enderman.appendages.h.leg22.h.x[this.currentFrame - 1] / 30;
        d = entities.Entity_Mob_Enderman.appendages.h.leg22.h.y[this.currentFrame - 1] / 30;
        a.rotate2D(-entities.Entity_Mob_Enderman.appendages.h.leg22.h.r[this.currentFrame - 1] / 180 * Math.PI).translate(c, d).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[3];
        d = new lemongine.Point(247, 112);
        f = new lemongine.Point(2, 12);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .4), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        this.entityMatrix.reset().translate(-.11666666666666667, -.9666666666666667).rotate2D(-this.rotation / 180 * Math.PI).scale(3 * this.scaleX, 3 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[4];
        d = new lemongine.Point(233.1, 112);
        f = new lemongine.Point(6.8, 17);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .23333333333333334, .5666666666666667), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        a = this.entityMatrix.reset().translate(-.03333333333333333, 0).scale(3, 3);
        c = entities.Entity_Mob_Enderman.appendages.h.arm1.h.x[null == this.item ? 0 : 1] / 30;
        d = entities.Entity_Mob_Enderman.appendages.h.arm1.h.y[null == this.item ? 0 : 1] / 30;
        a.rotate2D(-entities.Entity_Mob_Enderman.appendages.h.arm1.h.r[null == this.item ? 0 : 1] / 180 * Math.PI).translate(c, d).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[5];
        d = new lemongine.Point(247, 112);
        f = new lemongine.Point(2, 12);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .4), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        null != this.item && (this.entityMatrix.reset().translate(-.5, -.5).scale2D(.4875).rotate2D(.04722222222222222 * Math.PI).translate(-.3766666666666667, -1.0633333333333332).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.set(this.entityMatrix.values), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = this.quadPositions[0] + 2, b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, b.h.color = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers = b, this.item.render(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = -1, js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers = new haxe.ds.StringMap());
        a = this.entityMatrix.reset().translate(-.03333333333333333, 0).scale(3, 3);
        c = entities.Entity_Mob_Enderman.appendages.h.arm2.h.x[null == this.item ? 0 : 1] / 30;
        d = entities.Entity_Mob_Enderman.appendages.h.arm2.h.y[null == this.item ? 0 : 1] / 30;
        a.rotate2D(-entities.Entity_Mob_Enderman.appendages.h.arm2.h.r[null == this.item ? 0 : 1] / 180 * Math.PI).translate(c, d).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = null != this.item ? this.item.renderer.quadPositions[this.item.renderer.quadPositions.length - 1] + 1 : this.quadPositions[6];
        d = new lemongine.Point(247, 112);
        f = new lemongine.Point(2, 12);
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .06666666666666667, .4), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -3.06).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), a = this.entity, c = null != this.item ? this.item.renderer.quadPositions[this.item.renderer.quadPositions.length - 1] + 2 : this.quadPositions[7], d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), b.h.color = p, a.updateQuad(c, null, d, f, null, l, null, b)) : this.entity.updateQuad(null != this.item ? this.item.renderer.quadPositions[this.item.renderer.quadPositions.length - 1] + 2 : this.quadPositions[7], null, new lemongine.Point(), new lemongine.Point());
    },
    destroy: function () {
        null != this.item && this.item.destroy();
        this.wasHolding = Game.emptyItem();
        entities.Entity_Mob.prototype.destroy.call(this);
    },
    __class__: entities.Entity_Mob_Enderman
})
entities.Entity_Mob_Enderman.appendages = function (b) {
    b = new haxe.ds.StringMap();
    var a = new haxe.ds.StringMap();
    a.h.x = [-8.9, -7.1];
    a.h.y = [-62.8, -61.7];
    a.h.r = [7.5, 22.5];
    b.h.arm1 = a;
    a = new haxe.ds.StringMap();
    a.h.x = [7.5, 7];
    a.h.y = [-62.5, -61.8];
    a.h.r = [-7.7, 17.5];
    b.h.arm2 = a;
    a = new haxe.ds.StringMap();
    a.h.x = [-5.2, -3.2, -4, -4.7, -5.2, -4.9, -5, -3.3];
    a.h.y = [-37.8, -39.7, -40.4, -38.3, -37.9, -37.6, -38.2, -39.7];
    a.h.r = [0, 28.4, 15, 10.3, -4.7, -22.5, -14.5, 15.5];
    b.h.leg11 = a;
    a = new haxe.ds.StringMap();
    a.h.x = [-5.2, -12.6, -8.9, -8.4, -3.7, 2.4, -.7, -10];
    a.h.y = [-21.1, -24.6, -21.7, -19.8, -18.8, -19.2, -21.9, -24];
    a.h.r = [0, -19.3, 10.2, -15.5, -25.2, -27.9, -64.9, -60.6];
    b.h.leg12 = a;
    a = new haxe.ds.StringMap();
    a.h.x = [4.3, 3.6, 3.6, 3.1, 2.5, 1.4, 2.8, 3.4];
    a.h.y = [-37.8, -37.1, -38.6, -38.9, -40.4, -39.4, -48.3, -37.9];
    a.h.r = [0, 0, 1.5, 31.5, 46.5, 25.1, 14.3, 8.1];
    b.h.leg21 = a;
    a = new haxe.ds.StringMap();
    a.h.x = [4.3, 3.4, 2.3, -4.6, -10.7, -6.7, -1.8, .6];
    a.h.y = [-21.1, -20.4, -21.1, -24.5, -29.6, -22.3, -20.8, -20];
    a.h.r = [0, -15, -43.2, -58.2, -13.2, 22.8, 8.2, -13.1];
    b.h.leg22 = a;
    return b;
}(this)