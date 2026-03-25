particles.Particle_Grow = function (b, a, c, d) {
    particles.Particle_Heart.call(this, b, a, c, d);
}
m["particles.Particle_Grow"] = particles.Particle_Grow
particles.Particle_Grow.__name__ = "particles.Particle_Grow"
particles.Particle_Grow.__super__ = particles.Particle_Heart
particles.Particle_Grow.prototype = z(particles.Particle_Heart.prototype, {
    init: function () {
        this.yqSpeed = Game.migrateSpeed(this.yqSpeed);
        this.scale *= .7777777777777778;
        this.texture = Textures.getTexture("particle_grow");
    },
    __class__: particles.Particle_Grow
})