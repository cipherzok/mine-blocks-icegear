particles.Particle_Base_SS = function (b, a) {
    particles.Particle_Base.call(this, b, a, null, null);
}
m["particles.Particle_Base_SS"] = particles.Particle_Base_SS
particles.Particle_Base_SS.__name__ = "particles.Particle_Base_SS"
particles.Particle_Base_SS.__super__ = particles.Particle_Base
particles.Particle_Base_SS.prototype = z(particles.Particle_Base.prototype, {
    getDataContainerEntity: function () {
        return Main.Instance.particles;
    },
    getParticleEntity: function () {
        return Main.Instance.getScreenspaceParticleEntity();
    },
    __class__: particles.Particle_Base_SS
})