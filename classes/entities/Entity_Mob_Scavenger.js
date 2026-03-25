entities.Entity_Mob_Scavenger = function (b, a, c) {
    this.mobTmpDat = new haxe.ds.StringMap();
    this.wasOnScreen = !1;
    this.firstFrame = !0;
    this.handItemIsDisplaying = !1;
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
    this.sneaking = this.wasSprinting = !1;
    this.frameNumber = this.frameTimer = this.walkAnimation = this.xPos = this.yPos = 0;
    this.characterMatrix = new lemongine.Matrix4();
    entities.Entity_Mob.call(this, b, a, c, new haxe.ds.StringMap());
    this.scavengerMemberObject = ScavengerManager.getMember(b);
    this.entityPool = a.scavengerPlayers;
    this.entityPoolID = "scavenger";
    this.initMobEntity();
    this.entity.setTextureBuffer("texture2", ScavengerManager.playerSkinsTexture.skinTexture);
    this.entity.setUniform("texSize2", [ScavengerManager.playerSkinsTexture.skinTexture.width, ScavengerManager.playerSkinsTexture.skinTexture.height]);
    this.armorRenderers = [new renderers.armor.Q_Helmet(this.entity), new renderers.armor.Q_Chestplate(this.entity), new renderers.armor.Q_Leggings(this.entity), new renderers.armor.Q_Boots(this.entity)];
    this.characterHandItemRenderer = new Item(this.entity, 0, 0, a, []);
}
m["entities.Entity_Mob_Scavenger"] = entities.Entity_Mob_Scavenger
entities.Entity_Mob_Scavenger.__name__ = "entities.Entity_Mob_Scavenger"
entities.Entity_Mob_Scavenger.__super__ = entities.Entity_Mob
entities.Entity_Mob_Scavenger.prototype = z(entities.Entity_Mob.prototype, {
    run: function () {
        this.movieX = this.get_x();
        this.movieY = this.get_y() - .16666666666666666;
        if (this.scavengerMemberObject.removeOnGameOver) this.remove();else {
            this.set_x(this.scavengerMemberObject.mobData.h.x - G.toFloat(G.toFloat(Main.Instance.tick - this.scavengerMemberObject.mobData.h.lastTick) % G.toFloat(10) | 0) * (this.scavengerMemberObject.mobData.h.xSpeed / 30));
            this.set_y(this.scavengerMemberObject.mobData.h.y - G.toFloat(G.toFloat(Main.Instance.tick - this.scavengerMemberObject.mobData.h.lastTick) % G.toFloat(10) | 0) * (this.scavengerMemberObject.mobData.h.ySpeed / 30));
            0 != this.scavengerMemberObject.mobData.h.collideY && this.set_y(Math.min(this.get_y(), this.scavengerMemberObject.mobData.h.collideY));
            this.currentFrame = this.scavengerMemberObject.mobData.h.characterCurrentFrame;
            0 == this.scavengerMemberObject.mobData.h.lastTick && (this.frameNumber = this.scavengerMemberObject.mobData.h.characterFrameNumber, this.frameTimer = this.scavengerMemberObject.mobData.h.characterFrameTimer);
            this.sneaking = this.scavengerMemberObject.mobData.h.sneaking;
            this.wasSprinting = this.scavengerMemberObject.mobData.h.wasSprinting;
            0 != this.scavengerMemberObject.mobData.h.xSpeed && (this.scaleX = lemongine.Mathz.sign(this.scavengerMemberObject.mobData.h.xSpeed));
            var b = this.scavengerMemberObject.mobData.h.dead;
            1 <= b ? (.3 != this.colorTransform[1] && (this.colorTransform = [1, .3, .3, 1, 20, 0, 0, 0]), this.rotation = (1 == this.scaleX ? -1 : 1) * Math.sqrt(Math.min(1, b / 40)) * 90, this.scavengerMemberObject.mobData.h.dead += 1) : (1 != this.colorTransform[1] && (this.colorTransform = [1, 1, 1, 1, 0, 0, 0, 0]), this.rotation = 0);
            if (this.onScreen(2) && this.scavengerMemberObject.mobData.h.dimension == this.world.sceneNum) this.render(), this.wasOnScreen = !0;else {
                if (this.wasOnScreen) {
                    b = 0;
                    for (var a = this.quadPositions; b < a.length;) this.entity.updateQuad(a[b++], null, null, null, new lemongine.Point());
                    this.wasOnScreen = !1;
                    this.handItemIsDisplaying && (js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset().scale2D(0), this.characterHandItemRenderer.render(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset(), this.handItemIsDisplaying = !1);
                }
                this.scavengerMemberObject.mobData.h.x = -1E3;
                this.scavengerMemberObject.mobData.h.y = -1E3;
            }
        }
    },
    render: function (b) {
        entities.Entity_Mob.prototype.render.call(this);
        this.skinTexture = this.scavengerMemberObject.skinSlot;
        1 == this.skinTexture.failed && (this.skinTexture = ScavengerManager.playerSkinsTexture.getTextureSlot("1"), Console.newLine("[INFO] Failed to load scavenger skin for " + Std.parseInt(Std.string(this.scavengerMemberObject.id))));
        var a = !0,
            c = this.quadPositions[0],
            d = 2;
        this.firstFrame && (this.firstFrame = a = !1);
        for (b = 0; 4 > b;) {
            var f = b++;
            null != this.get_armor()[f] ? (this.lastArmors[f] != this.get_armor()[f][0] && (this.lastArmors[f] = lemongine.Helpers.clone(this.get_armor()[f][0]), 0 == f ? js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Helmet).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), !0) : 1 == f ? js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Chestplate).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), !0) : 2 == f ? js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Leggings).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0) : 3 == f && js.Boot.__cast(this.armorRenderers[f], renderers.armor.Q_Boots).setItem(this.get_armor()[f], c, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), this.armorRenderers[f].quadPositions[0] != c + 1 ? a = !1 : c += this.armorRenderers[f].quadPositions.length), d += this.armorRenderers[f].quadPositions.length) : null != this.lastArmors[f] && (this.lastArmors[f] = null, a = !1);
        }
        0 == a && (this.destroy(), b = this.entity.nearestConsecutiveEmpty(d), this.quadPositions = [], this.quadPositions.push(b), this.entity.updateQuad(b, null, null, new lemongine.Point()), null != this.get_armor()[2] && js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).setItem(this.get_armor()[2], b, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), null != this.get_armor()[3] && js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).setItem(this.get_armor()[3], b, new lemongine.Matrix4(), new lemongine.Matrix4(), !0, !0), null != this.get_armor()[1] && js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).setItem(this.get_armor()[1], b, new lemongine.Matrix4(), !0), null != this.get_armor()[0] && js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).setItem(this.get_armor()[0], b, new lemongine.Matrix4(), !0), this.quadPositions.push(b + d - 1), this.entity.updateQuad(b + d - 1, null, null, new lemongine.Point()));
        b = this.currentFrame;
        this.characterMatrix.reset().translate(-.26666666666666666, -.7333333333333333).rotate2D(-this.rotation / 180 * Math.PI).scale(2.7270000000000003 * this.scaleX, 2.7270000000000003 * this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom).translate(0, .08);
        d = !1;
        this.armorOffsets[1].hide = !1;
        this.armorOffsets[2].hide = !1;
        this.armorOffsets[3].hide = !1;
        this.armorOffsets[4].hide = !1;
        this.armorOffsets[5].hide = !1;
        switch (b) {
        case 1:
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + (this.sneaking ? 96 : 0), this.skinTexture.rect.y);
            var l = new lemongine.Point(16, 22),
                p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            var h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            this.sneaking ? (1 != this.walkAnimation && (this.walkAnimation = 1, this.frameTimer = 0), this.frameNumber = 6 + Math.floor(this.frameTimer / 16), this.frameTimer = ++this.frameTimer % 32) : this.wasSprinting ? (2 != this.walkAnimation && (this.walkAnimation = 2, this.frameTimer = 0), this.frameNumber = Math.floor(Math.min(5, 1 + Math.floor(this.frameTimer / 2))), this.frameTimer = ++this.frameTimer % 12) : (0 != this.walkAnimation && (this.frameTimer = this.walkAnimation = 0), this.frameNumber = Math.floor(Math.min(5, 1 + Math.floor(this.frameTimer / 4))), this.frameTimer = ++this.frameTimer % 22);
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 16 * this.frameNumber, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            this.frameNumber = 9 + Math.floor(this.frameTimer / 4);
            this.characterHandItemRenderer.set_item(this.scavengerMemberObject.handItem);
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 16 * this.frameNumber, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
            0 == this.frameTimer && (this.mobTmpDat.h.miningAnimation = !1);
            a = d = b = 0;
            switch (this.frameNumber) {
            case 10:
                b = .11944444444444445 * Math.PI;
                d = -9.7;
                a = -38;
                break;
            case 9:
            case 11:
                b = .2661111111111111 * Math.PI;
                d = -14.9;
                a = -35.5;
                break;
            case 12:
                b = .61 * Math.PI;
                d = -22.7;
                a = -18.1;
                break;
            case 13:
                b = .8600000000000001 * Math.PI, d = -19.9, a = -10.5;
            }
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset().translate(-.5, -.5).scale2D(14.467711999999999).rotate2D(b).translate(d, a).scale2D(.5500550055005501 / this.game.zoom).translate(.26666666666666666, .7333333333333333).multiply(this.characterMatrix.values);
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers.h.texBlend = entities.Entity_Mob.blendItems;
            this.characterHandItemRenderer.render();
            b = js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers;
            Object.prototype.hasOwnProperty.call(b.h, "texBlend") && delete b.h.texBlend;
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset();
            d = !0;
            this.frameTimer = ++this.frameTimer % 20;
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
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 224, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 128, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 240, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 240, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            a = this.entity;
            c = this.quadPositions[0];
            f = new lemongine.Point(this.skinTexture.rect.x + 256, this.skinTexture.rect.y);
            l = new lemongine.Point(16, 22);
            p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix);
            b = new haxe.ds.StringMap();
            b.h.texBlend = entities.Entity_Mob.blendMob;
            h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6);
            b.h.colorOffset = h;
            h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6);
            b.h.color = h;
            a.updateQuad(c, null, f, l, null, p, null, b);
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
            b = new lemongine.Matrix4().reset().rotate2D(-.25 * Math.PI).translate(.5455555555555556, -.10333333333333335).multiply(this.characterMatrix.values), this.characterMatrix.set(b.values), a = this.entity, c = this.quadPositions[0], f = new lemongine.Point(this.skinTexture.rect.x + 256, this.skinTexture.rect.y), l = new lemongine.Point(16, 22), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .7333333333333333), this.characterMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendMob, h = lemongine.Mathz.repeatArray([this.colorTransform[4] / 255 * this.alpha, this.colorTransform[5] / 255 * this.alpha, this.colorTransform[6] / 255 * this.alpha, this.colorTransform[7] / 255 * this.alpha], 6), b.h.colorOffset = h, h = lemongine.Mathz.repeatArray([this.colorTransform[0], this.colorTransform[1], this.colorTransform[2], this.colorTransform[3] * this.alpha], 6), b.h.color = h, a.updateQuad(c, null, f, l, null, p, null, b), this.armorOffsets[0].y = -37.9, this.armorOffsets[1].x = 0, this.armorOffsets[1].y = -21.7, this.armorOffsets[1].hide = !0, this.armorOffsets[2].hide = !0, this.armorOffsets[3].hide = !0, this.armorOffsets[4].hide = !0, this.armorOffsets[5].hide = !0;
        }
        js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers.h.texBlend = entities.Entity_Mob.blendItems;
        this.renderArmor();
        b = js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers;
        Object.prototype.hasOwnProperty.call(b.h, "texBlend") && delete b.h.texBlend;
        this.handItemIsDisplaying && !d && (js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset().scale2D(0), this.characterHandItemRenderer.render(), js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset());
        this.handItemIsDisplaying = d;
        1 == this.fire ? (0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random()))), this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.3125216999999998, 1.3125216999999998).translate(0, -2.2366666666666664).rotate2D(-this.rotation / 180 * Math.PI).scale(this.scaleX, this.scaleY).translate(Math.floor(this.movieX * this.game.zoom) / this.game.zoom, Math.floor(this.movieY * this.game.zoom) / this.game.zoom), a = this.entity, c = this.quadPositions[this.quadPositions.length - 1], f = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), l = new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix), b = new haxe.ds.StringMap(), b.h.texBlend = entities.Entity_Mob.blendItems, h = lemongine.Mathz.repeatArray([1, 1, 1, this.colorTransform[3] * this.alpha], 6), b.h.color = h, a.updateQuad(c, null, f, l, null, p, null, b)) : this.entity.updateQuad(this.quadPositions[this.quadPositions.length - 1], null, new lemongine.Point(), new lemongine.Point());
        this.nameTagBehavior();
    },
    renderNametag: function () {
        var b = TextCache.get("nametag" + this.id + "shadow", this.nametagText, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-16777216), 1.375, lemongine.TextAlignment.CENTER, 1);
        b.transform.reset().scale2D(1.375 / this.game.zoom).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor((this.get_y() - 1 - 2) * this.game.zoom) / this.game.zoom).translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale2D(this.game.zoom).translate(this.game.scene.get_width() / 2 + 1, this.game.scene.get_height() / 2 + 1);
        b.layer = 1;
        this.game.scene.draw(b);
        b = TextCache.get("nametag" + this.id, this.nametagText, new lemongine.Point(), Fonts.get_volter(), new lemongine.Color(-1), 1.25, lemongine.TextAlignment.CENTER, 1);
        b.transform.reset().scale2D(1.375 / this.game.zoom).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor((this.get_y() - 1 - 2) * this.game.zoom) / this.game.zoom).translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale2D(this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        b.layer = 1;
        this.game.scene.draw(b);
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
    remove: function () {
        this.game.addParticles("slime", 0, 4, new lemongine.Point(this.get_x() - .25, .5), new lemongine.Point(this.get_y() - 1.6666666666666667, 1.6666666666666667));
        this.game.requestSound("scavengerPlayerLeft", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY);
        this.scavengerMemberObject.entity = null;
        this.destroy();
    },
    destroy: function () {
        null != this.armorRenderers[0] && js.Boot.__cast(this.armorRenderers[0], renderers.armor.Q_Helmet).remove();
        null != this.armorRenderers[1] && js.Boot.__cast(this.armorRenderers[1], renderers.armor.Q_Chestplate).remove();
        null != this.armorRenderers[2] && js.Boot.__cast(this.armorRenderers[2], renderers.armor.Q_Leggings).remove();
        null != this.armorRenderers[3] && js.Boot.__cast(this.armorRenderers[3], renderers.armor.Q_Boots).remove();
        entities.Entity_Mob.prototype.destroy.call(this);
    },
    get_x: function () {
        return this.xPos;
    },
    set_x: function (b) {
        return this.xPos = b;
    },
    get_y: function () {
        return this.yPos;
    },
    set_y: function (b) {
        return this.yPos = b;
    },
    get_name: function () {
        return this.scavengerMemberObject.username;
    },
    get_keys: function () {
        return new haxe.ds.StringMap();
    },
    get_effects: function () {
        return new haxe.ds.StringMap();
    },
    get_armor: function () {
        return [Game.emptyItem(), Game.emptyItem(), Game.emptyItem(), Game.emptyItem()];
    },
    getArmorExtras: function (b) {
        return new haxe.ds.StringMap();
    },
    __class__: entities.Entity_Mob_Scavenger
})