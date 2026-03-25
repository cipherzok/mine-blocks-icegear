renderers.blocks.Q_ArmorLeather = function (b, a, c) {
    this.colorUV = [];
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_ArmorLeather"] = renderers.blocks.Q_ArmorLeather
renderers.blocks.Q_ArmorLeather.__name__ = "renderers.blocks.Q_ArmorLeather"
renderers.blocks.Q_ArmorLeather.__super__ = renderers.Q_Base
renderers.blocks.Q_ArmorLeather.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        if (0 < this.colorUV.length) {
            var b = this.quadPositions[1],
                a = new lemongine.Point(this.textureClipColor.x, this.textureClipColor.y),
                c = new lemongine.Point(this.textureClipColor.width, this.textureClipColor.height),
                d = new lemongine.Point(1, 1),
                f = new haxe.ds.StringMap();
            f.h.color = this.colorUV;
            this.entity.updateQuad(b, this.destination, a, c, d, null, null, f);
        } else this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClipColor.x, this.textureClipColor.y), new lemongine.Point(), new lemongine.Point());
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, null != b && Object.prototype.hasOwnProperty.call(Colors.colors.h, b) ? Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.colorUV = lemongine.Mathz.repeatArray([Colors.colors.h[b].h.r, Colors.colors.h[b].h.g, Colors.colors.h[b].h.b, 1], 6)) : this.colorUV = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6));
        this.textureClip = Textures.getTexture(this.textureID, "base");
        this.textureClipColor = Textures.getTexture(this.textureID, "color");
        return this;
    },
    __class__: renderers.blocks.Q_ArmorLeather
})