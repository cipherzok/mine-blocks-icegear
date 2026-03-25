particles.Particle_Base = function (b, a, c, d) {
    this.quadPosition = -1;
    this.game = c;
    this.world = d;
    this.x = b;
    this.y = a;
    this.generateID();
    b = this.getDataContainerEntity();
    Object.prototype.hasOwnProperty.call(b.h, this.id) || (this.getDataContainerEntity().h[this.id] = this, this.entity = this.getParticleEntity(), this.quadPosition = this.entity.nearestConsecutiveEmpty(1), this.entity.updateQuad(this.quadPosition, null, null, new lemongine.Point()), this.init());
}
m["particles.Particle_Base"] = particles.Particle_Base
particles.Particle_Base.__name__ = "particles.Particle_Base"
particles.Particle_Base.prototype = {
    getDataContainerEntity: function () {
        return this.game.particles;
    },
    getParticleEntity: function () {
        return this.game.particleEntity;
    },
    generateID: function () {
        return this.id = Game.uniqueID(this.getDataContainerEntity(), "particle");
    },
    init: function () {},
    update: function () {},
    remove: function () {
        var b = this.getDataContainerEntity(),
            a = this.id;
        Object.prototype.hasOwnProperty.call(b.h, a) && delete b.h[a];
        -1 != this.quadPosition && this.entity.removeQuad(this.quadPosition, !1);
    },
    __class__: particles.Particle_Base
}
particles.Particle_Base.entityMatrix = new lemongine.Matrix4()