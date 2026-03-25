blocks.Block_Acid = function (b, a, c, d, f) {
    this.thisTick = 1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Acid"] = blocks.Block_Acid
blocks.Block_Acid.__name__ = "blocks.Block_Acid"
blocks.Block_Acid.__super__ = blocks.Block
blocks.Block_Acid.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        Object.prototype.hasOwnProperty.call(this.world.water.h, this.blockID) || (this.world.water.h[this.blockID] = [10, 10]);
        this.thisTick = 1;
        this.inter();
        this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        0 == Object.prototype.hasOwnProperty.call(this.world.water.h, this.blockID) && (this.world.water.h[this.blockID] = [10, 10]);
        this.thisTick = ++this.thisTick % Math.floor(12 * Main.Instance.get_fps() / 25);
        0 == this.thisTick && 0 == this.ifWater() || this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5);
    },
    ifWater: function () {
        null != this.renderer && js.Boot.__cast(this.renderer, renderers.blocks.Q_Liquid).setWater(this.world.water.h[this.blockID]);
        "ad" == this.world.getFG(this.x, this.y - 1) && Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + this.x + "Y" + (this.y - 1)) && (9 > this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)][0] || 9 > this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)][1]) && (this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)] = [9, 9]);
        if ("air" == this.world.getFG(this.x, this.y - 1) || 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "waterWalkThroughBlock") || 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "acidBurn")) this.game.mineBlock(this.x, this.y - 1, !0, !1), this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)] = [9, 9], this.world.setFG(this.x, this.y - 1, "ad");else {
            if (10 != this.world.water.h[this.blockID][0] || 10 != this.world.water.h[this.blockID][1]) if (9 != this.world.water.h[this.blockID][0] || 9 != this.world.water.h[this.blockID][1]) {
                if (this.world.water.h[this.blockID][0] > this.world.water.h[this.blockID][1]) {
                    if (Math.min(Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + (this.x - 1) + "Y" + this.y) ? this.world.water.h["blockX" + (this.x - 1) + "Y" + this.y][1] : -1, 9) != Math.min(this.world.water.h[this.blockID][0], 9)) {
                        var b = this.blockID,
                            a = this.world.water;
                        Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                        this.game.requestRemove(this.x, this.y, !0, null, !0);
                        return !1;
                    }
                } else if (this.world.water.h[this.blockID][0] < this.world.water.h[this.blockID][1]) {
                    if (Math.min(Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + (this.x + 1) + "Y" + this.y) ? this.world.water.h["blockX" + (this.x + 1) + "Y" + this.y][0] : -1, 9) != Math.min(this.world.water.h[this.blockID][1], 9)) return b = this.blockID, a = this.world.water, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], this.game.requestRemove(this.x, this.y, !0, null, !0), !1;
                } else return b = this.blockID, a = this.world.water, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], this.game.requestRemove(this.x, this.y, !0, null, !0), !1;
            } else if ("ad" != this.world.getFG(this.x, this.y + 1)) return b = this.blockID, a = this.world.water, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], this.game.requestRemove(this.x, this.y, !0, null, !0), !1;
            1 != BlockData.get(this.world.getFG(this.x, this.y - 1), "liquid") && ((1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "waterWalkThroughBlock") || 1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "acidBurn") || "ad" == this.world.getFG(this.x - 1, this.y) && Math.min(this.game.getWater(this.x - 1, this.y)[0], 9) < Math.min(this.world.water.h[this.blockID][0], 9) - 1) && 5 <= this.world.water.h[this.blockID][0] - 1 && this.world.water.h[this.blockID][0] <= this.world.water.h[this.blockID][1] && (this.game.requestRemove(this.x - 1, this.y, !0, !1, !0), this.world.water.h["blockX" + (this.x - 1) + "Y" + this.y] = [Math.floor(Math.min(this.world.water.h[this.blockID][0], 9) - 1), Math.floor(Math.min(this.world.water.h[this.blockID][0], 9))], this.world.setFG(this.x - 1, this.y, "ad")), (1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "waterWalkThroughBlock") || 1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "acidBurn") || "ad" == this.world.getFG(this.x + 1, this.y) && Math.min(this.game.getWater(this.x + 1, this.y)[1], 9) < Math.min(this.world.water.h[this.blockID][1], 9) - 1) && 5 <= this.world.water.h[this.blockID][1] - 1 && this.world.water.h[this.blockID][0] >= this.world.water.h[this.blockID][1] && (this.game.requestRemove(this.x + 1, this.y, !0, !1, !0), this.world.water.h["blockX" + (this.x + 1) + "Y" + this.y] = [Math.floor(Math.min(this.world.water.h[this.blockID][1], 9)), Math.floor(Math.min(this.world.water.h[this.blockID][1], 9) - 1)], this.world.setFG(this.x + 1, this.y, "ad")));
        }
        return !0;
    },
    inter: function () {
        this.thisTick = 1;
    },
    __class__: blocks.Block_Acid
})