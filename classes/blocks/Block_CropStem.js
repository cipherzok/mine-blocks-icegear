blocks.Block_CropStem = function (b, a, c, d, f) {
    this.lastHasAssociatedBlock = !1;
    this.lastWheat = 0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_CropStem"] = blocks.Block_CropStem
blocks.Block_CropStem.__name__ = "blocks.Block_CropStem"
blocks.Block_CropStem.__super__ = blocks.Block
blocks.Block_CropStem.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.lastWheat = this.blockState.wheat;
        this.lastState = this.blockState.states1;
        this.associatedCropBlock = this.getBlockData("associatedCropBlock");
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        null == this.blockState.wheat && (this.blockState.wheat = 1, this.world.wheat.h[this.blockID] = 1);
        this.hasAssociatedBlock = !1;
        -1 == this.blockState.states1 ? 7 == this.blockState.wheat && this.world.getFG(this.x - 1, this.y) == this.associatedCropBlock && (this.hasAssociatedBlock = !0) : 1 == this.blockState.states1 && 7 == this.blockState.wheat && this.world.getFG(this.x + 1, this.y) == this.associatedCropBlock && (this.hasAssociatedBlock = !0);
        if (this.blockState.wheat != this.world.wheat.h[this.blockID] || this.blockState.states1 != this.world.states.h[this.blockID] || this.hasAssociatedBlock != this.lastHasAssociatedBlock) this.blockState.wheat = this.lastWheat = this.world.wheat.h[this.blockID], this.blockState.states1 = this.lastState = this.world.states.h[this.blockID], this.lastHasAssociatedBlock = this.hasAssociatedBlock, null != this.renderer && this.renderer.fromBlock(this.blockState).update();
        ("farm" != this.world.getFG(this.x, this.y - 1) || Main.Instance.game.ifDark(this.x, this.y) && 1 == this.world.sceneNum && 50 > this.world.tim && 0 == this.world.raining) && Main.Instance.game.mineBlock(this.x, this.y, !0, !1);
    },
    __class__: blocks.Block_CropStem
})