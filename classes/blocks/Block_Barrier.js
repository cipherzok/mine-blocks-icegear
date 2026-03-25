blocks.Block_Barrier = function (b, a, c, d, f) {
    this.visible = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Barrier"] = blocks.Block_Barrier
blocks.Block_Barrier.__name__ = "blocks.Block_Barrier"
blocks.Block_Barrier.__super__ = blocks.Block
blocks.Block_Barrier.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (null != this.renderer && this.visible != ("b" == this.world.get_selectedInventoryItemType())) {
            var b = this.world.get_selectedInventoryItemType();
            js.Boot.__cast(this.renderer, renderers.blocks.Q_Barrier).visible = this.visible = "b" == b;
            this.renderer.update();
        }
    },
    __class__: blocks.Block_Barrier
})