var Clouds = function (b, a) {
    this.y = 0;
    this.startCloud = !1;
    this.cloudCols = 0;
    this.cloudSize = 26;
    this.cloudCount = 0;
    this.clouds = [];
    this.game = b;
    this.world = a;
    var c = lemongine.Image.getWhitePixel(),
        d = shader.BlockShader.getShader(),
        f = new haxe.ds.StringMap(),
        l = lemongine.Mathz.repeatArray([1], 24);
    f.h.color = l;
    l = lemongine.Mathz.repeatArray([0], 24);
    f.h.colorOffset = l;
    this.entity = new lemongine.QuadPoolEntity(c, null, d, f);
    this.entity.isTransparent = !0;
    this.entity.layer = -5;
    this.y = Math.floor(-a.worldHeight - 3.3333333333333335);
    if (1 == a.sceneNum) for (this.cloudCols = Math.ceil(b.scene.get_width() / this.cloudSize + 1), f = 0, b = this.cloudCols; f < b;) c = f++, 0 == (Math.random() * (5 - 2 * a.raining) | 0) && 1 != this.startCloud && (this.startCloud = !0), 1 == this.startCloud && (0 != (Math.random() * (5 + 3 * a.raining) | 0) && this.appendCloud(c * this.cloudSize - this.cloudSize / 2, this.cloudSize), 1 < GlobalSave.qual && (0 != (Math.random() * (5 + 3 * a.raining) | 0) && this.appendCloud(c * this.cloudSize - this.cloudSize / 2, 0), 0 != (Math.random() * (5 + 3 * a.raining) | 0) && this.appendCloud(c * this.cloudSize - this.cloudSize / 2, -this.cloudSize)), 1 == (Math.random() * (10 + 3 * a.raining) | 0) && (this.startCloud = !1));
};
m.Clouds = Clouds
Clouds.__name__ = "Clouds"
Clouds.prototype = {
    appendCloud: function (b, a) {
        .1 > Math.random() ? this.clouds.push({
            x: b,
            y: a,
            alpha: 0,
            upTween: !0,
            alphaUp: !1,
            alphaDown: !1,
            rain: 0 < this.world.raining
        }) : this.clouds.push({
            x: b,
            y: a,
            alpha: 1,
            upTween: !1,
            alphaUp: !1,
            alphaDown: !1,
            rain: 0 < this.world.raining
        });
    },
    prependCloud: function (b, a) {
        .1 > Math.random() ? this.clouds.unshift({
            x: b,
            y: a,
            alpha: 0,
            upTween: !0,
            alphaUp: !1,
            alphaDown: !1,
            rain: 0 < this.world.raining
        }) : this.clouds.unshift({
            x: b,
            y: a,
            alpha: 1,
            upTween: !1,
            alphaUp: !1,
            alphaDown: !1,
            rain: 0 < this.world.raining
        });
    },
    update: function () {
        if (1 == this.world.sceneNum) {
            this.game.get_pawsed() || (this.cloudCount += .5, this.cloudCount >= this.cloudSize && (this.cloudCount = 0, 0 == (Math.random() * (5 - 2 * this.world.raining) | 0) && 0 == this.startCloud && (this.startCloud = !0), 1 == this.startCloud && (0 != (Math.random() * (5 + 3 * this.world.raining) | 0) && this.prependCloud(-this.cloudSize / 2, this.cloudSize), 1 < GlobalSave.qual && (0 != (Math.random() * (5 + 3 * this.world.raining) | 0) && this.prependCloud(-this.cloudSize / 2, 0), 0 != (Math.random() * (5 + 3 * this.world.raining) | 0) && this.prependCloud(-this.cloudSize / 2, -this.cloudSize)), 1 == (Math.random() * (10 + 3 * this.world.raining) | 0) && (this.startCloud = !1))));
            var b = this.y > this.game.camera.y - this.game.scene.get_height() / 2 / this.game.zoom - this.cloudSize && this.y < this.game.camera.y + this.game.scene.get_height() / 2 / this.game.zoom + 2 * this.cloudSize;
            this.entity.clearPool(!0);
            for (var a = -1, c = 0, d = this.clouds.length; c < d;) {
                var f = c++,
                    l = this.clouds[f];
                this.game.get_pawsed() || (l.x += .5, 1.6666666666666666E-4 > Math.random() && (l.upTween ? l.alphaUp = !0 : l.alphaDown = !0), l.alphaUp && (1 > l.alpha ? l.alpha += .01 : (l.alphaUp = !1, l.upTween = !1)), l.alphaDown && (0 < l.alpha ? l.alpha -= .01 : (l.alphaDown = !1, l.upTween = !0)));
                0 < this.world.raining && (l.rain = !0);
                if (l.x >= this.game.scene.get_width() + this.cloudSize) -1 == a && (a = f);else if (b) {
                    f = this.entity;
                    var p = new lemongine.Vector3((l.x - this.cloudSize / 2) / 30, (l.y - this.cloudSize / 2) / 30),
                        Q = new lemongine.Point(1, 1),
                        h = new lemongine.Point(this.cloudSize / 30, this.cloudSize / 30),
                        n = new haxe.ds.StringMap();
                    l = lemongine.Mathz.repeatArray([l.rain ? 0 : 1, l.rain ? 0 : 1, l.rain ? 0 : 1, .2 * l.alpha], 6);
                    n.h.color = l;
                    f.addQuad(p, null, Q, !0, h, null, null, n);
                }
            }
            -1 < a && this.clouds.splice(a, this.clouds.length - a);
            b && (this.entity.transform.reset().translate(0, Math.floor((this.y - this.game.camera.y) * this.game.zoom) / this.game.zoom).scale(this.game.zoom, this.game.zoom, this.game.zoom).translate(0, this.game.scene.get_height() / 2), this.game.scene.draw(this.entity));
        }
    },
    __class__: Clouds
}