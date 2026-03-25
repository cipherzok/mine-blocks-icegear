renderers.blocks.Q_Dirt = function (b, a, c) {
    this.isItem = !1;
    this.rotation = Math.floor(4 * Math.random());
    this.state = 2;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Dirt"] = renderers.blocks.Q_Dirt
renderers.blocks.Q_Dirt.__name__ = "renderers.blocks.Q_Dirt"
renderers.blocks.Q_Dirt.__super__ = renderers.Q_Base
renderers.blocks.Q_Dirt.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.isItem || 0 == this.rotation ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : 1 == this.rotation ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]) : 2 == this.rotation ? this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0]) : 3 == this.rotation && this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1), null, [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]);
        if (1 == this.state) {
            var b = Textures.getTexture(this.textureID, "grass");
            this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1, 1));
        } else this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(), new lemongine.Point(), new lemongine.Point());
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 2;
        null != b.states1 && "1" == Std.string(b.states1) && (this.state = 1);
        this.isItem = !1;
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.isItem = !0;
        this.state = 2;
        "dtg" == b[0] && (this.state = 1);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Dirt
})