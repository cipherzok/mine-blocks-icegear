blocks.Block_Chest_Ender = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Chest_Ender"] = blocks.Block_Chest_Ender
blocks.Block_Chest_Ender.__name__ = "blocks.Block_Chest_Ender"
blocks.Block_Chest_Ender.__super__ = blocks.Block
blocks.Block_Chest_Ender.prototype = z(blocks.Block.prototype, {
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        0 == this.game.inventario.currentFrame && (this.game.inventario.chest = "ender", this.game.inventario.craftCoords = [this.x, this.y], this.game.inventario.gotoAndStop(4));
    },
    init: function () {
        blocks.Block.prototype.init.call(this);
        if (null == this.world.enderChests.h[this.world.player.id]) {
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
            this.world.enderChests.h[this.world.player.id] = b;
        }
    },
    __class__: blocks.Block_Chest_Ender
})