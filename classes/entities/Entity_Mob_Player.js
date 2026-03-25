entities.Entity_Mob_Player = function (b, a, c) {
    this.hit = new lemongine.Rectangle();
    entities.Entity_Mob.call(this, b, a, c);
}
m["entities.Entity_Mob_Player"] = entities.Entity_Mob_Player
entities.Entity_Mob_Player.__name__ = "entities.Entity_Mob_Player"
entities.Entity_Mob_Player.__super__ = entities.Entity_Mob
entities.Entity_Mob_Player.prototype = z(entities.Entity_Mob.prototype, {
    get_hit: function () {
        this.hit.set(this.world.worldX - .7272000000000001, this.world.worldY - 1.9997999999999998, 1.4544000000000001, 1.9997999999999998);
        return this.hit;
    },
    __class__: entities.Entity_Mob_Player
})