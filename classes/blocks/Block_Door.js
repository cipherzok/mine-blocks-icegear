blocks.Block_Door = function (b, a, c, d, f) {
    this.hasSignal = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Door"] = blocks.Block_Door
blocks.Block_Door.__name__ = "blocks.Block_Door"
blocks.Block_Door.__super__ = blocks.Block
blocks.Block_Door.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        0 != this.world.getSignal(this.x, this.y) || 0 != this.world.getSignal(this.x, this.y - 1) ? this.hasSignal = !0 : this.hasSignal = !1;
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if ("1" == HxOverrides.substr(this.fg, -1, 1) || "3" == HxOverrides.substr(this.fg, -1, 1)) 0 != this.world.getSignal(this.x, this.y) || 0 != this.world.getSignal(this.x, this.y - 1) ? 0 == this.hasSignal && (this.game.unlockAchieve(32), this.toggle()) : 1 == this.hasSignal && (this.game.unlockAchieve(32), this.toggle());
    },
    toggle: function () {
        var b = HxOverrides.substr(this.fg, 0, this.fg.length - 1);
        "1" == HxOverrides.substr(this.fg, -1, 1) ? (this.game.requestSound("doorclose", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.setFG(this.x, this.y, b + "3"), this.world.setFG(this.x, this.y + 1, b + "4")) : "2" == HxOverrides.substr(this.fg, -1, 1) ? (this.game.requestSound("doorclose", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.setFG(this.x, this.y - 1, b + "3"), this.world.setFG(this.x, this.y, b + "4")) : "3" == HxOverrides.substr(this.fg, -1, 1) ? (this.game.requestSound("dooropen", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.setFG(this.x, this.y, b + "1"), this.world.setFG(this.x, this.y + 1, b + "2")) : "4" == HxOverrides.substr(this.fg, -1, 1) && (this.game.requestSound("dooropen", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.setFG(this.x, this.y - 1, b + "1"), this.world.setFG(this.x, this.y, b + "2"));
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        "i" != HxOverrides.substr(this.fg, 0, 1) && this.toggle();
    },
    __class__: blocks.Block_Door
})