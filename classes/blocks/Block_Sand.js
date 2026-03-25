blocks.Block_Sand = function (b, a, c, d, f) {
    this.thisTick = 14;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Sand"] = blocks.Block_Sand
blocks.Block_Sand.__name__ = "blocks.Block_Sand"
blocks.Block_Sand.__super__ = blocks.Block
blocks.Block_Sand.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.inter();
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        0 >= this.thisTick ? this.ifFall() : this.thisTick--;
    },
    ifFall: function () {
        if ("la" == this.world.getFG(this.x, this.y - 1) || "ad" == this.world.getFG(this.x, this.y - 1)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter(), this.game.requestRemove(this.x, this.y, !0, !1, !0);else if ("air" == this.world.getFG(this.x, this.y - 1) || 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "replaceable")) this.world.fallingBlockNum++, this.world.fallingBlocks.h[Std.string(this.world.fallingBlockNum)] = Game.makeDynamicArray([this.world.fallingBlockNum, this.fg, this.x + .5, -this.y - .5, 0, 5, 10, !1]), null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter(), this.game.requestRemove(this.x, this.y, !0, null, !0);
    },
    inter: function () {
        this.thisTick = 2;
    },
    __class__: blocks.Block_Sand
})