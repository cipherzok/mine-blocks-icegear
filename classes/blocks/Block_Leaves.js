blocks.Block_Leaves = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Leaves"] = blocks.Block_Leaves
blocks.Block_Leaves.__name__ = "blocks.Block_Leaves"
blocks.Block_Leaves.__super__ = blocks.Block
blocks.Block_Leaves.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (Math.random() < 1 / (500 * Main.Instance.get_fps() / 25)) {
            for (var b = !0, a = 0, c = blocks.Block_Leaves.toCheck.length; a < c;) {
                var d = a++;
                if ("wd1" == this.world.getFG(this.x + blocks.Block_Leaves.toCheck[d][0], this.y + blocks.Block_Leaves.toCheck[d][1])) {
                    b = !1;
                    break;
                }
            }
            1 == b && (null != this.getBlockData("dropDifferent") ? 1 != this.world.gamemode && this.addDrop(this.getBlockData("dropDifferent")) : .1 > Math.random() && 1 != this.world.gamemode && this.addDrop("sl"), this.game.requestRemove(this.x, this.y, !0, !1, !0));
        }
    },
    __class__: blocks.Block_Leaves
})
blocks.Block_Leaves.toCheck = [[0, -3], [1, -3], [-1, -3], [3, 1], [3, -1], [3, 0], [-3, -1], [-3, 1], [-3, 0], [1, 0], [0, 1], [1, 1], [2, 0], [2, 1], [1, 2], [0, 2], [2, 2], [-1, 0], [0, -1], [-1, -1], [-2, 0], [-2, -1], [-1, -2], [0, -2], [-2, -2], [-1, 1], [-2, 1], [-1, 2], [-2, 2], [1, -1], [1, -2], [2, -1], [2, -2]]