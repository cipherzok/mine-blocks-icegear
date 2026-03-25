particles.Particle_Mining = function (b, a, c, d) {
    this.portal = this.snowball = this.chicken = this.mycelium = this.slime = this.magmacube = !1;
    this.g = .5;
    this.alph = this.alpha = 1;
    this.xSpeed = this.ySpeed = 0;
    b += Math.random() - .5;
    a += Math.random() - .5;
    particles.Particle_Base.call(this, b, a, c, d);
}
m["particles.Particle_Mining"] = particles.Particle_Mining
particles.Particle_Mining.__name__ = "particles.Particle_Mining"
particles.Particle_Mining.__super__ = particles.Particle_Base
particles.Particle_Mining.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        1 == this.portal ? (this.color = new lemongine.Color().fromHex(-3407617), this.xSpeed = (10 * Math.random() | 0) - 4, this.ySpeed = -5, this.g = -.5, this.alph = 9) : 1 == this.snowball ? (this.color = new lemongine.Color().fromHex(-1), this.xSpeed = (10 * Math.random() | 0) - 4, this.ySpeed = (10 * Math.random() | 0) - 4, this.g = .5, this.alph = 7) : 1 == this.chicken ? (this.color = new lemongine.Color().fromHex(-6750208), this.xSpeed = (10 * Math.random() | 0) - 4, this.ySpeed = (10 * Math.random() | 0) - 4, this.g = -.5, this.alph = 3) : 1 == this.mycelium ? (this.color = new lemongine.Color().fromHex(-12307627), this.xSpeed = 0, this.ySpeed = -.2, this.g = 0, this.alph = 1) : (1 == this.slime ? (this.color = new lemongine.Color().fromHex(-16711936), this.xSpeed = (20 * Math.random() | 0) - 9, this.ySpeed = -(5 * Math.random() | 0) - 4) : 1 == this.magmacube ? (this.color = new lemongine.Color().fromHex(-65536), this.xSpeed = (20 * Math.random() | 0) - 9, this.ySpeed = -(5 * Math.random() | 0) - 4) : (null == this.color && (this.color = new lemongine.Color().fromHex(-1)), this.xSpeed = (10 * Math.random() | 0) - 4, this.ySpeed = -(5 * Math.random() | 0)), this.g = .5, this.alph = 5);
        this.xSpeed = Game.migrateSpeed(this.xSpeed);
        this.ySpeed = Game.migrateSpeed(this.ySpeed);
        this.texture = Textures.getTexture("particle_square");
    },
    update: function () {
        if (!this.game.get_pawsed() && (this.ySpeed += Game.migrateAcc(this.g, 1), this.xSpeed *= Game.migrateDampening(.8), this.x += this.xSpeed / 30, this.y += this.ySpeed / 30, this.alpha -= Game.migrateSpeed(this.alph / 100), 0 >= this.alpha)) {
            this.remove();
            return;
        }
        particles.Particle_Base.entityMatrix.reset().translate(-.016666666666666666, -.016666666666666666).scale2D(3).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        var b = this.entity,
            a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .03333333333333333, .03333333333333333), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            p = lemongine.Mathz.repeatArray([G.toFloat(this.color.r) / G.toFloat(255), G.toFloat(this.color.g) / G.toFloat(255), G.toFloat(this.color.b) / G.toFloat(255), Math.min(1, this.alpha)], 6);
        l.h.color = p;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_Mining
})