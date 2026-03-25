particles.Particle_SS_Smoke2 = function (b, a, c, d) {
    this.rotation = this.xSpeed = this.ySpeed = 0;
    this.scale = this.frame = 1;
    particles.Particle_Base_SS.call(this, b, a);
    this.xSpeed = null == c ? 16 * Math.random() - 8 : c;
    this.ySpeed = null == d ? 16 * Math.random() - 8 : d;
}
m["particles.Particle_SS_Smoke2"] = particles.Particle_SS_Smoke2
particles.Particle_SS_Smoke2.__name__ = "particles.Particle_SS_Smoke2"
particles.Particle_SS_Smoke2.__super__ = particles.Particle_Base_SS
particles.Particle_SS_Smoke2.prototype = z(particles.Particle_Base_SS.prototype, {
    init: function () {
        this.rotation = (4 * Math.random() | 0) * Math.PI / 2;
        this.scale = .5 * Math.random() + .5;
    },
    update: function () {
        this.ySpeed -= Game.migrateAcc(.2, .93);
        this.y += Game.migrateSpeed(this.ySpeed);
        this.x += Game.migrateSpeed(this.xSpeed);
        this.xSpeed *= Game.migrateDampening(.93);
        this.ySpeed *= Game.migrateDampening(.93);
        if (1 == (10 * Math.random() | 0)) {
            if (5 == this.frame) {
                this.remove();
                return;
            }
            this.rotation = (4 * Math.random() | 0) * Math.PI / 2;
            this.frame++;
        }
        this.texture = Textures.getTexture("particle_smoke", this.frame);
        particles.Particle_Base.entityMatrix.reset().translate(-2.5, -2.5).rotate2D(this.rotation).scale2D(4 * this.scale).translate(Math.floor(this.x), Math.floor(this.y));
        this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 5, 5), particles.Particle_Base.entityMatrix));
    },
    __class__: particles.Particle_SS_Smoke2
})