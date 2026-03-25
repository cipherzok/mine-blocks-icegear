blocks.Block_PistonRetracted = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_PistonRetracted"] = blocks.Block_PistonRetracted
blocks.Block_PistonRetracted.__name__ = "blocks.Block_PistonRetracted"
blocks.Block_PistonRetracted.__super__ = blocks.Block
blocks.Block_PistonRetracted.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 != this.world.tick % 2 && null != this.world.hasSignal.h[this.blockID] && 1 <= this.world.hasSignal.h[this.blockID][0] && (this.game.updateAround(this.x, this.y, !1), this.opne());
    },
    opne: function () {
        1 == this.world.states.h[this.blockID] ? this.game.pushBlock(this.x, this.y + 1, 0, 1, this.x, this.y, 12, !0) && (this.game.requestSound("Piston out", this.x - this.world.worldX, -this.y - this.world.worldY), this.game.mineBlock(this.x, this.y + 1, !0, !1), this.world.states.h["blockX" + this.x + "Y" + (this.y + 1)] = 1, this.world.setFG(this.x, this.y + 1, this.fg + "2"), this.world.setFG(this.x, this.y, this.fg + "1")) : 2 == this.world.states.h[this.blockID] ? this.game.pushBlock(this.x + 1, this.y, 1, 0, this.x, this.y, 12, !0) && (this.game.requestSound("Piston out", this.x - this.world.worldX, -this.y - this.world.worldY), this.game.mineBlock(this.x + 1, this.y, !0, !1), this.world.states.h["blockX" + (this.x + 1) + "Y" + this.y] = 2, this.world.setFG(this.x + 1, this.y, this.fg + "2"), this.world.setFG(this.x, this.y, this.fg + "1")) : 3 == this.world.states.h[this.blockID] ? this.game.pushBlock(this.x, this.y - 1, 0, -1, this.x, this.y, 12, !0) && (this.game.requestSound("Piston out", this.x - this.world.worldX, -this.y - this.world.worldY), this.game.mineBlock(this.x, this.y - 1, !0, !1), this.world.states.h["blockX" + this.x + "Y" + (this.y - 1)] = 3, this.world.setFG(this.x, this.y - 1, this.fg + "2"), this.world.setFG(this.x, this.y, this.fg + "1")) : 4 == this.world.states.h[this.blockID] && this.game.pushBlock(this.x - 1, this.y, -1, 0, this.x, this.y, 12, !0) && (this.game.requestSound("Piston out", this.x - this.world.worldX, -this.y - this.world.worldY), this.game.mineBlock(this.x - 1, this.y, !0, !1), this.world.states.h["blockX" + (this.x - 1) + "Y" + this.y] = 4, this.world.setFG(this.x - 1, this.y, this.fg + "2"), this.world.setFG(this.x, this.y, this.fg + "1"));
    },
    __class__: blocks.Block_PistonRetracted
})