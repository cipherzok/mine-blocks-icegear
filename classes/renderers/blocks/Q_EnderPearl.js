renderers.blocks.Q_EnderPearl = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_EnderPearl"] = renderers.blocks.Q_EnderPearl
renderers.blocks.Q_EnderPearl.__name__ = "renderers.blocks.Q_EnderPearl"
renderers.blocks.Q_EnderPearl.__super__ = renderers.Q_Base
renderers.blocks.Q_EnderPearl.prototype = z(renderers.Q_Base.prototype, {
    fromItem: function (b) {
        null != b[3] && "teleporter" == Std.string(Game.makeDynamicMap(b[3]).h.nameChange).toLowerCase() ? this.textureID = "teleporter" : this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_EnderPearl
})