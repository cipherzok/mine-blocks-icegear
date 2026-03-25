renderers.blocks.Q_TNT = function (b, a, c) {
    this.fusePercentage = 0;
    renderers.Q_Base.call(this, b, a, c);
}
m["renderers.blocks.Q_TNT"] = renderers.blocks.Q_TNT
renderers.blocks.Q_TNT.__name__ = "renderers.blocks.Q_TNT"
renderers.blocks.Q_TNT.__super__ = renderers.Q_Base
renderers.blocks.Q_TNT.prototype = z(renderers.Q_Base.prototype, {
    update: function () {
        0 == this.quadPositions.length && this.quadPositions.push(this.entity.nearestConsecutiveEmpty(1));
        var b = 0 == Math.floor(100 * this.fusePercentage / 5) % 2 ? 1 : 1.3,
            a = 1 + .5 * lemongine.Mathz.clamp(0, 1, (this.fusePercentage - .8) / .2),
            c = this.entity,
            d = this.quadPositions[0],
            f = new lemongine.Vector3(this.destination.x - (a - 1) / 2, this.destination.y - (a - 1) / 2, this.destination.z),
            l = new lemongine.Point(this.textureClip.x, this.textureClip.y),
            h = new lemongine.Point(this.textureClip.width, this.textureClip.height);
        a = new lemongine.Point(a, a);
        var m = new haxe.ds.StringMap();
        b = lemongine.Mathz.repeatArray([b, b, b, 1], 6);
        m.h.color = b;
        c.updateQuad(d, f, l, h, a, null, null, m);
    },
    __class__: renderers.blocks.Q_TNT
})