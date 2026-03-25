entities.Entity_Mob_Spawnskin = function (b, a, c) {
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
    this.frameNumber = this.frameTimer = this.walkAnimation = 0;
    this.characterMatrix = new lemongine.Matrix4();
    entities.Entity_Mob.call(this, b, a, c);
    this.entityPoolID = "spawnskin";
    this.initMobEntity();
    this.entity.setTextureBuffer("texture2", a.spawnskinTextureManager.skinTexture);
    this.entity.setUniform("texSize2", [a.spawnskinTextureManager.skinTexture.width, a.spawnskinTextureManager.skinTexture.height]);
    this.armorRenderers = [new renderers.armor.Q_Helmet(this.entity), new renderers.armor.Q_Chestplate(this.entity), new renderers.armor.Q_Leggings(this.entity), new renderers.armor.Q_Boots(this.entity)];
}
m["entities.Entity_Mob_Spawnskin"] = entities.Entity_Mob_Spawnskin
entities.Entity_Mob_Spawnskin.__name__ = "entities.Entity_Mob_Spawnskin"
entities.Entity_Mob_Spawnskin.__super__ = entities.Entity_Mob
entities.Entity_Mob_Spawnskin.prototype = z(entities.Entity_Mob.prototype, {
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this);
        var a = this.world.mobs.h[this.id];
        b = this.world.mobTmpData.h[this.id];
        this.skinTexture = this.game.spawnskinTextureManager.getTextureSlot(a.h.skin);
        if (1 == this.skinTexture.failed) Console.newLine("[INFO] Failed to load mob skin " + Std.parseInt(Std.string(a.h.skin))), this.removeMob(this.id);else {
            var c = 1;
            1 == b.h.miningAnimation ? c = 3 : a.h.wasFalling && a.h.falling ? c = 5 : (1 == Game.makeDynamicMap(a.h.keys).h.left || 1 == Game.makeDynamicMap(a.h.keys).h.right) && Math.abs(a.h.speedX) > Game.migrateSpeed(2) && (c = 2);
            if (0 < b.h.hurtAnimation || 0 < a.h.dead) c = 4;
            var d = !0,
                f = this.quadPositions[0],
                l = 2;
            this.firstFrame && (this.firstFrame = d = !1);
            for (a = 0; 4 > a;) {
                var p = a++;
                null != this.get_armor()[p] ? (this.lastArmors[p] != this.get_armor()[p][0] && (this.lastArmors[p] = lemongine.Helpers.clone(this.get_armor()[p][0]), 0 == p ? js.Boot.__cast(this.armorRenderers[p], renderers.armor.Q_Helmet).setItem(this.get_armor()[p], f, new lemongine.Matrix4(), !0) : 1 == p ? js.Boot.__cast(this.armorRenderers[p], renderers.armor.Q_Chestplate).setItem(this.get_armor()[p], f, new lemongine.Matrix4(), !0) : 2 == p ? js.Boot.__cast(this.armorRenderers[p], renderers.armor.Q_Leggings).setItem(this.get_armor()[p], f, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0) : 3 == p && js.Boot.__cast(this.armorRenderers[p], renderers.armor.Q_Boots).setItem(this.get_armor()[p], f, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), this.armorRenderers[p].quadPositions[0] != f + 1 ? d = !1 : f += this.armorRenderers[p].quadPositions.length), l += this.armorRenderers[p].quadPositions.length) : null != this.lastArmors[p] && (this.lastArmors[p] = null, d = !1);
            }
            0 == d && (this.destroy(), a = this.entity.nearestConsecutiveEmpty(l), this.quadPositions = [], this.quadPositions.push(a), this.entity.updateQuad(a, null, null, new lemongine.Point()), null != this.get_armor()[2] && js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).setItem(this.get_armor()[2], a, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), null != this.get_armor()[3] && js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).setItem(this.get_armor()[3], a, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), null != this.get_armor()[1] && js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).setItem(this.get_armor()[1], a, new lemongine.Matrix4(), !0), null != this.get_armor()[0] && js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).setItem(this.get_armor()[0], a, new lemongine.Matrix4(), !0), this.quadPositions.push(a + l - 1), this.entity.updateQuad(a + l - 1, null, null, new lemongine.Point()));
            this.currentFrame != c && (this.currentFrame = c, this.frameTimer = this.frameNumber = 0);
            this.characterMatrix.reset().translate(-.26666666666666666, -.7333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(2.727081 * this.scaleX, 2.727081 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom);
            this.armorOffsets[1].hide = !1;
            this.armorOffsets[2].hide = !1;
            this.armorOffsets[3].hide = !1;
            this.armorOffsets[4].hide = !1;
            this.armorOffsets[5].hide = !1;
            switch (c) {
            case 1:
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                var m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
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
            case 2:
                0 != this.walkAnimation && (this.frameTimer = this.walkAnimation = 0);
                this.frameNumber = Math.floor(Math.min(5, 1 + Math.floor(this.frameTimer / 4)));
                this.frameTimer = ++this.frameTimer % 22;
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 16 * this.frameNumber, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.armorOffsets[0].y = [-38.1, -38.1, -38.1, -36.3, -36.3, -33.6, -33.6][this.frameNumber - 1];
                this.armorOffsets[1].x = 0;
                this.armorOffsets[1].y = [-17.5, -17.5, -17.5, -17, -17, -15.7, -15.7][this.frameNumber - 1];
                this.armorOffsets[2].x = [-4.4, -6, -4.4, -1.2, -2.7, -2.1, -2.7][this.frameNumber - 1];
                this.armorOffsets[2].y = [-8.5, -8.1, -8.4, -5.8, -8.7, -7, -8.7][this.frameNumber - 1];
                this.armorOffsets[2].rotation = [15, 30, 15, 15, 0, -30, 0][this.frameNumber - 1];
                this.armorOffsets[3].x = [2.9, 3.2, 2.9, -1.9, 3, 2, 2.9][this.frameNumber - 1];
                this.armorOffsets[3].y = [-9.6, -10.1, -9.6, -5.9, -8.6, -7, -8.7][this.frameNumber - 1];
                this.armorOffsets[3].rotation = [-30, -45, -30, 0, 0, 15, 0][this.frameNumber - 1];
                this.armorOffsets[4].x = [-6.8, -9.6, -6.8, -2.5, -4.9, -3.4, -5.7][this.frameNumber - 1];
                this.armorOffsets[4].y = [-3, -3.2, -2.9, -1.3, -1.9, -2.4, -2.5][this.frameNumber - 1];
                this.armorOffsets[4].rotation = [90, 90, 90, 75, 90, 90, 90][this.frameNumber - 1];
                this.armorOffsets[5].x = [7, 8.9, 7, 2, 4.6, 1.5, 5][this.frameNumber - 1];
                this.armorOffsets[5].y = [-3.6, -6.2, -3.6, -.5, -2, -2.6, -2.5][this.frameNumber - 1];
                this.armorOffsets[5].rotation = [30, 0, 30, 30, -90, 75, -90][this.frameNumber - 1];
                break;
            case 3:
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 16 * this.frameNumber, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.frameTimer = ++this.frameTimer % 20;
                this.frameNumber = 9 + Math.floor(this.frameTimer / 4);
                0 == this.frameTimer && (b.h.miningAnimation = !1);
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
            case 4:
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 224, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.armorOffsets[0].y = -37.7;
                this.armorOffsets[1].x = 0;
                this.armorOffsets[1].y = -17;
                this.armorOffsets[2].x = -2.7;
                this.armorOffsets[2].y = -11.5;
                this.armorOffsets[2].rotation = 30;
                this.armorOffsets[3].x = 3.2;
                this.armorOffsets[3].y = -10.9;
                this.armorOffsets[3].rotation = -15;
                this.armorOffsets[4].x = -5.3;
                this.armorOffsets[4].y = -5;
                this.armorOffsets[4].rotation = 90;
                this.armorOffsets[5].x = 5.4;
                this.armorOffsets[5].y = -5;
                this.armorOffsets[5].rotation = -90;
                break;
            case 5:
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 128, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.armorOffsets[0].y = -38.8;
                this.armorOffsets[1].x = 0;
                this.armorOffsets[1].y = -17.5;
                this.armorOffsets[2].x = -6.1;
                this.armorOffsets[2].y = -8;
                this.armorOffsets[2].rotation = 30;
                this.armorOffsets[3].x = 3.1;
                this.armorOffsets[3].y = -10;
                this.armorOffsets[3].rotation = -45;
                this.armorOffsets[4].x = -9.7;
                this.armorOffsets[4].y = -3.1;
                this.armorOffsets[4].rotation = 90;
                this.armorOffsets[5].x = 8.9;
                this.armorOffsets[5].y = -6;
                this.armorOffsets[5].rotation = 0;
                break;
            case 6:
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 240, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.armorOffsets[0].y = -36.1;
                this.armorOffsets[1].x = -.8;
                this.armorOffsets[1].y = -15.7;
                this.armorOffsets[2].x = -4.5;
                this.armorOffsets[2].y = -8.7;
                this.armorOffsets[2].rotation = 11;
                this.armorOffsets[4].x = -8.1;
                this.armorOffsets[4].y = -3.5;
                this.armorOffsets[4].rotation = 90;
                this.armorOffsets[3].hide = !0;
                this.armorOffsets[5].hide = !0;
                break;
            case 7:
                b = new lemongine.Matrix4().reset().translate(.03333333333333333, -.06444444444444446).multiply(this.characterMatrix.values);
                this.characterMatrix.set(b.values);
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 256, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.armorOffsets[0].y = -37.9;
                this.armorOffsets[1].x = 0;
                this.armorOffsets[1].y = -21.7;
                this.armorOffsets[1].hide = !0;
                this.armorOffsets[2].hide = !0;
                this.armorOffsets[3].hide = !0;
                this.armorOffsets[4].hide = !0;
                this.armorOffsets[5].hide = !0;
                break;
            case 8:
                b = new lemongine.Matrix4().reset().rotate2D(.25 * Math.PI).translate(-.3788888888888889, .2611111111111111).multiply(this.characterMatrix.values);
                this.characterMatrix.set(b.values);
                c = this.entity;
                l = this.quadPositions[0];
                d = new lemongine.Point(this.skinTexture.rect.x + 256, this.skinTexture.rect.y);
                f = new lemongine.Point(16, 22);
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
                a = new haxe.ds.StringMap();
                a.h.texBlend = entities.Entity_Mob.blendMob;
                m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
                a.h.colorOffset = m;
                m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
                a.h.color = m;
                c.updateQuad(l, null, d, f, null, p, null, a);
                this.armorOffsets[0].y = -37.9;
                this.armorOffsets[1].x = 0;
                this.armorOffsets[1].y = -21.7;
                this.armorOffsets[1].hide = !0;
                this.armorOffsets[2].hide = !0;
                this.armorOffsets[3].hide = !0;
                this.armorOffsets[4].hide = !0;
                this.armorOffsets[5].hide = !0;
                break;
            case 9:
                b = new lemongine.Matrix4().reset().rotate2D(-.25 * Math.PI).translate(.5455555555555556, -.10333333333333335).multiply(this.characterMatrix.values), this.characterMatrix.set(b.values), c = this.entity, l = this.quadPositions[0], d = new lemongine.Point(this.skinTexture.rect.x + 256, this.skinTexture.rect.y), f = new lemongine.Point(16, 22), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix), a = new haxe.ds.StringMap(), a.h.texBlend = entities.Entity_Mob.blendMob, m = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6), a.h.colorOffset = m, m = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6), a.h.color = m, c.updateQuad(l, null, d, f, null, p, null, a), this.armorOffsets[0].y = -37.9, this.armorOffsets[1].x = 0, this.armorOffsets[1].y = -21.7, this.armorOffsets[1].hide = !0, this.armorOffsets[2].hide = !0, this.armorOffsets[3].hide = !0, this.armorOffsets[4].hide = !0, this.armorOffsets[5].hide = !0;
            }
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers.h.texBlend = entities.Entity_Mob.blendItems;
            this.renderArmor();
            b = js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers;
            Object.prototype.hasOwnProperty.call(b.h, "texBlend") && delete b.h.texBlend;
            1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -2.2366666666666664).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), c = this.entity, l = this.quadPositions[this.quadPositions.length - 1], d = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), a = new haxe.ds.StringMap(), a.h.texBlend = entities.Entity_Mob.blendItems, m = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), a.h.color = m, c.updateQuad(l, null, d, f, null, p, null, a)) : this.entity.updateQuad(this.quadPositions[this.quadPositions.length - 1], null, new lemongine.Point(), new lemongine.Point());
        }
    },
    updateAlpha: function () {
        entities.Entity_Mob.prototype.updateAlpha.call(this);
        null != this.skinTexture && (this.alpha *= 0 == this.skinTexture.rect.width ? 0 : 1);
    },
    renderArmor: function () {
        this.armorOffsets[2].matrix.reset().scale2D(16).rotate2D(-this.armorOffsets[2].rotation / 180 * Math.PI).translate(this.armorOffsets[2].x, this.armorOffsets[2].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
        this.armorOffsets[3].matrix.reset().scale(-16, 16).rotate2D(-this.armorOffsets[3].rotation / 180 * Math.PI).translate(this.armorOffsets[3].x, this.armorOffsets[3].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
        js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).setItem(this.get_armor()[2], this.quadPositions[0], this.armorOffsets[2].matrix, this.armorOffsets[3].matrix, this.armorOffsets[2].hide, this.armorOffsets[3].hide).update();
        this.armorOffsets[4].matrix.reset().scale2D(13.6).rotate2D(-(this.armorOffsets[4].rotation - 90) / 180 * Math.PI).translate(this.armorOffsets[4].x, this.armorOffsets[4].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
        this.armorOffsets[5].matrix.reset().scale(13.6 * (0 > this.armorOffsets[5].rotation ? -1 : 1), 13.6).rotate2D(-(this.armorOffsets[5].rotation - 90 * (0 > this.armorOffsets[5].rotation ? -1 : 1)) / 180 * Math.PI).translate(this.armorOffsets[5].x, this.armorOffsets[5].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
        js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).setItem(this.get_armor()[3], this.quadPositions[0], this.armorOffsets[4].matrix, this.armorOffsets[5].matrix, this.armorOffsets[4].hide, this.armorOffsets[5].hide).update();
        this.armorOffsets[1].matrix.reset().scale2D(16).rotate2D(this.armorOffsets[1].rotation / 180 * Math.PI).translate(this.armorOffsets[1].x, this.armorOffsets[1].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
        js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).parentColor = [this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha];
        js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).setItem(this.get_armor()[1], this.quadPositions[0], this.armorOffsets[1].matrix, this.armorOffsets[1].hide).update();
        this.armorOffsets[0].matrix.reset().scale2D(16).rotate2D(this.armorOffsets[0].rotation / 180 * Math.PI).translate(this.armorOffsets[0].x, this.armorOffsets[0].y).scale2D(1.5 / this.game.zoom).scale2D(.36670333700036667).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
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
    __class__: entities.Entity_Mob_Spawnskin
})