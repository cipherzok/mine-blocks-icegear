lemongine.QuadPoolEntity = function (b, a, c, d) {
    this.arr = [];
    this.extraAttribsNamesAndDefaults = new haxe.ds.StringMap();
    this.useColorUniforms = !0;
    this.colorOffset = [0, 0, 0, 0];
    this.color = new lemongine.Color(-1);
    this.clip = [];
    this.hasCustomAttribValues = new haxe.ds.StringMap();
    this.hasCustomUVs = new haxe.ds.IntMap();
    this.unclearedQuadsMap = new haxe.ds.IntMap();
    this.unusedQuadsMap = new haxe.ds.IntMap();
    this.unusedQuads = [];
    this.size = this.numQuads = 0;
    a = lemongine.shader.BlendMode.NORMAL;
    if (null == c) c = lemongine.shader.BasicTexture.getShader(a);else if (this.useColorUniforms = !1, null != d) {
        this.extraAttribsNamesAndDefaults = d;
        a = Object.keys(d.h);
        d = a.length;
        for (var f = 0; f < d;) this.hasCustomAttribValues.h[a[f++]] = new haxe.ds.IntMap();
    }
    lemongine.Entity.call(this, [], new lemongine.Mesh([], null, []), c);
    this.set_texture(b);
    this.updateShaderAttribs();
}
m["lemongine.QuadPoolEntity"] = lemongine.QuadPoolEntity
lemongine.QuadPoolEntity.__name__ = "lemongine.QuadPoolEntity"
lemongine.QuadPoolEntity.__super__ = lemongine.Entity
lemongine.QuadPoolEntity.prototype = z(lemongine.Entity.prototype, {
    updateShaderAttribs: function () {
        this.setColor(this.color);
        this.setColorOffset(this.colorOffset[0], this.colorOffset[1], this.colorOffset[2], this.colorOffset[3]);
        this.setAttrib("texClip", this.clip);
        for (var b = Object.keys(this.extraAttribsNamesAndDefaults.h), a = b.length, c = 0; c < a;) {
            var d = b[c++];
            null == this.getAttrib(d) && this.setAttrib(d, []);
        }
        this.set_texture(this.texture);
    },
    setColor: function (b) {
        this.color = b;
        this.useColorUniforms && this.setUniform("color", [G.toFloat(b.r) / G.toFloat(255), G.toFloat(b.g) / G.toFloat(255), G.toFloat(b.b) / G.toFloat(255), G.toFloat(b.a) / G.toFloat(255)]);
    },
    setColorOffset: function (b, a, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == a && (a = 0);
        null == b && (b = 0);
        this.colorOffset = [b, a, c, d];
        this.useColorUniforms && this.setUniform("colorOffset", [b, a, c, d]);
    },
    set_texture: function (b) {
        null != b && (this.texture = b, this.setTextureBuffer("texture", this.texture), this.setUniform("texSize", [this.texture.width, this.texture.height]));
        return b;
    },
    addQuad: function (b, a, c, d, f, g, p, h) {
        null == d && (d = !0);
        null == a && (a = new lemongine.Point());
        null == c && (c = null == this.texture ? new lemongine.Point() : new lemongine.Point(G.toFloat(this.texture.width), G.toFloat(this.texture.height)));
        if (d && 0 < this.unusedQuads.length) return this.updateQuad(this.nearestConsecutiveEmpty(1), b, a, c, f, g, p, h);
        null == g ? (null == b && (b = new lemongine.Vector3()), null != f ? lemongine.Mathz.pushAll(this.mesh.getVertices(), [b.x, b.y, b.z, b.x, b.y + f.y, b.z, b.x + f.x, b.y, b.z, b.x + f.x, b.y, b.z, b.x, b.y + f.y, b.z, b.x + f.x, b.y + f.y, b.z]) : lemongine.Mathz.pushAll(this.mesh.getVertices(), [b.x, b.y, b.z, b.x, b.y + c.y, b.z, b.x + c.x, b.y, b.z, b.x + c.x, b.y, b.z, b.x, b.y + c.y, b.z, b.x + c.x, b.y + c.y, b.z])) : lemongine.Mathz.pushAll(this.mesh.getVertices(), g);
        null != p ? (this.hasCustomUVs.h[this.size] = !0, lemongine.Mathz.pushAll(this.mesh.getUVs(), p)) : lemongine.Mathz.pushAll(this.mesh.getUVs(), lemongine.QuadPoolEntity.defaultUVs);
        this.mesh.vertices.setDirty(!0);
        this.mesh.uvs.setDirty(!0);
        lemongine.Mathz.pushAll(this.clip, lemongine.Mathz.repeatArray([a.x, a.y, c.x, c.y], 6));
        this.setAttrib("texClip", this.clip);
        b = Object.keys(this.extraAttribsNamesAndDefaults.h);
        a = b.length;
        for (c = 0; c < a;) d = b[c++], null != h && Object.prototype.hasOwnProperty.call(h.h, d) ? (this.hasCustomAttribValues.h[d].h[this.size] = !0, lemongine.Mathz.pushAll(this.getAttrib(d).value, h.h[d])) : (f = this.extraAttribsNamesAndDefaults.h[d], lemongine.Mathz.pushAll(this.getAttrib(d).value, f)), this.getAttrib(d).setDirty(!0);
        this.numQuads++;
        return this.size++;
    },
    nearestConsecutiveEmpty: function (b, a) {
        null == a && (a = 0);
        null == b && (b = 2);
        for (var c, d = 0, f = this.unusedQuads; d < f.length;) {
            var g = f[d];
            ++d;
            if (this.unusedQuadsMap.h.hasOwnProperty(g) && !(g < a)) {
                c = !1;
                for (var p = 1; p < b;) {
                    var k = p++;
                    if (g + k >= this.size) return g;
                    if (!this.unusedQuadsMap.h.hasOwnProperty(g + k)) {
                        c = !0;
                        break;
                    }
                }
                if (!c) return g;
            }
        }
        return this.size;
    },
    updateQuad: function (b, a, c, d, f, g, p, h) {
        if (b >= this.size) return this.addQuad(a, c, d, !1, f, g, p, h);
        if (0 > b) return this.addQuad(a, c, d, !0, f, g, p, h);
        this.unusedQuadsMap.h.hasOwnProperty(b) && (this.numQuads++, HxOverrides.remove(this.unusedQuads, b), this.unusedQuadsMap.remove(b), this.unclearedQuadsMap.remove(b));
        if (null != c || null != a || null != d || null != g || null != f) null == d && (d = new lemongine.Point(this.getAttrib("texClip").value[24 * b + 2], this.getAttrib("texClip").value[24 * b + 3])), null != c && (lemongine.Mathz.spliceInsert(this.clip, 24 * b, 24, lemongine.Mathz.repeatArray([c.x, c.y, d.x, d.y], 6)), this.setAttrib("texClip", this.clip, !1, 24 * b, 24)), null == g ? (null == a && (a = new lemongine.Vector3(this.mesh.vertices.value[18 * b], this.mesh.vertices.value[18 * b + 1], this.mesh.vertices.value[18 * b + 2])), null != f ? (c = this.arr[3] = this.arr[0] = a.x, this.arr[12] = c, c = this.arr[7] = this.arr[1] = a.y, this.arr[10] = c, c = this.arr[9] = this.arr[6] = a.x + f.x, this.arr[15] = c, c = this.arr[13] = this.arr[4] = a.y + f.y) : (c = this.arr[3] = this.arr[0] = a.x, this.arr[12] = c, c = this.arr[7] = this.arr[1] = a.y, this.arr[10] = c, c = this.arr[9] = this.arr[6] = a.x + d.x, this.arr[15] = c, c = this.arr[13] = this.arr[4] = a.y + d.y), this.arr[16] = c, c = this.arr[14] = this.arr[11] = this.arr[8] = this.arr[5] = this.arr[2] = a.z, this.arr[17] = c) : (this.arr[0] = g[0], this.arr[1] = g[1], this.arr[2] = g[2], this.arr[3] = g[3], this.arr[4] = g[4], this.arr[5] = g[5], this.arr[6] = g[6], this.arr[7] = g[7], this.arr[8] = g[8], this.arr[9] = g[9], this.arr[10] = g[10], this.arr[11] = g[11], this.arr[12] = g[12], this.arr[13] = g[13], this.arr[14] = g[14], this.arr[15] = g[15], this.arr[16] = g[16], this.arr[17] = g[17]), lemongine.Mathz.spliceInsert(this.mesh.vertices.value, 18 * b, 18, this.arr), this.mesh.vertices.setDirty(!1, 18 * b, 18);
        null != p ? (this.hasCustomUVs.h[b] = !0, lemongine.Mathz.spliceInsert(this.mesh.uvs.value, 12 * b, 12, p), this.mesh.uvs.setDirty(!1, 12 * b, 12)) : this.hasCustomUVs.h.hasOwnProperty(b) && (this.hasCustomUVs.remove(b), lemongine.Mathz.spliceInsert(this.mesh.uvs.value, 12 * b, 12, lemongine.QuadPoolEntity.defaultUVs), this.mesh.uvs.setDirty(!1, 12 * b, 12));
        a = Object.keys(this.extraAttribsNamesAndDefaults.h);
        d = a.length;
        for (f = 0; f < d;) p = a[f++], null == h || null == h.h[p] ? this.hasCustomAttribValues.h[p].h.hasOwnProperty(b) && (this.hasCustomAttribValues.h[p].remove(b), lemongine.Mathz.spliceInsert(this.getAttrib(p).value, b * this.extraAttribsNamesAndDefaults.h[p].length, this.extraAttribsNamesAndDefaults.h[p].length, this.extraAttribsNamesAndDefaults.h[p]), this.getAttrib(p).setDirty(!1, b * this.extraAttribsNamesAndDefaults.h[p].length, this.extraAttribsNamesAndDefaults.h[p].length)) : (this.hasCustomAttribValues.h[p].h[b] = !0, lemongine.Mathz.spliceInsert(this.getAttrib(p).value, b * h.h[p].length, h.h[p].length, h.h[p]), this.getAttrib(p).setDirty(!1, b * h.h[p].length, h.h[p].length));
        return b;
    },
    removeQuad: function (b, a) {
        null == a && (a = !0);
        null == b && (b = 0);
        0 > b || b >= this.size || (a ? this.updateQuad(b, new lemongine.Vector3(), new lemongine.Point(), new lemongine.Point()) : this.unclearedQuadsMap.h[b] = !0, this.unusedQuadsMap.h.hasOwnProperty(b) || (this.numQuads--, lemongine.Sort.insert(this.unusedQuads, b, function (a, b) {
            return a - b;
        }), this.unusedQuadsMap.h[b] = !0));
    },
    clearPool: function (b, a) {
        null == a && (a = !1);
        null == b && (b = !1);
        this.numQuads = 0;
        if (b) {
            this.mesh.vertices.value.splice(0, this.mesh.vertices.value.length);
            this.mesh.vertices.setDirty(!0);
            this.mesh.getUVs().splice(0, this.mesh.getUVs().length);
            this.mesh.uvs.setDirty(!0);
            this.clip = [];
            this.setAttrib("texClip", this.clip, !0);
            a = Object.keys(this.extraAttribsNamesAndDefaults.h);
            for (var c = a.length, d = 0; d < c;) b = a[d++], this.hasCustomAttribValues.h[b] = new haxe.ds.IntMap(), this.setAttrib(b, []);
            this.hasCustomUVs = new haxe.ds.IntMap();
            this.unusedQuads = [];
            this.unusedQuadsMap = new haxe.ds.IntMap();
            this.unclearedQuadsMap = new haxe.ds.IntMap();
            this.size = 0;
        } else {
            if (a) {
                c = 0;
                for (d = this.mesh.vertices.value.length; c < d;) this.mesh.vertices.value[c++] = 0;
                this.mesh.vertices.setDirty(!1, 0, this.mesh.vertices.value.length);
            }
            this.unusedQuads = [];
            c = 0;
            for (d = this.size; c < d;) b = c++, this.unusedQuads[b] = b, this.unusedQuadsMap.h.hasOwnProperty(b) || (this.unusedQuadsMap.h[b] = !0, a || (this.unclearedQuadsMap.h[b] = !0));
        }
    },
    resetUnusedQuads: function () {
        for (var b = this.unclearedQuadsMap.keys(); b.hasNext();) {
            var a = b.next();
            lemongine.Mathz.spliceInsert(this.clip, 24 * a, 24, lemongine.Mathz.repeatArray([0], 24));
            lemongine.Mathz.spliceInsert(this.mesh.getVertices(), 18 * a, 18, lemongine.Mathz.repeatArray([0], 18));
            this.unclearedQuadsMap.remove(a);
        }
        this.mesh.vertices.setDirty();
        this.setAttrib("texClip", this.clip);
    },
    add9Slice: function (b, a, c, d, f, g) {
        null == g && (g = 1);
        null == d && (d = 0);
        null == a && (a = new lemongine.Rectangle(0, 0, G.toFloat(this.texture.width), G.toFloat(this.texture.height)));
        var l = this.nearestConsecutiveEmpty(9);
        this.update9Slice(l, b, a, c, d, f, g);
        return l;
    },
    update9Slice: function (b, a, c, d, f, g, p) {
        null == p && (p = 1);
        null == f && (f = 0);
        var l = d.x * p,
            h = d.y * p;
        this.updateQuad(b, new lemongine.Vector3(a.x, a.y, f), new lemongine.Point(c.x, c.y), new lemongine.Point(d.x, d.y), new lemongine.Point(l, h), null, null, g);
        l = c.x + d.x;
        h = a.width - (c.width - d.width) * p;
        var n = d.y * p;
        this.updateQuad(b + 1, new lemongine.Vector3(a.x + d.x * p, a.y, f), new lemongine.Point(l, c.y), new lemongine.Point(d.width, d.y), new lemongine.Point(h, n), null, null, g);
        this.updateQuad(b + 2, new lemongine.Vector3(a.x + a.width - (c.width - d.get_right()) * p, a.y, f), new lemongine.Point(c.x + d.get_right(), c.y), new lemongine.Point(c.width - d.get_right(), d.y), new lemongine.Point((c.width - d.get_right()) * p, d.y * p), null, null, g);
        var m = c.x;
        l = c.y + d.y;
        h = d.x * p;
        n = a.height - (c.height - d.height) * p;
        this.updateQuad(b + 3, new lemongine.Vector3(a.x, a.y + d.y * p, f), new lemongine.Point(m, l), new lemongine.Point(d.x, d.height), new lemongine.Point(h, n), null, null, g);
        l = c.x + d.x;
        h = c.y + d.y;
        n = a.width - (c.width - d.width) * p;
        m = a.height - (c.height - d.height) * p;
        this.updateQuad(b + 4, new lemongine.Vector3(a.x + d.x * p, a.y + d.y * p, f), new lemongine.Point(l, h), new lemongine.Point(d.width, d.height), new lemongine.Point(n, m), null, null, g);
        this.updateQuad(b + 5, new lemongine.Vector3(a.x + a.width - (c.width - d.get_right()) * p, a.y + d.y * p, f), new lemongine.Point(c.x + d.get_right(), c.y + d.y), new lemongine.Point(c.width - d.get_right(), d.height), new lemongine.Point((c.width - d.get_right()) * p, a.height - (c.height - d.height) * p), null, null, g);
        this.updateQuad(b + 6, new lemongine.Vector3(a.x, a.y + a.height - (c.height - d.get_bottom()) * p, f), new lemongine.Point(c.x, c.y + d.get_bottom()), new lemongine.Point(d.x, c.height - d.get_bottom()), new lemongine.Point(d.x * p, (c.height - d.get_bottom()) * p), null, null, g);
        this.updateQuad(b + 7, new lemongine.Vector3(a.x + d.x * p, a.y + a.height - (c.height - d.get_bottom()) * p, f), new lemongine.Point(c.x + d.x, c.y + d.get_bottom()), new lemongine.Point(d.width, c.height - d.get_bottom()), new lemongine.Point(a.width - (c.width - d.width) * p, (c.height - d.get_bottom()) * p), null, null, g);
        this.updateQuad(b + 8, new lemongine.Vector3(a.x + a.width - (c.width - d.get_right()) * p, a.y + a.height - (c.height - d.get_bottom()) * p, f), new lemongine.Point(c.x + d.get_right(), c.y + d.get_bottom()), new lemongine.Point(c.width - d.get_right(), c.height - d.get_bottom()), new lemongine.Point((c.width - d.get_right()) * p, (c.height - d.get_bottom()) * p), null, null, g);
        return b;
    },
    remove9Slice: function (b, a) {
        null == a && (a = !0);
        this.removeQuad(b, a);
        this.removeQuad(b + 1, a);
        this.removeQuad(b + 2, a);
        this.removeQuad(b + 3, a);
        this.removeQuad(b + 4, a);
        this.removeQuad(b + 5, a);
        this.removeQuad(b + 6, a);
        this.removeQuad(b + 7, a);
        this.removeQuad(b + 8, a);
    },
    __class__: lemongine.QuadPoolEntity
})
lemongine.QuadPoolEntity.defaultUVs = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]