blocks.Block_Bed = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Bed"] = blocks.Block_Bed
blocks.Block_Bed.__name__ = "blocks.Block_Bed"
blocks.Block_Bed.__super__ = blocks.Block
blocks.Block_Bed.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        this.game.useBed(this.x, this.y);
    },
    __class__: blocks.Block_Bed
})