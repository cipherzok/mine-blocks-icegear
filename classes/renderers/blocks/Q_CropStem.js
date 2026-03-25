renderers.blocks.Q_CropStem = function (b, a, c) {
    renderers.blocks.Q_Crop.call(this, b, a, c);
}
m["renderers.blocks.Q_CropStem"] = renderers.blocks.Q_CropStem
renderers.blocks.Q_CropStem.__name__ = "renderers.blocks.Q_CropStem"
renderers.blocks.Q_CropStem.__super__ = renderers.blocks.Q_Crop
renderers.blocks.Q_CropStem.prototype = z(renderers.blocks.Q_Crop.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "crop_0";
        null != b.wheat && (a = "crop_" + Std.string(Math.floor((b.wheat - 1) * BlockData.get(b.type, "maxGrowState") / 7)), null != b.states1 && (-1 == b.states1 ? (this.facesRight = !1, 7 == b.wheat && Main.Instance.game.world.getFG(b.x - 1, b.y) == BlockData.get(b.type, "associatedCropBlock") && (a = "crop_attached")) : 1 == b.states1 && (this.facesRight = !0, 7 == b.wheat && Main.Instance.game.world.getFG(b.x + 1, b.y) == BlockData.get(b.type, "associatedCropBlock") && (a = "crop_attached"))));
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "crop_0");
        return this;
    },
    __class__: renderers.blocks.Q_CropStem
})