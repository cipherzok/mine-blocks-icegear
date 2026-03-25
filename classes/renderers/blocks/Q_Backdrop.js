renderers.blocks.Q_Backdrop = function (b, a, c) {
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_Backdrop"] = renderers.blocks.Q_Backdrop
renderers.blocks.Q_Backdrop.__name__ = "renderers.blocks.Q_Backdrop"
renderers.blocks.Q_Backdrop.__super__ = renderers.Q_Base
renderers.blocks.Q_Backdrop.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        var b = this.entity,
            a = this.quadPositions[0],
            c = this.destination,
            d = new lemongine.Point(this.textureClip.x, this.textureClip.y),
            f = new lemongine.Point(this.textureClip.width, this.textureClip.height),
            l = new lemongine.Point(1, 1),
            h = new haxe.ds.StringMap(),
            m = lemongine.Mathz.repeatArray([.6, .6, .6, 1], 6);
        h.h.color = m;
        b.updateQuad(a, c, d, f, l, null, null, h);
    },
    __class__: renderers.blocks.Q_Backdrop
})