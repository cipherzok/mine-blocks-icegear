particles.Particle_TorchTip = function (b, a, c, d) {
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_TorchTip"] = particles.Particle_TorchTip
particles.Particle_TorchTip.__name__ = "particles.Particle_TorchTip"
particles.Particle_TorchTip.__super__ = particles.Particle_Base
particles.Particle_TorchTip.prototype = z(particles.Particle_Base.prototype, {
    generateID: function () {
        return this.id = "particle," + Math.floor(this.x) + "," + Math.floor(this.y);
    },
    update: function () {
        "th" != this.world.getFG(this.x, -this.y) ? this.remove() : 0 != this.world.tick % 2 || this.game.get_pawsed() || (this.texture = Textures.getTexture("particle_torchtip", 7 * Math.random() + 1 | 0), particles.Particle_Base.entityMatrix.reset().translate(-.105, -.28500000000000003).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom), this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .21, .28500000000000003), particles.Particle_Base.entityMatrix)));
    },
    __class__: particles.Particle_TorchTip
})