blocks.Block_Seaweed = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Seaweed"] = blocks.Block_Seaweed
blocks.Block_Seaweed.__name__ = "blocks.Block_Seaweed"
blocks.Block_Seaweed.__super__ = blocks.Block
blocks.Block_Seaweed.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        var b = 1 == this.blockState.firstTimes;
        if (this.blockState.firstTimes) {
            var a = this.blockID,
                c = this.world.firstTimes;
            Object.prototype.hasOwnProperty.call(c.h, a) && delete c.h[a];
            this.blockState.firstTimes = !1;
        }
        1 == (Math.random() * (2500 * Main.Instance.get_fps() / 25) | 0) && "wr" == this.world.getFG(this.x, this.y + 1) && null != this.world.water.h["blockX" + this.x + "Y" + (this.y + 1)] && 10 == this.world.water.h["blockX" + this.x + "Y" + (this.y + 1)][0] && 10 == this.world.water.h["blockX" + this.x + "Y" + (this.y + 1)][1] && "sw" != this.world.getFG(this.x, this.y - 6) && (this.world.setFG(this.x, this.y + 1, "sw"), Main.Instance.game.requestRemove(this.x, this.y + 1, !1, !0));
        if ("sd" != this.world.getFG(this.x, this.y - 1) && "dt" != this.world.getFG(this.x, this.y - 1) && "sw" != this.world.getFG(this.x, this.y - 1) || 1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "waterWalkThroughBlock") || 1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "waterWalkThroughBlock")) 0 == b ? 1 != Main.Instance.game.world.gamemode && this.addDrop() : this.world.firstTimes.h["blockX" + this.x + "Y" + (this.y + 1)] = !0, this.world.setFG(this.x, this.y, "wr"), Main.Instance.game.requestRemove(this.x, this.y, !0, !0, !1);
    },
    __class__: blocks.Block_Seaweed
})