entities.Entity_EHC = function (b, a, c, d, f, g) {
    this.randomFireTexture = "1";
    this.entityMatrix = new lemongine.Matrix4();
    this.hVisible = !1;
    this.hAlpha = this.hWidth = this.hRotation = 0;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_EHC"] = entities.Entity_EHC
entities.Entity_EHC.__name__ = "entities.Entity_EHC"
entities.Entity_EHC.__super__ = entities.Entity_Base
entities.Entity_EHC.prototype = z(entities.Entity_Base.prototype, {
    run: function () {
        this.onScreen(2);
        0 < this.hAlpha ? (this.hAlpha -= .05, this.hVisible = !0) : this.hVisible = !1;
        this.onScreen(2) && Math.random() < 1 / (10 * Main.Instance.get_fps() / 25) && this.game.addParticles("smoke", 1, 0, new lemongine.Point(this.get_x() + Math.random(), 0), new lemongine.Point(-this.get_y() - Math.random(), 0));
        this.render();
    },
    render: function (b) {
        entities.Entity_Base.prototype.render.call(this, 7);
        0 == Main.Instance.game.world.tick % 2 && (this.randomFireTexture = Std.string(1 + Math.floor(4 * Math.random())));
        this.entityMatrix.reset().translate(-.26666666666666666, -.8).scale2D(this.game.zoom / 16).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).x, Textures.getTexture("fire", this.randomFireTexture).y), new lemongine.Point(Textures.getTexture("fire", this.randomFireTexture).width, Textures.getTexture("fire", this.randomFireTexture).height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
        this.entityMatrix.reset().translate(0, -.26666666666666666).scale(this.hWidth * this.game.zoom / 16, -1.5).rotate2D(-this.hRotation / 180 * Math.PI).translate(0, -.4).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        b = this.entity;
        var a = this.quadPositions[1],
            c = new lemongine.Point(Textures.getTexture("ehc_beam").x, Textures.getTexture("ehc_beam").y),
            d = new lemongine.Point(Textures.getTexture("ehc_beam").width, Textures.getTexture("ehc_beam").height),
            f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix),
            l = [-this.world.tick / (40 * Main.Instance.get_fps() / 25) + .25, 0, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + .25, 1, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + .25 + this.hWidth * this.game.zoom / 256, 0, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + .25 + this.hWidth * this.game.zoom / 256, 0, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + .25, 1, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + .25 + this.hWidth * this.game.zoom / 256, 1],
            p = new haxe.ds.StringMap(),
            h = lemongine.Mathz.repeatArray([1, 1, 1, .5 * this.hAlpha], 6);
        p.h.color = h;
        b.updateQuad(a, null, c, d, null, f, l, p);
        this.entityMatrix.reset().translate(0, -.26666666666666666).scale(this.hWidth * this.game.zoom / 16, 1.5).rotate2D(-this.hRotation / 180 * Math.PI).translate(0, -.4).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        b = this.entity;
        a = this.quadPositions[2];
        c = new lemongine.Point(Textures.getTexture("ehc_beam").x, Textures.getTexture("ehc_beam").y);
        d = new lemongine.Point(Textures.getTexture("ehc_beam").width, Textures.getTexture("ehc_beam").height);
        f = lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix);
        l = [-this.world.tick / (40 * Main.Instance.get_fps() / 25), 0, -this.world.tick / (40 * Main.Instance.get_fps() / 25), 1, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + this.hWidth * this.game.zoom / 256, 0, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + this.hWidth * this.game.zoom / 256, 0, -this.world.tick / (40 * Main.Instance.get_fps() / 25), 1, -this.world.tick / (40 * Main.Instance.get_fps() / 25) + this.hWidth * this.game.zoom / 256, 1];
        p = new haxe.ds.StringMap();
        h = lemongine.Mathz.repeatArray([1, 1, 1, this.hAlpha], 6);
        p.h.color = h;
        b.updateQuad(a, null, c, d, null, f, l, p);
        this.entityMatrix.reset().translate(-.26666666666666666, -.5333333333333333).scale2D(this.game.zoom / 16).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        this.entity.updateQuad(this.quadPositions[3], null, new lemongine.Point(Textures.getTexture("healing_crystal").x, Textures.getTexture("healing_crystal").y), new lemongine.Point(Textures.getTexture("healing_crystal").width, Textures.getTexture("healing_crystal").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale(1.5, .5).translate(0, .13333333333333333).scale2D(this.game.zoom / 16).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        this.entity.updateQuad(this.quadPositions[4], null, new lemongine.Point(Textures.getTexture("bedrock").x, Textures.getTexture("bedrock").y), new lemongine.Point(Textures.getTexture("bedrock").width, Textures.getTexture("bedrock").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(.86).rotate2D(-1.5 * this.world.tick / 180 * Math.PI).translate(0, (5 * Math.sin(1.5 * this.world.tick / 180 * Math.PI) - 28) / 30).scale2D(this.game.zoom / 16).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        this.entity.updateQuad(this.quadPositions[5], null, new lemongine.Point(Textures.getTexture("ehc_box").x, Textures.getTexture("ehc_box").y), new lemongine.Point(Textures.getTexture("ehc_box").width, Textures.getTexture("ehc_box").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
        this.entityMatrix.reset().translate(-.26666666666666666, -.26666666666666666).scale2D(1.04).rotate2D(1.5 * this.world.tick / 180 * Math.PI).translate(0, (5 * Math.sin(1.5 * this.world.tick / 180 * Math.PI) - 28) / 30).scale2D(this.game.zoom / 16).translate(((this.get_x() + .5) * this.game.zoom | 0) / this.game.zoom, ((-this.get_y() - .5) * this.game.zoom | 0) / this.game.zoom);
        this.entity.updateQuad(this.quadPositions[6], null, new lemongine.Point(Textures.getTexture("ehc_box").x, Textures.getTexture("ehc_box").y), new lemongine.Point(Textures.getTexture("ehc_box").width, Textures.getTexture("ehc_box").height), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, .5333333333333333, .5333333333333333), this.entityMatrix));
    },
    explod: function () {
        this.world.setFG(Math.floor(this.get_x()), Math.floor(this.get_y()), "br");
        this.game.explode(this.get_x() + .5, this.get_y() + 1, 8, !1, !0);
        this.remove();
    },
    getData: function (b) {
        return js.Boot.__cast(this.data, Array)[b];
    },
    get_x: function () {
        return this.getData(0);
    },
    get_y: function () {
        return this.getData(1);
    },
    __class__: entities.Entity_EHC
})