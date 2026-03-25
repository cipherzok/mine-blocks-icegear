renderers.armor.Q_Helmet = function (b) {
    this.dragonHeadAnimationCache = 0;
    this.hide = !1;
    this.parentColor = [1, 1, 1, 1];
    this.matrix = new lemongine.Matrix4();
    this.itemData = Game.emptyItem();
    var a = new haxe.ds.StringMap(),
        c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.useItem = !0;
    var d = new lemongine.Matrix4().translate(-.5, -.5).translate(0, .25);
    c.h.matrix = d;
    a.h.LeatherCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).translate(0, .25);
    c.h.matrix = d;
    a.h.IronCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).translate(0, .25);
    c.h.matrix = d;
    a.h.DiamondCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).translate(0, .25);
    c.h.matrix = d;
    a.h.pk = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).scale(-1, 1).translate(0, .25);
    c.h.matrix = d;
    a.h.jl = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).translate(0, .25);
    c.h.matrix = d;
    a.h.GoldCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).translate(0, .25);
    c.h.matrix = d;
    a.h.DragonCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).rotate2D(-.08 * Math.PI).translate(.125, -.375);
    c.h.matrix = d;
    a.h.SnowCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).scale2D(1.517).translate(0, .125);
    c.h.matrix = d;
    a.h.AfroCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).scale2D(1.15).rotate2D(-.08333333333333333 * Math.PI).translate(.1875, -.3125);
    c.h.matrix = d;
    a.h.PartyCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !1;
    c.h.texture = "shades[armor]";
    d = new lemongine.Matrix4().translate(-.5, -.5).scale(-.85, .85).translate(-.15625, .6875);
    c.h.matrix = d;
    a.h.ShadesCap = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 3;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).scale2D(1.452).translate(-.0625, .15625);
    c.h.matrix = d;
    a.h.mh = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5).scale2D(1.12).translate(-.125, .5625);
    c.h.matrix = d;
    a.h.MustacheCap = c;
    this.frames = a;
    this.entity = b;
    renderers.Q_Base.call(this, b, 0, 0);
}
m["renderers.armor.Q_Helmet"] = renderers.armor.Q_Helmet
renderers.armor.Q_Helmet.__name__ = "renderers.armor.Q_Helmet"
renderers.armor.Q_Helmet.__super__ = renderers.Q_Base
renderers.armor.Q_Helmet.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (null != this.itemData && null != this.frames.h[this.itemData[0]]) {
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.multiply(this.frames.h[this.itemData[0]].h.matrix.values).multiply(this.matrix.values);
            null != this.parentColor && (js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers.h.color = [this.parentColor[0], this.parentColor[1], this.parentColor[2], this.parentColor[3] * (this.hide ? 0 : 1)]);
            if (null != this.itemRenderer) "pk" == this.itemData[0] && (js.Boot.__cast(this.itemRenderer, renderers.blocks.Q_Pumpkin).state = 2), this.itemRenderer.update(), "mh" == this.itemData[0] && null != this.itemData[3] && "enderdragon" == Game.makeDynamicMap(this.itemData[3]).h.type && js.Boot.__cast(this.itemRenderer, renderers.blocks.Q_MobHead).updateMouth(this.dragonHeadAnimationCache / 50);else if ("ShadesCap" == this.itemData[0]) {
                var b = Textures.getTexture(this.frames.h[this.itemData[0]].h.texture),
                    a = this.entity,
                    c = this.quadPositions[0],
                    d = this.destination,
                    f = new lemongine.Point(b.x, b.y);
                b = new lemongine.Point(b.width, b.height);
                var l = new lemongine.Point(1, 1),
                    p = new haxe.ds.StringMap(),
                    m = lemongine.Mathz.repeatArray([this.parentColor[0], this.parentColor[1], this.parentColor[2], this.parentColor[3] * (this.hide ? 0 : 1)], 6);
                p.h.color = m;
                a.updateQuad(c, d, f, b, l, null, null, p);
            }
            null != this.parentColor && (a = js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers, Object.prototype.hasOwnProperty.call(a.h, "color") && delete a.h.color);
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset();
        }
    },
    setItem: function (b, a, c, d) {
        null == d && (d = !1);
        if (null == b || null == this.frames.h[b[0]]) return this.remove(), this;
        this.matrix = c;
        this.hide = d;
        if (b[0] != this.itemData[0] || !Main.Instance.game.sameExtras(b, this.itemData)) {
            this.destroy();
            this.itemData = lemongine.Helpers.clone(b);
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = a + 1;
            this.itemRenderer = 1 == this.frames.h[this.itemData[0]].h.useItem ? Type.createInstance(BlockData.getItemRenderer(this.itemData[0]), [this.entity, 0, 0]).fromItem(this.itemData) : null;
            b = a = this.entity.nearestConsecutiveEmpty(this.frames.h[this.itemData[0]].h.baseQuads);
            for (a += this.frames.h[this.itemData[0]].h.baseQuads; b < a;) this.quadPositions.push(b++);
            this.update();
            b = 0;
            for (a = this.quadPositions; b < a.length;) this.entity.updateQuad(a[b++], null, null, null, new lemongine.Point());
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = -1;
        }
        return this;
    },
    destroy: function () {
        null != this.itemRenderer && this.itemRenderer.destroy();
        renderers.Q_Base.prototype.destroy.call(this);
    },
    remove: function () {
        this.destroy();
        this.itemRenderer = null;
        this.itemData = Game.emptyItem();
    },
    __class__: renderers.armor.Q_Helmet
})