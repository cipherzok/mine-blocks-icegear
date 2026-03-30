blocks.Block_Cake = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Cake"] = blocks.Block_Cake
blocks.Block_Cake.__name__ = "blocks.Block_Cake"
blocks.Block_Cake.__super__ = blocks.Block
blocks.Block_Cake.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        null == this.blockState.states1 && (this.world.states.h[this.blockID] = 1, this.blockState.states1 = 1);
    },
    eat: function () {
        this.world.food = Math.min(1E3, this.world.food + 200) | 0;
        this.world.health = Math.min(icegear.maxHealth, this.world.health + 1) | 0;
    },
    useEvent: function () {
        900 >= this.world.food && (this.game.requestSound("eat" + ((4 * Math.random() | 0) + 1), 0, 0, 1, 1), this.eat(), 7 == this.blockState.states1 ? this.game.mineBlock(this.x, this.y, !1, !1) : (this.world.states.h[this.blockID] = ++this.blockState.states1, null != this.renderer && this.renderer.fromBlock(this.blockState).update()));
    },
    __class__: blocks.Block_Cake
})