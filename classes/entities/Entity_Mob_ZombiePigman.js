entities.Entity_Mob_ZombiePigman = function (b, a, c) {
    this.wasHolding = [];
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_ZombiePigman"] = entities.Entity_Mob_ZombiePigman
entities.Entity_Mob_ZombiePigman.__name__ = "entities.Entity_Mob_ZombiePigman"
entities.Entity_Mob_ZombiePigman.__super__ = entities.Entity_Mob
entities.Entity_Mob_ZombiePigman.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this, 2);
        null == this.world.mobTmpData.h[this.id].h.wasHolding && (this.world.mobTmpData.h[this.id].h.wasHolding = "");
        null == this.world.mobs.h[this.id].h.handItems && (this.world.mobs.h[this.id].h.handItems = []);
        null == this.world.mobs.h[this.id].h.handItems[0] && (this.world.mobs.h[this.id].h.handItems[0] = Game.emptyItem());
        if (this.wasHolding != this.world.mobs.h[this.id].h.handItems[0][0]) {
            this.wasHolding = lemongine.Helpers.clone(this.world.mobs.h[this.id].h.handItems[0][0]);
            b = this.world.mobTmpData.h[this.id];
            var a = lemongine.Helpers.clone(this.world.mobs.h[this.id].h.handItems[0][0]);
            b.h.wasHolding = a;
            if (Game.isEmptyItem(this.world.mobs.h[this.id].h.handItems[0])) null != this.item && this.item.destroy();else if (js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = this.quadPositions[0] + 2, null == this.item ? this.item = new Item(this.entity, 0, 0, this.game, this.world.mobs.h[this.id].h.handItems[0]) : this.item.set_item(this.world.mobs.h[this.id].h.handItems[0]), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = -1, this.item.renderer.quadPositions[0] != this.quadPositions[0] + 2) {
                a = 2 + this.item.renderer.quadPositions.length;
                this.destroy();
                var c = this.entity.nearestConsecutiveEmpty(a);
                this.quadPositions = [];
                for (b = 0; b < a;) this.quadPositions.push(c + b++);
            }
        }
        this.entityMatrix.reset().translate(-.21666666666666667, -.7333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(2.858276 * this.scaleX, 2.858276 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        a = this.entity;
        c = this.quadPositions[0];
        var d = new lemongine.Point(13 * entities.Entity_Mob_ZombiePigman.frames[this.currentFrame], 213),
            f = new lemongine.Point(13, 22),
            l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .43333333333333335, .7333333333333333), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        a.updateQuad(c, null, d, f, null, l, null, b);
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -2.2366666666666664).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), a = this.entity, c = this.quadPositions[1], d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), b.h.color = p, a.updateQuad(c, null, d, f, null, l, null, b)) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point());
        null != this.item && (this.entityMatrix.reset().translate(-.5, -.5).scale2D(.86675).rotate2D(.33499999999999996 * Math.PI).translate(-.6433333333333333, (-43 - (1 == entities.Entity_Mob_ZombiePigman.frames[this.currentFrame] || 2 == entities.Entity_Mob_ZombiePigman.frames[this.currentFrame] ? 2.858276 * this.scaleY : 0)) / 30).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.set(this.entityMatrix.values), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = this.quadPositions[0] + 2, b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, b.h.color = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers = b, this.item.render(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = -1, js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers = new haxe.ds.StringMap());
    },
    destroy: function () {
        null != this.item && this.item.destroy();
        this.wasHolding = Game.emptyItem();
        entities.Entity_Mob.prototype.destroy.call(this);
    },
    __class__: entities.Entity_Mob_ZombiePigman
})
entities.Entity_Mob_ZombiePigman.frames = [0, 0, 1, 2, 1, 3, 0]