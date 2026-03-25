blocks.Block_Crop_Netherwart = function (b, a, c, d, f) {
    this.lastWheat = 0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Crop_Netherwart"] = blocks.Block_Crop_Netherwart
blocks.Block_Crop_Netherwart.__name__ = "blocks.Block_Crop_Netherwart"
blocks.Block_Crop_Netherwart.__super__ = blocks.Block
blocks.Block_Crop_Netherwart.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.lastWheat = this.blockState.wheat;
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        null == this.blockState.wheat && (this.blockState.wheat = 1, this.world.wheat.h[this.blockID] = 1);
        null != this.renderer && this.lastWheat != this.world.wheat.h[this.blockID] && (this.blockState.wheat = this.world.wheat.h[this.blockID], this.lastWheat = this.world.wheat.h[this.blockID], this.renderer.fromBlock(this.blockState).update());
        "ssd" != this.world.getFG(this.x, this.y - 1) && Main.Instance.game.mineBlock(this.x, this.y, !0, !1);
    },
    __class__: blocks.Block_Crop_Netherwart
})