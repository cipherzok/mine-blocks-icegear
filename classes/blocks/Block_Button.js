blocks.Block_Button = function (b, a, c, d, f) {
    this.lastTimerState = !0;
    this.timer = 0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Button"] = blocks.Block_Button
blocks.Block_Button.__name__ = "blocks.Block_Button"
blocks.Block_Button.__super__ = blocks.Block
blocks.Block_Button.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        null != this.world.states.h[this.blockID + "_2"] && (this.timer = this.world.states.h[this.blockID + "_2"]);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 != this.world.tick % 2 && this.updateSignal();
    },
    updateSignal: function () {
        0 < this.timer ? (this.timer--, 0 == this.lastTimerState && null != this.renderer && (this.blockState.states2 = this.timer, js.Boot.__cast(this.renderer, renderers.blocks.Q_Lever).fromBlock(this.blockState).update()), this.lastTimerState = !0) : (1 == this.lastTimerState && null != this.renderer && (this.blockState.states2 = this.timer, js.Boot.__cast(this.renderer, renderers.blocks.Q_Lever).fromBlock(this.blockState).update()), this.lastTimerState = !1);
        this.world.states.h[this.blockID + "_2"] = this.timer;
        if (2 == this.world.states.h[this.blockID]) {
            if (1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "walkThroughBlock")) {
                this.game.mineBlock(this.x, this.y, !0, !1);
                return;
            }
        } else if (3 == this.world.states.h[this.blockID]) {
            if (1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "walkThroughBlock")) {
                this.game.mineBlock(this.x, this.y, !0, !1);
                return;
            }
        } else if (this.world.states.h[this.blockID] = 1, 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "walkThroughBlock")) {
            this.game.mineBlock(this.x, this.y, !0, !1);
            return;
        }
        if (0 == this.timer) {
            this.timer = -1;
            if (2 == this.world.states.h[this.blockID]) {
                var b = "blockX" + this.x + "Y" + this.y,
                    a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                b = "blockX" + (this.x - 1) + "Y" + this.y;
                a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                "rsd" == this.world.getFG(this.x - 1, this.y + 1) && (b = "blockX" + (this.x - 1) + "Y" + (this.y + 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
                b = "blockX" + (this.x - 2) + "Y" + this.y;
                a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                "rsd" == this.world.getFG(this.x - 2, this.y) && (b = "blockX" + (this.x - 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 3) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
                b = "blockX" + (this.x + 1) + "Y" + this.y;
                a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                "rsd" == this.world.getFG(this.x + 1, this.y) && (b = "blockX" + (this.x + 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x + 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
                b = "blockX" + this.x + "Y" + (this.y - 1);
                a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                "rsd" == this.world.getFG(this.x, this.y - 1) && (b = "blockX" + this.x + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x + 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
                b = "blockX" + (this.x - 1) + "Y" + (this.y - 1);
                a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                "rsd" == this.world.getFG(this.x - 1, this.y - 1) && (b = "blockX" + (this.x - 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 2) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
            } else 3 == this.world.states.h[this.blockID] ? (b = "blockX" + (this.x + 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + this.x + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 1, this.y + 1) && (b = "blockX" + (this.x + 1) + "Y" + (this.y + 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x - 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x - 1, this.y) && (b = "blockX" + (this.x - 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x + 2) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 2, this.y) && (b = "blockX" + (this.x + 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x + 3) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x + 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 1, this.y - 1) && (b = "blockX" + (this.x + 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x + 2) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + this.x + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x, this.y - 1) && (b = "blockX" + this.x + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b])) : (b = "blockX" + this.x + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + this.x + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x - 1, this.y) && (b = "blockX" + (this.x - 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x + 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 1, this.y) && (b = "blockX" + (this.x + 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x - 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x - 1, this.y - 1) && (b = "blockX" + (this.x - 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 2) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x + 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 1, this.y - 1) && (b = "blockX" + (this.x + 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x + 2) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]));
            this.game.requestSound("off", this.x - this.world.worldX, -this.y - this.world.worldY);
        }
    },
    useEvent: function () {
        this.timer = 10;
        2 == this.world.states.h[this.blockID] ? (this.world.hasSignal.h["blockX" + this.x + "Y" + this.y] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, 0], "rsd" == this.world.getFG(this.x - 1, this.y + 1) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y + 1)] = [16, 0]), this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + this.y] = [16, -1], "rsd" == this.world.getFG(this.x - 2, this.y) && (this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 1)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 3) + "Y" + (this.y - 1)] = [16, -1]), this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 1], "rsd" == this.world.getFG(this.x + 1, this.y) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 1)] = [16, 1]), this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 1)] = [16, 0], "rsd" == this.world.getFG(this.x, this.y - 1) && (this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 2)] = [16, 1]), this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)] = [16, 0], "rsd" == this.world.getFG(this.x - 1, this.y - 1) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 2)] = [16, -1])) : 3 == this.world.states.h[this.blockID] ? (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + this.y] = [16, 0], "rsd" == this.world.getFG(this.x + 1, this.y + 1) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y + 1)] = [16, 0]), this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 1)] = [16, -1]), this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + this.y] = [16, 1], "rsd" == this.world.getFG(this.x + 2, this.y) && (this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 1)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 3) + "Y" + (this.y - 1)] = [16, 1]), this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)] = [16, 0], "rsd" == this.world.getFG(this.x + 1, this.y - 1) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 2)] = [16, 1]), this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 1)] = [16, 0], "rsd" == this.world.getFG(this.x, this.y - 1) && (this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 2)] = [16, -1])) : (this.world.hasSignal.h["blockX" + this.x + "Y" + this.y] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 1)] = [16, -1], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y) && (this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 1)] = [16, -1]), this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 1], "rsd" == this.world.getFG(this.x + 1, this.y) && (this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 1)] = [16, 1]), this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y - 1) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 2)] = [16, -1]), this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)] = [16, 1], "rsd" == this.world.getFG(this.x + 1, this.y - 1) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 2)] = [16, 1]));
        this.game.requestSound("on", this.x - this.world.worldX, -this.y - this.world.worldY);
    },
    __class__: blocks.Block_Button
})