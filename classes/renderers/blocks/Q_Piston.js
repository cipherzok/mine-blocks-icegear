renderers.blocks.Q_Piston = function (b, a, c) {
    this.state = 2;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Piston"] = renderers.blocks.Q_Piston
renderers.blocks.Q_Piston.__name__ = "renderers.blocks.Q_Piston"
renderers.blocks.Q_Piston.__super__ = renderers.Q_Base
renderers.blocks.Q_Piston.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        1 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : 2 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]) : 3 == this.state ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0]) : 4 == this.state && this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]);
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        null != b.states1 && (this.state = Std.parseInt(b.states1.toString()));
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Piston
})