blocks.Block_Torch = function (b, a, c, d, f) {
    this.firstRun = !0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Torch"] = blocks.Block_Torch
blocks.Block_Torch.__name__ = "blocks.Block_Torch"
blocks.Block_Torch.__super__ = blocks.Block
blocks.Block_Torch.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.game.lighting.addLight(this.blockID, LightType.TORCH, this.blockState.x + .5, this.blockState.y + .5);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        Math.random() < 1 / (50 * Main.Instance.get_fps() / 25) && this.game.addParticles("smoke", 1, 0, new lemongine.Point(this.x + .5, 0), new lemongine.Point(-(this.y + .5) - .16666666666666666, 0));
        "th" != this.blockState.type || Object.prototype.hasOwnProperty.call(this.game.particles.h, "particle," + this.x + "," + this.y) || this.game.addParticles("torchtip", 1, 0, new lemongine.Point(this.x + .5, 0), new lemongine.Point(-(this.y + .5) - .06666666666666667, 0));
        this.firstRun = !1;
        2 == this.blockState.states1 ? 1 != BlockData.get(this.world.getFG(this.x - 1, this.y), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.x - 1, this.y), "liquid") && "air" != this.world.getFG(this.x - 1, this.y) || this.game.mineBlock(this.x, this.y, !0, !1) : 3 == this.blockState.states1 ? 1 != BlockData.get(this.world.getFG(this.x + 1, this.y), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.x + 1, this.y), "liquid") && "air" != this.world.getFG(this.x + 1, this.y) || this.game.mineBlock(this.x, this.y, !0, !1) : 1 != BlockData.get(this.world.getFG(this.x, this.y - 1), "walkThroughBlock") && 1 != BlockData.get(this.world.getFG(this.x, this.y - 1), "liquid") && "air" != this.world.getFG(this.x, this.y - 1) || this.game.mineBlock(this.x, this.y, !0, !1);
    },
    __class__: blocks.Block_Torch
})