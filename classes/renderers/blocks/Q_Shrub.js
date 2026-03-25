renderers.blocks.Q_Shrub = function (b, a, c) {
    renderers.blocks.Q_Foliage.call(this, b, a, c);
}
m["renderers.blocks.Q_Shrub"] = renderers.blocks.Q_Shrub
renderers.blocks.Q_Shrub.__name__ = "renderers.blocks.Q_Shrub"
renderers.blocks.Q_Shrub.__super__ = renderers.blocks.Q_Foliage
renderers.blocks.Q_Shrub.prototype = z(renderers.blocks.Q_Foliage.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "";
        "sd" == Main.Instance.game.world.getFG(b.x, b.y - 1) && (a = "desert");
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    __class__: renderers.blocks.Q_Shrub
})