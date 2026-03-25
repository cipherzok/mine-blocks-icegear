blocks.Block_RailDetector = function (b, a, c, d, f) {
    this.cartHere = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_RailDetector"] = blocks.Block_RailDetector
blocks.Block_RailDetector.__name__ = "blocks.Block_RailDetector"
blocks.Block_RailDetector.__super__ = blocks.Block_Rail
blocks.Block_RailDetector.prototype = z(blocks.Block_Rail.prototype, {
    updateState: function () {
        var b = !1;
        16 == this.world.states.h[this.blockID][1][0] && (b = !0);
        this.world.states.h[this.blockID][1] = this.cartHere ? [16, 0] : [0, 0];
        if (16 == this.world.states.h[this.blockID][1][0]) this.world.hasSignal.h[this.blockID] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 1)] = [16, 0];else if (b) {
            b = this.blockID;
            var a = this.world.hasSignal;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
            b = "blockX" + (this.x + 1) + "Y" + this.y;
            a = this.world.hasSignal;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
            b = "blockX" + (this.x - 1) + "Y" + this.y;
            a = this.world.hasSignal;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
            b = "blockX" + this.x + "Y" + (this.y - 1);
            a = this.world.hasSignal;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
        }
        this.updateSignal();
        blocks.Block_Rail.prototype.updateState.call(this);
        this.cartHere = !1;
    },
    __class__: blocks.Block_RailDetector
})