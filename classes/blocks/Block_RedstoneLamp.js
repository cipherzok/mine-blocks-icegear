blocks.Block_RedstoneLamp = function (b, a, c, d, f) {
    this.lit = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_RedstoneLamp"] = blocks.Block_RedstoneLamp
blocks.Block_RedstoneLamp.__name__ = "blocks.Block_RedstoneLamp"
blocks.Block_RedstoneLamp.__super__ = blocks.Block
blocks.Block_RedstoneLamp.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 != this.world.tick % 2 && this.lit != (0 != this.world.getSignal(this.x, this.y)) && (this.lit = 0 != this.world.getSignal(this.x, this.y), this.blockState.hasSignal = this.world.hasSignal.h[this.blockID], null != this.renderer && this.renderer.fromBlock(this.blockState).update(), this.lit ? this.game.lighting.addLight(this.blockID, LightType.TORCH, this.blockState.x + .5, this.blockState.y + .5) : this.game.lighting.removeLight(this.blockID));
    },
    __class__: blocks.Block_RedstoneLamp
})