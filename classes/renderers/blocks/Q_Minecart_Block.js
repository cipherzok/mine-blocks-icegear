renderers.blocks.Q_Minecart_Block = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Minecart_Block"] = renderers.blocks.Q_Minecart_Block
renderers.blocks.Q_Minecart_Block.__name__ = "renderers.blocks.Q_Minecart_Block"
renderers.blocks.Q_Minecart_Block.__super__ = renderers.Q_Base
renderers.blocks.Q_Minecart_Block.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y), new lemongine.Point(this.textureClipBlock.x, this.textureClipBlock.y), new lemongine.Point(this.textureClipBlock.width, this.textureClipBlock.height), new lemongine.Point(1, 1));
        this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x - .5, this.destination.y + .125), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(2, 1));
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID);
        this.textureClipBlock = Textures.getTexture(BlockData.get(b[0], "secondaryTextureID"));
        return this;
    },
    __class__: renderers.blocks.Q_Minecart_Block
})