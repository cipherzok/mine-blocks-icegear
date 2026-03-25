blocks.Block_EnchantmentTable = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_EnchantmentTable"] = blocks.Block_EnchantmentTable
blocks.Block_EnchantmentTable.__name__ = "blocks.Block_EnchantmentTable"
blocks.Block_EnchantmentTable.__super__ = blocks.Block
blocks.Block_EnchantmentTable.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        for (var b = 0, a = -3; 4 > a;) for (var c = a++, d = 0; 4 > d;) {
            var f = d++;
            "books" != this.world.getFG(c + this.x, f + this.y) && "bdbooks" != this.world.getFG(c + this.x, f + this.y) || ++b;
        }
        this.game.inventario.totalBooks = b;
        this.game.inventario.newName = null != this.world.states.h[this.blockID] ? this.world.states.h[this.blockID] : "";
        this.game.inventario.craftCoords = [this.x, this.y];
        this.game.inventario.gotoAndStop(8);
    },
    __class__: blocks.Block_EnchantmentTable
})