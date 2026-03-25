blocks.Block_Rope = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Rope"] = blocks.Block_Rope
blocks.Block_Rope.__name__ = "blocks.Block_Rope"
blocks.Block_Rope.__super__ = blocks.Block
blocks.Block_Rope.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    updateEvent: function () {
        if (1 == BlockData.get(this.world.getFG(this.x, this.y + 1), "walkThroughBlock") && "rp" != this.world.getFG(this.x, this.y + 1) && 1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "walkThroughBlock") && 1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "walkThroughBlock")) Main.Instance.game.world.getFG(this.x, this.y - 1) == this.blockState.type && null != Main.Instance.game.world.getBlock(this.x, this.y - 1) && js.Boot.__cast(Main.Instance.game.world.getBlock(this.x, this.y - 1), blocks.Block_Rope).updateEvent(), 1 != this.world.gamemode && this.addDrop(), Main.Instance.game.requestRemove(this.x, this.y, !0, !1, !0);else if (null != this.renderer) {
            var b = js.Boot.__cast(this.renderer, renderers.blocks.Q_Rope).state;
            this.renderer.fromBlock(this.blockState);
            js.Boot.__cast(this.renderer, renderers.blocks.Q_Rope).state != b && this.renderer.update();
        }
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        this.updateEvent();
    },
    __class__: blocks.Block_Rope
})