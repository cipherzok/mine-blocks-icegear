blocks.Block_PressurePlate = function (b, a, c, d, f) {
    this.lastFoundHit = this.foundHit = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_PressurePlate"] = blocks.Block_PressurePlate
blocks.Block_PressurePlate.__name__ = "blocks.Block_PressurePlate"
blocks.Block_PressurePlate.__super__ = blocks.Block
blocks.Block_PressurePlate.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "walkThroughBlock")) this.game.mineBlock(this.x, this.y, !0, !1);else if (1 != this.world.tick % 2) {
            this.lastFoundHit = this.foundHit;
            this.foundHit = !1;
            3 == this.world.gamemode || Math.floor(this.world.worldX - .4) != this.x && Math.floor(this.world.worldX + .4) != this.x || Math.floor(-this.world.worldY) != this.y - 1 || (this.foundHit = !0);
            if (0 == this.foundHit) for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
                var d = b[c++];
                Math.floor(this.world.mobs.h[d].h.x - .4) != this.x && Math.floor(this.world.mobs.h[d].h.x + .4) != this.x || Math.floor(-this.world.mobs.h[d].h.y) != this.y - 1 || (this.foundHit = !0);
            }
            if ("wpp" == this.blockState.type) {
                if (0 == this.foundHit) for (b = Object.keys(this.world.arrows.h), a = b.length, c = 0; c < a;) if (d = b[c++], new lemongine.Rectangle(this.x, -this.y, 1, 1).intersects(new lemongine.Rectangle(Game.makeDynamicMap(this.world.arrows.h[d]).h.x - .3333333333333333, Game.makeDynamicMap(this.world.arrows.h[d]).h.y - .3333333333333333, .6666666666666666, .6666666666666666))) {
                    this.foundHit = !0;
                    break;
                }
                if (0 == this.foundHit) for (b = Object.keys(this.world.spears.h), a = b.length, c = 0; c < a;) if (d = b[c++], new lemongine.Rectangle(this.x, -this.y, 1, 1).intersects(new lemongine.Rectangle(Game.makeDynamicMap(this.world.spears.h[d]).h.x - .3333333333333333, Game.makeDynamicMap(this.world.spears.h[d]).h.y - .3333333333333333, .6666666666666666, .6666666666666666))) {
                    this.foundHit = !0;
                    break;
                }
                if (0 == this.foundHit) for (b = Object.keys(this.world.shurikens.h), a = b.length, c = 0; c < a;) if (d = b[c++], new lemongine.Rectangle(this.x, -this.y, 1, 1).intersects(new lemongine.Rectangle(Game.makeDynamicMap(this.world.shurikens.h[d]).h.x - .3333333333333333, Game.makeDynamicMap(this.world.shurikens.h[d]).h.y - .3333333333333333, .6666666666666666, .6666666666666666))) {
                    this.foundHit = !0;
                    break;
                }
                if (0 == this.foundHit) for (b = Object.keys(this.world.drops.h), a = b.length, c = 0; c < a;) if (d = b[c++], new lemongine.Rectangle(this.x, -this.y, 1, 1).intersects(new lemongine.Rectangle(Game.makeDynamicArray(this.world.drops.h[d])[0] - .3333333333333333, Game.makeDynamicArray(this.world.drops.h[d])[1] - .3333333333333333, .6666666666666666, .6666666666666666))) {
                    this.foundHit = !0;
                    break;
                }
            }
            this.lastFoundHit != this.foundHit && (null != this.renderer && (this.blockState.states2 = this.foundHit ? 1 : 0, js.Boot.__cast(this.renderer, renderers.blocks.Q_Lever).fromBlock(this.blockState).update()), this.foundHit ? (this.game.requestSound("on", this.x - this.world.worldX, -this.y - this.world.worldY), this.world.hasSignal.h["blockX" + this.x + "Y" + this.y] = [16, 0], this.world.hasSignal.h["blockX" + this.x + "Y" + (this.y - 1)] = [16, -1], this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + this.y] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y) && (this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 1)] = [16, -1]), this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + this.y] = [16, 1], "rsd" == this.world.getFG(this.x + 1, this.y) && (this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 1)] = [16, 1]), this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 1)] = [16, -1], "rsd" == this.world.getFG(this.x - 1, this.y - 1) && (this.world.hasSignal.h["blockX" + (this.x - 1) + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x - 2) + "Y" + (this.y - 2)] = [16, -1]), this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 1)] = [16, 1], "rsd" == this.world.getFG(this.x + 1, this.y - 1) && (this.world.hasSignal.h["blockX" + (this.x + 1) + "Y" + (this.y - 2)] = [16, 0], this.world.hasSignal.h["blockX" + (this.x + 2) + "Y" + (this.y - 2)] = [16, 1])) : (this.game.requestSound("off", this.x - this.world.worldX, -this.y - this.world.worldY), b = "blockX" + this.x + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + this.x + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x - 1, this.y) && (b = "blockX" + (this.x - 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x + 1) + "Y" + this.y, a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 1, this.y) && (b = "blockX" + (this.x + 2) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x - 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x - 1, this.y - 1) && (b = "blockX" + (this.x - 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x - 2) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]), b = "blockX" + (this.x + 1) + "Y" + (this.y - 1), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], "rsd" == this.world.getFG(this.x + 1, this.y - 1) && (b = "blockX" + (this.x + 1) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b], b = "blockX" + (this.x + 2) + "Y" + (this.y - 2), a = this.world.hasSignal, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b])));
        }
    },
    __class__: blocks.Block_PressurePlate
})