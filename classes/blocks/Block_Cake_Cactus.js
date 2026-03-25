blocks.Block_Cake_Cactus = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Cake_Cactus"] = blocks.Block_Cake_Cactus
blocks.Block_Cake_Cactus.__name__ = "blocks.Block_Cake_Cactus"
blocks.Block_Cake_Cactus.__super__ = blocks.Block_Cake
blocks.Block_Cake_Cactus.prototype = z(blocks.Block_Cake.prototype, {
    eat: function () {
        this.world.food = Math.min(1E3, this.world.food + 200) | 0;
        this.game.ouch(1, 2, "cactus");
        this.game.addEffect("regeneration", null, 4, 1);
    },
    __class__: blocks.Block_Cake_Cactus
})