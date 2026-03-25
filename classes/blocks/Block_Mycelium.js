blocks.Block_Mycelium = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Mycelium"] = blocks.Block_Mycelium
blocks.Block_Mycelium.__name__ = "blocks.Block_Mycelium"
blocks.Block_Mycelium.__super__ = blocks.Block
blocks.Block_Mycelium.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (Math.random() < 1 / (50 * Main.Instance.get_fps() / 25) && 1 < GlobalSave.particles) {
            var b = new lemongine.Point(this.x, 0),
                a = new lemongine.Point(this.y, 0),
                c = new haxe.ds.StringMap();
            c.h.mycelium = !0;
            this.game.addParticles("mining", 1, 0, b, a, !1, c);
        }
        Math.random() < 1 / (1E4 * Main.Instance.get_fps() / 25) && "air" == this.world.getFG(this.x, this.y + 1) && (this.world.setFG(this.x, this.y + 1, "ms" + (.5 > Math.random() ? 1 : 2)), this.game.makeBlock(this.x, this.y + 1));
    },
    __class__: blocks.Block_Mycelium
})