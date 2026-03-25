blocks.Block_TNT = function (b, a, c, d, f) {
    this.setPlayingTNT = -1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_TNT"] = blocks.Block_TNT
blocks.Block_TNT.__name__ = "blocks.Block_TNT"
blocks.Block_TNT.__super__ = blocks.Block
blocks.Block_TNT.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        0 < this.world.getSignal(this.x, this.y) && this.explode();
    },
    explode: function () {
        -1 != this.setPlayingTNT && (this.world.playingTNT.h["fallingBlock" + ++this.world.fallingBlockNum] = this.setPlayingTNT);
        this.game.igniteTNT(this.x, this.y);
    },
    __class__: blocks.Block_TNT
})