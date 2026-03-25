particles.Particle_SS_Grow = function (b, a) {
    particles.Particle_SS_Heart.call(this, b, a);
}
m["particles.Particle_SS_Grow"] = particles.Particle_SS_Grow
particles.Particle_SS_Grow.__name__ = "particles.Particle_SS_Grow"
particles.Particle_SS_Grow.__super__ = particles.Particle_SS_Heart
particles.Particle_SS_Grow.prototype = z(particles.Particle_SS_Heart.prototype, {
    init: function () {
        this.yqSpeed = Game.migrateSpeed(this.yqSpeed);
        this.scale *= .7777777777777778;
        this.texture = Textures.getTexture("particle_grow");
    },
    __class__: particles.Particle_SS_Grow
})