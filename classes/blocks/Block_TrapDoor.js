blocks.Block_TrapDoor = function (b, a, c, d, f) {
    this.hasSignal = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_TrapDoor"] = blocks.Block_TrapDoor
blocks.Block_TrapDoor.__name__ = "blocks.Block_TrapDoor"
blocks.Block_TrapDoor.__super__ = blocks.Block
blocks.Block_TrapDoor.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        0 != this.world.getSignal(this.x, this.y) ? this.hasSignal = !0 : this.hasSignal = !1;
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        0 != this.world.getSignal(this.x, this.y) ? 0 == this.hasSignal && this.useEvent() : 1 == this.hasSignal && this.useEvent();
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        "td2" == this.fg ? (this.game.requestSound("dooropen", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.setFG(this.x, this.y, "td1")) : (this.game.requestSound("doorclose", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.setFG(this.x, this.y, "td2"));
    },
    __class__: blocks.Block_TrapDoor
})