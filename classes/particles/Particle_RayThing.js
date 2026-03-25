particles.Particle_RayThing = function (b, a, c, d) {
    this.rotation = this.scale = this.rS = this.aA = this.aS = this.raysize = this.alpha = 1;
    this.rS = (10 * Math.random() - 5) / 2;
    this.aA = 20 * Math.random();
    this.alpha = .5 - this.aA;
    this.aS = 5;
    this.rotation = 360 * Math.random();
    this.scale = (150 * Math.random() + 100) / 100;
    this.raysize = (40 * Math.random() + 20) / 100;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_RayThing"] = particles.Particle_RayThing
particles.Particle_RayThing.__name__ = "particles.Particle_RayThing"
particles.Particle_RayThing.__super__ = particles.Particle_Base
particles.Particle_RayThing.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.rS = Game.migrateSpeed(this.rS);
        this.texture = Textures.getTexture("particle_raything");
    },
    update: function () {
        if (!this.game.get_pawsed()) if (this.rotation += this.rS, this.alpha += Game.migrateSpeed(this.aS / 100), 5 == this.aS && this.alpha > (100 - this.aA) / 100) this.aS = -3;else if (-3 == this.aS && 0 >= this.alpha) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-2.5, -5).scale(this.raysize * this.scale * 2, 2 * this.scale).rotate2D(-this.rotation * Math.PI / 180).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 5, 5), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_RayThing
})