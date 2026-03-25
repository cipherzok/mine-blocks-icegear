renderers.blocks.Q_Torch = function (b, a, c) {
    this.state = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Torch"] = renderers.blocks.Q_Torch
renderers.blocks.Q_Torch.__name__ = "renderers.blocks.Q_Torch"
renderers.blocks.Q_Torch.__super__ = renderers.Q_Base
renderers.blocks.Q_Torch.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        3 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 1;
        null != b.states1 && (this.state = b.states1);
        this.textureClip = Textures.getTexture(this.textureID, 2 == this.state || 3 == this.state ? "wall" : "floor");
        return this;
    },
    __class__: renderers.blocks.Q_Torch
})