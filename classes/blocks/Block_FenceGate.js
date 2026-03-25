blocks.Block_FenceGate = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_FenceGate"] = blocks.Block_FenceGate
blocks.Block_FenceGate.__name__ = "blocks.Block_FenceGate"
blocks.Block_FenceGate.__super__ = blocks.Block_Fence
blocks.Block_FenceGate.prototype = z(blocks.Block_Fence.prototype, {
    init: function () {
        blocks.Block_Fence.prototype.init.call(this);
        1 != Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID) && (this.world.states.h[this.blockID] = !1);
    },
    useEvent: function () {
        this.world.states.h[this.blockID] = !this.world.states.h[this.blockID];
        this.world.states.h[this.blockID] ? this.game.requestSound("dooropen", this.x - this.world.worldX, -this.y - this.world.worldY) : this.game.requestSound("doorclose", this.x - this.world.worldX, -this.y - this.world.worldY);
    },
    __class__: blocks.Block_FenceGate
})