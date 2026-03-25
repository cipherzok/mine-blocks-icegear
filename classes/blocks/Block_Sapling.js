blocks.Block_Sapling = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Sapling"] = blocks.Block_Sapling
blocks.Block_Sapling.__name__ = "blocks.Block_Sapling"
blocks.Block_Sapling.__super__ = blocks.Block_Attached
blocks.Block_Sapling.prototype = z(blocks.Block_Attached.prototype, {
    init: function () {
        this.world.toGrow.h[this.blockID] = !0;
        blocks.Block_Attached.prototype.init.call(this);
    },
    __class__: blocks.Block_Sapling
})