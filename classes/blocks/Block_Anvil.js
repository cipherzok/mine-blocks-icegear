blocks.Block_Anvil = function (b, a, c, d, f) {
    blocks.Block_Sand.call(this, b, a, c, d, f);
}
m["blocks.Block_Anvil"] = blocks.Block_Anvil
blocks.Block_Anvil.__name__ = "blocks.Block_Anvil"
blocks.Block_Anvil.__super__ = blocks.Block_Sand
blocks.Block_Anvil.prototype = z(blocks.Block_Sand.prototype, {
    frameEvent: function () {
        3 < this.blockState.states1 ? (11 == this.game.inventario.currentFrame && this.game.inventario.requestClose(), this.game.requestRemove(this.x, this.y, !0, null, !0)) : blocks.Block_Sand.prototype.frameEvent.call(this);
    },
    ifFall: function () {
        if ("la" == this.world.getFG(this.x, this.y - 1) || "ad" == this.world.getFG(this.x, this.y - 1)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter(), this.game.requestRemove(this.x, this.y, !0, !1, !0);else if ("air" == this.world.getFG(this.x, this.y - 1) || 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "replaceable")) this.world.fallingBlockNum++, this.world.fallingBlocks.h[Std.string(this.world.fallingBlockNum)] = Game.makeDynamicArray([this.world.fallingBlockNum, this.fg, this.x + .5, -this.y - .5, 0, 5, 10, !1, this.blockState.states1]), null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter(), this.game.requestRemove(this.x, this.y, !0, null, !0);
    },
    useEvent: function () {
        blocks.Block_Sand.prototype.useEvent.call(this);
        this.game.inventario.dispenseName = this.blockID;
        this.game.inventario.craftCoords = [this.x, this.y];
        this.game.inventario.gotoAndStop(11);
    },
    __class__: blocks.Block_Anvil
})