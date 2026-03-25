blocks.Block_MobSpawner = function (b, a, c, d, f) {
    blocks.Block.call(this, b, a, c, d, f);
}
m["blocks.Block_MobSpawner"] = blocks.Block_MobSpawner
blocks.Block_MobSpawner.__name__ = "blocks.Block_MobSpawner"
blocks.Block_MobSpawner.__super__ = blocks.Block
blocks.Block_MobSpawner.prototype = z(blocks.Block.prototype, {
    init: function () {
        this.worldChunk.registerBlockEventFrame(this);
    },
    frameEvent: function () {
        blocks.Block.prototype.frameEvent.call(this);
        this.game.lighting.addLight(this.blockID, LightType.BLOCK, this.blockState.x + .5, this.blockState.y + .5);
        if (.0025 > Math.random()) {
            if (null == this.blockState.states1 || "Array" != lemongine.Helpers.getQualifiedClassName(this.blockState.states1)) this.blockState.states1 = [];
            for (var b = this.blockState.states1, a = 0, c = b.length; a < c;) {
                var d = a++;
                null == this.world.mobs.h[b[d]] && b.splice(d, 1);
            }
            3 > b.length && (.3333333333333333 > Math.random() ? (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.x, -this.y, 0, 3), null != b && entities.Entity_Mob.spawnMob("zombie", b[0] + .5, -b[1])) : .3333333333333333 > Math.random() ? (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.x, -this.y, 0, 3), null != b && entities.Entity_Mob.spawnMob("skeleton", b[0] + .5, -b[1])) : .3333333333333333 > Math.random() && (b = entities.Entity_Mob.findSpawnArea("dark", 2, !1, this.x, -this.y, 0, 3), null != b && entities.Entity_Mob.spawnMob("spider", b[0] + .5, -b[1])));
        }
    },
    __class__: blocks.Block_MobSpawner
})