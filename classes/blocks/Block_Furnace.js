blocks.Block_Furnace = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Furnace"] = blocks.Block_Furnace
blocks.Block_Furnace.__name__ = "blocks.Block_Furnace"
blocks.Block_Furnace.__super__ = blocks.Block
blocks.Block_Furnace.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        0 == this.game.inventario.currentFrame && (this.game.inventario.smelter = this.blockID, this.game.inventario.craftCoords = [this.x, this.y], this.game.inventario.newName = null != this.blockState.states1 ? this.blockState.states1 : "", this.game.inventario.gotoAndStop(3));
    },
    init: function () {
        blocks.Block.prototype.init.call(this);
        if (null == this.blockState.toSmelt) {
            var b = new haxe.ds.StringMap();
            b.h.input = Game.emptyItem();
            b.h.fuel = Game.emptyItem();
            b.h.fuelTimer = 0;
            b.h.fuelTimerTotal = 0;
            b.h.smeltTimer = 0;
            b.h.output = Game.emptyItem();
            b = Game.makeDynamicMap(b);
            this.world.toSmelt.h[this.blockID] = b;
            this.blockState.toSmelt = b;
        }
    },
    updateEvent: function () {
        null != this.renderer && (this.blockState.states1 = this.world.states.h[this.blockID], this.renderer.fromBlock(this.blockState), this.renderer.update());
    },
    __class__: blocks.Block_Furnace
})