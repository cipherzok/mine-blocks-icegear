renderers.blocks.Q_Pumpkin = function (b, a, c) {
    this.state = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Pumpkin"] = renderers.blocks.Q_Pumpkin
renderers.blocks.Q_Pumpkin.__name__ = "renderers.blocks.Q_Pumpkin"
renderers.blocks.Q_Pumpkin.__super__ = renderers.Q_Base
renderers.blocks.Q_Pumpkin.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        if (1 == this.state) this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)), this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(), new lemongine.Point(), new lemongine.Point());else {
            var b = Textures.getTexture(this.textureID, "face_" + (this.state - 1));
            this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
            this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1, 1));
        }
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        null != b.states1 && (this.state = Std.parseInt(b.states1.toString()));
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Pumpkin
})