entities.Entity_Dirt_Ball = function (b, a, c, d, f, g) {
    this._x = this._y = 0;
    this.entityMatrix = new lemongine.Matrix4();
    this.ownerMemberID = "";
    this.xSpeed = this.ySpeed = 0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Dirt_Ball"] = entities.Entity_Dirt_Ball
entities.Entity_Dirt_Ball.__name__ = "entities.Entity_Dirt_Ball"
entities.Entity_Dirt_Ball.__super__ = entities.Entity_Base
entities.Entity_Dirt_Ball.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        this.entityPoolID = "projectile";
    },
    run: function () {
        for (var b = 0, a = ScavengerManager.members; b < a.length;) {
            var c = a[b];
            ++b;
            if (c.id != this.ownerMemberID && 1.5 > lemongine.Mathz.distance(c.mobData.h.x - this.get_x(), c.mobData.h.y - 1 - this.get_y())) {
                this.ownerMemberID == ScavengerManager.userMember.id && ScavengerManager.packetToServer_destroyDirtBall(HxOverrides.substr(this.id, 8, null), !0);
                this.game.requestSound("scavengerDirtBallHit", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
                this.game.addParticles("spark", 5, 3, new lemongine.Point(this.get_x() - .5, 1), new lemongine.Point(this.get_y() - .5, 1));
                this.remove();
                return;
            }
        }
        if (this.ownerMemberID == ScavengerManager.userMember.id) {
            b = Object.keys(this.world.mobs.h);
            a = b.length;
            for (c = 0; c < a;) {
                var d = b[c++];
                if (Math.round(this.world.mobs.h[d].h.x / 80 * 30) == Math.round(this.get_x() / 80 * 30) && Math.round(this.world.mobs.h[d].h.y / 80 * 30) == Math.round(this.get_y() / 80 * 30)) {
                    ScavengerManager.packetToServer_destroyDirtBall(HxOverrides.substr(this.id, 8, null), !1);
                    this.game.requestSound("scavengerDirtBallMiss", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
                    this.remove();
                    return;
                }
            }
            if (this.game.collision(this.get_x(), this.get_y(), .03333333333333333, .03333333333333333, .03333333333333333, !1) || this.game.collision(this.get_x() + this.xSpeed / 2 / 30, this.get_y() + this.ySpeed / 2 / 30, .03333333333333333, .03333333333333333, .03333333333333333, !1)) {
                ScavengerManager.packetToServer_destroyDirtBall(HxOverrides.substr(this.id, 8, null), !1);
                this.game.requestSound("scavengerDirtBallMiss", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
                this.remove();
                return;
            }
        } else if (Math.round(this.world.worldX) == Math.round(this.get_x()) && Math.round((this.world.worldY - 1) / 80 * 30) == Math.round(this.get_y() / 80 * 30) && -1E3 == ScavengerManager.getMember(this.ownerMemberID).mobData.h.x && -1E3 == ScavengerManager.getMember(this.ownerMemberID).mobData.h.y) {
            ScavengerManager.packetToServer_destroyDirtBall(HxOverrides.substr(this.id, 8, null), !0);
            this.game.requestSound("scavengerDirtBallHit", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY, 1, 1);
            this.game.addParticles("spark", 5, 3, new lemongine.Point(this.get_x() - .5, 1), new lemongine.Point(this.get_y() - .5, 1));
            this.remove();
            return;
        }
        this.ySpeed += Game.migrateAcc(.5, 1);
        this.set_x(this.get_x() + this.xSpeed / 30);
        this.set_y(this.get_y() + this.ySpeed / 30);
        this.render();
    },
    remove: function () {
        var b = this.game,
            a = new lemongine.Point(this.get_x() - .2, .4),
            c = new lemongine.Point(this.get_y() - .2, .4),
            d = new haxe.ds.StringMap();
        d.h.color = [.5, .15, .05];
        b.addParticles("mining", 2, 8, a, c, !1, d);
        entities.Entity_Base.prototype.remove.call(this);
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 1);
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).translate((30 * this.get_x() | 0) / 30, (30 * this.get_y() | 0) / 30);
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("dirt_ball").x, Textures.getTexture("dirt_ball").y), new lemongine.Point(Textures.getTexture("dirt_ball").width, Textures.getTexture("dirt_ball").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
    },
    get_x: function () {
        return this._x;
    },
    set_x: function (b) {
        return this._x = b;
    },
    get_y: function () {
        return this._y;
    },
    set_y: function (b) {
        return this._y = b;
    },
    __class__: entities.Entity_Dirt_Ball
})