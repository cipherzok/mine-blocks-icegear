renderers.blocks.Q_Crop = function (b, a, c) {
    this.facesRight = .5 > Math.random();
    renderers.blocks.Q_Foliage.call(this, b, a, c);
}
m["renderers.blocks.Q_Crop"] = renderers.blocks.Q_Crop
renderers.blocks.Q_Crop.__name__ = "renderers.blocks.Q_Crop"
renderers.blocks.Q_Crop.__super__ = renderers.blocks.Q_Foliage
renderers.blocks.Q_Crop.prototype = z(renderers.blocks.Q_Foliage.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        this.facesRight ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x + this.textureClip.width, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "crop_0";
        null != b.wheat && (a = "crop_" + Std.string(Math.floor((b.wheat - 1) * BlockData.get(b.type, "maxGrowState") / 7)));
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "crop_0");
        return this;
    },
    __class__: renderers.blocks.Q_Crop
})