blocks.Block_Sugarcane = function (b, a, c, d, f) {
    blocks.Block_Bamboo.call(this, b, a, c, d, f);
}
m["blocks.Block_Sugarcane"] = blocks.Block_Sugarcane
blocks.Block_Sugarcane.__name__ = "blocks.Block_Sugarcane"
blocks.Block_Sugarcane.__super__ = blocks.Block_Bamboo
blocks.Block_Sugarcane.prototype = z(blocks.Block_Bamboo.prototype, {
    get_maxGrowth: function () {
        return 4;
    },
    __class__: blocks.Block_Sugarcane
})