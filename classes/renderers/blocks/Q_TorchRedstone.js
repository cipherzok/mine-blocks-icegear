renderers.blocks.Q_TorchRedstone = function (b, a, c) {
    this.powered = !0;
    renderers.blocks.Q_Torch.call(this, b, a, c);
}
m["renderers.blocks.Q_TorchRedstone"] = renderers.blocks.Q_TorchRedstone
renderers.blocks.Q_TorchRedstone.__name__ = "renderers.blocks.Q_TorchRedstone"
renderers.blocks.Q_TorchRedstone.__super__ = renderers.blocks.Q_Torch
renderers.blocks.Q_TorchRedstone.prototype = z(renderers.blocks.Q_Torch.prototype, {
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 1;
        null != b.states1 && (this.state = b.states1);
        this.powered = !0;
        2 == this.state ? 0 != Main.Instance.game.world.getSignal(b.x - 1, b.y) && (this.powered = !1) : 3 == this.state ? 0 != Main.Instance.game.world.getSignal(b.x + 1, b.y) && (this.powered = !1) : 0 != Main.Instance.game.world.getSignal(b.x, b.y - 1) && (this.powered = !1);
        this.textureClip = Textures.getTexture(this.textureID, (2 == this.state || 3 == this.state ? "wall_" : "floor_") + (this.powered ? "on" : "off"));
        return this;
    },
    __class__: renderers.blocks.Q_TorchRedstone
})