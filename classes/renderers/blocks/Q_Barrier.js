renderers.blocks.Q_Barrier = function (b, a, c) {
    this.visible = !1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Barrier"] = renderers.blocks.Q_Barrier
renderers.blocks.Q_Barrier.__name__ = "renderers.blocks.Q_Barrier"
renderers.blocks.Q_Barrier.__super__ = renderers.Q_Base
renderers.blocks.Q_Barrier.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 < this.quadPositions.length ? this.visible ? this.entity.updateQuad(this.quadPositions[0], this.destination, null, null, new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, null, null, new lemongine.Point(0, 0)) : this.visible ? this.quadPositions.push(this.entity.addQuad(this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), !0, new lemongine.Point(1, 1))) : this.quadPositions.push(this.entity.addQuad(this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), !0, new lemongine.Point(0, 0)));
    },
    fromItem: function (b) {
        this.visible = !0;
        return renderers.Q_Base.prototype.fromItem.call(this, b);
    },
    __class__: renderers.blocks.Q_Barrier
})