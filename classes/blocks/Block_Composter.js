blocks.Block_Composter = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Composter"] = blocks.Block_Composter
blocks.Block_Composter.__name__ = "blocks.Block_Composter"
blocks.Block_Composter.__super__ = blocks.Block
blocks.Block_Composter.prototype = z(blocks.Block.prototype, {
    mouseOverEvent: function () {
        if (null != this.renderer) {
            if (Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID)) {
                var b = Std.parseInt(this.world.states.h[this.blockID].toString()) / 5 * .875;
                js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).state = b + .125;
            } else js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).state = 0;
            js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).exposed = !0;
            this.renderer.update();
        }
    },
    mouseOutEvent: function () {
        null != this.renderer && (js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).exposed = !1, this.renderer.update());
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID) || (this.world.states.h[this.blockID] = this.blockState.states1 = 0);
        if (5 <= this.blockState.states1) this.game.addDrop("bonem", this.x + .5, -this.y - 1), this.world.states.h[this.blockID] = 0, this.blockState.states1 = 0, this.updateState(), this.game.requestSound("smush", this.x - this.world.worldX, -this.y - this.world.worldY, 1, 1);else if (null != BlockData.get(this.world.get_selectedInventoryItemType(), "compostChance")) {
            this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1);
            if (Math.random() <= BlockData.get(this.world.get_selectedInventoryItemType(), "compostChance")) {
                var b = this.blockID,
                    a = this.world.states.h[b] + 1;
                this.world.states.h[b] = a;
                this.blockState.states1 = a;
                this.updateState();
                this.game.requestSound("crunch" + Math.floor(3 * Math.random()), this.x - this.world.worldX, -this.y - this.world.worldY, 1, 1);
            }
            this.game.addParticles("grow", 0, 1, new lemongine.Point(this.x + .5), new lemongine.Point(-this.y - .5));
        }
        this.game.updateSelectedInventoryItemStuff();
    },
    updateState: function () {
        this.blockState.states1 = this.world.states.h[this.blockID];
        if (null != this.renderer) {
            var b = Std.parseInt(this.world.states.h[this.blockID].toString()) / 5 * .875;
            js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).state = b + .125;
            this.renderer.update();
        }
    },
    __class__: blocks.Block_Composter
})