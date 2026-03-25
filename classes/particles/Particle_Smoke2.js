particles.Particle_Smoke2 = function (b, a, c, d, f, g) {
    this.rotation = this.xSpeed = this.ySpeed = 0;
    this.scale = this.frame = 1;
    particles.Particle_Base.call(this, b, a, c, d);
    this.xSpeed = null == f ? 16 * Math.random() - 8 : f;
    this.ySpeed = null == g ? 16 * Math.random() - 8 : g;
}
m["particles.Particle_Smoke2"] = particles.Particle_Smoke2
particles.Particle_Smoke2.__name__ = "particles.Particle_Smoke2"
particles.Particle_Smoke2.__super__ = particles.Particle_Base
particles.Particle_Smoke2.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.rotation = (4 * Math.random() | 0) * Math.PI / 2;
        this.x += ((9 * Math.random() | 0) - 4) / 30;
        this.scale = .5 * Math.random() + .5;
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.ySpeed -= Game.migrateAcc(.2, .93), this.y += Game.migrateSpeed(this.ySpeed) / 30, this.x += Game.migrateSpeed(this.xSpeed) / 30, this.xSpeed *= Game.migrateDampening(.93), this.ySpeed *= Game.migrateDampening(.93), 1 == (10 * Math.random() | 0))) {
            if (5 == this.frame) {
                this.remove();
                return;
            }
            this.rotation = (4 * Math.random() | 0) * Math.PI / 2;
            this.frame++;
        }
        this.texture = Textures.getTexture("particle_smoke", this.frame);
        particles.Particle_Base.entityMatrix.reset().translate(-.08333333333333333, -.08333333333333333).rotate2D(this.rotation).scale2D(4 * this.scale).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .16666666666666666, .16666666666666666), particles.Particle_Base.entityMatrix));
    },
    __class__: particles.Particle_Smoke2
})