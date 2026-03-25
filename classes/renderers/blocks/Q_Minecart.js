renderers.blocks.Q_Minecart = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Minecart"] = renderers.blocks.Q_Minecart
renderers.blocks.Q_Minecart.__name__ = "renderers.blocks.Q_Minecart"
renderers.blocks.Q_Minecart.__super__ = renderers.Q_Base
renderers.blocks.Q_Minecart.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x - .5, this.destination.y), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(2, 1));
    },
    __class__: renderers.blocks.Q_Minecart
})