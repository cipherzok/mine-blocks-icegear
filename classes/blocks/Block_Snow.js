blocks.Block_Snow = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Snow"] = blocks.Block_Snow
blocks.Block_Snow.__name__ = "blocks.Block_Snow"
blocks.Block_Snow.__super__ = blocks.Block
blocks.Block_Snow.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 != BlockData.get(Main.Instance.game.world.getFG(this.x, this.y - 1), "walkThroughBlock") && "lp" != Main.Instance.game.world.getFG(this.x, this.y - 1) || Main.Instance.game.requestRemove(this.x, this.y, null, null, !0);
    },
    __class__: blocks.Block_Snow
})