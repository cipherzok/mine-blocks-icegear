blocks.Block_Pumpkin = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Pumpkin"] = blocks.Block_Pumpkin
blocks.Block_Pumpkin.__name__ = "blocks.Block_Pumpkin"
blocks.Block_Pumpkin.__super__ = blocks.Block
blocks.Block_Pumpkin.prototype = z(blocks.Block.prototype, {
    init: function () {
        if ("snowblock" == this.world.getFG(this.x, this.y - 1) && "snowblock" == this.world.getFG(this.x, this.y - 2)) entities.Entity_Mob.spawnMob("snowgolem", this.x + .5, -this.y + 1.5), this.game.requestRemove(this.x, this.y - 2, !1, !1, !0), this.game.requestRemove(this.x, this.y - 1, !1, !1, !0), this.game.requestRemove(this.x, this.y, !1, !1, !0);else if (null == this.blockState.states1) {
            var b = .1 > Math.random() ? 2 : 1;
            this.world.states.h[this.blockID] = b;
            this.blockState.states1 = b;
        }
    },
    useEvent: function () {
        if ("Shear" == this.world.get_selectedInventoryItemType()) {
            var b = this.world.states.h[this.blockID] % 11 + 1;
            this.world.states.h[this.blockID] = b;
            this.blockState.states1 = b;
            null != this.renderer && this.renderer.fromBlock(this.blockState).update();
        }
    },
    __class__: blocks.Block_Pumpkin
})