particles.Particle_Critical = function (b, a, c, d) {
    this.rotation = this.scale = this.alpha = 1;
    this.xSpeed = this.ySpeed = 0;
    b += Math.random() - .5;
    a += Math.random() - .5;
    this.rotation = 90 * Math.random();
    this.scale = .4 * Math.random() + .6;
    this.xSpeed = 5 * Math.random() - 2 | 0;
    this.ySpeed = 5 * Math.random() - 2 | 0;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_Critical"] = particles.Particle_Critical
particles.Particle_Critical.__name__ = "particles.Particle_Critical"
particles.Particle_Critical.__super__ = particles.Particle_Base
particles.Particle_Critical.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.xSpeed = Game.migrateSpeed(this.xSpeed);
        this.ySpeed = Game.migrateSpeed(this.ySpeed);
        this.texture = Textures.getTexture("particle_critical");
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.xSpeed *= Game.migrateDampening(.8), this.ySpeed *= Game.migrateDampening(.8), this.x += this.xSpeed / 30, this.y += this.ySpeed / 30, this.alpha -= 2.5 / Main.Instance.get_fps(), 0 >= this.alpha)) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-.08333333333333333, -.08333333333333333).scale2D(3 * this.scale).rotate2D(-this.rotation * Math.PI / 180).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .16666666666666666, .16666666666666666), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_Critical
})