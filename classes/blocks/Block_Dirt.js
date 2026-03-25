blocks.Block_Dirt = function (b, a, c, d, f) {
    this.lastGoto = 2;
    this.now = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Dirt"] = blocks.Block_Dirt
blocks.Block_Dirt.__name__ = "blocks.Block_Dirt"
blocks.Block_Dirt.__super__ = blocks.Block
blocks.Block_Dirt.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        null == Main.Instance.game.world.states.h[this.blockID] ? this.now = !0 : this.lastGoto = Main.Instance.game.world.states.h[this.blockID];
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (1 == (1E3 * Math.random() * (Main.Instance.get_fps() / 25) | 0) || this.now) {
            this.now = !1;
            var b = this.ifAbove(this.blockState.x, this.blockState.y) ? 1 : 2;
            null != this.renderer && b != this.lastGoto && (Main.Instance.game.world.states.h[this.blockID] = this.blockState.states1 = this.lastGoto = b, this.renderer.fromBlock(this.blockState), this.renderer.update());
        }
    },
    updateRenderer: function () {
        this.blockState.states1 = Main.Instance.game.world.states.h[this.blockID];
        null != this.renderer && (this.renderer.fromBlock(this.blockState), this.renderer.update());
    },
    ifAbove: function (b, a) {
        return this.sunCanShineThrough(b, a + 1) && this.sunCanShineThrough(b, a + 2) && this.sunCanShineThrough(b, a + 3) && this.sunCanShineThrough(b, a + 4) && this.sunCanShineThrough(b, a + 5) ? !0 : !1;
    },
    sunCanShineThrough: function (b, a) {
        b = Main.Instance.game.world.getFG(b, a);
        return 1 == BlockData.get(b, "walkThroughBlockHit") || "b" == b ? !0 : !1;
    },
    __class__: blocks.Block_Dirt
})