renderers.armor.Q_Chestplate = function (b) {
    this.hide = !1;
    this.parentColor = [1, 1, 1, 1];
    this.matrix = new lemongine.Matrix4();
    this.itemData = Game.emptyItem();
    var a = new haxe.ds.StringMap(),
        c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.useItem = !0;
    var d = new lemongine.Matrix4().translate(-.5, -.5);
    c.h.matrix = d;
    a.h.LeatherShirt = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5);
    c.h.matrix = d;
    a.h.IronShirt = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5);
    c.h.matrix = d;
    a.h.DiamondShirt = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5);
    c.h.matrix = d;
    a.h.GoldShirt = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 1;
    c.h.useItem = !0;
    d = new lemongine.Matrix4().translate(-.5, -.5);
    c.h.matrix = d;
    a.h.DragonShirt = c;
    this.frames = a;
    this.entity = b;
    renderers.Q_Base.call(this, b, 0, 0);
}
m["renderers.armor.Q_Chestplate"] = renderers.armor.Q_Chestplate
renderers.armor.Q_Chestplate.__name__ = "renderers.armor.Q_Chestplate"
renderers.armor.Q_Chestplate.__super__ = renderers.Q_Base
renderers.armor.Q_Chestplate.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (null != this.itemData && null != this.frames.h[this.itemData[0]]) {
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.multiply(this.frames.h[this.itemData[0]].h.matrix.values).multiply(this.matrix.values);
            null != this.parentColor && (js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers.h.color = [this.parentColor[0], this.parentColor[1], this.parentColor[2], this.parentColor[3] * (this.hide ? 0 : 1)]);
            null != this.itemRenderer && this.itemRenderer.update();
            if (null != this.parentColor) {
                var b = js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).attributeMultipliers;
                Object.prototype.hasOwnProperty.call(b.h, "color") && delete b.h.color;
            }
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset();
        }
    },
    setItem: function (b, a, c, d) {
        null == d && (d = !1);
        if (null == b || null == this.frames.h[b[0]]) return this.destroy(), this.itemRenderer = null, this.itemData = Game.emptyItem(), this;
        this.matrix = c;
        this.hide = d;
        if (b[0] != this.itemData[0] || !Main.Instance.game.sameExtras(b, this.itemData)) {
            this.destroy();
            this.itemData = lemongine.Helpers.clone(b);
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).overrideEmptySearchIndex = a + 1;
            this.itemRenderer = 1 == this.frames.h[b[0]].h.useItem ? Type.createInstance(BlockData.getItemRenderer(b[0]), [this.entity, 0, 0]).fromItem(b) : null;
            a = c = this.entity.nearestConsecutiveEmpty(this.frames.h[b[0]].h.baseQuads);
            for (b = c + this.frames.h[b[0]].h.baseQuads; a < b;) this.quadPositions.push(a++);
            this.update();
            a = 0;
            for (b = this.quadPositions; a < b.length;) this.entity.updateQuad(b[a++], null, null, null, new lemongine.Point());
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
    __class__: renderers.armor.Q_Chestplate
})