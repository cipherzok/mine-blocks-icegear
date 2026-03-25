particles.Particle_EnderSparkle = function (b, a, c, d) {
    this.alpha = this.alphaSpeed = 0;
    this.rotation = this.scale = 1;
    this.xSpeed = this.ySpeed = 0;
    b += Math.random() - .5;
    a += Math.random() - .5;
    this.rotation = 360 * Math.random();
    this.scale = .9 * Math.random() + .1;
    this.xSpeed = (11 * Math.random() - 5 | 0) / 10;
    this.ySpeed = (11 * Math.random() - 5 | 0) / 30;
    this.alpha = 0;
    this.alphaSpeed = 10;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_EnderSparkle"] = particles.Particle_EnderSparkle
particles.Particle_EnderSparkle.__name__ = "particles.Particle_EnderSparkle"
particles.Particle_EnderSparkle.__super__ = particles.Particle_Base
particles.Particle_EnderSparkle.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.xSpeed = Game.migrateSpeed(this.xSpeed);
        this.ySpeed = Game.migrateSpeed(this.ySpeed);
        this.alphaSpeed = Game.migrateSpeed(this.alphaSpeed);
        this.texture = Textures.getTexture("particle_ender");
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.x += this.xSpeed / 30, this.y += this.ySpeed / 30, 1 <= this.alpha && 0 < this.alphaSpeed && (this.alphaSpeed = Game.migrateSpeed(-5)), this.alpha += this.alphaSpeed / 100, 0 >= this.alpha)) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-.08333333333333333, -.08333333333333333).scale2D(1.5 * this.scale).rotate2D(-this.rotation * Math.PI / 180).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
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
    __class__: particles.Particle_EnderSparkle
})