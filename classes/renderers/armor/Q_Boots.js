renderers.armor.Q_Boots = function (b) {
    this.hide1 = this.hide2 = !1;
    this.colorUV = [];
    this.parentColor = [1, 1, 1, 1];
    this.matrix2 = new lemongine.Matrix4();
    this.matrix1 = new lemongine.Matrix4();
    this.itemData = Game.emptyItem();
    var a = new haxe.ds.StringMap(),
        c = new haxe.ds.StringMap();
    c.h.baseQuads = 4;
    c.h.texture = "leather_boots";
    a.h.LeatherShoes = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.texture = "iron_boots";
    a.h.IronShoes = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.texture = "diamond_boots";
    a.h.DiamondShoes = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.texture = "gold_boots";
    a.h.GoldShoes = c;
    c = new haxe.ds.StringMap();
    c.h.baseQuads = 2;
    c.h.texture = "dragon_scale_boots";
    a.h.DragonShoes = c;
    this.frames = a;
    this.entity = b;
    renderers.Q_Base.call(this, b, 0, 0);
}
m["renderers.armor.Q_Boots"] = renderers.armor.Q_Boots
renderers.armor.Q_Boots.__name__ = "renderers.armor.Q_Boots"
renderers.armor.Q_Boots.__super__ = renderers.Q_Base
renderers.armor.Q_Boots.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (null != this.itemData && null != this.frames.h[this.itemData[0]]) {
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.translate(-.6875, -.75).multiply(this.matrix1.values);
            var b = this.entity;
            var a = 1;
            var c = this.quadPositions[0],
                d = this.destination,
                f = new lemongine.Point(this.textureClip.x, this.textureClip.y),
                l = new lemongine.Point(this.textureClip.width, this.textureClip.height),
                h = new lemongine.Point(1, 1),
                m = new haxe.ds.StringMap(),
                n = lemongine.Mathz.repeatArray([this.parentColor[0], this.parentColor[1], this.parentColor[2], this.parentColor[3] * (this.hide1 ? 0 : 1)], 6);
            m.h.color = n;
            b.updateQuad(c, d, f, l, h, null, null, m);
            null != this.textureColorClip && (b = this.entity, a = 2, c = this.quadPositions[1], d = this.destination, f = new lemongine.Point(this.textureColorClip.x, this.textureColorClip.y), l = new lemongine.Point(this.textureColorClip.width, this.textureColorClip.height), h = new lemongine.Point(1, 1), m = new haxe.ds.StringMap(), n = lemongine.Mathz.repeatArray([this.colorUV[0] * this.parentColor[0], this.colorUV[1] * this.parentColor[1], this.colorUV[2] * this.parentColor[2], this.colorUV[3] * this.parentColor[3] * (this.hide1 ? 0 : 1)], 6), m.h.color = n, b.updateQuad(c, d, f, l, h, null, null, m));
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset().translate(-.6875, -.75).multiply(this.matrix2.values);
            b = this.entity;
            c = this.quadPositions[a++];
            d = this.destination;
            f = new lemongine.Point(this.textureClip.x, this.textureClip.y);
            l = new lemongine.Point(this.textureClip.width, this.textureClip.height);
            h = new lemongine.Point(1, 1);
            m = new haxe.ds.StringMap();
            n = lemongine.Mathz.repeatArray([this.parentColor[0], this.parentColor[1], this.parentColor[2], this.parentColor[3] * (this.hide2 ? 0 : 1)], 6);
            m.h.color = n;
            b.updateQuad(c, d, f, l, h, null, null, m);
            null != this.textureColorClip && (b = this.entity, c = this.quadPositions[a++], d = this.destination, f = new lemongine.Point(this.textureColorClip.x, this.textureColorClip.y), l = new lemongine.Point(this.textureColorClip.width, this.textureColorClip.height), h = new lemongine.Point(1, 1), m = new haxe.ds.StringMap(), n = lemongine.Mathz.repeatArray([this.colorUV[0] * this.parentColor[0], this.colorUV[1] * this.parentColor[1], this.colorUV[2] * this.parentColor[2], this.colorUV[3] * this.parentColor[3] * (this.hide2 ? 0 : 1)], 6), m.h.color = n, b.updateQuad(c, d, f, l, h, null, null, m));
            js.Boot.__cast(this.entity, QuadPoolEntity_MatrixState).currentMatrix.reset();
        }
    },
    setItem: function (b, a, c, d, f, l) {
        null == l && (l = !1);
        null == f && (f = !1);
        if (null == b || null == this.frames.h[b[0]]) return this.remove(), this;
        this.matrix1 = c;
        this.matrix2 = d;
        this.hide1 = f;
        this.hide2 = l;
        if (b[0] != this.itemData[0] || !Main.Instance.game.sameExtras(b, this.itemData)) {
            this.destroy();
            this.itemData = lemongine.Helpers.clone(b);
            a = c = this.entity.nearestConsecutiveEmpty(this.frames.h[b[0]].h.baseQuads, a + 1);
            for (c += this.frames.h[b[0]].h.baseQuads; a < c;) this.quadPositions.push(a++);
            "LeatherShoes" == b[0] ? (this.textureClip = Textures.getTexture(this.frames.h[b[0]].h.texture, "base"), this.textureColorClip = Textures.getTexture(this.frames.h[b[0]].h.texture, "color"), null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, null != b && Object.prototype.hasOwnProperty.call(Colors.colors.h, b) ? Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.colorUV = lemongine.Mathz.repeatArray([Colors.colors.h[b].h.r, Colors.colors.h[b].h.g, Colors.colors.h[b].h.b, 1], 6)) : this.colorUV = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6))) : (this.textureClip = Textures.getTexture(this.frames.h[b[0]].h.texture), this.textureColorClip = null);
            this.update();
            a = 0;
            for (c = this.quadPositions; a < c.length;) this.entity.updateQuad(c[a++], null, null, null, new lemongine.Point());
        }
        return this;
    },
    destroy: function () {
        renderers.Q_Base.prototype.destroy.call(this);
    },
    remove: function () {
        this.destroy();
        this.itemData = Game.emptyItem();
    },
    __class__: renderers.armor.Q_Boots
})