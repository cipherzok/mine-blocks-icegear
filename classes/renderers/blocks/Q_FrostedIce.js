renderers.blocks.Q_FrostedIce = function (b, a, c) {
    this.isItem = !1;
    this.state = 0;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_FrostedIce"] = renderers.blocks.Q_FrostedIce
renderers.blocks.Q_FrostedIce.__name__ = "renderers.blocks.Q_FrostedIce"
renderers.blocks.Q_FrostedIce.__super__ = renderers.Q_Base
renderers.blocks.Q_FrostedIce.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && (this.quadPositions.push(this.entity.nearestConsecutiveEmpty(2)), this.quadPositions.push(this.quadPositions[0] + 1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        if (0 == this.state) this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(), new lemongine.Point(), new lemongine.Point());else {
            var b = Textures.getTexture("break", Std.string(this.state + 1));
            this.entity.updateQuad(this.quadPositions[1], this.destination, new lemongine.Point(b.x, b.y), new lemongine.Point(b.width, b.height), new lemongine.Point(1, 1));
        }
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 0;
        null != b.states1 && (this.state = Std.parseInt(b.states1.toString()));
        this.textureClip = Textures.getTexture(this.textureID);
        this.isItem = !1;
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.state = 2;
        this.textureClip = Textures.getTexture(this.textureID);
        this.isItem = !0;
        return this;
    },
    __class__: renderers.blocks.Q_FrostedIce
})