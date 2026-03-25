blocks.Block_Water = function (b, a, c, d, f) {
    this.thisTick = 1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Water"] = blocks.Block_Water
blocks.Block_Water.__name__ = "blocks.Block_Water"
blocks.Block_Water.__super__ = blocks.Block
blocks.Block_Water.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        Object.prototype.hasOwnProperty.call(this.world.water.h, this.blockID) || (this.world.water.h[this.blockID] = [10, 10]);
        this.thisTick = 1;
        this.inter();
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (null != this.blockState.firstTimes) {
            this.blockState.firstTimes = !1;
            var b = this.blockID,
                a = this.world.firstTimes;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
            if (this.game.isFullWater(this.x, this.y) && 1 == BlockData.get(this.world.getFG(this.x, this.y + 1), "waterWalkThroughBlock") && null != BlockData.get(this.world.getFG(this.x, this.y + 2), "waterWalkThroughBlock") && null != BlockData.get(this.world.getFG(this.x, this.y + 3), "waterWalkThroughBlock") && null != BlockData.get(this.world.getFG(this.x, this.y + 4), "waterWalkThroughBlock") && 1 == this.game.getSnowRegion(this.x)) {
                this.world.setFG(this.x, this.y, "ice");
                this.game.requestRemove(this.x, this.y, !0, !0);
                return;
            }
        }
        if (2 == this.world.sceneNum) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), this.game.requestRemove(this.x, this.y, !0, !1, !0);else if (0 == Object.prototype.hasOwnProperty.call(this.world.water.h, this.blockID) && (this.world.water.h[this.blockID] = [10, 10]), .001 > Math.random() && 10 < this.world.tick - blocks.Block_Water.lastPlayedWaterSound && !this.game.isFullWater(this.x, this.y) && (blocks.Block_Water.lastPlayedWaterSound = this.world.tick, this.game.requestSound("water" + Math.floor(6 * Math.random() + 1), this.x - this.world.worldX, -this.y - this.world.worldY, .2, 1, .9)), this.thisTick = ++this.thisTick % Math.floor(12 * Main.Instance.get_fps() / 25), 0 != this.thisTick || 0 != this.ifWater()) {
            if (this.game.isFullWater(this.x, this.y)) if ("magma" == this.world.getFG(this.x, this.y - 1) || "wr" == this.world.getFG(this.x, this.y - 1) && -1 == this.world.states.h["blockX" + this.x + "Y" + (this.y - 1)]) {
                if (this.world.states.h["blockX" + this.x + "Y" + this.y] = -1, .2 > Math.random()) {
                    b = new lemongine.Point(this.x + .25, .5);
                    a = new lemongine.Point(-this.y - .5, 1);
                    var c = new haxe.ds.StringMap();
                    c.h.bubble = "down";
                    this.game.addParticles("water", 1, 0, b, a, !0, c);
                }
            } else "ssd" == this.world.getFG(this.x, this.y - 1) || "wr" == this.world.getFG(this.x, this.y - 1) && 1 == this.world.states.h["blockX" + this.x + "Y" + (this.y - 1)] ? (this.world.states.h["blockX" + this.x + "Y" + this.y] = 1, .2 > Math.random() && (b = new lemongine.Point(this.x + .25, .5), a = new lemongine.Point(-this.y - .5, 1), c = new haxe.ds.StringMap(), c.h.bubble = "up", this.game.addParticles("water", 1, 0, b, a, !0, c))) : 1 == Object.prototype.hasOwnProperty.call(this.world.states.h, "blockX" + this.x + "Y" + this.y) && (b = "blockX" + this.x + "Y" + this.y, a = this.world.states, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
            if ("la" == this.world.getFG(this.x - 1, this.y) || "ad" == this.world.getFG(this.x - 1, this.y)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), "la" == this.world.getFG(this.x - 1, this.y) && this.game.isFullWater(this.x - 1, this.y) ? (this.game.requestRemove(this.x - 1, this.y, !0, !1), this.world.setFG(this.x - 1, this.y, "ob")) : (this.game.requestRemove(this.x - 1, this.y, !0, !1), this.world.setFG(this.x - 1, this.y, "cs"));
            if ("la" == this.world.getFG(this.x + 1, this.y) || "ad" == this.world.getFG(this.x + 1, this.y)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), "la" == this.world.getFG(this.x + 1, this.y) && this.game.isFullWater(this.x + 1, this.y) ? (this.game.requestRemove(this.x + 1, this.y, !0, !1), this.world.setFG(this.x + 1, this.y, "ob")) : (this.game.requestRemove(this.x + 1, this.y, !0, !1), this.world.setFG(this.x + 1, this.y, "cs"));
            if ("la" == this.world.getFG(this.x, this.y + 1) || "ad" == this.world.getFG(this.x, this.y + 1)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), "la" == this.world.getFG(this.x, this.y + 1) && this.game.isFullWater(this.x, this.y + 1) ? (this.game.requestRemove(this.x, this.y + 1, !0, !1), this.world.setFG(this.x, this.y + 1, "ob")) : (this.game.requestRemove(this.x, this.y + 1, !0, !1), this.world.setFG(this.x, this.y + 1, "cs"));
            if ("la" == this.world.getFG(this.x, this.y - 1) || "ad" == this.world.getFG(this.x, this.y - 1)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), "la" == this.world.getFG(this.x, this.y - 1) && this.game.isFullWater(this.x, this.y - 1) ? (this.game.requestRemove(this.x, this.y - 1, !0, !1), this.world.setFG(this.x, this.y - 1, "ob")) : (this.game.requestRemove(this.x, this.y - 1, !0, !1), this.world.setFG(this.x, this.y - 1, "cs"));
        }
    },
    ifWater: function () {
        null != this.renderer && js.Boot.__cast(this.renderer, renderers.blocks.Q_Liquid).setWater(this.world.water.h[this.blockID]);
        "wr" == this.world.getFG(this.x, this.y - 1) && Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + this.x + "Y" + (this.y - 1)) && (9 > this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)][0] || 9 > this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)][1]) && (this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)] = [9, 9]);
        if ("air" == this.world.getFG(this.x, this.y - 1) || 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "waterWalkThroughBlock")) this.game.mineBlock(this.x, this.y - 1, !0, !1), this.world.water.h["blockX" + this.x + "Y" + (this.y - 1)] = [9, 9], this.world.setFG(this.x, this.y - 1, "wr");else if (10 != this.world.water.h[this.blockID][0] || 10 != this.world.water.h[this.blockID][1]) {
            if (9 != this.world.water.h[this.blockID][0] || 9 != this.world.water.h[this.blockID][1]) {
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
            } else {
                if ("wr" != this.world.getFG(this.x, this.y + 1)) return b = this.blockID, a = this.world.water, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], this.game.requestRemove(this.x, this.y, !0, null, !0), !1;
            }
        } else ("air" == this.world.getFG(this.x - 1, this.y) || "wr" == this.world.getFG(this.x - 1, this.y) && !this.game.isFullWater(this.x - 1, this.y)) && "wr" == this.world.getFG(this.x - 2, this.y) && Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + (this.x - 2) + "Y" + this.y) && 10 == this.world.water.h["blockX" + (this.x - 2) + "Y" + this.y][0] && (this.world.water.h["blockX" + (this.x - 1) + "Y" + this.y] = [10, 10], this.world.setFG(this.x - 1, this.y, "wr")), ("air" == this.world.getFG(this.x + 1, this.y) || "wr" == this.world.getFG(this.x + 1, this.y) && !this.game.isFullWater(this.x + 1, this.y)) && "wr" == this.world.getFG(this.x + 2, this.y) && Object.prototype.hasOwnProperty.call(this.world.water.h, "blockX" + (this.x + 2) + "Y" + this.y) && 10 == this.world.water.h["blockX" + (this.x + 2) + "Y" + this.y][0] && (this.world.water.h["blockX" + (this.x + 1) + "Y" + this.y] = [10, 10], this.world.setFG(this.x + 1, this.y, "wr"));
        1 != BlockData.get(this.world.getFG(this.x, this.y - 1), "liquid") && ((1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "waterWalkThroughBlock") || "wr" == this.world.getFG(this.x - 1, this.y) && Math.min(this.game.getWater(this.x - 1, this.y)[0], 9) < Math.min(this.world.water.h[this.blockID][0], 9) - 1) && 3 <= this.world.water.h[this.blockID][0] - 1 && this.world.water.h[this.blockID][0] <= this.world.water.h[this.blockID][1] && (this.game.mineBlock(this.x - 1, this.y, !0, !1), this.world.water.h["blockX" + (this.x - 1) + "Y" + this.y] = [Math.floor(Math.min(this.world.water.h[this.blockID][0], 9) - 1), Math.floor(Math.min(this.world.water.h[this.blockID][0], 9))], this.world.setFG(this.x - 1, this.y, "wr")), (1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "waterWalkThroughBlock") || "wr" == this.world.getFG(this.x + 1, this.y) && Math.min(this.game.getWater(this.x + 1, this.y)[1], 9) < Math.min(this.world.water.h[this.blockID][1], 9) - 1) && 3 <= this.world.water.h[this.blockID][1] - 1 && this.world.water.h[this.blockID][0] >= this.world.water.h[this.blockID][1] && (this.game.mineBlock(this.x + 1, this.y, !0, !1), this.world.water.h["blockX" + (this.x + 1) + "Y" + this.y] = [Math.floor(Math.min(this.world.water.h[this.blockID][1], 9)), Math.floor(Math.min(this.world.water.h[this.blockID][1], 9) - 1)], this.world.setFG(this.x + 1, this.y, "wr")));
        return !0;
    },
    inter: function () {
        this.thisTick = 1;
    },
    __class__: blocks.Block_Water
})
blocks.Block_Water.lastPlayedWaterSound = 0