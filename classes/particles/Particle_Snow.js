particles.Particle_Snow = function (b, a, c, d) {
    this.life = 0;
    this.speed = 5;
    this.scale = 1.5;
    this.bX = this.frame = this.alpha = this.rotation = 0;
    particles.Particle_Base.call(this, b, a, c, d);
    this.bX = Math.round(b + .5) - 1;
    this.rot = 20 * Math.random();
    this.frame = Math.floor(9 * Math.random() + 1);
    this.speed = 3 * Math.random() + 3;
    this.life = 10 * Main.Instance.get_fps();
}
m["particles.Particle_Snow"] = particles.Particle_Snow
particles.Particle_Snow.__name__ = "particles.Particle_Snow"
particles.Particle_Snow.__super__ = particles.Particle_Base
particles.Particle_Snow.prototype = z(particles.Particle_Base.prototype, {
    update: function () {
        if (!this.game.get_pawsed()) {
            1 > this.alpha && (this.alpha += .05);
            this.rotation += this.rot / 5 / 2;
            this.y += this.speed / 30 / 2;
            var b = -Math.round(this.y) - 1;
            if (0 >= this.life--) {
                this.remove();
                return;
            }
            if ("air" != this.world.getFG(this.bX, b) && null == BlockData.get(this.world.getFG(this.bX, b), "walkThroughBlock") || null != BlockData.get(this.world.getFG(this.bX, b), "liquid")) {
                null == BlockData.get(this.world.getFG(this.bX - 1, b + 1), "walkThroughBlock") && null == BlockData.get(this.world.getFG(this.bX + 1, b + 1), "walkThroughBlock") && .5 <= this.alpha && ("air" == this.world.getFG(this.bX, b + 1) || "snow" == this.world.getFG(this.bX, b + 1)) && 1 == Math.floor(20 * Math.random()) && this.world.setFG(this.bX, b + 1, "snowblock");
                "wr" == this.world.getFG(this.bX, b) && "air" == this.world.getFG(this.bX, b + 1) && 1 == Math.floor(20 * Math.random()) && this.world.setFG(this.bX, b, "ice");
                "la" != this.world.getFG(this.bX, b) && "ad" != this.world.getFG(this.bX, b) || 1 != Math.floor(20 * Math.random()) || (this.world.setFG(this.bX, b, "ob"), this.game.requestSound("sizzle", this.x - this.world.worldX, this.y - this.world.worldY), 1 < GlobalSave.particles && this.game.addParticles("smoke", 3, 0, new lemongine.Point(this.x, 0), new lemongine.Point(this.y - 1, 0), !0));
                null == BlockData.get(this.world.getFG(this.bX, b), "liquid") && "air" == this.world.getFG(this.bX, b + 1) && 1 == Math.floor(20 * Math.random()) && this.world.setFG(this.bX, b + 1, "snow");
                this.remove();
                return;
            }
        }
        this.texture = Textures.getTexture("particle_snow", Std.string(this.frame));
        particles.Particle_Base.entityMatrix.reset().translate(-.08333333333333333, -.08333333333333333).rotate2D(this.rotation / 180 * Math.PI).scale2D(this.scale).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        b = this.entity;
        var a = this.quadPosition,
            c = new lemongine.Point(this.texture.x, this.texture.y),
            d = new lemongine.Point(this.texture.width, this.texture.height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .16666666666666666, .16666666666666666), particles.Particle_Base.entityMatrix),
            l = new haxe.ds.StringMap(),
            h = lemongine.Mathz.repeatArray([1, 1, 1, Math.min(1, this.alpha)], 6);
        l.h.color = h;
        b.updateQuad(a, null, c, d, null, f, null, l);
    },
    __class__: particles.Particle_Snow
})