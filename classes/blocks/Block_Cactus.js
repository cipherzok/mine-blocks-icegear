blocks.Block_Cactus = function (b, a, c, d, f) {
    this.firstTimes = this.lastState = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Cactus"] = blocks.Block_Cactus
blocks.Block_Cactus.__name__ = "blocks.Block_Cactus"
blocks.Block_Cactus.__super__ = blocks.Block
blocks.Block_Cactus.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.lastState = "ct" != this.world.getFG(this.x, this.y + 1);
        this.blockState.firstTimes && (this.firstTimes = !0, this.blockState.firstTimes = !1, this.world.firstTimes.h[this.blockID] = !1);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        Math.random() < 1 / (2500 * Main.Instance.get_fps() / 25) && "air" == this.world.getFG(this.x, this.y + 1) && "ct" != this.world.getFG(this.x, this.y - 2) && 1 == BlockData.get(this.world.getFG(this.x - 1, this.y + 1), "waterWalkThroughBlock") && 1 == BlockData.get(this.world.getFG(this.x + 1, this.y + 1), "waterWalkThroughBlock") && this.world.setFG(this.x, this.y + 1, "ct");
        var b = "ct" != this.world.getFG(this.x, this.y + 1);
        null != this.renderer && this.lastState != b && (this.lastState = b, js.Boot.__cast(this.renderer, renderers.blocks.Q_Cactus).fromBlock(this.blockState), this.renderer.update());
        if ("sd" != this.world.getFG(this.x, this.y - 1) && "ct" != this.world.getFG(this.x, this.y - 1) || 1 != BlockData.get(this.world.getFG(this.x - 1, this.y), "waterWalkThroughBlock") || 1 != BlockData.get(this.world.getFG(this.x + 1, this.y), "waterWalkThroughBlock")) 0 == this.firstTimes && 1 != this.world.gamemode && this.addDrop(), Main.Instance.game.requestRemove(this.x, this.y, !0, !1, !0);
        this.firstTimes = !1;
    },
    __class__: blocks.Block_Cactus
})