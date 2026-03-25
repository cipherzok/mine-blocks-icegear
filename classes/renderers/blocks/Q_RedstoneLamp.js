renderers.blocks.Q_RedstoneLamp = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_RedstoneLamp"] = renderers.blocks.Q_RedstoneLamp
renderers.blocks.Q_RedstoneLamp.__name__ = "renderers.blocks.Q_RedstoneLamp"
renderers.blocks.Q_RedstoneLamp.__super__ = renderers.Q_Base
renderers.blocks.Q_RedstoneLamp.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = !1;
        null != b.hasSignal && 0 != b.hasSignal[0] && (a = !0);
        this.textureClip = Textures.getTexture(this.textureID, a ? "on" : "off");
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "off");
        return this;
    },
    __class__: renderers.blocks.Q_RedstoneLamp
})