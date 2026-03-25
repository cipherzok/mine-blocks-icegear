renderers.blocks.Q_Carpet = function (b, a, c) {
    this.isItem = !1;
    renderers.blocks.Q_Wool.call(this, b, a, c);
}
m["renderers.blocks.Q_Carpet"] = renderers.blocks.Q_Carpet
renderers.blocks.Q_Carpet.__name__ = "renderers.blocks.Q_Carpet"
renderers.blocks.Q_Carpet.__super__ = renderers.blocks.Q_Wool
renderers.blocks.Q_Carpet.prototype = z(renderers.blocks.Q_Wool.prototype, {
    update: function () {
        if (0 < this.quadPositions.length) this.frameEvent();else if ("rainbow" == this.color) {
            var b = this.quadPositions,
                a = this.entity,
                c = new lemongine.Vector3(this.destination.x, this.destination.y + .875 + (this.isItem ? -.4375 : 0)),
                d = new lemongine.Point(this.textureClip.x, this.textureClip.y + .875),
                f = new lemongine.Point(this.textureClip.width, .125 * this.textureClip.height),
                l = new lemongine.Point(1, .125),
                h = new haxe.ds.StringMap(),
                m = lemongine.Mathz.repeatArray([Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 5 - 30 * this.worldLocation.y / 7) / 19) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 - 30 * this.worldLocation.x / 4 - 30 * this.worldLocation.y / 9) / 25) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 3 + 30 * this.worldLocation.y / 5) / 16) / 2 + .5, 1], 6);
            h.h.color = m;
            b.push(a.addQuad(c, d, f, !0, l, null, null, h));
        } else "" != this.color ? (b = this.quadPositions, a = this.entity, c = new lemongine.Vector3(this.destination.x, this.destination.y + .875 + (this.isItem ? -.4375 : 0)), d = new lemongine.Point(this.textureClip.x, this.textureClip.y + .875), f = new lemongine.Point(this.textureClip.width, .125 * this.textureClip.height), l = new lemongine.Point(1, .125), h = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([Colors.colors.h[this.color].h.r, Colors.colors.h[this.color].h.g, Colors.colors.h[this.color].h.b, 1], 6), h.h.color = m, b.push(a.addQuad(c, d, f, !0, l, null, null, h))) : (b = this.textureClip.x, a = this.textureClip.y + .875, c = this.textureClip.width, d = .125 * this.textureClip.height, this.quadPositions.push(this.entity.addQuad(new lemongine.Vector3(this.destination.x, this.destination.y + .875 + (this.isItem ? -.4375 : 0)), new lemongine.Point(b, a), new lemongine.Point(c, d), !0, new lemongine.Point(1, .125))));
    },
    frameEvent: function () {
        if ("rainbow" == this.color) {
            var b = this.entity,
                a = this.quadPositions[0],
                c = new lemongine.Vector3(this.destination.x, this.destination.y + .875 + (this.isItem ? -.4375 : 0)),
                d = new lemongine.Point(this.textureClip.x, this.textureClip.y + .875),
                f = new lemongine.Point(this.textureClip.width, .125 * this.textureClip.height),
                l = new lemongine.Point(1, .125),
                h = new haxe.ds.StringMap(),
                m = lemongine.Mathz.repeatArray([Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 5 - 30 * this.worldLocation.y / 7) / 19) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 - 30 * this.worldLocation.x / 4 - 30 * this.worldLocation.y / 9) / 25) / 2 + .5, Math.sin((Main.Instance.game.world.tick / 2 + 30 * this.worldLocation.x / 3 + 30 * this.worldLocation.y / 5) / 16) / 2 + .5, 1], 6);
            h.h.color = m;
            b.updateQuad(a, c, d, f, l, null, null, h);
        } else "" != this.color ? (b = this.entity, a = this.quadPositions[0], c = new lemongine.Vector3(this.destination.x, this.destination.y + .875 + (this.isItem ? -.4375 : 0)), d = new lemongine.Point(this.textureClip.x, this.textureClip.y + .875), f = new lemongine.Point(this.textureClip.width, .125 * this.textureClip.height), l = new lemongine.Point(1, .125), h = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([Colors.colors.h[this.color].h.r, Colors.colors.h[this.color].h.g, Colors.colors.h[this.color].h.b, 1], 6), h.h.color = m, b.updateQuad(a, c, d, f, l, null, null, h)) : (b = this.textureClip.x, a = this.textureClip.y + .875, c = this.textureClip.width, d = .125 * this.textureClip.height, this.entity.updateQuad(this.quadPositions[0], new lemongine.Vector3(this.destination.x, this.destination.y + .875 + (this.isItem ? -.4375 : 0)), new lemongine.Point(b, a), new lemongine.Point(c, d), new lemongine.Point(1, .125)));
    },
    fromItem: function (b) {
        this.isItem = !0;
        return renderers.blocks.Q_Wool.prototype.fromItem.call(this, b);
    },
    __class__: renderers.blocks.Q_Carpet
})