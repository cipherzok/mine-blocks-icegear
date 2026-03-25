particles.Particle_Dust = function (b, a, c, d, f) {
    null == f && (f = 0);
    this.scale = this.alpha = 1;
    this.xSpeed = this.ySpeed = 0;
    b += .5 * Math.random() - .25;
    this.scale = 5 * Math.random() + .5;
    this.xSpeed = -(30 * Math.random() - 14) / 15 - f / 20 * 2;
    this.ySpeed = 2 * -Math.random() / 3;
    this.alpha = 1;
    particles.Particle_Base.call(this, b, a - .3333333333333333, c, d);
}
m["particles.Particle_Dust"] = particles.Particle_Dust
particles.Particle_Dust.__name__ = "particles.Particle_Dust"
particles.Particle_Dust.__super__ = particles.Particle_Base
particles.Particle_Dust.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.xSpeed = Game.migrateSpeed(this.xSpeed);
        this.ySpeed = Game.migrateSpeed(this.ySpeed);
        this.texture = Textures.getTexture("particle_dust");
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.scale += Game.migrateSpeed(.15), this.x += this.xSpeed / 30, this.y += this.ySpeed / 30, this.alpha -= Game.migrateSpeed(.02), 0 >= this.alpha)) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-.095, -.095).scale2D(this.scale).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .19, .19), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_Dust
})