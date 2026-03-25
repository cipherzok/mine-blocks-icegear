blocks.Block_Cauldron = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Cauldron"] = blocks.Block_Cauldron
blocks.Block_Cauldron.__name__ = "blocks.Block_Cauldron"
blocks.Block_Cauldron.__super__ = blocks.Block
blocks.Block_Cauldron.prototype = z(blocks.Block.prototype, {
    mouseOverEvent: function () {
        if (null != this.renderer) {
            if (Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID)) {
                var b = Std.parseInt(this.world.states.h[this.blockID].toString()) / 4;
                js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).state = b + .25;
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
        if ("potion" == this.world.get_selectedInventoryItemType()) {
            if (0 < this.blockState.states1 && this.game.emptyPotion(this.world.get_selectedInventoryItemExtra().h.type)) {
                this.world.reduceInventoryItemCount(this.world.selectedInventoryItem, 1);
                var b = new haxe.ds.StringMap();
                b.h.type = "water";
                this.game.addDrop("potion", this.world.worldX, this.world.worldY, 1, null, b);
                this.world.states.h[this.blockID] = --this.blockState.states1;
            }
        } else if ("bk" == this.world.get_selectedInventoryItemType()) 3 == this.blockState.states1 && (1 != this.world.gamemode && this.world.setInventoryItemType(this.world.selectedInventoryItem, "wbk"), this.world.states.h[this.blockID] = this.blockState.states1 = 0);else if ("wbk" == this.world.get_selectedInventoryItemType()) 3 != this.blockState.states1 && (1 != this.world.gamemode && this.world.setInventoryItemType(this.world.selectedInventoryItem, "bk"), this.world.states.h[this.blockID] = this.blockState.states1 = 3);else if ("LeatherCap" == this.world.get_selectedInventoryItemType() || "LeatherPants" == this.world.get_selectedInventoryItemType() || "LeatherShirt" == this.world.get_selectedInventoryItemType() || "LeatherShoes" == this.world.get_selectedInventoryItemType()) {
            b = Colors.colors;
            var a = this.world.get_selectedInventoryItemExtra().h.type;
            Object.prototype.hasOwnProperty.call(b.h, a) && 0 < this.blockState.states1 && (b = js.Boot.__cast(this.world.getInventoryItemExtras(this.world.selectedInventoryItem), haxe.ds.StringMap), Object.prototype.hasOwnProperty.call(b.h, "type") && delete b.h.type, this.world.states.h[this.blockID] = --this.blockState.states1);
        } else "bl" == this.world.get_selectedInventoryItemType() ? (b = Colors.colors, a = this.world.get_selectedInventoryItemExtra().h.type, Object.prototype.hasOwnProperty.call(b.h, a) && "white" != this.world.get_selectedInventoryItemExtra().h.type && 0 < this.blockState.states1 && (js.Boot.__cast(this.world.getInventoryItemExtras(this.world.selectedInventoryItem), haxe.ds.StringMap).h.type = "white", this.world.states.h[this.blockID] = --this.blockState.states1)) : "bed" == this.world.get_selectedInventoryItemType() && "white" != this.world.get_selectedInventoryItemExtra().h.type && 0 < this.blockState.states1 && (js.Boot.__cast(this.world.getInventoryItemExtras(this.world.selectedInventoryItem), haxe.ds.StringMap).h.type = "white", this.world.states.h[this.blockID] = --this.blockState.states1);
        null != this.renderer && (b = Std.parseInt(this.world.states.h[this.blockID].toString()) / 4, js.Boot.__cast(this.renderer, renderers.blocks.Q_Cauldron).state = b + .25, this.renderer.update());
        this.game.updateSelectedInventoryItemStuff();
    },
    __class__: blocks.Block_Cauldron
})