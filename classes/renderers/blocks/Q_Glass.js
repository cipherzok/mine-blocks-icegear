renderers.blocks.Q_Glass = function (b, a, c) {
    this.variation = this.color = "";
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Glass"] = renderers.blocks.Q_Glass
renderers.blocks.Q_Glass.__name__ = "renderers.blocks.Q_Glass"
renderers.blocks.Q_Glass.__super__ = renderers.Q_Base
renderers.blocks.Q_Glass.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        if ("stained" == this.variation) {
            var b = lemongine.Mathz.repeatArray([Colors.colors.h[this.color].h.r, Colors.colors.h[this.color].h.g, Colors.colors.h[this.color].h.b, 1], 6),
                a = this.quadPositions[0],
                c = new lemongine.Point(this.textureClip.x, this.textureClip.y),
                d = new lemongine.Point(this.textureClip.width, this.textureClip.height),
                f = new lemongine.Point(1, 1),
                l = new haxe.ds.StringMap();
            l.h.color = b;
            this.entity.updateQuad(a, this.destination, c, d, f, null, null, l);
        } else this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        this.variation = "";
        null != b.states1 && Object.prototype.hasOwnProperty.call(Colors.colors.h, b.states1) && (this.color = b.states1, this.variation = "stained");
        this.textureClip = Textures.getTexture(this.textureID, this.variation);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        this.variation = "";
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.color = b, this.variation = "stained"));
        this.textureClip = Textures.getTexture(this.textureID, this.variation);
        return this;
    },
    __class__: renderers.blocks.Q_Glass
})