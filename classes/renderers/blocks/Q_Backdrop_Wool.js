renderers.blocks.Q_Backdrop_Wool = function (b, a, c) {
    renderers.blocks.Q_Wool.call(this, b, a, c);
}
m["renderers.blocks.Q_Backdrop_Wool"] = renderers.blocks.Q_Backdrop_Wool
renderers.blocks.Q_Backdrop_Wool.__name__ = "renderers.blocks.Q_Backdrop_Wool"
renderers.blocks.Q_Backdrop_Wool.__super__ = renderers.blocks.Q_Wool
renderers.blocks.Q_Backdrop_Wool.prototype = z(renderers.blocks.Q_Wool.prototype, {
    update: function () {
        if (0 < this.quadPositions.length) this.frameEvent();else if ("" != this.color) {
            var b = this.quadPositions,
                a = this.entity,
                c = this.destination,
                d = new lemongine.Point(this.textureClip.x, this.textureClip.y),
                f = new lemongine.Point(this.textureClip.width, this.textureClip.height),
                l = new lemongine.Point(1, 1),
                h = new haxe.ds.StringMap(),
                m = lemongine.Mathz.repeatArray([.6 * Colors.colors.h[this.color].h.r, .6 * Colors.colors.h[this.color].h.g, .6 * Colors.colors.h[this.color].h.b, 1], 6);
            h.h.color = m;
            b.push(a.addQuad(c, d, f, !0, l, null, null, h));
        } else this.quadPositions.push(this.entity.addQuad(this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), !0, new lemongine.Point(1, 1)));
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
                m = lemongine.Mathz.repeatArray([.4 * (Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 5 - 30 * this.worldLocation.y / 7) / 19) / 2 + .5), .4 * (Math.sin((Main.Instance.game.world.tick / 2 - 30 * this.worldLocation.x / 4 - 30 * this.worldLocation.y / 9) / 25) / 2 + .5), .4 * (Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 3 + 30 * this.worldLocation.y / 5) / 16) / 2 + .5), 1], 6);
            h.h.color = m;
            b.updateQuad(a, c, d, f, l, null, null, h);
        } else "" != this.color ? (b = this.entity, a = this.quadPositions[0], c = this.destination, d = new lemongine.Point(this.textureClip.x, this.textureClip.y), f = new lemongine.Point(this.textureClip.width, this.textureClip.height), l = new lemongine.Point(1, 1), h = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([.6 * Colors.colors.h[this.color].h.r, .6 * Colors.colors.h[this.color].h.g, .6 * Colors.colors.h[this.color].h.b, 1], 6), h.h.color = m, b.updateQuad(a, c, d, f, l, null, null, h)) : this.entity.updateQuad(this.quadPositions[0], this.destination, new lemongine.Point(this.textureClip.x, this.textureClip.y), new lemongine.Point(this.textureClip.width, this.textureClip.height), new lemongine.Point(1, 1));
    },
    __class__: renderers.blocks.Q_Backdrop_Wool
})