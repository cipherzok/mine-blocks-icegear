blocks.Block_Glowstone = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Glowstone"] = blocks.Block_Glowstone
blocks.Block_Glowstone.__name__ = "blocks.Block_Glowstone"
blocks.Block_Glowstone.__super__ = blocks.Block
blocks.Block_Glowstone.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5);
    },
    __class__: blocks.Block_Glowstone
})