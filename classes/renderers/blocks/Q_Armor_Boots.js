renderers.blocks.Q_Armor_Boots = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Armor_Boots"] = renderers.blocks.Q_Armor_Boots
renderers.blocks.Q_Armor_Boots.__name__ = "renderers.blocks.Q_Armor_Boots"
renderers.blocks.Q_Armor_Boots.__super__ = renderers.Q_Base
renderers.blocks.Q_Armor_Boots.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x - .5 + .125, this.destination.y - .0625), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(.75, .75));
        var b = this.textureClip.x + this.textureClip.width;
        this.entity.updateQuad(this.quadPositions[1], new lemongine.Vector3(this.destination.x + .5 + .125, this.destination.y - .0625), new lemongine.Point(b, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(.75, .75));
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Armor_Boots
})