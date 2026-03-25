renderers.blocks.Q_Cake = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Cake"] = renderers.blocks.Q_Cake
renderers.blocks.Q_Cake.__name__ = "renderers.blocks.Q_Cake"
renderers.blocks.Q_Cake.__super__ = renderers.Q_Base
renderers.blocks.Q_Cake.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "0";
        null != b.states1 && (a = Std.string(Math.floor((b.states1 - 1) * BlockData.get(b.type, "maxState") / 7)));
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "0");
        return this;
    },
    __class__: renderers.blocks.Q_Cake
})