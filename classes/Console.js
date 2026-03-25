var Console = function (b, a, c) {
    this.scene = b;
    this.layer = c;
    if (a) {
        b = lemongine.Image.getWhitePixel();
        a = shader.BlockShader.getShader();
        var d = new haxe.ds.StringMap(),
            f = lemongine.Mathz.repeatArray([1], 24);
        d.h.color = f;
        f = lemongine.Mathz.repeatArray([0], 24);
        d.h.colorOffset = f;
        this.entity = new lemongine.QuadPoolEntity(b, null, a, d);
        this.entity.isTransparent = !0;
        this.entity.layer = c;
    }
};
m.Console = Console
Console.__name__ = "Console"
Console.newLine = function (b, a, c) {
    null == a && (a = 0);
    for (Console.messageHistory.unshift({
        text: b,
        hangingIndent: a,
        fragments: new haxe.ds.IntMap(),
        timer: 0,
        alpha: 1,
        color: c
    }); 100 < Console.messageHistory.length;) Console.messageHistory.pop();
}
Console.clearAll = function () {
    Console.messageHistory = [];
}
Console.getFragments = function (b, a) {
    if (b.fragments.h.hasOwnProperty(a)) return b.fragments.h[a];
    var c = b.hangingIndent;
    -1 < b.text.indexOf("\r") && (c = Math.min(c, b.text.indexOf("\r")) | 0);
    -1 < b.text.indexOf("\n") && (c = Math.min(c, b.text.indexOf("\n")) | 0);
    c = HxOverrides.substr(b.text, 0, c);
    if (c.length >= Math.floor(a / 7)) {
        var d = Game.wordWrap(b.text, Fonts.get_basis33(), a).split("\n");
        b.fragments.h[a] = [];
        for (var f = 0; f < d.length;) b.fragments.h[a].unshift({
            text: d[f++],
            timer: b.timer,
            alpha: b.alpha
        });
    } else {
        d = Game.wordWrap(HxOverrides.substr(b.text, c.length, null), Fonts.get_basis33(), a - 7 * b.hangingIndent).split("\n");
        b.fragments.h[a] = [];
        f = 0;
        for (var l = d.length; f < l;) {
            var g = f++;
            d[g] = 0 == g ? c + d[g] : StringTools.rpad("", " ", b.hangingIndent) + d[g];
            b.fragments.h[a].unshift({
                text: d[g],
                timer: b.timer,
                alpha: b.alpha
            });
        }
    }
    return b.fragments.h[a];
}
Console.prototype = {
    renderHistory: function (b, a, c) {
        null != this.entity && this.entity.clearPool(!0);
        for (var d = 0, f = 0, l = Math.min(Console.messageHistory.length, c) | 0; f < l;) {
            for (var p = Console.messageHistory[f++], Q = Console.getFragments(p, a - 6), h = 0; h < Q.length;) {
                var n = Q[h++];
                if (null != this.entity) {
                    var M = this.entity,
                        m = new lemongine.Vector3(0, -15 * (d + 1)),
                        T = new lemongine.Point(1, 1),
                        x = new lemongine.Point(a, 15),
                        w = new haxe.ds.StringMap(),
                        q = lemongine.Mathz.repeatArray([0, 0, 0, .3], 6);
                    w.h.color = q;
                    M.addQuad(m, null, T, !0, x, null, null, w);
                }
                n = TextCache.get("console" + d, n.text, new lemongine.Point(b.x + 3, b.y - 15 * (d + 1)), Fonts.get_basis33(), null != p.color ? p.color : lemongine.Color.white, 1);
                n.layer = this.layer + 1;
                n.isTransparent = !0;
                this.scene.draw(n);
                ++d;
                if (d >= c) break;
            }
            if (d >= c) break;
        }
        null != this.entity && (this.entity.transform.reset().translate(b.x, b.y), this.scene.draw(this.entity));
    },
    update: function (b, a) {
        null == a && (a = !1);
        null == b && (b = !0);
        b && this.entity.clearPool(!0);
        for (var c = 0, d = Math.min(Console.messageHistory.length, (this.scene.get_height() - 118 + 10) / 15) | 0, f = 0; f < d;) {
            for (var l = Console.messageHistory[f++], p = !0, Q = Console.getFragments(l, this.scene.get_width() - 50 - 6), h = 0, rb = Q.length; h < rb;) {
                var M = h++,
                    m = Q[M];
                m.timer = Math.floor(Math.min(m.timer + 1, 8 * Main.Instance.get_fps()));
                !a && (m.timer >= 8 * Main.Instance.get_fps() || -105 > c) && (m.alpha -= .025, 0 == M && (l.alpha = m.alpha, l.timer = m.timer));
                if (!(0 >= m.alpha)) {
                    p = !1;
                    if (b) {
                        M = this.entity;
                        var T = new lemongine.Vector3(0, c),
                            x = new lemongine.Point(1, 1),
                            w = new lemongine.Point(this.scene.get_width() - 50, 15),
                            q = new haxe.ds.StringMap(),
                            C = lemongine.Mathz.repeatArray([0, 0, 0, .3 * m.alpha], 6);
                        q.h.color = C;
                        M.addQuad(T, null, x, !0, w, null, null, q);
                        m = TextCache.get("console" + c, m.text, new lemongine.Point(28, this.scene.get_height() - 118 + c), Fonts.get_basis33(), new lemongine.Color(16777216 * Math.floor(255 * m.alpha) + (null != l.color ? l.color.get_hex() & 16777215 : 16777215)), 1);
                        m.layer = 8;
                        m.isTransparent = !0;
                        this.scene.draw(m);
                    }
                    c -= 15;
                }
            }
            if (p) break;
        }
        b && (this.entity.transform.reset().translate(25, this.scene.get_height() - 118), this.scene.draw(this.entity));
    },
    __class__: Console
}
Console.messageHistory = []