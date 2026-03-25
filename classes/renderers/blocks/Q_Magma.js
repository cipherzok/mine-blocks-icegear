renderers.blocks.Q_Magma = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Magma"] = renderers.blocks.Q_Magma
renderers.blocks.Q_Magma.__name__ = "renderers.blocks.Q_Magma"
renderers.blocks.Q_Magma.__super__ = renderers.Q_Base
renderers.blocks.Q_Magma.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 < this.quadPositions.length ? (this.textureClip = Textures.getTexture(this.textureID, 1 + Math.floor(Main.Instance.game.world.tick / 20) % 4), this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1))) : (this.hasFrameEvent = !0, this.textureClip = Textures.getTexture(this.textureID, 1 + Math.floor(Main.Instance.game.world.tick / 20) % 4), this.quadPositions.push(this.entity.addQuad(this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), !0, new lemongine.Point(1, 1))));
    },
    __class__: renderers.blocks.Q_Magma
})