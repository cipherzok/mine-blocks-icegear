renderers.blocks.Q_Slab = function (b, a, c) {
    this.isItem = !1;
    this.state = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Slab"] = renderers.blocks.Q_Slab
renderers.blocks.Q_Slab.__name__ = "renderers.blocks.Q_Slab"
renderers.blocks.Q_Slab.__super__ = renderers.Q_Base
renderers.blocks.Q_Slab.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        var b = this.textureClip.x,
            a = this.textureClip.y + (1 == this.state ? .5 : 0) * this.textureClip.height,
            c = this.textureClip.width,
            d = this.textureClip.height / 2;
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y + (1 == this.state ? .5 : 0) + (this.isItem ? -.25 : 0)), new lemongine.Point(b, a), new lemongine.Point(c, d), new lemongine.Point(1, .5));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 2;
        if (null == b.states1 || 1 == b.states1) this.state = 1;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.isItem = !0;
        return renderers.Q_Base.prototype.fromItem.call(this, b);
    },
    __class__: renderers.blocks.Q_Slab
})