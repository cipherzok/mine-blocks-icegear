blocks.Block_Bamboo = function (b, a, c, d, f) {
    this.firstTimes = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Bamboo"] = blocks.Block_Bamboo
blocks.Block_Bamboo.__name__ = "blocks.Block_Bamboo"
blocks.Block_Bamboo.__super__ = blocks.Block
blocks.Block_Bamboo.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    get_maxGrowth: function () {
        return 10;
    },
    updateEvent: function () {
        var b = js.Boot.__cast(js.Boot.__cast(BlockData.get(this.blockState.type, "placeOn"), Array)[0], haxe.ds.StringMap),
            a = this.game.world.getFG(this.x, this.y - 1);
        1 != Object.prototype.hasOwnProperty.call(b.h, a) && (this.game.world.getFG(this.x, this.y + 1) == this.blockState.type && null != this.game.world.getBlock(this.x, this.y + 1) && js.Boot.__cast(this.game.world.getBlock(this.x, this.y + 1), blocks.Block_Bamboo).updateEvent(), this.firstTimes || 1 != this.game.world.gamemode && this.addDrop(), this.game.requestRemove(this.x, this.y, !0, !1, !0));
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        1 == (1500 * Math.random() * (Main.Instance.get_fps() / 25) | 0) && "air" == this.game.world.getFG(this.x, this.y + 1) && this.game.world.getFG(this.x, this.y - (this.get_maxGrowth() - 1)) != this.blockState.type && (this.game.world.setFG(this.x, this.y + 1, this.blockState.type), this.game.makeBlock(this.x, this.y + 1));
        1 == this.blockState.firstTimes ? (this.blockState.firstTimes = !1, this.firstTimes = !0) : this.firstTimes = !1;
        this.updateEvent();
    },
    __class__: blocks.Block_Bamboo
})