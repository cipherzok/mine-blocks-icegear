renderers.blocks.Q_Rope = function (b, a, c) {
    renderers.blocks.Q_Torch.call(this, b, a, c);
}
m["renderers.blocks.Q_Rope"] = renderers.blocks.Q_Rope
renderers.blocks.Q_Rope.__name__ = "renderers.blocks.Q_Rope"
renderers.blocks.Q_Rope.__super__ = renderers.blocks.Q_Torch
renderers.blocks.Q_Rope.prototype = z(renderers.blocks.Q_Torch.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        1 == BlockData.get(Main.Instance.game.world.getFG(b.x, b.y + 1), "walkThroughBlock") && "rp" != Main.Instance.game.world.getFG(b.x, b.y + 1) ? 1 == BlockData.get(Main.Instance.game.world.getFG(b.x + 1, b.y), "walkThroughBlock") ? this.state = 3 : this.state = 2 : this.state = 1;
        this.textureClip = Textures.getTexture(this.textureID, 2 == this.state || 3 == this.state ? "wall" : "straight");
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.state = 1;
        this.textureClip = Textures.getTexture(this.textureID, "straight");
        return this;
    },
    __class__: renderers.blocks.Q_Rope
})