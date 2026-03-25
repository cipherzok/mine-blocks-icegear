renderers.blocks.Q_CanPlaceSideways = function (b, a, c) {
    this.horizontal = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_CanPlaceSideways"] = renderers.blocks.Q_CanPlaceSideways
renderers.blocks.Q_CanPlaceSideways.__name__ = "renderers.blocks.Q_CanPlaceSideways"
renderers.blocks.Q_CanPlaceSideways.__super__ = renderers.Q_Base
renderers.blocks.Q_CanPlaceSideways.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        this.horizontal ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        null != b.states1 && "2" == b.states1.toString() && (this.horizontal = !0);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_CanPlaceSideways
})