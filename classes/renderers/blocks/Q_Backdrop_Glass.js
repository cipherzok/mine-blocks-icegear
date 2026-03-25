renderers.blocks.Q_Backdrop_Glass = function (b, a, c) {
    renderers.blocks.Q_Glass.call(this, b, a, c);
}
m["renderers.blocks.Q_Backdrop_Glass"] = renderers.blocks.Q_Backdrop_Glass
renderers.blocks.Q_Backdrop_Glass.__name__ = "renderers.blocks.Q_Backdrop_Glass"
renderers.blocks.Q_Backdrop_Glass.__super__ = renderers.blocks.Q_Glass
renderers.blocks.Q_Backdrop_Glass.prototype = z(renderers.blocks.Q_Glass.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        var b = "stained" == this.variation ? lemongine.Mathz.repeatArray([.6 * Colors.colors.h[this.color].h.r, .6 * Colors.colors.h[this.color].h.g, .6 * Colors.colors.h[this.color].h.b, 1], 6) : lemongine.Mathz.repeatArray([.6, .6, .6, 1], 6);
        var a = this.quadPositions[0],
            c = new lemongine.Point(this.textureClip.x, this.textureClip.y),
            d = new lemongine.Point(this.textureClip.width, this.textureClip.height),
            f = new lemongine.Point(1, 1),
            l = new haxe.ds.StringMap();
        l.h.color = b;
        this.entity.updateQuad(a, this.destination, c, d, f, null, null, l);
    },
    __class__: renderers.blocks.Q_Backdrop_Glass
})