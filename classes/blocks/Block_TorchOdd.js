blocks.Block_TorchOdd = function (b, a, c, d, f) {
    this.firstRun = !0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_TorchOdd"] = blocks.Block_TorchOdd
blocks.Block_TorchOdd.__name__ = "blocks.Block_TorchOdd"
blocks.Block_TorchOdd.__super__ = blocks.Block
blocks.Block_TorchOdd.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.game.lighting.addLight(this.blockID, LightType.DARK, this.blockState.x + .5, this.blockState.y + .5);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        this.firstRun = !1;
        2 == this.blockState.states1 ? 1 != BlockData.get(this.world.getFG(this.x - 1, this.y), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.x - 1, this.y), "liquid") && "air" != this.world.getFG(this.x - 1, this.y) || this.game.mineBlock(this.x, this.y, !0, !1) : 3 == this.blockState.states1 ? 1 != BlockData.get(this.world.getFG(this.x + 1, this.y), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.x + 1, this.y), "liquid") && "air" != this.world.getFG(this.x + 1, this.y) || this.game.mineBlock(this.x, this.y, !0, !1) : 1 != BlockData.get(this.world.getFG(this.x, this.y - 1), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.x, this.y - 1), "liquid") && "air" != this.world.getFG(this.x, this.y - 1) || this.game.mineBlock(this.x, this.y, !0, !1);
    },
    __class__: blocks.Block_TorchOdd
})