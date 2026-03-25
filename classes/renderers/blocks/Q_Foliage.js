renderers.blocks.Q_Foliage = function (b, a, c) {
    this.isItem = this.flip = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Foliage"] = renderers.blocks.Q_Foliage
renderers.blocks.Q_Foliage.__name__ = "renderers.blocks.Q_Foliage"
renderers.blocks.Q_Foliage.__super__ = renderers.Q_Base
renderers.blocks.Q_Foliage.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1)), this.flip = .5 > Math.random());
        this.isItem || !this.flip ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromItem: function (b) {
        this.isItem = !0;
        return renderers.Q_Base.prototype.fromItem.call(this, b);
    },
    __class__: renderers.blocks.Q_Foliage
})