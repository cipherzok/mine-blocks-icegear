renderers.blocks.Q_Armor_Leggings = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Armor_Leggings"] = renderers.blocks.Q_Armor_Leggings
renderers.blocks.Q_Armor_Leggings.__name__ = "renderers.blocks.Q_Armor_Leggings"
renderers.blocks.Q_Armor_Leggings.__super__ = renderers.Q_Base
renderers.blocks.Q_Armor_Leggings.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Armor_Leggings
})