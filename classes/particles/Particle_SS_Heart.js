particles.Particle_SS_Heart = function (b, a) {
    this.scale = this.alpha = 1;
    this.yqSpeed = 0;
    b += 20 * Math.random() - 10;
    a += 10 * Math.random() - 5;
    this.scale = .5 * Math.random() + 1;
    this.yqSpeed = -(7 * Math.random() + 2) / 10;
    particles.Particle_Base_SS.call(this, b, a);
}
m["particles.Particle_SS_Heart"] = particles.Particle_SS_Heart
particles.Particle_SS_Heart.__name__ = "particles.Particle_SS_Heart"
particles.Particle_SS_Heart.__super__ = particles.Particle_Base_SS
particles.Particle_SS_Heart.prototype = z(particles.Particle_Base_SS.prototype, {
    init: function () {
        this.yqSpeed = Game.migrateSpeed(this.yqSpeed);
        this.texture = Textures.getTexture("particle_heart");
    },
    update: function () {
        this.y += this.yqSpeed;
        this.alpha -= .25 / Main.Instance.get_fps();
        if (0 >= this.alpha) this.remove();else {
            particles.Particle_Base.entityMatrix.reset().translate(-4.5, -4.5).scale2D(this.scale).translate(Math.floor(this.x), Math.floor(this.y));
            var b = this.entity,
                a = this.quadPosition,
                c = new lemongine.Point(this.texture.x, this.texture.y),
                d = new lemongine.Point(this.texture.width, this.texture.height),
                f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 9, 9), particles.Particle_Base.entityMatrix),
                l = new haxe.ds.StringMap(),
                h = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
            l.h.color = h;
            b.updateQuad(a, null, c, d, null, f, null, l);
        }
    },
    __class__: particles.Particle_SS_Heart
})