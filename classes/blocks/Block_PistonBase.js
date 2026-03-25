blocks.Block_PistonBase = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_PistonBase"] = blocks.Block_PistonBase
blocks.Block_PistonBase.__name__ = "blocks.Block_PistonBase"
blocks.Block_PistonBase.__super__ = blocks.Block
blocks.Block_PistonBase.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.fgNoNumber = HxOverrides.substr(this.fg, 0, this.fg.length - 1);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 == this.world.tick % 2 || null != this.world.hasSignal.h[this.blockID] && 1 <= this.world.hasSignal.h[this.blockID][0] || (this.game.updateAround(this.x, this.y, !1), this.cloes());
    },
    cloes: function () {
        this.game.requestSound("Piston in", this.x - this.world.worldX, -this.y - this.world.worldY);
        1 == this.world.states.h[this.blockID] ? (this.world.setFG(this.x, this.y, this.fgNoNumber), this.game.requestRemove(this.x, this.y + 1, !1, !1, !0), "spiston1" == this.fg && this.game.pushBlock(this.x, this.y + 2, 0, -1, this.x, this.y, 12)) : 2 == this.world.states.h[this.blockID] ? (this.world.setFG(this.x, this.y, this.fgNoNumber), this.game.requestRemove(this.x + 1, this.y, !1, !1, !0), "spiston1" == this.fg && this.game.pushBlock(this.x + 2, this.y, -1, 0, this.x, this.y, 12)) : 3 == this.world.states.h[this.blockID] ? (this.world.setFG(this.x, this.y, this.fgNoNumber), this.game.requestRemove(this.x, this.y - 1, !1, !1, !0), "spiston1" == this.fg && this.game.pushBlock(this.x, this.y - 2, 0, 1, this.x, this.y, 12)) : 4 == this.world.states.h[this.blockID] && (this.world.setFG(this.x, this.y, this.fgNoNumber), this.game.requestRemove(this.x - 1, this.y, !1, !1, !0), "spiston1" == this.fg && this.game.pushBlock(this.x - 2, this.y, 1, 0, this.x, this.y, 12));
    },
    __class__: blocks.Block_PistonBase
})