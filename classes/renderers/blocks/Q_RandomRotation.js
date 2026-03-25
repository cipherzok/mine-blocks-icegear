renderers.blocks.Q_RandomRotation = function (b, a, c) {
    this.rotation = 0;
    this.isItem = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_RandomRotation"] = renderers.blocks.Q_RandomRotation
renderers.blocks.Q_RandomRotation.__name__ = "renderers.blocks.Q_RandomRotation"
renderers.blocks.Q_RandomRotation.__super__ = renderers.Q_Base
renderers.blocks.Q_RandomRotation.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1)), this.rotation = Math.floor(4 * Math.random()));
        this.isItem || 0 == this.rotation ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : 1 == this.rotation ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]) : 2 == this.rotation ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0]) : 3 == this.rotation && this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]);
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.isItem = !0;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_RandomRotation
})