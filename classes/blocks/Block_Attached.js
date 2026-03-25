blocks.Block_Attached = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Attached"] = blocks.Block_Attached
blocks.Block_Attached.__name__ = "blocks.Block_Attached"
blocks.Block_Attached.__super__ = blocks.Block
blocks.Block_Attached.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        Main.Instance.game.matchBlockDataPlaceOn(this.x, this.y, this.getBlockData("placeOn")) || Main.Instance.game.requestRemove(this.x, this.y, !0, null, !0);
    },
    __class__: blocks.Block_Attached
})