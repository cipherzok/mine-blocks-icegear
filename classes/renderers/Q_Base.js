renderers.Q_Base = function (b, a, c) {
    null == c && (c = 0);
    null == a && (a = 0);
    this.hasFrameEvent = !1;
    this.quadPositions = [];
    this.entity = b;
    this.destination = new lemongine.Vector3(a, c);
}
m["renderers.Q_Base"] = renderers.Q_Base
renderers.Q_Base.__name__ = "renderers.Q_Base"
renderers.Q_Base.prototype = {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    destroy: function () {
        for (var b = 0, a = this.quadPositions.length; b < a;) ++b, this.entity.removeQuad(this.quadPositions.pop(), !0);
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0], !0);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    setBlockTextureID: function (b, a) {
        null == a && (a = !1);
        a && null != BlockData.get(b, "itemTextureID") ? this.textureID = BlockData.get(b, "itemTextureID") : null != BlockData.get(b, "textureID") ? this.textureID = BlockData.get(b, "textureID") : this.textureID = BlockData.get(b, "identifier");
    },
    get_x: function () {
        return this.destination.x;
    },
    set_x: function (b) {
        return this.destination.x = b;
    },
    get_y: function () {
        return this.destination.y;
    },
    set_y: function (b) {
        return this.destination.y = b;
    },
    __class__: renderers.Q_Base
}