particles.Particle_Water = function (b, a, c, d) {
    this.alpha = 1;
    this.rotation = 0;
    this.currentFrame = this.frame = 1;
    this.randomStartingNumber = 0;
    this.bubbleDirection = "up";
    this.wasABubble = !1;
    this.yqSpeed = 0;
    this.xqSpeed = null;
    particles.Particle_Base.call(this, b, a, c, d);
    this.x += (10 * Math.random() - 5) / 30;
    this.y += (10 * Math.random() - 5) / 30;
}
m["particles.Particle_Water"] = particles.Particle_Water
particles.Particle_Water.__name__ = "particles.Particle_Water"
particles.Particle_Water.__super__ = particles.Particle_Base
particles.Particle_Water.prototype = z(particles.Particle_Base.prototype, {
    init: function () {
        null == this.xqSpeed && (this.xqSpeed = (20 * Math.random() - 10) / 2, this.yqSpeed = -(40 * Math.random()) / 5, this.randomStartingNumber = Math.random());
        this.xqSpeed = Game.migrateSpeed(this.xqSpeed);
        this.yqSpeed = Game.migrateSpeed(this.yqSpeed);
    },
    update: function () {
        if (!this.game.get_pawsed()) {
            if ("wr" == this.world.getFG(Math.floor(this.x), Math.floor(-this.y))) {
                if (this.wasABubble = !0, "up" == this.bubbleDirection ? (this.yqSpeed = Game.migrateSpeed(-1.5), this.xqSpeed = 0) : "down" == this.bubbleDirection ? (this.yqSpeed = Game.migrateSpeed(3), this.xqSpeed = Game.migrateSpeed(2 * Math.sin(this.world.tick / 4 * 25 / Main.Instance.get_fps() + 2 * this.randomStartingNumber * Math.PI))) : this.yqSpeed -= Game.migrateAcc(.5, 1), 2 != this.currentFrame) {
                    this.currentFrame = 2;
                    return;
                }
            } else if ("air" == this.world.getFG(Math.floor(this.x), Math.floor(-this.y))) {
                if (this.wasABubble) {
                    this.remove();
                    return;
                }
                this.yqSpeed += Game.migrateAcc(1, 1);
                if (3 != this.currentFrame) {
                    this.currentFrame = 3;
                    this.frame = 0;
                    return;
                }
            } else {
                this.remove();
                return;
            }
            this.xqSpeed *= Game.migrateDampening(.9);
            this.x += this.xqSpeed / 30;
            this.y += this.yqSpeed / 30;
            this.alpha -= Game.migrateSpeed(.05);
            if (3 == this.currentFrame) {
                if (0 == this.frame % 4 && (this.rotation = 90 * Math.floor(4 * Math.random()), 20 < this.frame)) {
                    this.remove();
                    return;
                }
                this.frame++;
            }
            if (0 >= this.alpha) {
                this.remove();
                return;
            }
        }
        this.texture = Textures.getTexture(3 == this.currentFrame ? "particle_water" : "particle_bubble");
        particles.Particle_Base.entityMatrix.reset().translate(-.08333333333333333, -.08333333333333333).rotate2D(this.rotation).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .16666666666666666, .16666666666666666), particles.Particle_Base.entityMatrix));
    },
    __class__: particles.Particle_Water
})