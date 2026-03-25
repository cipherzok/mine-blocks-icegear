renderers.blocks.Q_ArmorLeather_Pants = function (b, a, c) {
    this.colorUV = [];
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_ArmorLeather_Pants"] = renderers.blocks.Q_ArmorLeather_Pants
renderers.blocks.Q_ArmorLeather_Pants.__name__ = "renderers.blocks.Q_ArmorLeather_Pants"
renderers.blocks.Q_ArmorLeather_Pants.__super__ = renderers.Q_Base
renderers.blocks.Q_ArmorLeather_Pants.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(4)), this.quadPositions.push(this.quadPositions[0] + 1), this.quadPositions.push(this.quadPositions[0] + 2), this.quadPositions.push(this.quadPositions[0] + 3));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        if (0 < this.colorUV.length) {
            var b = this.quadPositions[2],
                a = new lemongine.Point(this.textureClipColor.x, this.textureClipColor.y),
                c = new lemongine.Point(this.textureClipColor.width, this.textureClipColor.height),
                d = new lemongine.Point(1, 1),
                f = new haxe.ds.StringMap();
            f.h.color = this.colorUV;
            this.entity.updateQuad(b, this.destination, a, c, d, null, null, f);
            b = this.quadPositions[3];
            a = new lemongine.Point(this.textureClipColor.x + this.textureClip.width, this.textureClipColor.y);
            c = new lemongine.Point(-this.textureClipColor.width, this.textureClipColor.height);
            d = new lemongine.Point(1, 1);
            f = new haxe.ds.StringMap();
            f.h.color = this.colorUV;
            this.entity.updateQuad(b, this.destination, a, c, d, null, null, f);
        } else this.entity.updateQuad(this.quadPositions[2], this.destination, new lemongine.Point(this.textureClipColor.x, this.textureClipColor.y), new lemongine.Point(), new lemongine.Point()), this.entity.updateQuad(this.quadPositions[3], this.destination, new lemongine.Point(this.textureClipColor.x + this.textureClip.width, this.textureClipColor.y), new lemongine.Point(), new lemongine.Point());
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, null != b && Object.prototype.hasOwnProperty.call(Colors.colors.h, b) ? Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.colorUV = lemongine.Mathz.repeatArray([Colors.colors.h[b].h.r, Colors.colors.h[b].h.g, Colors.colors.h[b].h.b, 1], 6)) : this.colorUV = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6));
        this.textureClip = Textures.getTexture(this.textureID, "base");
        this.textureClipColor = Textures.getTexture(this.textureID, "color");
        return this;
    },
    __class__: renderers.blocks.Q_ArmorLeather_Pants
})