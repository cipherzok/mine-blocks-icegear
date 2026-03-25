var Scavenger_Item = function (b, a, c) {
    this.item = Game.emptyItem();
    this.spawnSparkles = !1;
    this.id = b;
    if (null == a) a = new haxe.ds.StringMap();else {
        var d = new haxe.ds.StringMap();
        d.h.type = a;
        a = d;
    }
    this.extras = a;
    var f = null,
        l = null;
    if (null != c) {
        if (null != c.sc) {
            f = [];
            d = 0;
            for (var p = c.sc; d < p.length;) {
                var k = p[d];
                ++d;
                if (null != k) {
                    var n = k.indexOf(";");
                    if (-1 < n) {
                        a = HxOverrides.substr(k, 0, n);
                        var m = new haxe.ds.StringMap();
                        m.h.type = HxOverrides.substr(k, n + 1, null);
                        f.push(Game.item(a, 1, 0, m));
                    } else f.push(Game.item(k));
                } else f.push(null);
            }
            f.push(Game.item(b, null == c.oq ? 1 : c.oq, 0, this.extras));
        }
        if (null != c.bc) {
            l = [];
            d = 0;
            for (p = c.bc; d < p.length;) k = p[d], ++d, null != k ? (n = k.indexOf(";"), -1 < n ? (a = HxOverrides.substr(k, 0, n), m = new haxe.ds.StringMap(), m.h.type = HxOverrides.substr(k, n + 1, null), l.push(Game.item(a, 1, 0, m))) : l.push(Game.item(k))) : l.push(null);
            l.push(Game.item(b, null == c.oq ? 1 : c.oq, 0, this.extras));
        }
    }
    this.tooltipData = {
        t: null == c || null == c.t ? "" : c.t,
        sc: f,
        bc: l
    };
    this.item = Game.item(b, 1, 0, this.extras);
};
m.Scavenger_Item = Scavenger_Item
Scavenger_Item.__name__ = "Scavenger_Item"
Scavenger_Item.prototype = {
    __class__: Scavenger_Item
}