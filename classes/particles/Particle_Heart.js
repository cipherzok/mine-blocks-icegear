particles.Particle_Heart = function (b, a, c, d) {
    this.scale = this.alpha = 1;
    this.yqSpeed = 0;
    b += Math.random() - .5;
    a += 2 * Math.random() / 3 - .3333333333333333;
    this.scale = .5 * Math.random() + 1;
    this.yqSpeed = -(8 * Math.random() + 1) / 10;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_Heart"] = particles.Particle_Heart
particles.Particle_Heart.__name__ = "particles.Particle_Heart"
particles.Particle_Heart.__super__ = particles.Particle_Base
particles.Particle_Heart.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.yqSpeed = Game.migrateSpeed(this.yqSpeed);
        this.texture = Textures.getTexture("particle_heart");
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.y += this.yqSpeed / 30, this.alpha -= .25 / Main.Instance.get_fps(), 0 >= this.alpha)) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-.15, -.15).scale2D(this.scale).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .3, .3), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            h = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
        l.h.color = h;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_Heart
})