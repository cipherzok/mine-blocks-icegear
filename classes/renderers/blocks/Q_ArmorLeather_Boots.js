renderers.blocks.Q_ArmorLeather_Boots = function (b, a, c) {
    this.colorUV = [];
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_ArmorLeather_Boots"] = renderers.blocks.Q_ArmorLeather_Boots
renderers.blocks.Q_ArmorLeather_Boots.__name__ = "renderers.blocks.Q_ArmorLeather_Boots"
renderers.blocks.Q_ArmorLeather_Boots.__super__ = renderers.Q_Base
renderers.blocks.Q_ArmorLeather_Boots.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(4)), this.quadPositions.push(this.quadPositions[0] + 1), this.quadPositions.push(this.quadPositions[0] + 2), this.quadPositions.push(this.quadPositions[0] + 3));
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x - .5 + .125, this.destination.y - .0625), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(.75, .75));
        var b = this.textureClip.x + this.textureClip.width;
        this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x + .5 + .125, this.destination.y - .0625), new lemongine.Point(b, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(.75, .75));
        if (0 < this.colorUV.length) {
            b = this.entity;
            var a = this.quadPositions[2],
                c = new lemongine.Vector3(this.destination.x - .5 + .125, this.destination.y - .0625),
                d = new lemongine.Point(this.textureClipColor.x, this.textureClipColor.y),
                f = new lemongine.Point(this.textureClipColor.width, this.textureClipColor.height),
                l = new lemongine.Point(.75, .75),
                h = new haxe.ds.StringMap();
            h.h.color = this.colorUV;
            b.updateQuad(a, c, d, f, l, null, null, h);
            b = this.entity;
            a = this.quadPositions[3];
            c = new lemongine.Vector3(this.destination.x + .5 + .125, this.destination.y - .0625);
            d = new lemongine.Point(this.textureClipColor.x + this.textureClip.width, this.textureClipColor.y);
            f = new lemongine.Point(-this.textureClipColor.width, this.textureClipColor.height);
            l = new lemongine.Point(.75, .75);
            h = new haxe.ds.StringMap();
            h.h.color = this.colorUV;
            b.updateQuad(a, c, d, f, l, null, null, h);
        } else this.entity.updateQuad(this.quadPositions[2], new lemongine.Vector3(this.destination.x - .5 + .125, this.destination.y - .0625), new lemongine.Point(this.textureClipColor.x, this.textureClipColor.y), new lemongine.Point(), new lemongine.Point()), b = this.textureClipColor.x + this.textureClip.width, this.entity.updateQuad(this.quadPositions[3], new lemongine.Vector3(this.destination.x + .5 + .125, this.destination.y - .0625), new lemongine.Point(b, this.textureClipColor.y), new lemongine.Point(), new lemongine.Point());
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, null != b && Object.prototype.hasOwnProperty.call(Colors.colors.h, b) ? Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.colorUV = lemongine.Mathz.repeatArray([Colors.colors.h[b].h.r, Colors.colors.h[b].h.g, Colors.colors.h[b].h.b, 1], 6)) : this.colorUV = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6));
        this.textureClip = Textures.getTexture(this.textureID, "base");
        this.textureClipColor = Textures.getTexture(this.textureID, "color");
        return this;
    },
    __class__: renderers.blocks.Q_ArmorLeather_Boots
})