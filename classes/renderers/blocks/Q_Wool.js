renderers.blocks.Q_Wool = function (b, a, c) {
    this.worldLocation = new lemongine.Point(0, 0);
    this.color = "";
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Wool"] = renderers.blocks.Q_Wool
renderers.blocks.Q_Wool.__name__ = "renderers.blocks.Q_Wool"
renderers.blocks.Q_Wool.__super__ = renderers.Q_Base
renderers.blocks.Q_Wool.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        if (0 < this.quadPositions.length) this.frameEvent();else if ("rainbow" == this.color) {
            var b = this.quadPositions,
                a = this.entity,
                c = this.destination,
                d = new lemongine.Point(this.textureClip.x, this.textureClip.y),
                f = new lemongine.Point(this.textureClip.width, this.textureClip.height),
                l = new lemongine.Point(1, 1),
                h = new haxe.ds.StringMap(),
                m = lemongine.Mathz.repeatArray([Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 5 - 30 * this.worldLocation.y / 7) / 19) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 - 30 * this.worldLocation.x / 4 - 30 * this.worldLocation.y / 9) / 25) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 3 + 30 * this.worldLocation.y / 5) / 16) / 2 + .5, 1], 6);
            h.h.color = m;
            b.push(a.addQuad(c, d, f, !0, l, null, null, h));
        } else "" != this.color ? (b = this.quadPositions, a = this.entity, c = this.destination, d = new lemongine.Point(this.textureClip.x, this.textureClip.y), f = new lemongine.Point(this.textureClip.width, this.textureClip.height), l = new lemongine.Point(1, 1), h = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([Colors.colors.h[this.color].h.r, Colors.colors.h[this.color].h.g, Colors.colors.h[this.color].h.b, 1], 6), h.h.color = m, b.push(a.addQuad(c, d, f, !0, l, null, null, h))) : this.quadPositions.push(this.entity.addQuad(this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), !0, new lemongine.Point(1, 1)));
    },
    frameEvent: function () {
        if ("rainbow" == this.color) {
            var b = this.entity,
                a = this.quadPositions[0],
                c = this.destination,
                d = new lemongine.Point(this.textureClip.x, this.textureClip.y),
                f = new lemongine.Point(this.textureClip.width, this.textureClip.height),
                l = new lemongine.Point(1, 1),
                h = new haxe.ds.StringMap(),
                m = lemongine.Mathz.repeatArray([Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 5 - 30 * this.worldLocation.y / 7) / 19) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 - 30 * this.worldLocation.x / 4 - 30 * this.worldLocation.y / 9) / 25) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 3 + 30 * this.worldLocation.y / 5) / 16) / 2 + .5, 1], 6);
            h.h.color = m;
            b.updateQuad(a, c, d, f, l, null, null, h);
        } else "" != this.color ? (b = this.entity, a = this.quadPositions[0], c = this.destination, d = new lemongine.Point(this.textureClip.x, this.textureClip.y), f = new lemongine.Point(this.textureClip.width, this.textureClip.height), l = new lemongine.Point(1, 1), h = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([Colors.colors.h[this.color].h.r, Colors.colors.h[this.color].h.g, Colors.colors.h[this.color].h.b, 1], 6), h.h.color = m, b.updateQuad(a, c, d, f, l, null, null, h)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    fromBlock: function (b) {
        this.setBlockTextureID(b.type);
        null != b.states1 && Object.prototype.hasOwnProperty.call(Colors.colors.h, b.states1) && (this.color = b.states1, "rainbow" == this.color && (this.hasFrameEvent = !0));
        null != b.x && (this.worldLocation.x = b.x);
        null != b.y && (this.worldLocation.y = b.y);
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    fromItem: function (b) {
        this.setBlockTextureID(b[0]);
        null != b[3] && (b = js.Boot.__cast(b[3], haxe.ds.StringMap).h.type, Object.prototype.hasOwnProperty.call(Colors.colors.h, b) && (this.color = b, "rainbow" == this.color && (this.hasFrameEvent = !0)));
        this.textureClip = Textures.getTexture(this.textureID);
        return this;
    },
    __class__: renderers.blocks.Q_Wool
})