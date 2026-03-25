renderers.blocks.Q_Potion = function (b, a, c) {
    this.splash = !1;
    this.colorUV = [];
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Potion"] = renderers.blocks.Q_Potion
renderers.blocks.Q_Potion.__name__ = "renderers.blocks.Q_Potion"
renderers.blocks.Q_Potion.__super__ = renderers.Q_Base
renderers.blocks.Q_Potion.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        if (0 < this.colorUV.length) {
            var b = this.quadPositions[0],
                a = new lemongine.Point(this.textureClipContents.x, this.textureClipContents.y),
                c = new lemongine.Point(this.textureClipContents.width, this.textureClipContents.height),
                d = new lemongine.Point(1, 1),
                f = new haxe.ds.StringMap();
            f.h.color = this.colorUV;
            this.entity.updateQuad(b, this.destination, a, c, d, null, null, f);
        } else this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClipContents.x, this.textureClipContents.y), new lemongine.Point(), new lemongine.Point());
        this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.splash = !1;
        if (null != b[3]) {
            var a = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type;
            b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.category;
            null != a && Object.prototype.hasOwnProperty.call(Main.Instance.game.potionData.h, a) ? this.colorUV = "empty" == a ? lemongine.Mathz.repeatArray([0, 0, 0, 0], 6) : lemongine.Mathz.repeatArray([Main.Instance.game.potionData.h[a].h.r, Main.Instance.game.potionData.h[a].h.g, Main.Instance.game.potionData.h[a].h.b, 1], 6) : this.colorUV = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
            this.splash = "splash" == b;
        }
        this.textureClip = Textures.getTexture(this.textureID, this.splash ? "splash" : "");
        this.textureClipContents = Textures.getTexture(this.textureID, (this.splash ? "splash_" : "") + "contents");
        return this;
    },
    __class__: renderers.blocks.Q_Potion
})