blocks.Block_NoteBlock = function (b, a, c, d, f) {
    this.hasSignal = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_NoteBlock"] = blocks.Block_NoteBlock
blocks.Block_NoteBlock.__name__ = "blocks.Block_NoteBlock"
blocks.Block_NoteBlock.__super__ = blocks.Block
blocks.Block_NoteBlock.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID) || (this.world.states.h[this.blockID] = 1);
        0 != this.world.getSignal(this.x, this.y) ? this.hasSignal = !0 : this.hasSignal = !1;
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        0 != this.world.getSignal(this.x, this.y) ? 0 == this.hasSignal && (this.hasSignal = !0, this.useEvent2(!1)) : this.hasSignal = !1;
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        this.useEvent2(!0);
    },
    punchEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        this.mining || this.useEvent2(!1);
    },
    useEvent2: function (b) {
        null == b && (b = !1);
        b && (b = this.blockID, this.world.states.h[b] += 1, 25 < this.world.states.h[this.blockID] && (this.world.states.h[this.blockID] = 1));
        1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "isStone") ? this.game.requestSound("kick", this.x - this.world.worldX, -this.y - this.world.worldY) : 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "isWood") ? this.game.requestSound("bass" + Std.string(this.world.states.h[this.blockID]), this.x - this.world.worldX, -this.y - this.world.worldY) : 1 == BlockData.get(this.world.getFG(this.x, this.y - 1), "isMush") ? this.game.requestSound("snare", this.x - this.world.worldX, -this.y - this.world.worldY) : this.game.requestSound("piano" + Std.string(this.world.states.h[this.blockID]), this.x - this.world.worldX, -this.y - this.world.worldY);
    },
    __class__: blocks.Block_NoteBlock
})