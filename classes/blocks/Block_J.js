blocks.Block_J = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_J"] = blocks.Block_J
blocks.Block_J.__name__ = "blocks.Block_J"
blocks.Block_J.__super__ = blocks.Block
blocks.Block_J.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        0 == this.game.inventario.currentFrame && this.game.inventario.gotoAndStop(5);
    },
    __class__: blocks.Block_J
})