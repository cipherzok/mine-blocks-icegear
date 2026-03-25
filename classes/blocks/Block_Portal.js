blocks.Block_Portal = function (b, a, c, d, f) {
    this.startedOutHitting = !1;
    this.giveItASecond = 10;
    this.q = 0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Portal"] = blocks.Block_Portal
blocks.Block_Portal.__name__ = "blocks.Block_Portal"
blocks.Block_Portal.__super__ = blocks.Block
blocks.Block_Portal.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 < GlobalSave.particles && 0 == (G.toFloat(Main.Instance.tick) % G.toFloat(2) | 0) && Main.Instance.game.addParticles("portal", 1, 0, new lemongine.Point(this.x + .5, 0), new lemongine.Point(-this.y - .5, 0));
        Math.random() < 1 / (2E3 * Main.Instance.get_fps() / 25) && (this.mostRecentSound = this.game.requestSound("Portal" + (5 * Math.random() + 1 | 0), this.x - this.world.worldX, -this.y - this.world.worldY));
        null != this.mostRecentSound && (this.mostRecentSound.set_volume(this.game.getVolumeToPlayer(this.x - this.world.worldX, -this.y - this.world.worldY)), this.mostRecentSound.set_pan(this.game.getPanToPlayer(this.x - this.world.worldX)));
        0 < this.giveItASecond ? (this.giveItASecond--, Math.floor(this.world.worldX - .5) != this.x && Math.floor(this.world.worldX + .5) != this.x || Math.floor(-this.world.worldY + .1) != this.y && Math.floor(-this.world.worldY + .1) + 1 != this.y || (this.startedOutHitting = !0)) : Math.floor(this.world.worldX - .5) != this.x && Math.floor(this.world.worldX + .5) != this.x || Math.floor(-this.world.worldY + .1) != this.y && Math.floor(-this.world.worldY + .1) + 1 != this.y ? (this.startedOutHitting = !1, this.q = 0) : 1 != this.startedOutHitting && (this.q++, 100 <= this.q && Main.Instance.game.usePortalNether());
    },
    __class__: blocks.Block_Portal
})