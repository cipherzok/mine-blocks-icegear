var EntityPool = function (b, a, c) {
    this.id = b;
    this.entity = a;
    this.entityScale = c;
};
m.EntityPool = EntityPool
EntityPool.__name__ = "EntityPool"
EntityPool.prototype = {
    renderTo: function (b, a) {
        0 < this.entity.numQuads && (this.entity.transform.reset().scale2D(this.entityScale).translate(Math.floor(-b.camera.x * b.zoom) / b.zoom, Math.floor(-b.camera.y * b.zoom) / b.zoom).scale2D(b.zoom).translate(a.get_width() / 2, a.get_height() / 2), a.draw(this.entity));
    },
    __class__: EntityPool
}