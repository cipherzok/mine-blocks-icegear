blocks.Block_PistonArm = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_PistonArm"] = blocks.Block_PistonArm
blocks.Block_PistonArm.__name__ = "blocks.Block_PistonArm"
blocks.Block_PistonArm.__super__ = blocks.Block
blocks.Block_PistonArm.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.fgNoNumber = HxOverrides.substr(this.fg, 0, this.fg.length - 1);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 != this.world.tick % 2 && (1 == this.blockState.states1 ? this.world.getFG(this.x, this.y - 1) != this.fgNoNumber + "1" && this.game.requestRemove(this.x, this.y, !0, !1, !0) : 2 == this.blockState.states1 ? this.world.getFG(this.x - 1, this.y) != this.fgNoNumber + "1" && this.game.requestRemove(this.x, this.y, !0, !1, !0) : 3 == this.blockState.states1 ? this.world.getFG(this.x, this.y + 1) != this.fgNoNumber + "1" && this.game.requestRemove(this.x, this.y, !0, !1, !0) : 3 == this.blockState.states1 && this.world.getFG(this.x + 1, this.y) != this.fgNoNumber + "1" && this.game.requestRemove(this.x, this.y, !0, !1, !0));
    },
    __class__: blocks.Block_PistonArm
})