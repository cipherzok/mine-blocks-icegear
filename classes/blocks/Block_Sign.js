blocks.Block_Sign = function (b, a, c, d, f) {
    this.overSign = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Sign"] = blocks.Block_Sign
blocks.Block_Sign.__name__ = "blocks.Block_Sign"
blocks.Block_Sign.__super__ = blocks.Block
blocks.Block_Sign.prototype = z(blocks.Block.prototype, {
    init: function () {
        blocks.Block.prototype.init.call(this);
        this.worldChunk.registerBlockEventFrame(this);
    },
    mouseOverEvent: function () {
        blocks.Block.prototype.mouseOverEvent.call(this);
        this.overSign = !0;
        null == this.world.signs.h[this.blockID] && (this.world.signs.h[this.blockID] = "");
    },
    mouseOutEvent: function () {
        blocks.Block.prototype.mouseOutEvent.call(this);
        this.overSign = !1;
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        this.game.inventario.sign = this.blockID;
        this.game.inventario.gotoAndStop(6);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        this.overSign && 0 == this.game.inventario.currentFrame && this.game.showSign(this.world.signs.h[this.blockID]);
    },
    __class__: blocks.Block_Sign
})