blocks.Block_FrostedIce = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_FrostedIce"] = blocks.Block_FrostedIce
blocks.Block_FrostedIce.__name__ = "blocks.Block_FrostedIce"
blocks.Block_FrostedIce.__super__ = blocks.Block
blocks.Block_FrostedIce.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID) || (this.world.states.h[this.blockID] = 0);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (1 == this.world.tick % (20 * Main.Instance.get_fps() / 25) && !this.game.ifDark(this.x, this.y)) {
            var b = "fice" == this.world.getFG(this.x - 1, this.y + 1) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x - 1, this.y) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x - 1, this.y - 1) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x, this.y + 1) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x, this.y - 1) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x + 1, this.y + 1) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x + 1, this.y) ? 1 : 0;
            b += "fice" == this.world.getFG(this.x + 1, this.y - 1) ? 1 : 0;
            if (2 > b || .3333333333333333 > Math.random()) b = this.blockID, this.world.states.h[b] += 1, null != this.renderer && js.Boot.__cast(this.renderer, renderers.blocks.Q_FrostedIce).state != this.world.states.h[this.blockID] && (js.Boot.__cast(this.renderer, renderers.blocks.Q_FrostedIce).state = this.world.states.h[this.blockID], js.Boot.__cast(this.renderer, renderers.blocks.Q_FrostedIce).update());
        }
        if (4 < this.world.states.h[this.blockID]) {
            b = this.blockID;
            var a = this.world.states;
            Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
            this.world.water.h["blockX" + this.x + "Y" + this.y] = [10, 10];
            this.world.setFG(this.x, this.y, "wr");
            this.reload();
        }
    },
    __class__: blocks.Block_FrostedIce
})