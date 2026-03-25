entities.Entity_Base = function (b, a, c, d, f, g) {
    this.quadPositions = [];
    this.entityPoolID = this.entityType = b;
    this.containerObject = a;
    this.id = c;
    this.data = d;
    this.game = f;
    this.world = g;
    this.init();
}
m["entities.Entity_Base"] = entities.Entity_Base
entities.Entity_Base.__name__ = "entities.Entity_Base"
entities.Entity_Base.prototype = {
    init: function () {},
    run: function () {},
    render: function (b) {
        null == b && (b = 0);
        if (null == this.entity) {
            if (null == this.entityPool) {
                if (null == this.game.entityPools.h[this.entityPoolID]) {
                    var a = this.game.entityPools,
                        c = this.entityPoolID,
                        d = this.entityPoolID,
                        f = Textures.blockTextures,
                        l = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                        p = new haxe.ds.StringMap(),
                        h = lemongine.Mathz.repeatArray([1], 24);
                    p.h.color = h;
                    h = lemongine.Mathz.repeatArray([0], 24);
                    p.h.colorOffset = h;
                    p = new EntityPool(d, new lemongine.QuadPoolEntity(f, null, l, p), this.getEntityScale());
                    a.h[c] = p;
                    this.game.entityPools.h[this.entityPoolID].entity.isTransparent = !0;
                    this.game.entityPools.h[this.entityPoolID].entity.layer = 0;
                }
                this.entityPool = this.game.entityPools.h[this.entityPoolID];
            }
            this.entity = this.entityPool.entity;
        }
        if (0 == this.quadPositions.length && 0 < b) for (a = this.entity.nearestConsecutiveEmpty(b), p = 0; p < b;) c = p++, this.quadPositions.push(a + c), this.entity.updateQuad(a + c, null, null, new lemongine.Point());
    },
    destroy: function () {
        if (null != this.entityPool) {
            for (var b = 0, a = this.quadPositions; b < a.length;) this.entity.removeQuad(a[b++]);
            this.quadPositions = [];
        }
    },
    remove: function () {
        var b = this.id,
            a = this.world.onFire;
        Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
        this.destroy();
        null != this.containerObject && (b = this.id, a = this.containerObject, Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b]);
        b = this.id;
        a = this.world.entities;
        Object.prototype.hasOwnProperty.call(a.h, b) && delete a.h[b];
    },
    onScreen: function (b, a) {
        null == b && (b = 2);
        b *= 1;
        return !((this.get_x() - this.game.camera.x + b) * this.game.zoom < -this.game.scene.get_width() / 2 || (this.get_x() - this.game.camera.x - b) * this.game.zoom > this.game.scene.get_width() / 2 || (this.get_y() - this.game.camera.y + b) * this.game.zoom < -this.game.scene.get_height() / 2 || (this.get_y() - this.game.camera.y - b) * this.game.zoom > this.game.scene.get_height() / 2);
    },
    getEntityScale: function () {
        return 1;
    },
    get_x: function () {
        return 0;
    },
    get_y: function () {
        return 0;
    },
    __class__: entities.Entity_Base
}