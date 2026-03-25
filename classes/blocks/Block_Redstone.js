blocks.Block_Redstone = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Redstone"] = blocks.Block_Redstone
blocks.Block_Redstone.__name__ = "blocks.Block_Redstone"
blocks.Block_Redstone.__super__ = blocks.Block
blocks.Block_Redstone.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "walkThroughBlock") ? this.game.mineBlock(this.x, this.y, !0, !1) : 1 != this.world.tick % 2 && this.updateSignal();
    },
    updateSignal: function () {
        if (null == this.world.hasSignal.h[this.blockID] || "Array" != lemongine.Helpers.getQualifiedClassName(this.world.hasSignal.h[this.blockID])) this.world.hasSignal.h[this.blockID] = [0, 0];
        -1 != this.world.hasSignal.h[this.blockID][1] && (1 != BlockData.get(this.world.getFG(this.x + 1, this.y), "walkThroughBlock") ? (this.changeRedstone(1, 0, 1), this.changeRedstone(1, 1, 1)) : 1 != BlockData.get(this.world.getFG(this.x + 1, this.y - 1), "walkThroughBlock") ? (this.changeRedstone(1, 0, 1), "rsd" == this.world.getFG(this.x + 1, this.y) ? this.changeRedstone(1, -1, 1) : Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + (this.y - 1)) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)][0] = 0)) : "air" != this.world.getFG(this.x + 1, this.y - 1) && (this.changeRedstone(1, -1, 1), "rsd" == this.world.getFG(this.x + 1, this.y - 1) && this.changeRedstone(1, -2, 1)));
        if (null == this.world.hasSignal.h[this.blockID] || "Array" != lemongine.Helpers.getQualifiedClassName(this.world.hasSignal.h[this.blockID])) this.world.hasSignal.h[this.blockID] = [0, 0];
        1 != this.world.hasSignal.h[this.blockID][1] && (1 != BlockData.get(this.world.getFG(this.x - 1, this.y), "walkThroughBlock") ? (this.changeRedstone(-1, 0, -1), this.changeRedstone(-1, 1, -1)) : 1 != BlockData.get(this.world.getFG(this.x - 1, this.y - 1), "walkThroughBlock") ? (this.changeRedstone(-1, 0, -1), "rsd" == this.world.getFG(this.x - 1, this.y) ? this.changeRedstone(-1, -1, -1) : Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x - 1) + "Y" + (this.y - 1)) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)][0] = 0)) : "air" != this.world.getFG(this.x - 1, this.y - 1) && (this.changeRedstone(-1, -1, -1), "rsd" == this.world.getFG(this.x - 1, this.y - 1) && this.changeRedstone(-1, -2, -1)));
        null != this.renderer && (this.blockState.hasSignal = this.world.hasSignal.h[this.blockID], this.renderer.fromBlock(this.blockState).update());
    },
    changeRedstone: function (b, a, c) {
        if (null == this.world.hasSignal.h[this.blockID] || "Array" != lemongine.Helpers.getQualifiedClassName(this.world.hasSignal.h[this.blockID])) this.world.hasSignal.h[this.blockID] = [0, 0];
        Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + b) + "Y" + (this.y + a)) && this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)][0] == Math.max(0, this.world.hasSignal.h[this.blockID][0] - 1) || ((Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + b) + "Y" + (this.y + a)) && null != this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)][0] ? isNaN(this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)][0]) : 1) || this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)][0] < this.world.hasSignal.h[this.blockID][0] - 1 ? (this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)] = [Math.max(0, this.world.hasSignal.h[this.blockID][0] - 1), c], null != this.world.getBlock(this.x + b, this.y + a, !1) && this.world.getBlock(this.x + b, this.y + a).updateSignal()) : 1 == c && 1 == this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)][1] ? (this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)] = [Math.max(0, this.world.hasSignal.h[this.blockID][0] - 1), c], null != this.world.getBlock(this.x + b, this.y + a, !1) && this.world.getBlock(this.x + b, this.y + a).updateSignal()) : -1 == c && -1 == this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)][1] && (this.world.hasSignal.h["blockX" + (this.x + b) + "Y" + (this.y + a)] = [Math.max(0, this.world.hasSignal.h[this.blockID][0] - 1), c], null != this.world.getBlock(this.x + b, this.y + a, !1) && this.world.getBlock(this.x + b, this.y + a).updateSignal()));
    },
    __class__: blocks.Block_Redstone
})