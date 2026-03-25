entities.Entity_Mob_Zombie = function (b, a, c) {
    this.firstFrame = !0;
    this.armorOffsets = [{
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }, {
        x: 0,
        y: 0,
        rotation: 0,
        matrix: new lemongine.Matrix4(),
        hide: !1
    }];
    this.armorRenderers = [];
    this.lastArmors = [];
    entities.Entity_Mob.call(this, b, a, c);
    this.initMobEntity();
    this.armorRenderers = [new renderers.armor.Q_Helmet(this.entity), new renderers.armor.Q_Chestplate(this.entity), new renderers.armor.Q_Leggings(this.entity), new renderers.armor.Q_Boots(this.entity)];
}
m["entities.Entity_Mob_Zombie"] = entities.Entity_Mob_Zombie
entities.Entity_Mob_Zombie.__name__ = "entities.Entity_Mob_Zombie"
entities.Entity_Mob_Zombie.__super__ = entities.Entity_Mob
entities.Entity_Mob_Zombie.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this);
        var a = !0,
            c = this.quadPositions[0],
            d = 3;
        this.firstFrame && (this.firstFrame = a = !1);
        for (b = 0; 4 > b;) {
            var f = b++;
            null != this.get_armor()[f] ? (this.lastArmors[f] != this.get_armor()[f][0] && (this.lastArmors[f] = lemongine.Helpers.clone(this.get_armor()[f][0]), 0 == f ? js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Helmet).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), !0) : 1 == f ? js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Chestplate).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), !0) : 2 == f ? js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Leggings).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0) : 3 == f && js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Boots).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), this.armorRenderers[f].quadPositions[0] != c + 1 ? a = !1 : c += this.armorRenderers[f].quadPositions.length), d += this.armorRenderers[f].quadPositions.length) : null != this.lastArmors[f] && (this.lastArmors[f] = null, a = !1);
        }
        0 == a && (this.destroy(), b = this.entity.nearestConsecutiveEmpty(d), this.quadPositions = [], this.quadPositions.push(b), this.entity.updateQuad(b, null, null, new lemongine.Point()), null != this.get_armor()[2] && js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).setItem(this.get_armor()[2], b, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), null != this.get_armor()[3] && js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).setItem(this.get_armor()[3], b, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), null != this.get_armor()[1] && js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).setItem(this.get_armor()[1], b, new lemongine.Matrix4(), !0), null != this.get_armor()[0] && js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).setItem(this.get_armor()[0], b, new lemongine.Matrix4(), !0), this.quadPositions.push(b + d - 2), this.entity.updateQuad(b + d - 2, null, null, new lemongine.Point()), this.quadPositions.push(b + d - 1), this.entity.updateQuad(b + d - 1, null, null, new lemongine.Point()));
        this.entityMatrix.reset().translate(-.21666666666666667, -.7).rotate2D(-this.rotation / 180 * Math.PI).scale(2.858276 * this.scaleX, 2.858276 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        d = this.entity;
        a = this.quadPositions[0];
        c = new lemongine.Point(13 * entities.Entity_Mob_Zombie.frames[this.currentFrame], 21);
        f = new lemongine.Point(13, 21);
        var l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .43333333333333335, .7), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        var p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        d.updateQuad(a, null, c, f, null, l, null, b);
        d = this.entity;
        a = this.quadPositions[this.quadPositions.length - 2];
        c = new lemongine.Point(52, 21 + (1 == entities.Entity_Mob_Zombie.frames[this.currentFrame] || 2 == entities.Entity_Mob_Zombie.frames[this.currentFrame] ? 1 : 0));
        f = new lemongine.Point(13, 21 - (1 == entities.Entity_Mob_Zombie.frames[this.currentFrame] || 2 == entities.Entity_Mob_Zombie.frames[this.currentFrame] ? 1 : 0));
        l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .43333333333333335, (21 - (1 == entities.Entity_Mob_Zombie.frames[this.currentFrame] || 2 == entities.Entity_Mob_Zombie.frames[this.currentFrame] ? 1 : 0)) / 30), this.entityMatrix);
        b = new haxe.ds.StringMap();
        b.h.texBlend = entities.Entity_Mob.blendMob;
        p = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
        b.h.colorOffset = p;
        p = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
        b.h.color = p;
        d.updateQuad(a, null, c, f, null, l, null, b);
        switch (entities.Entity_Mob_Zombie.frames[this.currentFrame]) {
        case 0:
            this.armorOffsets[0].y = -36.6;
            this.armorOffsets[1].x = 0;
            this.armorOffsets[1].y = -17;
            this.armorOffsets[2].x = -2.9;
            this.armorOffsets[2].y = -8.9;
            this.armorOffsets[2].rotation = 0;
            this.armorOffsets[3].x = 2.8;
            this.armorOffsets[3].y = -8.9;
            this.armorOffsets[3].rotation = 0;
            this.armorOffsets[4].x = -5;
            this.armorOffsets[4].y = -3;
            this.armorOffsets[4].rotation = 90;
            this.armorOffsets[5].x = 4.7;
            this.armorOffsets[5].y = -3;
            this.armorOffsets[5].rotation = -90;
            break;
        case 1:
        case 2:
        case 3:
            this.armorOffsets[0].y = [-38.1, -38.1, -36.3][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[1].x = 0, this.armorOffsets[1].y = [-17.8, -17.8, -17][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[2].x = [-4.4, -6, -1.2][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[2].y = [-8.5, -8.1, -5.8][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[2].rotation = [15, 30, 15][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[3].x = [2.9, 3.2, -1.9][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[3].y = [-9.6, -10.1, -5.9][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[3].rotation = [-30, -45, 0][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[4].x = [-6.8, -9.6, -2.5][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[4].y = [-3, -3.2, -1.3][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[4].rotation = [90, 90, 75][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[5].x = [7, 8.9, 2][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[5].y = [-3.6, -6.2, -.5][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1], this.armorOffsets[5].rotation = [30, 0, 30][entities.Entity_Mob_Zombie.frames[this.currentFrame] - 1];
        }
        this.entityMatrix.reset().translate(-.26666666666666666, -.7333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(2.858276 * this.scaleX, 2.858276 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
        js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers.h.texBlend = entities.Entity_Mob.blendItems;
        this.renderArmor();
        b = js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers;
        Object.prototype.hasOwnProperty.call(b.h, "texBlend") && delete b.h.texBlend;
        0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random())));
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -2.2366666666666664).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), d = this.entity, a = this.quadPositions[this.quadPositions.length - 1], c = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, p = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), b.h.color = p, d.updateQuad(a, null, c, f, null, l, null, b)) : this.entity.updateQuad(this.quadPositions[this.quadPositions.length - 1], null, new lemongine.Point(), new lemongine.Point());
    },
    renderArmor: function () {
        this.armorOffsets[2].matrix.reset().scale2D(16).rotate2D(-this.armorOffsets[2].rotation / 180 * Math.PI).translate(this.armorOffsets[2].x, this.armorOffsets[2].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.entityMatrix.values);
        this.armorOffsets[3].matrix.reset().scale(-16, 16).rotate2D(-this.armorOffsets[3].rotation / 180 * Math.PI).translate(this.armorOffsets[3].x, this.armorOffsets[3].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.entityMatrix.values);
        js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).setItem(this.get_armor()[2], this.quadPositions[0], this.armorOffsets[2].matrix, this.armorOffsets[3].matrix, this.armorOffsets[2].hide, this.armorOffsets[3].hide).update();
        this.armorOffsets[4].matrix.reset().scale2D(13.6).rotate2D(-(this.armorOffsets[4].rotation - 90) / 180 * Math.PI).translate(this.armorOffsets[4].x, this.armorOffsets[4].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.entityMatrix.values);
        this.armorOffsets[5].matrix.reset().scale(13.6 * (0 > this.armorOffsets[5].rotation ? -1 : 1), 13.6).rotate2D(-(this.armorOffsets[5].rotation - 90 * (0 > this.armorOffsets[5].rotation ? -1 : 1)) / 180 * Math.PI).translate(this.armorOffsets[5].x, this.armorOffsets[5].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.entityMatrix.values);
        js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).setItem(this.get_armor()[3], this.quadPositions[0], this.armorOffsets[4].matrix, this.armorOffsets[5].matrix, this.armorOffsets[4].hide, this.armorOffsets[5].hide).update();
        this.armorOffsets[1].matrix.reset().scale2D(16).rotate2D(this.armorOffsets[1].rotation / 180 * Math.PI).translate(this.armorOffsets[1].x, this.armorOffsets[1].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.entityMatrix.values);
        js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).setItem(this.get_armor()[1], this.quadPositions[0], this.armorOffsets[1].matrix, this.armorOffsets[1].hide).update();
        this.armorOffsets[0].matrix.reset().scale2D(16).rotate2D(this.armorOffsets[0].rotation / 180 * Math.PI).translate(this.armorOffsets[0].x, this.armorOffsets[0].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.entityMatrix.values);
        js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).setItem(this.get_armor()[0], this.quadPositions[0], this.armorOffsets[0].matrix, this.armorOffsets[0].hide).update();
    },
    destroy: function () {
        null != this.armorRenderers[0] && js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).remove();
        null != this.armorRenderers[1] && js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).remove();
        null != this.armorRenderers[2] && js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).remove();
        null != this.armorRenderers[3] && js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).remove();
        entities.Entity_Mob.prototype.destroy.call(this);
    },
    __class__: entities.Entity_Mob_Zombie
})
entities.Entity_Mob_Zombie.frames = [0, 0, 1, 2, 1, 3, 0]