entities.Entity_Lightning = function (b, a, c, d, f, g) {
    this.graphicOps = [];
    this.playing = !1;
    this.currentFrame = 1;
    this.explicitPosition = !1;
    this.startX = this.startY = this.endX = this.endY = 0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Lightning"] = entities.Entity_Lightning
entities.Entity_Lightning.__name__ = "entities.Entity_Lightning"
entities.Entity_Lightning.__super__ = entities.Entity_Base
entities.Entity_Lightning.prototype = z(entities.Entity_Base.prototype, {
    init: function () {},
    doAt: function (b, a) {
        this.explicitPosition = !0;
        this.startX = b;
        this.startY = Math.max(a + 10, Math.floor(-this.game.clouds.y + 2)) | 0;
        this.endX = b;
        this.endY = a - 1;
        this.gotoAndPlay(2);
    },
    gotoAndPlay: function (b) {
        this.currentFrame = 2 * b - 1;
        this.playing = !0;
    },
    play: function () {
        this.playing = !0;
    },
    randomizeLightningPosition: function () {
        this.startX = this.game.blockX + ((20 * Math.random() | 0) - 9);
        this.startY = Math.floor(-this.game.clouds.y + 2);
        this.endX = this.startX;
        this.endY = this.startY;
        for (var b = 4, a = 0; 40 >= a;) {
            --this.endY;
            if (1 != BlockData.get(this.world.getFG(this.endX, this.endY), "walkThroughBlock")) return !0;
            if (10 > this.endY || 40 == a) if (--b, 0 >= b) break;else {
                this.endX = this.startX = this.game.blockX + ((20 * Math.random() | 0) - 9);
                this.endY = this.startY;
                a = 0;
                continue;
            }
            ++a;
        }
        return !1;
    },
    makeBolt: function () {
        this.graphicOps.push({
            move: !0,
            x: this.startX,
            y: -this.startY
        });
        for (var b = 0; 50 > b;) {
            var a = b++,
                c = (30 * (this.startX + (this.endX - this.startX) * a / 50) + (Math.random() - .5) * (this.endY - this.startY) * 2) / 30;
            a = (30 * -(this.startY + (this.endY - this.startY) * a / 50) + (Math.random() - .5) * (this.endY - this.startY)) / 30;
            this.graphicOps.push({
                move: !1,
                x: c,
                y: a
            });
            .2 > Math.random() && this.strag(c, a, Math.random() - .5, Math.random() / 2, 15);
        }
    },
    strag: function (b, a, c, d, f) {
        var g = b,
            k = a;
        Math.random();
        for (var h = Math.random() * f + f / 2 | 0; 0 <= h;) c += .1 * Math.random() - .05, d += .1 * Math.random() - .05, g += 5 * c / 30, k += 5 * d / 30, this.graphicOps.push({
            move: !1,
            x: g,
            y: k
        }), .1 > Math.random() && this.strag(g, k, c + .3 * Math.random() - .15, d + .3 * Math.random() - .15, f / 2), --h;
        this.graphicOps.push({
            move: !0,
            x: b,
            y: a
        });
    },
    run: function () {
        if (3 == this.currentFrame) {
            -this.world.worldY < this.startY && this.game.requestSound("closeThunder" + ((4 * Math.random() | 0) + 1), 0, 0);
            if (!this.explicitPosition && !this.randomizeLightningPosition()) {
                this.remove();
                return;
            }
            this.game.requestSound("boom", this.endX - this.world.worldX, -this.endY - this.world.worldY, 1, 1);
            3 != this.world.gamemode && 2 > Math.abs(this.world.worldX - this.endX) && 2 > Math.abs(this.world.worldY + this.endY + 1) && (this.world.worldX < this.endX ? this.world.xSpeed += Game.migrateSpeed(20) : this.world.worldX > this.endX && (this.world.xSpeed -= Game.migrateSpeed(20)), this.world.worldY -= .3333333333333333, this.world.ySpeed = Game.migrateSpeed(20), this.game.ouch(2, 5, "lightning"), this.game.addParticles("smoke2", 0, 5, new lemongine.Point(this.world.worldX - .16666666666666666, .3333333333333333 * Math.random()), new lemongine.Point(this.world.worldY - .16666666666666666, .3333333333333333 * Math.random())));
            for (var b = Object.keys(this.world.mobs.h), a = b.length, c = 0; c < a;) {
                var d = b[c++];
                2 > Math.abs(this.world.mobs.h[d].h.x - this.endX) && 2 > Math.abs(this.world.mobs.h[d].h.y + this.endY + 1) && ("pig" == this.world.mobs.h[d].h.type || "creeper" == this.world.mobs.h[d].h.type ? this.game.transformMobs.h[d] = !0 : (null != this.game.getMob(d) && this.game.getMob(d).hurtMob(d, 5, "lightning"), this.game.addParticles("smoke2", 0, 5, new lemongine.Point(this.world.mobs.h[d].h.x - .16666666666666666, .3333333333333333 * Math.random()), new lemongine.Point(this.world.mobs.h[d].h.y - .16666666666666666, .3333333333333333 * Math.random()))));
            }
            this.makeBolt();
        }
        5 == this.currentFrame && (this.graphicOps = []);
        7 == this.currentFrame && this.makeBolt();
        11 == this.currentFrame && (this.graphicOps = [], this.makeBolt());
        13 == this.currentFrame && (this.graphicOps = []);
        14 < this.currentFrame ? this.remove() : (this.render(), this.playing && this.currentFrame++);
    },
    render: function (b) {
        this.game.vectorRenderer.beginPath();
        this.game.vectorRenderer.lineStyle(this.game.zoom / 30 * 3, new lemongine.Color(2009923413));
        b = 0;
        for (var a = this.graphicOps; b < a.length;) {
            var c = a[b];
            ++b;
            1 == c.move ? this.game.vectorRenderer.moveTo((c.x - this.game.camera.x) * this.game.zoom + this.game.scene.get_width() / 2, (c.y - this.game.camera.y) * this.game.zoom + this.game.scene.get_height() / 2) : this.game.vectorRenderer.lineTo((c.x - this.game.camera.x) * this.game.zoom + this.game.scene.get_width() / 2, (c.y - this.game.camera.y) * this.game.zoom + this.game.scene.get_height() / 2);
        }
        this.game.vectorRenderer.stroke();
        this.game.vectorRenderer.endPath();
    },
    __class__: entities.Entity_Lightning
})