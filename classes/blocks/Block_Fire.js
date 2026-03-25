blocks.Block_Fire = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_Fire"] = blocks.Block_Fire
blocks.Block_Fire.__name__ = "blocks.Block_Fire"
blocks.Block_Fire.__super__ = blocks.Block
blocks.Block_Fire.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
        this.inter();
        this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5);
    },
    punchEvent: function () {
        this.game.requestSound("sizzle", this.x - this.world.worldX, -this.y - this.world.worldY);
        this.game.mineBlock(this.x, this.y, !0, !1);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        if (0 != this.game.getGameRule("dofiretick")) {
            Object.prototype.hasOwnProperty.call(this.world.states.h, this.blockID) || (this.world.states.h[this.blockID] = 15);
            var b = this.world.states.h[this.blockID],
                a = this.x,
                c = this.y,
                d = this.game.canBeOnFire(a, c - 1),
                f = this.game.canBeOnFire(a - 1, c),
                g = this.game.canBeOnFire(a + 1, c),
                p = this.game.canBeOnFire(a, c + 1);
            null != this.renderer && js.Boot.__cast(this.renderer, renderers.blocks.Q_Fire).setLit(d, f, g, p);
            if (.05 > Math.random()) {
                if ("n" != this.world.getFG(a, c - 1) && "magma" != this.world.getFG(a, c - 1)) {
                    --b;
                    this.world.states.h[this.blockID] = b;
                    var h = !1;
                    if (d && (h = !0, Math.random() < BlockData.get(this.world.getFG(a, c - 1), "flamRate") && BlockData.get(this.world.getFG(a, c - 1), "flammable") && this.game.mineBlock(a, c - 1, !0, !1), "TNT" == this.world.getFG(a, c - 1))) {
                        this.game.igniteTNT(a, c - 1);
                        return;
                    }
                    if (f && (h = !0, Math.random() < BlockData.get(this.world.getFG(a - 1, c), "flamRate") && BlockData.get(this.world.getFG(a - 1, c), "flammable") && this.game.mineBlock(a - 1, c, !0, !1), "TNT" == this.world.getFG(a - 1, c))) {
                        this.game.igniteTNT(a - 1, c);
                        return;
                    }
                    if (p && (h = !0, Math.random() < BlockData.get(this.world.getFG(a, c + 1), "flamRate") && BlockData.get(this.world.getFG(a, c + 1), "flammable") && this.game.mineBlock(a, c + 1, !0, !1), "TNT" == this.world.getFG(a, c + 1))) {
                        this.game.igniteTNT(a, c + 1);
                        return;
                    }
                    if (g && (h = !0, Math.random() < BlockData.get(this.world.getFG(a + 1, c), "flamRate") && BlockData.get(this.world.getFG(a + 1, c), "flammable") && this.game.mineBlock(a + 1, c, !0, !1), "TNT" == this.world.getFG(a + 1, c))) {
                        this.game.igniteTNT(a + 1, c);
                        return;
                    }
                    if (!h) {
                        this.game.requestRemove(a, c, !0, !1, !0);
                        return;
                    }
                }
                d = Math.floor(4 * Math.random() - 1);
                f = Math.floor(3 * Math.random() - 1);
                "undefined" == this.world.getFG(a + f, c + d) && ((0 != f - 1 || -1 != d) && this.game.canCatchOnFire(a + f - 1, c + d) || (0 != f + 1 || -1 != d) && this.game.canCatchOnFire(a + f + 1, c + d) || (0 != f || -1 != d - 1) && this.game.canCatchOnFire(a + f, c + d - 1) || (0 != f || -1 != d + 1) && this.game.canCatchOnFire(a + f, c + d + 1)) && (this.world.setFG(a + f, c + d, "fire"), this.game.makeBlock(a + f, c + d), this.world.states.h["blockX" + (a + f) + "Y" + (c + d)] = b + 1);
                if (0 >= b) {
                    this.game.requestRemove(a, c, !0, !1, !0);
                    return;
                }
            }
            this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5);
            if (Math.random() < 1 / (20 * Main.Instance.get_fps() / 25)) for (.1 > Math.random() && 5 < this.world.tick - blocks.Block_Fire.lastPlayedFireSound && (blocks.Block_Fire.lastPlayedFireSound = this.world.tick, this.game.requestSound("fire" + (Math.floor(5 * Math.random()) + 1), a - this.world.worldX, -c - this.world.worldY)), 1 < GlobalSave.particles && this.game.addParticles("smoke", 1, 0, new lemongine.Point(a + Math.random(), 0), new lemongine.Point(-c - Math.random())), new lemongine.Rectangle(a, -c, 1, 1).intersects(this.world.player.get_hit()) && this.game.ouch(1, 1, "fire"), b = Object.keys(this.world.mobs.h), d = b.length, f = 0; f < d;) g = b[f++], null != this.game.getMob(g) && this.game.getMob(g).mobCollisionRectangle(g, new lemongine.Rectangle(a, -c, 1, 1)) && (this.world.onFire.h[g] = !0);
        }
    },
    __class__: blocks.Block_Fire
})
blocks.Block_Fire.lastPlayedFireSound = 0