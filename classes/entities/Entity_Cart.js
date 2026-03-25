entities.Entity_Cart = function (b, a, c, d, f, g) {
    this.entityMatrix = new lemongine.Matrix4();
    this.currentFrame = 1;
    this.rotation = 0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Cart"] = entities.Entity_Cart
entities.Entity_Cart.__name__ = "entities.Entity_Cart"
entities.Entity_Cart.__super__ = entities.Entity_Base
entities.Entity_Cart.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        entities.Entity_Base.prototype.init.call(this);
    },
    run: function () {
        if (this.onScreen(5)) {
            0 == this.world.tick % (60 * Main.Instance.get_fps() / 25) && this.set_health(Math.min(this.get_health() + 1, 3) | 0);
            this.set_tilt(this.get_tilt() + Game.migrateAcc(-this.rotation / 10, .93));
            this.set_tilt(this.get_tilt() * Game.migrateDampening(.93));
            this.rotation += Game.migrateSpeed(this.get_tilt());
            if (0 == this.world.tick % 10) {
                var b = this.world.getFG(Math.floor(this.get_x()), Math.floor(-this.get_y()));
                "la" == b || "ad" == b ? (this.set_health(0), this.game.requestSound("sizzle", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY), this.game.addParticles("smoke", 1, 1, new lemongine.Point(this.get_x() - .5, .5), new lemongine.Point(this.get_y() - .5, .5))) : "ct" == b && this.set_health(0);
            }
            if (0 >= this.get_health()) {
                1 != this.world.gamemode && this.game.addDrop("cart" + this.get_type(), this.get_x(), this.get_y() - .5, 1, null, null);
                if ("chest" == this.get_type() && null != this.world.chests.h[this.id]) {
                    for (b = 0; 27 > b;) {
                        var a = b++;
                        this.game.addDrop(this.world.chests.h[this.id][a][0], this.get_x(), this.get_y() - .5, this.world.chests.h[this.id][a][1], this.world.chests.h[this.id][a][2], this.world.chests.h[this.id][a][3]);
                    }
                    b = this.id;
                    a = this.world.chests;
                    Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
                }
                this.remove();
            } else {
                b = this.cartRailAt(this.get_x(), this.get_y());
                this.set_onRail(b.h.direction);
                "railp" == b.h.type && (0 < this.world.states.h["blockX" + Std.string(b.h.blockX) + "Y" + Std.string(b.h.blockY)][1][0] ? (this.set_speedX(Math.min(entities.Entity_Cart.maxCartSpeed, Math.max(-entities.Entity_Cart.maxCartSpeed, this.get_speedX() * Game.migrateDampening(1.05)))), this.set_speedY(Math.min(entities.Entity_Cart.maxCartSpeed, Math.max(-entities.Entity_Cart.maxCartSpeed, this.get_speedY() * Game.migrateDampening(1.05))))) : (this.set_speedX(this.get_speedX() * Game.migrateDampening(.7)), this.set_speedY(this.get_speedY() * Game.migrateDampening(.7)), Math.abs(this.get_speedX()) < Game.migrateSpeed(.13) && Math.abs(this.get_speedY()) < Game.migrateSpeed(.13) && this.set_speedX(this.set_speedY(0))));
                "raild" == b.h.type && null != this.world.getBlock(b.h.blockX, b.h.blockY, !1) && (js.Boot.__cast(this.world.getBlock(b.h.blockX, b.h.blockY, !1), blocks.Block_RailDetector).cartHere = !0, js.Boot.__cast(this.world.getBlock(b.h.blockX, b.h.blockY, !1), blocks.Block_RailDetector).updateState());
                "raila" == b.h.type ? 0 < this.world.states.h["blockX" + Std.string(b.h.blockX) + "Y" + Std.string(b.h.blockY)][1][0] && (0 == this.get_onActivator() && ("" == this.get_type() ? this.world.riding == this.id && (this.world.riding = "", this.set_riddenBy(""), this.set_tilt(Game.migrateSpeed(10))) : "TNT" == this.get_type() && (this.set_fuse(4 * Main.Instance.get_fps()), this.game.requestSound("fuse", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY))), this.set_onActivator(!0)) : this.set_onActivator(!1);
                if ("TNT" == this.get_type() && null != this.get_fuse() && (this.set_fuse(this.get_fuse() - 1), 0 >= this.get_fuse())) {
                    this.game.explode(Math.floor(this.get_x()), Math.floor(-this.get_y()), 5, !1);
                    this.remove();
                    return;
                }
                if (0 == this.get_onRail()) if (this.game.collision(this.get_x() - .3333333333333333, this.get_y(), .6666666666666666, .03333333333333333, .16666666666666666, !1)) this.set_speedY(0), this.set_speedX(this.get_speedX() * Game.migrateDampening(.93));else {
                    b = !1;
                    a = Object.keys(this.world.carts.h);
                    for (var c = a.length, d = 0; d < c;) {
                        var f = a[d++];
                        if (f != this.id && .9333333333333333 > Math.abs(this.world.carts.h[f].h.x - this.get_x()) && Math.abs(this.world.carts.h[f].h.y - (Game.migrateSpeed(30) + this.get_speedY()) / 30 - this.get_y()) < (Game.migrateSpeed(5) + this.get_speedY()) / 30) {
                            this.set_y(this.world.carts.h[f].h.y - .8666666666666667);
                            this.set_speedX(this.get_speedX() * Game.migrateDampening(.8));
                            this.set_speedY(0);
                            b = !0;
                            break;
                        }
                    }
                    b || this.set_speedY(Math.min(2 * entities.Entity_Cart.maxCartSpeed, this.get_speedY() + Game.migrateAcc(.5, .99)));
                }
                this.cartMove(this.id);
                this.set_speedX(this.get_speedX() * Game.migrateDampening(.99));
                this.set_speedY(this.get_speedY() * Game.migrateDampening(.99));
                "" == this.get_type() && this.get_riddenBy() == this.world.player.id ? this.world.riding != this.id ? this.set_riddenBy("") : (this.world.worldX = this.get_x(), b = this.get_y(), this.world.worldY = b + .3333333333333333, this.game.resetCamera(), this.game.rightKey && this.set_speedX(Math.min(entities.Entity_Cart.maxCartSpeed, this.get_speedX() + Game.migrateAcc(.07, .99))), this.game.leftKey && this.set_speedX(Math.max(-entities.Entity_Cart.maxCartSpeed, this.get_speedX() - Game.migrateAcc(.07, .99))), this.game.upKey && (this.world.ySpeed = this.get_speedY(), b = this.get_speedX(), this.world.xSpeed = .7 * b, this.world.riding = "", this.set_riddenBy(""))) : (null != this.get_fuel() && (0 >= this.get_fuel() || null == this.get_direction() ? null == this.get_direction() && this.set_direction(0 < this.get_speedX() ? 1 : -1) : Math.abs(this.get_speedX()) < Game.migrateSpeed(3) && (.2 > Math.random() && this.game.addParticles("smoke", 1, 0, new lemongine.Point(this.get_x(), 0), new lemongine.Point(this.get_y() - .8333333333333334, 0)), this.set_speedX(this.get_speedX() + Game.migrateAcc(.4 * this.get_direction(), .99)), 0 == this.world.tick % (3 * Main.Instance.get_fps()) && this.set_fuel(this.get_fuel() - 1))), 3 != this.world.gamemode && .6666666666666666 > Math.abs(this.world.worldX - this.get_x()) && .6666666666666666 > Math.abs(this.world.worldY - this.get_y()) && 0 != this.world.worldX - this.get_x() && 0 == this.game.sneaking && (this.set_speedX(Math.min(entities.Entity_Cart.maxCartSpeed, Math.max(-entities.Entity_Cart.maxCartSpeed, this.get_speedX() - Game.migrateAcc(Math.min(2, Math.max(-2, .03333333333333333 / (this.world.worldX - this.get_x()))), .99)))), this.set_direction(0 < this.get_speedX() ? 1 : -1)), this.world.riding == this.id && (this.world.riding = ""));
                this.render();
            }
        }
    },
    cartMove: function (b) {
        var a = Math.ceil(Math.max(1, Math.abs(this.get_speedX() / 3)));
        if (0 == a) {
            var c = this.cartRailAt(this.get_x(), this.get_y());
            1 == this.get_onRail() ? (this.set_y(-c.h.blockY - .1), this.set_speedY(0)) : 2 == this.get_onRail() ? (this.set_y(-c.h.blockY - (1 - lemongine.Mathz.modulus(this.get_x(), 1)) - .1), this.set_speedX(Math.min(entities.Entity_Cart.maxCartSpeed, this.get_speedX() + Game.migrateAcc(.1, .99))), this.set_speedY(this.get_speedX())) : 3 == this.get_onRail() ? (this.set_y(-c.h.blockY - lemongine.Mathz.modulus(this.get_x(), 1) - .1), this.set_speedX(Math.max(-entities.Entity_Cart.maxCartSpeed, this.get_speedX() - Game.migrateAcc(.1, .99))), this.set_speedY(-this.get_speedX())) : this.set_y(this.get_y() + this.get_speedY());
        } else {
            for (var d = this.get_speedX() / a, f = 0; f < a;) {
                ++f;
                this.set_x(this.get_x() + d / 30);
                c = this.cartRailAt(this.get_x(), this.get_y());
                this.set_onRail(c.h.direction);
                if (0 > this.get_speedX() && this.game.collision(this.get_x() - .4666666666666667, this.get_y() - .6, .03333333333333333, .03333333333333333, .03333333333333333, !1)) {
                    this.set_x(this.get_x() - d / 30);
                    this.set_speedX(-.6 * this.get_speedX());
                    break;
                } else if (0 < this.get_speedX() && this.game.collision(this.get_x() + .4666666666666667, this.get_y() - .6, .03333333333333333, .03333333333333333, .03333333333333333, !1)) {
                    this.set_x(this.get_x() - d / 30);
                    this.set_speedX(-.6 * this.get_speedX());
                    break;
                }
                if (0 != c.h.direction) {
                    var g = this.cartCollision(b);
                    if ("" != g) {
                        this.set_x(this.get_x() - d / 30);
                        b = this.get_speedX();
                        a = this.world.carts.h[g].h.speedX;
                        this.set_speedX(.8 * a + .2 * b);
                        this.world.carts.h[g].h.speedX = .8 * b + .2 * a;
                        c = this.cartRailAt(this.get_x(), this.get_y());
                        this.set_onRail(c.h.direction);
                        1 == this.get_onRail() ? (this.set_y(-c.h.blockY - .1), this.set_speedY(0)) : 2 == this.get_onRail() ? (this.set_y(-c.h.blockY - (1 - lemongine.Mathz.modulus(this.get_x(), 1)) - .1), this.set_speedY(this.get_speedX())) : 3 == this.get_onRail() && (this.set_y(-c.h.blockY - lemongine.Mathz.modulus(this.get_x(), 1) - .1), this.set_speedY(-this.get_speedX()));
                        break;
                    }
                }
                1 == this.get_onRail() ? (this.set_y(-c.h.blockY - .1), this.set_speedY(0)) : 2 == this.get_onRail() ? (this.set_y(-c.h.blockY - (1 - lemongine.Mathz.modulus(this.get_x(), 1)) - .1), this.set_speedY(this.get_speedX())) : 3 == this.get_onRail() ? (this.set_y(-c.h.blockY - lemongine.Mathz.modulus(this.get_x(), 1) - .1), this.set_speedY(-this.get_speedX())) : this.set_y(this.get_y() + this.get_speedY() / 30 / a);
            }
            2 == this.get_onRail() ? (this.set_speedX(Math.min(entities.Entity_Cart.maxCartSpeed, this.get_speedX() + Game.migrateAcc(.1, .99))), this.set_speedY(this.get_speedX())) : 3 == this.get_onRail() && (this.set_speedX(Math.max(-entities.Entity_Cart.maxCartSpeed, this.get_speedX() - Game.migrateAcc(.1, .99))), this.set_speedY(-this.get_speedX()));
        }
    },
    cartCollision: function (b) {
        for (var a = Object.keys(this.world.carts.h), c = a.length, d = 0; d < c;) {
            var f = a[d++];
            if (f != b) {
                var g = this.world.carts.h[f];
                if (1.0666666666666667 > Math.abs(g.h.x - this.get_x()) && Math.abs(g.h.y - this.get_y()) < (24 - (1 == this.get_onRail() ? 8 : 0)) / 30 && 0 < g.h.x - this.get_x() == 0 < this.get_speedX() - g.h.speedX && 0 < this.get_speedX() == this.get_x() < g.h.x) return f;
            }
        }
        return "";
    },
    cartRailAt: function (b, a) {
        a += .1;
        var c = 0,
            d = "";
        b = Math.floor(b);
        for (var f = 0, l = 0; 3 > l;) if (f = Math.floor(-(a + 6 * (l++ - 1) / 30)), d = this.world.getFG(b, f), "rail" == HxOverrides.substr(d, 0, 4)) {
            c = this.world.states.h["blockX" + b + "Y" + f][0];
            break;
        }
        l = new haxe.ds.StringMap();
        l.h.direction = c;
        l.h.type = d;
        l.h.blockX = b;
        l.h.blockY = f;
        return l;
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 2);
        0 == this.get_onRail() ? this.currentFrame = 1 : 1 <= this.get_onRail() && 3 >= this.get_onRail() && (1 == this.currentFrame || this.get_speedX() * this.get_speedX() + this.get_speedY() * this.get_speedY() > Game.migrateSpeed(.22) * Game.migrateSpeed(.22) || 0 == this.world.tick % Main.Instance.get_fps()) && (this.currentFrame = this.get_onRail());
        "TNT" == this.get_type() || "chest" == this.get_type() || "oven" == this.get_type() ? (this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(1.818916875).translate(0, -.38999999999999996).rotate2D(-(this.rotation + (1 == this.currentFrame ? 0 : 2 == this.currentFrame ? 45 : -45)) / 180 * Math.PI).translate((1 == this.currentFrame ? 0 : 2 == this.currentFrame ? 6.4 : -6.4) / 30, -.42).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor(this.get_y() * this.game.zoom) / this.game.zoom), b = Textures.getTexture(BlockData.get("cart" + this.get_type(), "secondaryTextureID")), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix))) : this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(), new lemongine.Point());
        this.entityMatrix.reset().translate(-.5333333333333333, -.3333333333333333).scale2D(1.821747).rotate2D(-(this.rotation + (1 == this.currentFrame ? 0 : 2 == this.currentFrame ? 45 : -45)) / 180 * Math.PI).translate((1 == this.currentFrame ? 0 : 2 == this.currentFrame ? 6.4 : -6.4) / 30, -.42).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor(this.get_y() * this.game.zoom) / this.game.zoom);
        b = Textures.getTexture("minecart");
        this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 1.0666666666666667, .5333333333333333), this.entityMatrix));
    },
    getData: function (b) {
        return js.Boot.__cast(this.data, haxe.ds.StringMap).h[b];
    },
    setData: function (b, a) {
        return js.Boot.__cast(this.data, haxe.ds.StringMap).h[b] = a;
    },
    get_x: function () {
        return this.getData("x");
    },
    set_x: function (b) {
        return this.setData("x", b);
    },
    get_y: function () {
        return this.getData("y");
    },
    set_y: function (b) {
        return this.setData("y", b);
    },
    get_speedX: function () {
        return this.getData("speedX");
    },
    set_speedX: function (b) {
        return this.setData("speedX", b);
    },
    get_speedY: function () {
        return this.getData("speedY");
    },
    set_speedY: function (b) {
        return this.setData("speedY", b);
    },
    get_riddenBy: function () {
        return this.getData("riddenBy");
    },
    set_riddenBy: function (b) {
        return this.setData("riddenBy", b);
    },
    get_onActivator: function () {
        return this.getData("onActivator");
    },
    set_onActivator: function (b) {
        return this.setData("onActivator", b);
    },
    get_type: function () {
        return this.getData("type");
    },
    get_health: function () {
        return this.getData("health");
    },
    set_health: function (b) {
        return this.setData("health", b);
    },
    get_tilt: function () {
        return this.getData("tilt");
    },
    set_tilt: function (b) {
        return this.setData("tilt", b);
    },
    get_onRail: function () {
        return this.getData("onRail");
    },
    set_onRail: function (b) {
        return this.setData("onRail", b);
    },
    get_fuse: function () {
        return this.getData("fuse");
    },
    set_fuse: function (b) {
        return this.setData("fuse", b);
    },
    get_fuel: function () {
        return this.getData("fuel");
    },
    set_fuel: function (b) {
        return this.setData("fuel", b);
    },
    get_direction: function () {
        return this.getData("direction");
    },
    set_direction: function (b) {
        return this.setData("direction", b);
    },
    __class__: entities.Entity_Cart
})
entities.Entity_Cart.maxCartSpeed = Game.migrateSpeed(20)