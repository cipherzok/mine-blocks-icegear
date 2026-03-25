particles.Particle_LavaBubble = function (b, a, c, d) {
    this.alpha = 1;
    this.xSpeed = 5;
    this.ySpeed = -5;
    b += Math.random() - .5;
    this.xSpeed = 5 * (4 * Math.random() - 2) / 2;
    this.ySpeed = -5;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_LavaBubble"] = particles.Particle_LavaBubble
particles.Particle_LavaBubble.__name__ = "particles.Particle_LavaBubble"
particles.Particle_LavaBubble.__super__ = particles.Particle_Base
particles.Particle_LavaBubble.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.xSpeed = Game.migrateSpeed(this.xSpeed);
        this.ySpeed = Game.migrateSpeed(this.ySpeed);
        this.texture = Textures.getTexture("particle_lava_bubble");
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.ySpeed += Game.migrateAcc(1, 1), this.xSpeed *= Game.migrateDampening(.95), this.x += this.xSpeed / 30, this.y += this.ySpeed / 30, this.alpha -= Game.migrateSpeed(.1), 0 >= this.alpha)) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-.08666666666666667, -.08666666666666667).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .17333333333333334, .17333333333333334), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_LavaBubble
})