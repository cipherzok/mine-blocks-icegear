renderers.blocks.Q_Rail = function (b, a, c) {
    this.powered = !1;
    this.state = 1;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Rail"] = renderers.blocks.Q_Rail
renderers.blocks.Q_Rail.__name__ = "renderers.blocks.Q_Rail"
renderers.blocks.Q_Rail.__super__ = renderers.Q_Base
renderers.blocks.Q_Rail.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        if (2 == this.state) {
            var b = this.textureClip.x + this.textureClip.width;
            this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y - .13333333333333333), new lemongine.Point(b, this.textureClip.y), new lemongine.Point(-this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
        } else 3 == this.state ? this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y - .13333333333333333), new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.state = 1;
        if (null != b.states1) {
            var a = b.states1;
            this.state = Std.parseInt(a[0].toString());
            1 == BlockData.get(b.type, "poweredTypeRail") && (this.powered = 0 < a[1][0]);
        }
        this.textureClip = Textures.getTexture(this.textureID, (this.powered ? "on_" : "off_") + (1 == this.state ? "straight" : "slope"));
        return this;
    },
    __class__: renderers.blocks.Q_Rail
})