entities.Entity_Henry = function (b, a, c, d, f, g) {
    this._x = this._y = 0;
    this.entityMatrix = new lemongine.Matrix4();
    this.playing = !1;
    this.frame = 1;
    entities.Entity_Base.call(this, b, a, c, d, f, g);
}
m["entities.Entity_Henry"] = entities.Entity_Henry
entities.Entity_Henry.__name__ = "entities.Entity_Henry"
entities.Entity_Henry.__super__ = entities.Entity_Base
entities.Entity_Henry.prototype = z(entities.Entity_Base.prototype, {
    play: function () {
        this.playing = !0;
        if (1 == this.frame) for (var b = 0; 100 > b++;) {
            var a = new lemongine.Point(Math.floor(this.world.worldX + 18 * Math.random() - 9), Math.floor(-this.world.worldY + 10 * Math.random() - 5));
            if ("air" == this.world.getFG(a.x, a.y) && 1 != BlockData.get(this.world.getFG(a.x, a.y - 1), "walkThroughBlock")) {
                this.set_x(a.x);
                this.set_y(-a.y);
                this.game.requestSound("htele", this.get_x() - this.world.worldX, this.get_y() - this.world.worldY);
                break;
            }
        }
    },
    run: function () {
        this.onScreen(2);
        if (this.playing && (this.frame++, 32 < this.frame)) {
            this.frame = 0;
            this.playing = !1;
            this.remove();
            return;
        }
        this.render();
    },
    render: function (b) {
        if (null == this.game.entityPools.h[this.entityPoolID]) {
            b = this.game.entityPools;
            var a = this.entityPoolID,
                c = this.entityPoolID,
                d = lemongine.AssetManager.getImage("teleporter"),
                f = shader.BlockShader.getShader(),
                l = new haxe.ds.StringMap(),
                p = lemongine.Mathz.repeatArray([1], 24);
            l.h.color = p;
            p = lemongine.Mathz.repeatArray([0], 24);
            l.h.colorOffset = p;
            c = new EntityPool(c, new QuadPoolEntity_MatrixState(d, null, f, l), this.getEntityScale());
            b.h[a] = c;
            this.game.entityPools.h[this.entityPoolID].entity.isTransparent = !0;
            this.game.entityPools.h[this.entityPoolID].entity.layer = 0;
        }
        entities.Entity_Base.prototype.render.call(this, 2);
        b = Math.floor((this.frame + 1) / 2);
        2 == b || 16 == b ? (this.entityMatrix.reset().translate(-1.0666666666666667, -1.0666666666666667).scale(.84053, .458923).translate(.12000000000000001, -.4766666666666667).translate(this.get_x(), this.get_y()), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(0, 32), new lemongine.Point(64, 64), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 2.1333333333333333, 2.1333333333333333), this.entityMatrix))) : 2 < b && 16 > b ? (this.entityMatrix.reset().translate(-1.0666666666666667, -1.0666666666666667).scale2D(.634369).translate(.12000000000000001, -.4766666666666667).translate(this.get_x(), this.get_y()), this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(0, 32), new lemongine.Point(64, 64), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 2.1333333333333333, 2.1333333333333333), this.entityMatrix))) : this.entity.updateQuad(this.quadPositions[0], null, new lemongine.Point(), new lemongine.Point());
        2 == b || 15 <= b ? (this.entityMatrix.reset().translate(-2.05, -1.0666666666666667).scale2D(1.0517315091919623).translate(.36666666666666664, -.03333333333333333).translate(this.get_x(), this.get_y()), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(64, 0), new lemongine.Point(123, 32), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 4.1, 1.0666666666666667), this.entityMatrix))) : 3 == b || 4 == b || 13 <= b ? (this.entityMatrix.reset().translate(-2.05, -1.0666666666666667).scale2D(1.0517315091919623).translate(.36666666666666664, -.03333333333333333).translate(this.get_x(), this.get_y()), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(64, 32), new lemongine.Point(123, 32), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 4.1, 1.0666666666666667), this.entityMatrix))) : 5 == b || 6 == b ? (this.entityMatrix.reset().translate(-2.05, -1.0666666666666667).scale2D(1.0517315091919623).translate(.36666666666666664, -.03333333333333333).translate(this.get_x(), this.get_y()), this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(64, 64), new lemongine.Point(123, 32), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 4.1, 1.0666666666666667), this.entityMatrix))) : this.entity.updateQuad(this.quadPositions[1], null, new lemongine.Point(), new lemongine.Point());
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
    __class__: entities.Entity_Henry
})