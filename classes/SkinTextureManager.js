var SkinTextureManager = function (b) {
    this.slotIDToSlot = new haxe.ds.StringMap();
    this.unusedSlots = [];
    this.slots = [];
    this.game = b;
    this.skinScene = new lemongine.Scene(810, 1012, lemongine.CameraType.ORTHOGRAPHIC, lemongine.Color.clear);
    this.skinScene.setup2D(810, 1012, lemongine.Color.clear);
    this.skinTexture = new lemongine.Image().fromScene(this.skinScene);
    b = 0;
    for (var a = Math.floor(this.skinScene.get_width() / SkinTextureManager.skinSize.x); b < a;) for (var c = b++, d = 0, f = Math.floor(this.skinScene.get_height() / SkinTextureManager.skinSize.y); d < f;) this.unusedSlots.push(new lemongine.Point(c * SkinTextureManager.skinSize.x, d++ * SkinTextureManager.skinSize.y));
};
m.SkinTextureManager = SkinTextureManager
SkinTextureManager.__name__ = "SkinTextureManager"
SkinTextureManager.prototype = {
    slotIDExists: function (b) {
        return Object.prototype.hasOwnProperty.call(this.slotIDToSlot.h, b);
    },
    getTextureSlot: function (b, a) {
        var c = this,
            d = null != this.game ? this.game.world.tick : Main.Instance.tick;
        if (!Object.prototype.hasOwnProperty.call(this.slotIDToSlot.h, b)) {
            if (0 < this.unusedSlots.length) {
                var f = this.unusedSlots.shift();
                this.slots.push({
                    slotID: b,
                    tickUpdated: d,
                    rect: new lemongine.Rectangle(f.x, f.y, SkinTextureManager.skinSize.x, SkinTextureManager.skinSize.y),
                    loaded: !1,
                    failed: !1
                });
                this.slotIDToSlot.h[b] = this.slots.length - 1;
            } else {
                var g = d - 1;
                f = -1;
                for (var p = this.slotIDToSlot.h, h = Object.keys(p), m = h.length, t = 0; t < m;) {
                    var M = p[h[t++]];
                    if (this.slots[M].failed || d - this.slots[M].tickUpdated > 10 * Main.Instance.get_fps()) {
                        f = M;
                        break;
                    }
                    this.slots[M].tickUpdated < g && (g = this.slots[M].tickUpdated, f = M);
                }
                if (-1 != f) g = this.slots[f].slotID, p = this.slotIDToSlot, Object.prototype.hasOwnProperty.call(p.h, g) && delete p.h[g], this.slots[f].slotID = b, this.slots[f].loaded = !1, this.slots[f].failed = !1, this.slotIDToSlot.h[b] = f, this.skinScene.fillRect(new lemongine.Rectangle(this.slots[f].rect.x, this.skinScene.get_height() - this.slots[f].rect.y - this.slots[f].rect.height, this.slots[f].rect.width, this.slots[f].rect.height), lemongine.Color.clear, 0, !0);else return SkinTextureManager.blankSlot;
            }
            null != a ? this.skinScene.draw2DFlipped(a, new lemongine.Point(this.slots[this.slotIDToSlot.h[b]].rect.x, this.skinScene.get_height() - this.slots[this.slotIDToSlot.h[b]].rect.y - this.slots[this.slotIDToSlot.h[b]].rect.height), new lemongine.Rectangle(0, 0, this.slots[this.slotIDToSlot.h[b]].rect.width, this.slots[this.slotIDToSlot.h[b]].rect.height)) : (a = function (a) {
                Object.prototype.hasOwnProperty.call(c.slotIDToSlot.h, b) && (c.skinScene.draw2DFlipped(a.skin, new lemongine.Point(c.slots[c.slotIDToSlot.h[b]].rect.x, c.skinScene.get_height() - c.slots[c.slotIDToSlot.h[b]].rect.y - c.slots[c.slotIDToSlot.h[b]].rect.height), new lemongine.Rectangle(0, 0, c.slots[c.slotIDToSlot.h[b]].rect.width, c.slots[c.slotIDToSlot.h[b]].rect.height)), c.slots[c.slotIDToSlot.h[b]].loaded = !0, c.slots[c.slotIDToSlot.h[b]].failed = !1);
            }, f = function () {
                Object.prototype.hasOwnProperty.call(c.slotIDToSlot.h, b) && (c.slots[c.slotIDToSlot.h[b]].loaded = !0, c.slots[c.slotIDToSlot.h[b]].failed = !0);
            }, null != this.game ? this.game.getSkinObject(null == b ? "null" : "" + b, a, f) : (g = new Skin(), g.resetFrames(), SkinLoader.getSkinFrom("https://mineblocks.com/1/skins/" + b + ".png", g, 0, a, f)));
        }
        this.slots[this.slotIDToSlot.h[b]].tickUpdated = d;
        return this.slots[this.slotIDToSlot.h[b]];
    },
    updateTextureSlot: function (b, a) {
        Object.prototype.hasOwnProperty.call(this.slotIDToSlot.h, b.slotID) && (this.skinScene.fillRect(new lemongine.Rectangle(b.rect.x, this.skinScene.get_height() - b.rect.y - b.rect.height, b.rect.width, b.rect.height), lemongine.Color.clear, 0, !0), this.skinScene.draw2DFlipped(a, new lemongine.Point(b.rect.x, this.skinScene.get_height() - b.rect.y - b.rect.height), new lemongine.Rectangle(0, 0, b.rect.width, b.rect.height)));
    },
    __class__: SkinTextureManager
}
SkinTextureManager.skinSize = new lemongine.Point(272, 22)
SkinTextureManager.blankSlot = {
    slotID: "-1",
    tickUpdated: -1,
    rect: new lemongine.Rectangle(0, 0, 0, 0),
    loaded: !0,
    failed: !1
}