renderers.blocks.Q_Lever = function (b, a, c) {
    this.state2 = 0;
    this.state1 = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Lever"] = renderers.blocks.Q_Lever
renderers.blocks.Q_Lever.__name__ = "renderers.blocks.Q_Lever"
renderers.blocks.Q_Lever.__super__ = renderers.Q_Base
renderers.blocks.Q_Lever.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        2 == this.state1 ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0]) : 3 == this.state1 ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state1 = 1;
        this.state2 = 0;
        null != b.states1 && (this.state1 = Std.parseInt(b.states1.toString()));
        null != b.states2 && (this.state2 = Std.parseInt(b.states2.toString()));
        this.textureClip = Textures.getTexture(this.textureID, 0 < this.state2 ? "on" : "off");
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.textureClip = Textures.getTexture(this.textureID, "off");
        return this;
    },
    __class__: renderers.blocks.Q_Lever
})