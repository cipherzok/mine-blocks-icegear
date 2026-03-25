blocks.Block_Farmland = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Farmland"] = blocks.Block_Farmland
blocks.Block_Farmland.__name__ = "blocks.Block_Farmland"
blocks.Block_Farmland.__super__ = blocks.Block
blocks.Block_Farmland.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        for (var b = !1, a = -3; 4 > a;) for (var c = a++, d = -1; 1 > d;) "wr" == this.world.getFG(this.x + c, this.y + d++) && (b = !0);
        !b && Math.random() < 1 / (60 * Main.Instance.get_fps() / 25) && (this.world.setFG(this.x, this.y, "dt"), this.reload());
    },
    __class__: blocks.Block_Farmland
})