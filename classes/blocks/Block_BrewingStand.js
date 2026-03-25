blocks.Block_BrewingStand = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_BrewingStand"] = blocks.Block_BrewingStand
blocks.Block_BrewingStand.__name__ = "blocks.Block_BrewingStand"
blocks.Block_BrewingStand.__super__ = blocks.Block
blocks.Block_BrewingStand.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        0 == this.game.inventario.currentFrame && (this.game.inventario.brewer = this.blockID, this.game.inventario.craftCoords = [this.x, this.y], this.game.inventario.newName = null != this.blockState.states1 ? this.blockState.states1 : "", this.game.inventario.gotoAndStop(12));
    },
    init: function () {
        blocks.Block.prototype.init.call(this);
        if (null == this.blockState.toBrew) {
            var b = new haxe.ds.StringMap();
            b.h.input = Game.emptyItem();
            b.h.fuel = Game.emptyItem();
            b.h.brewTimer = 0;
            b.h.fuelUsed = 0;
            b.h.output = Game.makeDynamicArray([Game.emptyItem(), Game.emptyItem(), Game.emptyItem()]);
            b = Game.makeDynamicMap(b);
            this.world.toBrew.h[this.blockID] = b;
            this.blockState.toBrew = b;
        }
    },
    updateEvent: function () {
        null != this.renderer && (this.blockState.states1 = this.world.states.h[this.blockID], this.renderer.fromBlock(this.blockState), this.renderer.update());
    },
    __class__: blocks.Block_BrewingStand
})