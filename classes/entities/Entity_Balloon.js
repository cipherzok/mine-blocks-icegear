entities.Entity_Balloon = function (b, a, c, d, f, g) {
    this.balloonMatrix = new lemongine.Matrix4();
    this.entityMatrix = new lemongine.Matrix4();
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Balloon"] = entities.Entity_Balloon
entities.Entity_Balloon.__name__ = "entities.Entity_Balloon"
entities.Entity_Balloon.__super__ = entities.Entity_Base
entities.Entity_Balloon.prototype = z(entities.Entity_Base.prototype, {
    init: function () {
        if (null != this.get_type() && "ghast" != this.get_type()) {
            var b = Colors.colors,
                a = this.get_type();
            if (Object.prototype.hasOwnProperty.call(b.h, a)) {
                var c = new lemongine.Color();
                b = Colors.colors;
                a = this.get_type();
                var d = b.h[a].h.r;
                b = Colors.colors;
                a = this.get_type();
                var f = b.h[a].h.g;
                b = Colors.colors;
                a = this.get_type();
                this.color = c.fromRGB(d, f, b.h[a].h.b);
            }
        }
    },
    run: function () {
        this.onScreen(5);
        if (null != this.get_inventory()) {
            if (this.get_inventory().h.slot != this.world.selectedInventoryItem || "bl" != this.world.get_selectedInventoryItemType() || BlockData.get("bl", "life") - this.world.getInventoryItemDamage(this.get_inventory().h.slot) < this.get_life()) var b = !0;else {
                var a = this.get_type(),
                    c = this.world.get_selectedInventoryItemExtra();
                b = a != (Object.prototype.hasOwnProperty.call(c.h, "type") ? this.world.get_selectedInventoryItemExtra().h.type : "white");
            }
            if (b) {
                this.remove();
                return;
            }
        }
        a = new lemongine.Point(0, 0);
        if (null != this.get_attached() && "Object" == lemongine.Helpers.getQualifiedClassName(this.get_attached())) {
            if (this.get_attached().h.id == this.world.player.id) this.set_stringX(this.world.worldX - .26666666666666666 * this.game.characterXScale), this.set_stringY(this.world.worldY - .8666666666666667);else if ("mob" == this.get_attached().h.type) {
                c = this.world.mobs;
                var d = this.get_attached().h.id;
                if (null != c.h[d]) {
                    c = this.world.mobs;
                    d = this.get_attached().h.id;
                    b = js.Boot.__cast(js.Boot.__cast(c.h[d], haxe.ds.StringMap).h.x, ie);
                    c = this.world.mobs;
                    d = this.get_attached().h.id;
                    var f = js.Boot.__cast(js.Boot.__cast(c.h[d], haxe.ds.StringMap).h.speedX, ie);
                    c = this.world.mobs;
                    d = this.get_attached().h.id;
                    this.set_stringX(b + (f + (0 < js.Boot.__cast(js.Boot.__cast(c.h[d], haxe.ds.StringMap).h.direction, $i) ? 10 : -10)) / 30);
                    c = this.world.mobs;
                    d = this.get_attached().h.id;
                    b = js.Boot.__cast(js.Boot.__cast(c.h[d], haxe.ds.StringMap).h.y, ie);
                    c = this.world.mobs;
                    d = this.get_attached().h.id;
                    this.set_stringY(b + js.Boot.__cast(js.Boot.__cast(c.h[d], haxe.ds.StringMap).h.speedY, ie) / 30 - 1);
                } else this.set_attached(null);
            } else "block" == this.get_attached().h.type && ("fnc" == this.world.getFG(this.get_attached().h.x, this.get_attached().h.y) || "nfnc" == this.world.getFG(this.get_attached().h.x, this.get_attached().h.y) ? (this.set_stringX((30 * this.get_attached().h.x + 15) / 30), this.set_stringY((30 * -this.get_attached().h.y - 30) / 30)) : this.set_attached(null));
            this.set_flightTimer(0);
            c = Math.atan2(this.get_y() - this.get_stringY(), this.get_x() - this.get_stringX());
            b = Math.sqrt(Math.pow(this.get_x() - this.get_stringX(), 2) + Math.pow(this.get_y() - this.get_stringY(), 2));
            4 < b && (this.set_speedX(this.get_speedX() + Game.migrateAcc((this.get_stringX() + 4 * Math.cos(c) - this.get_x()) / .5, .9)), this.set_speedY(this.get_speedY() + Game.migrateAcc((this.get_stringY() + 4 * Math.sin(c) - this.get_y()) / .5, .9)), a.x += (this.get_stringX() + 4 * Math.cos(c) - this.get_x()) / .06666666666666667, a.y += (this.get_stringY() + 4 * Math.sin(c) - this.get_y()) / .06666666666666667);
            if (8 < b) {
                null != this.get_inventory() && this.get_inventory().h.of == this.world.player.id && this.world.setInventoryItem(this.get_inventory().h.slot, Game.emptyItem());
                this.set_attached(null);
                this.set_inventory(null);
                c = this.world.balloons;
                a = Game.uniqueID(this.world.balloons, "balloon");
                c.h[a] = this.data;
                this.remove();
                return;
            }
        } else this.set_stringX(this.get_stringX() + (this.get_x() - this.get_stringX() + 4 * Math.sin(this.get_x() / (3 % Math.PI) + this.world.tick / (10 * Main.Instance.get_fps() / 25)) / 30) / 20), this.set_stringY(this.get_stringY() + (this.get_y() + 3.5 - this.get_stringY()) / 5);
        this.set_speedX(this.get_speedX() * Game.migrateDampening(.9));
        this.set_speedY(this.get_speedY() * Game.migrateDampening(.9));
        this.set_speedY(this.get_speedY() - Game.migrateAcc(.4, .9));
        this.set_rotation(Math.atan2(this.get_y() + this.get_speedY() / 30 - (this.get_stringY() + .6666666666666666), this.get_x() + this.get_speedX() / 30 - this.get_stringX()));
        c = (Math.max(Math.abs(this.get_speedX() + a.x) / 5, Math.abs(this.get_speedY() + a.y) / 5) | 0) + 1;
        b = 0;
        for (d = !1; b < c;) this.game.collision(this.get_x() - .3333333333333333, this.get_y() - .23333333333333334, 0, .4666666666666667, .3333333333333333, !0, !0) && (0 > this.get_speedX() && this.set_speedX(0), 0 > a.x && (a.x = 0)), this.game.collision(this.get_x() + .3333333333333333, this.get_y() - .23333333333333334, 0, .4666666666666667, .3333333333333333, !0, !0) && (0 < this.get_speedX() && this.set_speedX(0), 0 < a.x && (a.x = 0)), this.game.collision(this.get_x() - .23333333333333334, this.get_y() - .3333333333333333, .4666666666666667, 0, .3333333333333333, !0, !0) ? (this.set_flightTimer(0), 0 > this.get_speedY() && this.set_speedY(0), 0 > a.y && (a.y = 0)) : d = !0, this.game.collision(this.get_x() - .23333333333333334, this.get_y() + .3333333333333333, .4666666666666667, 0, .3333333333333333, !0, !0) && (0 < this.get_speedY() && this.set_speedY(0), 0 < a.y && (a.y = 0)), this.set_x(this.get_x() + this.get_speedX() / c / 30), this.set_y(this.get_y() + this.get_speedY() / c / 30), this.set_x(this.get_x() + a.x / c / 30), this.set_y(this.get_y() + a.y / c / 30), ++b;
        d && this.set_flightTimer(this.get_flightTimer() + 1);
        null != this.get_inventory() && this.world.setInventoryItemDamage(this.get_inventory().h.slot, Math.floor(BlockData.get("bl", "life") - this.get_life()));
        if (0 >= this.get_life() || (null != this.get_flightTimer() ? this.get_flightTimer() : 0) > 30 * Main.Instance.get_fps()) {
            this.game.requestSound("balloon" + (4 * Math.random() + 1 | 0), this.get_x() - this.world.worldX, this.get_y() - this.world.worldY);
            null != this.get_inventory() && this.world.setInventoryItem(this.get_inventory().h.slot, Game.emptyItem());
            if ("ghast" == this.get_type()) {
                b = this.game;
                a = new lemongine.Point(this.get_x() - .3333333333333333, .6666666666666666);
                var l = new lemongine.Point(this.get_y() - .3333333333333333, .6666666666666666),
                    p = new haxe.ds.StringMap();
                p.h.color = [Colors.colors.h.white.h.r, Colors.colors.h.white.h.g, Colors.colors.h.white.h.b];
            } else {
                b = this.game;
                a = new lemongine.Point(this.get_x() - .3333333333333333, .6666666666666666);
                l = new lemongine.Point(this.get_y() - .3333333333333333, .6666666666666666);
                p = new haxe.ds.StringMap();
                c = Colors.colors;
                d = this.get_type();
                f = c.h[d].h.r;
                c = Colors.colors;
                d = this.get_type();
                var m = c.h[d].h.g;
                c = Colors.colors;
                d = this.get_type();
                p.h.color = [f, m, c.h[d].h.b];
            }
            b.addParticles("mining", 0, 5, a, l, !1, p);
            this.remove();
        } else this.render();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 5);
        this.entityMatrix.reset().translate(Math.floor(-this.game.camera.x * this.game.zoom) / this.game.zoom, Math.floor(-this.game.camera.y * this.game.zoom) / this.game.zoom).translate(Math.floor(this.get_x() * this.game.zoom) / this.game.zoom, Math.floor(this.get_y() * this.game.zoom) / this.game.zoom).scale(this.game.zoom, this.game.zoom, this.game.zoom).translate(this.game.scene.get_width() / 2, this.game.scene.get_height() / 2);
        if ("ghast" == this.get_type()) {
            for (b = 0; 4 > b;) {
                var a = b++;
                this.balloonMatrix.reset().translate(-.03333333333333333, -.03333333333333333).scale(2.88, 2.88).rotate(-(this.get_rotation() + Math.PI / 2) + 10 * Math.sin(this.world.tick / (15 * Main.Instance.get_fps() / 25) + (a + 1)) / 180 * Math.PI, new lemongine.Vector3(0, 0, -1)).translate((-10.25 + 9.683333333333334 * a) / 30, .6166666666666667).rotate(this.get_rotation() + Math.PI / 2, new lemongine.Vector3(0, 0, -1)).translate(this.get_x(), this.get_y());
                this.entity.updateQuad(this.quadPositions[a], null, new lemongine.Point(Textures.getTexture("entity_balloon", "ghast_arm").x, Textures.getTexture("entity_balloon", "ghast_arm").y), new lemongine.Point(Textures.getTexture("entity_balloon", "ghast_arm").width, Textures.getTexture("entity_balloon", "ghast_arm").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, Textures.getTexture("entity_balloon", "ghast_arm").width / 30, Textures.getTexture("entity_balloon", "ghast_arm").height / 30), this.balloonMatrix));
            }
            this.balloonMatrix.reset().scale(2.687225, 2.687225).translate(-.575, -.6266666666666667).rotate(this.get_rotation() + Math.PI / 2, new lemongine.Vector3(0, 0, -1)).translate(this.get_x(), this.get_y());
            this.entity.updateQuad(this.quadPositions[4], null, new lemongine.Point(Textures.getTexture("entity_balloon", "ghast").x, Textures.getTexture("entity_balloon", "ghast").y), new lemongine.Point(Textures.getTexture("entity_balloon", "ghast").width, Textures.getTexture("entity_balloon", "ghast").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, Textures.getTexture("entity_balloon", "ghast").width / 30, Textures.getTexture("entity_balloon", "ghast").height / 30), this.balloonMatrix));
        } else {
            this.balloonMatrix.reset().scale(2.4, 2.4).translate(-.56, -.7200000000000001).rotate(this.get_rotation() + Math.PI / 2, new lemongine.Vector3(0, 0, -1)).translate(this.get_x(), this.get_y());
            a = this.entity;
            var c = this.quadPositions[0],
                d = new lemongine.Point(Textures.getTexture("entity_balloon").x, Textures.getTexture("entity_balloon").y),
                f = new lemongine.Point(Textures.getTexture("entity_balloon").width, Textures.getTexture("entity_balloon").height),
                l = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, Textures.getTexture("entity_balloon").width / 30, Textures.getTexture("entity_balloon").height / 30), this.balloonMatrix);
            b = new haxe.ds.StringMap();
            var p = lemongine.Mathz.repeatArray([G.toFloat(this.color.r) / G.toFloat(255), G.toFloat(this.color.g) / G.toFloat(255), G.toFloat(this.color.b) / G.toFloat(255), 1], 6);
            b.h.color = p;
            a.updateQuad(c, null, d, f, null, l, null, b);
        }
        b = this.entityMatrix.apply(new lemongine.Vector3());
        a = this.entityMatrix.apply(new lemongine.Vector3((this.get_stringX() - this.get_x()) / 2, this.get_stringY() + (this.get_y() - this.get_stringY()) / 4 - this.get_y(), 0));
        c = this.entityMatrix.apply(new lemongine.Vector3(this.get_stringX() - this.get_x(), this.get_stringY() - this.get_y(), 0));
        this.game.vectorRenderer.beginPath();
        this.game.vectorRenderer.lineStyle(this.game.zoom / 30 * 2, lemongine.Color.white);
        this.game.vectorRenderer.moveTo(b.x, b.y);
        this.game.vectorRenderer.curveTo(a.x, a.y, c.x, c.y);
        this.game.vectorRenderer.stroke();
        this.game.vectorRenderer.endPath();
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
    get_stringX: function () {
        return this.getData("stringX");
    },
    set_stringX: function (b) {
        return this.setData("stringX", b);
    },
    get_stringY: function () {
        return this.getData("stringY");
    },
    set_stringY: function (b) {
        return this.setData("stringY", b);
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
    get_life: function () {
        return this.getData("life");
    },
    get_type: function () {
        return this.getData("type");
    },
    get_flightTimer: function () {
        return this.getData("flightTimer");
    },
    set_flightTimer: function (b) {
        return this.setData("flightTimer", b);
    },
    get_rotation: function () {
        return null != this.getData("rotation") ? this.getData("rotation") : 0;
    },
    set_rotation: function (b) {
        return this.setData("rotation", b);
    },
    get_attached: function () {
        return this.getData("attached");
    },
    set_attached: function (b) {
        return this.setData("attached", b);
    },
    get_inventory: function () {
        return this.getData("inventory");
    },
    set_inventory: function (b) {
        return this.setData("inventory", b);
    },
    __class__: entities.Entity_Balloon
})