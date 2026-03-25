blocks.Block_Fence = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Fence"] = blocks.Block_Fence
blocks.Block_Fence.__name__ = "blocks.Block_Fence"
blocks.Block_Fence.__super__ = blocks.Block
blocks.Block_Fence.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    updateEvent: function () {
        null != this.renderer && (this.blockState.states1 = this.world.states.h[this.blockID], this.renderer.fromBlock(this.blockState).update());
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        this.updateEvent();
    },
    __class__: blocks.Block_Fence
})