renderers.blocks.Q_FishingRod = function (b, a, c) {
    this.inHand = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_FishingRod"] = renderers.blocks.Q_FishingRod
renderers.blocks.Q_FishingRod.__name__ = "renderers.blocks.Q_FishingRod"
renderers.blocks.Q_FishingRod.__super__ = renderers.Q_Base
renderers.blocks.Q_FishingRod.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0], !0);
        this.textureClip = Textures.getTexture(this.textureID, this.inHand ? "using" : "");
        return this;
    },
    __class__: renderers.blocks.Q_FishingRod
})