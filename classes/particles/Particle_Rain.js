particles.Particle_Rain = function (b, a, c, d) {
    this.bX = this.bY = this.endY = this.distY = 0;
    particles.Particle_Base.call(this, b, a, c, d);
    this.bX = Math.round(b + .5) - 1;
    this.bY = -Math.round(a) - 1;
    for (b = this.endY = 0; 51 > b;) if (a = b++, "air" != d.getFG(this.bX, this.bY - a) && (null == BlockData.get(d.getFG(this.bX, this.bY - a), "walkThroughBlock") && ("lv" != HxOverrides.substr(d.getFG(this.bX, this.bY - a), 0, 2) || 1 == (2 * Math.random() | 0)) || null != BlockData.get(d.getFG(this.bX, this.bY - a), "liquid"))) {
        this.endY = this.bY - a;
        break;
    }
    this.distY = this.bY - this.endY;
    this.endY >= this.bY && this.remove();
}
m["particles.Particle_Rain"] = particles.Particle_Rain
particles.Particle_Rain.__name__ = "particles.Particle_Rain"
particles.Particle_Rain.__super__ = particles.Particle_Base
particles.Particle_Rain.prototype = z(particles.Particle_Base.prototype, {
    update: function () {
        if (!this.game.get_pawsed() && (this.y += (20 + (10 * Math.random() | 0)) / 30 / 2, this.x += ((20 * Math.random() | 0) - 9) / 30 / 2, -Math.round(this.y) - 1 <= this.endY)) {
            this.bX = Math.round(this.x + .5) - 1;
            this.bY = -Math.round(this.y) - 1;
            "fire" == this.world.getFG(this.bX, this.bY) && (this.game.requestRemove(this.bX, this.bY, !0, !1, !0), this.game.requestSound("sizzle", this.x - this.world.worldX, this.y - this.world.worldY), 1 < GlobalSave.particles && this.game.addParticles("smoke", 3, 0, new lemongine.Point(this.x, 0), new lemongine.Point(this.y - 1, 0), !0));
            "dt" == this.world.getFG(this.bX - 1, this.bY + 1) && "dt" == this.world.getFG(this.bX + 1, this.bY + 1) && "dt" == this.world.getFG(this.bX, this.bY) && "air" == this.world.getFG(this.bX, this.bY + 1) && 1 == (50 * Math.random() | 0) && this.world.setFG(this.bX, this.bY + 1, "wr");
            ("la" == this.world.getFG(this.bX, this.bY) || "magma" == this.world.getFG(this.bX, this.bY)) && .1 > Math.random() && (.1 > Math.random() && this.game.requestSound("sizzle", this.x - this.world.worldX, this.y - this.world.worldY), 1 < GlobalSave.particles && this.game.addParticles("smoke", 1, 0, new lemongine.Point(this.x, 0), new lemongine.Point(this.y - 1, 0), !0));
            2 < this.distY && this.game.closeRains.push([30 * (this.x - this.world.worldX), 30 * (this.y - this.world.worldY)]);
            "air" != this.world.getFG(this.bX, this.bY + 1) || "r" != this.world.getFG(this.bX, this.bY) && "cs" != this.world.getFG(this.bX, this.bY) || 1 != (400 * Math.random() | 0) || this.world.setFG(this.bX, this.bY + 1, "moss");
            1 < GlobalSave.particles && 1 == (3 * Math.random() | 0) && this.game.addParticles("water", 1, 0, new lemongine.Point(this.x, 0), new lemongine.Point(this.y, 0), !0);
            if (.3333333333333333 > Math.random()) for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
                var d = b[c++];
                if (null != this.game.getMob(d)) if ("enderman" == this.world.mobs.h[d].h.type) {
                    var f = this.x,
                        g = this.y - .3333333333333333;
                    this.game.getMob(d).mobCollisionPoint(d, new lemongine.Point(f, g)) && this.game.getMob(d).hurtMob(d, 1);
                } else Object.prototype.hasOwnProperty.call(this.world.onFire.h, d) && (f = this.x, g = this.y - .3333333333333333, this.game.getMob(d).mobCollisionPoint(d, new lemongine.Point(f, g)) && (f = this.world.onFire, Object.prototype.hasOwnProperty.call(f.h, d) && delete f.h[d]));
            }
            this.remove();
            return;
        }
        this.texture = Textures.getTexture("particle_rain");
        particles.Particle_Base.entityMatrix.reset().translate(-.016666666666666666, -.8).scale(1.5, 1).translate(Math.floor(this.x * this.game.zoom) / this.game.zoom, Math.floor(this.y * this.game.zoom) / this.game.zoom);
        this.entity.updateQuad(this.quadPosition, null, new lemongine.Point(this.texture.x, this.texture.y), new lemongine.Point(this.texture.width, this.texture.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .03333333333333333, .8), particles.Particle_Base.entityMatrix));
    },
    __class__: particles.Particle_Rain
})