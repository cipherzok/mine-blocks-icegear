renderers.blocks.Q_CoralLantern = function (b, a, c) {
    this.isItem = !1;
    this.worldLocation = new lemongine.Point(0, 0);
    this.gradientQuadPositions = [];
    renderers.blocks.Q_Torch.call(this, b, a, c);
}
m["renderers.blocks.Q_CoralLantern"] = renderers.blocks.Q_CoralLantern
renderers.blocks.Q_CoralLantern.__name__ = "renderers.blocks.Q_CoralLantern"
renderers.blocks.Q_CoralLantern.__super__ = renderers.blocks.Q_Torch
renderers.blocks.Q_CoralLantern.prototype = z(renderers.blocks.Q_Torch.prototype, {
    update: function () {
        if (!this.isItem && 0 == this.gradientQuadPositions.length) {
            var b = Main.Instance.game.worldGradientEntity.nearestConsecutiveEmpty(2);
            this.gradientQuadPositions[0] = b;
            this.gradientQuadPositions[1] = b + 1;
            b = Main.Instance.game.worldGradientEntity;
            var a = this.gradientQuadPositions[0],
                c = new lemongine.Vector3(this.worldLocation.x + .5 - 6.89, -this.worldLocation.y - .5 - 6.89),
                d = new lemongine.Point(),
                f = new lemongine.Point(1, 1),
                l = new lemongine.Point(13.78, 13.78),
                h = new haxe.ds.StringMap(),
                m = lemongine.Mathz.repeatArray([1, .38, 1, .3], 6);
            h.h.colori = m;
            m = lemongine.Mathz.repeatArray([1, .38, 1, 0], 6);
            h.h.coloro = m;
            b.updateQuad(a, c, d, f, l, null, null, h);
            b = Main.Instance.game.worldGradientEntity;
            a = this.gradientQuadPositions[1];
            c = new lemongine.Vector3(this.worldLocation.x + .5 - 1.5, -this.worldLocation.y - .5 - 1.5);
            d = new lemongine.Point();
            f = new lemongine.Point(1, 1);
            l = new lemongine.Point(3, 3);
            h = new haxe.ds.StringMap();
            m = lemongine.Mathz.repeatArray([1, .38, 1, .3], 6);
            h.h.colori = m;
            m = lemongine.Mathz.repeatArray([1, .38, 1, 0], 6);
            h.h.coloro = m;
            b.updateQuad(a, c, d, f, l, null, null, h);
        }
        renderers.blocks.Q_Torch.prototype.update.call(this);
    },
    destroy: function () {
        for (var b = 0, a = this.gradientQuadPositions.length; b < a;) ++b, Main.Instance.game.worldGradientEntity.removeQuad(this.gradientQuadPositions.pop(), !0);
        renderers.blocks.Q_Torch.prototype.destroy.call(this);
    },
    fromBlock: function (b) {
        this.worldLocation.set(b.x, b.y);
        this.isItem = !1;
        return renderers.blocks.Q_Torch.prototype.fromBlock.call(this, b);
    },
    fromItem: function (b) {
        this.isItem = !0;
        return renderers.blocks.Q_Torch.prototype.fromItem.call(this, b);
    },
    __class__: renderers.blocks.Q_CoralLantern
})