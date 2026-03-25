blocks.Block_RailPowered = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_RailPowered"] = blocks.Block_RailPowered
blocks.Block_RailPowered.__name__ = "blocks.Block_RailPowered"
blocks.Block_RailPowered.__super__ = blocks.Block_Rail
blocks.Block_RailPowered.prototype = z(blocks.Block_Rail.prototype, {
    updateState: function () {
        Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, this.blockID) && null != this.world.hasSignal.h[this.blockID][0] && !isNaN(this.world.hasSignal.h[this.blockID][0]) && 1 <= this.world.hasSignal.h[this.blockID][0] ? this.world.states.h[this.blockID][1] = [16, 0] : this.world.states.h[this.blockID][1] && 16 == this.world.states.h[this.blockID][1][0] && (this.world.states.h[this.blockID][1] = [0, 0]);
        this.updateSignal();
        blocks.Block_Rail.prototype.updateState.call(this);
    },
    __class__: blocks.Block_RailPowered
})