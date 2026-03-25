blocks.Block_TorchRedstone = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_TorchRedstone"] = blocks.Block_TorchRedstone
blocks.Block_TorchRedstone.__name__ = "blocks.Block_TorchRedstone"
blocks.Block_TorchRedstone.__super__ = blocks.Block
blocks.Block_TorchRedstone.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 != this.world.tick % 2 && this.updateSignal();
    },
    updateSignal: function () {
        var b = !1;
        if (2 == this.world.states.h[this.blockID]) {
            if (0 != this.world.getSignal(this.x - 1, this.y)) b = !0;else {
                this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 1];
                if ("rsd" == this.world.getFG(this.x + 1, this.y)) this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)] = [16, 1];else if (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + (this.y - 1))) {
                    var a = "blockX" + (this.x + 1) + "Y" + (this.y - 1),
                        c = this.world.hasSignal;
                    Object.prototype.hasOwnProperty.call(c.h, a) && delete c.h[a];
                }
                1 != BlockData.get(this.world.getFG(this.x, this.y + 1), "walkThroughBlock") && (this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 1)] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y + 1)] = [16, -1], this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y + 1)] = [16, 1]);
            }
            if (1 == BlockData.get(this.world.getFG(this.x - 1, this.y), "walkThroughBlock")) {
                this.game.mineBlock(this.x, this.y, !0, !1);
                return;
            }
        } else if (3 == this.world.states.h[this.blockID]) {
            if (0 != this.world.getSignal(this.x + 1, this.y) ? b = !0 : (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y) ? this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)] = [16, -1] : Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x - 1) + "Y" + (this.y - 1)) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)][0] = 0), 1 != BlockData.get(this.world.getFG(this.x, this.y + 1), "walkThroughBlock") && (this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 1)] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y + 1)] = [16, -1], this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y + 1)] = [16, 1])), 1 == BlockData.get(this.world.getFG(this.x + 1, this.y), "walkThroughBlock")) {
                this.game.mineBlock(this.x, this.y, !0, !1);
                return;
            }
        } else if (0 != this.world.getSignal(this.x, this.y - 1) ? b = !0 : (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 1], "rsd" == this.world.getFG(this.x + 1, this.y) ? this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)] = [16, 1] : Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + (this.y - 1)) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)][0] = 0), this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y) ? this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)] = [16, 1] : Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x - 1) + "Y" + (this.y - 1)) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)][0] = 0), 1 != BlockData.get(this.world.getFG(this.x, this.y + 1), "walkThroughBlock") && (this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 1)] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y + 1)] = [16, 1], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y + 1)] = [16, -1])), 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "walkThroughBlock")) {
            this.game.mineBlock(this.x, this.y, !0, !1);
            return;
        }
        b && this.abortSignalz();
        null != this.renderer && (b = js.Boot.__cast(this.renderer, renderers.blocks.Q_TorchRedstone).powered, this.blockState.hasSignal = this.world.hasSignal.h[this.blockID], this.renderer.fromBlock(this.blockState), b != js.Boot.__cast(this.renderer, renderers.blocks.Q_TorchRedstone).powered && this.renderer.update(), js.Boot.__cast(this.renderer, renderers.blocks.Q_TorchRedstone).powered ? this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5) : this.game.lighting.removeLight(this.blockID));
    },
    abortSignalz: function () {
        if (2 == this.world.states.h[this.blockID]) {
            if (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + (this.y - 1)) && 16 == this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)][0] && "rsd" == this.world.getFG(this.x + 1, this.y)) {
                var b = "blockX" + (this.x + 1) + "Y" + (this.y - 1),
                    a = this.world.hasSignal;
                Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
            }
            Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + this.y) && 16 == this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y][0] && (b = "blockX" + (this.x + 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
        } else 3 != this.world.states.h[this.blockID] && (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + (this.y - 1)) && 16 == this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)][0] && "rsd" == this.world.getFG(this.x + 1, this.y) && (b = "blockX" + (this.x + 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + this.y) && 16 == this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y][0] && (b = "blockX" + (this.x + 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b])), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x - 1) + "Y" + (this.y - 1)) && 16 == this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)][0] && "rsd" == this.world.getFG(this.x + 1, this.y) && (b = "blockX" + (this.x - 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x - 1) + "Y" + this.y) && 16 == this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y][0] && (b = "blockX" + (this.x - 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
        1 != BlockData.get(this.world.getFG(this.x, this.y + 1), "walkThroughBlock") && (Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + this.x + "Y" + (this.y + 1)) && 16 == this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 1)][0] && (b = "blockX" + this.x + "Y" + (this.y + 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + this.x + "Y" + (this.y + 2)) && 16 == this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y + 2)][0] && (b = "blockX" + this.x + "Y" + (this.y + 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x - 1) + "Y" + (this.y + 1)) && 16 == this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y + 1)][0] && (b = "blockX" + (this.x - 1) + "Y" + (this.y + 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), Object.prototype.hasOwnProperty.call(this.world.hasSignal.h, "blockX" + (this.x + 1) + "Y" + (this.y + 1)) && 16 == this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y + 1)][0] && (b = "blockX" + (this.x + 1) + "Y" + (this.y + 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]));
    },
    __class__: blocks.Block_TorchRedstone
})