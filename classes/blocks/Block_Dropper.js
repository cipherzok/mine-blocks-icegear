blocks.Block_Dropper = function (b, a, c, d, f) {
    this.dropX = this.dropY = 0;
    this.changeOfSignal = !1;
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Dropper"] = blocks.Block_Dropper
blocks.Block_Dropper.__name__ = "blocks.Block_Dropper"
blocks.Block_Dropper.__super__ = blocks.Block
blocks.Block_Dropper.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        null == this.world.states.h[this.blockID] && (this.world.states.h[this.blockID] = 1);
        2 == this.world.states.h[this.blockID] ? this.dropX = 20 : 3 == this.world.states.h[this.blockID] ? this.dropY = -20 : 4 == this.world.states.h[this.blockID] ? this.dropY = 20 : this.dropX = -20;
        null == this.world.states.h[this.blockID + "_2"] && (this.world.states.h[this.blockID + "_2"] = [], this.world.states.h[this.blockID + "_2"][0] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][1] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][2] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][3] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][4] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][5] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][6] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][7] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]), this.world.states.h[this.blockID + "_2"][8] = Game.makeDynamicArray(["air", 0, 0, new haxe.ds.StringMap()]));
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (0 != this.world.getSignal(this.x, this.y) || 0 != this.world.getSignal(this.x, this.y - 1)) {
            if (this.changeOfSignal && (this.changeOfSignal = !1, null != this.world.states.h[this.blockID + "_2"] && 9 == this.world.states.h[this.blockID + "_2"].length)) {
                var b = [];
                "air" != this.world.states.h[this.blockID + "_2"][0][0] && b.push(0);
                "air" != this.world.states.h[this.blockID + "_2"][1][0] && b.push(1);
                "air" != this.world.states.h[this.blockID + "_2"][2][0] && b.push(2);
                "air" != this.world.states.h[this.blockID + "_2"][3][0] && b.push(3);
                "air" != this.world.states.h[this.blockID + "_2"][4][0] && b.push(4);
                "air" != this.world.states.h[this.blockID + "_2"][5][0] && b.push(5);
                "air" != this.world.states.h[this.blockID + "_2"][6][0] && b.push(6);
                "air" != this.world.states.h[this.blockID + "_2"][7][0] && b.push(7);
                "air" != this.world.states.h[this.blockID + "_2"][8][0] && b.push(8);
                if (0 < b.length) {
                    var a = new particles.Particle_Smoke2(this.x + .5 + this.dropX / 2 / 30, -this.y - .5 + this.dropY / 2 / 30, this.game, this.world);
                    a.xSpeed = Game.migrateSpeed(this.dropX / 2 + 2 * Math.random() - 1);
                    a.ySpeed = Game.migrateSpeed(this.dropY / 2 + 2 * Math.random() - 1);
                    b = b[Math.random() * b.length | 0];
                    a = this.world.states.h[this.blockID + "_2"][b];
                    var c = a[0],
                        d = !0;
                    "chest" == this.world.getFG(this.x + this.dropX / 20, this.y - this.dropY / 20) && 0 == this.game.storeItem(Game.makeDynamicArray([this.world.states.h[this.blockID + "_2"][b][0], 1, this.world.states.h[this.blockID + "_2"][b][2], this.world.states.h[this.blockID + "_2"][b][3]]), Math.floor(this.x + this.dropX / 20), Math.floor(this.y - this.dropY / 20)) && (d = !1, this.removeFromInventory(b));
                    d && (a = this.game.addDrop(c, this.x + .5 + this.dropX / 30, -this.y - .5 + this.dropY / 30, 1, a[2], a[3]), null != a && (js.Boot.__cast(this.world.entities.h[js.Boot.__cast(a, String)], entities.Entity_Drop).speedX = Game.migrateSpeed((this.dropX + 10 * Math.random() - 5) / 3), js.Boot.__cast(this.world.entities.h[js.Boot.__cast(a, String)], entities.Entity_Drop).speedY = Game.migrateSpeed((this.dropY + 10 * Math.random() - 5) / 3), this.removeFromInventory(b)));
                }
            }
        } else this.changeOfSignal = !0;
    },
    useEvent: function () {
        blocks.Block.prototype.useEvent.call(this);
        this.game.inventario.dispenseName = this.blockID;
        this.game.inventario.craftCoords = [this.x, this.y];
        this.game.inventario.newName = null != this.world.states.h[this.blockID + "_3"] ? this.world.states.h[this.blockID + "_3"] : "";
        this.game.inventario.dispenserType = "Dropper";
        this.game.inventario.gotoAndStop(9);
    },
    removeFromInventory: function (b) {
        Game.makeDynamicArray(this.world.states.h[this.blockID + "_2"][b])[1]--;
        0 >= this.world.states.h[this.blockID + "_2"][b][1] && (this.world.states.h[this.blockID + "_2"][b] = Game.emptyItem());
    },
    __class__: blocks.Block_Dropper
})