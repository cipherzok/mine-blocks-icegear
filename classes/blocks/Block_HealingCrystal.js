blocks.Block_HealingCrystal = function (b, a, c, d, f) {
    this.ticky = this.alpha = 0;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_HealingCrystal"] = blocks.Block_HealingCrystal
blocks.Block_HealingCrystal.__name__ = "blocks.Block_HealingCrystal"
blocks.Block_HealingCrystal.__super__ = blocks.Block
blocks.Block_HealingCrystal.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        this.ticky = (this.ticky + 1) % 500;
        3 != Main.Instance.game.world.gamemode && 4 > Math.sqrt(Math.pow(this.x + .5 - Main.Instance.game.world.worldX, 2) + Math.pow(this.y + .5 + Main.Instance.game.world.worldY - 1, 2)) ? (null != this.renderer && (this.alpha = 1, js.Boot.__cast(this.renderer, renderers.blocks.Q_HealingCrystal).alpha = 1, js.Boot.__cast(this.renderer, renderers.blocks.Q_HealingCrystal).rotation = 180 * Math.atan2(Main.Instance.game.world.worldY - 1 + (this.y + .5), Main.Instance.game.world.worldX - (this.x + .5)) / Math.PI, js.Boot.__cast(this.renderer, renderers.blocks.Q_HealingCrystal).width = Math.sqrt(Math.pow(this.x + .5 - Main.Instance.game.world.worldX, 2) + Math.pow(this.y + .5 + Main.Instance.game.world.worldY - 1, 2)), js.Boot.__cast(this.renderer, renderers.blocks.Q_HealingCrystal).update()), 0 == this.ticky % (50 * Main.Instance.get_fps() / 25) && (Main.Instance.game.world.health = Math.min(20, Main.Instance.game.world.health + 1) | 0, Main.Instance.game.world.food = Math.min(1E3, Main.Instance.game.world.food + 2) | 0)) : 0 != this.alpha && null != this.renderer && (this.alpha = 0, js.Boot.__cast(this.renderer, renderers.blocks.Q_HealingCrystal).alpha = 0, js.Boot.__cast(this.renderer, renderers.blocks.Q_HealingCrystal).update());
    },
    __class__: blocks.Block_HealingCrystal
})