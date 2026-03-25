renderers.blocks.Q_Cactus = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Cactus"] = renderers.blocks.Q_Cactus
renderers.blocks.Q_Cactus.__name__ = "renderers.blocks.Q_Cactus"
renderers.blocks.Q_Cactus.__super__ = renderers.Q_Base
renderers.blocks.Q_Cactus.prototype = z(renderers.Q_Base.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        var a = "";
        "ct" != Main.Instance.game.world.getFG(b.x, b.y + 1) && (a = "top");
        this.textureClip = Textures.getTexture(this.textureID, a);
        return this;
    },
    __class__: renderers.blocks.Q_Cactus
})