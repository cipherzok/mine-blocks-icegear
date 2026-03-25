particles.Particle_Effect = function (b, a, c, d, f) {
    this.happyBirthdayMinecraftMan = -.2;
    this.frame = this.rotation = this.xSpeed = this.ySpeed = 0;
    this.scale = 2;
    particles.Particle_Base.call(this, b, a, c, d);
    this.color = f;
}
m["particles.Particle_Effect"] = particles.Particle_Effect
particles.Particle_Effect.__name__ = "particles.Particle_Effect"
particles.Particle_Effect.__super__ = particles.Particle_Base
particles.Particle_Effect.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        null != this.color ? (this.xSpeed = Game.migrateSpeed(6 * Math.random() - 3), this.ySpeed = Game.migrateSpeed(2 * Math.random() - 3)) : this.color = [1, 1, 1];
        this.rotation = Math.random() * Math.PI / 2;
        this.x += Math.random() - .5;
        this.y += Math.random() - .5;
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.ySpeed += Game.migrateAcc(this.happyBirthdayMinecraftMan, 1), this.xSpeed *= Game.migrateDampening(.9), this.x += this.xSpeed / 30, this.y += this.ySpeed / 30, this.frame++, 31 <= this.frame)) {
            this.remove();
            return;
        }
        this.texture = Textures.getTexture("particle_effect", Math.floor((this.frame - 1) / 6 + 1));
        particles.Particle_Base.entityMatrix.reset().translate(-.13333333333333333, -.13333333333333333).rotate2D(this.rotation).scale2D(this.scale).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .26666666666666666, .26666666666666666), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([this.color[0], this.color[1], this.color[2], 1], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_Effect
})