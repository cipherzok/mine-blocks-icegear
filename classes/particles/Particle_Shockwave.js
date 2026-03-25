particles.Particle_Shockwave = function (b, a, c, d) {
    this.scale = 1;
    this.playing = !1;
    this.frame = 3;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_Shockwave"] = particles.Particle_Shockwave
particles.Particle_Shockwave.__name__ = "particles.Particle_Shockwave"
particles.Particle_Shockwave.__super__ = particles.Particle_Base
particles.Particle_Shockwave.prototype = z(particles.Particle_Base.prototype, {
    update: function () {
        if (!this.game.get_pawsed() && (this.playing || 0 != (12 * Math.random() | 0) || (this.playing = !0), this.playing && this.frame++, 32 <= this.frame)) {
            this.remove();
            return;
        }
        var b = Std.string(Math.floor((this.frame - 1) / 4));
        this.texture = Textures.getTexture("particle_shockwave", "0" == b ? "1" : b);
        b = "0" == b ? 0 : 2 * this.scale;
        particles.Particle_Base.entityMatrix.reset().translate(-.5333333333333333, -.5333333333333333).scale2D(b).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1.0666666666666667, 1.0666666666666667), particles.Particle_Base.entityMatrix));
    },
    __class__: particles.Particle_Shockwave
})