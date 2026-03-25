var Skin = function (b) {
    this.loading = this.loaded = this.failed = !1;
    null != b ? (this.skin = b, this.loaded = !0) : this.skin = new lemongine.Image(272, 22);
};
m.Skin = Skin
Skin.__name__ = "Skin"
Skin.prototype = {
    resetFrames: function () {
        this.skin.clear();
    },
    __class__: Skin
}
Skin.frameSize = new lemongine.Point(16, 22)
Skin.idle = new lemongine.Point(0, 0)
Skin.jump = new lemongine.Point(128, 0)