var RenderChunk = function (b, a, c) {
    this.changes = new haxe.ds.StringMap();
    this.blocksRendering = 0;
    this.xChunk = b;
    this.yChunk = a;
    this.world = c;
};
m.RenderChunk = RenderChunk
RenderChunk.__name__ = "RenderChunk"
RenderChunk.prototype = {
    init: function () {
        var b = Textures.blockTextures,
            a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
            c = new haxe.ds.StringMap(),
            d = lemongine.Mathz.repeatArray([1], 24);
        c.h.color = d;
        d = lemongine.Mathz.repeatArray([0], 24);
        c.h.colorOffset = d;
        this.entity = new lemongine.QuadPoolEntity(b, null, a, c);
        this.entity.isTransparent = !0;
    },
    render: function () {
        null == this.entity && this.init();
        for (var b = this.blocksRendering = 0; 16 > b;) for (var a = b++, c = 0; 16 > c;) {
            var d = c++,
                f = this.world.getBlock(16 * this.xChunk + a, 16 * this.yChunk + d, !0);
            null != f && (f.renderChunk = this, f.render(a, 16 - d - 1, this.entity));
        }
    },
    renderBlock: function (b, a) {
        if (null == this.entity) this.render();else {
            var c = this.world.getBlock(b, a, !0);
            if (null != c) {
                var d = b - 16 * this.xChunk,
                    f = a - 16 * this.yChunk;
                0 > d || 16 <= d || 0 > f || 16 <= f ? haxe.Log.trace("ERROR: Block (" + b + ", " + a + ") does not belong to render chunk (" + this.xChunk + ", " + this.yChunk + ")", {
                    fileName: "src/RenderChunk.hx",
                    lineNumber: 52,
                    className: "RenderChunk",
                    methodName: "renderBlock"
                }) : (c.renderChunk = this, c.render(d, 16 - f - 1, this.entity));
            }
        }
    },
    addChange: function (b, a) {
        this.changes.h[b + "," + a] = new lemongine.Point(b, a);
    },
    renderChanges: function () {
        for (var b = this.changes.h, a = Object.keys(b), c = a.length, d = 0; d < c;) {
            var f = b[a[d++]];
            this.renderBlock(f.x | 0, f.y | 0);
        }
        this.changes.h = Object.create(null);
    },
    __class__: RenderChunk
}