renderers.blocks.Q_Anvil = function (b, a, c) {
    this.variation = "0";
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Anvil"] = renderers.blocks.Q_Anvil
renderers.blocks.Q_Anvil.__name__ = "renderers.blocks.Q_Anvil"
renderers.blocks.Q_Anvil.__super__ = renderers.Q_Base
renderers.blocks.Q_Anvil.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.variation = null == b.states1 ? "0" : Std.string(Math.min(2, b.states1 - 1));
        this.textureClip = Textures.getTexture(this.textureID, this.variation);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.damage, this.variation = null == b ? "0" : Std.string(Math.min(2, b - 1)));
        this.textureClip = Textures.getTexture(this.textureID, this.variation);
        return this;
    },
    __class__: renderers.blocks.Q_Anvil
})