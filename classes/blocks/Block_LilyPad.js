blocks.Block_LilyPad = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_LilyPad"] = blocks.Block_LilyPad
blocks.Block_LilyPad.__name__ = "blocks.Block_LilyPad"
blocks.Block_LilyPad.__super__ = blocks.Block
blocks.Block_LilyPad.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        "wr" == this.world.getFG(this.x, this.y - 1) && null != this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)] && 10 == this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)][0] && 10 == this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)][1] || Main.Instance.game.requestRemove(this.x, this.y, !0, null, !0);
    },
    __class__: blocks.Block_LilyPad
})