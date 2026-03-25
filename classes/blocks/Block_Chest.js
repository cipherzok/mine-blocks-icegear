blocks.Block_Chest = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Chest"] = blocks.Block_Chest
blocks.Block_Chest.__name__ = "blocks.Block_Chest"
blocks.Block_Chest.__super__ = blocks.Block
blocks.Block_Chest.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        0 == this.game.inventario.currentFrame && (this.game.inventario.chest = this.blockID, this.game.inventario.craftCoords = [this.x, this.y], this.game.inventario.newName = null != this.blockState.states1 ? this.blockState.states1 : "", this.game.inventario.gotoAndStop(4));
    },
    init: function () {
        blocks.Block.prototype.init.call(this);
        if (null == this.blockState.chests) {
            var b = [];
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            b.push(Game.emptyItem());
            this.world.chests.h[this.blockID] = b;
            this.blockState.chests = b;
        }
    },
    __class__: blocks.Block_Chest
})