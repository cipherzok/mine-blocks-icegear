blocks.Block_EnderDragonEgg = function (b, a, c, d, f) {
    blocks.Block_Sand.call(this, b, a, c, d, f);
}
m["blocks.Block_EnderDragonEgg"] = blocks.Block_EnderDragonEgg
blocks.Block_EnderDragonEgg.__name__ = "blocks.Block_EnderDragonEgg"
blocks.Block_EnderDragonEgg.__super__ = blocks.Block_Sand
blocks.Block_EnderDragonEgg.prototype = z(blocks.Block_Sand.prototype, {
    useEvent: function () {
        for (var b = 0; 50 > b++;) {
            var a = new lemongine.Point(20 * Math.random() - 10 | 0, 10 * Math.random() - 5 | 0);
            if ((0 != a.x || 0 != a.y) && "air" == this.world.getFG(this.x + a.x, this.y + a.y)) {
                this.world.setFG(this.x + a.x, this.y + a.y, "degg");
                null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter();
                this.game.requestRemove(this.x, this.y, !0, null, !0);
                break;
            }
        }
    },
    ifFall: function () {
        if ("la" == this.world.getFG(this.x, this.y - 1) || "ad" == this.world.getFG(this.x, this.y - 1)) this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY), null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter(), this.game.requestRemove(this.x, this.y, !0, !1, !0);else if ("air" == this.world.getFG(this.x, this.y - 1) || 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "replaceable")) this.world.fallingBlockNum++, this.world.fallingBlocks.h[Std.string(this.world.fallingBlockNum)] = Game.makeDynamicArray([this.world.fallingBlockNum, this.fg, this.x + .5, -this.y - .5, 0, 5, 10, !1, this.blockState.states1]), null != this.world.getBlock(this.x, this.y + 1) && this.world.getBlock(this.x, this.y + 1).inter(), this.game.requestRemove(this.x, this.y, !0, null, !0);
    },
    __class__: blocks.Block_EnderDragonEgg
})