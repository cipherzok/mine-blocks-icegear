particles.Particle_Spark = function (b, a, c, d, f, g) {
    null == d && (d = 0);
    null == c && (c = 0);
    this.color = this.age = 0;
    this.scale = 1;
    this.rotation = 0;
    this.xSpeed = c;
    this.ySpeed = d;
    this.color = Math.floor(5 * Math.random() + 1);
    particles.Particle_Base.call(this, b, a, f, g);
}
m["particles.Particle_Spark"] = particles.Particle_Spark
particles.Particle_Spark.__name__ = "particles.Particle_Spark"
particles.Particle_Spark.__super__ = particles.Particle_Base
particles.Particle_Spark.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        this.xSpeed = Game.migrateSpeed(this.xSpeed);
        this.ySpeed = Game.migrateSpeed(this.ySpeed);
        this.texture = Textures.getTexture("particle_spark", "start");
    },
    update: function () {
        this.game.get_pawsed() || (this.xSpeed *= Game.migrateDampening(.95), this.ySpeed *= Game.migrateDampening(.95), this.x += this.xSpeed, this.y += this.ySpeed, this.age += Math.random() / Main.Instance.get_fps());
        var b = !0;
        if (1.5 < this.age) this.remove();else {
            if (1 < this.age) {
                var a = "end";
                b = .15 < lemongine.Mathz.modulus(this.age, .3);
            } else .5 < this.age ? (a = Std.string(this.color), b = .05 < lemongine.Mathz.modulus(this.age, .1)) : a = .05 < lemongine.Mathz.modulus(this.age, .1) ? "start" : Std.string(this.color);
            this.texture = Textures.getTexture("particle_spark", a);
            particles.Particle_Base.entityMatrix.reset().translate(-.05, -.05).scale2D(2 * this.scale * (b ? 1 : 0)).rotate2D(-this.rotation * Math.PI / 180).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
            this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .1, .1), particles.Particle_Base.entityMatrix));
        }
    },
    __class__: particles.Particle_Spark
})