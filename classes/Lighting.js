var Lighting = function (b) {
    this.bgLightAlpha = 1;
    this.playerQuadMatrix = new lemongine.Matrix4();
    this.bedAlpha = 0;
    this.bedFrame = 1;
    this.playerAlpha = 0;
    this.pumpkinFrame = this.playerFrame = 1;
    this.lQuads = new haxe.ds.StringMap();
    this.lightningFrame = 1;
    this.baseQuad = 0;
    this.visible = !0;
    this.game = b;
    this.lightingScene = new lemongine.Scene(1, 1).setup2D(b.scene.get_width(), b.scene.get_height(), lemongine.Color.clear);
    this.lightingImage = new lemongine.Image().fromScene(this.lightingScene);
    this.entity = new lemongine.Entity([], lemongine.Geom.createQuadBackface(1, 1), shader.LightingShader.getShader());
    this.entity.transform.reset().translate(.5, -.5).scale(b.scene.get_width(), -b.scene.get_height());
    this.entity.setTextureBuffer("texture", this.lightingImage);
    this.entity.isTransparent = !0;
    this.entity.layer = 4;
    var a = shader.GradientRadialMultiple.getShader(),
        c = new haxe.ds.StringMap(),
        d = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
    c.h.colori = d;
    d = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
    c.h.coloro = d;
    d = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
    c.h.position = d;
    this.bottomEntity = new lemongine.QuadPoolEntity(null, null, a, c);
    this.bottomEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.bottomEntity.isTransparent = !0;
    this.bottomEntity.layer = 0;
    a = shader.GradientRadialMultiple.getShader();
    c = new haxe.ds.StringMap();
    d = lemongine.Mathz.repeatArray([1], 24);
    c.h.colori = d;
    d = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
    c.h.coloro = d;
    d = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
    c.h.position = d;
    this.lEntity = new lemongine.QuadPoolEntity(null, null, a, c);
    this.lEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.lEntity.isTransparent = !0;
    this.lEntity.layer = 1;
    this.pumpkinLightEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.GradientRadial.getShader());
    lemongine.shader.GradientRadial.setupEntity(this.pumpkinLightEntity, lemongine.Geom.quadUVs, new lemongine.Color(1728053247), new lemongine.Color(16777215), new lemongine.Rectangle(.5, .5, 0, .5));
    this.pumpkinLightEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.pumpkinLightEntity.isTransparent = !0;
    this.pumpkinLightEntity.layer = 2;
    this.pumpkinEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
    this.pumpkinEntity.transform.reset().translate(.5, .5).scale(b.scene.get_width(), b.scene.get_height());
    this.pumpkinImage = lemongine.AssetManager.getImage("pumpkin_overlay");
    lemongine.shader.BasicTextureSingle.setupEntity(this.pumpkinEntity, this.pumpkinImage);
    this.pumpkinEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.pumpkinEntity.isTransparent = !0;
    this.pumpkinEntity.layer = 3;
    a = shader.GradientRadialMultiple.getShader();
    c = new haxe.ds.StringMap();
    d = lemongine.Mathz.repeatArray([1, 1, 1, 0], 24);
    c.h.colori = d;
    d = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
    c.h.coloro = d;
    d = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
    c.h.position = d;
    this.topEntity = new lemongine.QuadPoolEntity(null, null, a, c);
    this.topEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.topEntity.isTransparent = !0;
    this.topEntity.layer = 4;
};
m.Lighting = Lighting
Lighting.__name__ = "Lighting"
Lighting.prototype = {
    resize: function () {
        this.lightingScene.setup2D(this.game.scene.get_width(), this.game.scene.get_height(), this.lightingScene.backgroundColor);
        lemongine.Renderer.activate(this.lightingScene);
        this.lightingImage.fromScene(this.lightingScene);
        this.entity.setTextureBuffer("texture", this.lightingImage);
        this.entity.transform.reset().translate(.5, -.5).scale(this.game.scene.get_width(), -this.game.scene.get_height());
        this.pumpkinEntity.transform.reset().scale(G.toFloat(this.pumpkinImage.width), G.toFloat(this.pumpkinImage.height)).scale2D(Math.max(G.toFloat(this.game.scene.get_width()) / G.toFloat(this.pumpkinImage.width), G.toFloat(this.game.scene.get_height()) / G.toFloat(this.pumpkinImage.height))).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
    },
    update: function () {
        1 < this.lightningFrame && 0 == this.game.world.tick % 2 && (this.lightningFrame++, 5 < this.lightningFrame && (this.lightningFrame = .3333333333333333 > Math.random() ? 2 : 1));
        this.lightingScene.clear();
        this.updateBaseQuad();
        this.lightingScene.draw(this.bottomEntity);
        this.lEntity.transform.reset().translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale(this.game.zoom, this.game.zoom, this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        this.lightingScene.draw(this.lEntity);
        this.pumpkinFrame = "jl" == this.game.world.armors[0][0] ? 2 : "pk" == this.game.world.armors[0][0] ? 3 : 1;
        1 < this.pumpkinFrame && (2 == this.pumpkinFrame && (this.pumpkinLightEntity.transform.reset().scale2D(8.333333333333334).translate(this.game.world.worldX, this.game.world.worldY - 1).translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale(this.game.zoom, this.game.zoom, this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2), this.lightingScene.draw(this.pumpkinLightEntity)), this.lightingScene.draw(this.pumpkinEntity));
        this.lightingScene.draw(this.topEntity, !0);
        this.visible && this.game.scene.draw(this.entity);
    },
    addLight: function (b, a, c, d) {
        if (!Object.prototype.hasOwnProperty.call(this.lQuads.h, b)) {
            var f = this.lQuads,
                l = this.lEntity.nearestConsecutiveEmpty(2);
            f.h[b] = l;
            switch (a._hx_index) {
            case 0:
                a = this.lEntity;
                f = this.lQuads.h[b];
                l = new lemongine.Vector3(c - 9.2, -d - 9.2);
                var p = new lemongine.Point(1, 1),
                    h = new lemongine.Point(18.4, 18.4),
                    n = new haxe.ds.StringMap(),
                    m = lemongine.Mathz.repeatArray([1, 1, 1, .6], 6);
                n.h.colori = m;
                m = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
                n.h.coloro = m;
                m = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
                n.h.position = m;
                a.updateQuad(f, l, null, p, h, null, null, n);
                a = this.lEntity;
                f = this.lQuads.h[b] + 1;
                l = new lemongine.Vector3(c - 2, -d - 2);
                p = new lemongine.Point(1, 1);
                h = new lemongine.Point(4, 4);
                n = new haxe.ds.StringMap();
                m = lemongine.Mathz.repeatArray([1, 1, 1, 1], 6);
                n.h.colori = m;
                m = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
                n.h.coloro = m;
                m = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
                n.h.position = m;
                a.updateQuad(f, l, null, p, h, null, null, n);
                break;
            case 1:
                a = this.lEntity;
                f = this.lQuads.h[b];
                l = new lemongine.Vector3(c - 3.1666666666666665, -d - 3.1666666666666665);
                p = new lemongine.Point(1, 1);
                h = new lemongine.Point(6.333333333333333, 6.333333333333333);
                n = new haxe.ds.StringMap();
                m = lemongine.Mathz.repeatArray([1, 1, 1, .5], 6);
                n.h.colori = m;
                m = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
                n.h.coloro = m;
                m = lemongine.Mathz.repeatArray([.5, .5, .1, .5], 6);
                n.h.position = m;
                a.updateQuad(f, l, null, p, h, null, null, n);
                a = this.lEntity;
                f = this.lQuads.h[b] + 1;
                l = new lemongine.Vector3(c - .016666666666666666, -d - .016666666666666666);
                p = new lemongine.Point(1, 1);
                h = new lemongine.Point(.03333333333333333, .03333333333333333);
                n = new haxe.ds.StringMap();
                m = lemongine.Mathz.repeatArray([1, 1, 1, .16666666666666666], 6);
                n.h.coloro = m;
                m = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
                n.h.position = m;
                a.updateQuad(f, l, null, p, h, null, null, n);
                break;
            case 2:
                a = this.lEntity;
                f = this.lQuads.h[b];
                l = new lemongine.Vector3(c - 2.25, -d - 2.25 + .06666666666666667);
                p = new lemongine.Point(1, 1);
                h = new lemongine.Point(4.5, 4.5);
                n = new haxe.ds.StringMap();
                m = lemongine.Mathz.repeatArray([1, 1, 1, .6], 6);
                n.h.colori = m;
                m = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
                n.h.coloro = m;
                m = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
                n.h.position = m;
                a.updateQuad(f, l, null, p, h, null, null, n);
                a = this.lEntity;
                f = this.lQuads.h[b] + 1;
                l = new lemongine.Vector3(c - .48333333333333334, -d - .48333333333333334 + .06666666666666667);
                p = new lemongine.Point(1, 1);
                h = new lemongine.Point(.9666666666666667, .9666666666666667);
                n = new haxe.ds.StringMap();
                m = lemongine.Mathz.repeatArray([1, 1, 1, 1], 6);
                n.h.colori = m;
                m = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
                n.h.coloro = m;
                m = lemongine.Mathz.repeatArray([.5, .5, 0, .5], 6);
                n.h.position = m;
                a.updateQuad(f, l, null, p, h, null, null, n);
                break;
            case 3:
                a = this.lEntity, f = this.lQuads.h[b], l = new lemongine.Vector3(c - 6.266666666666667, -d - 6.266666666666667), p = new lemongine.Point(1, 1), h = new lemongine.Point(12.533333333333333, 12.533333333333333), n = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([0, 0, 0, .93], 6), n.h.colori = m, m = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6), n.h.coloro = m, m = lemongine.Mathz.repeatArray([.5, .5, .1, .5], 6), n.h.position = m, a.updateQuad(f, l, null, p, h, null, null, n), this.lEntity.updateQuad(this.lQuads.h[b] + 1, new lemongine.Vector3(c, -d), null, new lemongine.Point(1, 1), new lemongine.Point(0, 0));
            }
        }
    },
    removeLight: function (b) {
        if (Object.prototype.hasOwnProperty.call(this.lQuads.h, b)) {
            this.lEntity.removeQuad(this.lQuads.h[b], !0);
            this.lEntity.removeQuad(this.lQuads.h[b] + 1, !0);
            var a = this.lQuads;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
        }
    },
    clearLights: function () {
        this.lEntity.clearPool(!0);
        this.lQuads.h = Object.create(null);
    },
    updateBaseQuad: function () {
        var b = 1 - this.bgLightAlpha * (1 - Lighting.lightningAmounts[this.lightningFrame - 1]),
            a = 1 - this.bgLightAlpha,
            c = this.bottomEntity,
            d = this.baseQuad,
            f = new lemongine.Vector3(),
            l = new lemongine.Point(1, 1),
            p = new lemongine.Point(this.game.scene.get_width(), this.game.scene.get_height()),
            h = new haxe.ds.StringMap();
        h.h.coloro = [b, b, b, 1, a, a, a, 1, b, b, b, 1, b, b, b, 1, a, a, a, 1, a, a, a, 1];
        c.updateQuad(d, f, null, l, p, null, null, h);
        this.playerQuadMatrix.reset().translate(-.5, -.5).scale2D((1 == this.playerFrame ? 119.6 : 269.1) / 30).translate(this.game.world.worldX, this.game.world.worldY - 1).translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).scale(this.game.zoom, this.game.zoom, this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        c = this.topEntity;
        d = new lemongine.Vector3();
        f = new lemongine.Point(1, 1);
        l = new lemongine.Point(1, 1);
        p = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1, 1), this.playerQuadMatrix);
        h = new haxe.ds.StringMap();
        b = lemongine.Mathz.repeatArray([1, 1, 1, (1 == this.playerFrame ? .3 : 1) * this.playerAlpha], 6);
        h.h.colori = b;
        b = lemongine.Mathz.repeatArray([1, 1, 1, 0], 6);
        h.h.coloro = b;
        b = lemongine.Mathz.repeatArray([.5, .5, 1 == this.playerFrame ? .05 : 0, .5], 6);
        h.h.position = b;
        c.updateQuad(0, d, null, f, l, p, null, h);
        c = this.topEntity;
        d = new lemongine.Vector3();
        f = new lemongine.Point(1, 1);
        l = new lemongine.Point(this.game.scene.get_width(), this.game.scene.get_height());
        h = new haxe.ds.StringMap();
        b = lemongine.Mathz.repeatArray([0, 0, 0, 1 == this.bedFrame ? 0 : this.bedAlpha], 6);
        h.h.colori = b;
        b = lemongine.Mathz.repeatArray([0, 0, 0, 1 == this.bedFrame ? 0 : this.bedAlpha], 6);
        h.h.coloro = b;
        c.updateQuad(1, d, null, f, l, null, null, h);
    },
    bgLightPlay: function () {
        2 > this.lightningFrame && (this.lightningFrame = 2);
    },
    __class__: Lighting
}
Lighting.lightningAmounts = [0, .6, .333, 0, .25]