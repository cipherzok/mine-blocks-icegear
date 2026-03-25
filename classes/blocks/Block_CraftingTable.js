blocks.Block_CraftingTable = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_CraftingTable"] = blocks.Block_CraftingTable
blocks.Block_CraftingTable.__name__ = "blocks.Block_CraftingTable"
blocks.Block_CraftingTable.__super__ = blocks.Block
blocks.Block_CraftingTable.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        0 == this.game.inventario.currentFrame && (this.game.inventario.craftCoords = [this.x, this.y], this.game.inventario.gotoAndStop(2));
    },
    __class__: blocks.Block_CraftingTable
})