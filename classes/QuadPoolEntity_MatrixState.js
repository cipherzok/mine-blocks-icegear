var QuadPoolEntity_MatrixState = function (b, a, c, d) {
    this.v3 = new lemongine.Vector3();
    this.attributeMultipliers = new haxe.ds.StringMap();
    this.overrideEmptySearchIndex = -1;
    this.currentMatrix = new lemongine.Matrix4();
    lemongine.QuadPoolEntity.call(this, b, a, c, d);
};
m.QuadPoolEntity_MatrixState = QuadPoolEntity_MatrixState
QuadPoolEntity_MatrixState.__name__ = "QuadPoolEntity_MatrixState"
QuadPoolEntity_MatrixState.__super__ = lemongine.QuadPoolEntity
QuadPoolEntity_MatrixState.prototype = z(lemongine.QuadPoolEntity.prototype, {
    nearestConsecutiveEmpty: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 2);
        -1 < this.overrideEmptySearchIndex && (a = this.overrideEmptySearchIndex);
        return lemongine.QuadPoolEntity.prototype.nearestConsecutiveEmpty.call(this, b, a);
    },
    addQuad: function (b, a, c, d, f, l, p, h) {
        null == d && (d = !0);
        null == a && (a = new lemongine.Point());
        null == c && (c = null == this.texture ? new lemongine.Point() : new lemongine.Point(G.toFloat(this.texture.width), G.toFloat(this.texture.height)));
        for (var Q = Object.keys(this.attributeMultipliers.h), n = Q.length, m = 0; m < n;) {
            var ka = Q[m++];
            if (null != h && Object.prototype.hasOwnProperty.call(h.h, ka)) {
                var x = lemongine.Helpers.clone(h.h[ka]);
                h.h[ka] = x;
                x = 0;
                for (var w = h.h[ka].length; x < w;) {
                    var q = x++;
                    h.h[ka][q] *= this.attributeMultipliers.h[ka][q % this.attributeMultipliers.h[ka].length];
                }
            } else null == h && (h = new haxe.ds.StringMap()), 4 < this.attributeMultipliers.h[ka].length ? h.h[ka] = this.attributeMultipliers.h[ka] : (x = lemongine.Mathz.repeatArray(this.attributeMultipliers.h[ka], 6), h.h[ka] = x);
        }
        return d && 0 < this.unusedQuads.length ? this.updateQuad(this.nearestConsecutiveEmpty(1), b, a, c, f, l, p, h) : null == l ? (null == b && (b = new lemongine.Vector3()), null != f ? lemongine.QuadPoolEntity.prototype.addQuad.call(this, b, a, c, d, f, this.applyMatrixToVertices([b.x, b.y, b.z, b.x, b.y + f.y, b.z, b.x + f.x, b.y, b.z, b.x + f.x, b.y, b.z, b.x, b.y + f.y, b.z, b.x + f.x, b.y + f.y, b.z]), p, h) : lemongine.QuadPoolEntity.prototype.addQuad.call(this, b, a, c, d, f, this.applyMatrixToVertices([b.x, b.y, b.z, b.x, b.y + c.y, b.z, b.x + c.x, b.y, b.z, b.x + c.x, b.y, b.z, b.x, b.y + c.y, b.z, b.x + c.x, b.y + c.y, b.z]), p, h)) : lemongine.QuadPoolEntity.prototype.addQuad.call(this, b, a, c, d, f, this.applyMatrixToVertices(l), p, h);
    },
    applyMatrixToVertices: function (b) {
        for (var a = 0, c = b.length / 3 | 0; a < c;) {
            var d = a++;
            this.currentMatrix.apply(this.v3.set(b[3 * d], b[3 * d + 1], b[3 * d + 2]));
            b[3 * d] = this.v3.x;
            b[3 * d + 1] = this.v3.y;
            b[3 * d + 2] = this.v3.z;
        }
        return b;
    },
    updateQuad: function (b, a, c, d, f, l, p, h) {
        if (b >= this.size) return this.addQuad(a, c, d, !1, f, l, p, h);
        if (0 > b) return this.addQuad(a, c, d, !0, f, l, p, h);
        for (var Q = Object.keys(this.attributeMultipliers.h), n = Q.length, m = 0; m < n;) {
            var ka = Q[m++];
            if (null != h && Object.prototype.hasOwnProperty.call(h.h, ka)) {
                var x = lemongine.Helpers.clone(h.h[ka]);
                h.h[ka] = x;
                x = 0;
                for (var w = h.h[ka].length; x < w;) {
                    var q = x++;
                    h.h[ka][q] *= this.attributeMultipliers.h[ka][q % this.attributeMultipliers.h[ka].length];
                }
            } else null == h && (h = new haxe.ds.StringMap()), 4 < this.attributeMultipliers.h[ka].length ? h.h[ka] = this.attributeMultipliers.h[ka] : (x = lemongine.Mathz.repeatArray(this.attributeMultipliers.h[ka], 6), h.h[ka] = x);
        }
        return null != c || null != a || null != d || null != l || null != f ? (null == d && (d = new lemongine.Point(this.getAttrib("texClip").value[24 * b + 2], this.getAttrib("texClip").value[24 * b + 3])), null != c && (lemongine.Mathz.spliceInsert(this.clip, 24 * b, 24, lemongine.Mathz.repeatArray([c.x, c.y, d.x, d.y], 6)), this.setAttrib("texClip", this.clip, !1, 24 * b, 24)), null == l ? (null == a && (a = new lemongine.Vector3(this.mesh.vertices.value[18 * b], this.mesh.vertices.value[18 * b + 1], this.mesh.vertices.value[18 * b + 2])), null != f ? (l = this.arr[3] = this.arr[0] = a.x, this.arr[12] = l, l = this.arr[7] = this.arr[1] = a.y, this.arr[10] = l, l = this.arr[9] = this.arr[6] = a.x + f.x, this.arr[15] = l, l = this.arr[13] = this.arr[4] = a.y + f.y) : (l = this.arr[3] = this.arr[0] = a.x, this.arr[12] = l, l = this.arr[7] = this.arr[1] = a.y, this.arr[10] = l, l = this.arr[9] = this.arr[6] = a.x + d.x, this.arr[15] = l, l = this.arr[13] = this.arr[4] = a.y + d.y), this.arr[16] = l, l = this.arr[14] = this.arr[11] = this.arr[8] = this.arr[5] = this.arr[2] = a.z, this.arr[17] = l, lemongine.QuadPoolEntity.prototype.updateQuad.call(this, b, a, c, d, f, this.applyMatrixToVertices(this.arr), p, h)) : lemongine.QuadPoolEntity.prototype.updateQuad.call(this, b, a, c, d, f, this.applyMatrixToVertices(l), p, h)) : lemongine.QuadPoolEntity.prototype.updateQuad.call(this, b, a, c, d, f, null, p, h);
    },
    __class__: QuadPoolEntity_MatrixState
})